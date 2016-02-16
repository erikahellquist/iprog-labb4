//ExampleView Object constructor
var DinnerView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");

	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.dinnerList = container.find("#dinnerListing");
	

	var dishList = ""
	var list = model.getFullMenu();


	for (i = 0; i < list.length; i++) {
		dish = model.getDish(list[i])
		dishList = dishList + "<div class='col-md-3' id='dish'><center>"
		dishList = dishList + "<center>"
		dishList = dishList + "<img src='images/" + dish.image + "'></img><br>"
		dishList = dishList + dish.name
		dishList = dishList + "<br><span class='price'>"
		dishList = dishList + model.getDishGuestPrice(list[i]) + " SEK"
		dishList = dishList + "</span><br></div>"
	}

	dishList = dishList + "<div class='col-md-3'>Total:<br> <span class='price'>SEK</span>" + "</div>"

	this.dinnerList.html(dishList); 

	/*var dishList = "<table><tr>"

	for (i = 0; i < list.length; i++) {
		dish = model.getDish(list[i])
		if (i % 5 == 0 ) {
			dishList = dishList + "</tr><tr>"
		}
			dishList = dishList + "<td><img src='images/" + dish.image + "'></img><br>"
			dishList = dishList + dish.name
			dishList = dishList + "<br>"
			dishList = dishList + dish.description
			dishList = dishList + "<br></td>"	
	}

	dishList = dishList + "</tr></table>"*/

	    

	
}
 