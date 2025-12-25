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

import com.alpha.InventoryManagementSystem.DTO.ProductDTO;
import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;
import com.alpha.InventoryManagementSystem.Entity.Products;
import com.alpha.InventoryManagementSystem.Service.Productsservice;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private Productsservice productservice;

    @PostMapping
    public ResponseEntity<ResponseStructure<Products>> saveProduct(
            @Valid @RequestBody ProductDTO dto) {
        return productservice.saveProduct(dto);
    }

    @GetMapping
    public List<Products> listProducts() {
        return productservice.listofProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseStructure<Products>> getProduct(
            @PathVariable int id) {
        return productservice.getProduct(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseStructure<Products>> updateProduct(
            @PathVariable int id,
            @Valid @RequestBody ProductDTO dto) {
        return productservice.updateProductById(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseStructure<Products>> deleteProduct(
            @PathVariable int id) {
        return productservice.deleteProduct(id);
    }
}
