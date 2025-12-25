package com.alpha.InventoryManagementSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.InventoryManagementSystem.Entity.Orders;


@Repository
public interface Orderrepo extends JpaRepository<Orders, Integer> {

}
