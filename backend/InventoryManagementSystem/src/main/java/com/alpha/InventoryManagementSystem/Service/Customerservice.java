package com.alpha.InventoryManagementSystem.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.alpha.InventoryManagementSystem.DTO.CustomerDTO;
import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;
import com.alpha.InventoryManagementSystem.Entity.Customer;
import com.alpha.InventoryManagementSystem.Exceptions.CustomeNotFoundException;
import com.alpha.InventoryManagementSystem.Repository.Customerrepo;

@Service
public class Customerservice {

	@Autowired
	private Customerrepo customerrepo;

	// 1.Save Customer
	public ResponseEntity<ResponseStructure<Customer>> saveCustomer(CustomerDTO cdto) {
		Customer c = new Customer();
		c.setName(cdto.getName());
		c.setEmail(cdto.getEmail());
		c.setPhonenumber(cdto.getPhonenumber());
		c.setDescription(cdto.getDescription());
		customerrepo.save(c);
		ResponseStructure<Customer> rs = new ResponseStructure<Customer>();
		rs.setData(c);
		rs.setHttpsessioncode(HttpStatus.CREATED.value());
		rs.setMessage("Customer created successfully");
		return new ResponseEntity<ResponseStructure<Customer>>(rs, HttpStatus.CREATED);

	}

	// 2.Delete Customer
	public ResponseEntity<ResponseStructure<Customer>> removeCustomer(int id) {
		Optional<Customer> c = customerrepo.findById(id);
		if (!c.isPresent()) {
			throw new CustomeNotFoundException();
		}
		customerrepo.delete(c.get());
		ResponseStructure<Customer> rs = new ResponseStructure<Customer>();
		rs.setData(c.get());
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Customer deleted successfully");
		return new ResponseEntity<ResponseStructure<Customer>>(rs, HttpStatus.OK);

	}

	// 3.Find Customer
	public ResponseEntity<ResponseStructure<Customer>> getCustomerById(int id) {
		Optional<Customer> cu = customerrepo.findById(id);
		if (!cu.isPresent()) {
			throw new CustomeNotFoundException();
		}
		Customer c = cu.get();
		ResponseStructure<Customer> rs = new ResponseStructure<Customer>();
		rs.setData(c);
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Customer retrieved successfully");
		return new ResponseEntity<ResponseStructure<Customer>>(rs, HttpStatus.OK);
	}

	// 4.list of customers
	public List<Customer> getAllCustomers() {
		return customerrepo.findAll();
	}

	// 5.Update Customer
	public ResponseEntity<ResponseStructure<Customer>> updateCustomerById(int id, CustomerDTO dto) {
		Optional<Customer> cu = customerrepo.findById(id);
		if (!cu.isPresent()) {
			throw new CustomeNotFoundException();
		}
		Customer c = cu.get();
		c.setName(dto.getName());
		c.setEmail(dto.getEmail());
		c.setDescription(dto.getDescription());
		c.setPhonenumber(dto.getPhonenumber());
		customerrepo.save(c);
		ResponseStructure<Customer> rs = new ResponseStructure<Customer>();
		rs.setData(c);
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Customer updated successfully");
		return new ResponseEntity<ResponseStructure<Customer>>(rs, HttpStatus.OK);

	}
}
