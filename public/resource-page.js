'use strict';
const byId=id=>document.getElementById(id);
const checklist=[...document.querySelectorAll('.checklist input')];
const updateProgress=()=>{if(byId('check-progress'))byId('check-progress').textContent=checklist.filter(x=>x.checked).length+' of '+checklist.length+' actions complete';};
checklist.forEach(x=>x.addEventListener('change',updateProgress));
function calculate(){
 if(!byId('tool-output'))return;
 const value=id=>{const el=byId(id);const n=Number(el.value);return Math.min(Number(el.max),Math.max(Number(el.min),Number.isFinite(n)?n:0));};
 const format=n=>new Intl.NumberFormat('en',{style:'currency',currency:byId('tool-currency').value}).format(n);
 if(byId('down-hours')){const labour=value('down-hours')*Math.round(value('down-staff'))*value('down-cost'),contribution=value('down-hours')*value('down-margin'),recovery=value('down-recovery');byId('tool-output').textContent='Scenario total: '+format(labour+contribution+recovery);byId('tool-formula').textContent='Staff time: '+format(labour)+' · Lost contribution: '+format(contribution)+' · Recovery: '+format(recovery);}
 else {const count=Math.round(value('work-count')),monthly=count*(value('work-salary')+value('work-employer')+value('work-fee')+value('work-benefits')),once=count*value('work-once');byId('tool-output').textContent='Monthly budget: '+format(monthly);byId('tool-formula').textContent='Once-off costs: '+format(once)+' · First-year budget: '+format(monthly*12+once)+'. Constant headcount and costs assumed.';}
}
document.querySelectorAll('.mini-calculator input,.mini-calculator select').forEach(el=>{el.addEventListener('input',calculate);if(el.type==='number')el.addEventListener('change',()=>{const n=Number(el.value);el.value=Math.min(+el.max,Math.max(+el.min,Number.isFinite(n)?n:+el.min));if(el.step==='1')el.value=Math.round(+el.value);calculate();});});calculate();
byId('print-resource').addEventListener('click',()=>window.print());
byId('download-resource').addEventListener('click',()=>{const title=document.querySelector('h1').textContent;const text=title+'\n\n'+byId('resource-article').innerText+'\n\n'+(byId('tool-output')?byId('tool-output').textContent+'\n'+byId('tool-formula').textContent:'')+'\n\n'+checklist.map(x=>(x.checked?'[x] ':'[ ] ')+x.parentElement.innerText).join('\n');const a=document.createElement('a'),url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));a.href=url;a.download='Newclearus_'+document.querySelector('main').dataset.tool+'.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
