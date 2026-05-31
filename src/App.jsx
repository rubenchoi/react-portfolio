import {
  about,
  getInTouch,
  mainBody,
  music,
  navBar,
} from "./editable-stuff/config";

const iconLabelMap = {
  github: "GitHub",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  blogger: "Blog",
  youtube: "YouTube",
  ethereum: "OpenSea",
  soundcloud: "SoundCloud",
};

function getIconLabel(iconClass) {
  const parts = iconClass.split("fa-");
  const key = parts[parts.length - 1]?.toLowerCase() || "";
  return iconLabelMap[key] || key || "Link";
}

function NavBar() {
  if (!navBar.show) {
    return null;
  }

  return (
    <nav className="top-nav">
      <a href="#about">About</a>
      <a href="#music">Music</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

function SocialLinks() {
  return (
    <div className="social-links" role="list" aria-label="Social links">
      {mainBody.icons.map((icon) => (
        <a
          key={icon.url}
          href={icon.url}
          target="_blank"
          rel="noreferrer"
          className="social-pill"
        >
          <i className={icon.image} aria-hidden="true" />
          <span>{getIconLabel(icon.image)}</span>
        </a>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg-orb orb-a" />
      <div className="hero-bg-orb orb-b" />
      {/* <p className="eyebrow">Artist + Technical Builder</p> */}
      <h1>
        <span>{mainBody.firstName}</span>
        <span>{mainBody.lastName}</span>
      </h1>
      <p className="hero-copy">{mainBody.message.trim()}</p>
      <SocialLinks />
      <a className="cta-link" href="#music">
        Explore releases
      </a>
    </section>
  );
}

function AboutSection() {
  if (!about.show) {
    return null;
  }

  return (
    <section className="about" id="about">
      <div className="about-photo-wrap">
        <img
          src={about.imageLink}
          alt="Ruben portrait"
          width={about.imageSize}
          height={about.imageSize}
          loading="lazy"
        />
      </div>
      <div className="about-copy">
        <h2>{about.heading}</h2>
        <p>{about.message}</p>
        <a className="resume-link" href={about.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </section>
  );
}

function MusicSection() {
  if (!music.show) {
    return null;
  }

  return (
    <section className="music" id="music">
      <div className="section-head">
        <h2>{music.heading}</h2>
        <p>Discography</p>
      </div>
      <div className="music-grid">
        {music.data.map((album) => (
          <article className="music-card" key={album.title}>
            <img src={album.logo} alt={`${album.title} cover`} loading="lazy" />
            <div className="card-body">
              <h3>{album.title}</h3>
              <p>{album.description}</p>
              <div className="stream-links">
                {Object.entries(album.urls).map(([platform, url]) => (
                  <a key={platform} href={url} target="_blank" rel="noreferrer">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  if (!getInTouch.show) {
    return null;
  }

  return (
    <section className="contact" id="contact">
      <h2>{getInTouch.heading}</h2>
      <p>{getInTouch.message}</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      {/* <ContactSection /> */}
      <footer>
        <p>
          honey312 (at) naver.com
        </p>
      </footer>
    </div>
  );
}