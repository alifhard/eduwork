// Destructuring Eduwork

// contoh destructur array
const listSiswa = ["Ali", "Budi", "Citra", "Dewi", "Eka"];
const siswa1 = listSiswa[0];
const siswa2 = listSiswa[1];
const siswa3 = listSiswa[2];
console.log(siswa1, siswa2, siswa3);

// Destructur
const [pertama, kedua, ketiga, ...sisanya] = listSiswa;
console.log(pertama, kedua, ketiga, sisanya);

// contoh destructur object
const siswa = {
  nama: "Fajar",
  umur: 17,
  kelas: "12 IPA",
  nilai: {
    matematika: 85,
    bahasaInggris: 90,
    fisika: 88,
  },
};

const namaSiswa = siswa.nama;
const umurSiswa = siswa.umur;
const nilaiMatematika = siswa.nilai.matematika;
console.log(namaSiswa, umurSiswa, nilaiMatematika);

// destructur
const {
  nama,
  umur,
  nilai: { matematika },
  ...dataLainnya
} = siswa;
console.log(nama, umur, matematika, dataLainnya);

// contoh destructur di function parameter
function cetakNilai([nilai1, nilai2]) {
  const rataRata = (nilai1 + nilai2) / 2;
  const pesan = `Rata-rata nilai adalah ${rataRata}`;
  console.log(pesan);
}

function printSiswa({ nama, umur, nilai: { matematika } }) {
  const pesan = `Siswa ${nama} berumur ${umur} memiliki nilai matematika ${matematika}`;
  console.log(pesan);
}

printSiswa(siswa);
cetakNilai([85, 90]);