$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var sideWindowView = new SideWindowView($("#sideWindowView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);



	/*var startView = new StartView($("#startView"), model);
	
	var dishOverviewView = new DishOverviewView($("#dishOverviewView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerPreparationView = new DinnerPreparationView($("#dinnerPreparationView"), model);*/


});