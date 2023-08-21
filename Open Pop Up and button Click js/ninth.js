let submit=document.querySelector(".submit-button");
let main_box=document.querySelector(".box");
let okay=document.querySelector(".okay-button");
submit.addEventListener('click',function(){
   main_box.classList.add('pop-up-box');
   submit.classList.add('remove-submit-button');
   console.log("rachit");
})
okay.addEventListener('click',function()
{
    main_box.classList.remove('pop-up-box');
    submit.classList.remove("remove-submit-button");
    
})