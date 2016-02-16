//ExampleView Object constructor
var SelectDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	//this.numberOfGuests = container.find("#numberOfGuests");
	//this.numberOfGuests.html(model.getNumberOfGuests());



	this.allDishes = container.find("#mainWindow");



	this.tryOneDish = container.find("#tryOneDish");
	this.tryOneDish.html(model.getDish(100).name);
	
	

	
	

	


	//var dishList = ""
	//var list = model.getSelectedDish("starter");

	//for (i = 0; i < 1; i++) {
	//dish = list[i]
	//dishList = dishList + dish.name
	
	//dishList = dishList + "<br>"
	//dishList = dishList + model.dishes[0].id
	//}
	
	this.allDishes.html(model.getSelectedDish(starter).name);

}
 