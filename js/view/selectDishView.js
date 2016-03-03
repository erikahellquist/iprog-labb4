//SelectDishView Object constructor
var SelectDishView = function (container, model, viewController) {

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var allDishes = this.allDishes = container.find("#mainWindow");
	
	var searchBar = this.searchBar = container.find("#searchBar");

	createSelectDishView = function(list) {

		createSearchView();

		var dishList = "<br><br><br>"

		var value = $('#selectList').val();

		if (value == "mainDish") {	// so it works with whitespace
			value = "Main Dish";
		}

		var searchText = $('#searchField').val();

		console.log(list)
		if (list == "error") {
			allDishes.html("There was an error loading the recipes.");
		}
		else if (list != undefined) {

			for (i = 0; i < list.length; i++) {
				dish = list[i];
				dishList += "<div class='col-md-3 dish' id='goTo" + dish.RecipeID + "'>"
				dishList += "<img src='" + dish.ImageURL + "'></img>"
				dishList += "<span class='title'><h4>" + dish.Title + "</h4></span>"
				dishList += "<br></div>"
			}

			if (list.length == 0) {
				dishList += "Unfortunately there was no results matching your search.<br><br><br>"
			}

			allDishes.html(dishList);    


			for (k = 0; k < list.length; k++) {
				dish = list[k];
				var controller = new GoToRecipeController(model, viewController, dish);
			}
		}
		else {
			allDishes.html("Loading...");
		}

	}
	

	createSearchView = function() {

		var currentChoice = $('#selectList').val();

		if (currentChoice == undefined) {		// So that it gets defined the first time
			currentChoice = 'all';
		}

		var searchText = $('#searchField').val();

		var field = "<h4>Select dish</h4><hr>"

		// Searchfield
		field += "<div class='col-md-4'>"
		field += "<div class='input-group'>"
		field += "<input type='text' id='searchField' class='form-control' placeholder='Enter key words'>"
		field += "<span class='input-group-btn'>"
		field += "<button class='btn btn-default' id='searchFieldButton' type='button'>Search</button>"
		field += "</span></div></div>"


		// Dropdown menu
		field += "<div class='col-md-4'>"
		field += "<select class='form-control' id='selectList'>"
		field += "<option value='all'>All</option>"
		field += "<option value='starter'>Starter</option>"
		field += "<option value='mainDish'>Main Dish</option>"
		field += "<option value='dessert'>Dessert</option>"
		field += "</select></div>"

		searchBar.html(field);


		$('#selectList').val(currentChoice);
		$('#searchField').val(searchText);


		dropdownController = new DropdownController(model);
		searchFieldController = new SearchFieldController(model);
	}


	this.update = function(args) {
		if (args) {
			for (i = 0; i < args.length; i++) {
				if (args[i] == "allDishes") {
					createSelectDishView(args[i+1]);
					break;
				}
			}
		}
	}
	
	createSelectDishView(); // Initialization   
	model.getAllDishes();  
	
                           

}
 