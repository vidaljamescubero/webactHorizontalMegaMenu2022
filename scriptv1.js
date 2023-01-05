
function desktopFunction123() {
    parentContainerDom.innerHTML = `<ul class="main-menu-container"></ul>`
    const parentDom = document.querySelector('.main-menu-container')
 
    function wholeNavFunction() {
 
       function removeAllNavFunction() {
          const mainSubmenu = parentDom.querySelectorAll('.main-submenu-item');
          const submenu = parentDom.querySelectorAll('.submenu-item');
 
          mainSubmenu.forEach((v, i, a) => {
             let allArrow = v.querySelectorAll('.material-symbols-outlined');
 
             allArrow.forEach((v2, i2, a2) => {
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
                   v.querySelector('.submenu-container').style.cssText = `left: 100%; top: 0; transition: 0.3s ease-in-out; visibility: visible; opacity: 1;`;
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
                   v.querySelector('.submenu-container').style.cssText = `left: 100%; top: 0; transition: 0.3s ease-in-out; visibility: visible; opacity: 1;`;
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
          const LeftSubmenu = parentDom.querySelectorAll('.with-submenu-left');
          const RightSubmenu = parentDom.querySelectorAll('.with-submenu-right');
 
          LeftSubmenu.forEach((v, i, a) => {
             LeftNavFunction(v)
          })
 
          RightSubmenu.forEach((v, i, a) => {
             RightNavFunction(v)
          })
       }
 
 
       function navLeftOrRight() {
 
          const submenuLeft = parentDom.querySelectorAll('.with-submenu-left');
          const submenuRight = parentDom.querySelectorAll('.with-submenu-right');
 
          submenuLeft.forEach((v, i, a) => {
             v.classList.remove('with-submenu-left')
          })
 
          submenuRight.forEach((v, i, a) => {
             v.classList.remove('with-submenu-right')
          })
 
          const mainMenu = parentDom.querySelectorAll('.main-menu-item');
          mainMenu.forEach((v, i, a) => {
             let rect = v.getBoundingClientRect();
             let leftValue = rect.left;
             let screenWidth = parentContainerDom.offsetWidth * 0.45
 
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
 
    }
 
    function addSubNavs(obj) {
       if (obj.length === 1) {
          let htmlToUse = ``
          obj.forEach((v, i, a) => {
             if (v.visible) {
                htmlToUse +=
                   `
                      <li class="submenu-item">
                         <a href="${v.path}" class="submenu-header-container">
                            <span class="submenu-text">
                               ${v.title}
                            </span>
                         </a>
                      </li>
                   `
             }
          })
          return htmlToUse
       } else {
          let htmlToUse = ``
          obj.forEach((v, i, a) => {
             if (v.visible) {
                htmlToUse +=
                   `
                        <li class="submenu-item">
                            <a href="${v.path}" class="submenu-header-container">
                                <span class="submenu-text">
                                    ${v.title}
                                </span>
                            </a>
                        </li>
                        `
             }
          })
          return htmlToUse
       }
    }
 
    function addNavArrayFunction() {
       navArray.forEach((v, i, a) => {
          let htmlToUse
          if (v.visible) {
             if (v.subNav.length > 0) {
                let mainSubMenuHTML = ``
                // console.log(v.subNav)
 
                v.subNav.forEach((v2, i2, a2) => {
                   if (v2.visible) {
                      if (v2.subNav.length > 0) {
                         let subMenushtml = addSubNavs(v2.subNav)
                         mainSubMenuHTML +=
                            `
                            <li class="main-submenu-item">
                                <a href="${v2.path}" class="main-submenu-header-container">
                                    <span class="main-submenu-text">
                                        ${v2.title}
                                    </span>
                                </a>
 
                                <div class="submenu-container">
                                    <ul class="submenu-container-list">
                                        ${subMenushtml}
                                    </ul>
                                </div>
                            </li>
 
                            `
                      } else {
                         mainSubMenuHTML +=
                            `
                            <li class="main-submenu-item">
                                <a href="${v2.path}" class="main-submenu-header-container">
                                    <span class="main-submenu-text">
                                        ${v2.title}
                                    </span>
                                </a>
                            </li>
 
                            `
                      }
                   }
                })
 
                htmlToUse =
                   `
                    <li class="main-menu-item">
                        <a href="${v.path}" class="main-menu-header-container">
                            <span class="main-menu-text">
                                ${v.title}
                            </span>
                            <span class="material-symbols-outlined">
                                expand_more
                            </span>
                            <div class="main-menu-border-bottom">
 
                            </div>
                        </a>
 
                        <div class="main-menu-submenu-container">
                            <ul class="main-submenu-container">
                            ${mainSubMenuHTML}
                            </ul>
                        </div>
                    </li>
                `
             } else {
                htmlToUse =
                   `
                    <li class="main-menu-item">
                        <a href="${v.path}" class="main-menu-header-container">
                            <span class="main-menu-text">
                                ${v.title}
                            </span>
                            <div class="main-menu-border-bottom">
 
                            </div>
                        </a>
                    </li>
                `
             }
          }
          parentDom.innerHTML += htmlToUse
       }
       )
       wholeNavFunction()
    }
 
    addNavArrayFunction()
 }
 
 if (device === "desktop") {
    // desktopFunction()
 }
 
 window.addEventListener('resize', () => {
    parentContainerDom.innerHTML = ``
    if (device === "desktop") {
       // desktopFunction()
    }
 })
 