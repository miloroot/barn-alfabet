$( function() {

  console.log( "jQuery loaded." )

  var $letterzone = $( '.letterzone' ),
      $startTag = '<div class="letter">',
      $endTag = '</div>',
      $letter = $( '.letter' )

  var alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Å",
    "Ä",
    "Ö"
  ];

  for( var i = 0; i < alphabet.length; i++ ) {
    $letterzone.append( $startTag + alphabet[i] + $endTag )
    var thisLetter = alphabet[i]
  }

  $letterzone.on( 'click', getLetter )

  function getLetter( e ) {
    console.log( 'the letter clicked: ', e.target.innerHTML )
  }

})
