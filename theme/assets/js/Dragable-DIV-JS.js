  var jsdrag;

  document.addEventListener("drag", function( event ) {
  }, false);

  document.addEventListener("dragstart", function( event ) {
      jsdrag = event.target;
  }, false);

  document.addEventListener("dragend", function( event ) {
     jsdrag.style.top = event.clientY + "px";
     jsdrag.style.left = event.clientX + "px";

  }, false);

