import Link from "next/link";
import logo from '../../../assets/code.png'
import Image from "next/image";

const Nav = () => {
    return (
        <div className="bg-[#0E2954] bg-opacity-30 text-slate-50 fixed top-0 left-0 right-0 z-50 shadow shadow-[#ffffff24] font-semibold py-2">
            <div className="my-container grid grid-cols-2 items-center gap-5">

                {/* left nav */}
                <div>
                    <Image
                        src={logo}
                        width={50}
                        height={50}
                    />
                </div>

                {/* right nav */}
                <div className="flex justify-between">
                    <ul className="flex items-center gap-2">
                        <li><Link className="px-3 py-2  shadow shadow-slate-500 rounded" href={'/'}>Home</Link></li>
                        <li><Link className="px-3 py-2 shadow shadow-slate-500 rounded" href={'/about'}>About</Link></li>
                        <li><Link className="px-3 py-2 shadow shadow-slate-500 rounded" href={'contact'}>Contact Us</Link></li>
                    </ul>
                    <button className="cmn-btn-one">Enroll now</button>
                </div>

            </div>
        </div>
    );
};

export default Nav;