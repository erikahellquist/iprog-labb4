var HompageViewController = function(view, model ,viewController) {
 
	view.createButton.click(function(){
		viewController.showSelectDish();
		console.log("I buttonclick");
	});
}