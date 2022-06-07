const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const navBar = document.getElementById('nav-bar');
const homeContent = document.getElementById('hero');

document.body.style.paddingTop = navBar.clientHeight + 'px';

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
	navBar.classList.remove('active');
	if (!mobileNav.classList.contains('active')) {
		mobileNav.classList.add('active');
		this.children[0].classList.add('fa-times');
		this.children[0].classList.remove('fa-bars');
	} else {
		mobileNav.classList.remove('active');
		this.children[0].classList.add('fa-bars');
		this.children[0].classList.remove('fa-times');
	}
}

// add shadow in navBar in scroll
window.addEventListener('scroll', () => {
	if (mobileNav.classList.contains('active')) {
		navBar.classList.remove('active');
	} else {
		this.scrollY > 80
			? navBar.classList.add('active')
			: navBar.classList.remove('active');
	}
});
