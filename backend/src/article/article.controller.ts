import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateArticleDto } from './dto/createArticleDto';
import { Article } from './entity/article.entity';
import { ArticleServiceInterface } from './interface/article.service.interface';

@Controller('articles')
export class ArticleController {
  constructor(
    @Inject('ArticleServiceInterface')
    private readonly articleService: ArticleServiceInterface,
  ) {}

  @Get()
  public async getArticles(): Promise<Article[]> {
    return await this.articleService.getArticles();
  }

  @Post()
  public async create(@Body() articleDto: CreateArticleDto): Promise<Article> {
    return await this.articleService.createArticle(articleDto);
  }
}
