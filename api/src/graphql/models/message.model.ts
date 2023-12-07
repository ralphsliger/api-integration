import { ObjectType, Field, Float } from "@nestjs/graphql";

@ObjectType()
export class MessageType {

  @Field()
  id: number;

  @Field()  
  status: string;
 
  @Field()  
  account: string;

  @Field(type => Float)
  amount: number;
}