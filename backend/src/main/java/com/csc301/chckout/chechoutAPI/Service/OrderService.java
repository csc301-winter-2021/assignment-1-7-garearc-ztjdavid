package com.csc301.chckout.chechoutAPI.Service;

import com.csc301.chckout.chechoutAPI.DAO.OrderDAO;
import com.csc301.chckout.chechoutAPI.Entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderDAO orderDAO;

    public List<Order> getOrderByUUID(String uuid){
        return orderDAO.get(uuid);
    }

    public Boolean addNewOrder(Order order){
        return orderDAO.add(order);
    }
}
