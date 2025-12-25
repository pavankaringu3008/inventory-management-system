package com.alpha.InventoryManagementSystem.Exceptions;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.alpha.InventoryManagementSystem.DTO.ResponseStructure;

@ControllerAdvice
public class GlobalException {

	@ExceptionHandler(CustomeNotFoundException.class)
	public ResponseEntity<ResponseStructure<String>> customernotfound() {
		ResponseStructure<String> rs = new ResponseStructure<String>();
		rs.setData("Customer Data not found");
		rs.setMessage("No Data Found");
		rs.setHttpsessioncode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<String>>(rs, HttpStatus.OK);
	}

	@ExceptionHandler(OrderNotFoundException.class)
	public ResponseEntity<ResponseStructure<String>> Ordernotfound() {
		ResponseStructure<String> rs = new ResponseStructure<String>();
		rs.setData("Order Data not found");
		rs.setMessage("No Data Found");
		rs.setHttpsessioncode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<String>>(rs, HttpStatus.OK);
	}

	@ExceptionHandler(ProductNotFoundException.class)
	public ResponseEntity<ResponseStructure<String>> productnotfound() {
		ResponseStructure<String> rs = new ResponseStructure<String>();
		rs.setData("Product Data not found");
		rs.setMessage("No Data Found");
		rs.setHttpsessioncode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<String>>(rs, HttpStatus.OK);
	}

	@ExceptionHandler(WarehouseNotFoundException.class)
	public ResponseEntity<ResponseStructure<String>> wareHousenotfound() {
		ResponseStructure<String> rs = new ResponseStructure<String>();
		rs.setData("WareHouse Data not found");
		rs.setMessage("No Data Found");
		rs.setHttpsessioncode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<String>>(rs, HttpStatus.OK);
	}

	@ExceptionHandler(SupplierNotFoundException.class)
	public ResponseEntity<ResponseStructure<String>> supplierNotFound() {
		ResponseStructure<String> rs = new ResponseStructure<String>();
		rs.setData("Supplier Data not found");
		rs.setMessage("No Data Found");
		rs.setHttpsessioncode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<String>>(rs, HttpStatus.OK);
	}

	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<ResponseStructure<String>> elementNotFound(int id) {
		ResponseStructure<String> rs = new ResponseStructure<String>();
		rs.setData("Data Not found");
		rs.setMessage("No Data Found");
		rs.setHttpsessioncode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<String>>(rs, HttpStatus.OK);
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ResponseStructure<Map<String, String>>> handleMethodArgumentNotValidException(
			MethodArgumentNotValidException ex) {
		List<FieldError> ferror = ex.getFieldErrors();
		Map<String, String> validationmap = new HashMap<String, String>();
		for (FieldError fieldError : ferror) {
			validationmap.put(fieldError.getField(), fieldError.getDefaultMessage());
		}
		ResponseStructure<Map<String, String>> rs = new ResponseStructure<Map<String, String>>();
		rs.setHttpsessioncode(HttpStatus.NOT_ACCEPTABLE.value());
		rs.setMessage("Validation Problem");
		rs.setData(validationmap);

		return new ResponseEntity<ResponseStructure<Map<String, String>>>(rs, HttpStatus.NOT_ACCEPTABLE);
	}

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntime(RuntimeException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", ex.getMessage()));
	}

	public ResponseEntity<?> handleNotFound(Exception ex) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", ex.getClass().getSimpleName()));
	}
}
