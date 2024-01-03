alert("Input Ukuran Persegi Panjang dan Hitunglah Luasnya");

while(true){
    let panjang = prompt ("Masukan panjang persegi panjang");
    let lebar = prompt ("Masukan lebar persegi panjang");
    let luas = panjang * lebar;
    let jawaban = prompt("Masukan jawaban anda");

    if(jawaban == luas){
        alert("Jawaban anda benar");
    }else{
        alert("Jawaban anda salah");
    }

    let repeat = confirm ("Apakah anda ingin mengulang ?");
    if(repeat == false){
        break;
    }
}