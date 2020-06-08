var fgimg=null;
var gray=null;
var red=null;
var rain=null;
var purple=null;
var blur=null;
var height=null;
var width=null;
function upload1(){
  var img=document.getElementById("fg");
  fgimg=new SimpleImage(img);
  var can=document.getElementById("can1");
  fgimg.drawTo(can);
  red=null; blur=null;gray=null;rain=null;purple=null; height=fgimg.getHeight(); width=fgimg.getWidth();
}

function doGray(){
  if(isImageLoaded()&&gray==null){
  gray=new SimpleImage(fgimg);
  for(var pix of gray.values()){
    var avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
    pix.setRed(avg);
    pix.setGreen(avg);
    pix.setBlue(avg);
  }
  var can=document.getElementById('can1');
  gray.drawTo(can);}
  else if(gray!=null){
    var can=document.getElementById('can1');
  gray.drawTo(can);
  }
  else{
    alert('Image Is Not Loaded');
  }
  }

function doRed(){
  if(isImageLoaded()&&red==null){
  red=new SimpleImage(fgimg);
  for(var pix of red.values()){
    var avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
    if(avg<128){
    pix.setRed(avg*2);
    pix.setGreen(0);
    pix.setBlue(0);
    }
    else{
    pix.setRed(255);
    pix.setGreen((avg*2)-255);
    pix.setBlue((avg*2)-255);
    }
  }
  var can=document.getElementById('can1');
  red.drawTo(can);}
  else if(red!=null){
    var can=document.getElementById('can1');
  red.drawTo(can);
  }
  else{
    alert('Image Is Not Loaded');
  }
}
function doPurple(){
  if(isImageLoaded()&&purple==null){
  purple=new SimpleImage(fgimg);
  for(var pix of purple.values()){
    var avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
    if(avg<128){
    pix.setRed((147/127.5)*avg);
    pix.setGreen((112/127.5)*avg);
    pix.setBlue((219/127.5)*avg);
    }
    else{
    pix.setRed((2-147/127.5)*avg + 2*147 -255);
    pix.setGreen((2-112/127.5)*avg + 2*112-255);
    pix.setBlue((2-219/127.5)*avg + 2*219-255);
    }
  }
  var can=document.getElementById('can1');
  purple.drawTo(can);}
  else if(purple!=null){
    var can=document.getElementById('can1');
  purple.drawTo(can);
  }
  else{
    alert('Image Is Not Loaded');
  }
}

function doRBow(){
  if(isImageLoaded()&&rain==null){
  rain=new SimpleImage(fgimg);
    var unit=rain.getHeight()/5;
  for(var pix of rain.values()){
    var avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
    if(pix.getY()<=unit){
    if(avg<128){
    pix.setRed(avg*2);
    pix.setGreen(0);
    pix.setBlue(0);
    }
    else{
    pix.setRed(255);
    pix.setGreen((avg*2)-255);
    pix.setBlue((avg*2)-255);
    }}
    else if(pix.getY()>unit && pix.getY()<=2*unit){
    if(avg<128){
    pix.setRed(avg*2);
    pix.setGreen(0.8*avg);
    pix.setBlue(0);
    }
    else{
    pix.setRed(255);
    pix.setGreen((avg*1.2)-51);
    pix.setBlue((avg*2)-255);
    }}
    else if(pix.getY()>2*unit && pix.getY()<=3*unit){
    if(avg<128){
    pix.setRed(avg*2);
    pix.setGreen(2*avg);
    pix.setBlue(0);
    }
    else{
    pix.setRed(255);
    pix.setGreen(255);
    pix.setBlue((avg*2)-255);
    }}
    else if(pix.getY()>3*unit && pix.getY()<=4*unit){
    if(avg<128){
    pix.setRed(0);
    pix.setGreen(2*avg);
    pix.setBlue(0);
    }
    else{
    pix.setRed((2*avg)-255);
    pix.setGreen(255);
    pix.setBlue((avg*2)-255);
    }}
    else{
     if(avg<128){
    pix.setRed(1.6*avg);
    pix.setGreen(0);
    pix.setBlue(1.6*avg);
    }
    else{
    pix.setRed((0.4*avg)+153);
    pix.setGreen((2*avg)-255);
    pix.setBlue((0.4*avg)+153);
    } 
    }
  }
  var can=document.getElementById('can1');
  rain.drawTo(can);}
  else if(rain!=null){
    var can=document.getElementById('can1');
  rain.drawTo(can);
  }
  else{
    alert('Image Is Not Loaded');
  }
}

function doBlur(){
  var p;
  if(isImageLoaded() && blur==null){
  blur=new SimpleImage(fgimg.getWidth(),fgimg.getHeight());
  for(var pix of fgimg.values()){
    if(Math.random()<0.5){
    blur.setPixel(pix.getX(),pix.getY(), pix);
    }
    else{
    var ofsetX=pix.getX()+Math.random()*200-200/ 2;
     var ofsetY=pix.getY()+Math.random()*200-200/ 2;
      if((ofsetX<0||ofsetX>=fgimg.getWidth()) || (ofsetY<0||ofsetY>=fgimg.getHeight())){
    blur.setPixel(pix.getX(),pix.getY(), pix);
    }
      else{
        var p=fgimg.getPixel(ofsetX,ofsetY);
 blur.setPixel(pix.getX(),pix.getY(),p);
      }
  }}
  var can=document.getElementById('can1');
  blur.drawTo(can);}
  else if(blur!=null){
    var can=document.getElementById('can1');
  blur.drawTo(can);
  }
  else{
    alert('Image Is Not Loaded');
  }
}

function ensureInImage (coordinate, size) {
    // coordinate cannot be negative
    if (coordinate < 0) {
        return 0;
    }
    // coordinate must be in range [0 .. size-1]
    if (coordinate >= size) {
        return size - 1;
    }
    return coordinate;
}
function getPixelNearby (image, x, y, diameter) {
    var dx = Math.random() * diameter - diameter / 2;
    var dy = Math.random() * diameter - diameter / 2;
    var nx = ensureInImage(x + dx, image.getWidth());
    var ny = ensureInImage(y + dy, image.getHeight());
    return image.getPixel(nx, ny);
}
  
/*function doBlur(){
  if(isImageLoaded() && blur==null){
  blur=new SimpleImage(fgimg.getWidth(),fgimg.getHeight());
    for (var pixel of fgimg.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() > 0.5) {
        var other = getPixelNearby(fgimg, x, y, 200);
        blur.setPixel(x, y, other);
    }
    else {
        blur.setPixel(x, y, pixel);
    }
}
    can=document.getElementById('can1');
  blur.drawTo(can);}
  else if(blur!=null){
    var can=document.getElementById('can1');
  blur.drawTo(can);
  }
  else{
    alert('Image Is Not Loaded');
  }
}  */

function reset(){
  can=document.getElementById("can1");
  fgimg.drawTo(can);
}

function isImageLoaded(){
  if(fgimg==null && !fgimg.complete){
    return false;
  }
  else{
    return true;
  }
}

function cler(){
  var can=document.getElementById("can1");
  var ctx=can.getContext("2d");
  ctx.clearRect(0,0,can.width,can.height);
  document.getElementById("fg").value="";
  fgimg=null;
  gray=null;
  red=null;
  rain=null;
  purple=null;
  blur=null;
}