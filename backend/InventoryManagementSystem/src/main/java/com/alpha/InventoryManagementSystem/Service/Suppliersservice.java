package com.alpha.InventoryManagementSystem.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;
import com.alpha.InventoryManagementSystem.DTO.SupplierDTO;
import com.alpha.InventoryManagementSystem.Entity.Supplier;
import com.alpha.InventoryManagementSystem.Exceptions.SupplierNotFoundException;
import com.alpha.InventoryManagementSystem.Repository.Supplierrepo;

@Service
public class Suppliersservice {

	@Autowired
	private Supplierrepo supplierrepo;

	// 1.save supplier
	public ResponseEntity<ResponseStructure<Supplier>> savesupplier(SupplierDTO supplierdto) {
		Supplier sup = new Supplier();
		sup.setName(supplierdto.getName());
		sup.setEmail(supplierdto.getEmail());
		sup.setPhoneno(supplierdto.getPhoneno());
		supplierrepo.save(sup);
		ResponseStructure<Supplier> rs = new ResponseStructure<Supplier>();
		rs.setData(sup);
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Supplier Created Successfully");
		return new ResponseEntity<ResponseStructure<Supplier>>(rs, HttpStatus.OK);
	}

	// 2.delete supplier
	public ResponseEntity<ResponseStructure<Supplier>> deleteSupplier(int id) {
		Optional<Supplier> sup = supplierrepo.findById(id);
		if (!sup.isPresent()) {
			throw new SupplierNotFoundException();
		}
		supplierrepo.delete(sup.get());
		ResponseStructure<Supplier> rs = new ResponseStructure<Supplier>();
		rs.setData(sup.get());
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Supplier deleted Successfully");
		return new ResponseEntity<ResponseStructure<Supplier>>(rs, HttpStatus.OK);
	}

	// 3.find supplier by id
	public ResponseEntity<ResponseStructure<Supplier>> getSupplier(int id) {
		Optional<Supplier> supplier = supplierrepo.findById(id);
		if (!supplier.isPresent()) {
			throw new SupplierNotFoundException();
		}
		ResponseStructure<Supplier> rs = new ResponseStructure<Supplier>();
		rs.setData(supplier.get());
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Supplier data fetched");
		return new ResponseEntity<ResponseStructure<Supplier>>(rs, HttpStatus.OK);
	}

	// 4.list of Supplier
	public List<Supplier> listOfSupplier() {
		return supplierrepo.findAll();
	}
    //5.Update Supplier by id
	public ResponseEntity<ResponseStructure<Supplier>> updateSupplierbyid(int id, SupplierDTO su) {
		Optional<Supplier> supplier = supplierrepo.findById(id);
		if (!supplier.isPresent()) {
			throw new SupplierNotFoundException();
		}
		Supplier exist = supplier.get();
		exist.setName(su.getName());
		exist.setEmail(su.getEmail());
		exist.setPhoneno(su.getPhoneno());
		supplierrepo.save(exist);
		ResponseStructure<Supplier> rs = new ResponseStructure<Supplier>();
		rs.setData(exist);
		rs.setHttpsessioncode(HttpStatus.ACCEPTED.value());
		rs.setMessage("Supplier data is Updated");
		return new ResponseEntity<ResponseStructure<Supplier>>(rs, HttpStatus.ACCEPTED);
	}

}
