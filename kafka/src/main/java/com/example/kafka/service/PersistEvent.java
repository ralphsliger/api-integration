package com.example.kafka.service;

import com.example.kafka.dto.Message;

public interface PersistEvent {
    void persist(Message event);
}
