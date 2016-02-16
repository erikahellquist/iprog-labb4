//ExampleView Object constructor
var SelectDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	//this.numberOfGuests = container.find("#numberOfGuests");
	//this.numberOfGuests.html(model.getNumberOfGuests());

	this.allDishes = container.find("#mainWindow");
	


	var dishList = "<br><br><br>"
	var list = model.getMainDishes();


	for (i = 0; i < list.length; i++) {
		dish = list[i]
		dishList = dishList + "<div class='col-md-3' id='dish'>"
		dishList = dishList + "<img src='images/" + dish.image + "'></img><br>"
		dishList = dishList + "<h4><span class='title'>" + dish.name + "</span></h4>"
		dishList = dishList + "<span class='description'>" + dish.description + "</span>"
		dishList = dishList + "<br></div>"
	}

//	dishList = dishList + "</div>"

	this.allDishes.html(dishList);                                        



	/*var dishList = "<table><tr>"
	var list = model.getMainDishes();


	for (i = 0; i < list.length; i++) {
		dish = list[i]
		if (i % 5 == 0 ) {
			dishList = dishList + "</tr><tr>"
		}
			dishList = dishList + "<td><img src='images/" + dish.image + "'></img><br>"
			dishList = dishList + dish.name
			dishList = dishList + "<br>"
			dishList = dishList + dish.description
			dishList = dishList + "<br></td>"	
	}

	dishList = dishList + "</tr></table>"

	this.allDishes.html(dishList);
	
	//this.allDishes.html(model.getDish(model.getSelectedDish(starter)));
*/
}
 