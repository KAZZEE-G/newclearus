'use strict';
(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const sections=[...document.querySelectorAll('main > section, main > .divisionbar')];
 if('IntersectionObserver' in window&&!reduced.matches){
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('revealed');entry.target.classList.remove('reveal-pending');observer.unobserve(entry.target);}}},{threshold:0.04});
  for(const section of sections){if(section.id==='top')continue;section.classList.add('reveal-section','reveal-pending');observer.observe(section);}
 }
 const arrow=document.getElementById('next-section');
 function next(){return sections.find(s=>!s.hidden&&s.getBoundingClientRect().top>120);}
 function update(){const target=next();arrow.hidden=!target;arrow.setAttribute('aria-label',target?'Continue to '+(target.id==='explore'?'pricing market':target.id==='ict'?'ICT services':target.id==='eor'?'team calculator':target.id==='engagement'?'getting started':target.id==='why-us'?'South African talent':'contact'):'End of page');}
 arrow.addEventListener('click',()=>{const target=next();if(target){target.scrollIntoView({behavior:reduced.matches?'instant':'smooth'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}});
 addEventListener('scroll',update,{passive:true});addEventListener('resize',update);new MutationObserver(update).observe(document.querySelector('main'),{attributes:true,subtree:true,attributeFilter:['hidden']});update();
})();
