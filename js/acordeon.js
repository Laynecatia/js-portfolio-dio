

function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}


document.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown");
      for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
});


function myFunction() {
  toggleDropdown("myDropdown");
}

function myFunction2() {
  toggleDropdown("myDropdown2");
}

function myFunction3() {
  toggleDropdown("myDropdown3");
}

function myFunction4() {
  toggleDropdown("myDropdown4");
}



