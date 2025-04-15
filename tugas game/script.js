alert("Selamat datang di game tebak angka! \n\n" +
"Aturan permainan:\n" + "1. Setiap pemain akan memasukkan angka dari 1 hingga 5.\n" + "2. Pemain 1 akan memasukkan angka terlebih dahulu.\n" +   "3. Pemain 2 tidak boleh memilih angka yang sama dengan pemain 1.\n" +
"4. Setelah kedua pemain memasukkan angka, sistem akan menghasilkan angka acak dari 1 hingga 5.\n" + "5. Pemain yang menebak angka acak dengan benar akan mendapatkan 1 poin.\n" + "6. Permainan akan berlangsung selama 5 ronde.\n" + "7. Pemain dengan poin terbanyak di akhir permainan akan menjadi pemenang.\n" +
"8. Jika kedua pemain memiliki poin yang sama, permainan berakhir seri.");

let scorePlayer1 = 0;
let scorePlayer2 = 0;

for (let round = 1; round <= 5; round++) {
    alert("Ronde " + round);
    let player1, player2;
    do {
        player1 = prompt("Player 1, silahkan masukkan angka (1-5):");
        if (isNaN(player1) || player1 < 1 || player1 > 5) {
            alert("Input tidak valid! Masukkan angka antara 1-5.");
        }
    } while (isNaN(player1) || player1 < 1 || player1 > 5);

    do {
        player2 = prompt("Player 2, masukkan angka (1-5):");
        if (isNaN(player2) || player2 < 1 || player2 > 5) {
            alert("Input tidak valid! Masukkan angka antara 1-5.");
        } else if (player2 === player1) {
            alert("Player 2 tidak boleh memilih angka yang sama dengan Player 1!");
        }
    } while (isNaN(player2) || player2 < 1 || player2 > 5 || player2 === player1);

    player1 = parseInt(player1);
    player2 = parseInt(player2);
  
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    alert("Angka yang harus ditebak adalah: " + randomNumber);
    if (player1 === randomNumber) {
        scorePlayer1++;
        alert("Player 1 benar");
    }

    if (player2 === randomNumber) {
        scorePlayer2++;
        alert("Player 2 benar");
    }
}
alert("Skor akhir:\nPlayer 1: " + scorePlayer1 + "\nPlayer 2: " + scorePlayer2);

if (scorePlayer1 > scorePlayer2) {
    alert("Pemenang nya adalah Player 1");
} else if (scorePlayer2 > scorePlayer1) {
    alert("Pemenang nya adalah Player 2");
} else {
    alert("Permainan berakhir seri");
}