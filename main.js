// PROGRAM Title

// Add an Event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);

// INPUT
let family = document.getElementById("family-in").value;
let noun1 = document.getElementById("noun1-in").value;
let action2 = document.getElementById("action2-in").value;

// Store order code in a function
function placeOrder() {
  // PROCESS
  let msg = "My ${family1} member loves to eat ${noun1} and then ${action}.";

  //OUTPUT
  document.getElementById("output").innerHTML = msg;
}
