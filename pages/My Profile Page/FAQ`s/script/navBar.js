var hamBurgerMenu = document.getElementsByClassName('hamBurgerMenu')[0];
var navBarBox = document.getElementsByClassName('navBarBox')[0];
var downContainer = document.getElementsByClassName('navDownContainer')[0];
var a = 0;
hamBurgerMenu.addEventListener('click', () => {
    if (a == 0) {
        downContainer.style.display = 'flex !important';
        navBarBox.style.height = '317px';
        downContainer.style.display = 'flex'
        a = 2;
    } else {
        navBarBox.style.height = '60px';
        downContainer.style.display = 'none';
        navBarBox.style.overflowY = 'hidden';
        a = 0;
    }
})