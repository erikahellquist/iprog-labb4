//ExampleView Object constructor
var SideWindowView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.starter = container.find("#starter");
	this.main = container.find("#main");
	this.dessert = container.find("#dessert");

	this.starterPrice = container.find("#starterPrice");
	this.mainPrice = container.find("#mainPrice");
	this.dessertPrice = container.find("#dessertPrice");

	this.totalPrice = container.find("#totalPrice");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	var dishList = model.getFullMenu();

	var start = model.getDish(dishList[0]);
	this.starter.html(start.name);
	this.starterPrice.html(model.getDishGuestPrice(start.id));

	var main = model.getDish(dishList[1]);
	this.main.html(main.name);
	this.mainPrice.html(model.getDishGuestPrice(main.id));

	var dessert = model.getDish(dishList[2]);
	this.dessert.html(dessert.name);
	this.dessertPrice.html(model.getDishGuestPrice(dessert.id));

	this.totalPrice.html(model.getTotalMenuPrice());



	
}
 