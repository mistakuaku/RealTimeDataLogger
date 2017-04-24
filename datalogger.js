var numberValues = []; //declaring a global variable array

function addANewNumber()
{
  //get the text input from the DOM and store it into a variable
  //check if that variable is a numberValues
  //IF it is... add that number to the back of the array

  var newNum = document.getElementById("dataInput").value;

  if( isNaN(newNum) == false )
  {
    newNum = Number(newNum);
    numberValues.push(newNum);
    var newTotal = updateTotal();
    document.getElementById("total").innerHTML = newTotal;
    document.getElementById("average").innerHTML = newTotal / numberValues.length;
  }
}

function updateTotal ()
{
  var total = 0;

  for (i = 0; i < numberValues.length; i++)
  {
    total += numberValues[i];
  }

  //document.getElementById("total").innerHTML = total;

  return total;

}

function updateAverage ()
{
  var average = 0;

  average = updateTotal();

  average = average / numberValues.length;
  document.getElementById("average").innerHTML = average;
}
