import React from "react"
import { useState } from "react";
import AddSessionModal from "../components/session/AddSessionModal";


function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-semibold">
                    Dashboard
                </h1>


                <button 
                onClick={()=> setIsOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-medium transition flex items-center gap-2">
                    <span>+</span>
                    Add Session
                </button>
            </div>



            {/*Cards Grid */}
            <div className="grid grid-cols-4 gap-6">
                {/*Card 1 */}
                <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
                    <p className="text-sm text-zinc-400">Total Hours</p>
                    <h2 className="text-3xl font-bold mt-2">24 hrs</h2>
                </div>

                {/*Card 2 */}
                <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
                    <p className="text-sm text-zinc-400">Today Hours</p>
                    <h2 className="text-3xl font-bold mt-2">3 hrs</h2>
                </div>

                {/*Card 3*/}
                <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
                    <p className="text-sm text-zinc-400">Current Streak 🔥</p>
                    <h2 className="text-3xl font-bold mt-2">5 days</h2>
                </div>

                {/*Card 4 */}
                <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
                    <p className="text-sm text-zinc-400">Total Sessions</p>
                    <h2 className="text-3xl font-bold mt-2">12</h2>
                </div>


            </div>
            <AddSessionModal
            isOpen={isOpen}
            onClose={()=>setIsOpen(false)}
            />

        </div>
        

    )
}

export default Dashboard;
