package com.alpha.InventoryManagementSystem.DTO;

public class ResponseStructure <T>{

	private int Httpsessioncode;
	private String message;
	private T data;
	public int getHttpsessioncode() {
		return Httpsessioncode;
	}
	public void setHttpsessioncode(int httpsessioncode) {
		Httpsessioncode = httpsessioncode;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public ResponseStructure(int httpsessioncode, String message, T data) {
		super();
		Httpsessioncode = httpsessioncode;
		this.message = message;
		this.data = data;
	}
	public ResponseStructure() {
		super();
	}
	
	

}
