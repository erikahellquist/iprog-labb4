//SelectDishController Object constructor
var SelectDishController = function(view, model, viewController) {
 	//

}

var GoToRecipeController = function(model, viewController, dishObject) {

	var dish = "#goTo" + dishObject.RecipeID;

	$(dish).click(function(){
		viewController.showRecipeView();
		model.getDish(dishObject.RecipeID);
	});
}

var DropdownController = function(model) {

	$("#selectList").click(function(){
		var choice = $('#selectList').val();

		$("#selectList select").val(choice);
		model.setSearchType(choice);
		model.getAllDishes();
	});
}

var SearchFieldController = function(model) {

	$("#searchFieldButton").click(function(){
		var value = $('#searchField').val();

		$('#searchField').val(value);

		model.setSearchText(value);
		model.getAllDishes();
	});
}

