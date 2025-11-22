    // settimeout

    // function hello(){
    //     console.log('hello')
    // }
    // setTimeout(hello,2000) //2sec=2000ms
    // console.log('helo 1')
    // console.log('helo 2')
    // console.log('helo 3')
    // setTimeout(() =>{
    //     console.log("hello")
    // },2000)

    // console.log('helo 1')
    // console.log('helo 2')
    // console.log('helo 3')

              //callback
    
            //   unction sum(a,b){
            //     console.log(a+b)
            //   }

            //   function calci( a,b,sumCallback){
            //     sumCallback(a,b)
            //   }

            //   calci(1,2,sum)

            
//    function getData(dataid){
//     setTimeout( ()  =>{
//         console.log("data",h1)
//     },2000)
//    }         

//    function getData(h2){
//     setTimeout( ()  =>{
//         console.log("data",h2)
//     },4000)
//    }      
//    function getData(h3){
//     setTimeout( ()  =>{
//         console.log("data",h3)
//     },6000)
//    }      
//    getData(h1)
//    getData(h2)
//    getData(h

// function getData(dataId,getNextData){
//     setTimeout(() =>{
//         console.log('data',dataId);
//         if(getNextData){
//         getNextData();}
//     },2000);
// }
// getData(1, () =>{
//     getData(2,() => {
//         getData(3);// arrow function for next data
//     });});