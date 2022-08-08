import React,{useState,useEffect} from 'react'
import './model.css'



const Model = () => {
    const[visitor,setVisitor] = useState({
        name:"",email:"",city:"",mobile:""
    });
    
    let name,value
    const handleInput=(e)=>{
        name = e.target.name;
        value = e.target.value;
        
        setVisitor({...visitor,[name]:value})    
    }

    const postData =async (event)=>{
        event.preventDefault();

    const{name,email,city,mobile} = visitor;
    const response = await fetch(process.env.REACT_APP_POST,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            name,email,city,mobile
        })
    });
    const data = await response.json();
    console.log(data);

    if(visitor.name.length <=2){
        alert("Please fill your name properly");
    }
    else if(visitor.email.indexOf("@") === -1){
        alert("Please fill your email address");
    }
    else{
        alert("Registered Successfully");
    }
    setVisitor({
        name:"",email:"",city:"",mobile:""
    })

    // getData();
    // console.log('Ip',myIp)
  };


//   const [myIp, setmyIP] = useState('');

//       {/* creating function to load ip address from the API */}
//       const getData = async () => {
//         const res = await axios.get('https://geolocation-db.com/json/')
//         console.log(res.data);
//         setmyIP(res.data)
//       }


  return (
    <>
    <div className="modal fade mymodel" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Contact Us</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form  method='POST'>
        <div className="modal-body">
                        <div className="form-group">
                            <label>Full Name :</label>
                            <input type="text" name="name" value={visitor.name} onChange={handleInput} placeholder="First Name" required></input>
                        </div>
                        <div className="form-group">
                            <label>Email Address :</label>
                            <input type="email"name='email' value={visitor.email} onChange={handleInput} placeholder="Email address" required></input>
                        </div>                       
                        <div className="form-group">
                            <label>City :</label>
                            <input type="text" name='city' value={visitor.city} onChange={handleInput} placeholder="Name of the City" required></input>
                        </div>
                        <div className="form-group">
                            <label>Mobile no :</label>
                            <input type="text" name='mobile' value={visitor.mobile} onChange={handleInput} placeholder="Mobile Number" required></input>
                        </div>
                </div>
            <div className="modal-footer">
                <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn" onClick={postData}>Submit</button>
            </div>
        </form>
        </div>
    </div>
    </div>
    </>
  )}

export default Model