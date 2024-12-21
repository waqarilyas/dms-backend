import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { getConfig } from './services/app-config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [getConfig],
    }),
    DbModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
