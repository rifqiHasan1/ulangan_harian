import React from "react";
import photo from "../assets/th.jpg"
import photo1 from "../assets/th1.jpg"

function Header(props) {
  return (
    <header>
      <div className="w-full  bg-white px-16 py-5 rounded rounded-br-3xl">
        <header className="flex justify-between items-center w-full text-black">
          <h1 className="text-xl w-1/2 font-bold">Ristore</h1>
          <nav className="w-1/2 flex items-center justify-between font-semibold">
            <a className="border-b-2" href="#">
              Home
            </a>
            <a href="#">Menu</a>
            <a href="#">Revivew</a>
            <a href="#">photos</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <section className="grid grid-cols-3 gap-5 mt-20 ">
          <div className="col-span-3 flex items-center">
            <div className=" pl-10 text-black">
              <h1 className="text-5xl  font-bold leading-tight">
                Nasi goreng Setan <br /> Khas Madura
              </h1>
              <p className="mt-5 text-md font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                adipisci, labore ratione corporis sunt <br /> vero dicta tenetur
                recusandae laborum consectetur ipsa, totam eligendi numquam id
                ipsum harum vel a nesciunt?
              </p>
              <p className="mt-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, quam?
              </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, facere qui. Temporibus sit mollitia distinctio repellat<br/> iusto accusantium quibusdam soluta explicabo itaque minus enim veritatis dicta harum inventore assumenda repellendus,<br/> unde quia rem maxime tempora ex neque vero fugit. Molestias.</p>
              <h1 className="text-3xl font-bold">Menu :</h1>
            </div>
            <div className="  ">
         <img className="ml-11 max-h-full" src={photo} alt="" />
         <img className="ml-72 max-h-full" src={photo1} alt="" />
         <img className="ml-11 max-h-full" src={photo} alt="" />
         
        
          </div>
          </div>
         
          
        </section>
        
      </div>
    </header>
  );
}

export default Header;
