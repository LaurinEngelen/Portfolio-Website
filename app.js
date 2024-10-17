//Intro

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });


        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = "-100vh";
        },2300)


    })


})


//Darkmode
var content_body = document.getElementsByTagName('body')[0];
var content_container = document.getElementsByClassName('grid-container-1')[0];
var content_container2 = document.getElementsByClassName('grid-container-2')[0];
var content = document.getElementsByClassName('content');
var content_AboutMe_img = document.getElementsByTagName('img')[0];
var content_Icons = document.getElementsByTagName('ul')[0];
var content_a = document.getElementsByTagName('a')[0];
var darkMode = document.getElementById('dark-change');
var content_Icons_img = document.getElementById('img_icon');
var content_social_media = document.getElementsByClassName('social-media');

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content_body.classList.toggle('day');
    content_container.classList.toggle('day');
    content_container2.classList.toggle('day');
    for(x=0; x<content.length; x++){
        content[x].classList.toggle('day');
    }
    content_AboutMe_img.classList.toggle('day');
    content_Icons.classList.toggle('day');
    content_a.classList.toggle('day');
    content_Icons_img.classList.toggle('day');
    for(x=0; x<content_social_media.length; x++){
        content_social_media[x].classList.toggle('day');
    }
    
    console.log(content_social_media);

})



