// src/data/courses.js
export const courseConfig = {
    "kimia-instrumentasi": {
        name: "Kimia & Instrumentasi",
        sections: Array.from({ length: 14 }, (_, i) => i + 1), // 14 pertemuan
    },
    "biologi-mikrobiologi": {
        name: "Biologi & Mikrobiologi",
        sections: Array.from({ length: 14 }, (_, i) => i + 1), // 10 pertemuan
    },
    "iso-iec-17025": {
        name: "ISO IEC 17025",
        sections: Array.from({ length: 14 }, (_, i) => i + 1),
    },
    "qms-iso-9001": {
        name: "QMS ISO 9001",
        sections: Array.from({ length: 14 }, (_, i) => i + 1),
    },
    "iso-14001": {
        name: "ISO 14001",
        sections: Array.from({ length: 14 }, (_, i) => i + 1),
    },
    "metode-analisa-nasional-internasional": {
        name: "Metode Analisa Nasional & Internasional",
        sections: Array.from({ length: 14 }, (_, i) => i + 1),
    },
    "verifikasi-validasi-metode-analisa": {
        name: "Verifikasi & Validasi Metode Analisa",
        sections: Array.from({ length: 14 }, (_, i) => i + 1),
    },
    "estimasi-ketidakpastian-dalam-pengukuran": {
        name: "Estimasi Ketidakpastian Dalam Pengukuran",
        sections: Array.from({ length: 14 }, (_, i) => i + 1),
    },
};
