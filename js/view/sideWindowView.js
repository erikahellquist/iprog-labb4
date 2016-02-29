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
	//	var bool = true;

		var menu = model.getFullMenu()
		console.log("menu in create sidewindow", menu);
		for (key in menu) {
			console.log("key");
			var dish = menu[key];
			console.log("dish", dish);
			console.log("menu", menu);

			if (dish.RecipeID == model.getSelectedDish()) {
				string += "<div class='row current' id='" + dish.RecipeID + "'>"
			}
			else {
				string += "<div class='row noncurrent' id='" + dish.RecipeID + "'>"
			}

			string += "<span class='left'>" + model.getNumberOfGuests() + "</span>"
			string += dish.Title
			string += "<span class='right glyphicon glyphicon-trash' id='trash" + dish.RecipeID  + "'></span>"
			string += "<span class='right price'>"+ model.getDishGuestPrice(dish.RecipeID) + "</span>"
			string += "</div>"
		}


		if (model.selectedIdInMenu() != true && model.getSelectedDish() != undefined) {	// if not already in menu but not undefined
			string += "<div class='row current'>"
			string += "<span class='left'>" + model.getNumberOfGuests() + "</span>"
			string += "Pending"

			string += "<span class='right price'>"+ model.getPendingPrice() + "</span>"
			string += "</div>"
		}
		else if (model.selectedIdInMenu() == true || model.getSelectedDish() == undefined) {	// if in menu or undefined

			string += "<div class='row noncurrent'>"
			string += "Pending"
			string += "<span class='right price'>"+ model.getPendingPrice() + "</span>"
			string += "</div>"
		}
 


		string += "<hr><span class='right price'>SEK " + model.getTotalMenuPrice() + "</span><br><br>"


		menuContainer.html(string);

		for (object in menu) {
			var dish = object;
			var controller = new ChooseSelectedDishController(model, viewController, dish.RecipeID);
			var trashController = new TrashDishController(model, viewController, dish.RecipeID);
		}

	}



	this.update = function() {
		createSideWindow();
		//console.log("update sidewindow");
	}

	createSideWindow();		// Initialize the view

}


 