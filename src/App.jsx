import React, { useEffect, useRef, useState } from "react";
import { Menu } from "./components/Menu/Menu";
import { Loader } from "./components/Menu/Loader/Loader";

export const App = () => {
  const menuOptions = ["Home", "About", "Services", "Contact"];
  const [isMenuOpen, setisMenuOpen] = useState(false);
  
  const [scrollDistance, setScrollDistance] = useState(0); 
  const [loader, setLoader] = useState(true)

  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
     
      const distanceFromTop = window.scrollY;
      setScrollDistance(distanceFromTop); 
      

     
    };    
    window.addEventListener("scroll", handleScroll);

    
  }, []);

  useEffect(() => {
    const simulatedLoader = () => {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    };
    simulatedLoader();
  }, []);

  return (
    <>
   
   {!loader ? <div className="container">
      
    
      <nav className={`nav ${scrollDistance > 310? "middle-nav": ""}`}>
        <Menu menuOptions={menuOptions} isMenuOpen={isMenuOpen} scrollDistance={scrollDistance}/>
        {isMenuOpen ? (
          <span
            onClick={() => setisMenuOpen((status) => !status)}
            className={`material-symbols-outlined burguer ${scrollDistance > 310? "middle":""}`}
          >
            close
          </span>
        ) : (
          <span
            onClick={() => setisMenuOpen((status) => !status)}
            className={`material-symbols-outlined burguer ${scrollDistance > 310? "middle":""}`}
          >
            menu
          </span>
        )}
      </nav>
      <div className="hero">
        <div className="blur">
        <h1>Welcome To My Website</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur?
        </p>
        </div>
       
      </div>
      <section className="section-container">
        <h4>Content One
</h4>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!</p>
      </section>
      <section className="section-container">
        <h4>Content Two
</h4>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?</p>
      </section>
    </div> : <Loader loaderStatus={loader}/> }
   
    
    </>

  );
};
