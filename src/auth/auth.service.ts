import { ConflictException, Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { UsersRepository } from './auth.repository';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService){}
    
    async signUp(authCredentialsDto:AuthCredentialsDto) : Promise<{token:string, username:string} | void> {
        try{
  const data =  await UsersRepository.singUp(authCredentialsDto)
  const token =  this.jwtService.sign({
    id:data.id
  })
  return {username:data.username,token}
        }catch(e){
            throw new ConflictException('user already exist')
        }
    }

    async signIn(authCredentialsDto:AuthCredentialsDto) : Promise<{token:string, username:string} | void> {
        try{
        const data = await UsersRepository.singIn(authCredentialsDto)
        const token = this.jwtService.sign({
            id:data.id
        })

        return {username:data.username,token}
       
        }catch(e){
            throw new ConflictException('user or password is wron')

        }
    } 
}
