import { Message } from './messages.entity';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messageService;
    constructor(messageService: MessagesService);
    createApproved(createMessageDto: Message): Promise<Message>;
    createRejected(createMessageDto: Message): Promise<Message>;
}
