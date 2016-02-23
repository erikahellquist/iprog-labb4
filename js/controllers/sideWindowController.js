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

var ChooseSelectedDishController = function(model, viewController, id) {

	var dish = "#" + id;

	$(dish).click(function(){
		model.setSelectedDishId(id);
		viewController.showRecipeView(id);
	});
}

var TrashDishController = function(model, viewController, id) {

	var trashDish = "#trash" + id;

	$(trashDish).click(function(){
		model.removeDishFromMenu(id);
	});
}

