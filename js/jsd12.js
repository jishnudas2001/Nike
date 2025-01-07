let scrollcontainer=document.querySelector(".image-list4");
let backBtn=document.getElementById("backBtn4");
let nextBtn=document.getElementById("nextBtn4");

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

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#flip2").click(function(){
      $("#panel2").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $("#flip3").click(function(){
      $("#panel3").slideToggle("slow");
    });
  });

