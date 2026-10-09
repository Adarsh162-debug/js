 const mynums=[1,2,3,4];



 // reduce using by function
/* const mynumber=mynums.reduce( function(acc,currvalue){
    console.log(`acc:${acc} and current value is${currvalue}`);
    return acc+currvalue
 },0)
 console.log(mytotal);*/
/*
 by using arrow
 const mynumber=mynums.reduce( (acc,curr)=>acc+curr,0)
  console.log(mynumber);
  */
  
  const shoopingcart=[
    {itemname:"java script",
        price:12999
    },
     {itemname:"html",
        price:129899
    },
     {itemname:"java ",
        price:12979990
    },
     {itemname:"java script++",
        price:120999
    }
  ]
  const pricecart=shoopingcart.reduce((acc,item)=>acc+item.price,0)
    const pricecart1=shoopingcart.reduce((acc,item)=>acc+item.itemname,0)
console.log(pricecart1)
  console.log(pricecart);
  



 