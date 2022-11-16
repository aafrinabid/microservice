import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authServices:AuthService){}
    @GrpcMethod('AuthServices','SignUp')
    async signUp(authCredentialsDto: AuthCredentialsDto) {
        try{

            const data= await this.authServices.signUp(authCredentialsDto)
            return data
        }catch(e){
            return {message:e.response.message}
        }
    }

    @GrpcMethod('AuthServices')
    async signIn(authCredentialsDto: AuthCredentialsDto) {
        try{

            return await this.authServices.signIn(authCredentialsDto)
        }catch(e){
            console.log(e.response)
            return {message:e.response.message}
        }
    }
}
