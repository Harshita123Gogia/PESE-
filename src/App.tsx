import { FileText, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const experience = [
    {
      title: "Full Stack Web Developer Intern",
      duration: "July 2025 - Sept 2025",
      location: "Dehradun, Uttarakhand",
      technologies: ["HTML, CSS, JavaScript, React.js, PHP, MySQL, WordPress"],
      achievements: [
        "Revamped legacy web application architecture with a microservices approach using Docker and Kubernetes; achieved a 30% reduction in server costs and a 25% improvement in application uptime.",
        "Spearheaded the WordPress platform for Pristique Disposable Products, streamlining product management and improving accessibility across 7+ product segments.",
        "Collaborated with cross-functional teams to streamline project workflows, resulting in a 15% reduction in project delivery time while maintaining high standards of web development quality and accessibility."
      ]
    }
  ];

  const projects = [
    {
      title: "Toy Language Compiler",
      description: "Implemented a full-stack compiler featuring lexical analysis, parsing, semantic analysis, optimization, and code generation, alongside an interactive web interface, achieving a 98% pass rate on 110 test cases.",
      tech: ["Python, Flask, PLY, AST"],
      stack: ["Python-based Full Stack(Compiler+ Web)"]
    },
    {
      title: "Blood Bank Management System",
      description: "Built a full-stack Blood Bank Management System with JWT authentication, real-time inventory alerts, and donor-matching algorithm, reducing stockouts by 30% and improving request fulfillment speed by 40%.",
      tech: ["Django", "MySQL", "HTML", "CSS"],
      stack: ["Django Full Stack (Web Development Stack)"]
    },
    {
      title: "Real-Time Weather Dashboard",
      description: "Revamped a responsive React.js dashboard with Chart.js visualization and Node.js backend using OpenWeatherMap API, serving 200+ weekly users with under 300ms latency.",
      tech: ["React.js", "Node.js", "Chart.js"],
      stack: ["JavaScript Full Stack (Web + Visualization)"]
    }
  ];

  const weeklyLogs = [
    {
      week: "WEEK 1(PESE)",
      summary: "Self introduction based on Sixer Theory",
      details: [
        "Hello everyone, my name is Harshita Gogia. I am currently in my pre-final year, pursuing a BTech in Computer Science and Engineering at Graphic Era Hill University, Dehradun. I completed my schooling at St. Jude's School, Dehradun, where I developed a strong foundation in PCM and Computers.",
        "I have always been passionate about technology, problem-solving, and innovation, and my ultimate aim is to build a career in software development and cloud computing. I have been actively involved in several projects, including:",
        "- **AWS Cloud Computing Projects:** Worked on hand-on labs and real-world cloud deployment scenarios as part of my AWS certifications.",
        "- **Blood Bank Management System:** The Blood Bank Management System (BBMS) is a browser-based platform that streamlines blood donation services, inventory management, and donor records while ensuring transparency, efficiency, and corruption-free operations.",
        "- **Weather Dashboard using React:** This project involves developing a real-time weather application using React.js, Node.js, and a weather API to provide users with up-to-date weather information through a user-friendly interface.",
        "To enhance my technical skills, I have earned the AWS Cloud Quest: Cloud Practitioner certification and completed the AWS Cloud Practitioner Essentials course. These certifications have deepened my understanding of cloud computing, infrastructure, and deployment strategies.",
        "Beyond academics, I am a passionate dancer and an active member of the Dehradun Bhangra Club. I have participated in India's Got Talent auditions and various dance competitions. Additionally, I enjoy playing badminton, athletics, and travelling to spiritual places.",
        "I believe in continuous learning, preserverance, and hard work. I am excited about the opportunities ahead and look forward to contributing my skills and enthusiasm to the field of software development, AI, and cloud computing.",
        "Thank you for your time."
      ],
      link: "https://youtube.com/shorts/d-eHyNb5luk?feature=share",
      pdf: "/pdf/WEEK 1(PESE).pdf"
    },
    {
      week: "WEEK 2.a(PESE)",
      summary: "Self introduction based on 5 Ring Theory",
      details: [
        "Hello everyone, my name is Harshita Gogia, and I am from Patel Nagar, Dehradun. I am currently in my pre-final year, pursuing a BTech in Computer Science and Engineering at Graphic Era Hill University, Dehradun. I completed my schooling at St. Jude's School, Dehradun, where I developed a strong foundation in PCM and Computers.",
        "I come from a supportive and loving family that has always encouraged me to work hard and strive for excellence. Their guidance has played a crucial role in shaping my aspirations and values.",
        "My goal is to secure a position in a well-known organization where I can apply my technical knowledge and skills in software developmemt and cloud computing. In the long run, I aim to attain a leadership role in my profession, contributing to technological advancements and innovations.",
        "I believe in dedication, perseverance, and continuous learning, and I am eager to embrace new opportunities that will help me grow both personally and professionally.",
        "Thank you for your time."
      ],
      link: "https://youtube.com/shorts/yxUbfe8mp1c?feature=share",
      pdf: "/pdf/WEEK 2.a(PESE).pdf"
    },
    {
      week: "WEEK 3.(PESE)",
      summary: "How to write resume",
      link: "https://youtube.com/shorts/KTGCLepDEXU?feature=share",
      pdf: "/pdf/WEEK 3.(PESE).pdf"
    },
    {
      week: "Assignment",
      summary: "Movie Review- Pursuit of Happyness",
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
                  <img className="h-32 w-32 rounded-full mx-auto ring-4 ring-[#AA4465]" src="/img/photo.jpg" alt="Profile" />
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
                <div className="flex items-center space-x-3 mt-4">
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
              </div>
            </div>

            {/* Summary and Education */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
                <h3 className="text-lg font-semibold text-[#462255]">About Me</h3>
                <p className="mt-4 text-[#462255]">
                  A tech enthusiast with a passion for software development, AI, and cloud computing, I have worked on multiple projects, including cloud-based applications and full-stack development. Certified in AWS Cloud Quest and Cloud Practitioner Essentials, I am also an active dancer and athlete, balancing technical expertise with creativity and teamwork.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
                <h3 className="text-lg font-semibold text-[#462255]">Education</h3>
                <div className="mt-4">
                  <h4 className="font-medium text-[#462255]">Graphic Era Hill University (2022–2026)</h4>
                  <p className="text-sm text-[#462255]">B.Tech in Computer Science — CGPA: 7.21/10</p>
                  <p className="mt-2 text-sm text-[#010101]">
                    My academic journey includes hands-on experience in Data Structures & Algorithms, Database Management Systems, Cloud Computing, Object-Oriented Programming, and Full-Stack Development, equipping me with a strong foundation in problem-solving and software engineering.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
                <h3 className="text-lg font-semibold text-[#462255]">Experience</h3>
                <div className="mt-4 space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-[#462255]">{exp.title}</h4>
                      <p className="text-sm text-[#462255]">{exp.duration} | {exp.location}</p>
                      <p className="text-sm text-[#462255] mt-1">
                        <strong>Technologies:</strong> {exp.technologies.join(', ')}
                      </p>
                      <ul className="mt-3 space-y-2 list-disc list-inside text-[#462255] text-sm">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
                <h3 className="text-lg font-semibold text-[#462255]">Achievements</h3>
                <ul className="mt-4 space-y-3 list-disc list-inside text-[#462255] text-sm">
                  <li>Postman API Fundamentals Student Expert | Earned: Aug 06, 2025.</li>
                  <li>Open Source Contributor, GirlScript Summer of Code (GSSoc '25) & Open Source Connect India | Selected: Jul 31, 2025.</li>
                  <li>AWS Cloud Quest: Cloud Practitioner - Amazon Web Services (AWS) | Earned: March 2025.</li>
                  <li>AWS Cloud Practitioner Essentials - Amazon Web Services (AWS) | Completed: January 2025.</li>
                  <li>Certificate of Appreciation - Project Showcase Graphic Era Hill University, Nov 2024 Awarded for excellent performance in the Project Showcase event organized by the Innofusion Club, Research Innovation Cell.</li>
                  <li>Certificate of Participation - Hacker-Ramp WeForShe (2024) Myntra Designs Pvt. Ltd. Successfully participated in Phase 2 of the Hacker-Ramp WeForShe competition as part of Team FOXORT from Graphic Era (Deemed to be University), Dehradun.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`py-12 ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <div className="space-y-8">
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

            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
              <h3 className="text-lg font-semibold text-[#462255]">Technical Skills</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-medium text-[#462255]">Languages</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Python(NumPy,Pandas)', 'HTML/CSS', 'JavaScript(ES6+)', 'C/C++', 'SQL', 'Java(Spring Boot)'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#AA4465] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#462255]">Tools/Frameworks</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Git/GitHub', 'Docker', 'React.js', 'WordPress', 'VS Code', 'MySQL', 'Linux', 'PyCharm', 'AWS', 'Node.js'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#AA4465] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#462255]">Concepts</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Data Structures & Algorithms', 'OOP', 'DBMS', 'AI/ML', 'Cloud Computing'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#AA4465] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
              <h3 className="text-lg font-semibold text-[#462255]">Extracurricular Achievements</h3>
              <ul className="mt-4 space-y-3 list-disc list-inside text-[#462255]">
                <li>Top 10 among 200+ teams in Hack-O-Holic 2.0 for AI logistics solution.</li>
                <li>Designed AWS cloud infrastructure handling 5K+ concurrent users with 99.99% uptime.</li>
                <li>Mentored 5 junior developers in WeForShe 2024 hackathon (Advanced to Phase 2).</li>
              </ul>
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
                      {log.details.map((detail, i) => (
                        <p key={i} className="mb-2">{detail}</p>
                      ))}
                    </div>
                  )}
                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-4">
                    <a 
                      href={log.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm text-[#462255] hover:text-[#AA4465]"
                    >
                      <Youtube className="h-4 w-4 mr-1" />
                      Watch Progress Video
                    </a>
                    <div className="flex items-center space-x-3">
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