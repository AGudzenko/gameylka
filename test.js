var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var btn = document.getElementById("myBtn");

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");

btn.onclick = function() {
    location.reload();
  }

span.onclick = function() {
    modal.style.display = "none";
    location.reload();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        location.reload();
    }
}

btn2.onclick = function() {
    location.reload();
  }

span.onclick = function() {
    modal2.style.display = "none";
    location.reload();
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        location.reload();
    }
}
      
      
      
      let engine = Matter.Engine.create();

      let render = Matter.Render.create({
          element: document.body,
          engine: engine,
          options: {
            width: 1360,
            height: 670, 
            wireframes: false
        }
      });
      
      let ground1 = Matter.Bodies.rectangle(50, 545, 100, 300, { isStatic: true }); 
      let ground2 = Matter.Bodies.rectangle(125, 595, 150, 150, { isStatic: true }); 
      let ground3 = Matter.Bodies.rectangle(350, 595, 100, 150, { isStatic: true }); 
      let ground4 = Matter.Bodies.rectangle(475, 570, 150, 200, { isStatic: true });
      let ground5 = Matter.Bodies.rectangle(600, 595, 100, 150, { isStatic: true });
      let ground6 = Matter.Bodies.rectangle(750, 655, 100, 100, { isStatic: true });
      let ground7 = Matter.Bodies.rectangle(850, 595, 100, 150, { isStatic: true });
      let ground8 = Matter.Bodies.rectangle(1050, 445, 150, 50, { isStatic: true });
      let ground9 = Matter.Bodies.rectangle(1200, 655, 100, 100, { isStatic: true });
      let ground10 = Matter.Bodies.rectangle(1325, 595, 170, 300, { isStatic: true });
      let ground11 = Matter.Bodies.rectangle(600, 155, 300, 200, { isStatic: true });
      let ground12 = Matter.Bodies.rectangle(450, 155, 150, 50, { isStatic: true });
      let ground13 = Matter.Bodies.rectangle(850, 200, 200, 50, { isStatic: true });



      let finsh = Matter.Bodies.rectangle(1285, 440, 70, 10, { isStatic: true });
      finsh.render.fillStyle = 'green';


      let coin = [
        {c: Matter.Bodies.circle(145, 480, 10, { isStatic: true })},
        {c: Matter.Bodies.circle(350, 480, 10, { isStatic: true })},
        {c: Matter.Bodies.circle(410, 100, 10, { isStatic: true })},
        {c: Matter.Bodies.circle(475, 435, 10, { isStatic: true })},
        {c: Matter.Bodies.circle(750, 570, 10, { isStatic: true })},
        {c: Matter.Bodies.circle(850, 150, 10, { isStatic: true })},
        {c: Matter.Bodies.circle(1050, 400, 10, { isStatic: true })}
        //{c: Matter.Bodies.circle(1270, 390, 10, { isStatic: true })},
        ];

        
        for(let q = 0; q< coin.length; q++){
    
            coin[q].c.render.fillStyle = 'yellow';
            Matter.World.add(engine.world, [coin[q].c]);

        }

        
        

      let right = Matter.Bodies.rectangle(1350, 400, 50, 800, { isStatic: true });
      let left = Matter.Bodies.rectangle(10, 400, 50, 800, { isStatic: true });

      let rect = Matter.Bodies.rectangle(50, 0, 50, 50, { isStatic: false }); 
      
function moveRect(e){
  
        if(e.keyCode == 39){
           rect.position.x += 2; 
        } else if (e.keyCode == 38){
            rect.position.y -= 5;
        } else if(e.keyCode == 37){
            rect.position.x -= 2;
        }

        
}
var interval = null;

let balls = 0;

interval = setInterval( function() { 
    if(rect.position.y >= 670){
        modal.style.display = "block";
        clearInterval(interval);
       }
       for(let i = 0; i < coin.length; i++){

        if((rect.position.x + 60 >= coin[i].c.position.x + 20 && rect.position.x - 60 <= coin[i].c.position.x - 20) && (rect.position.y + 60 >= coin[i].c.position.y + 20 && rect.position.y - 60 <= coin[i].c.position.y - 20)){
            
            removeCoin(i);
            console.log(coin.length);
    
            }
        }
        
        
         if(coin.length <= 1 &&(rect.position.x + 50 >= finsh.position.x + 10 && rect.position.x - 50 <= finsh.position.x - 10) && (rect.position.y + 50 >= finsh.position.y + 10 && rect.position.y - 50 <= finsh.position.y - 10)){
            modal2.style.display = "block";
         }
    
} , 1000)
   
function removeCoin(i){
    Matter.World.remove(engine.world, coin[i].c);
    coin.splice(i, i);
    balls += 1;
    

}



addEventListener("keydown", moveRect);

    

      Matter.World.add(engine.world, [finsh, rect, ground1, ground2, ground3, ground4, ground5, ground6, ground7, ground8, ground9, ground10,ground11, ground12, ground13, right, left]);
      Matter.Engine.run(engine);
      Matter.Render.run(render);