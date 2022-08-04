import { Inject, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/createArticleDto';
import { Article } from './entity/article.entity';
import { ArticleRepositoryInterface } from './interface/article.repository.interface';
import { ArticleServiceInterface } from './interface/article.service.interface';

@Injectable()
export class ArticleService implements ArticleServiceInterface {
  constructor(
    @Inject('ArticleRepositoryInterface')
    private readonly articleRepository: ArticleRepositoryInterface,
  ) {}

  public async getArticles(): Promise<Article[]> {
    return this.articleRepository.findAll();
  }

  public async createArticle(articleDto: CreateArticleDto): Promise<Article> {
    const { title, text } = articleDto;
    const article = new Article(title, text);

    return this.articleRepository.create(article);
  }
}
