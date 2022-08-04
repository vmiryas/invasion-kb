import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entity/article.entity';
import { ArticleController } from './article.controller';
import { ArticleRepository } from 'src/repositories/article.repository';
import { ArticleService } from './article.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [
    {
      provide: 'ArticleRepositoryInterface',
      useClass: ArticleRepository,
    },
    {
      provide: 'ArticleServiceInterface',
      useClass: ArticleService,
    },
  ],
  controllers: [ArticleController],
})
export class ArticleModule {}
