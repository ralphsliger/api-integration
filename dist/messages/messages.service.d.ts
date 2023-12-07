import { Repository } from 'typeorm';
import { Message } from './messages.entity';
export declare class MessagesService {
    private messageRepository;
    constructor(messageRepository: Repository<Message>);
    create(createMessageDto: Message): Promise<Message>;
    findAll(): Promise<Message[]>;
}
