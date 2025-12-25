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
import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;
import com.alpha.InventoryManagementSystem.DTO.SupplierDTO;
import com.alpha.InventoryManagementSystem.Entity.Supplier;
import com.alpha.InventoryManagementSystem.Service.Suppliersservice;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/suppliers")
public class SupplierController {

    @Autowired
    private Suppliersservice supplierservice;

    @PostMapping
    public ResponseEntity<ResponseStructure<Supplier>> saveSupplier(
            @Valid @RequestBody SupplierDTO dto) {
        return supplierservice.savesupplier(dto);
    }

    @GetMapping
    public List<Supplier> listSuppliers() {
        return supplierservice.listOfSupplier();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseStructure<Supplier>> getSupplier(
            @PathVariable int id) {
        return supplierservice.getSupplier(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseStructure<Supplier>> updateSupplier(
            @PathVariable int id,
            @Valid @RequestBody SupplierDTO dto) {
        return supplierservice.updateSupplierbyid(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseStructure<Supplier>> deleteSupplier(
            @PathVariable int id) {
        return supplierservice.deleteSupplier(id);
    }
}
