// src/components/KalenderAkademik.jsx
const KalenderAkademik = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Kalender Akademik</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Waktu Perkuliahan Khusus Pada Bulan Ramadhan</h2>
                <p className="text-gray-700">Periode 03 Maret s.d. 22 Maret 2025</p>
            </div>

            <hr className="my-4 border-gray-300" />

            <div className="mb-6">
                <h3 className="font-bold text-lg">Lampiran 8</h3>
                <p className="text-gray-700">
                    Surat Edaran Wakil Rektor 1 UNPAM Nomor 016-rev/A.1/Ed/UNPAM/II/2025<br />
                    Tentang: Kalender Pembelajaran Semester Genap Tahun Akademik 2024/2025
                </p>
            </div>

            <h3 className="font-bold mb-3">
                WAKTU PERKULIAHAN PADA BULAN RAMADHAN REGULAR "A, CR, & CS" PROGRAM PASCASARJANA; SALAJANA; DAN DIPLOMA
            </h3>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">No</th>
                        <th className="border p-2">Jam Perkuliahan ke-</th>
                        <th className="border p-2">Pukul</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { no: 1, jam: 1, waktu: "09.00 s.d. 10.00" },
                        { no: 2, jam: 2, waktu: "10.00 s.d. 11.00" },
                        { no: 3, jam: 3, waktu: "11.00 s.d. 12.00" },
                        { no: 4, jam: 4, waktu: "13.00 s.d. 14.00" },
                        { no: 5, jam: 5, waktu: "14.00 s.d. 15.00" },
                    ].map((item) => (
                        <tr key={item.no}>
                            <td className="border p-2 text-center">{item.no}</td>
                            <td className="border p-2 text-center">{item.jam}</td>
                            <td className="border p-2 text-center">{item.waktu}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Tombol Upload (Untuk Tahap Selanjutnya) */}
            <div className="mt-6">
                <label className="block mb-2 font-medium">Upload Jadwal Baru (PDF/Image)</label>
                <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
                />
            </div>
        </div>
    );
};

export default KalenderAkademik;