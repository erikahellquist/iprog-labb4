var RecipeView = function (container, model, viewController) {

	model.addObserver(this);
	
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var dishIdContainer = this.dishId = container.find("#dishId");
	var dishNameContainer = this.dishName = container.find("#dishName")
	var leftSide = this.leftSide = container.find("#inner")
	var rightSideUpper = this.rightSideUpper = container.find("#rightInnerUpper")
	var rightSideLower= this.rightSideLower = container.find("#rightInnerLower")
	var lower = this.lower = container.find("#lowerHalf")
	var backButton = this.backButton = container.find("#backButton")
	var confirmButton = this.confirmButton = container.find("#confirmButton")

	var createRecipeView = function(dish) {

		numberOfGuests.html(model.getNumberOfGuests());

		//dishId = model.getSelectedDish()
		//dishIdContainer.html(dishId);
		console.log("dish 1", dish);
		if (dish == undefined) {
			dish = model.getSelectedDish();
		}
		else {
			model.setSelectedDish(dish);
		}
		console.log("dish 2", dish);


		if (dish != undefined) {
			dishNameContainer.html(dish.Title)
			
			
			dishDisc = "<h1>" + dish.Title + "</h1>"
			dishDisc = dishDisc + "<img src='" + dish.ImageURL + "'></img><br>"
			dishDisc = dishDisc + "<br>"
			dishDisc = dishDisc + dish.Description
			dishDisc = dishDisc + "<br><br>"

			leftSide.html(dishDisc)
		

			//Creating the html for the top right side of the screen
			
			dishDisc = "<h3> INGREDIENTS FOR " + model.getNumberOfGuests()+ " PEOPLE</h3>"
			dishDisc = dishDisc + "<hr>"
			totalpris = 0
			for(i = 0; i < dish.Ingredients.length; i++)
			{
				dishDisc = dishDisc +"	" +  dish.Ingredients[i].MetricQuantity * model.getNumberOfGuests()
				dishDisc = dishDisc +"	" +  dish.Ingredients[i].MetricUnit
				dishDisc = dishDisc +"	" +  dish.Ingredients[i].Name
				dishDisc = dishDisc +"<span class='right'>SEK " +  dish.Ingredients[i].MetricQuantity * model.getNumberOfGuests()
				dishDisc = dishDisc + "</span><br>"
				totalpris = totalpris + (dish.Ingredients[i].MetricQuantity * model.getNumberOfGuests())
			}
			dishDisc = dishDisc + "<hr>"
			dishDisc += "<button type = 'button' class= 'btn-default' id = 'confirmButton"+ dish.RecipeID +"'>  Confirm dish </button>"
	
			rightSideLower.html("<span class='inner right'>SEK : " + totalpris + "</span><br><br>")
			
			rightSideUpper.html(dishDisc)
			
			
			dishDisc = "<h2> Preparation </h2><br>"
			dishDisc = dishDisc + dish.Instructions
			
			lower.html(dishDisc)


			var dishController = new RecipeSelectController(model, viewController, dish);
		}
	}
	
	this.update = function(args) {
		console.log("har vi args i recipeView?", args);
		if (args) {
			for (i = 0; i < args.length; i++) {
				console.log("varv: ", args[i]);
				if (args[i] == "getDish") {
					model.getSelectedDish(args[i+1]);
					createRecipeView(args[i+1]);
					console.log("update with getDish")
					break;
				}
				else if (args[i] == "removeDish" || args[i] == "changeGuests") {
					console.log("update!")
					createRecipeView();
					break;
				}
			}
		}
	}
	
	createRecipeView(); // Initialize
	
}
 
