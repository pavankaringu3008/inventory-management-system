package com.alpha.InventoryManagementSystem.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.InventoryManagementSystem.Entity.Supplier;

@Repository
public interface Supplierrepo extends JpaRepository<Supplier, Integer> {

}
