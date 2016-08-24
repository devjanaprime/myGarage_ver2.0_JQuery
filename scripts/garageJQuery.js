console.log( 'garageJQuery.js sourced' );
// glpobal array for the garage
var garage = [];

// click on button on document with ID of "addCar"
// target IDs with #
$( document ).on( 'click', '#addCar', function(){
  console.log( 'in addCar Button Click' );
  // new car object
  var newCar = {
    year: $( '#yearIn' ).val(),
    make: $( '#makeIn' ).val(),
    model: $( '#modelIn' ).val(),
    picURL: $( '#picURLIn' ).val(),
    description: $( '#descriptionIn' ).val()
  }; // end new car
  // push into the garage array
  garage.push( newCar );
  showGarage();
});

var showGarage = function(){
  console.log( 'in showGarage' );
  // empty output div
  $( '#carsOut' ).empty();
  // loop through cars in garage and display in the div with id of "carsOut"
  for( var i = 0; i < garage.length; i++ ){
    // car bold text
    $( '#carsOut' ).append( '<p><b>' + garage[ i ].year + ' ' + garage[ i ].make + ' ' + garage[ i ].model + '</b></p>' );
    // car description
    $( '#carsOut' ).append( '<p>' + garage[ i ].description + '</p>' );
    // car image
    $( '#carsOut' ).append( '<img src="' + garage[ i ].picURL + '">' );
  } // end for
} // end showGarage
