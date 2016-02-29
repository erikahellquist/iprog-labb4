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

			dish = list[i]
			dishList += "<div class='col-md-3 dish'><center>"
			dishList += "<img src='" + dish.ImageURL + "'></img>"
			dishList += "<br><span class='dinnertitle'>"
			dishList +=  dish.Title
			dishList += "</span>"
			dishList += "<span class='price'>"
			dishList += model.getDishGuestPrice(dish) + " SEK"
			dishList += "</span><br></center></div>"
		}


		dishList += "<div class='col-md-3 verticalLine' id='dinnerPrice'><span class='lower'>"
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
 