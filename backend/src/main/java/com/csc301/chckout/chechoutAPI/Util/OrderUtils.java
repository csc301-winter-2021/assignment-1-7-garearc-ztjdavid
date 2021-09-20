package com.csc301.chckout.chechoutAPI.Util;

import com.csc301.chckout.chechoutAPI.Entity.Item;
import com.csc301.chckout.chechoutAPI.Entity.Order;
import com.csc301.chckout.chechoutAPI.Entity.OrderSummary;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
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

    public OrderSummary getSummary(Order order){
        return new OrderSummary(calculateTotal(order.getOrderList()));
    }
    private double calculateTotal(List<Item> items){
        double total = 0;
        for(Item i: items){
            total += calculateSingle(i);
        }
        return total;
    }
    private double calculateSingle(Item item){
        return item.getPrice()
                * item.getQuantity()
                * (item.isTaxed()? 1.13 : 1)
                * (1 - item.getDiscount());
    }
}
