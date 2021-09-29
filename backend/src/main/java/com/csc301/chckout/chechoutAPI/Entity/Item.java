package com.csc301.chckout.chechoutAPI.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    @JsonProperty(value = "name")
    private String name = "";
    @JsonProperty(value = "price")
    private double price = 0.0;
    @JsonProperty(value = "icon")
    private String icon = "coffee";
    @JsonProperty(value = "isTaxed")
    private boolean isTaxed = false;
    @JsonProperty(value = "quantity")
    private int quantity = 1;
}
