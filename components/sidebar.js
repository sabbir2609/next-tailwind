import Link from 'next/link'

const Sidebar = () => {
    return (
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}

            <li>
                <Link href="/contact">Contact</Link>
            </li>

            <li>
                <Link href="/about">About</Link>
            </li>



            <li>
                <Link href="/team">Contact</Link>
            </li>
            <div className="divider"></div>
            <li>
                <Link href="/blog">Blog</Link>
            </li>

        </ul>
    );
}

export default Sidebar;