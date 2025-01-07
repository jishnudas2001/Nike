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

function showsearch(){
    const search=document.querySelector('.search-box')
    search.style.display='flex'
}
function hidesearch(){
    const topsearch=document.querySelector('.search-box')
    topsearch.style.display='none'
}

function search(){
    const searchbar=document.querySelector('.btn-c')
    searchbar.style.display='flex'
}
function hide(){
    const searchplace=document.querySelector('.btn-c')
    searchplace.style.display='none'
}