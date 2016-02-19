//DinnerPrepController Object constructor
var DinnerPrepController = function(view, model, viewController) {
 
	view.goToDinner.click(function(){
		viewController.showDinnerView();
	});


}