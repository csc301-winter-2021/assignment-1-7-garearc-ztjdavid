package com.csc301.chckout.chechoutAPI.Util;

import com.csc301.chckout.chechoutAPI.Entity.Order;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.UUID;

@Component
public class OrderUtils {
    public void fillAll(Order order){
        fillDate(order);
        fillUUID(order);
    }

    public void fillUUID(Order order){
        order.setUuid(UUID.randomUUID().toString());
    }

    public void fillDate(Order order){
        String date = new SimpleDateFormat("yyyyMMdd_HHmm")
                .format(Calendar.getInstance().getTime());
        order.setDate(date);
    }
}
