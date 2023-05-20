import { Author } from './author.model';
import { Resolver, Query, ResolveField, Int, Args, Parent } from '@nestjs/graphql';

@Resolver(of => Author)
export class AuthorsResolver {
    constructor(
    ) { }

    @Query(returns => Author)
    async author(@Args('id', { type: () => Int }) id: number) {
        console.log(`------------------- author id:${id}`);
        return new Author(id);
    }

    @ResolveField()
    async posts(@Parent() author: Author) {
        const { id } = author;
        console.log(`------------------- posts author_id:${id}`);
        return [];
    }
}

/*
{
  author(id: 1) {
    id
  }
}
------------------- author id:1


{
  author(id: 1) {
    id
    posts {
      id
    }
  }
}
------------------- author id:1
------------------- posts author_id:1
*/
