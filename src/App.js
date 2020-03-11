import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light">
          <a className="navbar-brand" href="index.html">SALON</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="about.html">About</a>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Services
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="service.html">Service A</a>
                          <a className="dropdown-item" href="service.html">Service B</a>
                          <a className="dropdown-item" href="service.html">Service C</a>
                          <a className="dropdown-item" href="service.html">Service D</a>
                      </div>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact</a>
                  </li>
              </ul>
          </div>
      </nav>
      <header id="carouselExampleCaptions" className="carousel slide header-slider" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner header-slider">
              <div className="carousel-item top-slider active">
                  <img src="https://images.pexels.com/photos/235462/pexels-photo-235462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      className="d-block w-100 h-50" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
              </div>
              <div className="carousel-item top-slider">
                  <img src="https://images.pexels.com/photos/1102660/pexels-photo-1102660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      className="d-block w-100 h-50" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
              </div>
              <div className="carousel-item top-slider">
                  <img src="https://images.pexels.com/photos/269110/pexels-photo-269110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      className="d-block w-100 h-50" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
      </header>
      <section className="container">
          <div className="row">
              <div className="col-12">
                  <h1 className="text-center">
                      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                  </h1>
                  <hr />
                  <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </p>
              </div>
          </div>
      </section>
      <section className="container">
          <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="card">
                      <img src="https://images.unsplash.com/photo-1571942479943-ab37bb453c07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">Service A</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                              card's content.</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="card">
                      <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">Service B</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                              card's content.</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="card">
                      <img src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">Service C</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                              card's content.</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="card">
                      <img src="https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">Service D</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                              card's content.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="parallax" className="container-fluid">
          <div className="row">
              <div className="col-12">
                  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                      <div className="carousel-inner">
                          <div className="carousel-item active">
                          <blockquote className="blockquote text-center p-5">
                              <img src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200&h=200" className="rounded mx-auto d-block mb-4" alt="..." />
                              <p className="mb-0 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                          </blockquote>
                          </div>
                          <div className="carousel-item">
                          <blockquote className="blockquote text-center p-5">
                              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" className="rounded mx-auto d-block mb-4" alt="..." />
                              <p className="mb-0 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                          </blockquote>
                          </div>
                          <div className="carousel-item">
                          <blockquote className="blockquote text-center p-5">
                              <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200" className="rounded mx-auto d-block mb-4" alt="..." />
                              <p className="mb-0 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                          </blockquote>
                          </div>
                      </div>
                  </div>                    
              </div>
          </div>
      </section>
      <section className="container">
          <div className="row">
              <div className="col-xs-12 col-md-6">
                  <div className="card bg-dark text-white">
                      <img src="https://images.pexels.com/photos/240834/pexels-photo-240834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img" alt="..." />
                      <div className="card-img-overlay">
                          <form style={{height: 330 + 'px'}}>
                              <div className="form-group">
                                  <input type="text" className="form-control" id="" placeholder="Full Name" />
                              </div>
                              <div className="form-group">
                                  <input type="email" className="form-control" id="" placeholder="Email address" />
                              </div>
                              <div className="form-group">
                                  <input type="phone" className="form-control" id="" placeholder="Mobile" />
                              </div>
                              <div className="form-group">
                                  <textarea className="form-control" id="" placeholder="Message" rows="4"></textarea>
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                          </form>
                      </div>
                  </div>
              </div>
              <div className="col-xs-12 col-md-6">
                  <div className="card bg-dark text-white">
                      <img src="https://images.pexels.com/photos/408503/pexels-photo-408503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" className="card-img" alt="..." />
                      <div className="card-img-overlay">                      
                          <iframe style="width: 100%; height: 100%;" title="Google-map-card"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.7036378967537!2d88.48880621413963!3d22.402527185270564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02139cece745c1%3A0x903c05c3ec83b14a!2sKIDS%20N%20HERS!5e0!3m2!1sen!2sin!4v1578747336312!5m2!1sen!2sin" 
                          frameBorder="0" style={{border: 0 + 'px'}} allowFullScreen="0"></iframe> 
                      </div>
                  </div>               
              </div>
          </div>
      </section>
      <footer>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-12 text-center">
                      <p>
                          <a href="">
                              All Rights Reserved © Salon 2020
                          </a>
                      </p>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
