const searchInput = document.querySelectorAll('.search-input');
const userSignedContainer = document.querySelectorAll('.user-signed-container');
const closeBtn = document.querySelectorAll('.close-btn');
const sideNavBg = document.querySelectorAll('.side-nav-bg');
const sideNav = document.querySelectorAll('.side-nav');
const bodyElments = document.querySelectorAll('body');
const openSideOptionsBtn = document.querySelectorAll('.open-menu-btn');
const closeSideOptionsBtn = document.querySelectorAll('.close-side-options-btn');
const sideOptions = document.querySelectorAll('.side-options');
const productsAddToCartBtns = document.querySelectorAll('.display-data .item .add-to-cart');
const userGreetingContainer = document.querySelectorAll('.user-account-greeting')



// SIGNED IN OR NOT FUNCTION

let signedIn = false;



if(signedIn) {
    userGreetingContainer.forEach(container => {
        container.innerHTML = `
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path
          d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"
        />
      </svg>
      <span>Welcome</span>
      <h4>Mostafa Ahmed</h4>        `
    })
}else {
    userGreetingContainer.forEach(container => {
        container.innerHTML = `
        <h3>Don't Have an Account <a href="sign-up.html">Sign Up</a>, Have an Account <a href="sign-in.html">Sign In</a></h3>
        `
    })
}

    let openDashboardBtn = document.querySelectorAll('.dashboard-btn')
    openDashboardBtn.forEach(btn => {
        btn.addEventListener('click', ()=>{
            sideNav.forEach(nav => {
                nav.classList.add('show');
            })
            bodyElments.forEach(el => {
                el.classList.add('over-flow-hidden');
            })
            sideNavBg.forEach(bg => {
                bg.classList.add('show');
            })
        })
    });

    sideNavBg.forEach(bg => {
        bg.addEventListener('click',( )=>{
            bg.classList.remove('show');
            sideNav.forEach(nav => {
                nav.classList.remove('show');
            })
            bodyElments.forEach(el => {
                el.classList.remove('over-flow-hidden');
            })
            
        sideOptions.forEach(sideOption => {
            sideOption.classList.remove('show');
        })
        })
    })

// SideNav

closeBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        sideNav.forEach(nav => {
            nav.classList.remove('show');
        })
        bodyElments.forEach(el => {
            el.classList.remove('over-flow-hidden');
        })

        sideNavBg.forEach(bg => {
            bg.classList.remove('show');
        })
    })
})


openSideOptionsBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        sideOptions.forEach(sideOption => {
            sideOption.classList.add('show');
        })
        sideNavBg.forEach(bg => {
            bg.classList.add('show');
        })
        bodyElments.forEach(el => {
            el.classList.add('over-flow-hidden');
        })

    })
})


closeSideOptionsBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        sideOptions.forEach(sideOption => {
            sideOption.classList.remove('show');
        })
        sideNavBg.forEach(bg => {
            bg.classList.remove('show');
        })
        bodyElments.forEach(el => {
            el.classList.remove('over-flow-hidden');
        })

    })
})