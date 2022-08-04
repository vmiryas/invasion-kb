import { BaseInterfaceRepository } from '../../repositories/base/base.interface.repository';
import { Article } from '../entity/article.entity';

export type ArticleRepositoryInterface = BaseInterfaceRepository<Article>;
