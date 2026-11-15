
(function(){
var h=document.querySelector('header.nav');
function sc(){h.classList.toggle('sol',window.scrollY>40||document.body.hasAttribute('data-sol'))}
sc();addEventListener('scroll',sc,{passive:true});
var b=document.querySelector('.burger');if(b)b.addEventListener('click',function(){var o=h.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',function(){h.classList.remove('open')})});
var v=document.querySelector('.hero video');
if(v){var small=innerWidth<720;v.src=small?v.dataset.sm:v.dataset.lg;var p=v.play();if(p&&p.catch)p.catch(function(){})}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.rv').forEach(function(e){io.observe(e)})}else{document.querySelectorAll('.rv').forEach(function(e){e.classList.add('in')})}
})();
