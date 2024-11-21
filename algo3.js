leap year checker :
create a function that takes a year as input and determines whether it is a leap year or Not .
leap year are divisible by 4, but not by 100 unless they are also divisinle by 400.


function is LeapYear(year){
    if ((year% 4=== 0 && year %100 ! ==0)|| (year % 400 === 0)){
        return(`$ {year} is a leap year.`);

    }else{
        return(`${year}is not a leap year.`);

    }
}
console.log (isLeapYear(2021))



ticket pricing :
Write a program that prompts the user to enter thier age and then datermines the price of a movie ticket based on the following criteria :
- children (age <= 12): $10
-teenagers (age 13-17):$15
- adults (age >= 18): $20


function ticketPricing(age){
    return age <= 12 ? `the price for the ticket is $10.` : age >=18? `the price for the ticket is $20.` : `the price for the ticket is $15.`
    }




WeatherClothingAdviser
Develop a program that asks the user for the current temperture and whether it is raining or not . Based on this information ,


    function WeatherClothingAdviser(T){
        return T <20? 'wear warm.' : T>30 ? 'it a summer.' : 'wear what you want'

    }



Fibonacci Sequence :
Implement a recursive function to generate the nth Fibonacci number . the Fibonacci Sequence starts with 0 and1,
and each subseauent number is the sum of the two preceding number (0,1,1,2,3,5,8..).

    function Fibonacci (n){
if (n == 0|| n== 1){
    return 1
}
else {
    return Fibonacci(n-1)+ Fibonacci(n-2)
}

    }




Palindrome cheker : Create a recursive function to check if a given string is a palindrome ( reads the same forwaeds and backwards),

ignoring spaces , punctuation, and capitalization.

    function Palindrome (ch){
        if (ch.length<=1 ){
            return true 
        }
        if ((ch[0] === ch[ch.length - 1])) {
            return Palindrome((ch.slice(1, -1)))
        }
        return false 
    }
power Function
write a recursive function to calculate the raising a number to a given power .


    function power(x,n){
        if (n==1){
            return x
        }
        else{
            return x * power (x,n-1)
        }
    }