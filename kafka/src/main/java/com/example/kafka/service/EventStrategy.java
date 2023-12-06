package com.example.kafka.service;

import com.example.kafka.dto.Message;
import com.example.kafka.enums.Status;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EventStrategy {

    private final RejectedService rejectedService;
    private final ApproverService approverService;

    public void handleMessage(String state, Message message) {

        if (Status.APPROVED.name().equalsIgnoreCase(state)) {
            approverService.persist(message);
        }

        if (Status.REJECTED.name().equalsIgnoreCase(state)) {
            rejectedService.persist(message);
        }


    }
}
