function fn_ValForm() {
    var kosong = "";
    var cekValidasiEmail= /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKategori = document.getElementById("kategori").value;


    if (sNama == "" || sEmail == "" || sUmur =="" || sKategori== "") {
        kosong += "\n* Anda Belum mengisi semua data"; 
    } else if (!cekValidasiEmail == sEmail) {
        kosong += "\n* Peringatan: Format email belum benar";
    }
   
    
    if (kosong != "") {
        alert("Peringatan:\n" + kosong);
        return false;
    }


    if(sUmur <= 17) {
        sUmur = "Anggota Pelajar";
    } else {
        sUmur = "Anggota Umum";
    }

    switch(sKategori) {
        case "F":
            sKategori = "Fiksi";
            break;
        case "N":
            sKategori = "Non Fiksi";
            break;
        case "J":
            sKategori = "Jurnal Ilmiah";
            break;
    }
   alert("Terima kasih " +sNama+ " ! Anda terdaftar di koleksi "+sKategori+".");
    return true; 
}
   

