var canvas = document.getElementById('a11');
var context = canvas.getContext('2d');
var l=0,n=0,arr=[];
context.beginPath();
context.moveTo(20,480);
context.lineTo(480,480);
context.stroke();
context.beginPath();
context.moveTo(20,480);
context.lineTo(20,20);
context.stroke();
var fun=function()
{   
	n++;
	x=window.prompt('Enter new Value');
	arr[l++]=x;
	context.fillStyle='yellow';
	context.fillRect(20+n*30,480,20,-x);
	context.fillStyle='red';
	context.fillText(x,22+n*30,490-x);

}
var hack= function()
{
  arr.sort(function(a, b){return a-b})
  n=0;
  context.fillStyle='white';
  context.fillRect(50,475,430,-430);
  for(var i=0;i<l;i++)
  {
  	n++;
  	x=arr[i];
	context.fillStyle='yellow';
	context.fillRect(20+n*30,480,20,-x);
	context.fillStyle='red';
	context.fillText(x,22+n*30,490-x);
  }


}
