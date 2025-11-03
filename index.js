import { menuArray } from "./data.js"

const menuItems = document.getElementById('menu-items')
const summary = document.getElementById('order-summary')

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



function renderSummary(){
    const addBtn = document.querySelectorAll('.add-btn')
    addBtn.forEach(btn => {
        btn.addEventListener('click', function(e){
            console.log(e.target)
            summary.innerHTML = `<h2 class="order-heading">Your Order</h2>

                                `
        })
    })

}

renderSummary()
