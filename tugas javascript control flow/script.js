let ulang = true;

while (ulang) {
    let nilai = prompt('Masukkan nilai kamu');

    if (nilai >= 80 && nilai <= 100) {
        alert('Nilai kamu A');
    } else if (nilai >= 70 && nilai < 80) {
        alert('Nilai kamu B');
    } else if (nilai >= 60 && nilai < 70) {
        alert('Nilai kamu C');
    } else if (nilai >= 50 && nilai < 60) {
        alert('Nilai kamu D');
    } else if (nilai >= 30 && nilai < 50) {
        alert('Nilai kamu E');
    } else {
        alert('Kamu tidak lulus');
    }

    ulang = confirm('Apakah ingin melihat nilai lagi?');
}