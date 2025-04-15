//array filter dan map

const listSiswa = [
    {nama : "budi",
    umur  : 17,
    status: "lulus",},
    
    {nama : "joko",
    umur  : 15,
    status: "tidak lulus",},

    {nama : "jualeha",
    umur  : 17,
    status: "lulus",}
]

const siswaLulus = listSiswa.filter((siswa) => siswa.status === "lulus")
console.log(siswaLulus)

const siswaUmur = listSiswa.map((siswa) => siswa.umur+1)
console.log(siswaUmur)