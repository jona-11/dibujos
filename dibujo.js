var x ;
var y ;
var colorLinea ="red";
var estado  ;
var cuadrito = document.getElementById ("areaDibujo");
var lienzo = cuadrito.getContext("2d");


areaDibujo.addEventListener("mousedown", presionar);
areaDibujo.addEventListener("mouseup", soltar);
areaDibujo.addEventListener("mousemove", mover);



function mover(evento)
{
if (estado){dibujarLinea(colorLinea, x, y, evento.layerx,evento.layery);
    }
    x = evento.layerx;
    y = evento.layery;
}  

function presionar(evento)
{
    
    estado = true;
    
    x = evento.layerx;
    y = evento.layery;
    
}

function soltar(evento)
{
 estado = false;
  x = evento.layerx;
  y = evento.layery;
  
}
function dibujarLinea(color, xinicial, yinicial, xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

