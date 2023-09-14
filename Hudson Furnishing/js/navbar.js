let sidebar = document.querySelector('.sidebar');
let navbar = document.querySelector('.navbar');


sidebar.onclick = () => {
    sidebar.classList.toggle('active');
    navbar.classList.toggle('active');
};

