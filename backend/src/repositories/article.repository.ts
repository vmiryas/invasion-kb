import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/article/entity/article.entity';
import { ArticleRepositoryInterface } from 'src/article/interface/article.repository.interface';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from './base/base.abstract.repository';

@Injectable()
export class ArticleRepository
  extends BaseAbstractRepository<Article>
  implements ArticleRepositoryInterface
{
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {
    super(articleRepository);
  }
}
