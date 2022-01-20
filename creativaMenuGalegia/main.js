const articles = document.querySelectorAll('.grid article');
      articles.forEach(function(article){
        article.style.height=300 + Math.round(Math.random()*1000)+'px';
      })
/*
document.body.addEventListener('click',function(){
  document.querySelector('.triggers').classList.toggle('placed');
  document.body.classList.toggle('navOpen');
})*/

/* var macy = Macy({
    container: '.grid',
    trueOrder: false,
    waitForImages: false,
    margin: 20,
    columns: 3,
    breakAt: {
        520: 2,
        400: 1
    }
}); */



const toggleNav = function(){
  const nav = document.querySelector('.site>header');
  document.body.classList.toggle('navOpen');
  if(document.body.classList.contains('navOpen')){
    bodyScrollLock.disableBodyScroll(nav);
   }else{
     bodyScrollLock.enableBodyScroll(nav);
   }
}


const lettersMenuTrigger = document.querySelectorAll('.triggers>span');
      lettersMenuTrigger.forEach(function(letter){
        letter.addEventListener('click',toggleNav);                          
       })




const intro = (function(){
    document.querySelector('.site').classList.toggle('intro');
    document.querySelector('.triggers').classList.toggle('placed');
}()); 