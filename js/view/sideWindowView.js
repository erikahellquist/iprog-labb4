//ExampleView Object constructor
var SideWindowView = function (container, model, viewController) {
	
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
				string += "<div class='row current' id='" + dish.id + "'>"
			}
			else {
				string += "<div class='row noncurrent' id='" + dish.id + "'>"
			}
			string += "<span class='left'>" + model.getNumberOfGuests() + "</span>"
			string += dish.name
			string += "<span class='right price'>"+ model.getDishGuestPrice(dish.id) + "</span>"
			string += "</div>"

			
		}

		string += "<hr><span class='right price'>SEK " + model.getTotalMenuPrice() + "</span><br><br>"

		menuContainer.html(string);

		for (no in menu) {
			var dish = model.getDish(menu[no]);
			var controller = new ChooseSelectedDishController(model, viewController, dish.id);
		}
		//var test = this.test = container.find("#" + dish.id);
		//test.html("halååååå");

	}



	this.update = function() {
		createSideWindow();
		//console.log("update sidewindow");
	}

	createSideWindow();		// Initialize the view

}


 