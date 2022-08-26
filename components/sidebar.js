import Link from 'next/link'

const Sidebar = () => {
    return (
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}

            <li>
                <Link href="/contact"><a>Contact</a></Link>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <div className="divider"></div>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>
            <li>
                <a>Sidebar Item 2</a>
            </li>

        </ul>
    );
}

export default Sidebar;