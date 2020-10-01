// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
  ];
  
  /* 
    Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
  
    <div class="menu">
      <ul>
        {each menu item as an <li>}
      </ul>
    </div>*/
  
    function menuMaker(menuItems){
  
      const menu = document.createElement('div')
      const outList = document.createElement('ul')
      const li1 = document.createElement('li')
      const li2 = document.createElement('li')
      const li3 = document.createElement('li')
      const li4 = document.createElement('li')
      const li5 = document.createElement('li')
      const li6 = document.createElement('li')
  
      menu.classList.add('menu')
  
      const menuNo = document.querySelector('.menu')
  
  
      menuItems.forEach(men =>{
      let menuYes = menuMaker(menuItems)
      menu.appendChild(menuYes)
  
      const menuNow = document.querySelector('.menu-button')
      li1.textContent = menuItems[0]
      li2.textContent = menuItems[1]
      li3.textContent = menuItems[2]
      li4.textContent = menuItems[3]
      li5.textContent = menuItems[4]
      li6.textContent = menuItems[5]
  
        console.log(menuItems)
  
  
      menuNow.addEventListener("click", () => {
        menu.classList.toggle("menu--open")
        
      })
  return menu
  
    }
   )
    }
  
  
    
    // console.log(menuItems)
  /*
  
  const menuNo = document.querySelector('.articles')
  
  
    menuItems.forEach(data =>{
      let MenuYes = menuMaker(menuItems)
      menu.appendChild(menuYes)
  
  
    }
   )
  
   
  
    The 'menuMaker' takes an array of menu items as its only argument.
  
    Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
    Add those items to the <ul>
  
    Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  
    Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  
    Step 5: Don't forget to return your div.menu.
  
    Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
  */
  