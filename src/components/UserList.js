import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser'
import axios from 'axios'

const UserList = () => {
    const [data, setData] = useState([])
    // useEffect(() => {
    //     axios("https://randomuser.me/api/?results=1")
    //         .then((res) => setData(res.data.results))
    //         .catch((e) => console.log(e))
    // }, [])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetch('https://randomuser.me/api/?results=5');
    //         const json = await data.json();
    //         setData(json.results);
    //     }
    //     fetchData()
    //         .catch(console.error);;
    // }, [])
    const fetchData = async () =>{
        const response = await axios("https://randomuser.me/api/?results=5")
        setData(response.data.results)
    }
    // const updateValues = {
    //     "content": "axioslaolduawwwwww",
    //     "isCompleted": false
    // }
    // const updateData = async () => {
    //     const data = await axios.post("https://6320997d9f82827dcf307283.mockapi.io/todos", updateValues
    //     );
    // }

    useEffect(()=>{

        fetchData()
    },[])
    console.log(data)
    return (
        <div>
            {data.map((item) =>
                <SingleUser item={item} />
            )}
        </div>
    )
}

export default UserList