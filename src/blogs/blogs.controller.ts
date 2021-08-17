import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { Blog } from './schemas/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  async create(@Body() createBookDto: CreateBlogDto): Promise<Blog> {
    return await this.blogsService.create(createBookDto);
  }

  @Get()
  async getAll(): Promise<Blog[]> {
    return await this.blogsService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Blog> {
    return await this.blogsService.findById(id);
  }
}
