import Link from 'next/link'

const Sidebar = () => {
    return (
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                <div tabindex="0" class="dropdown-content card card-compact w-auto p-2 shadow bg-primary text-primary-content">
                    <div class="card-body">
                        <h3 class="card-title">Card title!</h3>
                        <p>you can use any element as a dropdown.</p>
                    </div>
                </div>
                <li>
                    <Link href="/faq"><a>FAQ</a></Link>
                </li>
                <li>
                    <a>Sidebar Item 2</a>
                </li>
            </ul>

        </div>
    );
}

export default Sidebar;