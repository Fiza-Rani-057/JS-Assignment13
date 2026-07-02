//  Question 1

 document.write( "<h1>" + "Question 1" + "<br>" + "</h1>");

 function CurrentDate(currentDate){ 
    var date = new Date();
    document.write(date);

 }
 CurrentDate();

//  Question 2

  document.write( "<h1>" + "Question 2" +  "<br>" + "</h1>");

  function greetUser(greetUser){
   var firstName = prompt("Enter your first name");
   var lastName = prompt("Enter your last name");
   document.write("Hello " + firstName +  " " + lastName );
  }
  greetUser();

//   Question 3

  document.write( "<h1>" + "Question 3"  + "<br>" + "</h1>");

  function Sum(sumNumbers){
    var firstNumber = parseFloat(prompt("Enter first Number"));
    var secondNumber = parseInt(prompt("Enter second Number"));
    var addNumbers = firstNumber + secondNumber;
    document.write("The Sum of the numbers is: " + addNumbers );
  }
  Sum();

//   Question 4 

   document.write( "<h1>" + "Question 4" + "<br>"  + "</h1>");

   function numbers(x, y,z){
   var sum = x + y + z;
   return sum;
   }
   var callingFunction = numbers(4,8,9);
   document.write(callingFunction);

//    Question 5 

 document.write( "<h1>" + "Question 5" + "<br>"  + "</h1>");

 function sqroot(num){
    var squareRoot = Math.sqrt(num);
    return squareRoot;
 }
 var squareNumbers = sqroot(4);
 document.write("The square Root of 4 is: " +  squareNumbers);


//  Question 6 

 document.write( "<h1>" + "Question 6" + "<br>"  + "</h1>");

 function factorial(facNumber){
    var fac = 1;
    for(var i = 1; i <= facNumber; i++){
        fac = fac*i;
    }
    return fac;
 }
 var fact = factorial(6);
 document.write("The factorial of 6 is:" + fact);

//  Question 7 

  document.write( "<h1>" + "Question 7" + "<br>"  + "</h1>");

  function counting(start,end){
    for(var i = start; i <= end; i++){
      document.write( i, "<br>");
    }
  }
  counting(1, 20);

   document.write( "<h1>" + "Question 8" + "<br>"  + "</h1>");
  // Condition 
  // Right angle triangle.  Hypotenuse2 = Base2 + Perpendicular 
  //  Take base and perpendicular as inputs. Outer function
  //  : calculateHypotenuse()
  //  Inner function: calculateSquare() 

   function calculateHypotenuse(base, perpendicular){
     function calculateSquare(number){
     return number*number;
     }
     var baseSquare = calculateSquare(base);
     var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenous = Math.sqrt(baseSquare + perpendicularSquare);

      return hypotenous;
   }
   var calculate = calculateHypotenuse(8,9);
    document.write(Math.round(calculate));

    // Question 9 

    document.write( "<h1>" + "Question 9" + "<br>"  + "</h1>");

    function Area(width, heigt){
      var area = width * heigt;
      return area;
    }
    var calculateArea = Area(5, 7);
    document.write(calculateArea);

    // Question 10 

    function palindrome(str){
    var check = str.split(" ").reverse().join("");
    }
  if(str === check){
  document.write("Palindrome");
 }
   else{
  document.write("Not a Palindrome");
 }

 document.write(palindrome("madam"));
