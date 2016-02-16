var RecipeView = function (container, model) {
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishId = container.find("#dishId");
	this.dishName = container.find("#dishName")

	
	this.numberOfGuests.html(model.getNumberOfGuests);
	dishId = model.getSelectedDishId()
	this.dishId.html(dishId);
	
	dish  = model.getDish(dishId)
	
	this.dishName.html(dish.name)
	
	this.leftSide = container.find("#leftHalf")
	
	dishDisc = "<h1>" + dish.name + "</h1>"
	dishDisc = dishDisc + "<img src='images/" + dish.image + "'></img><br>"
	dishDisc = dishDisc + "<br>"
	dishDisc = dishDisc + dish.description
	dishDisc = dishDisc + "<br>"
	
	this.leftSide.html(dishDisc)
	
	
	
	
}
 
