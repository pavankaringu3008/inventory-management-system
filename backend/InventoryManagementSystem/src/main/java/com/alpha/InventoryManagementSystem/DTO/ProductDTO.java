package com.alpha.InventoryManagementSystem.DTO;

public class ProductDTO {

	
	   private String name;
	    private String details;
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
		public ProductDTO(String name, String details) {
			super();
			this.name = name;
			this.details = details;
		}
		public ProductDTO() {
			super();
		}
	    
	    
}
