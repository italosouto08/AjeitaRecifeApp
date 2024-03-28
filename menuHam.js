const btnmobile = document.getElementById('menuHam');  
const nav = document.getElementById('nav'); 

    function toggleMenu(event){
      if (event.type === 'touchstart') event.preventDefault();
      const nav = document.getElementById('nav');
      nav.classList.toggle('active');
    }

    function closeMenuOnClick(event) {
        if (nav.contains(event.target)) {
          nav.classList.remove('active');
        }
      }

    btnmobile.addEventListener('click', toggleMenu);
    btnmobile.addEventListener('touchstart', toggleMenu); 
    document.addEventListener('click', closeMenuOnClick);

