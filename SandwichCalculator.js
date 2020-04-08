function sandwichCalculator(slicesOfBread, slicesOfCheese) {
    var sandwiches = Math.floor(slicesOfBread / 2);

    if((slicesOfBread > 1) && (slicesOfCheese > 0) && (slicesOfCheese < sandwiches)){

         sandwiches = slicesOfCheese;
         console.log(sandwiches);

    }else if ((slicesOfBread < 2) || (slicesOfCheese = 0)){
     
        console.log('Sorry no sandwich for you');
        return 0;    
    }
    else if ((slicesOfCheese >= sandwiches) && (slicesOfBread > 1)){

           console.log(sandwiches);
           return sandwiches;
    }
    

}