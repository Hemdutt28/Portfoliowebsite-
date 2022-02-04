
    
    
let hamberg = document.querySelector('.hamberg');
let times = document.querySelector('.times');
let mobileNav= document.querySelector('.mobile-nav')
hamberg.addEventListener('click',function(){

mobileNav.classList.add('open');

})
times.addEventListener('click',function(){

mobileNav.classList.remove('open');
    
})


    


