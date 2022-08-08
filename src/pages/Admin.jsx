import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import './admin.css';

const Admin = () => {
    const[data,setData] = useState([]);
    const[cityName,setCityName] = useState();
    const[foundCity,setFoundCity] = useState(data);

    const searchData = useRef()

    useEffect(()=>{
        fetchData();
        searchData.current.focus();
    },[])


    const fetchData=()=>{
    axios.get(process.env.REACT_APP_ADMIN_DATA)
                .then((response)=>{
                    const visitorData = response.data
                    setData(visitorData);
                })
                .catch(error =>{
                    console.log(error)
                })
        } 
    const filter =(e)=>{
        const keyword = e.target.value;

        if(keyword !== ''){
            const results = data.filter((item)=>{
                return item.city.toLowerCase().startsWith(keyword.toLowerCase());
            });
        setFoundCity(results);
        }else{
            setFoundCity(data)
        }
        setCityName(keyword);
    }
        return (
            <>
            <div className='container admin'>
            <input ref={searchData}
                type="search"
                value={cityName}
                onChange={filter}
                className="input"
                placeholder="Filter By Cityname"
            />
            
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                    <th scope="col">Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {foundCity && foundCity.length > 0 ?(
                    foundCity.map((item)=>{
                        return(
                            <>
                             <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td>{item.mobile}</td>
                             </tr>
                            </>
                        )
                    })
                    ): (
                        data.map((item)=>{
                            return(
                                <>
                                 <tr>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.city}</td>
                                    <td>{item.mobile}</td>
                                 </tr>
                                </>
                            )
                        })
                    )
                }
                    
                </tbody>
                </table>
            </div>
            </>
        )
        }

export default Admin