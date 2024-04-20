import Cards from "./Cards";
function Tours ({tours,removeTour}) {
    return (
        <div className = "container">
            <div>
                <h2 className = "Title"> Plan Your Tour </h2>
            </div>
            <div className ="cards">
                {
                    tours.map( (tour) => {
                        return <Cards key={tours.id} {...tour} removeTour={removeTour}></Cards>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;