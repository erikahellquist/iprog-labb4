//ExampleView Object constructor
var SelectDishView = function (container, model) {

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)


	this.allDishes = container.find("#mainWindow");
	

	var dishList = "<br><br><br>"
	var list = model.getMainDishes();


	for (i = 0; i < list.length; i++) {
		dish = list[i]
		dishList = dishList + "<div class='col-md-3' id='dish'>"
		dishList = dishList + "<img src='images/" + dish.image + "'></img>"
		dishList = dishList + "<a href='recipeView.html'>"
		dishList = dishList + "<span class='title'><h4>" + dish.name + "</h4></span>"
		dishList = dishList + "</a>"
		dishList = dishList + "<span class='description'>" + dish.description + "</span>"
		dishList = dishList + "<br></div>"
	}

	this.allDishes.html(dishList);                                        

}
 