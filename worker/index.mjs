export function countryFor(request){
 const candidate=request.cf?.country||request.headers.get('cf-ipcountry')||'';
 return /^[A-Z]{2}$/.test(candidate)&&!['XX','T1'].includes(candidate)?candidate:null;
}
export async function handle(request,assets={}){
 const url=new URL(request.url);
 if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD'}});
 if(url.pathname==='/api/visitor-market'){
  if(request.headers.get('X-Newclearus-Location-Consent')!=='yes')return Response.json({error:'Location suggestion requires your choice.'},{status:400,headers:{'Cache-Control':'private, no-store'}});
  return Response.json({country:countryFor(request)},{headers:{'Cache-Control':'private, no-store','Vary':'X-Newclearus-Location-Consent','X-Content-Type-Options':'nosniff'}});
 }
 let path;try{path=decodeURIComponent(url.pathname);}catch{return new Response('Bad request',{status:400});}
 if(path==='/'||path.endsWith('/'))path+='index.html';
 const file=assets[path];if(!file)return new Response('Page not found. Return to Newclearus.',{status:404,headers:{'Content-Type':'text/plain;charset=utf-8'}});
 const binary=atob(file[1]),bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));
 return new Response(request.method==='HEAD'?null:bytes,{headers:{'Content-Type':file[0],'Cache-Control':'private, no-cache','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Permissions-Policy':'geolocation=(), camera=(), microphone=()','X-Robots-Tag':'noindex, nofollow'}});
}
export default {fetch(request){return handle(request,typeof ASSETS==='undefined'?{}:ASSETS);}};
