import { FileText, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // ❌ Moved company info out of JSX — was breaking the component
  const experience = [
    {
      company: "Windikate Technologies Private Limited",
      title: "Full Stack Web Developer Intern",
      duration: "July 2025 - Sept 2025",
      location: "Dehradun, Uttarakhand",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "PHP", "MySQL", "WordPress"],
      points: [
        "Revamped legacy web application architecture with a microservices approach using Docker and Kubernetes; achieved a 30% reduction in server costs and a 25% improvement in application uptime.",
        "Spearheaded the WordPress platform for Pristique Disposable Products, streamlining product management and improving accessibility across 7+ product segments.",
        "Collaborated with cross-functional teams to streamline project workflows, resulting in a 15% reduction in project delivery time while maintaining high standards of web development quality and accessibility."
      ]
    }
  ];

  const projects = [
    {
      title: "Toy Language Compiler",
      description:
        "Implemented a full-stack compiler featuring lexical analysis, parsing, semantic analysis, optimization, and code generation, alongside an interactive web interface, achieving a 98% pass rate on 110 test cases.",
      tech: ["Python", "Flask", "PLY", "AST"],
      stack: ["Python-based Full Stack (Compiler + Web)"]
    },
    {
      title: "Blood Bank Management System",
      description:
        "Built a full-stack Blood Bank Management System with JWT authentication, real-time inventory alerts, and a donor-matching algorithm, reducing stockouts by 30% and improving request fulfillment speed by 40%.",
      tech: ["Django", "MySQL", "HTML", "CSS"],
      stack: ["Django Full Stack (Web Development Stack)"]
    },
    {
      title: "Real-Time Weather Dashboard",
      description:
        "Revamped a responsive React.js dashboard with Chart.js visualization and Node.js backend using OpenWeatherMap API, serving 200+ weekly users with under 300ms latency.",
      tech: ["React.js", "Node.js", "Chart.js"],
      stack: ["JavaScript Full Stack (Web + Visualization)"]
    }
  ];

  const weeklyLogs = [
    {
      week: "WEEK 1 (PESE)",
      summary: "Self introduction based on Sixer Theory",
      details: [
        `Hello everyone, my name is Harshita Gogia. I am currently in my pre-final year, pursuing a BTech in Computer Science and Engineering at Graphic Era Hill University, Dehradun...`
      ],
      link: "https://youtube.com/shorts/d-eHyNb5luk?feature=share",
      pdf: "/pdf/WEEK 1(PESE).pdf"
    },
    {
      week: "WEEK 2.a (PESE)",
      summary: "Self introduction based on 5 Ring Theory",
      link: "https://youtube.com/shorts/yxUbfe8mp1c?feature=share",
      pdf: "/pdf/WEEK 2.a(PESE).pdf"
    },
    {
      week: "WEEK 3 (PESE)",
      summary: "How to write resume",
      link: "https://youtube.com/shorts/KTGCLepDEXU?feature=share",
      pdf: "/pdf/WEEK 3(PESE).pdf"
    },
    {
      week: "Assignment",
      summary: "Movie Review - Pursuit of Happyness",
      link: "https://youtu.be/B9ZWUc4vAIA?si=fipVmf516njwLyu6",
      pdf: "/pdf/Assignment.pdf"
    },
    {
      week: "Session Summary 1",
      summary: "Coal Mine Discussion",
      link: "https://youtube.com/shorts/TA8EffElujM?feature=share",
      pdf: "/pdf/Session Summary 1(PESE).pdf"
    },
    {
      week: "Session Summary 2",
      summary: "Group Discussion Tricks",
      link: "https://youtube.com/shorts/VZEulX-heJU?feature=share",
      pdf: "/pdf/Session Summary 2(PESE).pdf"
    },
    {
      week: "Session Summary 3",
      summary: "Group Discussion Techniques",
      link: "https://youtube.com/shorts/oAaD9F5Oe7U?feature=share",
      pdf: "/pdf/Session Summary 3(PESE).pdf"
    },
    {
      week: "Personal Interview",
      summary: "Mock interview preparation and experience",
      link: "https://youtube.com/shorts/qMY_muHZ3Mk?feature=share",
      pdf: "/pdf/Personal Interview(PESE).pdf"
    },
    {
      week: "Final Video Log",
      summary: "Final reflections and future goals",
      link: "https://youtube.com/shorts/usiVE__37-U?feature=share",
      pdf: "/pdf/Final(PESE).pdf"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#DDFFF7' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full shadow-sm z-50" style={{ backgroundColor: '#93E1D8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {['about', 'projects', 'weekly'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeSection === section
                      ? 'border-[#462255] text-white'
                      : 'border-transparent text-[#462255] hover:border-[#AA4465] hover:text-[#462255]'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* About Section */}
        <section className={`py-12 ${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
                <div className="text-center">
                  <img
                    className="h-32 w-32 rounded-full mx-auto ring-4 ring-[#AA4465]"
                    src="/img/photo.jpg"
                    alt="Profile"
                  />
                  <h2 className="mt-4 text-xl font-bold text-[#462255]">Harshita Gogia</h2>
                  <p className="text-sm text-[#93E1D8]">Software Engineer</p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#AA4465]" />
                    <span className="text-sm text-[#462255]">+91-639-874-8892</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#AA4465]" />
                    <span className="text-sm text-[#462255]">hgogia8656@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-[#AA4465]" />
                    <span className="text-sm text-[#462255]">Harshita Gogia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#AA4465]" />
                    <span className="text-sm text-[#462255]">Dehradun, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About + Education */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
                <h3 className="text-lg font-semibold text-[#462255]">About Me</h3>
                <p className="mt-4 text-[#462255]">
                  A tech enthusiast with a passion for software development, AI, and cloud computing...
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-[#AA4465]" />
                <a
                  href="/pdf/PESE RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#462255] hover:underline"
                >
                  View My Resume
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
                <h3 className="text-lg font-semibold text-[#462255]">Education</h3>
                <div className="mt-4">
                  <h4 className="font-medium text-[#462255]">
                    Graphic Era Hill University (2022–2026)
                  </h4>
                  <p className="text-sm text-[#462255]">B.Tech in Computer Science — CGPA: 7.21/10</p>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
                <h3 className="text-lg font-semibold text-[#462255]">Experience</h3>
                {experience.map((exp, i) => (
                  <div key={i} className="mt-4">
                    <h4 className="font-medium text-[#462255]">{exp.company}</h4>
                    <p className="text-sm text-[#462255]">
                      {exp.title} — {exp.duration}, {exp.location}
                    </p>
                    <ul className="mt-2 list-disc list-inside text-sm text-[#462255] space-y-2">
                      {exp.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`py-12 ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <div className="space-y-8">
            {/* Projects */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
              <h3 className="text-lg font-semibold text-[#462255]">Technical Projects</h3>
              <div className="mt-6 grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-[#93E1D8] pl-4 py-2">
                    <h4 className="font-medium text-[#462255]">{project.title}</h4>
                    <p className="mt-2 text-sm text-[#462255]">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-[#DDFFF7] text-[#462255] rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((s, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-[#AA4465] text-white rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Log Section */}
        <section className={`py-12 ${activeSection === 'weekly' ? 'block' : 'hidden'}`}>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
            <h3 className="text-lg font-semibold text-[#462255]">Weekly Progress Log</h3>
            <div className="mt-6 space-y-6">
              {weeklyLogs.map((log, index) => (
                <div key={index} className="border-b border-[#DDFFF7] pb-6 last:border-0 last:pb-0">
                  <h4 className="font-medium text-[#462255]">{log.week}</h4>
                  <p className="mt-2 text-[#462255]">{log.summary}</p>
                  {log.details && (
                    <div className="mt-2 text-sm text-[#462255]">
                      {Array.isArray(log.details)
                        ? log.details.map((detail, i) => <p key={i}>{detail}</p>)
                        : <p>{log.details}</p>}
                    </div>
                  )}
                  <a
                    href={log.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm text-[#462255] hover:text-[#AA4465]"
                  >
                    <Youtube className="h-4 w-4 mr-1" />
                    Watch Progress Video
                  </a>
                  <div className="flex items-center space-x-3 mt-2">
                    <FileText className="h-5 w-5 text-[#AA4465]" />
                    <a
                      href={log.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#462255] hover:underline"
                    >
                      {log.week} PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
