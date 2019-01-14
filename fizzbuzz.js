/*
    Author: Adolfo Gonzalez
    Date: 1/13/2019

    File: fizzbuzz.js

    This is the javascript file with the functions for js-review.html.
 */

/*  Create a JavaScript program that prints "Introduction to JavaScript"
    to the console window,and test it in your browser.*/
console.log("Introduction to JavaScript");//first test to test console output

//function calls
fizzBuzz();
countBs('Blue, Black, Brown, Orange, Green, Yellow');
countChars('blah,blah,blah,Blah,Bla,Bla', 'a');

/*  Write the FizzBuzz program described on page 38 of your text. */

function fizzBuzz(){
    //numbers for 1 to 100
    for(var i = 1; i <= 100; i++){

        //divisible by 3 and 5
        if ((i % 5) === 0 && (i % 3) === 0){

            console.log("FizzBuzz" );

        }//if numbers are divisible by 5 but not by 3
        else if ((i % 5) === 0  && (i % 3) !== 0){

            console.log("Buzz" );
        }else if ((i % 3) === 0){

            //if numbers divisible by 3
            console.log("Fizz");
        }
        //
        else{
            //else print i
            console.log(i);
        }

    }//end for loop
}//end of fizzbuzz function

/*  Write just the countBs function (and the code needed to test it)
    described on page 56 ("Bean Counting") in your text.*/

/*function countBs(sentence){
    //counter variable
    var letter = 0;

    for (var num = 0; num < sentence.length; num++){

        if(sentence.charAt(num) === 'B'){

            letter++;
        }

    }
    console.log("The number of letter \"B\'s is " + letter);
}*/


/*  Write the countChar function (and the code needed to test it)
    described on page 56 ("Bean Counting") in your text.*/

function countChars(sentence, letter){

    //counter variable
    var count = 0;

    for (var num = 0; num < sentence.length; num++){

        if(sentence.charAt(num) === letter){

            count++;
        }

    }
    console.log("There are " + count + ", " + letter + "\'s.");

    //return count;
}

/*  Rewrite countBs to use countChar.*/

function countBs(newSentence){
    //countChar call
    return countChars(newSentence, 'B');

}