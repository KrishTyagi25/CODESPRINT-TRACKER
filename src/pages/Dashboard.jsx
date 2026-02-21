import { useState, useEffect } from "react";
import AddSessionModal from "../components/session/AddSessionModal";


function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [sessions, setSessions] = useState([]);



    const totalMinutes = sessions.reduce(
        (acc, curr) => acc + curr.duration,
        0
    );
    const totalHours = (totalMinutes / 60).toFixed(1);


    const today = new Date().toISOString().split("T")[0];

    const todayMinutes = sessions
        .filter((s) => s.date === today)
        .reduce((acc, curr) => acc + curr.duration, 0);

    const todayHours = (todayMinutes / 60).toFixed(1);

    const hasTodaySession = sessions.some((s) => s.date === today);
    const currentStreak = hasTodaySession ? 1:0;


    useEffect(()=>{
        const storedSessions = localStorage.getItem("sessions");

        if(storedSessions){
            setSessions(JSON.parse(storedSessions));
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("sessions",JSON.stringify(sessions));
    },[sessions]);



    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-semibold">
                    Dashboard
                </h1>


                <button
                    onClick={() => setIsOpen(true)}
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
                    <h2 className="text-3xl font-bold mt-2">{totalHours} hrs</h2>
                </div>

                {/*Card 2 */}
                <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
                    <p className="text-sm text-zinc-400">Today Hours</p>
                    <h2 className="text-3xl font-bold mt-2">{todayHours} hrs</h2>
                </div>

                {/*Card 3*/}
                <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
                    <p className="text-sm text-zinc-400">Current Streak 🔥</p>
                    <h2 className="text-3xl font-bold mt-2">{currentStreak} days</h2>
                </div>

                {/*Card 4 */}
                <div className="bg-zinc-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
                    <p className="text-sm text-zinc-400">Total Sessions</p>
                    <h2 className="text-3xl font-bold mt-2">{sessions.length}</h2>
                </div>


            </div>
            <AddSessionModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSave={(session) =>
                    setSessions([...sessions, session])
                }
            />

        </div>


    )
}

export default Dashboard;
