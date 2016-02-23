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
	});
}


var DropdownController = function(model) {

	$("#selectList").click(function(){
		var choice = $('#selectList').val();

		$("#selectList select").val(choice);

		model.notifyObservers();

	});
}
