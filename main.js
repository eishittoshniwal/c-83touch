var canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var colour="red"
var penwidth=5
var lastX,lastY,currentY,currentX

var width=screen.width
var newwidth=screen.width-100
var newheight=screen.height-200
if(width<992){
    document.getElementById("mycanvas").width=newwidth
    document.getElementById("mycanvas").height=newheight
    document.body.style.overflow="hidden"
}


canvas.addEventListener("touchstart",TS)
function TS(e){
 colour=document.getElementById("colourinput").value  
 penwidth=document.getElementById("widthinput").value 
lastX=e.touches[0].clientX-canvas.offsetLeft
lastY=e.touches[0].clientY-canvas.offsetTop
console.log("touched")
}
canvas.addEventListener("touchmove",TM)
function TM(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft
    currentY=e.touches[0].clientY-canvas.offsetTop
   
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=penwidth
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(currentX,currentY)
        ctx.stroke()
    
    lastX=currentX
    lastY=currentY
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
