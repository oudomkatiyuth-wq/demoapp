import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import ProductCard from "./assets/components/ProductCard";
import { courses } from "./data/courses";
function App() {
  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <Header/>
        {/* Products */}
        <section className="products">

          {/* Product 1 */}
       {/* <ProductCard title ="Adobe After Effects" price="20.00" des="lorem ipsum dolor sit amet, consecteture asipiscing elit." img="c1.png"/>
       <ProductCard title ="Adobe Photoshop"price="20.00" des="lorem ipsum dolor sit amet, consecteture asipiscing elit." img="c2.png"/>
       <ProductCard titel ="Adobe Illustrator" price="20.00" des="lorem ipsum dolor sit amet, consecture asipisicing elit." img="c3.png"/>
       <ProductCard titel ="Adobe Premiere Pro" price="20.00" des="lorem ipsum dolor sit amet, consecture asipisicing elit." img="c4.png"/> */}

       {
        courses.map((c) => ( 
           <ProductCard 
          key={c.id} 
          title={c.title}
          des={c.description} 
          image={c.image}
          price={c.price}
          soldOut={c.soldOut}
          />))
         
       }
     
        </section>

        {/* Bottom */}
       <Footer/>
      
      </div>

      <footer></footer>
    </div>
  );
}

export default App;

// props

