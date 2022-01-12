let wktskrg=new Date();//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_date_obj
let thnini = wktskrg.getFullYear();//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getfullyear2

document.getElementById("codedftr").disabled = true;
/////

document.getElementById("nickname").onkeydown = function () 
{
    let nama = document.getElementById("nickname").value;
    let kode = nama.substring(0,3);
    document.getElementById("codedftr").value = kode + thnini;
    // console.log(kode);
}

document.getElementById("tgllhr").onchange = function () {
    let input = document.getElementById("tgllhr").value;
    let i = new Date(input);

    year = i.getFullYear();
    let umur = (thnini - year);

    document.getElementById("hasilumur").innerHTML = "<b>"+umur+" Tahun</b>";
    
    if(umur <= 18){
        alert("Umur Harus diatas 18 Tahun");
    }else{
        document.getElementById("codedftr").disabled = false;
    }
}


// document.getElementById("nama").onkeyup = function () {
//     let up = document.getElementById("nama");
//     up.value = up.value.toUpperCase(); 
// }