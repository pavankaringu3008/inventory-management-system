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
import jakarta.validation.constraints.Email;

@Entity
public class WareHouse {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false,unique = true)
	private String name;
	@Column(nullable = false,unique = true)
	private String Address;
	@Email
	private String email;
	
	@Cascade(CascadeType.ALL)
	@OneToOne
	@JsonIgnore
	private Supplier supplier;
	
	@Cascade(CascadeType.ALL)
	@OneToOne	
	@JsonIgnore
	private Products products;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public Products getProducts() {
		return products;
	}

	public void setProducts(Products products) {
		this.products = products;
	}

	public WareHouse(int id, String name, String address, String email, Supplier supplier, Products products) {
		super();
		this.id = id;
		this.name = name;
		Address = address;
		this.email = email;
		this.supplier = supplier;
		this.products = products;
	}

	public WareHouse() {
		super();
	}

}
