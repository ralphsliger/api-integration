package com.example.kafka.service;

import com.example.kafka.dto.Message;
import org.springframework.stereotype.Service;

@Service
public class ApproverService implements PersistEvent{

    @Override
    public void persist(Message event) {
        System.out.println("approved");
    }
}
