package com.csc301.chckout.chechoutAPI.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
public class Order {
    @JsonProperty(value = "uuid")
    private String uuid;
    @JsonProperty(value = "orderList")
    private List<Item> orderList;
    @JsonProperty(value = "client")
    private String client = "Unknown Client";
    @JsonProperty(value = "date")
    private String date = "";
}
