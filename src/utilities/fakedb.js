const addTodb = (data) => {
    const exists = localStorage.getItem('food_item');
    let foodItem = {};
    if (!exists) {
        foodItem[data] = 1;
    } else {
        foodItem = JSON.parse(exists);
        if (foodItem[data]) {
            foodItem[data] += 1;
        } else {
            foodItem[data] = 1;
        }
    }
    localStorage.setItem('food_item', JSON.stringify(foodItem));
}

const getStoredData = () => {
    const exists = localStorage.getItem('food_item');
    const foodItem = JSON.parse(exists);
    return foodItem;
}
export { addTodb, getStoredData };