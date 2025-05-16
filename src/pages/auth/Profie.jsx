import DashboardNavbar from "../../components/DashboardNavbar";
import DashboardSidebar from "../../components/DashboardSidebar";

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardNavbar />
            <div className="flex">
                <DashboardSidebar />
                <main className="flex-1 p-6">
                    <h2 className="md:mt-15 mt-12 md:text-3xl text-xl font-bold border-b-2 pb-1 border-black">Profile User</h2>
                    <div className="mt-1 bg-gray-100 rounded-md p-6">
                        <div className="lg:grid lg:grid-cols-2 gap-10">
                            {/* Nama Lengkap */}
                            <div>
                                <form className="flex flex-col">
                                    <label htmlFor="full-name">Nama Lengkap</label>
                                    <input
                                        id="full-name"
                                        className="border-2 mt-1 lg:w-[450px] border-black p-2 rounded"
                                        type="text"
                                    />
                                </form>
                            </div>
                            {/* Alamat */}
                            <div className="mt-5 md:mt-0">
                                <form className="flex flex-col">
                                    <label htmlFor="address">Alamat</label>
                                    <input
                                        id="address"
                                        className="border-2 mt-1 lg:w-[450px] border-black p-2 rounded"
                                        type="text"
                                    />
                                </form>
                            </div>
                            {/* Nomor Handphone */}
                            <div className="mt-5">
                                <form className="flex flex-col">
                                    <label htmlFor="phone">Nomor Handphone/ Wa</label>
                                    <input
                                        id="phone"
                                        className="border-2 mt-1 lg:w-[450px] border-black p-2 rounded"
                                        type="text"
                                    />
                                </form>
                            </div>
                            {/* Email */}
                            <div className="mt-5">
                                <form className="flex flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        className="border-2 mt-1 lg:w-[450px] border-black p-2 rounded"
                                        type="text"
                                    />
                                </form>
                            </div>
                            {/* Username */}
                            <div className="mt-5">
                                <form className="flex flex-col">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        id="username"
                                        className="border-2 mt-1 lg:w-[450px] border-black p-2 rounded"
                                        type="text"
                                    />
                                </form>
                            </div>
                            {/* Password */}
                            <div className="mt-5">
                                <form className="flex flex-col">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        className="border-2 mt-1 lg:w-[450px] border-black p-2 rounded"
                                        type="text"
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-6 ">
                            <button className="p-2 cursor-pointer font-bold text-white hover:bg-green-800 bg-green-600 w-24 h-10 rounded-md">
                                Simpan
                            </button>
                            <button className="p-2 cursor-pointer font-bold text-white hover:bg-blue-300 bg-blue-400 w-24 rounded-md">
                                Edit
                            </button>
                            <button className="p-2 cursor-pointer font-bold text-white hover:bg-red-800 bg-red-600 w-24 rounded-md">
                                Batal
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;
