function Addtodo(){
    return <div className="container mt-5">
    <div className="row kg-row d-flex justify-content-center">
        <div className="col-3">
    <input type="text" placeholder="Enter your task" />
        </div>
       <div className="col-3">
        <input type="date" />
       </div>
       <div className="col-2">
        <button type="button" className="btn btn-outline-success">Add</button>
       </div>
        </div>    
    </div>
}
export default Addtodo;