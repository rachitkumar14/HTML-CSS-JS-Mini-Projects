const reviews = [
    {
        author: 'CodeWithHarry',
        job: 'Programmer',
        text: 'Harry is also known as CodeWithHarry on youtube. He has a hude subscribers youtube channel. He had done his study in B.Tech Computer Science.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhxGuAPRaO1Q-izGFmcTc-MGhhT590L5I_Q&usqp=CAU'
    },
    {
        author: 'Jassi Sheoran',
        job: 'YouTuber',
        text: 'Jassi is also known as Jassi Sheoran on youtube. He has a huge subscribers youtube channel. He is pursuing B.A. from MDU Rohtak and Part Time Youtuber',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbW124kteXdr4qqgWLqJbiNs8uQ_NJYOffDA&usqp=CAU'
    },
    {
        author: 'Clever Programmer',
        job: 'JavaScript Developer',
        text: 'You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level.',
        img:' data:image/jpeg;base64,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'
    },
    {
        author: 'Ishan Sharma',
        job: 'YouTube Creator',
        text: 'He is most popular YouTube Creator with 599K subscribers and 22M+ video views. He makes freelancing, career and tech related content for students. And he have also the chance to talk with entrepreneurs like Ankur Warikoo and Noah Kagan on his channel.',
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--apOSdFFu--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lctqqh3t7kfnwpxljhl7.jpg'
    }
]
let mainImage=document.querySelector("#img");
let mainAuthor=document.querySelector("#author");
let mainJob=document.querySelector("#job");
let mainText=document.querySelector("#text");
let mainPrev=document.querySelector("#prev");
let mainForward=document.querySelector("#forward");
let mainRandom=document.querySelector("#random-btn");

let index=0;
let length=reviews.length;

mainForward.addEventListener('click',function(){
    index++;
    if(index>length-1)
    {
        index=0;
        mainImage.src=reviews[index].img;
        mainAuthor.innerHTML=reviews[index].author;
        mainJob.innerHTML=reviews[index].job;
        mainText.innerHTML=reviews[index].text;
    }
    else{
        mainImage.src=reviews[index].img;
        mainAuthor.innerHTML=reviews[index].author;
        mainJob.innerHTML=reviews[index].job;
        mainText.innerHTML=reviews[index].text;
    }
})
mainPrev.addEventListener('click',function(){
    index--;
    if(index<0)
    {
        index=3;
        mainImage.src=reviews[index].img;
        mainAuthor.innerHTML=reviews[index].author;
        mainJob.innerHTML=reviews[index].job;
        mainText.innerHTML=reviews[index].text;
    }
    else{
        mainImage.src=reviews[index].img;
        mainAuthor.innerHTML=reviews[index].author;
        mainJob.innerHTML=reviews[index].job;
        mainText.innerHTML=reviews[index].text;
    }
})
 mainRandom.addEventListener('click',function(){
    let num=Math.floor(4*(Math.random()));
    mainImage.src=reviews[num].img;
    mainAuthor.innerHTML=reviews[num].author;
    mainJob.innerHTML=reviews[num].job;
    mainText.innerHTML=reviews[num].text;
    console.log(num);

 })