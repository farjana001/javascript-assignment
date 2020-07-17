
// Problem 1: Feet to Mile

function feetToMile(feetInput){
    var mile;
    if(feetInput > 0){
        mile = feetInput / 5280;
        mile = mile.toFixed(8);
    }
    else{
        console.log('Please enter a valid number');
    }
    return mile;
 }

 var result = feetToMile(5);
 console.log(result);



//  Problem 2: Wood Calculator

function woodCalculator(chair, table, bed){
    var chairNumbers = chair * 1;
    var tableNumbers = table * 3;
    var bedNumbers = bed * 5;
    
    if(chairNumbers > 0 && tableNumbers > 0 && bedNumbers > 0){
        var totalWood = chairNumbers + tableNumbers + bedNumbers;
    }
    else{
        console.log('Please enter a valid number');
    }
    return totalWood;
}

var totalOutput = woodCalculator(10, 3, 3);
console.log(totalOutput);

// Problem 3: Brick Calculator

    function brickCalculator(floorNum){
        var perFloor = floorNum * 1000;
        var floorLength;

        if(floorNum > 0 && floorNum <= 10){
           floorLength = perFloor * 15;
        }
        else if(floorNum > 10 && floorNum <= 20){
            floorLength = (perFloor * 12) + 30000;
        }
        else if(floorNum > 20){
            floorLength = (perFloor * 10) + 70000;
        }
        else{
            console.log('Please enter a valid number')
        }
        return floorLength;
    }
    var finalOutput = brickCalculator(8);
    console.log(finalOutput);




// Prob 4: Tiny Friend

function tinyFriend(friend) {

    var shortest = [0];
  
    if (friend.length > 0) {
      for (let i = 0; i < friend.length; i++) {
        if (typeof friend[i] === 'string' && (shortest == 0 || friend[i].length < shortest.length )) {
          shortest = friend[i];
        }
      }
    }
  
    return shortest;
  }
  
  
  var output = tinyFriend(['Nawshad', 10, 'Mahveer', 2, 'Araf', 'Sarah', 'Yasha', 'Nira']);
  console.log('Your tiny friend is' + ' ' + output);


