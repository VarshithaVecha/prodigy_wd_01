window.addEventListener('scorll',function(){
    const navbar = document.getElementById('navbar');
    if(window.scrolly > 0){
        navbar.style.backgroundColor = '#555';
    }else{
        navbar.style.backgroundcolor = '#333';
    }
});