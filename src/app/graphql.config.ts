import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

const GraphQL = GraphQLModule.forRoot({
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  sortSchema: true,
  debug: false,
  playground: true,
})

export default GraphQL;
