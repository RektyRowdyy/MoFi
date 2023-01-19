var content =document.getElementById('content'),
images = ['static/bg1.gif','static/bg2.gif','static/bg3.gif','static/bg4.gif','static/bg5.gif']

var imgCount = images.length

var number = Math.floor(Math.random() * imgCount);

window.onload = function() {
    content.style.backgroundImage = 'url('+images[number]+')'
}