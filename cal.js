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
    a=randomcolor();
    const nodeList = document.querySelectorAll(".boxop");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = a;
        nodeList[i].style.border="1px solid black";
    }
});