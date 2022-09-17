// ================== Loader ============================
onload = () => {
    const load = document.getElementById('load')

    setTimeout(() => {
        load.style.display = 'none'
    }, 2500)
}

/*=============== SHOW MENU ===============*/
// Didapat dari Github responsive watches
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
// Jika navtoggle diklik maka akan menambahkan class show-menu (sesuai nama di css)
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
// Jika navclose diklick maka class show menu akan dihapus
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// /*=============== REMOVE MENU MOBILE ===============*/
// Didapat dari github
// Hanya bisa memakai queryselectorall tidak bisa dengan getelementsbyclassname dikarenakan .nav_link juga merupakan css selector bukan hanya html saja.
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ================= Change Background Header ==============\
// Didapat dari github
// Scroll header didapat dari css
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ================= Mixitup Filter Products ====================
// Didapat dari kunkalabs mixitup (google)
let mixerProducts = mixitup('.products_content', {
    selectors: {
        target: '.products_card'
    },
    animation: {
        duration: 300
    }
});

// Membuat default atau tampilan awal dari productnya
mixerProducts.filter('.delicacies')

// Mengaktifkan link products
const linkProducts = document.querySelectorAll('.products_item')

// active-products harus sesuai dengan yang di CSS
// Memberika class active-products pada yang diclick sehingga ketika diclick warna pada title berubah
function activeProducts(){
    linkProducts.forEach(i => i.classList.remove('active-product'))
    this.classList.add('active-product')
}

linkProducts.forEach(i => i.addEventListener('click', activeProducts))

// ===================== Show scroll up ======================
// Jika scroll melebihan atau sama dengan 350 maka akan menampilkan tanda panah
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

//=============== Scroll sections active link ================
// Didapat dari github
// Icon menjadi berwarna ketika discroll atau di klik (menuju tempatnya) misal ke about maka icon about menjadi berwarna
// Section id merujuk pada section section di html, nav_menu merujuk pada menu menu yang terdapat di html dan active-link merujuk pada CSS dan active link ini juga diberikan ke html sebagai default

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
