export default function NavBar(){
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-white border-b-2 shadow-sm">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden mx-auto
                        md:block
                        lg:block">
                            <ul className="menu menu-horizontal font-medium">
                                <li><a href="/">Home page</a></li>
                                <li><a href="">Books</a></li>
                                <li><a href="">Characters</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-white font-medium">
                        <li><a href="/">Home page</a></li>
                        <li><a href="">Books</a></li>
                        <li><a href="">Characters</a></li>
                    </ul>
                </div>
        </div>
    )
}