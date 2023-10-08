//your code here
document.addEventListener("DOMContentLoaded", function () {
    const itemNameInput = document.getElementById("item-name-input");
    const itemPriceInput = document.getElementById("item-price-input");
    const addButton = document.getElementById("add");
    const shoppingList = document.getElementById("shopping-list");
    const totalElement = document.getElementById("total");

    addButton.addEventListener("click", function () {
        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);

        if (itemName !== "" && !isNaN(itemPrice) && itemPrice >= 0) {
            // Create a new row in the shopping list table
            const newRow = document.createElement("tr");

            // Create and populate the item name cell
            const itemNameCell = document.createElement("td");
            itemNameCell.textContent = itemName;
            itemNameCell.setAttribute("role", "cell");
            newRow.appendChild(itemNameCell);

            // Create and populate the item price cell
            const itemPriceCell = document.createElement("td");
            itemPriceCell.textContent = `$${itemPrice.toFixed(2)}`;
            itemPriceCell.setAttribute("role", "cell");
            newRow.appendChild(itemPriceCell);

            // Append the new row to the shopping list
            shoppingList.appendChild(newRow);

            // Clear input fields
            itemNameInput.value = "";
            itemPriceInput.value = "";

            // Calculate and update the grand total
            const currentTotal = parseFloat(totalElement.textContent.replace("Grand Total: $", ""));
            const newTotal = currentTotal + itemPrice;
            totalElement.textContent = `Grand Total: $${newTotal.toFixed(2)}`;
        } else {
            // Handle invalid input
            alert("Invalid input. Please enter a valid item name and price.");
        }
    });
});
