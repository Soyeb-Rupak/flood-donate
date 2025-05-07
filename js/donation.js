document.getElementById('NoakhaliDonate').addEventListener('click', ()=>{
    const inputAmount = getInputValue('noakhaliInputAmount'); 
    const presentBalance= getTextValue('noakhaliBalance');
    const myBalance= getTextValue('balance');
    if(!isNaN(inputAmount) && inputAmount > 0 && inputAmount <= myBalance){
        const myPresentBalance = myBalance - inputAmount;
        const NoakhaliMainBalance = presentBalance + inputAmount ; 
        console.log(myPresentBalance, NoakhaliMainBalance);
        document.getElementById('noakhaliBalance').innerText= myPresentBalance; 
        document.getElementById('noakhaliBalance').innerText= NoakhaliMainBalance; 
        fieldClear('noakhaliInputAmount')
    }else{
        alert('Please enter valid Amount')
    }
     
})