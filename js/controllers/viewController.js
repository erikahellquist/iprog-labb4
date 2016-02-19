//viewController Object constructor
var ViewController = function(model) {

	$("#homePage").show();
	$("#header").hide();
	$("#sideWindowView").hide();
	$("#recipeView").hide();
	$("#selectDishView").hide();
	$("#dinnerView").hide();
	$("#dinnerPrepView").hide();
	

	this.showSelectDish = function() {
		$("#homePage").hide();
		$("#header").show();
		$("#sideWindowView").show();
		$("#selectDishView").show();
	}


	this.showRecipeView = function() {
		$("#selectDishView").hide();
		$("#sideWindowView").show();
		$("#recipeView").show();
	}

	this.showDinnerView = function() {
		$("#sideWindowView").hide();
		$("#selectDishView").hide();
		$("#recipeView").hide();
		$("#dinnerView").show();
	}

	this.showDinnerPrep = function() {
		$("#dinnerView").hide();
		$("#dinnerPrepView").show();
	}

}