package com.alpha.InventoryManagementSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.InventoryManagementSystem.Entity.Customer;


@Repository
public interface Customerrepo extends JpaRepository<Customer, Integer> {

}
