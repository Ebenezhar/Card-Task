import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function App() {

  var inputs = [{
    pack : "FREE",
    price : 0,
    ticks : ["Single User","5GB Storage","Unlimited Public Projects","Community Access"],
    cross : ["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"],
  },
  {
    pack : "PLUS",
    price : 9,
    ticks : ["5 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"],
    cross : ["Monthly Status Reports"],
  },
  {
    pack : "PRO",
    price : 49,
    ticks : ["Unlimited Users","150GB Storage","Unlimited Public Projects","Community Access ","Unlimited Private Projects ","Dedicated Phone Support","Unlimited Free Subdomains","Monthly Status Reports"],
    cross : [],
  }
  ]

  return (     
  <section className="pricing py-5">
    <div className="container">
      <div className="row">
      {
        inputs.map((input) => {
          console.log("Ticks:",input.ticks);
          console.log("Cross:",input.cross);
          return <Card pack = {input.pack} price = {input.price} ticks = {input.ticks} cross = {input.cross} ></Card>
        })
      }
      </div>
    </div>
  </section>
  );
}

export default App;
