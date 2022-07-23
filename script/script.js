function factorial(){
    let userInputNumber = document.getElementById('demo').value; 

    if(userInputNumber === "") {
        document.getElementById('demo2').innerHTML='';
        document.getElementById('demo2').style.padding='0';
        document.getElementById('demo2').style.borderWidth='0';
        return;
    };
    document.getElementById('demo2').style.padding='8px';
    document.getElementById('demo2').style.borderWidth='1px'; 
    if(userInputNumber == 0) return document.getElementById('demo2').innerText= 'The factorial of ' + userInputNumber +' is 1';
    for (var i=userInputNumber-1; i>=1; i--) {
        userInputNumber = userInputNumber * i;
    }
    document.getElementById('demo2').innerText= 'The factorial of ' +document.getElementById('demo').value+' is ' + userInputNumber 
}