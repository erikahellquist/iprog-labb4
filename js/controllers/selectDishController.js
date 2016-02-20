//SelectDishController Object constructor
var SelectDishController = function(view, model, viewController) {
 
	/*view.createButton.click(function(){
		viewController.showSelectDish();
		console.log("I createButton-funk");
	});*/

}

var GoToRecipeController = function(model, viewController, id) {

	var dish = "#goTo" + id;

	$(dish).click(function(){
		model.setSelectedDishId(id);
		viewController.showRecipeView(id);
		console.log("Here we would go to recipe", id);

	});

}