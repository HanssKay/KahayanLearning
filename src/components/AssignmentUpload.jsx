import { useState } from "react";

const AssignmentUpload = () => {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simpan logika upload disini
        console.log("File:", file);
        console.log("Deskripsi:", description);
        alert("Tugas berhasil diupload!");
        setFile(null);
        setDescription("");
    };

    return (
        <div className="space-y-3">
            {/* Status Penugasan */}
            <div className="items-center mt-2 border-t-[1px] border-black"></div>

            {/* Form Upload */}
            <div className="space-y-4">
                <div>
                    <p className="text-sm mb-1">Upload Tugas</p>
                    <div className="flex items-center gap-2">
                        <label className="cursor-pointer text-sm border border-gray-300 rounded px-3 py-1 hover:bg-gray-50">
                            Pilih File
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                                accept=".pdf,.doc,.docx,.ppt,.pptx"
                            />
                        </label>
                        <span className="text-sm text-gray-500">
                            {file ? file.name : "Belum ada file dipilih"}
                        </span>
                    </div>
                </div>

                <div>
                    <p className="text-sm mb-1">Deskripsi Tugas</p>
                    <textarea
                        placeholder="Tulis deskripsi tugas..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded"
                        rows="3"
                    />
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                    <div className="text-xs text-gray-500">
                        <p>Format file: PDF, DOC, PPT (Maks. 10MB)</p>
                        <p>Deadline: 30 Juni 2025 - 23:59 WIB</p>
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={!file}
                        className={`px-3 py-1 text-sm rounded ${!file ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white cursor-pointer hover:bg-blue-700'}`}
                    >
                        Kirim Tugas
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentUpload;