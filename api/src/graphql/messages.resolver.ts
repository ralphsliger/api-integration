import { Resolver, Query, Field, ObjectType } from "@nestjs/graphql";
import { MessageType } from "./models/message.model";
import { MessagesService } from "src/messages/messages.service";

@ObjectType()
class MessageQueries {

  @Field(type => [MessageType])
  messages: MessageType[];

  @Field(type => [MessageType])
  approvedMessages: MessageType[];

  @Field(type => [MessageType])
  rejectedMessages: MessageType[];

}

@Resolver(of => MessageQueries)
export class MessagesResolver {

  constructor(private messagesService: MessagesService) {}

  @Query(returns => MessageQueries)
  async messageQueries() {

    const allMessages = await this.messagesService.findAll();
    
    const approvedMessages = allMessages.filter(m => m.status === "APPROVED");
    
    const rejectedMessages = allMessages.filter(m => m.status === "REJECTED");

    return {
      messages: allMessages,
      approvedMessages,
      rejectedMessages  
    };

  }

}