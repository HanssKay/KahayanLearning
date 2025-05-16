import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center"
        >
            <h1 className="text-3xl font-bold text-gray-800">Hubungi Kami</h1>
            <p className="text-gray-600 max-w-md mt-4">
                Email: <a href="mailto:bpom_palangkaraya@pom.go.id" className="text-blue-500 hover:underline">bpom_palangkaraya@pom.go.id</a>
            </p>
            <Link to="/" className="mt-4 text-blue-500 hover:underline transition duration-300">
                Kembali ke Beranda
            </Link>
        </motion.div>
    );
};

export default Contact;
