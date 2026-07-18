import Image from "next/image";
import "./page.scss";
import "./sidebar.scss";
import "./features.scss";
import "./footer.scss";
import "./gallery.scss";
import "./header.scss";
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
      </section>
    </div>
  );
}
