import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'zelify', 
      password: 'zelify',
      database: 'mydatabase',
      autoLoadEntities: true,
      synchronize: true
    }),
    MessagesModule
  ],  
})
export class AppModule {}
