function addValue(){
    var opr1=document.getElementById("input1").value;
    var opr2=document.getElementById("input2").value;
    //document.getElementById("result").value = opr1;
    var1=parseInt(opr1,10);
    var2=parseInt(opr2,10);

    var result = var1+var2;
    document.getElementById("result").value = var1 +" + "+ var2 +" = " +result;

    
}

function multipleValue(){
    var opr1=document.getElementById("input1").value;
    var opr2=document.getElementById("input2").value; 
    var1=parseInt(opr1,10);
    var2=parseInt(opr2,10);
    var result = var1*var2;
    document.getElementById("result").value = var1 + " * "+ var2 + " = " + result;
}

function divideValue(){
    var opr1=document.getElementById("input1").value;
    var opr2=document.getElementById("input2").value; 
    var1=parseInt(opr1,10);
    var2=parseInt(opr2,10);
    if(var2==0){
      alert("Second value cannot be 0! Try again!");
      
    }
    var result = var1/var2;
    
    
    document.getElementById("result").value = var1 + " / " + var2 + " = " +result;
}

function subtractValue(){
    var opr1=document.getElementById("input1").value;
    var opr2=document.getElementById("input2").value; 
    var1=parseInt(opr1,10);
    var2=parseInt(opr2,10);
    var result = var1-var2;
    document.getElementById("result").value = var1 + " - " + var2 + " = " + result;
}

function resetValue(){
  var empty = " ";
  document.getElementById("result").value = empty;
  alert("The calculation form was reset!");
}