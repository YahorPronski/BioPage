function navbarClick(id) {

	navbarChildren = document.getElementById('navbar').children;
	for (let i = 0; i < navbarChildren.length; i++) {
  		 navbarChildren[i].classList.remove('navbar--active');
	}

	targetButton = document.getElementById(id);
	targetButton.classList.add('navbar--active');

	contentDivs = document.getElementsByClassName('main')[0].children;
	for (let i = 1; i < contentDivs.length; i++) {
  		 contentDivs[i].style.display = 'none';
	}

	targetDiv = document.getElementById(id + 'Content');
	targetDiv.style.display = 'block';
}