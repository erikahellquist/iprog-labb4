$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// create our viewcontroller
	var viewController = new ViewController(model);
	
	//And create the needed views
	var sideWindowView = new SideWindowView($("#sideWindowView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var recipeView = new RecipeView($("#recipeView"), model);
	var dinnerView = new DinnerView($("#dinnerView"), model);
	var dinnerPrepView = new DinnerPrepView($("#dinnerPrepView"), model);

	var homepageView = new HomepageView($("#homePage"), model, viewController);


	// Create all the needed controllers
	var sideWindowController = new SideWindowController(sideWindowView, model, viewController);
	var selectDishController = new SelectDishController(selectDishView, model, viewController);
	var homepageViewController = new HomepageViewController(homepageView, model, viewController);
	var dinnerViewController = new DinnerViewController(dinnerView, model, viewController);



});