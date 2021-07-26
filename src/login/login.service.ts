import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResidentDto } from 'src/resident/resident.dto';
import { EmployeeDto } from 'src/employee/employee.dto';
import { Login } from './login.model';

@Injectable()
export class LoginService {
    constructor(
        @InjectModel('Login') private readonly loginModel: Model<Login>
    ){}

    async findByUser(username: string) {
        let login: Login;
        try{
            login = await this.loginModel.findOne({username});
        } catch(error){
            throw new NotFoundException("Invalid login.");
        }
        if (!login){
            throw new NotFoundException("Invalid login.");
        }
        return login;
    }

    async registerEmployee(data: EmployeeDto) {
        const newLogin = new this.loginModel({
            username: data.username,
            password: data.password
        })
        const result = await newLogin.save();
        return result.id;
    }

    async registerResident(data: ResidentDto) {
        const newLogin = new this.loginModel({
            username: data.username,
            password: data.password
        })
        const result = await newLogin.save();
        return result.id;
    }

    async login(username: string, password: string) {
        const user = await this.findByUser(username);
        if (user.password === password) {
            return user.id;
        }
        throw new NotFoundException("Invalid login");
    }
}
