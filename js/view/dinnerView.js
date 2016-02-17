//ExampleView Object constructor
var DinnerView = function (container, model) {

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");

	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.dinnerList = container.find("#dinnerListing");
	

	var dishList = "<br><br>"
	var list = model.getFullMenu();


	for (i = 0; i < list.length; i++) {
		dish = model.getDish(list[i])
		dishList = dishList + "<div class='col-md-3' id='dish'>"
		dishList = dishList + "<img src='images/" + dish.image + "'></img>"
		dishList += "<span class='dinnertitle'>"
		dishList = dishList + dish.name
		dishList += "</span>"
		dishList = dishList + "<span class='price'>"
		dishList = dishList + model.getDishGuestPrice(dish.id) + " SEK"
		dishList = dishList + "</span><br></div>"
	}


	dishList = dishList + "<div class='col-md-3 verticalLine' id='dinnerPrice'><span class='lower'>"
	dishList += "<b>Total:</b><br><span class='price'>" + model.getTotalMenuPrice() +" SEK</span></span>" + "</div>"



	dishList += "<div class='col-md-12'><br><hr><center>"
	dishList += "<a href='dinnerPreparation.html'><button type='button' class='btn btn-default' style='width:300px;'>Print full recipe</button></a>"
	dishList += "</center></div>"


	this.dinnerList.html(dishList); 
	
}
 