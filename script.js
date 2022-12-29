function removeAllNavFunction() {
    const mainSubmenu = document.querySelectorAll('.main-submenu-item');
    const submenu = document.querySelectorAll('.submenu-item');

    mainSubmenu.forEach((v, i, a) => { 
        let allArrow = v.querySelectorAll('.material-symbols-outlined');

        allArrow.forEach((v2,i2,a2) => {
            v2.remove()
        })

        // v.querySelector('.submenu-container').style.cssText = ``;
    })

    submenu.forEach((v, i, a) => { 
        // v.querySelector('.submenu-container').style.cssText = ``;
    })
}

function LeftNavFunction(dom) {
    const mainSubmenu = dom.querySelectorAll('.main-submenu-item');
    const submenu = dom.querySelectorAll('.submenu-item');
    
    mainSubmenu.forEach((v, i, a) => {
        if (v.querySelector('.submenu-container') !== null) {
            if (!v.querySelector('a').querySelector('.material-symbols-outlined')) {
                v.querySelector('a').innerHTML += `<span class="material-symbols-outlined">expand_more</span>`
            }
            
            v.addEventListener('mouseover', () => {
                v.querySelector('.submenu-container').style.cssText = `right: 100%; top: 0; transition: 0.3s ease-in-out; visibility: visible; opacity: 1`;
                v.querySelector('.material-symbols-outlined').style.cssText = `transform: rotate(90deg);`;
            })
    
            v.addEventListener('mouseout', () => {
                v.querySelector('.submenu-container').style.cssText = ``;
                v.querySelector('.material-symbols-outlined').style.cssText = ``;
            })
        }
    })
    
    submenu.forEach((v, i, a) => {
        if (v.querySelector('.submenu-container') !== null) {
            v.querySelector('a').innerHTML += `<span class="material-symbols-outlined">expand_more</span>`
            v.addEventListener('mouseover', () => {
                v.querySelector('.submenu-container').style.cssText = `right: 100%; top: 0; transition: 0.3s ease-in-out; visibility: visible; opacity: 1`;
                v.querySelector('.material-symbols-outlined').style.cssText = `transform: rotate(90deg);`;
            })
    
            v.addEventListener('mouseout', () => {
                v.querySelector('.submenu-container').style.cssText = ``;
                v.querySelector('.material-symbols-outlined').style.cssText = ``;
            })
        }
    })
}

function RightNavFunction(dom) {
    const mainSubmenu = dom.querySelectorAll('.main-submenu-item');
    const submenu = dom.querySelectorAll('.submenu-item');
    
    mainSubmenu.forEach((v, i, a) => {
        if (v.querySelector('.submenu-container') !== null) {
            v.querySelector('a').innerHTML += `<span class="material-symbols-outlined">expand_more</span>`
    
            v.addEventListener('mouseover', () => {
                v.querySelector('.submenu-container').style.cssText = `left: 100%; top: 0; transition: 0.3s ease-in-out; visibility: visible; opacity: 1`;
                v.querySelector('.material-symbols-outlined').style.cssText = `transform: rotate(270deg);`;
            })
    
            v.addEventListener('mouseout', () => {
                v.querySelector('.submenu-container').style.cssText = ``;
                v.querySelector('.material-symbols-outlined').style.cssText = ``;
            })
        }
    })
    
    submenu.forEach((v, i, a) => {
        if (v.querySelector('.submenu-container') !== null) {
            v.querySelector('a').innerHTML += `<span class="material-symbols-outlined">expand_more</span>`
            v.addEventListener('mouseover', () => {
                v.querySelector('.submenu-container').style.cssText = `left: 100%; top: 0; transition: 0.3s ease-in-out; visibility: visible; opacity: 1`;
                v.querySelector('.material-symbols-outlined').style.cssText = `transform: rotate(270deg);`;
            })
    
            v.addEventListener('mouseout', () => {
                v.querySelector('.submenu-container').style.cssText = ``;
                v.querySelector('.material-symbols-outlined').style.cssText = ``;
            })
        }
    })
}

function navFunction() {
    const LeftSubmenu = document.querySelectorAll('.with-submenu-left');
    const RightSubmenu = document.querySelectorAll('.with-submenu-right');

    LeftSubmenu.forEach((v,i,a) => {
        LeftNavFunction(v)
    })

    RightSubmenu.forEach((v,i,a) => {
        RightNavFunction(v)
    })
}


function navLeftOrRight() {

    const submenuLeft = document.querySelectorAll('.with-submenu-left');
    const submenuRight = document.querySelectorAll('.with-submenu-right');

    submenuLeft.forEach((v,i,a) => {
        v.classList.remove('with-submenu-left')
    })

    submenuRight.forEach((v,i,a) => {
        v.classList.remove('with-submenu-right')
    })
    
    const mainMenu = document.querySelectorAll('.main-menu-item');
    mainMenu.forEach((v, i, a) => {
        let rect = v.getBoundingClientRect();
        let leftValue = rect.left;
        let screenWidth = document.querySelector('.h-nav-container').offsetWidth * 0.45
    
        if (leftValue > screenWidth) {
            v.classList.add('with-submenu-left')
        } else {
            v.classList.add('with-submenu-right')
        }
    })

    navFunction()
}

navLeftOrRight()

window.addEventListener('resize', () => {
    removeAllNavFunction()
    navLeftOrRight()
})





