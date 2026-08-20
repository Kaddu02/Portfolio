import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Mail, MapPin, PhoneCall, Briefcase, BadgeCheck } from 'lucide-react';
import './styles.css';

const marqueeRows = [
  [
    { label: 'AI/ML Engineer', value: 'Zensar Technologies' },
    { label: 'Full-Stack Developer', value: 'React, FastAPI, Node.js' },
    { label: 'Education', value: 'B.Tech CSE (AI & ML)' },
    { label: 'Location', value: 'Kolkata, India' },
    { label: 'Academic Score', value: 'CGPA 9.08 / 10' },
    { label: 'Core Stack', value: 'Python + React + FastAPI' },
  ],
  [
    { label: 'Impact', value: '5,000+ AV samples/month' },
    { label: 'APIs Built', value: '82+ REST APIs' },
    { label: 'Evaluations', value: '500+ model runs' },
    { label: 'Product Work', value: 'Gemini Resume Builder' },
    { label: 'Security', value: '4-tier RBAC with JWT' },
    { label: 'Automation', value: 'HRMS for 200+ employees' },
  ],
];

const services = [
  ['01', 'AI / ML Engineering', 'Designing and validating intelligent systems with model evaluation, prompt engineering, and data-quality workflows for real-world applications.'],
  ['02', 'Full-Stack Development', 'Building production-ready dashboards, APIs, and backend services with React, FastAPI, Node.js, MongoDB, and SQL.'],
  ['03', 'Automation', 'Creating end-to-end workflows that reduce manual effort, improve consistency, and scale operational processes.'],
  ['04', 'Data Processing', 'Preparing, validating, and structuring large datasets for analytics, training, and high-confidence product decisions.'],
  ['05', 'Product Engineering', 'Turning ideas into usable tools with secure auth, role-based access, and reliable application architecture.'],
] as const;

const skillGroups = [
  'Python',
  'Java',
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'FastAPI',
  'Django',
  'MongoDB',
  'MySQL',
  'Firebase',
  'REST APIs',
  'Streamlit',
  'Git',
  'SQL',
  'Generative AI',
];

const experience = [
  ['Zensar Technologies', 'AI/ML Engineer', 'Oct 2025 – Present', 'Processed and validated 5,000+ AV data samples/month, analyzed 10,000+ driving events, and completed 500+ evaluation runs to support autonomous vehicle AI/ML workflows.'],
  ['XetaLabs', 'AI & Software Engineer', 'Apr 2025 – Sep 2025', 'Built 2 production dashboards, architected 82+ REST APIs, implemented 4-tier RBAC with JWT, and supported product, order, and audit workflows.'],
  ['Pravaah Consulting', 'AI/ML Engineer', 'Jun 2024 – Mar 2025', 'Developed an AI-powered email marketing platform, AI resume parser, real-estate recommendation engine, and automated synthetic data pipelines.'],
  ['CodeSpeedy Technology Pvt. Ltd.', 'Python Developer Intern', 'Jun 2023 – Aug 2023', 'Implemented a Django-based HRMS for 200+ employees with role-based authentication and dashboard metrics.'],
] as const;

const education = [
  ['The Neotia University', 'B.Tech in Computer Science and Engineering (AI & ML)', '2021 – 2025', 'CGPA 9.08 / 10'],
] as const;

const certifications = [
  'Databricks - PT: Presales EDW-ETL Migration Databricks',
  'Advanced R for Business Analytics 24-Hour Technical Workshop, 2023',
  'Database Management Systems - The Neotia University, 2023',
  'Case-Study Based Implementation',
] as const;

const experienceDetails: Record<string, string[]> = {
  'Zensar Technologies': [
    'Processed and validated 5,000+ AV data samples/month, performing annotation and quality checks to prepare high-quality datasets.',
    'Classified and analyzed 10,000+ driving events across multiple categories, filtering irrelevant and low-quality data.',
    'Conducted 500+ model evaluation runs using HumanLoop and Maglev to identify performance gaps across datasets.',
    'Performed prompt engineering and dataset quality analysis across 100+ evaluation scenarios.',
    'Collaborated with AI/ML teams to maintain 95%+ data-validation accuracy on large-scale autonomous driving datasets.',
  ],
  XetaLabs: [
    'Engineered 2 production-grade Admin and Partner dashboards using React, Vite, FastAPI, and MongoDB.',
    'Architected and deployed 82+ REST APIs covering brand onboarding, product verification, audit logging, and order management.',
    'Implemented 4-tier Role-Based Access Control (RBAC) with JWT authentication across 4+ user roles/workflows.',
    'Integrated end-to-end backend workflows for 50+ product catalog operations, invoicing, returns, and delivery tracking.',
    'Designed MongoDB-backed services supporting 3+ business entities/records with asynchronous FastAPI APIs.',
  ],
  'Pravaah Consulting': [
    'Designed an AI-powered email marketing platform, improving campaign delivery speed by 40%.',
    'Implemented an AI resume parser processing 1,000+ resumes daily, reducing manual screening effort by 60%.',
    'Developed a real estate recommendation engine that increased lead conversion by 35%.',
    'Generated 10,000+ structured Q&A pairs through an automated synthetic data pipeline for model training.',
    'Automated multi-platform social media content generation and SEO keyword recommendations.',
  ],
  'CodeSpeedy Technology Pvt. Ltd.': [
    'Implemented a Django-based HR Management System (HRMS) supporting records for 200+ employees.',
    'Integrated role-based authentication and real-time dashboard metrics for administrative operations.',
  ],
};

const projects = [
  {
    category: 'Web App',
    title: 'MERN Task Management System',
    summary: 'Secure task management platform with personalized dashboards, CRUD-based REST APIs, and JWT authentication.',
    scale: 1,
    details: ['Authentication', 'Personal dashboards', 'CRUD APIs', 'MongoDB'],
    accent: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
    glow: 'rgba(124, 58, 237, 0.28)',
  },
  {
    category: 'AI Product',
    title: 'AI Resume Builder',
    summary: 'Resume generator using Gemini API with ATS-focused formatting and live PDF export.',
    scale: 0.97,
    details: ['Gemini API', 'ATS formatting', 'Live PDF export', 'Dynamic sections'],
    accent: 'linear-gradient(135deg, #F97316 0%, #F43F5E 100%)',
    glow: 'rgba(249, 115, 22, 0.28)',
  },
  {
    category: 'Realtime System',
    title: 'Real-Time Device Tracking',
    summary: 'Socket.IO and Leaflet-based location streaming interface for live device monitoring.',
    scale: 0.94,
    details: ['Socket.IO', 'Leaflet maps', 'WebSockets', 'Live tracking'],
    accent: 'linear-gradient(135deg, #10B981 0%, #22C55E 100%)',
    glow: 'rgba(16, 185, 129, 0.28)',
  },
  {
    category: 'ML Project',
    title: 'Flight Price Prediction',
    summary: 'Regression model for estimating flight fares, paired with a Streamlit interface for interactive predictions.',
    scale: 0.91,
    details: ['Python', 'Scikit-learn', 'Streamlit', 'Regression'],
    accent: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    glow: 'rgba(245, 158, 11, 0.26)',
  },
];

function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, className = '' }: any) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedText({ text }: { text: string }) {
  return <p className="animated-text">{text}</p>;
}

function ContactButton() {
  return (
    <a className="contact-btn" href="#contact">
      Contact Me
    </a>
  );
}

function LiveProjectButton() {
  return <button className="live-btn">Live Project</button>;
}

function HeroSection() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section className="hero-section">
      <nav className="hero-nav">
        <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
      </nav>
      <div className="hero-title-wrap">
        <h1 className="hero-heading hero-title">Hi, i&apos;m Sanskar</h1>
      </div>
      <div className="hero-portrait-wrap">
        <div className="hero-portrait-glow" />
        <img className="hero-portrait" src={`${baseUrl}hero-3d-cutout.png`} alt="3D portrait inspired by Sanskar Prasad" />
      </div>
      <div className="hero-bottom">
        <p>ai/ml engineer and full-stack developer building production systems, dashboards, and automation</p>
        <ContactButton />
      </div>
    </section>
  );
}

function MarqueeSection() {
  const { scrollY } = useScroll();
  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => scrollY.on('change', (v) => setOffset(v)), [scrollY]);
  const row1 = [...marqueeRows[0], ...marqueeRows[0], ...marqueeRows[0]];
  const row2 = [...marqueeRows[1], ...marqueeRows[1], ...marqueeRows[1]];
  return (
    <section className="marquee-section">
      {[row1, row2].map((row, i) => (
        <div className="marquee-row" key={i} style={{ transform: `translateX(${i === 0 ? offset * 0.15 - 200 : -(offset * 0.15 - 200)}px)` }}>
          {row.map((item: any, index) => (
            <div className="marquee-card" key={`${i}-${index}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <FadeIn className="corner moon" delay={0.1}><img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" /></FadeIn>
      <FadeIn className="corner lego" delay={0.15}><img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" /></FadeIn>
      <FadeIn className="corner object" delay={0.25}><img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" /></FadeIn>
      <FadeIn className="corner group" delay={0.3}><img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" /></FadeIn>
      <div className="about-content">
        <FadeIn><h2 className="hero-heading section-title">About me</h2></FadeIn>
        <FadeIn delay={0.15}><AnimatedText text="Software developer and computer science graduate specializing in AI & ML, with hands-on experience in full-stack engineering and machine learning applications. I enjoy building responsive web apps, REST APIs, backend services, and data-driven solutions using Python, Node.js, FastAPI, React, SQL, and NoSQL databases." /></FadeIn>
        <div className="skill-cloud">
          {skillGroups.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <FadeIn delay={0.25}><ContactButton /></FadeIn>
      </div>
    </section>
  );
}

function TimelineSection() {
  const [activeCompany, setActiveCompany] = React.useState<string | null>(experience[0]?.[0] ?? null);
  return (
    <section className="timeline-section" id="experience">
      <h2 className="section-subtitle">Experience</h2>
      <div className="timeline-list">
        {experience.map(([company, role, date, desc], i) => (
          <FadeIn key={company} delay={i * 0.08} className="timeline-item-wrap">
            <button
              type="button"
              className={`timeline-item ${activeCompany === company ? 'is-active' : ''}`}
              onClick={() => setActiveCompany(activeCompany === company ? null : company)}
            >
              <div className="timeline-icon"><Briefcase size={18} /></div>
              <div className="timeline-copy">
                <div className="timeline-head">
                  <h3>{role}</h3>
                  <span>{date}</span>
                </div>
                <strong>{company}</strong>
              </div>
              <div className="timeline-toggle">{activeCompany === company ? 'Hide' : 'View'}</div>
            </button>
            <motion.div
              className={`timeline-details ${activeCompany === company ? 'open' : ''}`}
              initial={false}
              animate={{ height: activeCompany === company ? 'auto' : 0, opacity: activeCompany === company ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="timeline-details-inner">
                <ul>
                  {(experienceDetails[company] || []).map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <h2 className="section-subtitle">Education</h2>
      <div className="timeline-list">
        {education.map(([school, degree, date, detail]) => (
          <FadeIn key={school} className="timeline-item">
            <div className="timeline-icon"><GraduationCap size={18} /></div>
            <div>
              <div className="timeline-head">
                <h3>{degree}</h3>
                <span>{date}</span>
              </div>
              <strong>{school}</strong>
              <p>{detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <h2 className="section-subtitle">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <FadeIn key={cert} className="cert-item">
            <BadgeCheck size={18} />
            <span>{cert}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="services-title">Services</h2>
      <div className="services-list">{services.map(([n, name, desc], i) => (
        <FadeIn key={n} delay={i * 0.1} className="service-item">
          <div className="service-num">{n}</div>
          <div><h3>{name}</h3><p>{desc}</p></div>
        </FadeIn>
      ))}</div>
    </section>
  );
}

function ProjectCard({ project, index, progress }: any) {
  const enterStart = index * 0.28;
  const enterEnd = enterStart + 0.22;
  const lift = useTransform(progress, [enterStart, enterEnd], [140, 0]);
  const scale = useTransform(progress, [enterStart, enterEnd], [1 - index * 0.01, 0.985 - index * 0.01]);
  return (
    <div className="project-shell" style={{ marginTop: index === 0 ? 0 : '-52vh' }}>
      <motion.div
        className="project-card"
        style={{
          top: '72px',
          zIndex: index + 2,
          y: lift,
          scale,
          '--accent': project.accent,
          '--glow': project.glow,
        } as React.CSSProperties}
      >
        <div className="project-panel">
          <div className="project-panel-left">
            <div className="project-topline">
              <span className="project-index">0{index + 1}</span>
              <span className="project-tag">{project.category}</span>
            </div>
            <h3>{project.title}</h3>
          </div>
          <div className="project-panel-center">
            <p className="project-summary">{project.summary}</p>
            <p className="project-blurb">
              Built as a hands-on solution focused on usability, workflow clarity, and reliable technical execution.
            </p>
          </div>
          <div className="project-panel-right">
            <div className="project-stack-title">Stack used</div>
            <div className="project-detail-grid">
              {project.details.map((detail: string) => <span key={detail}>{detail}</span>)}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectsSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <h2 className="hero-heading section-title">Project</h2>
      <div className="projects-copy">
        <p>Selected work from my resume, including dashboard systems, AI-assisted tools, and production workflows.</p>
      </div>
      {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} progress={scrollYProgress} />)}
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="hero-heading section-title">Contact</h2>
      <p className="contact-lead">Open to AI/ML, full-stack, and product engineering opportunities.</p>
      <div className="contact-grid">
        <a href="mailto:sanskarprasad31@gmail.com"><Mail size={16} />sanskarprasad31@gmail.com</a>
        <a href="tel:+918945015960"><PhoneCall size={16} />+91 8945015960</a>
        <a href="https://linkedin.com/in/sanskar-prasad-8a6901191/" target="_blank" rel="noreferrer"><ArrowUpRight size={16} />LinkedIn</a>
        <span><MapPin size={16} />Kolkata, India</span>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <TimelineSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
