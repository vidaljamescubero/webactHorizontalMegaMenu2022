if (vhConnect2 === true) {
   
   
   let linkSheets = navlinkSheets2

   let allNavObj = []
   let mainNavToUse = ''

   function navOBject() {
      let navObject = []
      let categoryObj = []
      linkSheets.forEach(v => {
         if (v.navlinkLevel === 'Category') {
            categoryObj.push({
               title: v.navlinkLabel,
               path: v.navlinkPath,
               mainMenuColor: v.navlinkCategoryMenuColor,
               mainMenus: []
            })

         }

         if (v.navlinkLevel === 'Main') {
            navObject.push({
               label: v.navlinkLabel,
               path: v.navlinkPath,
               parentPath: v.navlinkParentsPath,
               sublevel: []
            })
         }
      })

      navObject.forEach((v, i, a) => {
         let path = v.path

         linkSheets.forEach((v2, i2, a2) => {
            if (path === v2.navlinkParentsPath && path !== null && v2.path !== null) {
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

      categoryObj.forEach(v => {
         navObject.forEach(v2 => {
            if (v.path === v2.parentPath) {
               v.mainMenus.push(v2)
            }
         })
      })

      allNavObj = categoryObj
   }
   navOBject()

   function mainNavToUseFunc() {
      let currentPathname = window.location.pathname
      let pathnameToUse = ''

      if (currentPathname.split('/').length > 1) {
         pathnameToUse = '/' + currentPathname.split('/').pop()
      } else {
         pathnameToUse = currentPathname
      }


      function checkNavs(obj, main) {
         obj.forEach(v => {
            if (v.path === pathnameToUse) {
               mainNavToUse = main
            } else {
               if (v.sublevel.length > 0) {
                  checkNavs(v.sublevel, main)
               }
            }
         })
      }

      allNavObj.forEach(v => {
         if (v.path === pathnameToUse) {
            mainNavToUse = v
         } else {
            if (v.mainMenus.length > 0) {
               checkNavs(v.mainMenus, v)
            }
         }
      })
   }
   mainNavToUseFunc()


   function addLink(str) {
      if (!str.startsWith('http')) {
         let pathStr = str.replace('/', '');
         let newPath = window.location.pathname.split('/');
         let redirectLink
         if (newPath.length > 3) {
            newPath.pop()
            redirectLink = newPath.join('/') + '/' + pathStr;
         } else if (newPath[1] === '') {
            redirectLink = newPath.join('/') + pathStr;
         } else {
            redirectLink = newPath.join('/') + '/' + pathStr;
         };
         return redirectLink
      } else {
         return str
      }
   }

   function desktopFunction() {
      function addMainCategoryHTML() {
         let htmlToUse = ''
         allNavObj.forEach(v => {
            htmlToUse +=
               `
               <a href="${addLink(v.path)}" class="hnavLink-mainCategory-link">
                  ${v.title}
               </a>
            `
         })

         return htmlToUse
      }

      parentContainerDom.innerHTML =
         `
            <div class="hnavLink-mainCategory-Container">
                  ${addMainCategoryHTML()}
            </div>
         `

      if (mainNavToUse !== '') {
         parentContainerDom.innerHTML += `<nav class="h-nav-container" style="background-color:${mainNavToUse.mainMenuColor} !important"><ul class="main-menu-container"></ul></nav>`;
         const parentDom = document.querySelector('.main-menu-container');

         let objToUse = mainNavToUse.mainMenus

         function wholeNavFunction() {

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
            }

            navLeftOrRight()

            window.addEventListener('resize', () => {
               navLeftOrRight()
            })

         }

         function addSubNavs2(obj) {
            let htmlToUse = ''
            obj.forEach(v => {
               htmlToUse +=
                  `
                  <li class="submenu-item">
                     <a href="${addLink(v.path)}" class="submenu-header-container">
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
                           <a href="${addLink(v.path)}" class="submenu-header-container">
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
                           <a href="${addLink(v.path)}" class="submenu-header-container">
                              <span class="submenu-text">
                                 ${v.label}
                              </span>
      
                              <i class="fa-sharp fa-solid fa-angle-down"></i>
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
                                       <a href="${addLink(v2.path)}" class="main-submenu-header-container">
                                          <span class="main-submenu-text">
                                             ${v2.label}
                                          </span>
      
                                          <i class="fa-sharp fa-solid fa-angle-down"></i>
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
                              <a href="${addLink(v2.path)}" class="main-submenu-header-container">
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
                             <a href="${addLink(v.path)}" class="main-menu-header-container">
                                 <span class="main-menu-text">
                                     ${v.label}
                                 </span>
                                 <i class="fa-sharp fa-solid fa-angle-down"></i>
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
                          <a href="${addLink(v.path)}" class="main-menu-header-container">
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

   }


   function tabletMobileFunction() {

      function accordionFunction() {
         const mainMenuItems = document.querySelectorAll('.accordion-main-menu-item')
         mainMenuItems.forEach(v => {

            let subMenuheader = v.querySelector('.accordion-main-menu-header')
            subMenuheader.addEventListener('click', () => {

               let subMenuContainer = v.querySelector('.accordion-main-menu-submenu');
               let subMenuHeaderArrow = v.querySelector('.fa-angle-down');

               if (!v.classList.contains('open-main')) {

                  subMenuContainer.style.cssText = `padding-top: 5px`
                  v.classList.add('open-main')
                  subMenuHeaderArrow.style.cssText = `transform: rotate(180deg)`

                  window.addEventListener('click', (e) => {
                     if (e.target.contains(subMenuContainer)) {
                        v.classList.remove('open-main')
                        subMenuHeaderArrow.style.cssText = ``
                     }
                  })

               } else {
                  v.classList.remove('open-main')
                  subMenuHeaderArrow.style.cssText = ``
               }
            })
         })

         const menuItems = document.querySelectorAll('.accordion-menu-item');
         menuItems.forEach(v => {

            let subMenuheader = v.querySelector('.accordion-menu-header')

            subMenuheader.addEventListener('click', () => {
               let subMenuContainer = v.querySelector('.accordion-menu-submenu');
               let subMenuHeaderArrow = v.querySelector('.fa-angle-down');

               if (!v.classList.contains('open')) {
                  subMenuContainer.style.cssText = `padding-top: 5px`
                  v.classList.add('open')
                  subMenuHeaderArrow.style.cssText = `transform: rotate(180deg)`

                  window.addEventListener('click', (e) => {
                     if (e.target.contains(v)) {
                        v.classList.remove('open')
                        subMenuHeaderArrow.style.cssText = ``
                     }
                  })

               } else {
                  v.classList.remove('open')
                  subMenuHeaderArrow.style.cssText = ``
               }
            })
         })
      }


      function addSubMenu(obj) {
         let htmlToUse = ''
         obj.forEach(v => {
            if (v.sublevel.length > 0) {
               let submenus = addSubMenu(v.sublevel)
               htmlToUse += ` 
               <li class="accordion-menu-item">
                  <div class="accordion-menu-header">
                     <a href="${addLink(v.path)}" class="accordion-menu-text">
                        ${v.label}
                        
                        <div class="accordion-menu-line"></div>
                     </a>
   
                     <i class="fa-sharp fa-solid fa-angle-down"></i>
                     
                  </div>
                  <div class="accordion-menu-submenu">
                     <ul class="accordion-menu-container">
                        ${submenus}
                     </ul>
                  </div>
               </li>`
            } else {
               htmlToUse += ` 
                     <li class="accordion-menu-item">
                        <div class="accordion-menu-header">
                           <a href="${addLink(v.path)}" class="accordion-menu-text">
                              ${v.label}
                              
                              <div class="accordion-menu-line"></div>
                           </a>
                        </div>
                     </li>`
            }
         })
         return htmlToUse
      }

      parentContainerDom.innerHTML = `<nav class="accordion-h-nav-container"><ul class="accordion-main-menu-container"></ul></nav>`
      const parentDom = document.querySelector('.accordion-main-menu-container')

      allNavObj.forEach(v => {
         let htmlToUse = ''
         if (v.mainMenus.length > 0) {
            let mainSubMenuHTML = addSubMenu(v.mainMenus)
            htmlToUse =
               `
             <li class="accordion-main-menu-item">
               <div class="accordion-main-menu-header">
                  <a href="${addLink(v.path)}" class="accordion-main-menu-text accordion-main-category-text">
                     ${v.title}

                     <div class="accordion-main-menu-line"></div>
                  </a>
                  <i class="fa-sharp fa-solid fa-angle-down"></i>
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
                     <a href="${addLink(v.path)}" class="accordion-main-menu-text accordion-main-category-text">
                        ${v.title}
   
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
      desktopFunction()
   } else {
      tabletMobileFunction()
   }

} else {



   let allNav = []
   let mainNavtoUse = ''

   function groupAllNav() {
      let navObj = []
      mainCategories.forEach(v => {
         let obj
         navArray.forEach(v2 => {
            if (v.mainCategoriesLabel === v2.title && v2.path.includes(v.mainCategoriesPath)) {
               obj = {
                  title: v2.title,
                  path: v2.path,
                  color: v.MainCategoriesMenuColor,
                  mainNavs: []
               }
            }
         })

         mainNavs.forEach(v2 => {
            if (v2.MainNavsParentLabel === obj.title && obj.path.includes(v2.MainNavsParentPath)) {
               navArray.forEach(v3 => {
                  if (v2.mainNavslabel === v3.title && v3.path.includes(v2.mainNavsPath)) {
                     obj.mainNavs.push(v3)
                  }
               })
            }
         })

         navObj.push(obj)
      })

      allNav = navObj

   }

   groupAllNav()

   // functions for mainNav
   function mainNavToUse() {
      let windowPathname = window.location.pathname
      // let windowPathname = '/site/6c6fe950/residents'
      let currentOpenObj

      function checkSubnav(obj, main) {
         if (obj.subNav.length > 0) {
            obj.subNav.forEach(v => {
               if (v.path.split('?')[0] === windowPathname) {
                  // console.log(v)
                  currentOpenObj = main
               } else {
                  checkSubnav(v, main)
               }
            })
         }
      }

      function checkMain(obj, main) {
         if (obj.length > 0) {
            obj.forEach(v => {
               if (v.path.split('?')[0] === windowPathname) {
                  currentOpenObj = main
               } else {
                  checkSubnav(v, main)
               }
            })

         }
      }

      allNav.forEach(v => {
         if (v.path.split('?')[0] === windowPathname) {
            currentOpenObj = v
         } else {
            checkMain(v.mainNavs, v)
         }
      })

      // console.log(currentOpenObj)

      if (currentOpenObj) {
         mainNavtoUse = currentOpenObj
      }
   }

   mainNavToUse()

   // console.log(mainNavtoUse)

   function forHorizontalMenuType() {
      function addMainCategoryHTML() {
         let htmlToUse = ''
         allNav.forEach(v => {
            htmlToUse +=
               `
               <a href="${v.path}" class="hnavLink-mainCategory-link">
                  ${v.title}
               </a>
            `
         })

         return htmlToUse
      }

      parentContainerDom.innerHTML =
         `
            <div class="hnavLink-mainCategory-Container">
                  ${addMainCategoryHTML()}
            </div>
         `

      let mainNav = mainNavtoUse.mainNavs
      let colorForMainMenu = mainNavtoUse.color

      if (mainNavtoUse) {
         parentContainerDom.innerHTML += `<div class="mainNavsContainer" style="background-color: ${colorForMainMenu} !important"><ul class="main-menu-container"></ul></div>`
         const parentDom = document.querySelector('.main-menu-container')

         function wholeNavFunction() {

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
            }

            navLeftOrRight()

            window.addEventListener('resize', () => {
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
            mainNav.forEach((v) => {
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
      
                                         <i class="fa-sharp fa-solid fa-angle-down"></i>
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
                                 <i class="fa-sharp fa-solid fa-angle-down"></i>
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
   }

   function forAccordionMenuType() {
      parentContainerDom.innerHTML = `<nav class="accordion-h-nav-container"><ul class="accordion-main-menu-container"></ul></nav>`
      const parentDom = document.querySelector('.accordion-main-menu-container');

      function accordionFunction() {
         const mainMenuItems = document.querySelectorAll('.accordion-main-menu-item')
         mainMenuItems.forEach(v => {

            let subMenuheader = v.querySelector('.accordion-main-menu-header')
            subMenuheader.addEventListener('click', () => {

               let subMenuContainer = v.querySelector('.accordion-main-menu-submenu');
               let subMenuHeaderArrow = v.querySelector('.fa-angle-down');

               if (!v.classList.contains('open-main')) {

                  subMenuContainer.style.cssText = `padding-top: 5px`
                  v.classList.add('open-main')
                  subMenuHeaderArrow.style.cssText = `transform: rotate(180deg)`

                  window.addEventListener('click', (e) => {
                     if (e.target.contains(subMenuContainer)) {
                        v.classList.remove('open-main')
                        subMenuHeaderArrow.style.cssText = ``
                     }
                  })

               } else {
                  v.classList.remove('open-main')
                  subMenuHeaderArrow.style.cssText = ``
               }
            })
         })

         const menuItems = document.querySelectorAll('.accordion-menu-item');
         menuItems.forEach(v => {

            let subMenuheader = v.querySelector('.accordion-menu-header')

            subMenuheader.addEventListener('click', () => {
               let subMenuContainer = v.querySelector('.accordion-menu-submenu');
               let subMenuHeaderArrow = v.querySelector('.fa-angle-down');

               if (!v.classList.contains('open')) {
                  subMenuContainer.style.cssText = `padding-top: 5px`
                  v.classList.add('open')
                  subMenuHeaderArrow.style.cssText = `transform: rotate(180deg)`

                  window.addEventListener('click', (e) => {
                     if (e.target.contains(v)) {
                        v.classList.remove('open')
                        subMenuHeaderArrow.style.cssText = ``
                     }
                  })

               } else {
                  v.classList.remove('open')
                  subMenuHeaderArrow.style.cssText = ``
               }
            })
         })
      }

      function addSubMenu(obj) {
         let htmlToUse = ''
         obj.forEach(v => {
            if (v.subNav.length > 0) {
               let submenus = addSubMenu(v.subNav)
               htmlToUse += ` 
               <li class="accordion-menu-item">
                  <div class="accordion-menu-header">
                     <a href="${v.path}" class="accordion-menu-text">
                        ${v.title}
                        
                        <div class="accordion-menu-line"></div>
                     </a>
   
                     <i class="fa-sharp fa-solid fa-angle-down"></i>
                     
                  </div>
                  <div class="accordion-menu-submenu">
                     <ul class="accordion-menu-container">
                        ${submenus}
                     </ul>
                  </div>
               </li>`
            } else {
               htmlToUse += ` 
                     <li class="accordion-menu-item">
                        <div class="accordion-menu-header">
                           <a href="${v.path}" class="accordion-menu-text">
                              ${v.title}
                              
                              <div class="accordion-menu-line"></div>
                           </a>
                        </div>
                     </li>`
            }
         })
         return htmlToUse
      }

      allNav.forEach(v => {
         let htmlTouse = ''
         if (v.mainNavs.length > 0) {
            let mainSubMenuHTML = ''
            v.mainNavs.forEach(v2 => {
               if (v2.subNav.length > 0) {
                  let submenus = addSubMenu(v2.subNav)
                  mainSubMenuHTML +=
                     `
                        <li class="accordion-menu-item">
                           <div class="accordion-menu-header">
                              <a href="${v2.path}" class="accordion-menu-text">
                                 ${v2.title}
                                 
                                 <div class="accordion-menu-line"></div>
                              </a>
   
                              <i class="fa-sharp fa-solid fa-angle-down"></i>
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
                                 ${v2.title}
                                 
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
                           <a href="${v.path}" class="accordion-main-menu-text accordion-main-category-text">
                              ${v.title}
   
                              <div class="accordion-main-menu-line"></div>
                           </a>
   
                           <i class="fa-sharp fa-solid fa-angle-down"></i>
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
                  <a href="${v.path}" class="accordion-main-menu-text accordion-main-category-text">
                     ${v.title}

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
      forHorizontalMenuType()

   } else {
      forAccordionMenuType()
   }

}

console.log(mainNavs)

