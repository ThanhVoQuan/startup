import { FolderService } from './folder.service';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Folder } from './folder.entity';


@Controller('v1/folders')
export class FoldersController {
    constructor(private readonly FolderService: FolderService) {

    }
  
    @Get()
    findAll(): Promise<Folder[]> {
      return this.FolderService.findAll()
    }
  
    // @Get(':id')
    // get(@Param() params) {
    //   return this.FolderService.findOneBy(params.id);
    // }
  
    @Post()
    create(@Body() folder: Folder) {
    
      console.log(folder);
      return this.FolderService.create(folder);
    }
  
    @Put()
    update(@Body() folder: Folder) {
      return this.FolderService.update(folder);
    }
  
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.FolderService.delete(params.id);
    }
}
