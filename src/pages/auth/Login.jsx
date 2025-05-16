import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Kirim request POST ke endpoint login peserta
            const response = await axios.post("http://localhost:5000/api/studentLog/student", { email, password });
            console.log("Login berhasil:", response.data);

            // Simpan token di localStorage (jika menggunakan JWT)
            localStorage.setItem("token", response.data.token);

            // Redirect ke dashboard peserta
            navigate("/dashboard");
        } catch (err) {
            console.error("Login error:", err.response?.data || err.message);
            setError(err.response?.data?.error || "Login gagal");
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-400 hover:bg-blue-700 text-white p-2 rounded-lg">
                        Login
                    </button>
                    <p className="mt-2 text-sm text-center">
                        Belum punya akun? <a href="/register" className="text-blue-700">Daftar</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
