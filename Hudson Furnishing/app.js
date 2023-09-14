window.addEventListener('load', ()=>{
    setTimeout(()=>{
        document.querySelector('.loader').classList.add('blur');
        setTimeout(()=>{
            document.querySelector('.loader').style.display = 'none';
            // document.querySelector('*').style.animation = "fadein 1s ease-in"
        }, 1000);
    }, 2000);
    
});

let links = document.querySelectorAll("nav ul li a")
for(i = 0; i < links.length; i++){
    links[i].addEventListener('click', ()=>{
        document.querySelector('.loader').classList.remove('blur');
        document.querySelector('.loader').style.display = 'block';
        setTimeout(()=>{
            document.querySelector('.loader').classList.add('blur');
            setTimeout(()=>{
                document.querySelector('.loader').style.display = 'none';
            }, 100);
        }, 500);
    });
}