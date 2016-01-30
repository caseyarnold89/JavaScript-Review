/* Declare and Define the functions here that will make the function calls below work properly */
function firstN (arrNames, cb) {
    var first = arrNames[0];
    return cb(first);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
firstN(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function lastN (arrNames, cb) {
    var last = arrNames[arrNames.length-1];
    return cb(last);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
lastN(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.
function contains (findName, arrNames, cb) {
    var nameFound = false;
    for (var i in arrNames) {
        if (arrNames[i] === findName) {
            nameFound = true;
            return cb(nameFound);
        }
    }
    return cb(nameFound);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function map (arrNums, cb) {
    var newArr = [];
    for (var i in arrNums) {
        newArr[i] = cb(arrNums[i]);
    }
    return newArr;
}


var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function uniq(arrNames, cb) {
    var uniqArr = [];
    for (var i = 0; i < arrNames.length; i++) {
        var flag = false;
        for (var j = 0; j < uniqArr.length; j++) {
            if (uniqArr[j] === arrNames[i]) {
                flag = true;
            }
        }
        if (flag === false) {
            uniqArr.push(arrNames[i]);
        }
    }
    return cb(uniqArr);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


function each (arrNames, cb) {
    for (var i = 0; i < arrNames.length; i++) {
        cb(arrNames[i], i);
    }
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function getUserById (userId, userArr, cb) {
    for (var i in userArr) {
        if (userId === userArr[i].id) {
            cb(userArr[i]);
        }
    }
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


function find(numArr, cb) {
    for (var i = 0; i < numArr.length; i++) {
        if (cb(numArr[i]) == true) {
            return numArr[i];
        }
    }
}

//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})
