import { Article } from '../entity/article.entity';
import { CreateArticleDto } from '../dto/createArticleDto';

export interface ArticleServiceInterface {
  createArticle(articleDto: CreateArticleDto): Promise<Article>;
  getArticles(): Promise<Article[]>;
}
