package com.alpha.InventoryManagementSystem.DTO;

public class CustomerDTO {

	private String name;
	private String email;
	private int phonenumber;
	private String description;
	
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
	public CustomerDTO(String name, String email, int phonenumber, String description) {
		super();
		this.name = name;
		this.email = email;
		this.phonenumber = phonenumber;
		this.description = description;
	}
	public CustomerDTO() {
		super();
	}
	
	
	
}
