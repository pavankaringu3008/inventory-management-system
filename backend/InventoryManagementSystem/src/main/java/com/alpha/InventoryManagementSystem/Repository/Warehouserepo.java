package com.alpha.InventoryManagementSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpha.InventoryManagementSystem.Entity.WareHouse;

@Repository
public interface Warehouserepo extends JpaRepository<WareHouse, Integer>{

}
