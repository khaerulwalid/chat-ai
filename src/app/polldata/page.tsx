"use client"

import { useEffect, useRef, useState } from "react"

export default function PollPage() {
    const [data, setData] = useState<number | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
 
    const fetchData = async () => {
        const fakeData = Math.floor(Math.random() * 1000);
        console.log(`Fetching data: ${fakeData}`);
        setData(fakeData);
    }

    useEffect(() => {
        fetchData();

        intervalRef.current = setInterval(fetchData, 5000);

        return () => {
            if(intervalRef.current) {
                clearInterval(intervalRef.current);
                console.log("Interval dibersihkan");
            }
        }
    }, []);
    
    return (
        <div>
            <h1>Polling data setiap 5 detik</h1>
            <p>Data terbaru : {data}</p>
        </div>
    )
}