import Link from "next/link"

const Footer = () => {
    return (
            <div className="mx-auto pb-16">
                <p className="text-center text-lg text-black">
                    &copy; 2023 Harmony AI, Inc. All rights reserved.
                </p>
               <Link href="https://damianalcalay.vercel.app/" target="_blank">
                    <p className="text-center text-black mt-2 text-lg">
                       Powered by <span className="text-blue-700 font-bold hover:text-blue-700/80 transition">Damian Alcalay</span>
                    </p>
               </Link>
            </div>
    )
}

export default Footer