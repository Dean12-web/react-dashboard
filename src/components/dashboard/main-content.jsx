import { useEffect, useRef, useState } from "react";
import MyBarChart from "../reactChart";
import axios from "axios";

function MainContent() {
    const [data, setData] = useState([]); 
    const [page, setPage] = useState(1);
    const [prevPage, setPrevPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/todo/data`);
                setData(res.data.data); 
                console.log(res.data.data)
            } catch (error) {
                console.error("Error fetching data", error); 
            }
        };
        fetchData(); 
    }, []);

    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Dashboard</h1>
                <MyBarChart />
                <div className="bg-white overflow-auto">
                    <table className="text-left w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Nama</th>
                                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr className="hover:bg-grey-lighter" key={index}>
                                        <td className="py-4 px-6 border-b border-grey-light">{item.todo_name}</td>
                                        <td className="py-4 px-6 border-b border-grey-light">{item.todo_status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
            <footer className="w-full bg-white text-right p-4">
                Built by Dean
            </footer>
        </div>
    )
}

export default MainContent;
