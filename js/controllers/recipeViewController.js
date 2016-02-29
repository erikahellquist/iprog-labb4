var RecipeViewController = function(view, model ,viewController) {
 
	view.backButton.click(function(){
		viewController.showSelectDish();
		model.setSelectedDish(undefined);
	});
	
}

var RecipeSelectController = function(model, viewController, dishObject) {

	var recipe = "#confirmButton" + dishObject.RecipeID;

	$(recipe).click(function(){
		model.addDishToMenu(dishObject);
		viewController.showSelectDish();
		model.setSelectedDish(undefined);
	});
}