let data=document.querySelector('.left-menu-bar');
let mover=document.querySelector('#hamburger');
let rightside=document.querySelector('.right-side');
let search=document.querySelector('#search_bar');
mover.addEventListener('click',()=>{
    mover.classList.toggle('active');
    if(mover.classList.contains('active')){
         data.style.width='220px';
          search.style.width='73vw';
          search.style.marginLeft='220px'
         search.style.transition='.5s all linear';
         rightside.style.marginLeft='240px';
    }
    else{
        data.style.width='0px';
        rightside.style.marginLeft='20px';
        rightside.style.transition='.4s all linear'
         rightside.style.width='100vw';
        // console.log('hogya');
       search.style.rightside='30%';
         search.style.transition='.5s all linear'
         search.style.width='89vw';
        search.style.marginLeft='8px';
        rightside.style.transition='.5s all linear'
    }

})