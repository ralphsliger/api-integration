import { Body, Controller, Post } from '@nestjs/common';
import { Message } from './messages.entity';
import { MessagesService } from './messages.service';


@Controller('transtaction')
export class MessagesController {

  constructor(private readonly messageService: MessagesService) {}

  @Post("rejected")
  async createApproved(@Body() createMessageDto: Message) {
    return this.messageService.create(createMessageDto);
  }

  @Post("approved")
  async createRejected(@Body() createMessageDto: Message) {
    return this.messageService.create(createMessageDto);
  }

}
