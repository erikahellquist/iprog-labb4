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
	dishDisc = dishDisc + "<br><br>"
	dishDisc = dishDisc + "<a href=" + "selectDish.html" +" ><button type= " +"button" +" class= " +"btn-default btn-block" +"> Go back to Select Dish </button></a>"
	dishDisc = dishDisc + "<br><br><br><br>"
	this.leftSide.html(dishDisc)

	
	
	//Creating the html for the top right side of the screen
	this.rightSide = container.find("#rightHalf")
	
	dishDisc = "<h3> INGREDIENTS FOR " + model.getNumberOfGuests()+ " PEOPLE</h3>"
	dishDisc = dishDisc + "<hr>"
	totalpris = 0
	for(i = 0; i < dish.ingredients.length; i++)
	{
		dishDisc = dishDisc +"	" +  dish.ingredients[i].quantity
		dishDisc = dishDisc +"	" +  dish.ingredients[i].unit
		dishDisc = dishDisc +"	" +  dish.ingredients[i].name
		dishDisc = dishDisc +"<span class='right'>SEK " +  dish.ingredients[i].price * model.getNumberOfGuests()
		dishDisc = dishDisc + "</span><br>"
		totalpris = totalpris + dish.ingredients[i].price * model.getNumberOfGuests()
	}
	dishDisc = dishDisc + "<hr>"
	dishDisc = dishDisc + "<a href=" + "selectDish.html" +" ><button type= " +"button" +" class= " +"btn-default btn-block" +"> Confirm dish </button></a>"
	dishDisc = dishDisc + "<span class='right'>SEK : " + totalpris + "</span><br><br>"
	
	this.rightSide.html(dishDisc)
	
	this.lower = container.find("#lowerHalf")
	dishDisc = "<h2> Preparation </h2><br>"
	dishDisc = dishDisc + dish.description
	
	this.lower.html(dishDisc)
	
	
	
	
}
 
