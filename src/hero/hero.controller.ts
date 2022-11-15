import { Controller, NotFoundException } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { createTaskDto } from './dto/create-task.dto';
import { updateTasStatuskDto } from './dto/update-task.dto';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

const items: Hero[] = [{ id: 1, name: 'Buy apple', status:'OPEN' }, { id: 2, name: 'Buy milk', status: 'OPEN' }];

@Controller('task')
export class HeroController {
    @GrpcMethod('TaskService')
    findOne(data: HeroById): Hero {
        console.log('happening inside microservices')
        return items.find(({ id }) => id === data.id);
    }

    @GrpcMethod('TaskService','GetAllTasks')
    getAllTasks(id:number){
        console.log(items)
        return {items:items}

    }

    @GrpcMethod('TaskService')
    createTask(createTaskDto:createTaskDto) {
        let tasklength =items.length ;
        let task = {id:tasklength+1,...createTaskDto,status:'OPEN'}
        items.push(task)
        return task

    }

    @GrpcMethod('TaskService')
    updateTaskStatus(updateTaskStatusDto:updateTasStatuskDto) {
        const {id, status} = updateTaskStatusDto
        let found = items.find((item)=>item.id===id)
        if(found){
            found.status = status
            return found
        }else{
            throw new NotFoundException('not found task for this id')
        }
    }
}
