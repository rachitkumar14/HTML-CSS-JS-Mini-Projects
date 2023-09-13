let mover= document.getElementById('menu');
let data=document.querySelector('.headings');
mover.addEventListener('click',function(){
    mover.classList.toggle('active');
    if(mover.classList.contains('active')){
        data.style.width='70px';
      mover.style.marginLeft='50px';
         mover.style.transition='all .4s linear'
     data.style.transition='all .4s linear';
    }
    else {
        data.style.width = '180px';
        mover.style.marginLeft='160px';
        mover.style.transition='all .4s linear'
    }
})