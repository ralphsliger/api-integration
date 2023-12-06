package com.example.kafka.service;

import com.example.kafka.dto.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RejectedService implements PersistEvent {

    @Override
    public void persist(Message event) {
        System.out.println("rejected");
    }
}
