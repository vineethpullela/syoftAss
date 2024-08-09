import "./index.css"

const Dashboard=()=>{
    const data=JSON.parse(localStorage.getItem("user"))
    return(
        <div className="dash-container">
            <h1 className="dash-header">User Details</h1>
            <br/>
            <h1 className="name">name: {data.name}</h1>
            <p className="email">email: {data.email}</p>
            <p className="company">company: {data.company}</p>
            <p className="password">password: *******</p>
        </div>
    )
}



export default Dashboard