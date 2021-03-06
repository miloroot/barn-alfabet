var AlphabetModule = ( function( window, undefined ) {

  // Appending variables for DOM elements.
  var $letterzone = $( '.letterzone' ),
      $startTag = '<div class="letter">',
      $endTag = '</div>',
      $letter = $( '.letter' ),
      $writer = $( '.writer'),
      $writerGameModeButton = $( '.writermode' ),
      $showOneLetterGameModeButton = $( '.onelettermode' );

  // Array containing the alphabet.
  var alphabet = [
    "A", "B", "C", "D",
    "E", "F", "G", "H",
    "I", "J", "K", "L",
    "M", "N", "O", "P",
    "Q", "R", "S", "T",
    "U", "V", "W", "X",
    "Y", "Z", "Å", "Ä",
    "Ö" ];

  // Setting "writer"-game mode as default (true).
  // And setting "show-one-letter"-game mode as optional (false).
  var writerGameMode = true;
  var showOneLetterGameMode = false;

  // Doing a check of wich game mode is active.
  if( writerGameMode == true && showOneLetterGameMode == false ) {
    console.log( "Writer game mode is activated." );
  }
  else if ( writerGameMode == false && showOneLetterGameMode == true ) {
    console.log( "Show one letter game mode is activated." );
  }

  // Loops through alphabet array above and appends it to the element ".letterzone".
  function appendLetters() {
    for (var i = 0; i < alphabet.length; i++) {
      $letterzone.append( $startTag + alphabet[i] + $endTag );
    }
  }

  // Method that handels a letter being clicked.
  function clickedLetter() {
    $letterzone.on( 'click', getLetter );
  }

  // Method is called in the click event in the method "clickedLetter".
  // Get the clicked letter in the array and appends it to the element ".writer".
  // Protection to not append entire array if clicked outside ".letter" but still inside it.
  function getLetter( e ) {
    if( e.target.innerHTML.length < 2 ) {
      $writer.append( e.target.innerHTML );
    }
    else {
      $writer.append( null );
    }
  }

  // Return methods.
  // Name used to initialize method is to the left. Name of method is to the right.
  return {
    showAllLetters : appendLetters,
    makeLettersClickable : clickedLetter
  };
} )( window );

// Use/initialize methods.
AlphabetModule.showAllLetters();
AlphabetModule.makeLettersClickable();
