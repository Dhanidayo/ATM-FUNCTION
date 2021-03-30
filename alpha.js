var pin = 1234;
var balance = 1000; //Set Initial balance
var complaints = "yes";

function getBalance(a){
    alert("Your current balance is:" + a);
    atm();
}
getBalance(balance);

function getTime() {
    var today =  new Date();
    var time = today.getHours()+':'+today.getMinutes()+":"+today.getSeconds();
    alert("current time is " + time);
}


function user() {
    let userName = prompt("Enter your ZURI username to slot in your card", " ")
    let checkPin = +prompt("Enter your pin", " ");
    if(checkPin === pin) {
        let result = `Welcome ${userName}!`;
        alert(result);
    }else{
        alert("INCORRECT PIN." + " " + "Try again.");
        atm();
    }
}


function makeWithdrawal() {
    let withdrawal = prompt("How much would you like to withdraw?", " ");
    if (withdrawal <= balance){
        alert("Transaction Succesful!")
        alert("Take your cash.");
    }else if(withdrawal > balance){
        alert("Insufficient balance");
    }else{
        balance -= withdrawal;
        getBalance();
    }
}
    
function makeDeposit() {
    let deposit = +prompt("How much would you like to deposit?", " ");
    if(deposit === ""){
        makeDeposit();
    }else{
        let resultDeposit = balance + deposit;
        getBalance(resultDeposit);
    }
}

function logComplaints() {
    let complaints = prompt("What would you like to report?", " ");
    alert("Thank you for contacting us!");
}
atm();

function error() {
    alert("Invalid option, please try again.");
    atm();
}


function exit() {
    let leave = confirm("Would you like to end this transaction?");
    if(leave) {
        window.close();
    }else{
        atm();
    }
}


function atm() {
    let options = parseInt(
        prompt("Select an option: 1. Balance 2. Withdrawal 3. Deposit 4. Complaints 5. Exit")
        ); //Allows users to chose between options.

        user();
        getTime();
    
    if(options === 1) {
        getBalance(balance);
    } else if(options === 2){
        makeWithdrawal();
    } else if(options === 3){
        makeDeposit();
    } else if(options === 4){
        logComplaints();
    }else if(options === 5){
        exit();
    }else{
        error();
    }
}

atm();