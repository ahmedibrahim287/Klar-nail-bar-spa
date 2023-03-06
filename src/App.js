import './App.css';
import logo from "./images/klar.png"
import header from "./images/header.jpg"
import slider from "./images/slider-card1.jpg"
import slider2 from "./images/slider-card2.jpg"
import slider3 from "./images/slider-card3.jpg"
import starts from "./images/startspng.png"
import vector from "./images/Vector Smart Object.png"
import vector2 from "./images/Vector Smart Object2.png"
import vector11 from "./images/Vector Smart Object11.png"
import section4 from "./images/section4-img1.png"
import section42 from "./images/section4-img2.png"
import section43 from "./images/section4-img3.png"
import section44 from "./images/section4-img4.png"
import section4Layer from "./images/section4-imglayer.png"
import iconer from "./images/“.png"
import email from "./images/email.png"
import facebook from "./images/facebook.png"
import insta from "./images/instagram.png"
import twitter from "./images/twitter.png"
import phone from "./images/phone.png"
import sectioner from "./images/section2-img1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <main>
        <nav className="container navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt='asdf' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
              <ul className="navbar-nav nav-links">


                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>


                <li className="nav-item newwww m-0">
                  <a className="nav-link dropdown-toggle " href="#">
                    shop
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="hovering-drop m-0"><a className="dropdown-item" href="#">Reserve Session</a></li>
                    <li className="hovering-drop m-0"><a className="dropdown-item" href="#">Reserve Product</a></li>
                    <li className="hovering-drop m-0"><a className="dropdown-item" href="#">Reservation Ticket</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item newwww  m-0">
                  <a className="nav-link dropdown-toggle" href="#">
                    pages
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="hovering-drop m-0"><a className="dropdown-item" href="#">Reserve Session</a></li>
                    <li className="hovering-drop m-0"><a className="dropdown-item" href="#">Reserve Product</a></li>
                    <li className="hovering-drop m-0"><a className="dropdown-item" href="#">Reservation Ticket</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  newwww m-0">
                  <a className="nav-link dropdown-toggle">
                    reserve
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="hovering-drop m-0"><a className="dropdown-item" href="#">Reserve Session</a></li>
                    <li className="hovering-drop m-0"><a className="dropdown-item" href="#">Reserve Product</a></li>
                    <li className="hovering-drop m-0"><a className="dropdown-item" href="#">Reservation Ticket</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">contact</a>
                </li>

              </ul>
              <ul className="navbar-nav social-icon d-flex flex-row">
                <li className="nav-icons">
                  <i className="fal fa-user"></i>
                </li>
                <li className="nav-icons">
                  <i className="far fa-shopping-bag"></i>
                </li>
                <li className="nav-icons">
                  <i className="far fa-heart"></i>
                </li>
                <li className="nav-icons">
                  <i className="far fa-search"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- end nav bar --> */}

        {/* <!-- start header --> */}
        <header className="container-fluid">
          <div className="row">
            <div id="slider1" className="carousel slide col-sm-8 p-0" data-bs-ride="carousel">
              <ol className="carousel-indicators carousel-indicators1 mb-4">
                <li data-bs-target="#slider1" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#slider1" data-bs-slide-to="1"></li>
                <li data-bs-target="#slider1" data-bs-slide-to="2"></li>
                <li data-bs-target="#slider1" data-bs-slide-to="3"></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="imgHeader">
                    <div className="p1">
                    </div>
                  </div>
                  <div className="overlay">
                    <div className="card cardHeader" data-aos="fade-up" data-aos-offset="300"
                      data-aos-easing="ease-in-sine" data-aos-duration="1600">
                      <div className="card-body ">
                        <h5 className="card-title cardHedTitle">face whitening<br />session</h5>
                        <p className="card-text cardHedText">PRICE <small className="price">50.00
                          <small>RS</small></small>
                        </p>

                        <a href="#" className="btn btn-primary reserve-btn">RESERVE NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="imgHeader">
                    <div className="p2"></div>
                  </div>
                  <div className="overlay">
                    <div className="card cardHeader " data-aos="fade-up" data-aos-offset="300"
                      data-aos-easing="ease-in-sine" data-aos-duration="1600">
                      <div className="card-body">
                        <h5 className="card-title cardHedTitle">face whitening<br />session</h5>
                        <p className="card-text cardHedText">PRICE <small className="price">50.00
                          <small>RS</small></small>
                        </p>
                        <a href="#" className="btn btn-primary reserve-btn">RESERVE NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="imgHeader">
                    <div className="p3"></div>
                  </div>
                  <div className="overlay">
                    <div className="card cardHeader" data-aos="fade-up" data-aos-offset="300"
                      data-aos-easing="ease-in-sine" data-aos-duration="1600">
                      <div className="card-body">
                        <h5 className="card-title cardHedTitle">face whitening<br />session</h5>
                        <p className="card-text cardHedText">PRICE <small className="price">50.00
                          <small>RS</small></small>
                        </p>
                        <a href="#" className="btn btn-primary reserve-btn">RESERVE NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="imgHeader">
                    <div className="p4"></div>
                  </div>
                  <div className="overlay">
                    <div className="card cardHeader" data-aos="fade-up" data-aos-offset="300"
                      data-aos-easing="ease-in-sine" data-aos-duration="1600">
                      <div className="card-body">
                        <h5 className="card-title cardHedTitle">face whitening<br />session</h5>
                        <p className="card-text cardHedText">PRICE <small className="price">50.00
                          <small>RS</small></small>
                        </p>
                        <a href="#" className="btn btn-primary reserve-btn">RESERVE NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev carousel-control-prev1 wow animate__animated animate__fadeInRightBig animate__slow"
                type="button" data-bs-target="#slider1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
            </div>
            <div className="header-con col-sm-4 p-0">
              <img src={header} />
            </div>
          </div>
        </header>
        {/* <!-- end header -->

        <!-- start section1 --> */}
        <section className="section1">
          <ul className="palette  " data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine"
            data-aos-duration="1600">
            <li>
              <div className="mb-3 mt-3"></div>
            </li>
            <li>
              <div className="mb-3"></div>
            </li>
            <li>
              <div className="mb-3"></div>
            </li>
            <li>
              <div className="mb-3"></div>
            </li>
          </ul>
          <div className="leftSide">
            <div className="leftImg"></div>
            <div className="mainImg wow animate__animated animate__fadeInUpBig animate__slow"></div>
          </div>
          <div className="rightSide">
            <div className="card cardSection">
              <div className="card-body cardBodySection">
                <div className="d-flex align-items-center mb-3 abg">
                  <div className="dot"></div>
                  <h5 className="card-title cardTitleSection">ABOUT US
                  </h5>
                  <hr className="hrAbout" />
                </div>
                <h6 className="card-subtitle mb-2  cardSubSection">Bring Your Natural Beauty</h6>
                <p className="card-text cardTextSection1">We Belong to Something Beautiful</p>
                <p className="card-text cardTextSection2">
                  Our company announced a new tagline and manifesto<br />
                  toreinforce our dedication to fostering belonging<br />
                  among all clients and employees and to publicly <br />
                  strive for a more inclusive vision for retail in the Americas.
                </p>
                <div className="d-flex justify-content-between mb-5">
                  <a href="#" className="card-link newCrardLinkClass" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back" data-aos-duration="1000">NATURALSKINCARE</a>
                  <a href="#" className="card-link newCrardLinkClass" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back" data-aos-duration="1000">Eco-Friendly</a>
                </div>
                <div className="d-flex justify-content-between">
                  <a href="#" className="card-link newCrardLinkClass" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back" data-aos-duration="1000">NATURAL
                    SKINCARE</a>
                  <a href="#" className="card-link newCrardLinkClass" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back" data-aos-duration="1000">Eco-Friendly</a>
                </div>



                <a href="#" className="btn btn-primary discover-btn mt-4">DISCOVER NOW</a>
              </div>
            </div>
            <div className="rightImg"></div>
          </div>
        </section>
        {/* <!--   end section1  -->
        <!--   start section2  --> */}
        <section className="section2">
          <div className="card cardSection2">
            <div className="card-body cardBodySection">
              <h6 className="card-subtitle mb-2  cardSubSection2">BEST QUALITY</h6>
              <p className="card-text cardTextSection2-1">Featured Products</p>
              <p className="card-text cardTextSection2-2">
                Lorem ipsum dolor sit amet, adipiscing <br />elit, sed do eiusmod tempor incididunt.
              </p>
              <a href="#" className="btn btn-primary discover-btn mt-4">VIEW ALL PRODUCTS</a>
            </div>
          </div>
          <div className="slider-right">
            <div id="aaa" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container d-flex justify-content-center flex-wrap new-card">
                    <div className="card styling">
                      <img src={slider} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                        <p className="card-text cardProductText">Enormous Wool Shoes</p>
                        <div className="d-flex justify-content-between align-items-baseline  ">
                          <p className="card-text cardPriceText">150.00 RS
                          </p>
                          <img src={starts} className="w-25 stars " />
                        </div>
                      </div>
                    </div>
                    <div className="card styling">
                      <img src={slider2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                        <p className="card-text cardProductText">Enormous Wool Shoes</p>
                        <div className="d-flex justify-content-between align-items-baseline  ">
                          <p className="card-text cardPriceText">150.00 RS
                          </p>
                          <img src={starts} className="w-25 stars" />
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container d-flex justify-content-center flex-wrap new-card">
                    <div className="card styling">
                      <img src={slider} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                        <p className="card-text cardProductText">Enormous Wool Shoes</p>
                        <div className="d-flex justify-content-between align-items-baseline  ">
                          <p className="card-text cardPriceText">150.00 RS
                          </p>
                          <img src={starts} className="w-25 stars" />
                        </div>
                      </div>
                    </div>
                    <div className="card styling">
                      <img src={slider2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                        <p className="card-text cardProductText">Enormous Wool Shoes</p>
                        <div className="d-flex justify-content-between align-items-baseline  ">
                          <p className="card-text cardPriceText">150.00 RS
                          </p>
                          <img src={starts} className="w-25 stars" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev carousel-control-prev2" type="button" data-bs-target="#aaa"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon carousel-control-prev-icon2" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next carousel-control-next2" type="button" data-bs-target="#aaa"
                data-bs-slide="next">
                <span className="carousel-control-next-icon carousel-control-next-icon2" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <img src={sectioner} />
          </div>
        </section>
        {/* <!--   end section2  -->

        <!--   start section3  --> */}
        <section className="section3 mt-5 position-relative">
          <img className="position-absolute section3-firstImg" src={vector} alt="as" />
          <img className="position-absolute section3-secImg" src={vector2} alt="as" />
          <div className="card cardSection2 m-0 text-center mb-5">
            <div className="card-body cardBodySection">
              <h6 className="card-subtitle mb-2  cardSubSection2">BEST BEAUTY</h6>
              <p className="card-text cardTextSection2-1">Our Bestsellers</p>

            </div>
          </div>
          <div id="bbb" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid d-flex justify-content-center flex-wrap w-85">
                  <div className="card section3-card">
                    <img src={slider} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                      <p className="card-text cardProductText">Enormous Wool Shoes</p>
                      <div className="d-flex justify-content-between align-items-baseline  ">
                        <p className="card-text cardPriceText">150.00 RS
                        </p>
                        <img src={starts} className="w-25 stars" />
                      </div>
                    </div>
                  </div>
                  <div className="card section3-card">
                    <img src={slider2} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                      <p className="card-text cardProductText">Enormous Wool Shoes</p>
                      <div className="d-flex justify-content-between align-items-baseline  ">
                        <p className="card-text cardPriceText">150.00 RS
                        </p>
                        <img src={starts} className="w-25 stars" />
                      </div>
                    </div>
                  </div>
                  <div className="card section3-card">
                    <img src={slider3} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                      <p className="card-text cardProductText">Enormous Wool Shoes</p>
                      <div className="d-flex justify-content-between align-items-baseline  ">
                        <p className="card-text cardPriceText">150.00 RS
                        </p>
                        <img src={starts} className="w-25 stars" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container-fluid d-flex justify-content-center flex-wrap w-85">
                  <div className="card section3-card">
                    <img src={slider} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                      <p className="card-text cardProductText">Enormous Wool Shoes</p>
                      <div className="d-flex justify-content-between align-items-baseline  ">
                        <p className="card-text cardPriceText">150.00 RS
                        </p>
                        <img src={starts} className="w-25 stars" />
                      </div>
                    </div>
                  </div>
                  <div className="card section3-card">
                    <img src={slider2} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                      <p className="card-text cardProductText">Enormous Wool Shoes</p>
                      <div className="d-flex justify-content-between align-items-baseline  ">
                        <p className="card-text cardPriceText">150.00 RS
                        </p>
                        <img src={starts} className="w-25 stars" />
                      </div>
                    </div>
                  </div>
                  <div className="card section3-card">
                    <img src={slider3} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title cardProductTitle">MAKEUP, SKINCARE, SUNSCREEN</h5>
                      <p className="card-text cardProductText">Enormous Wool Shoes</p>
                      <div className="d-flex justify-content-between align-items-baseline  ">
                        <p className="card-text cardPriceText">150.00 RS
                        </p>
                        <img src={starts} className="w-25 stars" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev carousel-control-prev3" type="button" data-bs-target="#bbb"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon carousel-control-prev-icon3" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next carousel-control-next3" type="button" data-bs-target="#bbb"
              data-bs-slide="next">
              <span className="carousel-control-next-icon carousel-control-next-icon3" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="section3Btn">
              <a href="#" className="btn btn-primary  mt-4">VIEW ALL PRODUCTS</a>
            </div>
          </div>
        </section>
        {/* <!--   end section3  -->
        <!--   start section4  --> */}
        <section className="section4">
          <div className="card text-white section4-card">
            <img src={section4} className="card-img" alt="..." />
            <img src={section4Layer}
              className="card-img-overlay w-100 p-0 border-0 wow animate__animated animate__fadeInUpBig animate__slow"
              alt="..." />
            <div className="card-img-overlay text-center section4-overlay">
              <h5 className="card-title m-0 section4-Protitle">MAKEUP</h5>
              <p className="card-text  section4-Prodetil">10 PRODUCTS</p>
              <i className="fas fa-chevron-right section4-icon " style={{ cursor: "pointer" }}></i>
            </div>
          </div>
          <div className="card text-white section4-card">
            <img src={section42} className="card-img" alt="..." />
            <img src={section4Layer}
              className="card-img-overlay w-100 p-0 border-0 wow animate__animated animate__fadeInDownBig animate__slow"
              alt="..." />
            <div className="card-img-overlay text-center section4-overlay">
              <h5 className="card-title m-0 section4-Protitle">MAKEUP</h5>
              <p className="card-text  section4-Prodetil">2 PRODUCTS</p>
              <i className="fas fa-chevron-right section4-icon" style={{ cursor: "pointer" }}></i>
            </div>
          </div>
          <div className="card text-white section4-card">
            <img src={section43} className="card-img" alt="..." />
            <img src={section4Layer}
              className="card-img-overlay w-100 p-0 border-0 wow animate__animated animate__fadeInUpBig animate__slow"
              alt="..." />
            <div className="card-img-overlay text-center section4-overlay">
              <h5 className="card-title m-0 section4-Protitle">MAKEUP</h5>
              <p className="card-text  section4-Prodetil">5 PRODUCTS</p>
              <i className="fas fa-chevron-right section4-icon" style={{ cursor: "pointer" }}></i>
            </div>
          </div>
          <div className="card text-white section4-card">
            <img src={section44} className="card-img" alt="..." />
            <img src={section4Layer}
              className="card-img-overlay w-100 p-0 border-0 wow animate__animated animate__fadeInDownBig animate__slow"
              alt="..." />
            <div className="card-img-overlay text-center section4-overlay">
              <h5 className="card-title m-0 section4-Protitle">MAKEUP</h5>
              <p className="card-text  section4-Prodetil">15 PRODUCTS</p>
              <i className="fas fa-chevron-right section4-icon" style={{ cursor: "pointer" }}></i>
            </div>
          </div>
        </section>
        {/* <!--   end section4  -->
        <!--   start section5  --> */}
        <section className="section5 d-flex justify-content-around align-items-center">
          <div className="text-center text-uppercase ">
            <img src={iconer} alt="asd" className="mb-5" />
            <p className="section5-test m-0">TESTIMONIALS</p>
            <p className="section5-customer">Customers Said</p>
          </div>
          <img src={vector11} alt="asd" />
        </section>
        {/* <!--   end section5  -->
        <!-- footer --> */}
        <footer className="d-flex justify-content-center  ">
          <div className="last text-left text-uppercase ">
            <p className="footer-text m-0">Newsletter</p>
            <p className="footer-info">Get free 30% discount for all products on your first order.</p>
          </div>
          <div className="last text-left text-uppercase ms-5 ">
            <p className="footer-text m-0">Answer Your Questions</p>
            <p className="footer-info">You have questions that need our expert answer!<br /> please, call in.</p>
          </div>
          <div className="last text-left text-uppercase border-0 ms-5">
            <p className="footer-text">CONTACT US</p>
            <div className="d-flex">
              <img src={email} alt='ASda' className="email" />
              <p className="footer-info">info@klar.com</p>
            </div>
            <div className="d-flex">
              <img src={facebook} alt='ASda' className="social" />
              <img src={twitter} alt='ASda' className="social" />
              <img src={insta} alt='ASda' className="social" />
              <p className="footer-info">KLARKSA</p>
            </div>
          </div>
        </footer>
        <div className="d-flex justify-content-start mt-5 lastF">
          <input type="email" id="email" name="email" placeholder="Email Address" />
          <div className="">
            <a href="#" className="btn btn-primary  last-btn text-uppercase">send now</a>
          </div>
          <img src={phone} alt="asdf" className="phone" />
          <p className="footer-num">+966 56 165 2276
          </p>
        </div>
        {/* <!-- copyrights --> */}
        <div className=" position-relative">
          <hr className="lastHr" />
          <p className="text-start copyright">Copyright © 2022 Klar. All Rights Reserved.</p>

        </div>
      </main>

    </div>
  );
}

export default App;
