// Assignment Two: Let's Order a Pizza
// JavaScript Code By Deep Biswas, Georgian College, ON, Canada.

document.addEventListener("DOMContentLoaded", function() {
    // Selecting all elements with class "pizza-quantity" and "pizza-size"
    const pizzaQuantityInputs = document.querySelectorAll(".pizza-quantity");
    const pizzaSizeSelects = document.querySelectorAll(".pizza-size");
    const pizzaPriceDisplays = document.querySelectorAll(".pizza-price");
    const subtotalAmount = document.querySelector(".subtotal-amount");
    // Function to update a pizza's price
    function updatePizzaPrice(pizzaIndex) {
        const selectedSize = pizzaSizeSelects[pizzaIndex].options[pizzaSizeSelects[pizzaIndex].selectedIndex];
        if (selectedSize && selectedSize.hasAttribute("data-price")) {
            const sizePrice = parseFloat(selectedSize.getAttribute("data-price"));
            const quantity = parseInt(pizzaQuantityInputs[pizzaIndex].value) || 0;
            const totalPrice = sizePrice * quantity; 
            pizzaPriceDisplays[pizzaIndex].textContent = `$${totalPrice.toFixed(2)}`;
        } else {
            pizzaPriceDisplays[pizzaIndex].textContent = "$0.00";
        }
        updateSubtotal();
    }
    // Function to update the overall subtotal
    function updateSubtotal() {
        const pizzaPrices = document.querySelectorAll(".pizza-price");
        let subtotal = 0;
        pizzaPrices.forEach(function(pizzaPrice) {
            subtotal += parseFloat(pizzaPrice.textContent.replace("$", ""));
        });
        subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;
        // Update subtotal in .subtotal-final
        const subtotalFinalAmount = document.querySelector(".subtotal-final .subtotal-amount");
        if (subtotalFinalAmount) {
            subtotalFinalAmount.textContent = `$${subtotal.toFixed(2)}`;
        }
    }
    // Add event listeners to each pizza's size dropdown and quantity input
    pizzaSizeSelects.forEach(function(pizzaSizeSelect, index) {
        pizzaSizeSelect.addEventListener("change", function() {
            updatePizzaPrice(index);
        });
    });
    pizzaQuantityInputs.forEach(function(pizzaQuantityInput, index) {
        pizzaQuantityInput.addEventListener("input", function() {
            updatePizzaPrice(index);
        });
    });
    // Initialize pizza prices and subtotal
    pizzaPriceDisplays.forEach(function(pizzaPriceDisplay) {
        pizzaPriceDisplay.textContent = "$0.00";
    });

    updateSubtotal();
});
