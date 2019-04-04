const projectImages = Array.from(document.querySelectorAll('.project__image'));
const nav = document.querySelector('nav')
const navTop = nav.getBoundingClientRect();
const header = document.querySelector('header');


function onScroll(e){
	if (navTop.y <= this.scrollY){
		nav.classList.add('sticky-nav');
		header.classList.add('header-margin');
	}else{
		nav.classList.remove('sticky-nav');
		header.classList.remove('header-margin');
	}
}

window.addEventListener('scroll', onScroll);