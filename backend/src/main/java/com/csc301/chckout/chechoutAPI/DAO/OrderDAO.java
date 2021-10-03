package com.csc301.chckout.chechoutAPI.DAO;

import com.csc301.chckout.chechoutAPI.Entity.Order;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.stream.Collectors;

@Repository
public class OrderDAO implements IDAO<Order>{
    private final int max_storage = 20;
    private final Deque<Order> orderList = new LinkedList<>();

    @Override
    public List<Order> get(String uuid) {
        return orderList
                .stream()
                .filter(order -> order.getUuid().equals(uuid))
                .collect(Collectors.toList());
    }

    @Override
    public String add(Order order) {
        if(orderList.size() >= max_storage){
            orderList.pollLast();
        }
        try{
            orderList.addFirst(order);
        }catch (Exception e){
            return null;
        }
        return order.getUuid();
    }

    public List<Order> getCopy(){
        return new ArrayList<>(this.orderList);
    }
}
