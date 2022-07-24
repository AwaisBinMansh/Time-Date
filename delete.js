const clock = document.querySelector('.clock');

const tick = () =>{
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let season = 'AM';
    if(h==0){
         h == 12;
         season = "AM";
        }
        if(h>12)
        {
            h = h-12;
            season = "PM";
        }
    console.log(h,m,s);

    const html = 
    `
    <span>${h}</span>:
    <span>${m}</span>:
    <span>${s}</span>
    <span>${season}</span>
    `;
    clock.innerHTML =html;

}

setInterval(tick, 1000);

