import './Home.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/Images/Deer.jpg';
import img2 from '../assets/Images/Ethan.jpg';
import img3 from '../assets/Images/Pro-mariner.jpg';
import img4 from '../assets/Images/Theo.jpg';
import img5 from '../assets/Images/Oakley.jpg';
import img6 from '../assets/Images/Truck.jpg';

function Home (){
    return(

<>

{/* {Nav Section} */}

<section className='nav-sec'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><i className="bi bi-watch me-2"></i>Regal Wrist</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/"><i className="bi bi-house-door-fill"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><i className="bi bi-person"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><i className="bi bi-bag"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section>

{/* {Hero-section} */}

<section className='hero-sec py-5'>
    <div className='container'>
          <h6 className='hero-title'>Premium Collection 2026</h6>
          <h1 className='hero-main'>Regal Wrist</h1>
          <h3 className='hero-sub'>Defining Your Every Second</h3>
          <p className='hero-para text-center'>Discover the art of precision and the essence of luxury. <br />Our Time pieces are crafted for those who value elegance and excellence.</p>
          <div className='hero-btn'>
             <button className='btn-hero'>View Collections</button>
          </div>
    </div>
</section>

{/* {Product Section} */}

<section className="product-sec py-5">
  <div className="container">
    <h2 className='prod-title'>Our Featured Collection</h2>
    <div className="row g-4">

      <div className="col-lg-4 col-md-6 col-12">
        <div className="product-card">
          <img src={img1} alt="Deer" className="p-img" />
          <div className="p-details">
            <h4 className="p-name">Deer Classic</h4>
            <div className="p-price">
              <span className="old-price">₹18,500</span>
              <span className="new-price">₹14,490</span>
            </div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12">
        <div className="product-card">
          <img src={img2} alt="Ethan" className="p-img" />
          <div className="p-details">
            <h4 className="p-name">Ethan Elite</h4>
            <div className="p-price">
              <span className="old-price">₹48.000</span>
              <span className="new-price">₹45,800</span>
            </div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12">
        <div className="product-card">
          <img src={img3} alt="Pro-mariner" className="p-img" />
          <div className="p-details">
            <h4 className="p-name">Pro-Mariner</h4>
            <div className="p-price">
              <span className="old-price">₹1,08,299</span>
              <span className="new-price">₹1,03,199</span>
            </div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12">
        <div className="product-card">
          <img src={img4} alt="Theo" className="p-img" />
          <div className="p-details">
            <h4 className="p-name">Theo Modern</h4>
            <div className="p-price">
              <span className="old-price">₹12,000</span>
              <span className="new-price">₹9,500</span>
            </div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12">
        <div className="product-card">
          <img src={img5} alt="Oakley" className="p-img" />
          <div className="p-details">
            <h4 className="p-name">Oakley Black</h4>
            <div className="p-price">
              <span className="old-price">₹38,999</span>
              <span className="new-price">₹36,800</span>
            </div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12">
        <div className="product-card">
          <img src={img6} alt="Truck" className="p-img" />
          <div className="p-details">
            <h4 className="p-name">Truck Rugged</h4>
            <div className="p-price">
              <span className="old-price">₹18,000</span>
              <span className="new-price">₹15,000</span>
            </div>
            <button className="btn-cart">Add to Cart</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* {Services Section} */}

<section className="services-sec py-5">
  <div className="container">
    <div className="row g-4">
      
      <div className="col-md-4">
        <div className="service-box">
          <i className="bi bi-truck"></i>
          <h4 className='serv-head'>Free Worldwide Shipping</h4>
          <p className="serv-para text-muted">Premium packaging and tracked delivery for every order.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="service-box">
          <i className="bi bi-patch-check"></i>
          <h4 className='serv-head'>Authenticity Guaranteed</h4>
          <p className="serv-para text-muted">100% original timepieces with official brand certification.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="service-box">
          <i className="bi bi-shield-lock"></i>
          <h4 className='serv-head'>Extended Warranty</h4>
          <p className="serv-para text-muted">Enjoy peace of mind with our 2-year comprehensive warranty.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* {About Section} */}

<section className='about-sec py-5'>
   <div className='container'>
        <div className='about-text'>
           <h2 className='prod-title'>Who-We-Are</h2>
           <p className='about-para'>
  Founded in 2026, Regal Wrist began with a simple passion for horological excellence. 
  We believe that a watch is more than just a tool to tell time; it is a statement of 
  character and a legacy on your wrist. Each timepiece in our collection is meticulously 
  curated, combining traditional craftsmanship with modern innovation. Our commitment 
  to quality ensures that every second you define is backed by precision and elegance. 
  From classic designs to rugged explorers, we provide the perfect companion for 
  every milestone in your journey. Join us as we continue to redefine the art of 
  luxury timekeeping for the modern era.
</p>
        </div>
   </div>
</section>

{/* {contact section} */}

<section className='contact-sec py-5'>
    <div className='container'>
        <h2 className='prod-title'>Get In Touch</h2>
        <div className='row justify-content-center'>
            <div className='col-md-6 col-12'>
                <div className='contact-card'>
                    <form>
                        <div className="mb-4">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter Your Mail" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className='btn-hero'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

{/* {stats section} */}

<section className='stats-sec py-5'>
   <div className='container'>
        <div className='row text-center g-4'>
            
            <div className='col-md-3 col-6'>
                <div className='stat-card'>
                    <h2 className='stat-number'>15K+</h2>
                    <p className='stat-text'>Happy Clients</p>
                </div>
            </div>

            <div className='col-md-3 col-6'>
                <div className='stat-card'>
                    <h2 className='stat-number'>250+</h2>
                    <p className='stat-text'>Watch Models</p>
                </div>
            </div>

            <div className='col-md-3 col-6'>
                <div className='stat-card'>
                    <h2 className='stat-number'>18</h2>
                    <p className='stat-text'>Global Stores</p>
                </div>
            </div>

            <div className='col-md-3 col-6'>
                <div className='stat-card'>
                    <h2 className='stat-number'>12</h2>
                    <p className='stat-text'>Design Awards</p>
                </div>
            </div>

        </div>
   </div>
</section>

{/* {footer-section} */}

<footer className="footer-sec py-5">
  <div className="container">
    <div className="row g-4">
      
      <div className="col-md-3 col-12">
        <h4 className="footer-head">Regal Wrist</h4>
        <p className="footer-para">Redefining luxury timepieces since 2026. <br /> Excellence in every second.</p>
        <div className="footer-socials">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook mx-3"></i>
          <i className="bi bi-twitter-x"></i>
        </div>
      </div>

      <div className="col-md-3 col-12">
        <h5 className="footer-subhead">Quick Links</h5>
        <ul className="footer-links list-unstyled">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </div>

      <div className="col-md-3 col-12">
        <h5 className="footer-subhead">Support</h5>
        <ul className="footer-links list-unstyled">
          <li><Link to="/">Track Order</Link></li>
          <li><Link to="/">Return Policy</Link></li>
          <li><Link to="/">Watch Care</Link></li>
          <li><Link to="/">FAQs</Link></li>
        </ul>
      </div>

      <div className="col-md-3 col-12">
        <h5 className="footer-subhead">Visit Us</h5>
        <p className="footer-para">
          123 Watch, Watch Street<br />
          Bangalore, India<br />
          <strong>Email:</strong> regalwrist@gmail.com<br />
          <strong>Phone:</strong> 0000000000
        </p>
      </div>

    </div>

    <hr className="footer-hr mt-5" />
    <div className="text-center mt-4">
      <p className="copyright-text">&copy; 2026 Regal Wrist. All Rights Reserved.</p>
    </div>
  </div>
</footer>

</>


    )
}

export default Home;