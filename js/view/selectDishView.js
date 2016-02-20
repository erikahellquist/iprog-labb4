//ExampleView Object constructor
var SelectDishView = function (container, model, viewController) {

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var allDishes = this.allDishes = container.find("#mainWindow");

	createSelectDishView = function() {
		var dishList = "<br><br><br>"
		var list = model.getMainDishes();


		for (i = 0; i < list.length; i++) {
			dish = list[i];
			dishList = dishList + "<div class='col-md-3 dish' id='goTo" + dish.id + "'>"
			dishList = dishList + "<img src='images/" + dish.image + "'></img>"
			dishList = dishList + "<span class='title'><h4>" + dish.name + "</h4></span>"
			dishList = dishList + "<span class='description'>" + dish.description + "</span>"
			dishList = dishList + "<br></div>"
		}

		allDishes.html(dishList);    


		for (k = 0; k < list.length; k++) {
			dish = list[k];
			var controller = new GoToRecipeController(model, viewController, dish.id);
			console.log("number", k);
		}

	}
	


	this.update = function() {
		createSelectDishView();
		console.log("update selectdish");
		console.log(model.getChanges());
	}
	
	createSelectDishView(); // Initialization                                 

}
 