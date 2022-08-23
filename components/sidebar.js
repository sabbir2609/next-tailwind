import Link from 'next/link'

const Sidebar = () => {
    return (
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                <div className='z-20 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 md:hidden sm:hidden'>
                    <div class="flex items-center">
                        <Link href="/"><a class="btn btn-ghost normal-case text-xl">Sabbir.</a></Link>
                    </div>
                </div>
                <div class="form-control sticky top-0 z-10 grid grid-row-2 gap-y-2 w-full bg-opacity-90 py-3 px-2 backdrop-blur shadow-sm lg:hidden">
                    <input type="text" placeholder="Search" class="input input-bordered" />
                </div>
                <li>
                    <Link href="/faq"><a>FAQ</a></Link>
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

        </div>
    );
}

export default Sidebar;