var x,y;
var canvas= document.getElementById('a1');
var context=canvas.getContext('2d');
if(localStorage.getItem("Xaxis"))
{
	x=localStorage.getItem("Xaxis");
    y=localStorage.getItem("Yaxis");
}
else
{
	x=50;y=50;
}
context.fillStyle='green';
context.fillRect(x,y,100,100);
document.addEventListener('keydown',function(event)
{	
	switch(event.keyCode)
	{
		case 37:
		         if(x-10>10)
		         x-=10;
		         break;
		case 38:
                 if(y-10>10)
		         y-=10;
		         break;
		 case 39:
		          if(x+10<1200)
		          x+=10;	
		          break;
		 case 40:
		         if(y+10<500)
		         y+=10;
		         break;                          
	}

localStorage.setItem("Xaxis",x);
localStorage.setItem("Yaxis",y);
draw();
    

})
var draw=function()
{

	context.clearRect(0,0,1300,600);
	context.fillStyle='green';
	context.fillRect(x,y,100,100);
}

