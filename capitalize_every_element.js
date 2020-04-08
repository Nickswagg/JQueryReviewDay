var PizzaToppings = ["tomato sauce", "mozzarella", "mushrooms", "ham", "artichoke", "green olives", "cocktail sausages"]; 
function upper(){
    
    var PizzaStr = PizzaToppings.toString();
    var PizzaContent = PizzaStr.toUpperCase(); 
    return PizzaContent;
}
console.log(upper());
