import React from "react";
import { motion } from "framer-motion";
import learn from "../assets/learn.png";
import learn2 from "../assets/learn2.png";
import learn3 from "../assets/learn3.png";
import learn4 from "../assets/learn4.png";
import learn5 from "../assets/learn5.png";
import learn6 from "../assets/learn6.png";
import album from "../assets/album.png";
import brc from "../assets/brc.png";
import Footer from "../components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";



const About = () => {
    return (
        <div className="bg-gradient-to-b from-blue-300 via-white to-blue-300 py-10 px-5 md:px-20">

            {/* KAHAYAN INPRO Section */}
            {/* <section className="text-center md:text-left flex flex-col md:flex-row items-center gap-10 md:gap-20">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-900">KAHAYAN INPRO</h1>
                    <div className="bg-white shadow-lg rounded-lg px-5 py-2 inline-block mt-4">
                        <span className="text-blue-900 font-bold">KAHAYAN INternshiP PrOgram</span>
                    </div>
                    <p className="text-gray-700 mt-4 max-w-xl">
                        Panduan Pelaksanaan Praktek Kerja Lapangan/Magang di BBPOM di Palangka Raya
                    </p>
                </div>
                <motion.img
                    src="src/assets/diagram.png"
                    alt="Kahayan Inpro"
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </section> */}

            {/* Tentang KAHAYAN INPRO */}
            <section className="mt-[-30px] flex md:flex-cols-2 gap-10 items-center">
                <div className="w-full justify-center md:mt-27 md:ms-2 mt-14">
                    <div className="mt-4 md:ms-[-30px]">
                        <h1 className="lg:text-3xl md:text-4xl text-3xl text-blue-900">Tentang</h1>
                        <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold text-blue-900">KAHAYAN INPRO</h1>
                    </div>
                    <div className="flex md:justify-end justify-center md:mt-[-100px] mt-35 me-[-15px] gap-2" >
                        <img className="lg:flex hidden lg:h-40 md:h-30 h-25 mt-5 " src={learn4} alt="" />
                        <img className="lg:flex hidden lg:h-40 md:h-30 h-25 " src={learn2} alt="" />
                        <div class="absolute left-0 md:mt-28 mt-[-130px] rounded-s-md md:w-100 w-90 md:h-[18px] h-[10px] bg-gradient-to-r from-blue-500 to-white-500"></div>
                    </div>
                    {/* <div class="lg:absolute hidden rounded-s-md right-0 lg:top-240 lg:w-140 md:w-100 w-200 md:h-[18px] h-[10px] bg-gradient-to-l from-blue-500 to-white-500"></div> */}
                </div>
            </section>
            <div className="grid lg:grid-cols-2 gap-2 lg:mt-10 md:mt-40 mt-[-100px]">
                <div className="content-center lg:ms-0 md:ms-15 lg:mb-0 md:mb-5 md:w-fit">
                    <img className="md:h-80 h-60" src={learn3} alt="" />
                </div>
                <div>
                    <p className="text-justify lg:text-lg font-semibold md:text-lg">
                        Dalam rangka meningkatkan pengetahuan/keterampilan pelajar/mahasiswa di bidang pengawasan obat dan makanan, BBPOM di Palangka Raya membuka  pelaksanaan praktik kerja lapangan dan magang di lingkungan BBPOM di Palangka Raya. KAHAYAN INPRO merupakan sebuah inovasi yang dikembangkan untuk memberikan kemudahan pada pelaksanaan praktik kerja lapangan dan magang di lingkungan BBPOM di Palangka Raya. KAHAYAN INRPO merupakan singkatan dari Kemudahan dan Kenyamanan Layanan Iternship & Research Program.
                        Nama KAHAYAN sendiri terinspirasi dari nama sungai yang mengalir membelah kota Palangka Raya dan menjadi sumber kehidupan bagi masayarakat di Kalimantan Tengah.
                        KAHAYAN INPRO menyediakan berbagai informasi seputar pelaksanaan praktik kerja lapangan dan magang di lingkungan BBPOM di Palangka Raya, yang meliputi modul pelaksanaan praktik kerja lapangan dan penelitian, alur dan proses, tata tertib, materi pembelajaran, format surat permohonan, format laporan akhir, dan informasi penting lainnya.
                    </p>
                </div>
            </div>

            {/* TUJUAN KAMI Section */}
            <section className="mt-16 bg-blue-50 p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-blue-900 text-center">TUJUAN KAMI</h2>
                <div className="grid md:grid-cols-2 gap-10 mt-8 items-center">
                    <div>
                        <div className="mb-6">
                            <h3 className="md:text-2xl text-lg md:mb-2 font-extrabold text-blue-900">SOSIALISASI & EDUKASI</h3>
                            <p className="text-gray-700">
                                Sosialisasi dan edukasi mengenai mutu dan keamanan produk obat dan makanan yang beredar di masyarakat.
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="md:text-2xl text-lg md:mb-2 font-extrabold text-blue-900">WAWASAN & KETERAMPILAN</h3>
                            <p className="text-gray-700">
                                Memberikan wawasan dan keterampilan kepada siswa dan mahasiswa dalam pengawasan obat dan makanan.
                            </p>
                        </div>
                        <div>
                            <h3 className="md:text-2xl text-lg md:mb-2 font-extrabold text-blue-900">KERJASAMA</h3>
                            <p className="text-gray-700">
                                Meningkatkan kerjasama Badan POM dengan stakeholder, terutama dengan Perguruan Tinggi.
                            </p>
                        </div>
                    </div>
                    <motion.img
                        src={learn5}
                        alt="Tujuan Kami"
                        className="rounded-lg lg:ms-10 shadow-lg"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>
            </section>
            {/*
        =========================================
        BAGIAN "ALUR PELAKSANAAN" (Baru Ditambahkan)
        =========================================
      */}
            <section className="w-full py-12 px-4 md:px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-8"
                >
                    {/* Kiri: Teks Alur Pelaksanaan */}
                    <div className="w-full md:w-1/2">
                        <h2 className="md:text-4xl text-3xl font-extrabold text-blue-800 mb-2">
                            ALUR PELAKSANAAN
                        </h2>
                        <p className="text-base font-bold text-gray-600">
                            Praktik Kerja Lapangan &amp; Penelitian
                        </p>
                        <ul className="mt-8 space-y-4 list-none">
                            <li className="flex items-start gap-3">
                                <span className="bg-blue-600 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                    1
                                </span>
                                <p className="text-gray-700">
                                    Mengajukan permohonan dari sekolah/kampus ke BBPOM di Palangka Raya
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-blue-600 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                    2
                                </span>
                                <p className="text-gray-700">
                                    Jika permohonan disetujui, akan mendapatkan surat persetujuan
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-blue-600 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                    3
                                </span>
                                <p className="text-gray-700">
                                    Melaksanakan kegiatan PKL/Penelitian
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-blue-600 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                    4
                                </span>
                                <p className="text-gray-700">
                                    Membuat laporan pelaksanaan PKL/Penelitian
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-blue-600 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                    5
                                </span>
                                <p className="text-gray-700">
                                    Mengumpulkan hasil laporan/penelitian kepada BBPOM di Palangka Raya
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-blue-600 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                                    6
                                </span>
                                <p className="text-gray-700">
                                    Mengisi survei kepuasan penyelenggaraan
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Kanan: Gambar Alur Pelaksanaan */}
                    <div className="w-full md:w-1/2">
                        {/* Ganti path "/alur-pelaksanaan.png" dengan path gambar Anda */}
                        <img
                            src={learn6}
                            alt="Alur Pelaksanaan"
                            className="w-full lg:ms-5 h-auto"
                        />
                    </div>
                </motion.div>
            </section>
            {/*
            ============================================
            BAGIAN "ALUR PENGAJUAN PERMOHONAN" (BARU)
            ============================================
      */}
            <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-blue-50">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2">
                        ALUR PENGAJUAN PERMOHONAN
                    </h2>
                    <p className="text-gray-600 font-bold text-base md:text-lg mb-8">
                        Praktik Kerja Lapangan &amp; Penelitian
                    </p>

                    {/* 3 Langkah Alur Pengajuan Permohonan */}
                    <div className="flex flex-col justify-center md:flex-row lg:gap-8 gap-3">
                        {/* Langkah 1 */}
                        <div className="flex-1 bg-white shadow-md rounded-md p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                                    01
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Pengajuan Online
                                </h3>
                            </div>
                            <p className="text-gray-700">
                                Ajukan permohonan magang secara online melalui email:{" "}
                                <span className="font-medium text-blue-600">
                                    bpom_palangkaraya@pom.go.id
                                </span>
                                , serta lampirkan:
                            </p>
                            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
                                <li>Surat permohonan magang</li>
                                <li>Daftar Riwayat Hidup</li>
                                <li>Proposal PKL / Magang</li>
                            </ul>
                        </div>

                        {/* Langkah 2 */}
                        <div className="flex-1 bg-white shadow-md rounded-md p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                                    02
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Pengiriman Dokumen
                                </h3>
                            </div>
                            <p className="text-gray-700">
                                Kirimkan dokumen permohonan (hardfile) ke kantor BBPOM di
                                Palangka Raya, alamat:
                            </p>
                            <p className="mt-3 text-gray-700">
                                <span className="font-medium">Jl.Cilik Riwut, Km. 3, 5, No. 13,</span> Jl. Bukit
                                Tunggal, Kec. Jekan Raya, Kota Palangka Raya, Kalimantan Tengah
                                74874
                            </p>
                        </div>

                        {/* Langkah 3 */}
                        <div className="flex-1 bg-white shadow-md rounded-md p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                                    03
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Konfirmasi Melalui WA
                                </h3>
                            </div>
                            <p className="text-gray-700">
                                Konfirmasi melalui WhatsApp{" "}
                                <span className="font-medium text-blue-600">
                                    HALO INFOKOM 0811-555-633
                                </span>{" "}
                                dengan format:
                            </p>
                            <p className="mt-3 text-gray-700">
                                <em>
                                    “Konfirmasi Permohonan PKL/Penelitian_Nama_Asal
                                    Universitas_Jurusan”
                                </em>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
            {/*
        ==========================================
        BAGIAN "FORMAT DOKUMEN & PELAPORAN" (BARU)
        ==========================================
      */}
            <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4">
                        FORMAT DOKUMEN &amp; PELAPORAN
                    </h2>
                    <p className="text-gray-600 font-bold text-base md:text-lg mb-8">
                        Berikut beberapa dokumen yang dibutuhkan dalam proses PKL/penelitian.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Kiri: Daftar Format/Poin */}
                        <div className="w-full md:w-1/2 space-y-4">
                            {/* 1. FORMAT SURAT PERMOHONAN */}
                            <div className="bg-linear-to-r from-yellow-400 to-red-400 px-6 py-3 rounded-full flex items-center gap-3">
                                <span className="text-white text-xl">📄</span>
                                <span className="font-semibold text-white">
                                    FORMAT SURAT PERMOHONAN
                                </span>
                            </div>

                            {/* 2. FORMAT LAPORAN */}
                            <div className="bg-linear-to-r from-yellow-400 to-red-400 px-6 py-3 rounded-full flex items-center gap-3">
                                <span className="text-white text-xl">📝</span>
                                <span className="font-semibold text-white">
                                    FORMAT LAPORAN
                                </span>
                            </div>

                            {/* 3. PELAPORAN HASIL PKL/PENELITIAN */}
                            <div className="bg-linear-to-r from-yellow-400 to-red-400 px-6 py-3 rounded-full flex items-center gap-3">
                                <span className="text-white text-xl">📊</span>
                                <span className="font-semibold text-white">
                                    PELAPORAN HASIL PKL/PENELITIAN
                                </span>
                            </div>

                            {/* 4. SURVEI KEPUASAN PELANGGAN */}
                            <div className="bg-linear-to-r from-yellow-400 to-red-400 px-6 py-3 rounded-full flex items-center gap-3">
                                <span className="text-white text-xl">✅</span>
                                <span className="font-semibold text-white">
                                    SURVEI KEPUASAN PELANGGAN
                                </span>
                            </div>

                            {/* 5. MODUL PKL/PENELITIAN */}
                            <div className="bg-linear-to-r from-yellow-400 to-red-400 px-6 py-3 rounded-full flex items-center gap-3">
                                <span className="text-white text-xl">📚</span>
                                <span className="font-semibold text-white">
                                    MODUL PKL/PENELITIAN
                                </span>
                            </div>
                        </div>

                        {/* Kanan: Gambar Ilustrasi */}
                        <div className="w-full md:w-1/2">
                            {/* Ganti path "/dokumen-illustration.png" dengan path gambar Anda */}
                            <img
                                src={learn2}
                                alt="Dokumen dan Pelaporan"
                                className="w-full lg:ms-18 h-auto"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>
            {/*
        =======================================
        BAGIAN "GALERI" (BARU)
        =======================================
      */}
            <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-blue-50">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2 text-center">
                        DAPATKAN PENGALAMAN
                    </h2>
                    <p className="text-gray-600 font-bold text-base md:text-lg mb-8 text-center">
                        BERSAMA KAMI DI BBPOM PALANGKA RAYA
                    </p>

                    {/* Galeri Foto */}
                    <div className="flex justify-center gap-4">
                        {/* Contoh 6 foto, silakan sesuaikan jumlah & path */}
                        <img
                            src={album}
                            alt="Foto 1"
                            className="rounded-lg self-center shadow-sm"
                        />
                    </div>
                </motion.div>
            </section>
            {/*
        ==========================================
        BAGIAN "HUBUNGI KAMI" (BARU)
        ==========================================
      */}
            <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2">
                        HUBUNGI KAMI
                    </h2>
                    <p className="text-gray-600 font-bold text-base md:text-lg">
                        UNTUK INFORMASI LEBIH LANJUT
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Bagian Kiri: Info Kontak */}
                        <div className="w-full md:w-1/2 space-y-3 text-gray-700">
                            <div className="flex gap-2">
                                <i class="bi bi-facebook"></i>
                                <p>Balai Besar POM di Palangka Raya</p>
                            </div>
                            <div className="flex gap-2">
                                <i class="bi bi-youtube"></i>
                                <p>Balai Besar POM di Palangka Raya</p>
                            </div>
                            <div className="flex gap-2">
                                <i class="bi bi-globe"></i>
                                <p>
                                    <a
                                        href="https://palangkaraya.pom.go.id"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        palangkaraya.pom.go.id
                                    </a>
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <i class="bi bi-twitter-x"></i>
                                <p>@bpom.palangka</p>
                            </div>
                            <div className="flex gap-2">
                                <i class="bi bi-instagram"></i>
                                <p>@bpom.palangkaraya</p>
                            </div>
                            <div className="flex gap-2">
                                <i class="bi bi-tiktok"></i>
                                <p>@bpom.palangkaraya</p>
                            </div>
                            <div className="flex gap-2">
                                <i class="bi bi-whatsapp"></i>
                                <p>0811 555 633</p>
                            </div>
                        </div>

                        {/* Bagian Kanan: QR Code */}
                        <div className="w-full md:w-1/2 lg:me-30  flex flex-col  items-center">
                            <p className="text-lg font-extrabold text-gray-800 mb-2">
                                SCAN HERE
                            </p>
                            {/* Ganti "/qr-code.png" dengan path gambar QR code Anda */}
                            <img
                                src={brc}
                                alt="QR Code"
                                className="lg:h-80 md:h-60 h-45 content-center object-contain"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>
            <Footer />
            {/*
        ==========================
        FOOTER (BARU)
        ==========================
      */}
        </div>
    );
};

export default About;