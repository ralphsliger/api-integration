"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_entity_1 = require("./messages.entity");
const messages_service_1 = require("./messages.service");
let MessagesController = class MessagesController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    async createApproved(createMessageDto) {
        return this.messageService.create(createMessageDto);
    }
    async createRejected(createMessageDto) {
        return this.messageService.create(createMessageDto);
    }
};
exports.MessagesController = MessagesController;
__decorate([
    (0, common_1.Post)("rejected"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [messages_entity_1.Message]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "createApproved", null);
__decorate([
    (0, common_1.Post)("approved"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [messages_entity_1.Message]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "createRejected", null);
exports.MessagesController = MessagesController = __decorate([
    (0, common_1.Controller)('transtaction'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);
//# sourceMappingURL=messages.controller.js.map