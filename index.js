import { menuArray } from "./data.js"

const menuItems = document.getElementById('menu-items')
const summary = document.getElementById('order-summary')
let currentOrder = []

function renderMenu(){
    let menuItem = ''
    menuArray.forEach(function(menu){
        menuItem += `<div class="item" data-id="${menu.id}">
                            <div class="item-img"><span>${menu.emoji}</span></div>
                            <div class="item-details">
                                <h2 class="item-name">${menu.name}</h2>
                                <h4 class="item-ingredients">${menu.ingredients.join(',')}</h4>
                                <h3 class="item-price">$${menu.price}</h3>
                            </div>
                            <button class="add-btn" data-id="${menu.id}">+</button>
                    </div>`
    })
    menuItems.innerHTML = menuItem

    // Add event listeners to all add buttons
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function(e){
            const menuId = e.target.getAttribute('data-id')
            const menuItem = menuArray.find(item => item.id == menuId)
            if (menuItem) {
                addToOrder(menuItem)
            }
        })
    })
}

function addToOrder(menuItem) {
    // Add item to current order array
    currentOrder.push(menuItem)

    // Render the updated order summary
    renderOrderSummary()
}

function renderOrderSummary() {
    // Only show order section if there are items
    if (currentOrder.length === 0) {
        summary.innerHTML = '<h2 class="order-heading">Your Order</h2>'
        return
    }

    let orderHTML = '<h2 class="order-heading">Your Order</h2>'
    let totalPrice = 0

    // Generate HTML for each order item
    currentOrder.forEach((item, index) => {
        orderHTML += `
            <div class="order-item" data-index="${index}">
                <span class="order-item-name">${item.name}</span>
                <button class="remove-btn" data-index="${index}">remove</button>
                <span class="order-item-price">$${item.price}</span>
            </div>`
        totalPrice += item.price
    })

    // Add total section
    orderHTML += `
        <div class="total-section">
            <h3 class="total">Total price: </h3>
            <span class="total-price">$${totalPrice}</span>
        </div>`

    //Add complete order section
    orderHTML += `
                <div>
                    <button class="complete-order">Complete order</button>
                </div>`

    summary.innerHTML = orderHTML

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const index = parseInt(e.target.getAttribute('data-index'))
            removeFromOrder(index)
        })
    })
}

function removeFromOrder(index) {
    // Remove item from current order array
    currentOrder.splice(index, 1)

    // Re-render the order summary
    renderOrderSummary()
}

// Initialize the app
renderMenu()
