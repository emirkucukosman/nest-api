import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async create(createBookDto: CreateBlogDto): Promise<Blog> {
    const createdBook = new this.blogModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async findById(_id: string): Promise<Blog> {
    return this.blogModel.findOne({ _id }).exec();
  }
}
