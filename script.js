const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenu_item = document.querySelector(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");

sidebarOpen.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
});
sidebarClose.addEventListener("click", ()=>{
    sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", ()=>{
    sidebar.classList.remove("close", "hoverable");
});
sidebar.addEventListener("mouseenter", ()=>{
  if(sidebar.classList.contains("hoverable")){
    sidebar.classList.remove("close");
  }
})
sidebar.addEventListener("mouseleave", ()=>{
  if(sidebar.classList.contains("hoverable")){
    sidebar.classList.add("close");
  }
})
darkLight.addEventListener("click", ()=>{
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
    // document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  }
  else{
    darkLight.classList.replace("bx-moom", "bx-sun");
  }
});
if(window.innerWidth < 720){
  sidebar.classList.add("close");
}else{
  sidebar.classList.remove("close");
};






// submenu_item.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("show_submenu");
//     submenuItems.forEach((item2, index2) => {
//       if (index !== index2) {
//         item2.classList.remove("show_submenu");
//       }
//     });
//   });
// });



