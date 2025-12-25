package com.alpha.InventoryManagementSystem.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.alpha.InventoryManagementSystem.DTO.OrdersDTO;
import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;
import com.alpha.InventoryManagementSystem.Entity.Customer;
import com.alpha.InventoryManagementSystem.Entity.Orders;
import com.alpha.InventoryManagementSystem.Entity.Products;
import com.alpha.InventoryManagementSystem.Enums.OrderStatus;
import com.alpha.InventoryManagementSystem.Exceptions.CustomeNotFoundException;
import com.alpha.InventoryManagementSystem.Exceptions.OrderNotFoundException;
import com.alpha.InventoryManagementSystem.Exceptions.ProductNotFoundException;
import com.alpha.InventoryManagementSystem.Repository.Customerrepo;
import com.alpha.InventoryManagementSystem.Repository.Orderrepo;
import com.alpha.InventoryManagementSystem.Repository.Productsrepo;

@Service
public class Orderservice {

	@Autowired
	private Orderrepo orderrepo;

	@Autowired
	private Productsrepo productrepo;

	@Autowired
	private Customerrepo customerrepo;

	// 1. save Order
	public ResponseEntity<ResponseStructure<Orders>> saveorder(OrdersDTO ordto) {
		Orders ord = new Orders();
		ord.setOrdername(ordto.getOrdername());
		ord.setOrderdetails(ordto.getOrderdetails());
		ord.setPrice(ordto.getPrice());
		ord.setQuantity(ordto.getQuantity());
		ord.setOrderdate(ordto.getOrderdate());
		ord.setTotalprice(ordto.getPrice() * ordto.getQuantity());
		System.err.println("--------> Done");
		ord.setStatus(OrderStatus.PENDING.name());
		orderrepo.save(ord);
		ResponseStructure<Orders> rs = new ResponseStructure<Orders>();
		rs.setData(ord);
		rs.setHttpsessioncode(HttpStatus.CREATED.value());
		rs.setMessage("Order created succesfully !!!");
		return new ResponseEntity<ResponseStructure<Orders>>(rs, HttpStatus.CREATED);

	}

	// 2. delete order
	public ResponseEntity<ResponseStructure<Orders>> cancellorder(int id) {
		Optional<Orders> ord = orderrepo.findById(id);
		if (!ord.isPresent()) {
			throw new OrderNotFoundException();
		}
		Orders o = ord.get();
		orderrepo.delete(o);
		ResponseStructure<Orders> rs = new ResponseStructure<Orders>();
		rs.setData(ord.get());
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Order is Cancelled Successfully !!!");
		return new ResponseEntity<ResponseStructure<Orders>>(rs, HttpStatus.OK);
	}

	// 3. update order
	public ResponseEntity<ResponseStructure<Orders>> updateorder(int pid, int oid, int cid) {
		Optional<Products> prod = productrepo.findById(pid);
		Optional<Orders> ord = orderrepo.findById(oid);
		Optional<Customer> cus = customerrepo.findById(cid);
		if (!prod.isPresent()) {
			throw new ProductNotFoundException();
		}
		if (!ord.isPresent()) {
			throw new OrderNotFoundException();
		}
		if (!cus.isPresent()) {
			throw new CustomeNotFoundException();
		}
		Products p = prod.get();
		Orders o = ord.get();
		Customer c = cus.get();

		o.setProduct(p);
		o.setCustomer(c);
		
		double total = o.getPrice() * o.getQuantity();
		o.setTotalprice(total);
		o.setStatus(OrderStatus.CONFIRMED.name());
		orderrepo.save(o);

		ResponseStructure<Orders> rs = new ResponseStructure<Orders>();
		rs.setData(o);
		rs.setHttpsessioncode(HttpStatus.OK.value());
		rs.setMessage("Order is Saved with customer " + c + " and Product " + p + "  Successfully !!!");
		return new ResponseEntity<ResponseStructure<Orders>>(rs, HttpStatus.OK);
	}

	// 4. List of orders
	public List<Orders> getAllOrders() {
		return orderrepo.findAll();
	}

	// 5.find order
	public Orders getOrder(int id) {
		Optional<Orders> ord = orderrepo.findById(id);
		if (!ord.isPresent()) {
			throw new OrderNotFoundException();
		}
		return ord.get();
	}

	// 6.updating order by id
	public ResponseEntity<ResponseStructure<Orders>> updateOrderById(int id, OrdersDTO o) {
		Optional<Orders> ord = orderrepo.findById(id);
		if (!ord.isPresent()) {
			throw new OrderNotFoundException();
		}
		Orders exist = ord.get();
		exist.setOrdername(o.getOrdername());
		exist.setOrderdetails(o.getOrderdetails());
		exist.setOrderdate(o.getOrderdate());
		exist.setPrice(o.getPrice());
		exist.setQuantity(o.getQuantity());
		double total = o.getPrice() * o.getQuantity();
		exist.setTotalprice(total);
		exist.setStatus(OrderStatus.PENDING.name());
		orderrepo.save(exist);
		ResponseStructure<Orders> rs = new ResponseStructure<Orders>();
		rs.setData(exist);
		rs.setHttpsessioncode(HttpStatus.ACCEPTED.value());
		rs.setMessage("Order is updated..!");
		return new ResponseEntity<ResponseStructure<Orders>>(rs, HttpStatus.ACCEPTED);
	}
}
