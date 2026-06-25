

// compe
(function () {
  'use strict';

  // 操作するHTML要素の取得 .switch内のli
  const button = document.querySelectorAll('.switch li');
  const contents = document.querySelectorAll('.contents');

  // それぞれのliにイベントリスナーを追加
  // クリックされたら
  for (let j = 0; j < button.length; j++) {
    button[j].addEventListener('click', () => {
      // すべてのliから.activeを削除    
      for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('active');
      }
      // クリックされたliに .active をつける
      button[j].classList.add('active');

      // すべてのcontentsからactiveを削除
      for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
      }

      // 対応するcontentsにactiveを追加
      contents[j].classList.add('active');
    });
  }




})();


// NAV LINKS
window.addEventListener('load', () => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', window.location.pathname); // removes #spot
    });
});


//HEADER
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('navHamburger');

hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
    document.documentElement.classList.toggle('menu-open', open);
});

/*preloader*/

 $(window).on('load',function(){
 		$(".loader").fadeOut(1000);
 		$(".content").fadeIn(1000);
 })


//sticky
document.addEventListener('DOMContentLoaded', function () {
  const bar = document.querySelector('.switch__sticky');
  const footer = document.querySelector('footer');
  const wrap = document.querySelector('.wrap');
 
  function toggleBar() {
   
    const scrolledPastHero = window.scrollY > window.innerHeight * 0.1;
 
    
    const footerTop = footer.getBoundingClientRect().top;
    const reachedFooter = footerTop < window.innerHeight - 80;
 
    bar.classList.toggle('is-visible', scrolledPastHero && !reachedFooter);
  }
 
  window.addEventListener('scroll', toggleBar);
  window.addEventListener('resize', toggleBar);
  toggleBar();
 
 
  bar.querySelectorAll('.switch li').forEach(function (li) {
    li.addEventListener('click', function () {
      const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: wrapTop, behavior: 'smooth' });
    });
  });
});