const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-num");
const checkNumberBtn = document.querySelector("#check-btn");
const messageDisplay = document.querySelector("#message");

checkNumberBtn.addEventListener("click", function checkBdayLucky(){

    if(dateOfBirth.value && luckyNumber.value){
        const dobNum = dobToNumberConversion(dateOfBirth.value);//it will get number as result from dob string
        const dobSum = getDobSum(dobNum);
        // console.log(dobNum,dobSum);
        checkLuckyFinal(dobSum,luckyNumber.value);
    }
    else{
        showMessage("Aye Yooooo!! You Trippin Homie.?#$%???Enter Details Man, Stop Foolin Around 😠😡👿");
    }

});

function checkLuckyFinal (dobSum,luckynum){

    if(dobSum % luckynum === 0){
        showMessage(" YAAAS, You're Lucky 🥳🤩😎, Sheeeeessh 🥴👈");

    }
    else{
        showMessage(" Naah Dawg, You ain't lucky Bruh!!! 💀☠️");
    }
}

function showMessage (text){
    messageDisplay.innerText = text;
}

function dobToNumberConversion(dob){
    return dob.replaceAll('-',"");  
}

function getDobSum (dobNum){
    let sum = 0;
    for(i=0;i<dobNum.length;++i)
    {
        sum = sum + Number(dobNum.charAt(i));
    }
    return sum;
}