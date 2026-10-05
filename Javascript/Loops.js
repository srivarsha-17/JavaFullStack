let arr = [10,20,30,40,50]
let str = "Javascript"
for(let val of arr){
  console.log(val);   //used to print the values of the array
}


for(let val of str){
  console.log(val); //prints each character of the string
}





for(let index in arr){
  console.log(index)  //fetches the index values
}


for(let index in arr){
  console.log(arr[index])  //we are printing the values of the arr using the index 
}
arr.forEach((val,ind,a)=>{  //val stores the value , ind stores the index and arr stands for the array
  console.log(val+" "+ind+" "+a);
})


console.log("****************************************************************************************************************")


let prices = [650,450,850,740,420,300,20]

prices.map((ele)=>{
    if(ele>400){
        console.log(ele)
    }

})




 let discountedPrices = prices.map((x)=>{
  if(x<400){
    return x;
  }
 })
 console.log(discountedPrices)   //returns the array of the same length as the original array



 let penalty = prices.map((x)=>{
    let val2 = x+200
    return val2;
 })
    

console.log(penalty)




 let price = [100,520,400,607,530];

  let filteredPrices = price.filter((x)=>{
    return x>500 && x<700
  })

  console.log(filteredPrices)



let temp = arr.reduce((sum,ele)=>{
  return acc+val
})

console.log(temp)

console.log(obj1.keys())



