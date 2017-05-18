/**
 * Created by Rimantas on 2017-05-17.
 */

var langeliuSk = 9;

function nextPlayer(){
    for(var i = 0; i < langeliuSk; i++){
        if(i % 2 !== 0){
            //x ejimas
            document.getElementsByTagName("td")[this].innerHTML = "X";
        }else{
            //o ejimas
            document.getElementsByTagName("td")[this].innerHTML = "O";
        }
    }
}
