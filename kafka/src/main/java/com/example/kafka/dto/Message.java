package com.example.kafka.dto;

import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;

@AllArgsConstructor
@Builder
@Getter
@Setter
@NoArgsConstructor
public class Message implements Serializable {

    private Integer id;
    private String status;
    private String account;
    private BigDecimal amount;

}
