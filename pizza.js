
var PizzaToppings = ["tomato sauce", "mozzarella", "mushrooms", "ham", "artichoke", "green olives", "cocktail sausages"]; 

function pizza(){
    var PizzaContent = "This Pizza is made up of :" + " " + PizzaToppings.toString() + "."; //Creating a string that has my pizza toppings converted to string.
    return PizzaContent;
}
console.log(pizza());
    

