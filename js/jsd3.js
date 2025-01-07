let scrollcontainer=document.querySelector(".image-list");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollcontainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollcontainer.scrollLeft+=evt.deltaY;
    scrollcontainer.style.scrollBehavior="auto";
});

nextBtn.addEventListener("click",() =>{
    scrollcontainer.style.scrollBehavior="smooth";
    scrollcontainer.scrollLeft+=900;
});

backBtn.addEventListener("click",() =>{
    scrollcontainer.style.scrollBehavior="smooth";
    scrollcontainer.scrollLeft+=-900;
});



let scrollcontainerscroll=document.querySelector(".image-list2");
let backBtnback=document.getElementById("backBtn2");
let nextBtnnext=document.getElementById("nextBtn2");

    scrollcontainerscroll.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollcontainerscroll.scrollLeft+=evt.deltaY;
    scrollcontainerscroll.style.scrollBehavior="auto";
});

nextBtnnext.addEventListener("click",() =>{
    scrollcontainerscroll.style.scrollBehavior="smooth";
    scrollcontainerscroll.scrollLeft+=900;
});

backBtnback.addEventListener("click",() =>{
    scrollcontainerscroll.style.scrollBehavior="smooth";
    scrollcontainerscroll.scrollLeft+=-900;
});


let containerscroll=document.querySelector(".image-list3");
let Btnback=document.getElementById("backBtn3");
let Btnnext=document.getElementById("nextBtn3");

    containerscroll.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    containerscroll.scrollLeft+=evt.deltaY;
    containerscroll.style.scrollBehavior="auto";
});

Btnnext.addEventListener("click",() =>{
    containerscroll.style.scrollBehavior="smooth";
    containerscroll.scrollLeft+=900;
});

Btnback.addEventListener("click",() =>{
    containerscroll.style.scrollBehavior="smooth";
    containerscroll.scrollLeft+=-900;
});


let containerscrollcontainer=document.querySelector(".image-list4");
let Btnbackbtn=document.getElementById("backBtn4");
let Btnnextbtn=document.getElementById("nextBtn4");

    containerscrollcontainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    containerscrollcontainer.scrollLeft+=evt.deltaY;
    containerscrollcontainer.style.scrollBehavior="auto";
});

Btnnextbtn.addEventListener("click",() =>{
    containerscrollcontainer.style.scrollBehavior="smooth";
    containerscrollcontainer.scrollLeft+=900;
});

Btnbackbtn.addEventListener("click",() =>{
    containerscrollcontainer.style.scrollBehavior="smooth";
    containerscrollcontainer.scrollLeft+=-900;
});