const VDisplay = document.getElementById("VDisplay");
const Search = document.getElementById("SearchBarInput");
const Form = document.getElementById("SearchForm");
const Title = document.getElementById("VideoTitle");
const EmbedStart = ("https://www.youtube.com/embed/");

Form.onsubmit = function(event){
    event.preventDefault();
    const Embed = Search.value;

    let ViewCode = ("");
    let copyOn = false;
    let embedPoints = 0;
    for(let i = 1; i < Embed.length;i++){
        if (copyOn == true && Embed.substring(i, i + 1) != "=" && Embed.substring(i, i + 1) != "&"){
            ViewCode += Embed.substring(i, i + 1);
            embedPoints++;
        }
        if (Embed.substring(i, i + 1) == "=" || ((Embed.substring(i, i + 1) == "/") && Embed.substring(i - 1, i) == "e") ){
            if (copyOn == false){
                copyOn = true;
            }
        }
        if (Embed.substring(i, i + 1) == "&" && copyOn == true){
            copyOn = false;
            break;
        }
    }
    if (embedPoints > 0){ // If a link normifyer happened
        VDisplay.src = (EmbedStart + ViewCode);
    }
    else{
        VDisplay.src = Embed;
    }
}
