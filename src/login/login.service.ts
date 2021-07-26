import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeService } from 'src/employee/employee.service';
import { EmployeeDto } from '../employee/employee.dto';
import { Login } from './login.model';

@Injectable()
export class LoginService {
    constructor(
        @InjectModel('Login') private readonly loginModel: Model<Login>,
        private readonly employeeService: EmployeeService
    ){}

    async register(data: EmployeeDto) {
        const newLogin = new this.loginModel({
            username: data.username,
            password: data.password
        })
        const result = await newLogin.save();
        return result.id;
    }
}
