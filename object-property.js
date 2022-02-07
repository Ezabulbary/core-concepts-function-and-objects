var myGf = {
    name: 'karina',
    id: 1424013,
    color: 'gray',
    home: 'nator',
    university: 'BUTE',
}


// three ways to set a value of an object property
var newId = 'id';

myGf.id = 12;
myGf['id'] = 13;
myGf[newId] = 14;

// i write more valus in the same property, than the last one is counted.
console.log(myGf);
