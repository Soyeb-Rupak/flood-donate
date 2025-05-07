// document.getElementById('NoakhaliDonate').addEventListener('click', ()=>{
//     const inputAmount = getInputValue('noakhaliInputAmount'); 
//     const presentBalance= getTextValue('noakhaliBalance');
//     const myBalance= getTextValue('balance');
//     if(!isNaN(inputAmount) && inputAmount > 0 && inputAmount <= myBalance){
//         const myPresentBalance = myBalance - inputAmount;
//         const NoakhaliMainBalance = presentBalance + inputAmount ; 
//         console.log(myPresentBalance, NoakhaliMainBalance);
//         document.getElementById('balance').innerText= myPresentBalance; 
//         document.getElementById('noakhaliBalance').innerText= NoakhaliMainBalance; 
//         fieldClear('noakhaliInputAmount')
//     }else{
//         alert('Please enter valid Amount')
//     }
     
// })

document.getElementById('NoakhaliDonate').addEventListener('click', ()=>{

    donate('noakhaliInputAmount', 'balance','noakhaliBalance' ,'toast'  )
    
})

document.getElementById('FeniDonate').addEventListener('click', ()=>{
    donate('feniInput','balance', 'Fenibalance' ,'toast' )
})

document.getElementById('aidDonateBtn').addEventListener('click', ()=>{
    donate('aidInput','balance', 'Aidbalance', 'toast' )
})

