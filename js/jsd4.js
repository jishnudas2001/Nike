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