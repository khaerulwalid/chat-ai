"use client"
import { useRef, useState } from "react"

export default function ChatPage() {
    const [input, setInput] = useState<string>("");
    // const [message, setMessage] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSend = (e: ) => {
        e.preventDefault()
    }

    return (
        <div className=" w-full max-w-lg bg-white shadow-lg rounded-2xl p-5 flex flex-col gap-4">
            <div className=" h-96 overflow-y-auto border rounded p-3 flex flex-col gap-2">
                {message.map((msg, i) => (
                    <div key={i} className=" text-sm">{msg}</div>
                ))}
            </div>
            <form className="flex gap-2">
                <input
                    className=" flex-grow border p-2 rounded-l focus:outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button
                    className=" bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 transition"
                    onClick={() => {
                        setMessage([...message, `🧑: ${input}`, `🤖: Ini jawaban dummy.`]);
                        setInput('');
                    }}
                >
                    Kirim
                </button> 
            </form> 
        </div>
    )
    
}