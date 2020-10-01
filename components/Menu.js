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

  function menuMaker(array) {

    const items = document.createElement('div')
    const unordered = document.createElement('ul')
    const listed = document.createElement('li')
    const menuArray = menuItems
    
    menuArray.forEach(item => {
      const listed = document.createElement('li')
      listed.textContent = item
      unordered.appendChild(listed)
    })
    
    const menuButton = document.querySelector('.menu-button')
    
    items.classList.add('menu')
    
    items.appendChild(unordered)
    
    listed.textContent = menuArray
    
    menuButton.addEventListener('click', () => {
      items.classList.toggle('menu--open')
    })
      return items
    }
    
    const header = document.querySelector('.header')
    
    menuItems.map(menuItems=> {
      const x = menuMaker(menuItems)
    header.appendChild(x)
    })


  // function menuMaker(menuItems){

  //   const items = document.createElement('div')
  //   const unordered = document.createElement('ul')
  //   const listed = document.createElement('li')
  //   const menuArray = menuItems

  //   menuArray.forEach(item => {
  //     const listed = document.createElement('li')
  //     listed.textContent = item
  //     unordered.appendChild(listed)


  //   })

  //   const menuButton = document.querySelector('.menu-button')

  //   items.classList.add('menu')

  //   items.appendChild(unordered)

  //   listed.textContent = menuArray

  //   menuButton.addEventListener('click', () => {
    
  //   items.classList.toggle('menu--open')


  //   })

  //   return items

  // }

  // const header = document.querySelector('.header')
  //   menuItems.forEach(menuItems => {
  //   const x = menuMaker(menuItems)
  //   header.appendChild(x)

  // })






    


    
  
  
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
