import DashboardNavbar from "../../components/DashboardNavbar";
import DashboardSidebar from "../../components/DashboardSidebar";

const KuesionerPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardNavbar />
            <div className="flex">
                <DashboardSidebar />
                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-bold mb-6">Kuesioner Program Magang</h1>

                    <form className="bg-white p-6 rounded shadow-md space-y-6 max-w-3xl">
                        {/* Pertanyaan 1 */}
                        <div>
                            <label className="block font-semibold">
                                Bagaimana fasilitas yang tersedia selama magang?
                            </label>
                            <div className="flex gap-4 mt-2">
                                {[1, 2, 3, 4, 5].map((val) => (
                                    <label key={val}>
                                        <input
                                            type="radio"
                                            name="fasilitas"
                                            value={val}
                                            className="mr-1"
                                        />
                                        {val}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Pertanyaan 2 */}
                        <div>
                            <label className="block font-semibold">
                                Bagaimana bimbingan dari pembimbing magang?
                            </label>
                            <div className="flex gap-4 mt-2">
                                {[1, 2, 3, 4, 5].map((val) => (
                                    <label key={val}>
                                        <input
                                            type="radio"
                                            name="bimbingan"
                                            value={val}
                                            className="mr-1"
                                        />
                                        {val}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Pertanyaan 3 */}
                        <div>
                            <label className="block font-semibold">
                                Menurut Anda, seberapa bermanfaat program magang ini?
                            </label>
                            <div className="flex gap-4 mt-2">
                                {[1, 2, 3, 4, 5].map((val) => (
                                    <label key={val}>
                                        <input
                                            type="radio"
                                            name="manfaat"
                                            value={val}
                                            className="mr-1"
                                        />
                                        {val}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Saran & Kritik */}
                        <div>
                            <label className="block font-semibold">Saran atau Kritik</label>
                            <textarea
                                className="w-full border border-gray-300 rounded p-2 mt-2"
                                rows="4"
                                placeholder="Tulis saran atau kritik Anda..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Kirim Kuesioner
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default KuesionerPage;
