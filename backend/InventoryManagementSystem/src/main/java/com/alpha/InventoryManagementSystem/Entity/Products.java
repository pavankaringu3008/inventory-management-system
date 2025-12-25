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
public class Products {

	@Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false, unique = true)
    private String name;
    private String details;
    
    @Cascade(CascadeType.ALL)
    @OneToOne
    @JsonIgnore
    private Orders order;
    
    @Cascade(CascadeType.ALL)
    @OneToOne
    private WareHouse warehouse;

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

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public Orders getOrder() {
		return order;
	}

	public void setOrder(Orders order) {
		this.order = order;
	}

	public WareHouse getWarehouse() {
		return warehouse;
	}

	public void setWarehouse(WareHouse warehouse) {
		this.warehouse = warehouse;
	}

	public Products(int id, String name, String details, Orders order, WareHouse warehouse) {
		super();
		this.id = id;
		this.name = name;
		this.details = details;
		this.order = order;
		this.warehouse = warehouse;
	}

	public Products() {
		super();
	}
    
}
