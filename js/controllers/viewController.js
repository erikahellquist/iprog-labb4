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
		$("#dinnerView").hide();
		$("#homePage").hide();
		$("#header").show();
		$("#sideWindowView").show();
		$("#selectDishView").show();
	}


	this.showRecipeView = function() {
		$("#dinnerView").hide();
		$("#selectDishView").hide();
		$("#sideWindowView").show();
		$("#recipeView").show();
	}

	this.showDinnerView = function() {
		$("#sideWindowView").hide();
		$("#selectDishView").hide();
		$("#dinnerPrepView").hide();
		$("#recipeView").hide();
		model.setSelectedDishId(undefined);
		$("#dinnerView").show();
	}

	this.showDinnerPrep = function() {
		$("#dinnerView").hide();
		$("#dinnerPrepView").show();
	}

}