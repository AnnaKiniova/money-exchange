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

  

    for (let key in Money) {
        // for (key in change)
        let calc = 0;
        calc = Math.floor(currency / Money[key]);
            if (calc != 0) 
            change[key] = calc; 
           
        currency = currency - (calc*Money[key]);
        
    }

    return (change);
   
    
    // let H = Math.floor(+currency / 50);
    //     if (H != 0) 
    //     {
    //         change.H = H;
    //     }
    // let Q = Math.floor((+currency % 50)/25);
    //     if (Q != 0) 
    //     {change.Q = Q;}
    // let D=Math.floor((+currency % 50 % 25) / 10);
    //     if (D != 0) 
    //     {change.D = D;}
    // let N=Math.floor((+currency % 50 % 25 % 10) / 5);
    //     if (N != 0) 
    //     {change.N = N;}
    // let P=Math.floor((+currency % 50 % 25 % 10 % 5) / 1);
    //     if (P != 0) 
    //     {change.P = P;}

    // return (change);

   }
  // makeExchange (135);
    
  
