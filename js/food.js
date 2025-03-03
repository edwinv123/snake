let food = { x: 0, y: 0 };
const EXPANSION_RATE = 1;

export function update(){
    if(onSnake(food))
}

// export function draw(gameBoard){
//     const foodElement = document.createElement('div');
//     snakeElement.style.gridRowSart = food.y
// }

export function draw(gameboard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameboard.appendChild(foodElement);
    
}