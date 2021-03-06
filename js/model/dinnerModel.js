//DinnerModel Object constructor
var DinnerModel = function() {
 
	//var APIKEY = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu"
	//var APIKEY = "XKEdN82lQn8x6Y5jm3K1ZX8L895WUoXN"
	//var APIKEY = "r02x0R09O76JMCMc4nuM0PJXawUHpBUL"
	//var APIKEY = "H9n1zb6es492fj87OxDtZM9s5sb29rW3"
	//var APIKEY = "1hg3g4Dkwr6pSt22n00EfS01rz568IR6"
	//var APIKEY = "8vtk7KykflO5IzB96kb0mpot0sU40096"
	var APIKEY = "3stL5NVP4s6ZkmK5gt4dci8a4zOQRpD4"

	//Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var numberOfGuests = 1;
	var selectedDish = undefined;
	var menu = [];
	var pendingPrice = 50;

	var searchText = undefined;
	var searchType = undefined;

	this._observers = [];

	/* With inspiration from lecture notes */
	this.addObserver = function(observer) {
		this._observers.push(observer);
	}

	/* With inspiration from lecture notes */
	this.notifyObservers = function(args) {
		for (o = 0; o < this._observers.length; o++) {
			this._observers[o].update(args);
		}
	}

	this.setSearchText = function(text) {
		searchText = text;
	}

	this.getSearchText = function() {
		return searchText;
	}

	this.setSearchType = function(type) {

		if (type == "starter") {
			type = "Starter"
		}
		else if (type == "mainDish") {
			type = "Main Dish"
		}
		else if (type == "dessert") {
			type = "Dessert"
		}

		searchType = type;
	}

	this.getSearchType = function() {
		return searchType;
	}

	this.setNumberOfGuests = function(num) {
		if (num >= 0) {
			numberOfGuests = num;
		}
		this.notifyObservers(["changeGuests"]);
	}

	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}
	
	this.getSelectedDish = function() {
		return selectedDish;
	}

	this.setSelectedDish = function(object) {
		selectedDish = object;

		this.notifyObservers(["setSelectedDish", object]);
	}

	this.selectedDishInMenu = function() {

		if (selectedDish == undefined) {
			return false;
		}

		for (d in menu) {
			if (menu[d].RecipeID == selectedDish.RecipeID) {
				return true;
			} 
		}
		return false;
	}

	this.idInMenu = function(object) {
		for (no in menu) {
			if (menu[no].RecipeID == object.RecipeID) {
				return true;
			} 
		}
		return false;
	}

	this.getPendingPrice = function() {
		if (this.selectedDishInMenu() == true) {
			return 0;
		}
		return this.getDishGuestPrice(selectedDish);
	}


	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 2
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var price = 0;
		for (i in menu) {
			price = price + this.getDishGuestPrice(menu[i]);
		}
		if (this.selectedDishInMenu() == false && selectedDish != undefined) {
			price += this.getDishGuestPrice(selectedDish);
		}
		
		return price;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getConfirmedMenuPrice = function() {
		var price = 0;
		for (i in menu) {
			price = price + this.getDishGuestPrice(menu[i]);
		}
		return price;
	}

	//http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/ Source
	this.bubbleSort = function( a )
	{
		var b = a;
		var swapped;
		do {
			swapped = false;
			for (var i=0; i < (b.length) - 1; i++) {
				if (b[i] > b[i+1]) {
					var temp = b[i];
					b[i] = b[i+1];
					b[i+1] = temp;
					swapped = true;
				}
			}
		} 
		while (swapped);
		
		return b;
	}
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(object) {
		
		if (this.idInMenu(object) == false) {
			menu.push(object);
		}
		console.log("add menu", menu);
		
	//	menu = this.bubbleSort(menu);
		
		this.notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(object) {
		for (index in menu) {
			if (object.RecipeID == menu[index].RecipeID) {
				menu.splice(index, 1);
			}
		}
		this.notifyObservers(["removeDish"]);
	}



	this.getAllDishes = function(type, filter) {

						// exempel: http://api.bigoven.com/documentation/serialization-formats
						// sökning: http://api.bigoven.com/documentation/recipe-search-results
		var urlString = "http://api.bigoven.com/recipes?pg=1&rpp=12&api_key=" + APIKEY;

		if (searchText != '' && searchText != undefined) {
			urlString += "&title_kw=" + searchText;
		}

		if (searchType != 'all' && searchType != undefined) {
			urlString += "&any_kw=" + searchType;
		}

		console.log(urlString);
		$.ajax({
			type: 'GET', 
			url: urlString,
			dataType:'json',
			//data: {RecipeID: 167511},
			headers: {"Accept":"application/json"},

			success: function(data) { 
				console.log("min data", data);
         		console.log("All data0: ", data.Results);

         		this.notifyObservers(["allDishes", data.Results]);				// som i labblydelsen
         		//console.log("mina resultat: ", data.Results);

			}.bind(this),		// so that calling this.notifyObservers works

  			error: function(xhr,status,error) {
  			    console.error("error in alldishes");

  			    this.notifyObservers(["allDishes", "error"]);
 	 		}.bind(this), 

 		})

 		//console.log(".....");
  		
	}

	//function that returns a dish of specific ID
	this.getDish = function(id) {
		//id = 167511;

		var urlString = "http://api.bigoven.com/recipe/"+ id +"?api_key=" + APIKEY;

		$.ajax({
			type: 'GET', 
			url: urlString,
			dataType:'json',
			headers: {"Accept":"application/json"},

			success: function(data) { 
         		console.log("All data1: ", data);
         		this.notifyObservers(["getDish", data]);				// som i labblydelsen
         		//console.log("mina resultat: ", data.Results);

			}.bind(this),		// so that calling this.notifyObservers works

  			error: function(xhr,status,error) {
  			    console.error("error in getdish"); 
  			    this.notifyObservers(["getDish", "error"]);
 	 		}.bind(this), 
 		})

	}



	//function that returns a price of specific dish with ID
	this.getDishPrice = function (object) {
		var price = 0;
	  //	console.log("o: ", object)
	  	//console.log("o.Ingr: ", object.Ingredients);

	  	for (key in object.Ingredients) {
	  		price += object.Ingredients[key].MetricQuantity
	  	}
	  //console.log("price: ", price);
	  	return price;
	}


	this.getDishGuestPrice = function (object) {
		if (object != undefined) {
			var price = this.getDishPrice(object);
			price = price * numberOfGuests;
			//console.log("guestdishprice: ", price);
			return price;
		}
		return 0;
	}



	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}