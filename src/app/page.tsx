import Image from "next/image";
import "./page.scss";
import "./sidebar.scss";
import "./features.scss";
import "./footer.scss";
import "./gallery.scss";
import "./header.scss";
import "./homes.scss";
import "./realtors.scss";
import "./sidebar.scss";
import "./story.scss";
import "./_typography.scss";

export default function Home() {
  return (
    <div className="container">
      <div className="sidebar">
        Sidebar
      </div>
      <header className="header">
        Header
      </header>
      <div className="realtors">
        Top 3 realtors
      </div>
      <section className="sectionFeatures">
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-global"></use>
           </svg>
          <h4 className="heading-4 heading-4-dark">World's best luxury homes</h4>
          <p className="featureText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-trophy"></use>
           </svg>
          <h4 className="heading-4 heading-4-dark">Only the best properties</h4>
          <p className="featureText">Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
           </svg>
          <h4 className="heading-4 heading-4-dark">All homes in top locations</h4>
          <p className="featureText">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-key"></use>
           </svg>
          <h4 className="heading-4 heading-4-dark">Your home in one week</h4>
          <p className="featureText">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-presentation"></use>
           </svg>
          <h4 className="heading-4 heading-4-dark">Top 1% realtors</h4>
          <p className="featureText">Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-lock"></use>
           </svg>
          <h4 className="heading-4 heading-4-dark">Secure payments on Nexter</h4>
          <p className="featureText">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
        </div>
      </section>
      <div className="storyPictures">
          <img src="img/story-1.jpeg" alt="Couple with new house" className="storyImg--1" />
          <img src="img/story-2.jpeg" alt="New house" className="storyImg--2" />
      </div>
      <div className="storyContent">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2-dark mb-md">&ldquo;The best decision of our lives.&rdquo;</h2>
        <p className="storyText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!</p>
        <button className="btn btnText">Find your own home</button>
      </div>
      <section className="homes">
        <div className="home">
          <img src="img/house-1.jpeg" alt="House 1" className="homeImg" />
          <svg className="homeLike">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="homeName">Beautiful Family House</h5>
          <div className="homeLocation">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>USA</p>
          </div>
          <div className="homeRooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>5 rooms</p>
          </div>
          <div className="homeArea">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>325 m<sup>2</sup></p>
          </div>
          <div className="homePrice">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$1,200,000</p>
          </div>
          <button className="btn homeBtn">Contact realtor</button>
        </div>

        <div className="home">
          <img src="img/house-2.jpeg" alt="House 2" className="homeImg" />
          <svg className="homeLike">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="homeName">Modern Glass Villa</h5>
          <div className="homeLocation">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Canada</p>
          </div>
          <div className="homeRooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>6 rooms</p>
          </div>
          <div className="homeArea">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>450 m<sup>2</sup></p>
          </div>
          <div className="homePrice">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$2,750,000</p>
          </div>
          <button className="btn homeBtn">Contact realtor</button>
        </div>

        <div className="home">
          <img src="img/house-3.jpeg" alt="House 3" className="homeImg" />
          <svg className="homeLike">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="homeName">Cozy Country House</h5>
          <div className="homeLocation">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>UK</p>
          </div>
          <div className="homeRooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>4 rooms</p>
          </div>
          <div className="homeArea">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>250 m<sup>2</sup></p>
          </div>
          <div className="homePrice">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$850,000</p>
          </div>
          <button className="btn homeBtn">Contact realtor</button>
        </div>

        <div className="home">
          <img src="img/house-4.jpeg" alt="House 4" className="homeImg" />
          <svg className="homeLike">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="homeName">Large Rustical Villa</h5>
          <div className="homeLocation">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Portugal</p>
          </div>
          <div className="homeRooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>6 rooms</p>
          </div>
          <div className="homeArea">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>400 m<sup>2</sup></p>
          </div>
          <div className="homePrice">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$1,950,000</p>
          </div>
          <button className="btn homeBtn">Contact realtor</button>
        </div>

        <div className="home">
          <img src="img/house-5.jpeg" alt="House 5" className="homeImg" />
          <svg className="homeLike">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="homeName">Majestic Palace House</h5>
          <div className="homeLocation">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Germany</p>
          </div>
          <div className="homeRooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>18 rooms</p>
          </div>
          <div className="homeArea">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>4230 m<sup>2</sup></p>
          </div>
          <div className="homePrice">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$9,500,000</p>
          </div>
          <button className="btn homeBtn">Contact realtor</button>
        </div>

        <div className="home">
          <img src="img/house-6.jpeg" alt="House 6" className="homeImg" />
          <svg className="homeLike">
            <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="homeName">Modern Family Apartment</h5>
          <div className="homeLocation">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Italy</p>
          </div>
          <div className="homeRooms">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>3 rooms</p>
          </div>
          <div className="homeArea">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-expand"></use>
            </svg>
            <p>100 m<sup>2</sup></p>
          </div>
          <div className="homePrice">
            <svg>
              <use xlinkHref="img/sprite.svg#icon-key"></use>
            </svg>
            <p>$600,000</p>
          </div>
          <button className="btn homeBtn">Contact realtor</button>
        </div>
        
      </section>
      <section className="gallery">
        <figure className="galleryItem galleryItem--1">
          <img src="img/gal-1.jpeg" alt="Gallery Image 1" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--2">
          <img src="img/gal-2.jpeg" alt="Gallery Image 2" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--3">
          <img src="img/gal-3.jpeg" alt="Gallery Image 3" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--4">
          <img src="img/gal-4.jpeg" alt="Gallery Image 4" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--5">
          <img src="img/gal-5.jpeg" alt="Gallery Image 5" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--6">
          <img src="img/gal-6.jpeg" alt="Gallery Image 6" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--7">
          <img src="img/gal-7.jpeg" alt="Gallery Image 7" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--8">
          <img src="img/gal-8.jpeg" alt="Gallery Image 8" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--9">
          <img src="img/gal-9.jpeg" alt="Gallery Image 9" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--10">
          <img src="img/gal-10.jpeg" alt="Gallery Image 10" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--11">
          <img src="img/gal-11.jpeg" alt="Gallery Image 11" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--12">
          <img src="img/gal-12.jpeg" alt="Gallery Image 12" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--13">
          <img src="img/gal-13.jpeg" alt="Gallery Image 13" className="galleryImg" />
        </figure>
        <figure className="galleryItem galleryItem--14">
          <img src="img/gal-14.jpeg" alt="Gallery Image 14" className="galleryImg" />
        </figure>
        {/* <img src="img/gal-2.jpeg" alt="Gallery Image 2" className="galleryImg" /> */}
      </section>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}
