package com.csc301.chckout.chechoutAPI.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Response<T> {
    private T metadata;
    private String responseTime = null;
    private int code = 200;
}
