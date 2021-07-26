import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginService } from 'src/login/login.service';
import { EmployeeDto } from './employee.dto';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
        private readonly loginService: LoginService
    ){}

    async insert(data: EmployeeDto) {
        const loginId = await this.loginService.registerEmployee(data);
        const newEmployee = new this.employeeModel({
            name: data.name,
            cpf: data.cpf,
            phone: data.phone,
            email: data.email,
            payDay: data.payDay,
            isPaid: false,
            role: data.role,
            loginId
        })
        const result = await newEmployee.save();
        return result.id;
    }

    async find(id: string) {
        let user: Employee;
        try{
            user = await this.employeeModel.findOne({
                loginId: id
            });
            return { user: user.role };
        } catch (error) {
            throw new NotFoundException("Could not find user.");
        }
    }
}
