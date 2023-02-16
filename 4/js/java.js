'use strict'

$(document).ready(function(){

	$(".fa-search").click(function(){
    	$(".wrap, .search-inp").toggleClass("active");
    	$("search-inp[type='text']").focus();
    });
  
});
let products = false;


function cartEmptyActivate() {
	if (products == false) {
		$(".cartEmpty").addClass("cartEmpty__active");
		console.log(products);
	}else{
		$(".cartEmpty").removeProductsClass("cartEmpty__active");
	}
}

function removeProducts(){
	$(".card").remove();
	products = false;
	console.log(products)
}

function addGuideToCart(typeOfGuide){
	if( typeOfGuide == 'society'){
		$(".society").remove();
		$(".societyContainer").append( '<p class="addedToCart fw-bold">Society guide succesfully added ✔</p>' )

	}else if( typeOfGuide == 'culture'){
		$(".culture").remove();
		$(".cultureContainer").append( '<p class="addedToCart fw-bold text-end">Culture guide succesfully added ✔</p>' );

	}else if( typeOfGuide == 'power'){
		$(".power").remove();
		$(".powerContainer").append( '<p class="addedToCart fw-bold">Power guide succesfully added ✔</p>' );

	}else{
		console.log('unknown Guide');
	}
}
