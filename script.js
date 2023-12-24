let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
function searchAndScroll() {
    // Ambil nilai input pencarian
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Temukan elemen dengan nama sesuai dengan input pencarian
    var targetElement = document.querySelector('a[name="' + searchTerm + '"]');

    // Periksa apakah elemen ditemukan
    if (targetElement) {
        // Gulir ke elemen yang ditemukan
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Tampilkan pesan jika elemen tidak ditemukan
        alert('Nama tidak ditemukan.');
    }
}



