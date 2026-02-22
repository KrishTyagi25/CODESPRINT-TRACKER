import { useState, useEffect } from "react";
import AddSessionModal from "../components/session/AddSessionModal";

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [sessions, setSessions] = useState(() => {
        const stored = localStorage.getItem("sessions");
        return stored ? JSON.parse(stored) : [];
    });

    console.log("Sessions:", sessions);






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



    const getCurrentStreak=()=>{
        if(sessions.length ===0) return 0;


        const uniqueDates = [
            ...new Set(sessions.map((s) => s.date))
        ];

         const sortedDates = uniqueDates
        .map(date => new Date(date))
        .sort((a, b) => b - a);

        let streak =0;
        let currentDate = new Date();

        currentDate.setHours(0,0,0,0)

        for(let i=0; i<sortedDates.length; i++){
            const sessionDate = new Date(sortedDates[i]);
            sessionDate.setHours(0,0,0,0);

           const diff =
            (currentDate - sessionDate) / (1000 * 60 * 60 * 24);


            if(diff ===0){
                streak++;
                 currentDate.setDate(currentDate.getDate() - 1);

                

            }else if(diff===1){
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);

            }else{
                break;
            }
        }
        return streak;
    };
        const currentStreak = getCurrentStreak();

    useEffect(() => {
        localStorage.setItem("sessions", JSON.stringify(sessions));
    }, [sessions]);



    /*Delete Session*/

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure want to delete this session?"
        );

        if (!confirmDelete) return;
        const updatedSessions = sessions.filter(
            (session) => session.id !== id
        );

        setSessions(updatedSessions);
    }

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

            {/*Session List */}
            {/* <div className="mt-10">
                {sessions.length === 0 ? (
                <div className="bg-zinc-800 p-10 rounded-xl text-center shadow-md">
                    <h2 className="text-xl font-semibold mb-3">
                     No sessions yet 🚀
                    </h2>
                <p className="text-zinc-400">
                      Start tracking your coding journey and build your streak!
                 </p>
                 </div>
  
                ):(
                    <div className="bg-zinc-800 rounded-xl overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-zinc-700 text-sm uppercase">
                                <tr>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Duration</th>
                                    <th className="p-3">Notes</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sessions.map((session)=>(
                                    <tr key={session.id} className="border-t border-zinc-700">
                                        <td className="p-3">{session.date}</td>
                                        <td className="p-3">{session.category}</td>
                                        <td className="p-3">{session.duration} min</td>
                                        <td className="p-3">{session.notes}</td>
                                        <td className="p-3">
                                            <button
                                            onClick={()=> handleDelete(session.id)}
                                            className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded-md text-md text-sm transition">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )

                                )}
                            </tbody>
                        </table>
                    </div>
                )
                }

            </div> */}

            <div className="mt-10">
                {sessions.length === 0 ? (
                    <div className="bg-zinc-800 p-10 rounded-xl text-center shadow-md">
                        <h2 className="text-xl font-semibold mb-3">
                            No sessions yet 🚀
                        </h2>
                        <p className="text-zinc-400">
                            Start tracking your coding journey and build your streak!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {sessions.map((session) => (
                            <div
                                key={session.id}
                                className="bg-zinc-800 p-4 rounded-lg flex justify-between items-center shadow"
                            >
                                <div>
                                    <p className="font-medium">{session.category}</p>
                                    <p className="text-sm text-zinc-400">
                                        {session.duration} mins • {session.date}
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        setSessions(
                                            sessions.filter((s) => s.id !== session.id)
                                        )
                                    }
                                    className="text-red-400 hover:text-red-300"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>




            <AddSessionModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSave={(session) =>
                    setSessions((prev) => [...prev, session])
                }
            />

        </div>


    )
}

export default Dashboard;
