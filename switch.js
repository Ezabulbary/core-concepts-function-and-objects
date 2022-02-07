var color = 'blue';

if(color == 'white'){
    console.log('the color is white');
}
else if(color == 'yellow'){
    console.log('the color is yellow');
}
else if(color == 'red'){
    console.log('the color is red');
}
else if(color == 'gray'){
    console.log('the color is gray');
}
else if(color == 'blue'){
    console.log('the color is blue');
}
else{
    console.log('the color is black');
}


// switch property

switch(color){
    case 'white':
        console.log('the color is white');
        break;
    case 'red':
        console.log('the color is red');
        break;
    case 'gray':
        console.log('the color is gray');
        break;
    case 'yellow':
        console.log('the color is yellow');
        break;
    case 'blue':
        console.log('the color is blue');
        break;
    default:
        console.log('the color is black');
}