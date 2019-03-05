// set up text to print, each item in array is new line
var aText = new Array(
    "Howdy!","I'm Mohamad 'Em' Karimifar, a digital designer & full stack developer based in Austin, TX.", "I'm currently redesiging my portfolio and will be back with a new one soon!", "Stay connected:"
    );
    var iSpeed = 25; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += "<p>"+aText[iRow++] + "</p>"; //'<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "<span id='dash'>_</span>";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();


    function contactIn(){
        TweenMax.staggerFromTo(".contact-el", 3 ,{opacity:0},{opacity:1, delay: 6}, 0.2 )
    }
    // setTimeout(contactIn, 2000);
    contactIn();