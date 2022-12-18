function openMenu(){
    var a= document.getElementById("nav1") ;
    a.style.display="block"
}

function closeMenu(){
    var a= document.getElementById("nav1") ;
    a.style.display="none"
}

function chech(id){
    if (id=="mota") {
        var a =document.getElementById("ttbs") ;
        a.style.backgroundColor="white" ;
        a.style.color="black"
        var b =document.getElementById("dg") ;
        b.style.backgroundColor="white" ;
        b.style.color="black" 
        var c =document.getElementById("mota") ;
        c.style.backgroundColor="#b0001a" ;
        c.style.color="white" 

        var d =document.getElementById("info_mota").style.display="block";
        var e =document.querySelector(".infottbs").style.display="none"
        var f =document.querySelector(".info_dg").style.display="none";


    }
    if(id=="ttbs"){
        var a =document.getElementById("mota") ;
        a.style.backgroundColor="white" ;
        a.style.color="black"
        var b =document.getElementById("dg") ;
        b.style.backgroundColor="white" ;
        b.style.color="black" 
        var c =document.getElementById("ttbs") ;
        c.style.backgroundColor="#b0001a" ;
        c.style.color="white" 

        var d =document.getElementById("info_mota").style.display="none";
        var e =document.querySelector(".infottbs").style.display="block"
        var f =document.querySelector(".info_dg").style.display="none";
    }
    if(id=="dg"){
        var a =document.getElementById("mota") ;
        a.style.backgroundColor="white" ;
        a.style.color="black"
        var b =document.getElementById("ttbs") ;
        b.style.backgroundColor="white" ;
        b.style.color="black"
        var c =document.getElementById("dg") ;
        c.style.backgroundColor="#b0001a" ;
        c.style.color="white"  
        var d =document.getElementById("info_mota").style.display="none";
        var e =document.querySelector(".infottbs").style.display="none"
        var f =document.querySelector(".info_dg").style.display="block";
    }


}


function feenback(id){
    if (id=="start1") {
        document.querySelector(".start1").style.color="#f59000"
        document.querySelector(".start2").style.color="black"
        document.querySelector(".start3").style.color="black"
        document.querySelector(".start4").style.color="black"
        document.querySelector(".start5").style.color="black"
    }
    if (id=="start2") {
        document.querySelector(".start1").style.color="black"
        document.querySelector(".start2").style.color="#f59000"
        document.querySelector(".start3").style.color="black"
        document.querySelector(".start4").style.color="black"
        document.querySelector(".start5").style.color="black"
    }
    if (id=="start3") {
        document.querySelector(".start1").style.color="black"
        document.querySelector(".start2").style.color="black"
        document.querySelector(".start3").style.color="#f59000"
        document.querySelector(".start4").style.color="black"
        document.querySelector(".start5").style.color="black"
    }
    if (id=="start4") {
        document.querySelector(".start1").style.color="black"
        document.querySelector(".start2").style.color="black"
        document.querySelector(".start3").style.color="black"
        document.querySelector(".start4").style.color="#f59000"
        document.querySelector(".start5").style.color="black"
    }
    if (id=="start5") {
        document.querySelector(".start1").style.color="black"
        document.querySelector(".start2").style.color="black"
        document.querySelector(".start3").style.color="black"
        document.querySelector(".start4").style.color="black"
        document.querySelector(".start5").style.color="#f59000"
    }

}



