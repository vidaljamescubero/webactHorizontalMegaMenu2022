let navDesktop = []
let navTablet = []
let navMobile = []
function desktopNavOBject() {
   let linkSheets = navlinkSheets

   navlinkToAdd.forEach((v, i, a) => {
      if (v.linkDisplayType === "all" || v.linkDisplayType === "desktop" || v.linkDisplayType === "desktop-tablet" || v.linkDisplayType === "desktop-mobile") {
         linkSheets.push(v)
      }
   })

   navlinkToHide.forEach((v, i, a) => {
      if (v.linkDisplayType === "allHide" || v.linkDisplayType === "desktopHide" || v.linkDisplayType === "desktop-tabletHide" || v.linkDisplayType === "desktop-mobileHide") {
         linkSheets = linkSheets.filter(value => value.navlinkPath !== v.navlinkPath)
      }
   })

   navObjectDesktop = []
   linkSheets.forEach((v, i, a) => {
      if (v.navlinkLevel === 'Main') {
         navObjectDesktop.push({
            label: v.navlinkLabel,
            path: v.navlinkPath,
            sublevel: []
         })
      }
   })

   navObjectDesktop.forEach((v, i, a) => {
      let path = v.path
      let sublevel = []

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
         let sublevel = []

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
            let sublevel = []

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

   navDesktop = navObjectDesktop

}
function tabletNavObject() {
   let linkSheets = navlinkSheets

   navlinkToAdd.forEach((v, i, a) => {
      if (v.linkDisplayType === "all" || v.linkDisplayType === "tablet" || v.linkDisplayType === "desktop-tablet" || v.linkDisplayType === "tablet-mobile") {
         linkSheets.push(v)
      }
   })

   navlinkToHide.forEach((v, i, a) => {
      if (v.linkDisplayType === "allHide" || v.linkDisplayType === "tabletHide" || v.linkDisplayType === "desktop-tabletHide" || v.linkDisplayType === "tablet-mobileHide") {
         linkSheets = linkSheets.filter(value => value.navlinkPath !== v.navlinkPath)
      }
   })

   navObjectTablet = []
   linkSheets.forEach((v, i, a) => {
      if (v.navlinkLevel === 'Main') {
         navObjectTablet.push({
            label: v.navlinkLabel,
            path: v.navlinkPath,
            sublevel: []
         })
      }
   })

   navObjectTablet.forEach((v, i, a) => {
      let path = v.path
      let sublevel = []

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
         let sublevel = []

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
            let sublevel = []

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

   navTablet = navObjectTablet
}
function mobileNavObject() {
   let linkSheets = navlinkSheets

   navlinkToAdd.forEach((v, i, a) => {
      if (v.linkDisplayType === "all" || v.linkDisplayType === "mobile" || v.linkDisplayType === "desktop-mobile" || v.linkDisplayType === "tablet-mobile") {
         linkSheets.push(v)
      }
   })

   navlinkToHide.forEach((v, i, a) => {
      if (v.linkDisplayType === "allHide" || v.linkDisplayType === "mobileHide" || v.linkDisplayType === "desktop-mobileHide" || v.linkDisplayType === "tablet-mobileHide") {
         linkSheets = linkSheets.filter(value => value.navlinkPath !== v.navlinkPath)
      }
   })

   navObjectMobile = []
   linkSheets.forEach((v, i, a) => {
      if (v.navlinkLevel === 'Main') {
         navObjectMobile.push({
            label: v.navlinkLabel,
            path: v.navlinkPath,
            sublevel: []
         })
      }
   })

   navObjectMobile.forEach((v, i, a) => {
      let path = v.path
      let sublevel = []

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
         let sublevel = []

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
            let sublevel = []

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

   navMobile = navObjectMobile
}
desktopNavOBject()
tabletNavObject()
mobileNavObject()

function desktopFunction(objToUse) {
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
            let subMenushtml = addSubNavs(v.sublevel)
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
         let htmlToUse
         if (v.sublevel.length > 0) {
            let mainSubMenuHTML = ``
            // let subMenushtml = addSubNavs(v.sublevel)
            v.sublevel.forEach((v2, i2, a2) => {
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

desktopFunction(navDesktop)

