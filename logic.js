
//  song item  pause remaining 
// audio duration function
// time  in progress bar

console.log("logic");

let index=0;
let audio= new Audio("songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let gif= document.getElementById("gift");
let progress = document.getElementById("slider");
let songs = document.getElementsByClassName("songs");
let songitemplay=document.getElementsByClassName("songitemplay");
let songbottomname= document.getElementById("songbottomname");

// songs array
let songarray=[
    {songname:"No more Drama ",filepath:"songs/1.mp3",coverpath:"covers/1.jpg" ,duration:"2:20"},
    {songname:"Chlorine -21 pilots",filepath:"songs/2.mp3",coverpath:"covers/2.jpg" ,duration:"5:24"},
    {songname:"Left and Right",filepath:"songs/3.mp3",coverpath:"covers/3.jpg" ,duration:"2:34"},
    {songname:"Best of Me -Neffex",filepath:"songs/4.mp3",coverpath:"covers/4.jpg" ,duration:"2:43"},
    {songname:"Catch me if I fall",filepath:"songs/5.mp3",coverpath:"covers/5.jpg" ,duration:"2:08"},
    {songname:"Cold -Neffex",filepath:"songs/6.mp3",coverpath:"covers/6.jpg" ,duration:"2:49"},
    {songname:"Till my hands bleed",filepath:"songs/7.mp3",coverpath:"covers/7.jpg" ,duration:"2:15"},
    {songname:"The Shade -R O C",filepath:"songs/8.mp3",coverpath:"covers/8.jpg" ,duration:"3:02"},
    {songname:"That's Hilarious",filepath:"songs/9.mp3",coverpath:"covers/9.jpg" ,duration:"2:26"},
    {songname:"Save your Tears ",filepath:"songs/10.mp3",coverpath:"covers/10.jpg" ,duration:"3:35"},
]

Array.from(songs).forEach((element, i)=>{
        element.getElementsByTagName("img")[0].src= songarray[i].coverpath;
            element.getElementsByClassName("name")[0].innerHTML= songarray[i].songname;
            element.getElementsByClassName("timeduration")[0].innerHTML= songarray[i].duration;
})

// play - pause option

masterPlay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0)
    {audio.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
   gif.style.opacity="1";
    }
    else{
        audio.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity="0";
    }
    
})

//  progress bar

audio.addEventListener('timeupdate',()=>{
    progress=(audio.currentTime/audio.duration)*100;
    slider.value=progress;
})
progress.addEventListener('change',()=>{
 audio.currentTime= (slider.value * audio.duration)/100 ;
})

// songitemplay option
  
Array.from(songitemplay).forEach(element=>{
      element.addEventListener('click',(e)=>{
     
        makeallplays();  
       index= parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle"); 
        e.target.classList.add("fa-pause-circle");
        audio.src=`songs/${index+1}.mp3`;
        songbottomname.innerText=songarray[index].songname;
        audio.currentTime=0;
        audio.play();
        gif.style.opacity="1";
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");  
     
      })
})

// makeallplays
makeallplays=()=>{
 Array.from(songitemplay).forEach(e=>{
    e.classList.add("fa-play-circle");
    e.classList.remove("fa-pause-circle");
 })
}

// next

document.getElementById("next").addEventListener('click',()=>{
    if(index >= 9){
        index=0;
    } 
    else{
        index+=1;
    }

    audio.src=`songs/${index+1}.mp3`;
    songbottomname.innerText=songarray[index].songname;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity="1";
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    
})

document.getElementById("previous").addEventListener('click',()=>{
    if(index<=0){
        index=0;
    } 
    else{
        index-=1;
    }
    audio.src=`songs/${index+1}.mp3`;
    songbottomname.innerText=songarray[index].songname;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity="1";
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    
})


