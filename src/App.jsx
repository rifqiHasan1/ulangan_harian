import React from "react";
import Header from "./component/header"
import Menu from "./component/menu"


function App() {
  const[menu,setMenu] = React.useState([
    {
      menu: "pecel lele",
      link:"https://s3.bukalapak.com/uploads/content_attachment/d820dfad30e8d76212ae45c5/original/resep_pecel_lele_1.jpg",
      alt:"",
      konten:"Rp.55.000"
    },
    {
      menu: "nasi goreng istimewa",
      link:"https://tse4.mm.bing.net/th?id=OIP.dJhBBrLYRAChM4m8EdRn7AHaEK&pid=Api&P=0&w=300&h=169",
      alt:"",
      konten:"Rp.50.000"
    },
    {
      menu: "es jeruk",
      link:"https://wanitamedan.com/wp-content/uploads/2017/06/foto-es-jeruk-peras.jpg",
      alt:"",
      konten:"Rp.5.000"
    }
  ])
 
 return(
  <React.Fragment>
    <Header></Header>
    <div className="col-span-5 grid grid-cols-5 gap-5 overflow-auto px-32">
            {menu.map((mn, index) => (
              <Menu 
                key={index}
                menu={mn.menu}
                link={mn.link}
                alt={mn.alt}
                konten={mn.konten}
              ></Menu>
            ))}
    </div>
    <div className="bg-gray-600">
     <p className="text-white text-center" >&copy; Rifqi</p>
     <p className="text-white text-center">&copy; hasanrifqi0905@gmail.com</p>
     <p className="text-white text-center" >&copy; hub:0821928343</p>
    </div>
  </React.Fragment>
 )

 
}

export default App;
