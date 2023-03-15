import {useState,useEffect} from "react";
const Memos=({state})=>{
    const [memos,setMemos]=useState([]);
    const {contract}=state;

    useEffect(()=>{
        const memosMessage=async()=>{
            const memos=await contract.getMemos();
            setMemos(memos);
        };
        contract && memosMessage();
    },[contract]);
    
    return(
    <>
    <p style={{ color: 'red',textAlign: 'center'}}>Message</p>
    {memos.map((memo)=>{
        return(
            <div className="container-fluid" style={{ width: "100%"}}>
            <table key={memos.timestamp} style={{
                "marginBottom": "10px",}}>
                <tbody>
                    <tr>
                        <td
                        style={{
                            "backgroundColor": "#96D4D4",
                            border: "1px solid white",
                            "borderCollapse": "collapse",
                            padding: "7px",
                            width: "100px",
                          }}>{memo.name}</td>
                        <td
                        style={{
                            "backgroundColor": "#96D4D4",
                            border: "1px solid white",
                            "borderCollapse": "collapse",
                            padding: "7px",
                            width: "800px",
                          }}>{String(memo.message)}</td>
                        <td
                        style={{
                            "backgroundColor": "#96D4D4",
                            border: "1px solid white",
                            "borderCollapse": "collapse",
                            padding: "7px",
                            width: "300px",
                          }}>
                            {Date(memo.timestamp)}</td>
                        <td
                        style={{
                            "backgroundColor": "#96D4D4",
                            border: "1px solid white",
                            "borderCollapse": "collapse",
                            padding: "7px",
                            width: "400px",
                          }}>{String(memo.from)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    })}
    </>
);
};
export default Memos;