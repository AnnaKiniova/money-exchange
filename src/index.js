// PLEASE DON'T change function name
module.exports =function makeExchange(currency) {
   
    let change = {};
    
    if (currency > 10000) 
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0)
    
        return {};
    
    let Money = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };

  
    
    for (key in Money) {
       
        let calc = 0;
        calc = Math.floor(currency / Money[key]);
            if (calc != 0) 
            change[key] = calc; 
           
        currency = currency - (calc*Money[key]);
    }

    return (change);
   
}
  
    
  