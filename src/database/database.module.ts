import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get(
          'MONGO_USERNAME',
        )}:${configService.get(
          'MONGO_PASSWORD',
        )}@mern.2irp0.mongodb.net/${configService.get(
          'MONGO_DATABASE',
        )}?retryWrites=true&w=majority`,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
