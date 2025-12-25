package com.alpha.InventoryManagementSystem.Entity;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;

@Entity
public class Customer {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Length(min = 4 ,max= 20)
	private String name;
	@Email
	@Column(nullable = false, unique = true)
	private String email;
	
	@Column(nullable = false,unique = true , length = 10)
	private int phonenumber;
	private String description;
 
	
	@Cascade(CascadeType.ALL)
	@OneToOne
	@JsonIgnore
	private Orders order;

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(int phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Orders getOrder() {
		return order;
	}

	public void setOrder(Orders order) {
		this.order = order;
	}

	public Customer(int id, String name, String email, int phonenumber, String description, Orders order) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phonenumber = phonenumber;
		this.description = description;
		this.order = order;
	}

	public Customer() {
		super();
	}

}
