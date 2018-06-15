/*
JavaScript Algorithms and Data Structures Projects: Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function checkCashRegister(price, cash, cid) {
  
    var statusValue = "OPEN";
  	var changeArray = [];

    var arrayOfCoinWorth = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

    var totalCashInRegister = 0;

	  //running a for loop to find total cash in register

    for (var i = 0; i < cid.length; i++) {
      totalCashInRegister = totalCashInRegister + cid[i][1];
    }

    totalCashInRegister = totalCashInRegister.toFixed(2);

    var changeDue = cash - price;

    // if total cash in register is lower than change required, we can automatically assume insufficient funds

    if (totalCashInRegister < changeDue) {
      statusValue = "INSUFFICIENT_FUNDS";
      return {status: statusValue, change: changeArray};
    }

    // if total cash in register matches change required, then we can return status closed and cash in drawer from input

    if (totalCashInRegister == changeDue) {
      statusValue = "CLOSED";
      return {status: statusValue, change: cid};
    }
	
	//for loop loops through all the currencies from ONE HUNDRED down to pennies and adds to array and adjusts change due

    for (var i = 8; i > -1; i--) {
        var requiredInCurrency = changeDue - (changeDue % arrayOfCoinWorth[i]);
        if (requiredInCurrency > 0) {
      
        if (requiredInCurrency <= cid[i][1]) {
          changeArray.push([cid[i][0], requiredInCurrency]);
          changeDue = (changeDue - requiredInCurrency).toFixed(2);
          console.log("if (requiredInCurrency <= cid[i][1]) { passed and change due is" + changeDue);
        }
        if (requiredInCurrency > cid[i][1] && cid[i][1] > 0) {
          changeArray.push([cid[i][0], cid[i][1]]);
          changeDue = (changeDue - cid[i][1]).toFixed(2);
          console.log("if (requiredInCurrency > cid[i][1] && cid[i][1] > 0) { passed and change due is" + changeDue);
        }
      }
    }

    // if change due is more than 0, then funds were insufficient at some point. If this if statement doesn't pass, then return statusValue & changeArray

    if (changeDue > 0) {
      console.log("changeDue > 0 if statement passed" + changeDue);
      statusValue = "INSUFFICIENT_FUNDS";
      changeArray = [];
      console.log(statusValue);
      console.log(changeArray);
      return {status: statusValue, change: changeArray};
    }
    
    return {status: statusValue, change: changeArray};
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


/*
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/