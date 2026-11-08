'use strict';
const consentVersion=1;let privacyChoice=null,consentReturn=null;
try{const v=JSON.parse(localStorage.getItem('newclearus-privacy-v1'));if(v&&v.version===consentVersion&&Date.now()-v.time<180*86400000)privacyChoice=v;}catch{}
const canRemember=()=>privacyChoice?.storage===true;
const canLocate=()=>privacyChoice?.location===true;
function openConsent(){consentReturn=document.activeElement;document.getElementById('cookie-consent').hidden=false;document.getElementById('consent-location').checked=canLocate();document.getElementById('consent-storage').checked=canRemember();document.getElementById('consent-title').focus();}
function chooseConsent(location,storage){privacyChoice={version:consentVersion,location,storage,time:Date.now()};try{localStorage.setItem('newclearus-privacy-v1',JSON.stringify(privacyChoice));if(!storage){localStorage.removeItem('newclearus-scenario-v1');localStorage.removeItem('newclearus-packet-best');}}catch{}document.getElementById('cookie-consent').hidden=true;if(storage)save();if(consentReturn?.isConnected)consentReturn.focus();}

const $=id=>document.getElementById(id), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=(v,min=0,max=100000000)=>Math.min(max,Math.max(min,Number(v)||0));

