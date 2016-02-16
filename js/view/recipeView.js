var RecipeView = function (container, model) {
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishId = container.find("#dishId");
	this.dishName = container.find("#dishName")
	
	this.numberOfGuests.html(model.getNumberOfGuests);
	dishId = model.getSelectedDishId()
	this.dishId.html(dishId);
	
	this.dish  = model.getDish(dishId)
	
	this.dishName.html(this.dish.name)

	
}
 
