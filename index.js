// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;
  hasilLooping = []
  for(let pegawai of arrPegawai){
    hasilLooping.push(`${pegawai.namaDepan} ${pegawai.namaBelakang}`)
  }

  let jumlahPria = 0;
  for(let pegawai of arrPegawai){
    pegawai.jenisKelamin === 'M' && jumlahPria++
  }

  let jumlahWanita = 0;
  for(let pegawai of arrPegawai){
    pegawai.jenisKelamin === 'F' && jumlahWanita++
  }

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = null;
  jumlahPria > jumlahWanita ? 
    komentar = "Jumlah Pria lebih banyak dari Wanita" :
  jumlahPria < jumlahWanita &&
    (komentar = "Jumlah Wanita lebih banyak dari Pria")
  komentar === null && (komentar = "Jumlah Pria dan Wanita berimbang")

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
