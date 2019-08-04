
var circles = document.querySelectorAll(".circle");
var codeRgb = document.getElementById('codeRgb');
var userMessage = document.getElementById('user_message');
var h1 = document.getElementById('title');
var hard = document.getElementById('hard');
var easy = document.getElementById('easy');
var newColors = document.getElementById('new');
var gameOver = false;

/////////////////color randomize//////////////////////
function rgb(r,g,b){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return col = "rgb" + "(" + r + "," + " " + g + "," + " " + b + ")";
    
}

////////////////////////////game base logic///////////////////
function circlePicker(){
    for (i = 0; i < circles.length; i++) {
       
        circles[i].style.backgroundColor = rgb();
        console.log(circles[i]);

        circles[i].addEventListener('click', function(){
            clickedColor = this.style.backgroundColor;
       
             if (clickedColor !== rand && gameOver === false) {
                userMessage.textContent = 'try again';
                this.style.backgroundColor = '#232323';
           } else {
                userMessage.textContent = 'ACED!!!';
                gameOver = true;
                h1.style.backgroundColor = rand;
                for (i = 0; i < circles.length; i++){
                    circles[i].style.backgroundColor = rand;
                }
           } 
       });
        
    }
        rand = circles[Math.floor(Math.random() * circles.length)].style.backgroundColor;
        console.log("random is...", rand);
        codeRgb.textContent = rand;

}

circlePicker();

///////////////////reset game function//////////////////////
function reset(){
    userMessage.textContent = '';
    h1.style.backgroundColor = 'steelblue';
    gameOver = false;
    circlePicker();
}

///////////////////buttons/////////////////////////////

newColors.addEventListener('click', function(){
    reset();
    for (i = 0; i < circles.length; i++) {
        circles[i].style.display = 'block';
    }
});

