import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url:'localhost:50051',
        package:['task', 'auth'],
        protoPath:[join(__dirname,'./hero/hero.proto'), join(__dirname,'./auth/auth.proto')]
    }
}