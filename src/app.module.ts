import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { NoteController } from './controller/note.controller';
import { NoteService } from './service/note.service';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { SharedNoteController } from './controller/sharednote.controller';
import { SharedNoteService } from './service/sharednote.service';
import { User } from './entity/user.entity';
import { Note } from './entity/notes.entity';
import { SharedNote } from './entity/sharednotes.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        // name: "user",
        type: 'mysql',          // database type [mysql, postgres, mariadb]
        host: 'localhost',        // local machine
        port: 3306,       
        username: 'root',
        password: 'root',       
        database: 'demo',     // database name 
        synchronize: true,    // it would be false in production 
        entities: [User, Note, SharedNote],  // make it running with * and js and ts entities
        autoLoadEntities: true,   // entities will be loaded automatically
      }),
    }),
    TypeOrmModule.forFeature([User]),       // user entity injected
    TypeOrmModule.forFeature([Note]),       // note entity injected
    TypeOrmModule.forFeature([SharedNote]),   // shared note entity injected
  ],
  controllers: [UserController, NoteController, SharedNoteController],
  providers: [UserService, NoteService, SharedNoteService],
})

export class AppModule { }
