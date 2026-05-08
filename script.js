/* NAV */
function tM(){document.getElementById('dr').classList.toggle('op');document.getElementById('bg').classList.toggle('op')}
function cM(){document.getElementById('dr').classList.remove('op');document.getElementById('bg').classList.remove('op')}
window.addEventListener('scroll',()=>{document.getElementById('nav').classList.toggle('sol',window.scrollY>48)},{passive:true});

/* TICKER */
const tkd=[['M20 6 9 17 4 12','polyline','24hr Turnaround'],['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z','path','100% Satisfaction'],['M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z','polygon','Top-Rated Designer'],['M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z','path','100+ Clients'],['M2 3h20v14H2zM8 21h8M12 17v4','path','1000+ Thumbnails'],['M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20','path','Worldwide Service'],['M23 7L16 12 23 17 23 7zM1 5h15v14H1z','path','Video Editing'],['M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6','path','A/B Testing'],];
const tkEl=document.getElementById('tk');
[...tkd,...tkd,...tkd].forEach(([d,t,txt])=>{
  const el=document.createElement('div');el.className='ti';
  const tag=t==='polyline'?`<polyline points="${d}"/>`:`<${t} ${t==='path'?'d':'points'}="${d}"/>`;
  el.innerHTML=`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">${tag}</svg><span>${txt}</span>`;
  tkEl.appendChild(el);
});

/* THUMBNAIL SLIDERS */
function bSlider(id,imgs){
  const t=document.getElementById(id);
  [...imgs,...imgs].forEach((src,i)=>{
    const c=document.createElement('div');c.className='tc';
    c.innerHTML=`<img src="${src}" alt="Thumbnail ${(i%imgs.length)+1}" loading="lazy"/><div class="tco"><span>Thumbnail Design</span></div>`;
    t.appendChild(c);
  });
}
const th=Array.from({length:18},(_,i)=>`thumbnail${i+1}.jpg`);
bSlider('tr1',th.slice(0,10));
bSlider('tr2',th.slice(10,20));

/* 20 CLIENTS – logo image, name + subs, 2 rows sliding */
const clients=[
  {img:'client1.jpg', n:'Tonde Gamer',  s:'19M+ subscribers'},
  {img:'client2.jpg', n:'Laka Gaming',    s:'11.5M+ subscribers'},
  {img:'client3.jpg', n:'ABHISHEK YT',   s:'6.5M+ subscribers'},
  {img:'client4.jpg', n:'chunu vlogs', s:'130K+ subscribers'},
  {img:'client5.jpg', n:'Zeroth YT',        s:'300K subscribers'},
  {img:'client6.jpg', n:'Motey FF',s:'335K+ subscribers'},
  {img:'client7.jpg', n:'A4 Gamer',   s:'135K+ subscribers'},
  {img:'client8.jpg', n:'TGR Sabinz',     s:'220K+ subscribers'},
  {img:'client9.jpg', n:'AWAARA 786',        s:'40K+ subscribers'},
  {img:'client10.jpg',n:'Iam Binayak',        s:'1.2M+ subscribers'},
  {img:'client11.jpg',n:'KUSUM YT',      s:'935K+ subscribers'},
  {img:'client12.jpg',n:'Tonde Brothers Live', s:'220K+ subscribers'},
  {img:'client13.jpg',n:'Laka Plays',     s:'2.07M+ subscribers'},
  {img:'client14.jpg',n:'KAKA GAMER',     s:'25K+ subscribers'},
  {img:'client15.jpg',n:'SMOOKER YT',         s:'250K+ subscribers'},
  {img:'client16.jpg',n:'MNG KING',       s:'605K+ subscribers'},
  {img:'client17.jpg',n:'A Foot Gamer',       s:'29.5K+ subscribers'},
  {img:'client18.jpg',n:'BRIGHTER NEPAL',        s:'26.5K+ subscribers'},
  {img:'client19.jpg',n:'Lobster Capital',      s:'6.5K+ subscribers'},
  {img:'client20.jpg',n:'OSR Digital',        s:'10.5M+ subscribers'},
];
function bClientRow(id,items){
  const t=document.getElementById(id);
  [...items,...items].forEach(d=>{
    const el=document.createElement('div');
    el.className='clg';
    el.innerHTML=`<div class="clg-logo"><img src="${d.img}" alt="${d.n}" loading="lazy"/></div><div class="clg-info"><div class="clg-name">${d.n}</div><div class="clg-subs">${d.s}</div></div>`;
    t.appendChild(el);
  });
}
bClientRow('cRow1',clients.slice(0,10));
bClientRow('cRow2',clients.slice(10,20));

/* FAQ */
const faqs=[
  {q:'How much do you charge for thumbnail design?',a:'Pricing starts from $5–$15 per thumbnail depending on complexity. Bulk packages are available for regular creators. Contact me on WhatsApp for a custom quote.'},
  {q:'How fast can you deliver thumbnails?',a:'Standard delivery is within 24 hours. Rush (same-day) orders are available. I always communicate timelines upfront so there are no surprises.'},
  {q:'How many revisions do I get?',a:'Unlimited revisions until you\'re 100% satisfied. I won\'t stop until the thumbnail is perfect for your channel.'},
  {q:'What information do I need to provide?',a:'Share your video title, niche, preferred style, brand colors, references, and any specific text or images. More context = better results.'},
  {q:'Do you offer A/B testing variants?',a:'Yes! I offer 2–3 design variants per video so you can A/B test and find the highest-CTR thumbnail. Data-driven creativity.'},
  {q:'Can you match my existing brand style?',a:'Absolutely. I study your existing thumbnails, colour palette, and brand identity to ensure perfect consistency.'},
  {q:'What formats will I receive?',a:'High-resolution JPG/PNG at 1280×720 optimised for YouTube. Editable source files available upon request.'},
  {q:'Do you work with small channels?',a:'Yes! I work with channels of all sizes — from brand-new creators to channels with millions of subscribers.'},
  {q:'How do I pay?',a:'Payment via eSewa, Khalti by IME, bank transfer, and other methods. I work with clients worldwide and will find a convenient payment method for your location.'},
  {q:'Can I get a trial thumbnail first?',a:'Yes! A trial thumbnail at a discounted rate is available. Reach out on WhatsApp to discuss before committing to a package.'},
];
const fl=document.getElementById('fqList');
faqs.forEach(f=>{
  const d=document.createElement('div');d.className='fqi rv';
  d.innerHTML=`<div class="fqq" onclick="tFaq(this)"><span>${f.q}</span><div class="fqa2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div></div><div class="fqan"><div class="fqai">${f.a}</div></div>`;
  fl.appendChild(d);
});
function tFaq(el){
  const it=el.parentElement;
  const was=it.classList.contains('op');
  document.querySelectorAll('.fqi.op').forEach(i=>i.classList.remove('op'));
  if(!was)it.classList.add('op');
}

/* REVEAL */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});
},{threshold:0.07,rootMargin:'0px 0px -20px 0px'});
document.querySelectorAll('.rv').forEach(el=>obs.observe(el));