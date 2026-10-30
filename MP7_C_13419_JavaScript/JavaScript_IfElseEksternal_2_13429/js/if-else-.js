var iHari;
var sAnggota;

iHari = prompt("Masukkan jumlah hari keterlambatan.", 1);
sAnggota = prompt("Anggota Perpustakaan?  (Y)a atau (T)idak", "Y");

if (iHari > 7) {
    if (sAnggota == "Y") {
        alert("denda Rp. 10.000, peminjaman dibekukan");
    } else {
        alert("denda Rp. 20.000, peminjaman dibekukan");
    }
} else {
    if (sAnggota == "Y") {
        alert("denda Rp. 2.000");
    } else {
        alert("denda Rp. 5.000");
    }
}