import { motion } from "framer-motion";

const Button = () => {
    return (
        <div className="flex gap-6 items-center justify-center bg-[#0f0f0f] py-10 rounded-xl">
            {/* View My Work Button */}
            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-6 py-3 bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-semibold rounded-2xl shadow-md hover:shadow-purple-500/50 transition duration-300"
            >
                View My Work
            </motion.button>

            {/* Hire Me Button */}
            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-6 py-3 bg-gradient-to-br from-emerald-600 to-teal-700 text-white font-semibold rounded-2xl shadow-md hover:shadow-emerald-500/50 transition duration-300"
            >
                Hire Me
            </motion.button>
        </div>
    );
};

export default Button;
