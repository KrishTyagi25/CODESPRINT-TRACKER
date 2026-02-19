import Navbar from "./Navbar";

function Layout({children}){
    return(
        <div className="min-h-screen bg-zinc-900 text-white">

            {/**Navbar*/}
            <Navbar/>

            {/*Main Content*/}
            <main className="p-6">
                {children}
            </main>
        </div>
    );
}

export default Layout;