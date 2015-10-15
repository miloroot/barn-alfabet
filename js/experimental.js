var AlphabetModule = ( function( window, undefined ) {

  // cache DOM elements.
  var $letterzone = $( '.letterzone' ),
      $startTag = '<div class="letter">',
      $endTag = '</div>',
      $letter = $( '.letter' ),
      $writer = $( '.writer');

  // alphabet array
  var alphabet = [
    "A", "B", "C", "D",
    "E", "F", "G", "H",
    "I", "J", "K", "L",
    "M", "N", "O", "P",
    "Q", "R", "S", "T",
    "U", "V", "W", "X",
    "Y", "Z", "Å", "Ä",
    "Ö" ];

  // loops through given param and appends it to DOM element.
  function appendLetters() {
    for (var i = 0; i < alphabet.length; i++) {
      $letterzone.append( $startTag + alphabet[i] + $endTag );
    }
  }

  // function for click event, for when a letter gets clicked.
  function clickedLetter() {
    $letterzone.on( 'click', getLetter );
  }

  // get the clicked letter in the array and append to correct DOM element.
  // protection to not append entire array if clicked outside letter but inside element.
  // gets called as function in the click event in the function "letterClicked".
  function getLetter( e ) {
    if( e.target.innerHTML.length < 2 ) {
      $writer.append( e.target.innerHTML );
    }
    else {
      $writer.append( null );
    }
  }

  // return methods.
  // name used to initialize method is to the left. Name of function is to the right.
  return {
    showAllLetters : appendLetters,
    makeLettersClickable : clickedLetter
  };
} )( window );

// use/initialize methods
AlphabetModule.showAllLetters();
AlphabetModule.makeLettersClickable();
