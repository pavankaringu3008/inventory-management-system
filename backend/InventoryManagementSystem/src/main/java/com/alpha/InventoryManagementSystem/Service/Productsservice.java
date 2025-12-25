package com.alpha.InventoryManagementSystem.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.alpha.InventoryManagementSystem.DTO.ProductDTO;
import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;
import com.alpha.InventoryManagementSystem.Entity.Products;
import com.alpha.InventoryManagementSystem.Exceptions.ProductNotFoundException;
import com.alpha.InventoryManagementSystem.Repository.Productsrepo;

@Service
public class Productsservice {

	@Autowired
	private Productsrepo productsrepo;

	// 1. save of Product
	public ResponseEntity<ResponseStructure<Products>> saveProduct(ProductDTO productdto) {
		Products pr = new Products();
		pr.setName(productdto.getName());
		pr.setDetails(productdto.getDetails());
		productsrepo.save(pr);
		ResponseStructure<Products> rs = new ResponseStructure<Products>();
		rs.setData(pr);
		rs.setHttpsessioncode(HttpStatus.CREATED.value());
		rs.setMessage("Product created successfully !!!");
		return new ResponseEntity<ResponseStructure<Products>>(rs, HttpStatus.CREATED);
	}

	// 2. delete of Product
	public ResponseEntity<ResponseStructure<Products>> deleteProduct(int id) {
		Optional<Products> pr = productsrepo.findById(id);
		if (!pr.isPresent()) {
			throw new ProductNotFoundException();
		}
		productsrepo.delete(pr.get());
		ResponseStructure<Products> rs = new ResponseStructure<Products>();
		rs.setData(pr.get());
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Product deleted successfully");
		return new ResponseEntity<ResponseStructure<Products>>(rs, HttpStatus.OK);
	}

	// 3.finding Product
	public ResponseEntity<ResponseStructure<Products>> getProduct(int id) {
		Optional<Products> pr = productsrepo.findById(id);
		if (!pr.isPresent()) {
			throw new ProductNotFoundException();
		}
		ResponseStructure<Products> rs = new ResponseStructure<Products>();
		rs.setData(pr.get());
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Product there !!!");
		return new ResponseEntity<ResponseStructure<Products>>(rs, HttpStatus.OK);
	}

	// 4. list of Products
	public List<Products> listofProducts() {
		return productsrepo.findAll();
	}

	// 5.update Product by id
	public ResponseEntity<ResponseStructure<Products>> updateProductById(int id, ProductDTO pro) {
		Optional<Products> pr = productsrepo.findById(id);
		if (!pr.isPresent()) {
			throw new ProductNotFoundException();
		}
		Products exist = pr.get();
		exist.setName(pro.getName());
		exist.setDetails(pro.getDetails());
		productsrepo.save(exist);
		ResponseStructure<Products> rs = new ResponseStructure<Products>();
		rs.setData(exist);
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Product updated succesfully !!!");
		return new ResponseEntity<ResponseStructure<Products>>(rs, HttpStatus.OK);

	}
}
