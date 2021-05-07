

let a = document.getElementById("input-element");
function val(a){  
var input = document.getElementById("display").value += a;
return;
}



function calculate(){

    let b=  document.getElementById("display").value ;
    let c = eval(b);
    document.getElementById("display").value = c;
}

function clearval(){
    document.getElementById("display").value = "";
}


var input = document.getElementById("display");
input.addEventListener("keyup", function(event) {
    if (event.keyCode===13) {
        event.preventDefault();
        document.getElementById("calculate").click();
    }
});

function myfunction(){
    let a = document.getElementById("display").value;
    debugger
    if(isNaN(a))
    {
    debugger
    alert("Only number is Allowed");
    debugger
    document.getElementById('display').value = '' ;
    }
    }

