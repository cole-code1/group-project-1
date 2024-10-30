
function Home({students}){
    return(
        <div className="container">
            <div className="row row-cols-4">
                {students.map((student)=>(
       <div className="cols mb-3" key={student.id}>
        <div className="card">
            <img src={student.image} classname="card-image-top" alt={student.name}/>
            <div className="card-body">
                <h2 className="card-title">{student.name}</h2>
                <p className="card-text">Age:{student.age}</p>
                <p className="card-text">Course:{student.course}</p>
            </div>
        </div>
       </div>
        ))}
        </div>
        </div>
    
)

    


}
export default Home
