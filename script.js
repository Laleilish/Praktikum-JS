// A1
const btnDaftar = document.querySelector('.register-btn');

btnDaftar.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pendaftaran TechConf 2024 segera dibuka.');
});

// Jawab: Kesalahan class pada query selector


// A2
const heading = document.getElementById('hero-heading');

heading.innerText = 'TechConf 2024 – Edisi Spesial';

// Jawab: Menambahkan id pada h1 karena pake getelementbyID


// A3
const pesertaEl = document.querySelector('.stat-number');
const btnTambah = document.getElementById('btn-tambah');

btnTambah.addEventListener('click', function() {
  let nilai = parseInt(pesertaEl.innerText);
  nilai = nilai + 1;

  pesertaEl.innerText = nilai;
});


// Jawab: di ubah dari dulu ke int dengan parseInt, kemudian di kembalikan lagi nilainya


// BUILD


// B1
const button = document.querySelector(".cta-button");

button.addEventListener("click", function(event) {
    event.preventDefault();

    button.innerText = "Memproses...";
    button.style.backgroundColor = "#94a3b8";

    setTimeout(function() {
        button.innerText = "Dapatkan Tiket";
        button.style.backgroundColor = "#e94560";
    }, 2000);
});

// B2

const speakers = document.querySelectorAll(".speaker");

speakers.forEach(function(card) {
    card.addEventListener("click", function() {

        speakers.forEach(function(item) {
            item.classList.remove("active");
        });

        card.classList.add("active");
    });
});


// B3

const input = document.getElementById("nama-peserta");
const btn = document.getElementById("btn-daftar");
const pesan = document.getElementById("pesan-daftar");

btn.addEventListener("click", function() {
  const nama = input.value.trim();

  if (nama === "") {
    pesan.innerText = "Nama tidak boleh kosong!";
    pesan.style.color = "#ef4444";
  } else if (nama.length < 3) {
    pesan.innerText = "Nama minimal 3 karakter!";
    pesan.style.color = "#f97316";
  } else {
    pesan.innerText = `Halo, ${nama}! Kamu terdaftar di TechConf 2024!`;
    pesan.style.color = "#22c55e";
    input.value = "";
  }
});
