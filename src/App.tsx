import { FileText, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Blood Bank Management System",
      description: "The Blood Bank Management System (BBMS) is a browser-based platform for managing blood donation services, donor records, and inventory efficiently. It ensures transparency, prevents corruption, and simplifies blood bank operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      stack: ["React.js"]
    },
    {
      title: "Weather Dashboard using React",
      description: "The real-time weather application, built with React.js, fetches live weather data from an API and presents it through a user-friendly interface. It utilizes React for the frontend and Node.js for server-side operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      stack: ["React.js", "Node.js", "OpenWeatherMap API"]
    },
    {
      title: "Hotel-Management-OOP-Project",
      description: "The Hotel Management tool efficiently handles customer details, room bookings, food orders, and billing while maintaining records using file handling. It leverages multithreading for parallel execution and implements user-defined exceptions for error handling.",
      tech: ["Java"],
      stack: ["Java Swing"]
    }
  ];

  const weeklyLogs = [
    // ... (keep the weeklyLogs array the same as before)
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
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeSection === section
                      ? 'border-[#AA4465] text-white'
                      : 'border-transparent text-[#462255] hover:border-[#FFA69E] hover:text-[#462255]'
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
                  <p className="text-sm text-[#462255]">Software Engineer</p>
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

            {/* Summary and Education */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
                <h3 className="text-lg font-semibold text-[#462255]">About Me</h3>
                <p className="mt-4 text-[#462255]">
                A tech enthusiast with a passion for software development, AI, and cloud computing, I have worked on multiple projects, including cloud-based applications and full-stack development. Certified in AWS Cloud Quest and Cloud Practitioner Essentials, I am also an active dancer and athlete, balancing technical expertise with creativity and teamwork.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-[#AA4465]" />
                <a
                  href="/pdf/resume.pdf"
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
                  <h4 className="font-medium text-[#462255]">Graphic Era Hill University (2022–2026)</h4>
                  <p className="text-sm text-[#462255]">B.Tech in Computer Science — CGPA: 7.5/10</p>
                  <p className="mt-2 text-sm text-[#462255]">
                  My academic journey includes hands-on experience in Data Structures & Algorithms, Database Management Systems, Cloud Computing, Object-Oriented Programming, and Full-Stack Development, equipping me with a strong foundation in problem-solving and software engineering.
                  </p>
                </div>
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
                    {['Python', 'JavaScript', 'C/C++', 'SQL', 'Java'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#AA4465] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#462255]">Web Development</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['React', 'Node.js'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#AA4465] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#462255]">Tools</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Git', 'AWS', 'MySQL', 'Linux'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#AA4465] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#AA4465]">
              <h3 className="text-lg font-semibold text-[#462255]">Achievements</h3>
              <ul className="mt-4 space-y-3 list-disc list-inside text-[#462255]">
                <li>AWS Machine Learning Learning Plan Earned: May 2025.</li>
                <li>AWS Cloud Quest: Cloud Practitioner-AmazonWeb Services (AWS) Earned: March 2025.</li>
                <li>AWS Cloud Practitioner Essentials-AmazonWeb Services (AWS) Completed: January 2025.</li>
                <li>Certificate of Appreciation-Project Showcase Graphic Era Hill University, Nov 2024 Awarded for excellent
                performance in the Project Showcase event organized by the Innofusion Club, Research Innovation Cell.</li>
                <li>Certificate of Participation-Hacker-Ramp WeForShe (2024) Myntra Designs Pvt. Ltd.
                Successfully participated in Phase 2 of the Hacker-Ramp WeForShe competition as part of Team FOXORT f
                rom Graphic Era (Deemed to be University), Dehradun.</li>
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
                      {Array.isArray(log.details)
                        ? log.details.map((detail, i) => <p key={i}>{detail}</p>)
                        : <p>{log.details}</p>}
                    </div>
                  )}
                  {/* Watch Progress Video link */}
                  <a
                    href={log.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm text-[#462255] hover:text-[#AA4465]"
                  >
                    <Youtube className="h-4 w-4 mr-1" />
                    Watch Progress Video
                  </a>
                  {/* PDF link section added below each week */}
                  <div className="flex items-center space-x-3 mt-2">
                    <FileText className="h-5 w-5 text-[#AA4465]" />
                    <a
                      href={log.pdf || `/pdf/${log.week.replace(/\s+/g, '').toLowerCase()}.pdf`}
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