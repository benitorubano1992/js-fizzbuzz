const rowCont=document.querySelector(".row");
let className="";
let result="";

for(let i=1;i<=100;i++){
   let numberContent=i;
    if(i % 3===0 && i % 5 ===0 ){
        className="fizzbuzz";
        numberContent=className;
    }else if(i % 3 ===0){
        className="fizz"
        numberContent=className;
    }else if(i % 5 ===0 ){
        className="buzz"
        numberContent=className;
    }
    else
    className="normal";

    if(className==="normal"){
        console.log(i);
        
    }else
    console.log(className);
    
    if(i % 7 ===0){
    result+=`<div class="col ${className} mr ">${numberContent}</div> `;     
    }else 
    result+=`<div class="col ${className}">${numberContent}</div> `;
}

rowCont.innerHTML=result;

