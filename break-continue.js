// break 

// while loop 

var number = 0;

while(number <= 20){
    console.log(number);
    if(number == 12){
        break;
    }
    number++;
}

// for loop 

for(number = 10; number < 19; number++){
    console.log(number);
    if(number == 15){
        break;
    }
}



// for loop with array

var numbers = [11, 12, 45, 55, 56, 221, 41, 32, 41, 96, 100];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 200){
        break;
    }
    console.log(number);
}

// continue 


for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 90){
        continue;
    }
    console.log(number);
}