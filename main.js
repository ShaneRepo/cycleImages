var index=0;
function changeBanner(){
    [].forEach.call(document.images,function (v,i) { document.images[i].hidden = i!==index});
    index = (index+1) % document.images.length;
}
window.onload = function () {setInterval(changeBanner, 5000)};
