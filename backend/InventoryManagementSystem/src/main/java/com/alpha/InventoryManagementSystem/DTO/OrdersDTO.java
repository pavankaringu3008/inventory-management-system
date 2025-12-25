package com.alpha.InventoryManagementSystem.DTO;

public class OrdersDTO {

	private String ordername;
	private String orderdetails;
	private int quantity;
	private double price;
	private String orderdate;
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
	public String getOrderdate() {
		return orderdate;
	}
	public void setOrderdate(String orderdate) {
		this.orderdate = orderdate;
	}
	public OrdersDTO(String ordername, String orderdetails, int quantity, double price, String orderdate) {
		super();
		this.ordername = ordername;
		this.orderdetails = orderdetails;
		this.quantity = quantity;
		this.price = price;
		this.orderdate = orderdate;
	}
	public OrdersDTO() {
		super();
	}
	
	
}
