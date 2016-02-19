//sideWindowController Object constructor
var SideWindowController = function(view, model, viewController) {
 
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		model.addChange();
	});
 
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		model.addChange();
	});

	view.confirmDinner.click(function(){
		viewController.showDinnerView();
	});

}