package com.example.kafka.service;

import com.example.kafka.dto.Message;
import com.fasterxml.jackson.databind.util.JSONPObject;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class EventConsumerService {

    @KafkaListener(topics = "transactions", groupId = "group_id")
    public void listener(String message) {
        System.out.println("::::::::::: ---   Received message: ------   " + message);
    }
}
