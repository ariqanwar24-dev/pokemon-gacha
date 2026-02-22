let saldoSekarang = 1000;

const daftarKarakter = [
    { nama: "Mewtwo (LEGEND)", id: 150 },
    { nama: "Pikachu", id: 25 },
    { nama: "Charizard", id: 6 },
    { nama: "Bulbasaur", id: 1 },
    { nama: "Gengar", id: 94 }
];

const tombol = document.getElementById('btn-gacha');
const displaySaldo = document.getElementById('saldo-saat-ini');
const inputTopUp = document.getElementById('input-dm');
const inputVoucher = document.getElementById('input-voucher');
const teksOutput = document.getElementById('teks-output');
const displayBox = document.getElementById('display-hasil');
const charImg = document.getElementById('char-img');
const charName = document.getElementById('char-name');

tombol.onclick = function() {
    let topUp = parseInt(inputTopUp.value) || 0;
    if (topUp > 0) {
        saldoSekarang += topUp;
        inputTopUp.value = "";
        displaySaldo.innerText = saldoSekarang;
    }

    let voucher = inputVoucher.value;

    if (saldoSekarang >= 160 || voucher === "ada") {
        if (voucher !== "ada") {
            saldoSekarang -= 160;
        }
        displaySaldo.innerText = saldoSekarang;

        let angkaHoki = Math.floor(Math.random() * 100) + 1;
        let dapet;

        // Reset Class
        charImg.className = "";
        charName.className = "";

        if (angkaHoki <= 10) { 
            dapet = daftarKarakter[0]; // Mewtwo
            charImg.classList.add("legend-img");
            charName.classList.add("legend-name");
            displayBox.classList.add("legend-border");
            teksOutput.innerHTML = "🌟 <b>LEGENDARY CAUGHT!</b> 🌟";
        } else {
            let acakBiasa = Math.floor(Math.random() * (daftarKarakter.length - 1)) + 1;
            dapet = daftarKarakter[acakBiasa];
            displayBox.classList.remove("legend-border");
            teksOutput.innerHTML = "✨ <b>Gotcha!</b> Pokemon tertangkap!";
        }

        charImg.style.display = "block";
        charImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dapet.id}.png`;
        charName.innerText = dapet.nama;

    } else {
        charImg.style.display = "none";
        charName.innerText = "";
        teksOutput.innerHTML = "❌ <b>Saldo Kurang!</b>";
        displayBox.style.borderColor = "#ff4444";
    }
};