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
      document.getElementById("reset").addEventListener("click", handleReset);

      console.log("Window loaded!");
    }

    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).

    function handleClick() 
    {
      // get input text from user text box
      const inputText = document.getElementById("input-text").value;

      // encrypt the input text with a basic 1 shift cipher 
      const encryptedText = shiftCipherEncrypt(inputText, 1);

      // display the encrypted text
      document.getElementById("result").textContent = encryptedText;

      // console output
      console.log("Button Clicked");
    }

    function handleReset()
    {
      // clear the input text area 
      document.getElementById("input-text").value = "";

      console.log("Reset Button Clicked");
    }

    // shift cypher encryption function
    function shiftCipherEncrypt(text, shift) {
      return text
        .split("")
        .map(char => {
          if (char.match(/[a-zA-Z]/)) {
            const base = char.toLowerCase() === char ? "a".charCodeAt(0) : "A".charCodeAt(0);
            const offset = (char.charCodeAt(0) - base + shift) % 26;
            return String.fromCharCode(base + offset);
          } else if (char.match(/\d/)) {
            // If the character is a digit (0-9), shift it by +1
            const digit = parseInt(char);
            const shiftedDigit = (digit + shift) % 10;
            return shiftedDigit.toString();
          }
          return char;
        })
        .join("");
    }

  }
)();
