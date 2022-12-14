import Link from 'next/link';
import Head from 'next/head';

import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4335602409579100"
          crossOrigin="anonymous"></script>
      </Head>
      <div className="bg-base-100 drawer drawer-mobile">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="top-0 sticky bg-base-300 w-full navbar z-40">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost normal-case text-xl lg:hidden">Sabbir.</Link>
              <div className='hidden w-full max-w-sm lg:flex'>
                <div className="form-control">
                  <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Navbar />
          </div>
          {/* <!-- Page content here --> */}
          {children}
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <aside className='bg-base-200 w-80'>
            <div className='z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex shadow-sm'>
              <Link href="/" className='flex-0 btn btn-ghost px-2'>
                <div className='font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl'>
                  <span className='text-base-content uppercase'>Sabbir.</span>
                </div>
              </Link>
            </div>
            <div className='bg-base-200 sticky top-0 z-10 grid grid-row-2 gap-y-2 w-full bg-opacity-90 py-3 px-2 backdrop-blur shadow-sm lg:hidden'>
              <div className="form-control">
                <div className="input-group">
                  <input type="text" placeholder="Search…" className="input input-bordered" />
                  <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <Sidebar />
          </aside>
        </div>
      </div>
    </>
  );
}

export default Layout;