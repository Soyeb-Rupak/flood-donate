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