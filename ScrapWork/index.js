let gradebook = [

    Seth = [99,97,96,95,99,100,87,92]

]

console.log(gradebook[0]);

function SortGradebook(Gbook){
    for(let i = 0 ; i < Gbook.length;i++){

        for(let j = 0 ; j < Gbook[i].length;j++){

            for(let k = 0 ; k < Gbook[i].length;k++){
                if(Gbook[i][k] > Gbook[i][j]){
                    let temp = Gbook[i][k];
                    Gbook[i][k] = Gbook[i][j];
                    Gbook[i][j] = temp;
                }
                console.log("swap");
            }

        }
    }
}
SortGradebook(gradebook);

console.log(gradebook[0]);