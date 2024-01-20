//Dates
 let myDates = new Date()
 console.log(myDates);
 console.log(myDates.toString());
 console.log(myDates.toDateString());
 console.log(myDates.toLocaleString());

 console.log(typeof myDates);

//declaration of dates
 let myCreatedate = new Date(2024,0,20)
 console.log(myCreatedate.toDateString());

 // another formate of date
 let myCreDate = new Date("01-14-2024")
 console.log(myCreDate.toDateString());

 // get now time
 let myTimeStamp = Date.now()
 console.log(myTimeStamp); 

 //compare dates
 console.log(myCreDate.getTime());

 //convert
 console.log(Math.floor(Dates.now()/1000));


 let newDates = new Date()
 console.log(newDates);
 console.log(newDates.getMonth());
 console.log(newDates.getDay());