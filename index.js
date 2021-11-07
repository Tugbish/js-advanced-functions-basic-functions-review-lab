function saturdayFun(event="roller-skate") {
    return `This Saturday, I want to ${event}!`;
}

function mondayWork(event="go to the office"){
    return `This Monday, I will ${event}.`;
}

function wrapAdjective(value1="*"){
    return function(value2="special"){
        return `You are ${value1}${value2}${value1}!`;

    }
}

let Calculator = { 
    add : function() { return 1+3; } , 
    subtract : function() { return 1-3; } ,
    multiply : function() { return 1*3; } ,
    divide : function() { return 10/5; }
};

function actionApplyer(number, arr) {
    if (arr.length === 0){
        return number;
    }
    return arr[2](arr[1](arr[0](number)));

};