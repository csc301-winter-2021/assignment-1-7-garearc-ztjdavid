package com.csc301.chckout.chechoutAPI;

import com.csc301.chckout.chechoutAPI.Entity.Order;
import com.csc301.chckout.chechoutAPI.Entity.Response;
import com.csc301.chckout.chechoutAPI.Resource.OrderResource;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

import java.util.List;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class OrderResourceTest {
    @Autowired
    private OrderResource orderResource;
    @LocalServerPort
    private int port;
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void componentExists() {
        assertThat(orderResource).isNotNull();
    }

    @Test
    public void returnList() {
        String url = "http://localhost:" + port + "/api/order/records";
        assertThat(this.restTemplate.getForObject(url, Response.class).getMetadata()).isInstanceOf(List.class);
    }

    @Test
    public void returnRecordList() {
        Order order = new Order();
        this.orderResource.addNewOrder(order);
        String url = "http://localhost:" + port + "/api/order/records";
        assertThat(((List<?>)this.restTemplate.getForObject(url, Response.class).
                getMetadata())
                .get(0)
                .toString())
                .contains("uuid")
                .contains("date");
    }

}
