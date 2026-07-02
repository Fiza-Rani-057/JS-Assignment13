//  Question 1

 document.write( "<h1>" + "Question 1" + "<br>" + "<br>" + "</h1>");

 function CurrentDate(currentDate){ 
    var date = new Date();
    document.write(date);

 }
 CurrentDate();

//  Question 2

  document.write( "<h1>" + "Question 2" + "<br>" + "<br>" + "</h1>");

  function greetUser(greetUser){
   var firstName = prompt("Enter your first name");
   var lastName = prompt("Enter your last name");
   document.write("Hello " + firstName +  " " + lastName );
  }
  greetUser();

//   Question 3

  document.write( "<h1>" + "Question 3" + "<br>" + "<br>" + "</h1>");

  function Sum(sumNumbers){
    var firstNumber = parseFloat(prompt("Enter first Number"));
    var secondNumber = parseInt(prompt("Enter second Number"));
    var addNumbers = firstNumber + secondNumber;
    document.write("The Sum of the numbers is: " + addNumbers );
  }
  Sum();