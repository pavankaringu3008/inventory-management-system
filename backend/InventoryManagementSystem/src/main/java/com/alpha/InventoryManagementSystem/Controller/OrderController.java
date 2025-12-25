package com.alpha.InventoryManagementSystem.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alpha.InventoryManagementSystem.DTO.OrdersDTO;
import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;
import com.alpha.InventoryManagementSystem.Entity.Orders;
import com.alpha.InventoryManagementSystem.Service.Orderservice;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private Orderservice orderservice;

    @PostMapping
    public ResponseEntity<ResponseStructure<Orders>> createOrder(
            @Valid @RequestBody OrdersDTO dto) {
        return orderservice.saveorder(dto);
    }

    @GetMapping
    public List<Orders> listOrders() {
        return orderservice.getAllOrders();
    }

    @GetMapping("/{id}")
    public Orders getOrder(@PathVariable int id) {
        return orderservice.getOrder(id);
    }

    @PutMapping("/{oid}/product/{pid}/customer/{cid}")
    public ResponseEntity<ResponseStructure<Orders>> confirmOrder(
            @PathVariable int oid,
            @PathVariable int pid,
            @PathVariable int cid) {
        return orderservice.updateorder(pid, oid, cid);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseStructure<Orders>> updateOrder(
            @PathVariable int id,
            @Valid @RequestBody OrdersDTO dto) {
        return orderservice.updateOrderById(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseStructure<Orders>> cancelOrder(
            @PathVariable int id) {
        return orderservice.cancellorder(id);
    }
}
