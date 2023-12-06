package com.example.kafka.service;

import com.example.kafka.dto.Message;
import com.example.kafka.enums.Status;
import com.example.kafka.util.Utils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EventConsumerService {

    private final EventStrategy eventStrategy;

    @KafkaListener(topics = "transactions", groupId = "group_id")
    public void listener(String message) {
        Message event = Utils.jsonToMessage(message);
        eventStrategy.handleMessage(event.getStatus(), event);
        log.info(":::::::::: ---   Received message: ------   " + message);

    }
}
