// ........routing to another page..........
const routing= (page)=>{
    window.location.href=`../${page}`
}

// for donation ..................
const getInputValue= (id)=>{
    const getValue= document.getElementById(id).value ;
    const getValueToNumber= parseFloat(getValue);
    return getValueToNumber;
}

// for get value from text field..............
const getTextValue=(id)=>{
     const getTextValue=  document.getElementById(id).innerText;
     const getTextValueToNumber= parseFloat(getTextValue);
     return getTextValueToNumber; } 

     // field clear .................
     const fieldClear = (id)=>{
        document.getElementById(id).value= ''
     }


    //  const donate= (inputAmount, balanceAmount, donateReceive )=>{
    //     const inputDonate= getInputValue(inputAmount);
    //     const BalancetextValue= getTextValue(balanceAmount)
    //     const totalDonateReceived = getTextValue(donateReceive)

    //     if(!isNaN(inputDonate) && inputDonate> 0 && inputDonate<=BalancetextValue ){
    //         const mainBalance= BalancetextValue - inputDonate;
    //         const noakhaliDonateBalance = inputDonate + totalDonateReceived;

    //         document.getElementById(balanceAmount).innerText = mainBalance; 
    //         document.getElementById(donateReceive).innerText = noakhaliDonateBalance ;

    //         fieldClear(inputDonate);
           
    //     }

    //  }

    const donate=(inputBalance, mainBalance, areaBalance)=>{
const inputValue= getInputValue(inputBalance);
const myBalance = getTextValue(mainBalance) ;
const areaWiseBalance = getTextValue(areaBalance);
if(!isNaN(inputValue) && inputValue> 0 && inputValue<= myBalance){
    const myRemainBalance= myBalance - inputValue ;
    const areaBalanceUpdate= inputValue + areaWiseBalance;

    document.getElementById(mainBalance).innerText= myRemainBalance;
    document.getElementById(areaBalance).innerText= areaBalanceUpdate;

    fieldClear(inputBalance)

}else{
    alert('give correct Amount')
}
    }