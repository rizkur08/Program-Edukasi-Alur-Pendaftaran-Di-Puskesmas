/* ===== HOTSPOT POSITION ===== */
function positionHotspots() {
  document.querySelectorAll('.hotspot').forEach(h => {
    h.style.left   = h.dataset.x + '%';
    h.style.top    = h.dataset.y + '%';
    h.style.width  = h.dataset.w + '%';
    h.style.height = h.dataset.h + '%';
  });
}

window.addEventListener('load', positionHotspots);
window.addEventListener('resize', positionHotspots);


/* ===== POPUP INFO (HOTSPOT) ===== */
const popupInfo = document.getElementById("popupInfo");
const popupBody = document.getElementById("popupBody");
const closeInfo = document.getElementById("closeInfo");

const data = {
  cuci: `
    <img src="img/cuci.jpeg" class="popup-img">
    <a 
      href="https://youtu.be/Jg8S09oHmpE?si=xmjYI8xGlsRCfSXZ"
      target="_blank"
      rel="noopener noreferrer"
      class="yt-link">
      ▶️ Tonton Video di YouTube
    </a>
  `,
  olahraga: `<img src="img/olahraga.jpeg" class="popup-img">`,
  imunisasi: `<img src="img/imunisasi.jpeg" class="popup-img">`,
  alur: `<img src="img/alur.jpeg" class="popup-img">`,
 daftar: `<h3>Pendaftar / Klien</h3>
<p>
Klien sedang mengisi atau menyerahkan dokumen<br>
kepada bagian administrasi Puskesmas.
</p>`,

admin: `<h3>Admin</h3>
<p>
Seorang petugas kesehatan (wanita berseragam putih)
sedang melayani klien (pria berkemeja biru)
di meja administrasi / pendaftaran.
</p>`,

perawat: `<h3>Perawat</h3>
<p>
Petugas Puskesmas sedang mengukur
tekanan darah pasien anak (berbaju merah).
</p>`,

pasien: `<h3>Pasien</h3>
<p>
Pasien sedang mendapatkan pelayanan kesehatan
di Puskesmas berupa pemeriksaan tekanan darah
dan layanan medis lainnya.
</p>`,

mendata: `<h3>Petugas Puskesmas</h3>
<p>
Petugas kesehatan (wanita berseragam putih)<br>
sedang melakukan pemeriksaan pasien,<br>
sementara petugas lain (berseragam hijau)<br>
mendata hasil pemeriksaan.
</p>`,

antri: `<h3>Area Tunggu Klien</h3>
<p>
Sejumlah orang dari berbagai usia sedang menunggu giliran
di kursi tunggu Puskesmas.<br><br>

• Pasangan dewasa dengan anak kecil.<br>
• Seorang lansia / nenek.<br>
• Anak-anak dari berbagai usia.<br><br>

Hal ini mencerminkan bahwa Puskesmas melayani<br>
masyarakat dari semua kalangan usia.
</p>`,

komputer: `<h3>Komputer</h3>
<p>
Komputer digunakan oleh petugas untuk menginput data pasien,mencetak formulir pendaftaran,serta mengakses sistem informasi kesehatan seperti SIMPUS (Sistem Informasi Puskesmas).<br><br>

Kehadiran komputer menunjukkan bahwa proses administrasi di fasilitas kesehatan tersebut sudah terkomputerisasi atau berbasis digital.<br><br>

Terdapat juga mesin printer atau perangkat all-in-one (printer / scanner / fotokopi) yang digunakan untuk mencetak dokumen pendaftaran,rekam medis, dan materi administrasi Puskesmas lainnya.
</p>`


};

document.querySelectorAll(".hotspot").forEach(btn => {
  btn.addEventListener("click", () => {
    popupBody.innerHTML = data[btn.dataset.type];
    popupInfo.style.display = "flex";
  });
});

closeInfo.onclick = () => popupInfo.style.display = "none";
popupInfo.onclick = e => {
  if (e.target === popupInfo) popupInfo.style.display = "none";
};


/* ===== POPUP IG ===== */
const btnIG   = document.getElementById("btnIG");
const popupIG = document.getElementById("popupIG");
const closeIG = document.getElementById("closeIG");

btnIG.onclick = () => popupIG.style.display = "flex";
closeIG.onclick = () => popupIG.style.display = "none";

popupIG.onclick = e => {
  if (e.target === popupIG) popupIG.style.display = "none";
};
/* ===== BACKGROUND MUSIC ===== */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🔈";
  }
  isPlaying = !isPlaying;
});
