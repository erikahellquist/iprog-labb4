var RecipeViewController = function(view, model ,viewController) {
 
	view.backButton.click(function(){
		console.log("I backButton-funk");
		viewController.showSelectDish();
	});
	
	view.confirmButton.click(function(){
		console.log("I confirm-funk");
		viewController.showSelectDish();
		dishId = model.getSelectedDishId();
		model.addDishToMenu(dishId);
	});
	}