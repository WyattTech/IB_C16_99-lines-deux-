//Create the addEventListener called DOMContentLoaded--this holds all the programming

document.addEventListener("DOMContentLoaded", function () {
  /*1.Create a button node from the DOM; 2.Create a textNode called "Sing!" for the button node;
   3.Append the text to the button node; 4.Append the button node to the document.body */
  const btn = document.createElement("button");
  const btnText = document.createTextNode("Sing!");
  btn.appendChild(btnText);
  document.body.appendChild(btn);
  //5.Create an addEventListener set to onclick using the console.log code from part 1
  btn.addEventListener("click", function () {
    // Declare an Array with Five Objects
    let friends = [
      "Papa Smurf",
      "Smurfette",
      "Lazy Smurf",
      "Clumsy Smurf",
      "Brainy Smurf",
    ];

    //Loop the Array
    for (let j = 0; j < friends.length; j++) {
      let smurfs = document.createElement("div");
      smurfs.classList.add("friends");
      let smurfh3 = document.createElement("h3");
      /*Styling the h3s */
      smurfh3.style.border = "5px solid black";
      smurfh3.style.padding = "10px";
      smurfh3.style.fontSize = "1.55rem";
      smurfh3.style.borderTopColor = "#ff0090";
      smurfh3.style.backgroundColor = "#fff600";
      smurfh3.style.color = "#0000ff";
      smurfh3.style.display = "flex";
      smurfh3.style.alignItems = "center";
      smurfh3.style.textAlign = "center";
      //End of Some Styling//
      smurfh3.textContent = friends[j];
      smurfs.appendChild(smurfh3);
      document.body.appendChild(smurfs);

      for (let i = 99; i > 0; i--) {
        let lyrics = document.createElement("p");
        smurfs.appendChild(lyrics);
        smurfs.style.lineHeight = "2.5";
      
        smurfs.style.justifyContent ="center";
        if (i >= 2) {
          lyrics.textContent =
            i +
            " " +
            "smurf berries on the vine, " +
            " " +
            i +
            " " +
            "smurf berries on the vine, " +
            friends[j] +
            " picks one off, scarfs  it down, then goes to chow town on " +
            " ";
        } else if (i == 1) {
          lyrics.textContent =
            i +
            " " +
            "smurf berry on the vine, " +
            " " +
            i +
            " " +
            "smurf berry on the vine; " +
            friends[j] +
            "scarfs it down, clears the last one out, and now there's no more berries on the vine";
        }
      }
    }
  });

  /*Create statements that targets the elements from the HTML file for deletion: div, h3, and p elements for each friend.*/
  const div1 = document.querySelector(".friend");
  div1.parentNode.removeChild(div1);
});
