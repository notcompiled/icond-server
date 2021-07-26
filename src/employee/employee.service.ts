import { Injectable } from '@nestjs/common';
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

    async register(data: EmployeeDto) {
        const loginId = await this.loginService.register(data);
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
}
