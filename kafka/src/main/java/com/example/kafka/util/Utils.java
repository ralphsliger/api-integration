package com.example.kafka.util;

import com.example.kafka.dto.Message;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;


public class Utils {

    private Utils() {
    }

    public static Message jsonToMessage(String jsonString) {
        Gson gson = new Gson();
        JsonParser parser = new JsonParser();
        JsonObject jsonObject = parser.parse(jsonString).getAsJsonObject();

        return gson.fromJson(jsonObject, Message.class);
    }
}
