package com.example.kafka.service;

import com.example.kafka.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class RejectedService implements PersistEvent {

    private final RestTemplate restTemplate;

    @Override
    public void persist(Message event) {
        restTemplate.postForEntity("http://localhost:3000/transtaction/approved", event, Message.class);
        System.out.println("rejected");
    }
}
