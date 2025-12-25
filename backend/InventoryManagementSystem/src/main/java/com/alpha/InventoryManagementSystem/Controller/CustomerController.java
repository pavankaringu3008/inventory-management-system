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

import com.alpha.InventoryManagementSystem.DTO.CustomerDTO;
import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;
import com.alpha.InventoryManagementSystem.Entity.Customer;
import com.alpha.InventoryManagementSystem.Service.Customerservice;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private Customerservice customerservice;

    @PostMapping
    public ResponseEntity<ResponseStructure<Customer>> saveCustomer(
            @Valid @RequestBody CustomerDTO dto) {
        return customerservice.saveCustomer(dto);
    }

    @GetMapping
    public List<Customer> customerList() {
        return customerservice.getAllCustomers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseStructure<Customer>> findCustomer(
            @PathVariable int id) {
        return customerservice.getCustomerById(id);
    }


    @PutMapping("/{id}")
    public ResponseEntity<ResponseStructure<Customer>> updateCustomer(
            @PathVariable int id,
            @Valid @RequestBody CustomerDTO dto) {
        return customerservice.updateCustomerById(id, dto);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseStructure<Customer>> deleteCustomer(
            @PathVariable int id) {
        return customerservice.removeCustomer(id);
    }
}
   

