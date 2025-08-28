
//heart count

function count (id){
   let heartCount = parseInt(document.getElementById(id).innerText)
  let plus = document.getElementById(id).innerText = heartCount + 1

   return plus
}

document.getElementById("click-heart").addEventListener('click',function() {
   count('heart-count')
    
})
document.getElementById("click-heart2").addEventListener('click',function() {
   count('heart-count')
    
})
document.getElementById("click-heart3").addEventListener('click',function() {
   count('heart-count')
    
})
document.getElementById("click-heart4").addEventListener('click',function() {
   count('heart-count')
    
})
document.getElementById("click-heart5").addEventListener('click',function() {
   count('heart-count')
    
})
document.getElementById("click-heart6").addEventListener('click',function() {
   count('heart-count')
    
})
document.getElementById("click-heart7").addEventListener('click',function() {
   count('heart-count')
    
})
document.getElementById("click-heart8").addEventListener('click',function() {
   count('heart-count')
    
})
document.getElementById("click-heart9").addEventListener('click',function() {
   count('heart-count')
    
})

// document.querySelectorAll('.click').addEventListener('click',function() {
//     let heartCount = parseInt(document.getElementById('heart-count').innerText)
//     document.getElementById('heart-count').innerText = heartCount + 1
 
// })


   function copyText() {
   let copyCount = parseInt(document.getElementById("copy-count").innerText)

   document.getElementById('copy-count').innerText  = copyCount + 1

   let textElement = document.getElementById('copy1');


   let getText = textElement.textContent;

   navigator.clipboard.writeText(getText)

   .then(() =>{
      alert('Text copied'+' ' + ':' +' ' + getText )
   })
   
}

///////copy2
function copyText2() {
   

   let textElement = document.getElementById('copy2');

   let getText = textElement.textContent;

   navigator.clipboard.writeText(getText)

   .then(() =>{
      alert('Text copied'+' ' + ':' +' ' + getText )
   })
   
}
///copy3
function copyText3() {
   let copyCount = parseInt(document.getElementById("copy-count").innerText)

   document.getElementById('copy-count').innerText  = copyCount + 1


   let textElement = document.getElementById('copy3');

   let getText = textElement.textContent;

   navigator.clipboard.writeText(getText)

   .then(() =>{
      alert('Text copied'+' ' + ':' +' ' + getText )
   })
   
}
//copy4
function copyText4() {
  let copyCount = parseInt(document.getElementById("copy-count").innerText)

   document.getElementById('copy-count').innerText  = copyCount + 1
 

   let textElement = document.getElementById('copy4');

   let getText = textElement.textContent;

   navigator.clipboard.writeText(getText)

   .then(() =>{
      alert('Text copied'+' ' + ':' +' ' + getText )
   })
   
}
//copy5
function copyText5() {
   
let copyCount = parseInt(document.getElementById("copy-count").innerText)

   document.getElementById('copy-count').innerText  = copyCount + 1

   let textElement = document.getElementById('copy5');

   let getText = textElement.textContent;

   navigator.clipboard.writeText(getText)

   .then(() =>{
      alert('Text copied'+' ' + ':' +' ' + getText )
   })
   
}
//copy6
function copyText6() {
   let copyCount = parseInt(document.getElementById("copy-count").innerText)

   document.getElementById('copy-count').innerText  = copyCount + 1


   let textElement = document.getElementById('copy6');

   let getText = textElement.textContent;

   navigator.clipboard.writeText(getText)

   .then(() =>{
      alert('Text copied'+' ' + ':' +' ' + getText )
   })
   
}
//copy7
function copyText7() {
   let copyCount = parseInt(document.getElementById("copy-count").innerText)

   document.getElementById('copy-count').innerText  = copyCount + 1


   let textElement = document.getElementById('copy7');

   let getText = textElement.textContent;

   navigator.clipboard.writeText(getText)

   .then(() =>{
      alert('Text copied'+' ' + ':' +' ' + getText )
   })
   
}


////////Call function
//call-1
document.getElementById('call1').
addEventListener('click',function(){
let serviceNme = document.getElementById('s-name1').innerText
let textElement = document.getElementById('copy1') . innerText;


let coin = parseInt(document.getElementById('coin').innerText)

document.getElementById('coin').innerText = coin - 20;

alert( serviceNme +" " +":"  +" " + textElement +" " +'is calling')
 
})


document.getElementById('call2').
addEventListener('click',function(){
let serviceNme = document.getElementById('s-name2').innerText
let textElement = document.getElementById('copy1') . innerText;


let coin = parseInt(document.getElementById('coin').innerText)

document.getElementById('coin').innerText = coin - 20;

alert( serviceNme +" " +":"  +" " + textElement  +" " +'is calling')
 
})

document.getElementById('call3').
addEventListener('click',function(){
let serviceNme = document.getElementById('s-name3').innerText
let textElement = document.getElementById('copy1') . innerText;


let coin = parseInt(document.getElementById('coin').innerText)

document.getElementById('coin').innerText = coin - 20;

alert( serviceNme +" " +":"  +" " + textElement +" " +'is calling')
 
})


document.getElementById('call4').
addEventListener('click',function(){
let serviceNme = document.getElementById('s-name4').innerText
let textElement = document.getElementById('copy2') . innerText;


let coin = parseInt(document.getElementById('coin').innerText)

document.getElementById('coin').innerText = coin - 20;

alert( serviceNme +" " +":"  +" " + textElement +" " +'is calling')
 
})

document.getElementById('call5').
addEventListener('click',function(){
let serviceNme = document.getElementById('s-name5').innerText
let textElement = document.getElementById('copy3') . innerText;


let coin = parseInt(document.getElementById('coin').innerText)


document.getElementById('coin').innerText = coin - 20;


alert( serviceNme +" " +":"  +" " + textElement)
 
})
document.getElementById('call6').
addEventListener('click',function(){
let serviceNme = document.getElementById('s-name6').innerText
let textElement = document.getElementById('copy4') . innerText;


let coin = parseInt(document.getElementById('coin').innerText)

document.getElementById('coin').innerText = coin - 20;

alert( serviceNme +" " +":"  +" " + textElement +" " +'is calling')
 
})

document.getElementById('call7').
addEventListener('click',function(){
let serviceNme = document.getElementById('s-name7').innerText
let textElement = document.getElementById('copy5') . innerText;


let coin = parseInt(document.getElementById('coin').innerText)

document.getElementById('coin').innerText = coin - 20;

alert( serviceNme +" " +":"  +" " + textElement +" " +'is calling')
 
})


document.getElementById('call8').
addEventListener('click',function(){
let serviceNme = document.getElementById('s-name8').innerText
let textElement = document.getElementById('copy6') . innerText;


let coin = parseInt(document.getElementById('coin').innerText)

document.getElementById('coin').innerText = coin - 20;

alert( serviceNme +" " +":"  +" " + textElement +" " +'is calling')
 
})


document.getElementById('call9').
addEventListener('click',function(){
let serviceNme = document.getElementById('s-name9').innerText
let textElement = document.getElementById('copy7') . innerText;


let coin = parseInt(document.getElementById('coin').innerText)

document.getElementById('coin').innerText = coin - 20;

alert( serviceNme +" " +":"  +" " + textElement +" " +'is calling')
 
})
