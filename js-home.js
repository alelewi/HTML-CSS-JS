const container= document.getElementById("container");
const menu_button = document.querySelector(".menu-btn");


menu_button.addEventListener("click",function(){
  
  openNav()
})
function openNav() {

  if(container.classList.contains("close-container")){
    container.classList.remove("close-container");
  }
  else {
    container.classList.add("close-container")
  }


  }