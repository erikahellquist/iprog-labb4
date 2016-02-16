//ExampleView Object constructor
var SelectDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.numberOfGuests = container.find("#numberOfGuests");

	this.allDishes = container.find("#allDishes");
	this.tryOneDish = container.find("#tryOneDish");

	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.allDishes.html(model.getAllDishes());

	this.tryOneDish.html(model.getDish(1));
	
}
 