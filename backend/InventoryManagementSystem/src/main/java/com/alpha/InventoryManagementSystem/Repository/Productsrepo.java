package com.alpha.InventoryManagementSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.InventoryManagementSystem.Entity.Products;

@Repository
public interface Productsrepo extends JpaRepository<Products, Integer> {

}
