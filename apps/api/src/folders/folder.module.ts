import { FolderService } from './folder.service';
import { Module } from '@nestjs/common';
import { FoldersController } from './folder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folder } from './folder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Folder])],
  controllers: [FoldersController],
  providers: [FolderService],
})
export class FoldersModule {}
