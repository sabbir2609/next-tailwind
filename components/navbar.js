import Link from 'next/link'
const Navbar = () => {
    return (
        <div class="flex-none lg:block">
            <ul class="menu menu-horizontal p-0">
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li tabindex="0">
                    <a>
                        More
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </a>
                    <ul class="p-2 bg-base-100">
                        <li>
                            <Link href="/contact"><a>Contact</a></Link>
                        </li>
                        <li>
                            <Link href="/team"><a>Team</a></Link>
                        </li>
                    </ul>
                </li>
                <button class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </ul>
        </div>
    );
}

export default Navbar;