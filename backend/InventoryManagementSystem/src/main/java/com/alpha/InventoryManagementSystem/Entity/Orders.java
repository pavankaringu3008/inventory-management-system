package com.alpha.InventoryManagementSystem.Entity;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String ordername;
	private String orderdetails;
	@Column(nullable = false)
	private int quantity;
	@Column(nullable = false)
	private double price;
	private String orderdate;
	private String status = "Available";
	private double totalprice;

	@Cascade(CascadeType.ALL)
	@OneToOne
	private Products product;

	@Cascade(CascadeType.ALL)
	@OneToOne
	@JsonIgnore
	private Customer customer;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getOrdername() {
		return ordername;
	}

	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}

	public String getOrderdetails() {
		return orderdetails;
	}

	public void setOrderdetails(String orderdetails) {
		this.orderdetails = orderdetails;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getOrderdate() {
		return orderdate;
	}

	public void setOrderdate(String orderdate) {
		this.orderdate = orderdate;
	}

	public double getTotalprice() {
		return totalprice;
	}

	public void setTotalprice(double totalprice) {
		this.totalprice = totalprice;
	}

	public Products getProduct() {
		return product;
	}

	public void setProduct(Products product) {
		this.product = product;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Orders(int id, String ordername, String orderdetails, int quantity, double price, String orderdate,
			String status, double totalprice, Products product, Customer customer) {
		super();
		this.id = id;
		this.ordername = ordername;
		this.orderdetails = orderdetails;
		this.quantity = quantity;
		this.price = price;
		this.orderdate = orderdate;
		this.status = status;
		this.totalprice = totalprice;
		this.product = product;
		this.customer = customer;
	}

	public Orders() {
		super();
	}

}
