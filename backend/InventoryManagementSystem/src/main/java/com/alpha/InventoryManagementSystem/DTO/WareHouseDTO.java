package com.alpha.InventoryManagementSystem.DTO;

public class WareHouseDTO {

	private String name;
	private String Address;
	private String email;

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

	public WareHouseDTO(String name, String address, String email) {
		super();
		// this.id = id;
		this.name = name;
		Address = address;
		this.email = email;
	}

	public WareHouseDTO() {
		super();
	}

}
