const btn=document.getElementById("random");

function randomcolor(){
            let letters="0123456789ABCDEF";
            let color="#";
            for(let i=0;i<6;i++){
                color+=letters[Math.floor(Math.random()*16)];
            }
            return color;
            
}
btn.addEventListener("click",()=>{
    document.getElementById("contanier").style.backgroundColor=randomcolor();
    element.querySelectorAll(".box").style.fill= randomcolor();

});