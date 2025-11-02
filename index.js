import { menuArray } from "./data.js"

const menuItems = document.getElementById('menu-items')

function renderMenu(){
    let menuItem = ''
    menuArray.forEach(function(menu){
        menuItem += `<div class="item">
                            <div class="item-img"><span>${menu.emoji}</span></div>
                            <div class="item-details">
                                <h2 class="item-name">${menu.name}</h2>
                                <h4 class="item-ingredients">${menu.ingredients.join(',')}</h4>
                                <h3 class="item-price">$${menu.price}</h3>
                            </div>
                            <button class="add-btn">+</button>
                    </div>`
    })
    menuItems.innerHTML = menuItem
}

renderMenu()
