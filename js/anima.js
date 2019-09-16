
var modal0 = document.getElementById("myModal0");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

var img0 = document.getElementById("myImg0");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");

var captionText0 = document.getElementById("caption0");
var captionText1 = document.getElementById("caption1");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");

var span0 = document.getElementById("close0");
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");

img0.onclick = function(){
  modal0.style.display = "block";
  captionText0.innerHTML = this.alt;
}
span0.onclick = function() {
  modal0.style.display = "none";
}


img1.onclick = function(){
  modal1.style.display = "block";
  captionText1.innerHTML = this.alt;
}
span1.onclick = function() {
  modal1.style.display = "none";
}

img2.onclick = function(){
  modal2.style.display = "block";
  captionText2.innerHTML = this.alt;
}
span2.onclick = function() {
  modal2.style.display = "none";
}

img3.onclick = function(){
  modal3.style.display = "block";
  captionText3.innerHTML = this.alt;
}
span3.onclick = function() {
  modal3.style.display = "none";
}
