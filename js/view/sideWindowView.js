//ExampleView Object constructor
var SideWindowView = function (container, model) {
	
	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests());


	this.menuContainer = container.find("#menu");

	var string = "<br>";

	var menu = model.getFullMenu()

	for (no in menu) {
		var dish = model.getDish(menu[no]);

		if (dish.id == model.getSelectedDishId()) {
			string += "<a href='recipeView.html'>"
			string += "<div class='row' id='current'>"
		}
		else {
			string += "<div class='row' id='noncurrent'>"
		}
		string += "<span class='left'>" + model.getNumberOfGuests() + "</span>"
		string += dish.name
		string += "<span class='right price'>"+ model.getDishGuestPrice(dish.id) + "</span>"
		string += "</div>"

		if (dish.id == model.getSelectedDishId()) {
			string += "</a>"
		}
	}

	string += "<hr><span class='right price'>SEK " + model.getTotalMenuPrice() + "</span><br><br>"

	string += "<a href='dinnerOverview.html'><button type='button' class='btn-default btn-block'>Confirm dinner</button></a><br>"

	

	this.menuContainer.html(string);




	
}
 