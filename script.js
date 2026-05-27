const ringtoneData = [
  {
    section:'IPL RINGONES',
    title:'Trending Beat 1',
    desc:'Most viral ringtone collection.',
    img:'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000',
    link:'https://youtube.com'
  },
  {
    section:'IPL RINGTONES',
    title:'Trending Beat 2',
    desc:'Popular short ringtone sound.',
    img:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000',
    link:'https://youtube.com'
  },
  {
    section:'IPL RINGTONES',
    title:'Cricket Anthem',
    desc:'Perfect cricket fan ringtone.',
    img:'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000',
    link:'https://youtube.com'
  },
  {
    section:'POLITICAL',
    title:'Stadium Beat',
    desc:'Powerful cricket stadium audio.',
    img:'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000',
    link:'https://youtube.com'
  },
  {
    section:'POLITICAL',
    title:'Leader Mass Entry',
    desc:'Political campaign ringtone.',
    img:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1000',
    link:'https://youtube.com'
  },
  {
    section:'GODS RINTONES',
    title:'Election Beat',
    desc:'Trending political sound.',
    img:'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000',
    link:'https://youtube.com'
  },
  {
    section:'GODS RINTONES',
    title:'Telugu Mass Beat',
    desc:'Popular Telugu ringtone.',
    img:'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1000',
    link:'https://youtube.com'
  },
  {
    section:'Family Ringtones',
    title:'Folk Vibes',
    desc:'Traditional Telugu audio vibes.',
    img:'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?q=80&w=1000',
    link:'https://youtube.com'
  },
  {
    section:'Family Ringtones',
    title:'Instagram Viral Audio',
    desc:'Trending viral shorts audio.',
    img:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000',
    link:'https://youtube.com'
  },
  {
    section:'Hros and HHeriones Ringtones',
    title:'Reels Trending Mix',
    desc:'Most shared reels ringtone.',
    img:'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1000',
    link:'https://youtube.com'
  }
];

ringtoneData.forEach(item=>{
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <div class="card-content">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a href="${item.link}" target="_blank">Listen on YouTube</a>
    </div>
  `;

  document.getElementById(item.section).appendChild(card);
});
