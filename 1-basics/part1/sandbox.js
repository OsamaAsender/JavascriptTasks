'use strict'


let cash;
let liability;
let revenues;
let expenses;
let equity;
let result;
let profit;
let sales;

document.getElementById("submit").onclick = function(){
    cash = parseInt(document.getElementById("cash").value);
    liability =parseInt(document.getElementById("liability").value);
    result = cash / liability;
    alert(`Cash Flow Ratio : Cash / Liability =${result}`);
};
// ----------------------------------------------------------------------------- 


document.getElementById("NetIncomeSub").onclick= function(){
    revenues = parseInt(document.getElementById("Revenue").value);
    expenses = parseInt(document.getElementById("Expenses").value);
    result = revenues - expenses;
    alert(`Net Income : Revenue - Expenses =${result}`);
};
//  ----------------------------------------------------------------------------

document.getElementById("TotalAssetsSub").onclick=function(){
    liability = parseInt(document.getElementById("totalAssestsLiability").value);
    equity = parseInt(document.getElementById("equity").value);
    result = liability + equity;
  alert(`Total Assets : Liability + equity =${result}`)
}
//  ----------------------------------------------------------------------------
document.getElementById("netIncome2Sub").onclick=function(){
    profit = parseInt(document.getElementById("profit").value);
    sales = parseInt(document.getElementById("sales").value);
    result = profit * sales;
  alert(`Total Assets : profit X sales =${result}`)
}
//  ----------------------------------------------------------------------------
document.getElementById("averageSub").onclick=function(){
    let numb1 = parseInt(document.getElementById("num1").value);
    let numb2 = parseInt(document.getElementById("num2").value);
    let numb3 = parseInt(document.getElementById("num3").value)
    result=(numb1+numb2+numb3)/3;
    alert(`Average : sum / totalNumbers = ${result}`)
}
//  ----------------------------------------------------------------------------
document.getElementById("discountsub").onclick = function() {
    let originalPrice = parseFloat(document.getElementById("price").value);
    let discountPercentage = parseFloat(document.getElementById("discount").value) / 100;
    let discountedPrice = originalPrice * (1 - discountPercentage);
    alert(`Discounted Price: $${discountedPrice}`);
};
//  ----------------------------------------------------------------------------
document.getElementById("ageSubmit").onclick = function(){
    let age = parseInt(document.getElementById("age").value);
    if(age > 18 && age < 30){
        result=true;
    }else{
        result=false;
    }
    if(result==true){
        alert(`${age} - You are Within the required Age`)
    }else
    alert(`${age} - You are not Eligible`)
}
//  ----------------------------------------------------------------------------
document.getElementById("ExponentSub").onclick= function(){
    let baseNum = parseInt(document.getElementById("number").value);
    let exponent = parseInt(document.getElementById("expo").value);
    result = Math.pow(baseNum,exponent);
    alert(`${baseNum}^${exponent} = ${result}`)
}
//  ----------------------------------------------------------------------------
document.getElementById("RemainderSub").onclick=function(){
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    result= num1 % num2;
    alert(`Remainder : Inp 1 % Inp2 =${result}`)
}