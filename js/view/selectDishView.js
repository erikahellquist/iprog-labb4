//ExampleView Object constructor
var SelectDishView = function (container, model, viewController) {

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var allDishes = this.allDishes = container.find("#mainWindow");
	var searchBar = this.searchBar = container.find("#searchBar");

	createSelectDishView = function() {

		createSearchView();

		var dishList = "<br><br><br>"
		//var list = model.getMainDishes();
		var list = model.getAllDishes("main dish");


		for (i = 0; i < list.length; i++) {
			dish = list[i];
			dishList = dishList + "<div class='col-md-3 dish' id='goTo" + dish.id + "'>"
			dishList = dishList + "<img src='images/" + dish.image + "'></img>"
			dishList = dishList + "<span class='title'><h4>" + dish.name + "</h4></span>"
			dishList = dishList + "<br><span class='description'>" + dish.description + "</span>"
			dishList = dishList + "<br></div>"
		}

		allDishes.html(dishList);    


		for (k = 0; k < list.length; k++) {
			dish = list[k];
			var controller = new GoToRecipeController(model, viewController, dish.id);
		}

	}
	

	createSearchView = function() {

		var field = "<h4>Select dish</h4><hr>"

		// Searchfield
		field += "<div class='col-md-4'>"
		field += "<div class='input-group'>"
		field += "<input type='text' class='form-control' placeholder='Enter key words'>"
		field += "<span class='input-group-btn'>"
		field += "<button class='btn btn-default' type='button'>Search</button>"
		field += "</span></div></div>"

	
		/*field += "<div class='col-md-4'>"
		field += "<div class='dropdown'>"
		field += "<button class='btn-drop dropdown-toggle' type='button' id='dropdownDish' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>"
		field += "<span class='left'>Select course</span><span class='right'><span class='caret'></span></span>"
		field += "</button>"
		field += "<ul class='dropdown-menu' aria-labelledby='dropdownMenu'>"
		field += "<li>Starter</li>"
		field += "<li>Main dish</li>"
		field += "<li>Dessert</li>"
		field += "</ul></div></div>"
		field += "<div class='col-md-4'></div>"*/

	// Dropdown menu
		field += "<div class='col-md-4'>"
		field += "<select class='form-control'>"
		field += "<option value='starter'>Starter</option>"
		field += "<option value='mainDish' selected>Main Dish</option>"
		field += "<option value='dessert'>Dessert</option>"
		field += "</select></div>"

		searchBar.html(field);
	}


	this.update = function() {
		createSelectDishView();
	}
	
	createSelectDishView(); // Initialization     
                           

}
 