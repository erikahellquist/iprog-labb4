//SideWindowController Object constructor
var SideWindowController = function(view, model, viewController) {
 
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
 
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	view.confirmDinner.click(function(){
		viewController.showDinnerView();
	});

}

var ChooseSelectedDishController = function(model, viewController, object) {

	var dish = "#" + object.RecipeID;

	$(dish).click(function(){
		model.setSelectedDish(object);		// inte tillräckligt snabb
		model.getDish(object.RecipeID);
		viewController.showRecipeView();
	});
}

var TrashDishController = function(model, viewController, object) {

	var trashDish = "#trash" + object.RecipeID;

	$(trashDish).click(function(){
		model.removeDishFromMenu(object);
	});
}

