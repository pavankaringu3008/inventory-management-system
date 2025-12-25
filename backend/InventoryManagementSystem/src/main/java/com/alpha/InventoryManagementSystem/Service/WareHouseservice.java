package com.alpha.InventoryManagementSystem.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;
import com.alpha.InventoryManagementSystem.DTO.WareHouseDTO;
import com.alpha.InventoryManagementSystem.Entity.Products;
import com.alpha.InventoryManagementSystem.Entity.Supplier;
import com.alpha.InventoryManagementSystem.Entity.WareHouse;
import com.alpha.InventoryManagementSystem.Exceptions.ProductNotFoundException;
import com.alpha.InventoryManagementSystem.Exceptions.SupplierNotFoundException;
import com.alpha.InventoryManagementSystem.Exceptions.WarehouseNotFoundException;
import com.alpha.InventoryManagementSystem.Repository.Productsrepo;
import com.alpha.InventoryManagementSystem.Repository.Supplierrepo;
import com.alpha.InventoryManagementSystem.Repository.Warehouserepo;

@Service
public class WareHouseservice {

	@Autowired
	private Warehouserepo warehouserepo;

	@Autowired
	private Supplierrepo supplierrepo;

	@Autowired
	private Productsrepo productrepo;

	// 1. Save Warehouse
	public ResponseEntity<ResponseStructure<WareHouse>> saveWareHouse(WareHouseDTO wdto) {
		WareHouse wh = new WareHouse();
		wh.setName(wdto.getName());
		wh.setEmail(wdto.getEmail());
		wh.setAddress(wdto.getAddress());
		warehouserepo.save(wh);
		ResponseStructure<WareHouse> rs = new ResponseStructure<WareHouse>();
		rs.setData(wh);
		rs.setHttpsessioncode(HttpStatus.CREATED.value());
		rs.setMessage("WareHouse Created Succesfully!!!");
		return new ResponseEntity<ResponseStructure<WareHouse>>(rs, HttpStatus.CREATED);
	}

	// 2.Delete WareHouse
	public ResponseEntity<ResponseStructure<WareHouse>> deleteWareHouse(int id) {
		Optional<WareHouse> whr = warehouserepo.findById(id);
		if (!whr.isPresent()) {
			throw new WarehouseNotFoundException();
		}
		warehouserepo.delete(whr.get());
		ResponseStructure<WareHouse> rs = new ResponseStructure<WareHouse>();
		rs.setData(whr.get());
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("WareHouse Deleted Succesfully!!!");
		return new ResponseEntity<ResponseStructure<WareHouse>>(rs, HttpStatus.OK);
	}

	// 3.Update wareHouse with Supplier
	public ResponseEntity<ResponseStructure<WareHouse>> updateWareHouseSupplier(int wid, int sid) {
		Optional<WareHouse> ware = warehouserepo.findById(wid);
		Optional<Supplier> sup = supplierrepo.findById(sid);
		if (!ware.isPresent()) {
			throw new WarehouseNotFoundException();
		}
		if (!sup.isPresent()) {
			throw new SupplierNotFoundException();
		}
		Supplier s = sup.get();
		WareHouse w = ware.get();
		w.setSupplier(s);
		s.setWarehouse(w);

		warehouserepo.save(w);
		ResponseStructure<WareHouse> rs = new ResponseStructure<WareHouse>();
		rs.setData(w);
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("WareHouse with " + s + " supplier saved Succesfully!!!");
		return new ResponseEntity<ResponseStructure<WareHouse>>(rs, HttpStatus.OK);

	}

	// 4.Update wareHouse with Products
	public ResponseEntity<ResponseStructure<WareHouse>> updateWareHouseProduct(int wid, int pid) {
		Optional<WareHouse> ware = warehouserepo.findById(wid);
		Optional<Products> prod = productrepo.findById(pid);
		if (!ware.isPresent()) {
			throw new WarehouseNotFoundException();
		}
		if (!prod.isPresent()) {
			throw new ProductNotFoundException();
		}
		WareHouse w = ware.get();
		Products p = prod.get();
		w.setProducts(p);
		p.setWarehouse(w);
//		productrepo.save(p);
		warehouserepo.save(w);
		ResponseStructure<WareHouse> rs = new ResponseStructure<WareHouse>();
		rs.setData(w);
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("WareHouse with " + p + " product saved Succesfully!!!");
		return new ResponseEntity<ResponseStructure<WareHouse>>(rs, HttpStatus.OK);
	}

	// 5.List of WareHouse
	public List<WareHouse> listOfWarehouses() {
		List<WareHouse> wrl = warehouserepo.findAll();
		return wrl;
	}

	// Get warehouse
	public WareHouse getWarehouse(int id) {
		Optional<WareHouse> wr = warehouserepo.findById(id);
		if (!wr.isPresent()) {
			throw new WarehouseNotFoundException();
		}
		WareHouse ware = wr.get();
		return ware;
	}

	// Update WareHouse
	public ResponseEntity<ResponseStructure<WareHouse>> updatedWareHouse(int id, WareHouse w) {
		Optional<WareHouse> wr = warehouserepo.findById(id);
		if (!wr.isPresent()) {
			throw new WarehouseNotFoundException();
		}
		WareHouse existing = wr.get();
		existing.setName(w.getName());
		existing.setEmail(w.getEmail());
		existing.setAddress(w.getAddress());
		warehouserepo.save(existing);
		ResponseStructure<WareHouse> rs = new ResponseStructure<WareHouse>();
		rs.setData(existing);
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("WareHouse Updated Succesfully!!!");
		return new ResponseEntity<ResponseStructure<WareHouse>>(rs, HttpStatus.OK);
	}
}
