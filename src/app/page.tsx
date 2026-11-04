
import Image from "next/image";

const skills = [
  "Graphic Design",
  "Logo Design",
  "Banner & Poster",
  "Branding",
  "Web Development",
  "Roblox Game Development",
  "Luau Scripting",
  "Software Development",
  "UI/UX Design",
  "Database & Backend",
];

const projects = [
  {
    number: "01",
    name: "Voice Chat Fishing World",
    category: "ROBLOX GAME DEVELOPMENT",
    description:
      "Pengembangan game Roblox dengan pengalaman memancing, eksplorasi dunia, dan fitur sosial multiplayer.",
    link: "https://www.roblox.com/id/games/131448486563151/VOICE-CHAT-FISHING-WORLD",
  },
  {
    number: "02",
    name: "Syadzz Store",
    category: "WEB DEVELOPMENT",
    description:
      "Website layanan kalkulator dan toko digital dengan sistem pemesanan dan integrasi backend.",
    link: "https://rasyad0907-a11y.github.io/syadzz-store/",
  },
];

const experiences = [
  {
    type: "ORGANIZATION",
    name: "UKM Esports",
    place: "Universitas Perjuangan Tasikmalaya",
    description: "Aktif dalam organisasi UKM Esports di lingkungan kampus.",
  },
  {
    type: "ORGANIZATION",
    name: "Karang Taruna",
    place: "Organisasi Kepemudaan",
    description: "Aktif dalam kegiatan organisasi kepemudaan dan kemasyarakatan.",
  },
  {
    type: "COMMITTEE",
    name: "Islamic Fun Camp",
    place: "Pengalaman Kepanitiaan",
    description: "Berpartisipasi sebagai panitia dalam kegiatan Islamic Fun Camp.",
  },
  {
    type: "COMMITTEE",
    name: "Sehati",
    place: "Pengalaman Kepanitiaan",
    description: "Berpartisipasi sebagai panitia dalam kegiatan Sehati.",
  },
];

const education = [
  {
    year: "2013 — 2019",
    name: "SD Parakannyasag 2",
    level: "Sekolah Dasar",
  },
  {
    year: "2019 — 2022",
    name: "MTsN 2 Tasikmalaya",
    level: "Sekolah Menengah Pertama",
  },
  {
    year: "2022 — 2025",
    name: "SMK Negeri 1 Tasikmalaya",
    level: "Desain Komunikasi Visual (DKV)",
  },
];

const certificates = [
  {
    name: "SERTIFIKAT KOMPETENSI",
    issuer: "Penyelenggara",
    year: "2025",
    image: "/certificates/sertifikat-1.png",
  },
  {
    name: "SERTIFIKAT SKILL PASSPORT",
    issuer: "Penyelenggara",
    year: "2024",
    image: "/certificates/sertifikat-2.png",
  },
  {
    name: "SERTIFIKAT PKL (Praktik Kerja Lapangan)",
    issuer: "Penyelenggara",
    year: "2024-2025",
    image: "/certificates/sertifikat-3.png",
  },
  {
    name: "Sertifikat Penghargaan E-sport",
    issuer: "Penyelenggara",
    year: "2025",
    image: "/certificates/sertifikat-4.png",
  },
];

const galleryItems = [
  {
    title: "Mockup Baju",
    category: "APPAREL DESIGN",
    image: "/gallery/Mockup baju.jpeg",
  },
  {
    title: "Logo Rumah Makan",
    category: "LOGO DESIGN",
    image: "/gallery/Logo Rumah Makan.jpeg",
  },
  {
    title: "Logo Harmoni",
    category: "LOGO DESIGN",
    image: "/gallery/Logo Harmoni.jpeg",
  },
  {
    title: "Poster Makanan",
    category: "POSTER DESIGN",
    image: "/gallery/Poster Makanan.jpeg",
  },
  {
  title: "Poster Klasemen",
  category: "SPORTS DESIGN",
  image: "/gallery/KLASEMEN.jpg",
},
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
        <a className="brand" href="#home">
          RASYAD<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certificates">Certificates</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero section" id="home">
        <div className="hero-content">
          <div className="availability">
            <span /> AVAILABLE FOR COLLABORATION
          </div>

          <p className="eyebrow">HELLO, WORLD! I AM</p>

          <h1>
            RASYAD<span>.</span>
          </h1>

          <h2>
            Creative Designer <span>&</span> Developer
          </h2>

          <p className="hero-description">
            Menggabungkan kreativitas desain dan teknologi untuk membangun
            pengalaman digital yang menarik, fungsional, dan bermakna.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore My Work ↗
            </a>
            <a href="#contact" className="button button-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-tags">
            <span>DESIGN</span>
            <span>DEVELOPMENT</span>
            <span>CREATIVITY</span>
          </div>
        </div>

        <div className="profile-area">
          <div className="profile-frame">
            <div className="profile-photo">
              <Image
                src="/images/profile.PNG"
                alt="Foto profil Rasyad"
                fill
                priority
                sizes="(max-width: 650px) 260px, 350px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>

          <div className="profile-caption">
            <span>BASED IN INDONESIA</span>
            <span>CREATIVE MINDSET ✳</span>
          </div>
        </div>

        <div className="hero-bottom">PORTFOLIO — 2026</div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>
            Behind the <span>pixels.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-intro">
            <p>
              Saya adalah seorang kreator digital yang memiliki latar
              belakang Desain Komunikasi Visual dan sedang mengembangkan
              kemampuan di bidang Teknik Informatika.
            </p>

            <p>
              Saya tertarik pada desain grafis, pengembangan website,
              pemrograman, game development, serta teknologi digital.
              Saya senang mempelajari hal baru dan mengubah ide menjadi karya.
            </p>
          </div>

          <div className="info-card">
            <span className="card-label">PERSONAL INFORMATION</span>

            <div>
              <small>Nama</small>
              <strong>Muhammad Rasyad Mubarok</strong>
            </div>

            <div>
              <small>Fokus</small>
              <strong>Creative Design & Development</strong>
            </div>

            <div>
              <small>Universitas</small>
              <strong>Universitas Perjuangan Tasikmalaya</strong>
            </div>

            <div>
              <small>Program Studi</small>
              <strong>Teknik Informatika — Semester 3</strong>
            </div>
          </div>
        </div>

        <div className="subheading">
          <h3>Education History</h3>
          <span>01 — 03</span>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <div className="education-item" key={item.name}>
              <span className="education-year">{item.year}</span>
              <div>
                <h4>{item.name}</h4>
                <p>{item.level}</p>
              </div>
              <span className="education-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">02 / WHAT I DO</p>
          <h2>
            Skills & <span>Expertise.</span>
          </h2>
          <p className="section-description">
            Bidang yang saya pelajari dan kembangkan.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>0{index + 1}</span>
              <h3>{skill}</h3>
              <b>↗</b>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">03 / SELECTED WORKS</p>
          <h2>
            Featured <span>Projects.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual">
                <span>{project.number}</span>
                <div className="project-symbol">
                  {project.number === "01" ? "🎮" : "✳"}
                </div>
                <small>PROJECT SHOWCASE</small>
              </div>

              <div className="project-info">
                <span className="card-label">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  VISIT PROJECT ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">04 / BEYOND THE SCREEN</p>
          <h2>
            Organization & <span>Experience.</span>
          </h2>
          <p className="section-description">
            Pengalaman organisasi dan kepanitiaan.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-item" key={item.name}>
              <span className="experience-number">0{index + 1}</span>

              <div className="experience-main">
                <span className="card-label">{item.type}</span>
                <h3>{item.name}</h3>
                <p className="experience-place">{item.place}</p>
                <p>{item.description}</p>
              </div>

              <span className="experience-mark">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="section certificates-section" id="certificates">
        <div className="section-heading">
          <p className="eyebrow">05 / ACHIEVEMENTS</p>
          <h2>
            My <span>Certificates.</span>
          </h2>
          <p className="section-description">
            Kumpulan sertifikat dan pencapaian saya.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <article className="certificate-card" key={certificate.name}>
              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="certificate-image"
              >
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  width={800}
                  height={560}
                />
              </a>

              <div className="certificate-info">
                <span>0{index + 1} / CERTIFICATE</span>
                <h3>{certificate.name}</h3>
                <p>
                  {certificate.issuer} · {certificate.year}
                </p>
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW CERTIFICATE ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DESIGN GALLERY */}
      <section className="section gallery-section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">06 / CREATIVE ARCHIVE</p>
          <h2>
            Design <span>Gallery.</span>
          </h2>
          <p className="section-description">
            Kumpulan karya logo, banner, poster, dan branding.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article className="gallery-card" key={item.title}>
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="gallery-image"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                />
              </a>

              <div className="gallery-info">
                <span>0{index + 1} / {item.category}</span>
                <h3>{item.title}</h3>
                <a href={item.image} target="_blank" rel="noreferrer">
                  VIEW DESIGN ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section" id="contact">
        <p className="eyebrow">07 / GET IN TOUCH</p>

        <h2>
          Have an idea?
          <br />
          <span>Let&apos;s build it.</span>
        </h2>

        <p>Terbuka untuk kolaborasi, project, dan kesempatan baru.</p>

        <div className="contact-links">
          <a href="mailto:rasyad0907@gmail.com">EMAIL ↗</a>
          <a
            href="https://wa.me/6287729174391"
            target="_blank"
            rel="noreferrer"
          >
            WHATSAPP ↗
          </a>
          <a
            href="https://instagram.com/_simply.rasyad"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM ↗
          </a>
          <a
            href="https://www.tiktok.com/@syadzz011"
            target="_blank"
            rel="noreferrer"
          >
            TIKTOK ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand" href="#home">
          RASYAD<span>.</span>
        </a>
        <p>DESIGNED & BUILT WITH CREATIVITY.</p>
        <span>© 2026 RASYAD. ALL RIGHTS RESERVED.</span>
      </footer>
    </main>
  );
}
