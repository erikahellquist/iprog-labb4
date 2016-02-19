//ExampleView Object constructor
var SideWindowView = function (container, model) {
	
	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var plusButton = this.plusButton = container.find("#plusGuest");
	var minusButton = this.minusButton = container.find("#minusGuest");
	var confirmDinner = this.confirmDinner = container.find("#confirmDinner");

	var menuContainer = this.menuContainer = container.find("#menu");
	
	
	var createSideWindow = function() {
		
		numberOfGuests.html(model.getNumberOfGuests());

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


		menuContainer.html(string);
	}


	this.update = function() {
		createSideWindow();
		console.log("update sidewindow");
		console.log(model.getChanges());
	}

	createSideWindow();		// Initialize the view

}


 