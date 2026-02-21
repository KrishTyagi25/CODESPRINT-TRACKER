import { useState } from "react";

function AddSessionModal({isOpen, onClose, onSave}){   
    if(!isOpen) return null;
    const [duration, setDuration] = useState("");
    const [category, setCategory] = useState("DSA");
    const [date,setDate] = useState("");
    const [notes, setNotes] = useState("");

    const handleSave = ()=>{
        const newSession={
            id: Date.now(),
            duration : Number(duration),
            category,
            date,
            notes,
        };

        console.log("New Session:", newSession);

        onSave(newSession);
        onClose();
    }
   
    




    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

            <div className="bg-zinc-800 p-6 rounded-xl w-[400px] shadow-lg">
                <h2 className="text-xl font-semibold mb-4">
                    Add Coding Session
                </h2>

                <div className="mb-4">
                    <label className="block text-sm mb-1">Duration (minutes)</label>
                    <input 
                      type="number"
                      value={duration}
                      onChange={(e)=> setDuration(e.target.value)}
                      className="w-full p-2 rounded-md bg-zinc-700 outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm mb-1">Category</label>
                    <select
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}
                     className="w-full p-2 rounded-md bg-zinc-700 outline-none">
                        <option>DSA</option>
                        <option>Development</option>
                        <option>Revision</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm mb-1">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e)=> setDate(e.target.value)}
                      className="w-full p-2 rounded-md bg-zinc-700 outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm mb-1">Notes</label>
                    <textarea 
                    value={notes}
                    onChange={(e)=> setNotes(e.target.value)}
                    className="w-full p-2 rounded-md bg-zinc-700 outline-none"
                    rows="3"
                    />
                </div>
                   <div className="flex justify-end gap-3 mt-4">
                <button 
                   onClick={onClose}
                   className="px-4 py-2 bg-zinc-600 rounded-lg hover:bg-zinc-500 transition"                
                >
                    Cancel
                </button>

                <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
                >
                    Save
                </button>
            </div>

            </div>

            
        </div>

    )
}

export default AddSessionModal;