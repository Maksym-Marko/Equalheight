//Equalheight
function getMaxOfArray( numArray ) {
  return Math.max.apply( null, numArray );
}

function getMaxHeight( element ){

	var heightArray = [];

	$( element ).each( function(){			
		heightArray.push( $( this ).height() );
	} );		

	var maxHeight = getMaxOfArray( heightArray );
	$( element ).css( 'height', maxHeight + 2 + 'px' );

}