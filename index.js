const clock = document.querySelector('.clock');

//     let now = new Date();
//      console.log(now);
//     // console.log(typeof now)

//     //year, month, days
//     console.log('GetFullYear',now.getFullYear());
//     console.log('GetMonth',now.getMonth());
//     console.log('getDays', now.getDay());
//     console.log('GetHours',now.getHours());
//     console.log('GetMints',now.getMinutes());
//     console.log('GetSeconds',now.getSeconds());

//     // timestamp

//     console.log("timestaps",now.getTime());

//     console.log(now.toDateString());
//     console.log(now.toTimeString());
//     console.log(now.toLocaleDateString());
//     console.log(now.toLocaleString());
//     console.log(now.toLocaleTimeString());


   /////////////////// timeStamp//////////////////////

//  const before = new Date('February 1 2019 7:30:59');

//  const now  = new Date();

//  const diff = now.getTime() - before.getTime();

//  console.log(diff);

//  const sec = Math.round(diff/1000);
//  const min = Math.round(sec/60);
//  const hour = Math.round(min/60);
//  const days = Math.round(hour/24);

//  console.log(sec,min, hour, days);
//  console.log(`This blog was written ${days} Days Ago`);

//  const timestamp = new Date(105437869169);
//  console.log(timestamp);

 //////////////////////////////////////////Digital Clock ////////////////////

// const tick = ()=>{
//     const now = new Date();

//     let h = now.getHours();
//     let m = now.getMinutes();
//     let s = now .getSeconds();
//     let sesion = "AM";
//    if(h==0){
//        h == 12;
//        sesion = "AM";
//    }
//    if(h>12)
//    {
//         h = h-12;
//         sesion = "PM";
//    }
//     console.log(h,m,s);

//     const html = 
//     `<span>${h}</span> :
//      <span>${m}</span> :
//      <span>${s}</span>
//      <span>${sesion}</span>
//     `
//     clock.innerHTML=html;

// }
// setInterval(tick,1000);
    const now = new Date();

    console.log(dateFns.isToday(now));