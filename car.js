
var seconde = document.getElementById("sec");
var inputseconde = document.getElementById("input2").value;

var minute = document.getElementById("min");
var inputminute = document.getElementById("input1").value;
var temps;


document.getElementById("valider").addEventListener("click", function() {



    clearTimeout();
    countDown();

});


var countDown = function() {


    inputseconde--;

    minute.innerHTML=inputminute;
    seconde.innerHTML= inputseconde;






    if (inputseconde==0 && inputminute!=0){

        inputseconde=59;
        minute.innerHTML = inputminute--;
    }

    if (inputseconde==0 && inputminute==0){

        alert('fini').location.reload();
        stopCountDown();


    }


    temps=setTimeout(countDown,1000);

};


var stopCountDown = function() {

    clearTimeout(temps);

    console.log(inputseconde);


};



var stopButton = document.getElementById("pause");
stopButton.addEventListener("click", stopCountDown);


document.getElementById("play").addEventListener("click",function()
{

    countDown();
});

