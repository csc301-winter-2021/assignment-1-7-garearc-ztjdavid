package com.csc301.chckout.chechoutAPI.Resource;

import com.csc301.chckout.chechoutAPI.Entity.Order;
import com.csc301.chckout.chechoutAPI.Entity.OrderSummary;
import com.csc301.chckout.chechoutAPI.Entity.Record;
import com.csc301.chckout.chechoutAPI.Entity.Response;
import com.csc301.chckout.chechoutAPI.Service.OrderService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 10000)
@RequestMapping("/api")
public class OrderResource {
    @Autowired
    private OrderService orderService;

    @PostMapping("/order")
    public Response<Boolean> addNewOrder(@RequestBody Order order){
        Response<Boolean> res = new Response<>();
        res.setMetadata(orderService.addNewOrder(order));
        return res;
    }

    @GetMapping("/order/{uuid}")
    public Response<List<Order>> getOrder(@PathVariable String uuid){
        Response<List<Order>> res = new Response<>();
        res.setMetadata(orderService.getOrderByUUID(uuid));
        return res;
    }

    @GetMapping("/order/records")
    public Response<List<Record>> getRecords(){
        Response<List<Record>> res = new Response<>();
        res.setMetadata(orderService.getRecords());
        return res;
    }

    @GetMapping("/order/summary/{uuid}")
    public Response<OrderSummary> getSummary(@PathVariable String uuid){
        Response<OrderSummary> res = new Response<>();
        res.setMetadata(orderService.getSummary(uuid));
        return res;
    }

}
