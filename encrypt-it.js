/*
 * Starter file 
 */
(
  function() 
  {
    "use strict";

    /**
     * The starting point in our program, setting up a listener
     * for the "load" event on the window, signalling the HTML DOM has been constructed
     * on the page. When this event occurs, the attached function (init) will be called.
     */
    window.addEventListener("load", init);

  
    function init() 
    {
      // Note: In this function, we usually want to set up our event handlers
      // for UI elements on the page.

      // Event listener for the "encrypt it" button
      document.getElementById("encrypt-it").addEventListener("click", handleClick);


      // Event listener for the "reset" button
      document.getElementById("reset").addEventListener("click", handleClick);

      console.log("Window loaded!");
    }

    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).

    function handleClick() 
    {
      console.log("Button Clicked");
    }

    function handleReset()
    {
      // Clear the input text area 
      document.getElementalByID("input-text").value = "";

      console.log("Reset Button Clicked");
    }

  }
)();
