import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cloud, Brain, ChevronDown, Menu, X } from 'lucide-react';
import profileImg from './venkteshreddy.jpeg';

// Add CSS styles directly
const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
    color: white;
    min-height: 100vh;
  }
  
  .gradient-text {
    background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
  }
  
  .btn-primary {
    background: linear-gradient(to right, #2563eb, #7c3aed);
    padding: 12px 32px;
    border-radius: 9999px;
    color: white;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background: linear-gradient(to right, #1d4ed8, #6d28d9);
    transform: scale(1.05);
  }
  
  .btn-outline {
    border: 2px solid #60a5fa;
    color: #60a5fa;
    padding: 12px 32px;
    border-radius: 9999px;
    background: transparent;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s;
    cursor: pointer;
  }
  
  .btn-outline:hover {
    background: #60a5fa;
    color: white;
  }
  
  .nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    z-index: 50;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 80px;
  }
  
  .profile-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid rgba(96, 165, 250, 0.5);
    margin: 0 auto 30px;
    object-fit: cover;
  }
  
  .section {
    padding: 80px 20px;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 60px;
  }
  
  .grid {
    display: grid;
    gap: 30px;
  }
  
  .grid-2 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .card {
    padding: 30px;
    transition: all 0.3s;
  }
  
  .card:hover {
    transform: translateY(-5px);
    border-color: rgba(96, 165, 250, 0.5);
  }
  
  .skill-tag {
    background: rgba(37, 99, 235, 0.2);
    color: #93c5fd;
    padding: 8px 16px;
    border-radius: 9999px;
    font-size: 0.875rem;
    margin: 4px;
    display: inline-block;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
  }
  
  .social-link {
    color: #9ca3af;
    transition: color 0.3s;
  }
  
  .social-link:hover {
    color: white;
  }
  
  .nav-menu {
    display: flex;
    gap: 30px;
    align-items: center;
    padding: 20px 0;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;
  }
  
  .nav-link:hover {
    color: #60a5fa;
  }
  
  .nav-link.active {
    color: #60a5fa;
  }
  
  .bounce {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translateY(0);
    }
    40%, 43% {
      transform: translateY(-10px);
    }
    70% {
      transform: translateY(-5px);
    }
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }
  
  @media (max-width: 768px) {
    .nav-menu {
      display: none;
    }
    
    .hero-section h1 {
      font-size: 3rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
`;

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Inject styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const skills = {
    technical: ['Python', 'Java', 'JavaScript', 'React.js', 'Node.js', 'HTML/CSS', 'MySQL', 'MongoDB', 'AWS', 'Machine Learning', 'Power BI'],
    soft: ['Problem-solving', 'Communication', 'Teamwork', 'Adaptability', 'Leadership', 'Analytical Thinking']
  };

  const projects = [
    {
      title: "Machine Learning Employee Mental Health Analysis",
      description: "Full-stack application using Django backend and React frontend to analyze employee mental health using ML models with Keras.",
      tech: ["Python", "Django", "React.js", "Keras", "MySQL"],
      duration: "2025",
      icon: <Brain size={24} />
    },
    {
      title: "NFT Marketplace",
      description: "MERN stack application with cryptocurrency payment gateway (Cryptomus) for secure NFT transactions and social platform features.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Cryptomus API"],
      duration: "2024",
      icon: <Code size={24} />
    },
    {
      title: "Predictive Analytics for Sales Forecasting",
      description: "Machine learning model achieving 90% accuracy in sales trend prediction using statistical analysis and data visualization.",
      tech: ["Python", "Matplotlib", "Seaborn", "Machine Learning"],
      duration: "2024",
      icon: <Database size={24} />
    },
    {
      title: "Hotel Room Listing & Review Portal",
      description: "Full-stack web application with secure authentication, dynamic routing, and user-friendly interface for accommodation management.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
      duration: "2023",
      icon: <Code size={24} />
    }
  ];

  const experience = [
    {
      company: "Zephyr Technologies",
      role: "Full Stack Developer",
      duration: "May 2023 - Jun 2023",
      location: "Mangalore",
      achievements: [
        "Developed task management app using React.js, Node.js, Express and MongoDB",
        "Created responsive UI components and implemented RESTful APIs",
        "Managed MongoDB database operations"
      ]
    },
    {
      company: "Edunet Pvt Ltd",
      role: "Cloud Engineer Intern",
      duration: "Aug 2024 - Sept 2024",
      achievements: [
        "Developed Cloud Infrastructure Management Solution",
        "Gained expertise in AWS, automation tools, and DevOps pipelines",
        "Delivered scalable, secure, and cost-efficient solutions"
      ]
    },
    {
      company: "Fuel Pvt Ltd",
      role: "Front End Web Development Intern",
      duration: "Sep 2024 - Nov 2024",
      achievements: [
        "Built responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React.js",
        "Improved front-end performance through React.js optimization techniques",
        "Focused on clean code structure and responsive design"
      ]
    },
    {
      company: "Zeel Code Labs",
      role: "Data Analytics Intern",
      duration: "May 2024 - July 2024",
      achievements: [
        "Reduced data processing time by 30% through pipeline optimization",
        "Created interactive visualizations using Python (Matplotlib, Seaborn) and Excel",
        "Provided actionable insights that improved decision-making processes"
      ]
    }
  ];

  const certifications = [
    "Web Development Bootcamp - UdemyS",
    "Career Essentials in Data Analysis - Microsoft & LinkedIn",
    "Database Management System and SQL - Intellipaat",
    "Machine Learning A-Z - Udemy",
    "Python - Infosys Springboard",
    "Full Stack Web Development - Great Learning"
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' }}>
            <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              Venkatesh Reddy
            </div>
            
            <div className="nav-menu">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    fontSize: '1rem',
                    textTransform: 'capitalize'
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div>
            
            <img 
              src={profileImg} 
              alt="Venkatesh Reddy"
              className="profile-img"
            />
          </div>
          
          <h1 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>
            Hey, I'm
          </h1>
          <h1 className="gradient-text" style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>
            Venkatesh Reddy
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#d1d5db', marginBottom: '30px' }}>
            Full Stack Developer & Data Analyst
          </p>
          
       
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '50px', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/Venkteshramreddy" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/venkteshreddy" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:venkteshramreddy@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>

          <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)' }} className="bounce">
            <ChevronDown color="#9ca3af" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title gradient-text">About Me</h2>
          
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <p style={{ color: '#d1d5db', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.6' }}>
                I'm a detail-oriented Computer Science graduate with a passion for technology and a strong foundation 
                in software development and data analytics. I hold a B.Tech degree from Srinivas University, Mangalore, 
                and am eager to apply my skills to real-world projects and continue growing in the tech industry.
              </p>
              
              <p style={{ color: '#d1d5db', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.6' }}>
                My journey spans across full-stack development, data analytics, and cloud engineering. 
                I love building scalable applications and extracting meaningful insights from data to 
                drive intelligent decision-making.
              </p>

              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <h4 style={{ color: '#60a5fa', fontWeight: '600', marginBottom: '10px' }}>Education</h4>
                  <p style={{ color: '#9ca3af' }}>B.Tech in Computer Science</p>
                  <p style={{ color: '#9ca3af' }}>Srinivas University (7.5/10)</p>
                  <p style={{ color: '#9ca3af' }}>2021 - 2025</p>
                </div>
                
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div className="glass-card card">
                <Code color="#60a5fa" size={32} style={{ marginBottom: '15px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '10px' }}>Full Stack Development</h3>
                <p style={{ color: '#9ca3af' }}>Building end-to-end web applications with modern technologies</p>
              </div>
              
              <div className="glass-card card">
                <Database color="#a78bfa" size={32} style={{ marginBottom: '15px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '10px' }}>Data Analytics</h3>
                <p style={{ color: '#9ca3af' }}>Extracting insights and building predictive models from complex datasets</p>
              </div>
              
              <div className="glass-card card">
                <Cloud color="#34d399" size={32} style={{ marginBottom: '15px' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '10px' }}>Cloud Engineering</h3>
                <p style={{ color: '#9ca3af' }}>Designing scalable and secure cloud infrastructure solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container">
          <h2 className="section-title gradient-text">Experience</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {experience.map((exp, index) => (
              <div key={index} className="glass-card card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white' }}>{exp.role}</h3>
                    <p style={{ color: '#60a5fa' }}>{exp.company}</p>
                  </div>
                  <div style={{ color: '#9ca3af', fontSize: '0.875rem', textAlign: 'right' }}>
                    <p>{exp.duration}</p>
                    {exp.location && <p>{exp.location}</p>}
                  </div>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} style={{ color: '#d1d5db', marginBottom: '8px', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#60a5fa', marginRight: '10px' }}>•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          
          <div className="grid grid-2">
            {projects.map((project, index) => (
              <div key={index} className="glass-card card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ color: '#60a5fa', marginRight: '15px' }}>
                    {project.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white' }}>{project.title}</h3>
                </div>
                
                <p style={{ color: '#d1d5db', marginBottom: '20px', lineHeight: '1.6' }}>{project.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className="skill-tag">{tech}</span>
                  ))}
                </div>
                
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{project.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container">
          <h2 className="section-title gradient-text">Skills & Expertise</h2>
          
          <div className="grid grid-2">
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', marginBottom: '30px' }}>Technical Skills</h3>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {skills.technical.map((skill, index) => (
                  <div key={index} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                    <span style={{ color: '#d1d5db' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', marginBottom: '30px' }}>Soft Skills</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {skills.soft.map((skill, index) => (
                  <div key={index} className="glass-card" style={{ padding: '20px' }}>
                    <span style={{ color: '#d1d5db' }}>{skill}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ marginTop: '40px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'white', marginBottom: '20px' }}>Certifications</h4>
                <div>
                  {certifications.map((cert, index) => (
                    <div key={index} style={{ color: '#9ca3af', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#34d399', marginRight: '10px' }}>✓</span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title gradient-text">Let's Connect</h2>
          
          <p style={{ color: '#d1d5db', fontSize: '1.1rem', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
          
          <div className="contact-grid">
            <a 
              href="mailto:venkteshramreddy@gmail.com"
              className="glass-card card"
              style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
            >
              <Mail color="#60a5fa" size={32} style={{ margin: '0 auto 15px', display: 'block' }} />
              <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '10px' }}>Email</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>venkteshramreddy@gmail.com</p>
            </a>
            
            <a 
              href="tel:+919535401825"
              className="glass-card card"
              style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
            >
              <Phone color="#34d399" size={32} style={{ margin: '0 auto 15px', display: 'block' }} />
              <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '10px' }}>Phone</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>+91 9535401825</p>
            </a>
            
            <div className="glass-card card" style={{ textAlign: 'center' }}>
              <MapPin color="#a78bfa" size={32} style={{ margin: '0 auto 15px', display: 'block' }} />
              <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '10px' }}>Location</h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Koppal, Karnataka, India</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
            <a 
              href="https://github.com/Venkteshramreddy"
              className="glass-card"
              style={{ padding: '20px', borderRadius: '50%', textDecoration: 'none' }}
            >
              <Github color="white" size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/venkteshreddy"
              className="glass-card"
              style={{ padding: '20px', borderRadius: '50%', textDecoration: 'none' }}
            >
              <Linkedin color="white" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '30px 20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: '#9ca3af' }}>
            Venkatesh Reddy. Built with React & Custom CSS. (Hire me, and let's grow together)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;