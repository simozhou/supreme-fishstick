var texts = new Array();
texts.push("a PhD student");
texts.push("a researcher");
texts.push("passionate about biology");
texts.push("a scientist");

var point = 0;

function changeText(){
  $('#catchupline').html(texts[point]);
  if(point < ( texts.length - 1 ) ){
    point++;
  }else{
    point = 0;
  }
}
 
setInterval(changeText, 3000); /*Call it here*/
changeText();