import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

import Link from 'next/link'

const Layout = ({ children }) => {
    return (<div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <div class="w-full navbar bg-base-100">
                <div class="flex-none lg:hidden">
                    <button>
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </button>
                </div>
                <div class="flex-1">
                    <Link href="/"><a class="btn btn-ghost normal-case text-xl">Sabbir.</a></Link>
                </div>
                <Navbar />
            </div>
            {children}

            <Footer />
        </div>
        <Sidebar />
    </div>
    );
}

export default Layout;