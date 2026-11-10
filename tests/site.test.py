from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse,unquote
import json,re
root=Path(__file__).resolve().parents[1]/'public'
class Page(HTMLParser):
 def __init__(self,path):
  super().__init__();self.ids=[];self.links=[];self.assets=[];self.h1=0;self.robots=False;self.title=False;self.desc=False;self.feed(path.read_text())
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag=='a' and 'href' in a:self.links.append(a['href'])
  if tag in ['script','img'] and 'src' in a:self.assets.append(a['src'])
  if tag=='link' and a.get('rel')=='stylesheet':self.assets.append(a['href'])
  if tag=='h1':self.h1+=1
  if tag=='title':self.title=True
  if tag=='meta' and a.get('name')=='robots' and a.get('content')=='noindex, nofollow':self.robots=True
  if tag=='meta' and a.get('name')=='description':self.desc=True
pages={p:Page(p) for p in root.rglob('*.html') if not p.name.startswith('_qa')};errors=[]
for path,page in pages.items():
 if len(page.ids)!=len(set(page.ids)):errors.append(f'{path.name}: duplicate IDs')
 if not page.robots:errors.append(f'{path.name}: missing private robots directive')
 if path.name=='index.html' or path.parent.name=='resources':
  if page.h1!=1 or not page.title or not page.desc:errors.append(f'{path.name}: incomplete SEO headings/metadata')
 for ref in page.links+page.assets:
  u=urlparse(ref)
  if u.scheme or u.netloc:continue
  target=root/unquote(u.path.lstrip('/')) if u.path.startswith('/') else path.parent/unquote(u.path)
  if not u.path:target=path
  if target.is_dir():target=target/'index.html'
  if not target.exists():errors.append(f'{path.name}: missing {ref}')
  elif u.fragment and target in pages and u.fragment not in pages[target].ids:errors.append(f'{path.name}: missing anchor {ref}')
 for schema in re.findall(r'<script type="application/ld\+json">(.*?)</script>',path.read_text(),re.S):json.loads(schema)
assert not errors,'\n'.join(errors)
print(f'{len(pages)} HTML pages passed internal link, asset, anchor, structured data and privacy checks.')
