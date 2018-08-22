var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var count1 = document.getElementById("count1");
var count2 = document.getElementById("count2");
var count3 = document.getElementById("count3");
var myButtons = [btn1, btn2, btn3];
var myCounts = [count1, count2, count3];
var counter = 0;
var counter2 = 0;
var counter3 = 0;

/*for(var i = 0; i < myButtons.length; i++) { 
    myButtons[i].addEventListener("click", function(){
            count1.innerHTML = counter++;
            count2.innerHTML = counter2++;
        
        console.log();
})
}*/

btn1.addEventListener("click", function(){
    if(counter === 6){
        btn1.disabled = true;
    }
    else{
        count1.innerHTML = counter++;
    }
})

btn2.addEventListener("click", function(){
    if(counter2 === 6){
        btn2.disabled = true;
    }
    else{
        count2.innerHTML = counter2++;
    }
})

btn3.addEventListener("click", function(){
    if(counter3 === 6){
        btn3.disabled = true;
    }
    else{
        count3.innerHTML = counter3++;
    }
})