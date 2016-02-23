//ExampleView Object constructor
var DinnerView = function (container, model) {

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var dinnerList = this.dinnerList = container.find("#dinnerListing");
	var goToPrep = this.goToPrep = container.find("#goToPrep");
	var goBack = this.goBack = container.find("#goBack");

	
	createDinnerView = function() {
		
		numberOfGuests.html(model.getNumberOfGuests());


		var dishList = "<br><br>"
		var list = model.getFullMenu();


		for (i = 0; i < list.length; i++) {
			dish = model.getDish(list[i])
			dishList = dishList + "<div class='col-md-3 dish'><center>"
			dishList = dishList + "<img src='images/" + dish.image + "'></img>"
			dishList += "<br><span class='dinnertitle'>"
			dishList = dishList + dish.name
			dishList += "</span>"
			dishList = dishList + "<span class='price'>"
			dishList = dishList + model.getDishGuestPrice(dish.id) + " SEK"
			dishList = dishList + "</span><br></center></div>"
		}


		dishList = dishList + "<div class='col-md-3 verticalLine' id='dinnerPrice'><span class='lower'>"
		dishList += "<b>Total:</b><br><span class='price'>" + model.getConfirmedMenuPrice() +" SEK</span></span>" + "</div>"


		dishList += "<div class='col-md-12'><br><hr>"
		dishList += "</div>"


		dinnerList.html(dishList); 

	}

	this.update = function() {
		createDinnerView();

	}
	
	createDinnerView(); // Initialization
}
 