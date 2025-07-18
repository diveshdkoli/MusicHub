function checkWidth() {
  const element = document.getElementById("DHD");
  const element2= document.getElementById("Deals");
  const element3= document.getElementById("lol");
  if (window.innerWidth <= 829) {
    element.classList.remove("row");
  } else {
    element.classList.add("row");
  }

  if(window.innerWidth <=1165) {
    element2.classList.remove("row")
  }
  else{
    element2.classList.add("row")
  }

  if(window.innerWidth<=1000) {
    element3.classList.remove("row")
    element3.classList.add("flex-column")
    
  }
  else{
    element3.classList.add("row")
    element3.classList.remove("flex-column")
  }
}

window.addEventListener("resize", checkWidth);
window.addEventListener("load", checkWidth);