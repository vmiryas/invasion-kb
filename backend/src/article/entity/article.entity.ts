import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'articles' })
export class Article {
  @ObjectIdColumn()
  id: number;

  @Column({
    type: 'string',
  })
  title: string;

  @Column({
    type: 'string',
  })
  text: string;

  @Column({
    type: 'date',
  })
  createdAt: any;

  @Column({
    type: 'date',
  })
  updatedAt: any;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
