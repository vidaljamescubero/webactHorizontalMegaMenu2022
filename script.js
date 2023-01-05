let linkSheets = navlinkSheets

let navObj = []
function navOBject() {
   navObject = []
   linkSheets.forEach((v, i, a) => {
      if (v.navlinkLevel === 'Main') {
         navObject.push({
            label: v.navlinkLabel,
            path: v.navlinkPath,
            sublevel: []
         })
      }
   })

   navObject.forEach((v, i, a) => {
      let path = v.path

      linkSheets.forEach((v2, i2, a2) => {
         if (path === v2.navlinkParentsPath) {
            v.sublevel.push({
               label: v2.navlinkLabel,
               path: v2.navlinkPath,
               sublevel: []
            })
         }
      })

      v.sublevel.forEach((v, i, a) => {
         let path = v.path

         linkSheets.forEach((v2, i2, a2) => {
            if (path === v2.navlinkParentsPath) {
               v.sublevel.push({
                  label: v2.navlinkLabel,
                  path: v2.navlinkPath,
                  sublevel: []
               })
            }
         })

         v.sublevel.forEach((v, i, a) => {
            let path = v.path
            linkSheets.forEach((v2, i2, a2) => {
               if (path === v2.navlinkParentsPath) {
                  v.sublevel.push({
                     label: v2.navlinkLabel,
                     path: v2.navlinkPath,
                     sublevel: []
                  })
               }
            })
         })
      })

   })

   navObj = navObject
}

navOBject()

function desktopFunction(objToUse) {
   parentContainerDom.innerHTML = ''
   parentContainerDom.innerHTML = `<nav class="h-nav-container"><ul class="main-menu-container"></ul></nav>`
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
         })
         // submenu.forEach((v, i, a) => {
         //    // v.querySelector('.submenu-container').style.cssText = ``;
         // })
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
            let screenWidth = parentContainerDom.offsetWidth * 0.4

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

   function addSubNavs2(obj) {
      let htmlToUse = ''
      obj.forEach(v => {
         htmlToUse +=
         `
            <li class="submenu-item">
               <a href="${v.path}" class="submenu-header-container">
                  <span class="submenu-text">
                     ${v.label}
                  </span>
               </a>
            </li>
         `
      })

      return htmlToUse
   }

   function addSubNavs(obj) {
      let htmlToUse = ''
      obj.forEach((v, i, a) => {
         if (v.sublevel.length === 0) {
            htmlToUse +=
               `
                  <li class="submenu-item">
                     <a href="${v.path}" class="submenu-header-container">
                        <span class="submenu-text">
                           ${v.label}
                        </span>
                     </a>
                  </li>
               `
         } else {
            let subMenushtml = addSubNavs2(v.sublevel)
            htmlToUse +=
               `
                  <li class="submenu-item">
                     <a href="${v.path}" class="submenu-header-container">
                        <span class="submenu-text">
                           ${v.label}
                        </span>
                     </a>

                     <div class="submenu-container">
                        <ul class="submenu-container-list">
                           ${subMenushtml}
                        </ul>
                     </div>
                  </li>
               `
         }
      })
      return htmlToUse
   }
   
   function addNavArrayFunction(navObj) {
      navObj.forEach((v, i, a) => {
         let htmlToUse = ''

         if (v.sublevel.length > 0) { 
            let mainSubMenuHTML = ''
            v.sublevel.forEach(v2 => {
               if (v2.sublevel.length > 0) {
                  let subMenushtml = addSubNavs(v2.sublevel)
                     mainSubMenuHTML +=
                        `
                           <li class="main-submenu-item">
                                 <a href="${v2.path}" class="main-submenu-header-container">
                                    <span class="main-submenu-text">
                                       ${v2.label}
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
                                 ${v2.label}
                           </span>
                        </a>
                     </li>
                  `
               }
               
            })
            htmlToUse =
               `
                   <li class="main-menu-item">
                       <a href="${v.path}" class="main-menu-header-container">
                           <span class="main-menu-text">
                               ${v.label}
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
                            ${v.label}
                        </span>
                        <div class="main-menu-border-bottom">

                        </div>
                    </a>
                </li>
            `
         }

         

         parentDom.innerHTML += htmlToUse
      })
      wholeNavFunction()
   }
   addNavArrayFunction(objToUse)
}


function tabletMobileFunction(objToUse) {

   function accordionFunction() {
      const mainMenuItems = document.querySelectorAll('.accordion-main-menu-item')
      mainMenuItems.forEach(v => {

         let subMenuheader = v.querySelector('.accordion-main-menu-header')
         subMenuheader.addEventListener('click', () => {

            let subMenuContainer = v.querySelector('.accordion-main-menu-submenu');
            let subMenuHeaderArrow = v.querySelector('.material-symbols-outlined');

            if (!subMenuContainer.classList.contains('open')) {
               subMenuContainer.style.cssText = `padding-top: 5px`
               subMenuContainer.classList.add('open')
               subMenuHeaderArrow.style.cssText = `transform: rotate(180deg)`

               window.addEventListener('click', (e) => {
                  if (e.target.contains(subMenuContainer)) {
                     subMenuContainer.classList.remove('open')
                     subMenuHeaderArrow.style.cssText = ``
                  }
               })

            } else {
               subMenuContainer.classList.remove('open')
               subMenuHeaderArrow.style.cssText = ``
            }
         })
      })

      const menuItems = document.querySelectorAll('.accordion-menu-item');
      menuItems.forEach(v => {

         let subMenuheader = v.querySelector('.accordion-menu-header')

         subMenuheader.addEventListener('click', () => {

            
            let subMenuContainer = v.querySelector('.accordion-menu-submenu');
            let subMenuHeaderArrow = v.querySelector('.material-symbols-outlined');

            if (!subMenuContainer.classList.contains('open')) {
               subMenuContainer.style.cssText = `padding-top: 5px`
               subMenuContainer.classList.add('open')
               subMenuHeaderArrow.style.cssText = `transform: rotate(180deg)`

               window.addEventListener('click', (e) => {
                  if (e.target.contains(subMenuContainer)) {
                     subMenuContainer.classList.remove('open')
                     subMenuHeaderArrow.style.cssText = ``
                  }
               })

            } else {
               subMenuContainer.classList.remove('open')
               subMenuHeaderArrow.style.cssText = ``
            }
         })
      })
   }

   function addSubMenu2(obj) {
      let htmlToUse = ''
      obj.forEach(v => {
         htmlToUse += ` 
               <li class="accordion-menu-item">
                  <div class="accordion-menu-header">
                     <a href="${v.path}" class="accordion-menu-text">
                        ${v.label}
                        
                        <div class="accordion-menu-line"></div>
                     </a>
                  </div>
               </li>`
      })
      return htmlToUse
   }

   function addSubMenu(obj) {
      let htmlToUse = ''
      obj.forEach(v => {
         if (v.sublevel.length === 0) {
            htmlToUse += ` 
               <li class="accordion-menu-item">
                  <div class="accordion-menu-header">
                     <a href="${v.path}" class="accordion-menu-text">
                        ${v.label}
                        
                        <div class="accordion-menu-line"></div>
                     </a>
                  </div>
               </li>`
         } else {
            let submenus = addSubMenu2(v.sublevel)
            htmlToUse += ` 
            <li class="accordion-menu-item">
               <div class="accordion-menu-header">
                  <a href="${v.path}" class="accordion-menu-text">
                     ${v.label}
                     
                     <div class="accordion-menu-line"></div>
                  </a>

                  <span class="material-symbols-outlined">
                     expand_more
                  </span>
                  
               </div>
               <div class="accordion-menu-submenu">
                  <ul class="accordion-menu-container">
                     ${submenus}
                  </ul>
               </div>
            </li>`
         }
      })

      return htmlToUse
   }

   parentContainerDom.innerHTML = `<nav class="accordion-h-nav-container"><ul class="accordion-main-menu-container"></ul></nav>`
   const parentDom = document.querySelector('.accordion-main-menu-container')

   objToUse.forEach(v => {
      let htmlToUse
      if (v.sublevel.length > 0) {
         let mainSubMenuHTML = ``
         v.sublevel.forEach(v2 => {
            if (v2.sublevel.length > 0) {
               let submenus = addSubMenu(v2.sublevel)
               // submenus = ``
               mainSubMenuHTML +=
                  `
                     <li class="accordion-menu-item">
                        <div class="accordion-menu-header">
                           <a href="${v2.path}" class="accordion-menu-text">
                              ${v2.label}
                              
                              <div class="accordion-menu-line"></div>
                           </a>

                           <span class="material-symbols-outlined">
                                 expand_more
                           </span>
                        </div>

                        <div class="accordion-menu-submenu">
                           <ul class="accordion-menu-container">
                              ${submenus}
                           </ul>
                        </div>
                     </li>

                     `
            } else {
               mainSubMenuHTML +=
                  `
                     <li class="accordion-menu-item">
                        <div class="accordion-menu-header">
                           <a href="${v2.path}" class="accordion-menu-text">
                              ${v2.label}
                              
                              <div class="accordion-menu-line"></div>
                           </a>
                        </div>
                     </li>

                     `
            }
         })
         htmlToUse =
            `
                  <li class="accordion-main-menu-item">
                     <div class="accordion-main-menu-header">
                        <a href="${v.path}" class="accordion-main-menu-text">
                           ${v.label}

                           <div class="accordion-main-menu-line"></div>
                        </a>

                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                     </div>

                     <div class="accordion-main-menu-submenu">
                        <ul class="accordion-menu-container">
                           ${mainSubMenuHTML}
                        </ul>
                     </div>
                  </li>
               `
      } else {
         htmlToUse =
            `
             <li class="accordion-main-menu-item">
               <div class="accordion-main-menu-header">
                  <a href="${v.path}" class="accordion-main-menu-text">
                     ${v.label}

                     <div class="accordion-main-menu-line"></div>
                  </a>
               </div>
             </li>
         `
      }

      parentDom.innerHTML += htmlToUse
   })
   accordionFunction()
}

if (menuType === "horizontal") {
   desktopFunction(navObj)
} else {
   tabletMobileFunction(navObj)
}
