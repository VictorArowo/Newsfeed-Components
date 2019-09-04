/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

menuCreator = links => {
  const container = document.createElement("ul");
  const div = document.createElement("div");

  links.forEach((element) => {
    const link = document.createElement("li");
    link.textContent = element;
    container.append(link);
  })
  div.append(container);
  div.classList.add("menu");
  const menu = document.querySelector(".menu-button");
 
  menu.addEventListener("click", () => {
    div.classList.toggle("menu--open");
    div.classList.toggle("menu--animated");
    document.querySelectorAll(".menu ul li").forEach(li =>  li.classList.toggle("font-increase"));
  });


  document.querySelectorAll('.article').forEach(element => {
    addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("test");
      div.classList.remove("menu--open");
      div.classList.remove("menu--animated");
      div.classList.add("menu--close");
  })
    // document.querySelectorAll(".menu ul li").forEach(li =>  li.classList.toggle("font-increase"));
  });
   return div;
}
menuCreator
document.querySelector('body').appendChild(menuCreator(menuItems));

