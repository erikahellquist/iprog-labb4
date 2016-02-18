var RecipeView = function (container, model) {

	model.addObserver(this);
	
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var dishIdContainer = this.dishId = container.find("#dishId");
	var dishNameContainer = this.dishName = container.find("#dishName")
	var leftSide = this.leftSide = container.find("#leftHalf")
	var rightSide = this.rightSide = container.find("#rightHalf")
	var lower = this.lower = container.find("#lowerHalf")


	var createRecipeView = function() {

		numberOfGuests.html(model.getNumberOfGuests());

		dishId = model.getSelectedDishId()
		dishIdContainer.html(dishId);
		
		dish  = model.getDish(dishId)
		
		dishNameContainer.html(dish.name)
		
		
		
		dishDisc = "<h1>" + dish.name + "</h1>"
		dishDisc = dishDisc + "<img src='images/" + dish.image + "'></img><br>"
		dishDisc = dishDisc + "<br>"
		dishDisc = dishDisc + dish.description
		dishDisc = dishDisc + "<br><br>"
		dishDisc = dishDisc + "<a href=" + "selectDish.html" +" ><button type= " +"button" +" class= " +"btn-default btn-block" +"> Go back to Select Dish </button></a>"
		dishDisc = dishDisc + "<br><br><br><br>"
		leftSide.html(dishDisc)

		
		
		//Creating the html for the top right side of the screen
		
		
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
		
		rightSide.html(dishDisc)
		
		
		dishDisc = "<h2> Preparation </h2><br>"
		dishDisc = dishDisc + dish.description
		
		lower.html(dishDisc)
		

	}
	
	this.update = function() {
		createRecipeView();

	}
	
	createRecipeView(); // Initialize
	
}
 
