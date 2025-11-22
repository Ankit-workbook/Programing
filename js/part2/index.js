        //function
  
//         function displayname(){
//             console.log('welcome to ankit ')
//         }

// displayname() //calling 

//function with parameter

// function addnum(){
//     console.log(20+30)
// }
// addnum()

// function adddata(n1,n2){
//     console.log(n1+n2)
// }
// adddata(53,64)

   //return data

//    function adddata(n1,n2){
//     return n1+n2   // holds value 
       
//    }
//    let data=adddata(10,0)

//    console.log(data)

                 //Arrow function

//   let adddata=()=> console.log('welcome')

// let data=(n1,n2)=>{
//     return n1*n2;
// }
// let output=data(25,45)
//   console.log(output)

// let data=n1=>n1 //() mandatory for 2 elements 

// let output=data(25)
//   console.log(output)

// let add=(a,b)=>a+b

// let output=add(9,10)
// console.log(output)


          //object

// let obj={
//     "cname":"wrk",
//     "name":"ankit ",
//     cinfo:function(){
//         console.log(this)
//     }
// }
// obj.cinfo()

   // callback function

// let dispalydata=(res)=>{
//     return res
// }
//    let sumdata=(num1,num2,Result)=>{
//     return Result(num1+num2 )
//    }

//    let output=sumdata(8,89,dispalydata)
//    console.log(output)

//  let l=[10,20,30,40,50]
// l.forEach((v,i )=> {
//     console.log(v,i)
// })

// let l=[10,20,30,40,50]


// //let finalans=l.map((v,i)=> v+5)//modified in existing array
// console.log(finalans)

// let l=[10,20,30,40,50]
// let filterdata=l.filter((v,i)=> v%2==0)

// console.log(filterdata)

// let l=[10,20,30,40,50]
// let filterdata=l.filter((v,i)=> {
//     if(v%2==0){
//         return true;
//   }
// })

// console.log(filterdata)

let l=[10,20,30,40,50]
let finalans=l.reduce((total,v,i)=>total+v)
console.log(finalans)
