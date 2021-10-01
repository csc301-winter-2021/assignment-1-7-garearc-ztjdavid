package com.csc301.chckout.chechoutAPI.Service;

import com.csc301.chckout.chechoutAPI.DAO.OrderDAO;
import com.csc301.chckout.chechoutAPI.Entity.Order;
import com.csc301.chckout.chechoutAPI.Entity.OrderSummary;
import com.csc301.chckout.chechoutAPI.Entity.Record;
import com.csc301.chckout.chechoutAPI.Util.OrderUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    @Autowired
    private OrderDAO orderDAO;
    @Autowired
    private OrderUtils orderUtils;

    public List<Order> getOrderByUUID(String uuid){
        return orderDAO.get(uuid);
    }

    public String addNewOrder(Order order){
        orderUtils.fillAll(order);
        return orderDAO.add(order);
    }

    public List<Record> getRecords(){
        return orderDAO.getCopy().stream()
                .map(order -> new Record(order.getUuid(), order.getDate()))
                .collect(Collectors.toList());
    }

    public OrderSummary getSummary(String uuid){
        List<Order> oL = getOrderByUUID(uuid);
        if(oL.isEmpty()) return null;
        return orderUtils.getSummary(oL.get(0));
    }
}
