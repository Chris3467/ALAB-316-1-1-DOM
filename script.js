// Nav Bar
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Part 1 ============================>
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// Part 2 =============================>
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3 =============================>
menuLinks.forEach((link) => {
  const newEl = document.createElement("a");
  newEl.href = link.href;
  newEl.textContent = link.text;
  topMenuEl.append(newEl);
});

// Second Part of the DOM lab ===========>
// Part 1

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Part 2 ================================>

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", handler);

// The first line of code of the event listener function should call the event object's preventDefault() method.
function handler(evt) {
  if (evt.target.localName !== a) {
    return;
  } else evt.preventDefault();
}


document.addEventListener('DOMContentLoaded', () => {
 
  for (let i =0; i < topMenuLinks.length; i++){
    const clicked = topMenuLinks[i]
     console.log(clicked);

    clicked.addEventListener("click", function(evt){
        if(!evt.target.matches('a'))return
        console.log(evt.target);
        evt.target.classList.toggle('active') 
        topMenuLinks.forEach(link=>{
          console.log(link.subLinks);
          if(link!==evt.target){
             link.classList.remove('active')
          }
          const clickedLink = menuLinks.find((link)=>link.text==evt.target.textContent)
          console.log(clickedLink.subLinks);
          if(evt.target.classList.contains('active')&& evt.target.innerHTML!== "about"){
            subMenuEl.style.top="100%"
            buildSubMenu(clickedLink.subLinks)
          }else{
            subMenuEl.style.top="0%"
          }
        })
          function buildSubMenu(subLinks){
            console.log(subLinks);
            console.log(subMenuEl);
            subMenuEl.innerHTML =""
            subLinks.forEach(link=>{
              const a = document.createElement('a')
              a.setAttribute('href', link.href)
              a.textContent= link.text
              subMenuEl.appendChild(a)
            })
          }
          subMenuEl.addEventListener("click", function(evt){
            evt.preventDefault()
            if(!evt.target.matches('a')){
              return;
            } 
            console.log(evt.target);
            subMenuEl.style.top ="0%"
            topMenuLinks.forEach(link=>{
              link.classList.remove('active')
            })
            h1.textContent =`${evt.target.textContent}`
          })
   
        
        console.log(this);
        
  })
}
  
});
