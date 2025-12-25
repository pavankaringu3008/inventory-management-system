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
import com.alpha.InventoryManagementSystem.DTO.WareHouseDTO;
import com.alpha.InventoryManagementSystem.Entity.WareHouse;
import com.alpha.InventoryManagementSystem.Service.WareHouseservice;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/warehouse")
public class InventoryController {

    @Autowired
    private WareHouseservice warehouseservice;

    @PostMapping
    public ResponseEntity<ResponseStructure<WareHouse>> saveWarehouse(
            @Valid @RequestBody WareHouseDTO dto) {
        return warehouseservice.saveWareHouse(dto);
    }

    @GetMapping
    public List<WareHouse> getWarehouses() {
        return warehouseservice.listOfWarehouses();
    }

    @GetMapping("/{id}")
    public WareHouse getWarehouse(@PathVariable int id) {
        return warehouseservice.getWarehouse(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseStructure<WareHouse>> updateWarehouse(
            @PathVariable int id,
            @Valid @RequestBody WareHouse w) {
        return warehouseservice.updatedWareHouse(id, w);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseStructure<WareHouse>> deleteWarehouse(
            @PathVariable int id) {
        return warehouseservice.deleteWareHouse(id);
    }

    @PostMapping("/{wid}/supplier/{sid}")
    public ResponseEntity<ResponseStructure<WareHouse>> mapSupplier(
            @PathVariable int wid,
            @PathVariable int sid) {
        return warehouseservice.updateWareHouseSupplier(wid, sid);
    }

    @PostMapping("/{wid}/product/{pid}")
    public ResponseEntity<ResponseStructure<WareHouse>> mapProduct(
            @PathVariable int wid,
            @PathVariable int pid) {
        return warehouseservice.updateWareHouseProduct(wid, pid);
    }
}
