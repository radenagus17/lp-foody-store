# Berikut adalah langkah-langkah penginstalan, menjalankan program, dan deploy ke Vercel untuk Next.js:

1. Penginstalan:
  - Pastikan Anda telah menginstal Node.js di komputer Anda. Jika belum, Anda dapat mengunduh dan menginstal Node.js dari situs resmi mereka.
  - Buka terminal atau command prompt, lalu jalankan perintah berikut untuk memeriksa apakah Node.js sudah terinstal dengan benar:
    a. node -v
    b. npm -v
  - Setelah Node.js terinstal, Anda dapat membuat direktori baru untuk proyek Next.js Anda.
  - Buka terminal atau command prompt, lalu arahkan ke direktori proyek Anda menggunakan perintah cd.
  - Jalankan perintah berikut untuk menginisialisasi proyek Next.js:
    a. npx create-next-app .
2. Menjalankan Program:
  - Setelah inisialisasi proyek selesai, Anda dapat membuka direktori proyek menggunakan editor kode pilihan Anda.
  - Di dalam direktori proyek, Anda akan menemukan berkas-berkas seperti pages/index.js, styles/globals.css, dan lain-lain.
  - Anda dapat memodifikasi berkas pages/index.js untuk mengubah konten halaman utama aplikasi Next.js.
  - Di terminal atau command prompt, jalankan perintah berikut untuk menjalankan server pengembangan Next.js:
    a. npm run dev
  - Setelah server berjalan, Anda dapat mengakses aplikasi Next.js melalui browser pada http://localhost:3000.
3. Deploy ke Vercel:
  - Pastikan Anda memiliki akun Vercel (https://vercel.com). Jika belum, Anda perlu mendaftar dan membuat akun terlebih dahulu.
  - Buka terminal atau command prompt, lalu arahkan ke direktori proyek Anda menggunakan perintah cd.
  - Jalankan perintah berikut untuk menginstal Vercel CLI (Command Line Interface):
    a. npm install -g vercel
  - Setelah Vercel CLI terinstal, jalankan perintah berikut untuk login ke akun Vercel:
    a. vercel login
  - Setelah login berhasil, jalankan perintah berikut untuk mendeploy proyek Next.js ke Vercel: 'Vercel'
  - Anda akan diminta untuk memberikan beberapa konfigurasi, seperti nama proyek dan environment. Ikuti instruksi yang diberikan di terminal atau command prompt.
  - Setelah proses deploy selesai, Vercel akan memberikan URL yang dapat Anda gunakan untuk mengakses aplikasi Next.js secara online.
  Catatan: proses ini dapat lebih mudah dilakukan melalui dashboard vercel setelah menautkan akun github ke vercel
