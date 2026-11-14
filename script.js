const EV=[
{id:'mehandi',tag:'Colour, laughter & a little mehandi',name:'Mehandi',d:'08',w:'Monday',t:'3:00 PM IST',v:'Sarjan Apartment · Navsari',dr:'Phulkari dupattas, colourful lehengas and shararas.',c:'A touch of green',dot:'#2f7a50',bg:'#e9f0e7',ac:'#2f7a50'},
{id:'haldi',tag:'A morning dipped in sunshine',name:'Haldi',d:'09',w:'Tuesday',t:'9:00 AM IST',v:'Uma Bhavan · Navsari',dr:'Simple yellow suits, floral jewellery and light dupattas.',c:'A little sunshine yellow',dot:'#e0b02a',bg:'#fdf3dc',ac:'#a67a0a'},
{id:'engagement',tag:'A little sparkle, a lot of love',name:'Engagement night',d:'09',w:'Tuesday',t:'8:00 PM IST',v:'Uma Bhavan · Navsari',dr:'Elegant lehengas, shararas and embroidered suits.',c:'Rose & plum',dot:'#9b4f82',bg:'#f1e4ef',ac:'#8a3f72'},
{id:'wedding',tag:'The beginning of our forever',name:'Wedding day',d:'10',w:'Wednesday',t:'11:00 PM IST',v:'Uma Bhavan · Navsari',dr:'Richly embroidered lehengas, phulkari-inspired details and elegant dupatta draping.',c:'Ruby red & ivory',dot:'#9d1548',bg:'#f9e8e6',ac:'#8b1a3a',x:'Love, gratitude & blessings'}
];
const $=s=>document.querySelector(s);
$('#evList').innerHTML=EV.map((e,i)=>`
<section class="ev" id="${e.id}" style="--bg:${e.bg};--ac:${e.ac}"><div class="box">
<p class="eyebrow">Celebration ${i+1} of 4</p><p class="gold" style="color:var(--ac)">✦</p>
<p class="eyebrow">${e.tag}</p><h3>${e.name}</h3>
<div class="day">${e.d}</div><p>${e.w}<br>February 2027</p>
<p><b>${e.t}</b><br>${e.v}</p>
<p class="eyebrow" style="margin-top:22px">Dress inspiration</p>
<p class="body" style="margin-top:0">${e.dr}</p>
<p class="it"><span class="dot" style="background:${e.dot}"></span>${e.c}</p>
${e.x?`<p class="it" style="color:var(--ac)">${e.x}</p>`:''}
<div class="frame rv"><img class="fl mask" src="assets/${e.id}.jpg" alt="Yash and Jasmine, ${e.name}" loading="lazy"></div>
<a class="link" href="${i<3?'#'+EV[i+1].id:'#venue'}">${i<3?'Next celebration':'Find the venue'} ↓</a>
</div></section>`).join('');

const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>{if(!el.closest('.hero'))io.observe(el)});

const hero=[...document.querySelectorAll('.hero .rv')];
function play(){hero.forEach(el=>{el.classList.remove('in');el.style.transitionDelay=''});void document.body.offsetHeight;hero.forEach((el,i)=>{el.style.transitionDelay=(i*.14)+'s';el.classList.add('in')})}
const au=$('#bgm'),mb=$('#music');au.onerror=()=>mb.hidden=true;
mb.onclick=()=>{if(au.paused){au.play();mb.classList.remove('off')}else{au.pause();mb.classList.add('off')}};
$('#open').onclick=()=>{au.play().catch(()=>{});$('#seal').classList.add('gone');document.body.classList.remove('lock');scrollTo(0,0);play()};
$('#replay').onclick=()=>{scrollTo({top:0});play()};

const T=new Date('2027-02-10T23:00:00+05:30'),cd=$('#cd');
function tick(){let s=Math.max(0,Math.floor((T-Date.now())/1000));const u=[['Days',86400],['Hours',3600],['Minutes',60],['Seconds',1]];
cd.innerHTML=u.map(([n,k],i)=>{const v=Math.floor(s/k);s%=k;return`<div><b>${String(v).padStart(2,'0')}</b><small>${n}</small></div>${i<3?'<i>:</i>':''}`}).join('')}
tick();setInterval(tick,1000);

if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
const cv=$('#petals'),cx=cv.getContext('2d'),P=[];
const rs=()=>{cv.width=innerWidth;cv.height=innerHeight};rs();addEventListener('resize',rs);
for(let i=0;i<22;i++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,s:5+Math.random()*7,v:.4+Math.random()*.7,r:Math.random()*6});
(function f(){cx.clearRect(0,0,cv.width,cv.height);P.forEach(p=>{p.y+=p.v;p.r+=.012;p.x+=Math.sin(p.r)*.6;if(p.y>cv.height+20){p.y=-20;p.x=Math.random()*cv.width}
cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle='rgba(236,150,175,.45)';cx.beginPath();cx.ellipse(0,0,p.s,p.s*.55,0,0,7);cx.fill();cx.restore()});requestAnimationFrame(f)})();
}
