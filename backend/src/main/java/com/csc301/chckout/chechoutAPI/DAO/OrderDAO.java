package com.csc301.chckout.chechoutAPI.DAO;

import com.csc301.chckout.chechoutAPI.Entity.Order;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Repository
public class OrderDAO implements IDAO<Order>{
    private final List<Order> orderList = new ArrayList<>();

    @Override
    public List<Order> get(String uuid) {
        return orderList
                .stream()
                .filter(order -> order.getUuid().equals(uuid))
                .collect(Collectors.toList());
    }

    @Override
    public Boolean add(Order order) {
        try{
            orderList.add(order);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    public List<Order> getCopy(){
        return new ArrayList<>(this.orderList);
    }
}
