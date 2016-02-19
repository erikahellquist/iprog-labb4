//DinnerViewController Object constructor
var DinnerViewController = function(view, model, viewController) {
 
	view.goToPrep.click(function(){
		viewController.showDinnerPrep();
	});

	view.goBack.click(function(){
		viewController.showSelectDish();
	});


}