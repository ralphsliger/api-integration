import { Resolver, Query } from "@nestjs/graphql";
import { MessageType } from "./models/message.model";
import { MessagesService } from "src/messages/messages.service";

@Resolver(of => MessageType) 
export class MessagesResolver {
  constructor(private messagesService: MessagesService) {}

  @Query(returns => [MessageType]) 
  async messages() {
    return this.messagesService.findAll();
  }

  @Query(returns => [MessageType])
  async approvedMessages() {
    const allMessages = await this.messagesService.findAll();
    return allMessages.filter(m => m.status === "APPROVED");
  }

  @Query(returns => [MessageType])
  async rejectedMessages() {
    const allMessages = await this.messagesService.findAll();
    return allMessages.filter(m => m.status === "REJECTED");
  }
}
