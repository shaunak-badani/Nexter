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
          <h4 className="heading-4">World's best luxury homes</h4>
          <p className="featureText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-trophy"></use>
           </svg>
          <h4 className="heading-4">Only the best properties</h4>
          <p className="featureText">Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
           </svg>
          <h4 className="heading-4">All homes in top locations</h4>
          <p className="featureText">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-key"></use>
           </svg>
          <h4 className="heading-4">Your home in one week</h4>
          <p className="featureText">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-presentation"></use>
           </svg>
          <h4 className="heading-4">Top 1% realtors</h4>
          <p className="featureText">Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>
        <div className="feature">
          <svg className="featureIcon">
            <use xlinkHref="img/sprite.svg#icon-lock"></use>
           </svg>
          <h4 className="heading-4">Secure payments on Nexter</h4>
          <p className="featureText">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
        </div>
      </section>
      <div className="storyPictures">
          Story pictures
      </div>
      <div className="storyContent">
        Story content
      </div>
      <section className="homes">
        Homes
      </section>
      <section className="gallery">
        Gallery
      </section>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}
