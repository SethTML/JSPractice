const GroupText = document.querySelectorAll(".GroupText");

for(let i = 0 ; i < GroupText.length;i++){
    let texta = GroupText[i];
    let color3 = [0,0,0 + (i * 110)]
    let color = "rgb(" + color3[0]+","+color3[1]+","+color3[2]+")";
    texta.setAttribute("style","color: " + color)
    console.log(color);
    texta.textContent = ("Round " + i)
}