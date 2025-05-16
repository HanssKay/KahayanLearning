import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerStudent } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.auth);

    const onSubmit = async (data) => {
        const finalData = { ...formData, ...data };

        if (step < 3) {
            setFormData(finalData);
            setStep(step + 1);
        } else {
            // Validate PDF file
            if (!finalData.lampiran || finalData.lampiran[0].type !== "application/pdf") {
                alert("Please upload a PDF file");
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append("full_name", finalData.nama);
            formDataToSend.append("email", finalData.email);
            formDataToSend.append("password", finalData.password);
            formDataToSend.append("phone_number", finalData.nomorTelepon);
            formDataToSend.append("address", finalData.alamat);
            formDataToSend.append("birth_date", finalData.tanggalLahir);
            formDataToSend.append("occupation", finalData.pekerjaan);
            formDataToSend.append("identity_number", finalData.nimNik);
            formDataToSend.append("selected_course", finalData.course);
            formDataToSend.append("document", finalData.lampiran[0]);

            try {
                const result = await dispatch(registerStudent(formDataToSend));

                // ✅ Cek payload langsung (tanpa andalkan success flag)
                if (result.payload) {
                    alert("Pendaftaran berhasil!");
                    navigate("/login");
                } else {
                    alert("Terjadi kesalahan tak terduga");
                }
            } catch (error) {
                alert(error.message || "Gagal menghubungi server");
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-100 p-6">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                    {step === 1 && (
                        <>
                            {/* Nama */}
                            <div>
                                <label className="text-sm font-medium">Nama Lengkap</label>
                                <input
                                    type="text"
                                    {...register("nama", { required: "Nama harus diisi" })}
                                    className="border p-2 w-full rounded"
                                    placeholder="Nama Lengkap"
                                />
                                {errors.nama && <p className="text-red-500 text-sm">{errors.nama.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email harus diisi" })}
                                    className="border p-2 w-full rounded"
                                    placeholder="Email"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="text-sm font-medium">Password</label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password harus diisi",
                                        minLength: {
                                            value: 6,
                                            message: "Password minimal 6 karakter"
                                        }
                                    })}
                                    className="border p-2 w-full rounded"
                                    placeholder="Password"
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                            </div>

                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                                Next
                            </button>
                        </>
                    )}


                    {/* STEP 2 */}
                    {step === 2 && (
                        <>
                            {/* Nomor Telepon */}
                            <div>
                                <label className="text-sm font-medium">Nomor Telepon</label>
                                <input
                                    type="text"
                                    {...register("nomorTelepon", { required: "Nomor Telepon harus diisi" })}
                                    className="border p-2 w-full rounded"
                                    placeholder="Nomor Telepon"
                                />
                                {errors.nomorTelepon && <p className="text-red-500 text-sm">{errors.nomorTelepon.message}</p>}
                            </div>

                            {/* Alamat */}
                            <div>
                                <label className="text-sm font-medium">Alamat</label>
                                <input
                                    type="text"
                                    {...register("alamat", { required: "Alamat harus diisi" })}
                                    className="border p-2 w-full rounded"
                                    placeholder="Alamat"
                                />
                                {errors.alamat && <p className="text-red-500 text-sm">{errors.alamat.message}</p>}
                            </div>

                            {/* Tanggal Lahir */}
                            <div>
                                <label className="text-sm font-medium">Tanggal Lahir</label>
                                <input
                                    type="date"
                                    {...register("tanggalLahir", { required: "Tanggal Lahir harus diisi" })}
                                    className="border p-2 w-full rounded"
                                />
                            </div>

                            {/* Pekerjaan */}
                            <div>
                                <label className="text-sm font-medium">Pekerjaan</label>
                                <input
                                    type="text"
                                    {...register("pekerjaan", { required: "Pekerjaan harus diisi" })}
                                    className="border p-2 w-full rounded"
                                    placeholder="Pekerjaan"
                                />
                                {errors.pekerjaan && <p className="text-red-500 text-sm">{errors.pekerjaan.message}</p>}
                            </div>

                            {/* NIM/NIK */}
                            <div>
                                <label className="text-sm font-medium">NIM/NIK</label>
                                <input
                                    type="text"
                                    {...register("nimNik", { required: "NIM/NIK harus diisi" })}
                                    className="border p-2 w-full rounded"
                                    placeholder="NIM/NIK"
                                />
                                {errors.nimNik && <p className="text-red-500 text-sm">{errors.nimNik.message}</p>}
                            </div>

                            {/* Upload Surat */}
                            <div>
                                <label className="text-sm font-medium">Upload Surat (PDF)</label>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    {...register("lampiran", { required: "Lampiran harus diupload" })}
                                    className="border p-2 w-full rounded"
                                />
                            </div>

                            <div className="flex justify-between">
                                <button type="button" onClick={() => setStep(step - 1)} className="bg-gray-400 hover:bg-gray-600 text-white p-2 rounded">
                                    Back
                                </button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                                    Next
                                </button>
                            </div>
                        </>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                        <>
                            {/* Pilih Course */}
                            <div>
                                <label className="text-sm font-medium">Pilih Course</label>
                                <select
                                    {...register("course", { required: "Pilih course" })}
                                    className="border p-2 w-full rounded"
                                >
                                    <option value="">Pilih Course</option>
                                    <option value="Kimia & Instrumentasi">Kimia & Instrumentasi</option>
                                    <option value="Biologi & Mikrobiologi">Biologi & Mikrobiologi</option>
                                    <option value="ISO IEC 17025">ISO IEC 17025</option>
                                    <option value="QMS ISO 9001">QMS ISO 9001</option>
                                    <option value="ISO 14001">ISO 14001</option>
                                    <option value="Metode Analisa Nasional & Internasional">Metode Analisa Nasional & Internasional</option>
                                    <option value="Verifikasi & Validasi Metode Analisa">Verifikasi & Validasi Metode Analisa</option>
                                    <option value="Estimasi Ketidakpastian Dalam Pengukuran">Estimasi Ketidakpastian Dalam Pengukuran</option>
                                </select>
                                {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}
                            </div>

                            <div className="flex justify-between">
                                <button type="button" onClick={() => setStep(step - 1)} className="bg-gray-400 hover:bg-gray-600 text-white p-2 rounded">
                                    Back
                                </button>
                                <button type="submit" disabled={loading} className="bg-green-500 hover:bg-green-700 text-white p-2 rounded">
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </>
                    )}

                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
