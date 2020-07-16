
// Problem 1: Feet to Mile

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(5);
    result = result.toFixed(8);
console.log(result);



//  Problem 2: Wood Calculator

function woodCalculator(chair, table, bed){
    var chairNum = chair * 1;
    var tableNum = table * 3;
    var bedNum = bed * 5;
    var totalWood = chairNum + tableNum + bedNum;
    return totalWood;
}

let totalOutput = woodCalculator(10, 3, 3);
console.log(totalOutput);


// Problem 3: Break Calculator

    function brickCalculator(floorNum){
        var perFloor = floorNum * 1000;
        var floorLength;

        if(floorNum >0 && floorNum <= 10){
           floorLength = perFloor * 15;
        }
        else if(floorNum > 10 && floorNum <= 20){
            floorLength = (perFloor * 12) + 30000;
        }
        else if(floorNum > 20){
            floorLength = (perFloor * 10) + 70000;
        }
        else{
            console.log('please enter a valid number')
        }
        return floorLength;
    }
    var finalOutput = brickCalculator(10);
    console.log(finalOutput);




// Prob 4: Tiny Friend

function tinyFriend(friend) {

    let shortest = undefined;
  
    if (friend.length > 0) {
      for (let i = 0; i < friend.length; i++) {
        if (typeof friend[i] === 'string' && (shortest == undefined ||friend[i].length < shortest.length )) {
          shortest = friend[i];
        }
      }
    }
  
    return shortest;
  }
  
  
  var output = tinyFriend(['Nawshad', 10, 'Mahveer', 2, 'Araf', 'Sarah', 'Yasha', 'Nira']);
  console.log('Your tiny friend is' + ' ' + output);