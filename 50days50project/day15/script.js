let twitter = document.querySelector(".tw-sayi");
let youtube = document.querySelector(".yt-sayi");
let facebook = document.querySelector(".fb-sayi");
let set = setInterval(counter, 10);
sayitw = 0;
sayiyt = 0;
sayifb = 0;

function counter() {
    let tw = 1456
    let yt = 75250
    let fb = 18950
    if(twitter.innerHTML<tw){
        sayitw++;
        sayitw = Math.floor(sayitw * 4)

        twitter.innerHTML = sayitw;
      }
    if(youtube.innerHTML<yt){
        sayiyt++;
        sayiyt = Math.floor(sayiyt * 4)
        youtube.innerHTML = sayiyt;
      }
    if(facebook.innerHTML<fb){
        sayifb++;
        sayifb = Math.floor(sayifb * 4)
        facebook.innerHTML = sayifb;
      }
      if (sayitw > tw && sayiyt > yt && sayifb > fb){
        twitter.innerHTML = tw;
        youtube.innerHTML = yt;
        facebook.innerHTML = fb;

        clearInterval(set)
      }
      
      console.log("still working")
}
