for (i=0; i<150 ;i = i + 15) {
    document.getElementById("wtanding").innerHTML += "<option value = " + i + ">" + i + "menit</option>";
  }
//inputan
function match(){
    let skortima = document.getElementById("skortima").value;
    let skortimb = document.getElementById("skortimb").value;
    var wtanding = document.getElementById("wtanding").value;
    let peringatan;

    if (wtanding <=45){
        peringatan = "pertandingan babak pertama";
    }else if(wtanding <= 90){
        peringatan = "pertandingan babak kedua ";
    }else if(wtanding >90 && skortima==skortimb){
        peringatan = "perpanjangan waktu 2x15 menit";
    }
    message("skor",peringatan + "tim A =" + skortima + " tim A =" + skortimb);
}
document.getElementById("judul_bola").onmouseover = function(){
    document.getElementById("judul_bola").style.backgroundColor ="red";
};
document.getElementById("judul_bola").onmouseout = function(){
    document.getElementById("judul_bola").style.backgroundColor ="";
};
document.getElementById("skortima").onmouseup = function(){
    document.getElementById("skortima").style.color ="green";
};
document.getElementById("skortima").onmousedown = function(){
    document.getElementById("skortima").style.color ="blue";
};
// var i;
// for (i=1; i<=100 ;i++) {
// if(i%3==0)
// document.write("angka = " + i + "<br>");
// }
