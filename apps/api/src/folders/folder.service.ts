import { Folder } from './folder.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class FolderService {
    constructor(
    @InjectRepository(Folder)
        private readonly folderRepo: Repository<Folder>,
    ) {}

    async findAll (): Promise<Folder[]> {
        return await this.folderRepo.find();
    }

    // async findOne (id: number): Promise<Folder> {
    //     return await this.folderRepo.findOne(id)
    //   }

    async create (folder: Folder): Promise<Folder> {
        return await this.folderRepo.save(folder)
    }
    
    

    async update(folder: Folder): Promise<UpdateResult> {
        return await this.folderRepo.update(folder.id, folder);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.folderRepo.delete(id);
    }
}