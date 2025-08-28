
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
