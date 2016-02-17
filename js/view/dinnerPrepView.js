//ExampleView Object constructor
var DinnerPrepView = function (container, model) {

	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.prep = container.find("#prepView");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	var dishList = "";
	var list = model.getFullMenu();


	for (i = 0; i < list.length; i++) {
		dish = model.getDish(list[i])

		dishList += "<div class='row' id='dishList'>"

		dishList += "<div class='col-md-2'>"
		dishList += "<img src='images/" + dish.image + "'></img>"
		dishList += "</div>"

		dishList += "<div class='col-md-5'>"
		dishList += "<h3>" + dish.name.toUpperCase() + "</h3>"
		dishList += dish.description
		dishList += "</div>"

		dishList += "<div class='col-md-5'>"
		dishList += "<h3>PREPARATION</h3>"
		dishList += dish.description
		dishList += "</div>"

		dishList += "</div><br><br>"
	}

	this.prep.html(dishList);
	
}