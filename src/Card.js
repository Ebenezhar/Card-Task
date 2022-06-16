function Card(props){
  // console.log("props",props);
  let tickValue = props.ticks;
  let crossValue = props.cross;
  // console.log("TiCK:",tickValue);
  // console.log("CroSS:",crossValue);
  return(  
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.pack}</h5>
            <h6 className="card-price text-center">${props.price}<span className="period">/month</span></h6>
            <ul className="fa-ul"> 
              {
                tickValue.map((element1)=><li><span className="fa-li"><i className="fas fa-check"></i></span>{element1}</li>)
                
              }
              {
                crossValue.map((element2)=><li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>
                {element2}</li>)
              }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
    </div>);
}
export default Card;