import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { FidelityCardProgramsModule } from './fidelity-card-programs/fidelity-card-programs.module';
import { StampsModule } from './stamps/stamps.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      debug: false,
      playground: true,
    }),

    UsersModule,

    AuthModule,

    CustomersModule,

    FidelityCardProgramsModule,

    StampsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
