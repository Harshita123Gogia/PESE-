import { useState } from 'react';
// Update the import line at the top
import { FileText, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

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
    {
      week: "Week 1.a",
      summary: "Self introduction based on Sixer Theory",
      details: [
        `Hello everyone, my name is Harshita Gogia. I am currently in my pre-final year, pursuing a BTech in Computer Science and Engineering at Graphic Era Hill University, Dehradun. I completed my schooling at St. Jude's School, Dehradun, where I developed a strong foundation in PCM and Computers.

I have always been passionate about technology, problem-solving, and innovation, and my ultimate aim is to build a career in software development and cloud computing.

I have been actively involved in several projects, including:

- **AWS Cloud Computing Projects:** Worked on hand-on labs and real-world cloud deployment scenarios as part of my AWS certifications.
- **Blood Bank Management System:** The Blood Bank Management System (BBMS) is a browser-based platform that streamlines blood donation services, inventory management, and donor records while ensuring transparency, efficiency, and corruption-free operations.
- **Weather Dashboard using React:** This project involves developing a real-time weather application using React.js, Node.js, and a weather API to provide users with up-to-date weather information through a user-friendly interface.

To enhance my technical skills, I have earned the AWS Cloud Quest: Cloud Practitioner certification and completed the AWS Cloud Practitioner Essentials course. These certifications have deepened my understanding of cloud computing, infrastructure, and deployment strategies.

Beyond academics, I am a passionate dancer and an active member of the Dehradun Bhangra Club. I have participated in India's Got Talent auditions and various dance competitions. Additionally, I enjoy playing badminton, athletics, and travelling to spiritual places.

I believe in continuous learning, preserverance, and hard work. I am excited about the opportunities ahead and look forward to contributing my skills and enthusiasm to the field of software development, AI, and cloud computing.

Thank you for your time.`
      ],
      link: "https://youtube.com/shorts/d-eHyNb5luk?feature=share",
      pdf: "/pdf/Week1.a.pdf"
    },
    {
      week: "Week 1.b",
      summary: "Self introduction based on 5 Ring Theory",
      details: [
        `Hello everyone, my name is Harshita Gogia, and I am from Patel Nagar, Dehradun. I am currently in my pre-final year, pursuing a BTech in Computer Science and Engineering at Graphic Era Hill University, Dehradun. I completed my schooling at St. Jude's School, Dehradun, where I developed a strong foundation in PCM and Computers.

I come from a supportive and loving family that has always encouraged me to work hard and strive for excellence. Their guidance has played a crucial role in shaping my aspirations and values.

My goal is to secure a position in a well-known organization where I can apply my technical knowledge and skills in software developmemt and cloud computing. In the long run, I aim to attain a leadership role in my profession, contributing to technological advancements and innovations.

I believe in dedication, perseverance, and continuous learning, and I am eager to embrace new opportunities that will help me grow both personally and professionally.

Thank you for your time.`
      ],
      link: "https://youtube.com/shorts/yxUbfe8mp1c?feature=share",
      pdf: "/pdf/Week1.b.pdf"
    },
    {
      week: "Week 3",
      summary: "How to write resume",
      link: "https://youtube.com/shorts/KTGCLepDEXU?feature=share",
      pdf: "/pdf/Week3.pdf"
    },
    {
      week: "Assignment",
      summary: "Movie Review- Pursuit of Happyness",
      link: "https://youtu.be/B9ZWUc4vAIA?si=fipVmf516njwLyu6",
      pdf: "/pdf/assignment.pdf"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFD1DC' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full shadow-sm z-50" style={{ backgroundColor: '#FFC0CB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {['about', 'projects', 'weekly'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeSection === section
                      ? 'border-[#FFD1DC] text-white'
                      : 'border-transparent text-[#FFD1DC] hover:border-[#FF69B4]hover:text-[#FFD1DC]'
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
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#FF69B4]">
                <div className="text-center">
                  <img
                    className="h-32 w-32 rounded-full mx-auto ring-4 ring-[#FF69B4]"
                    src="/img/potr.jpg"
                    alt="Profile"
                  />
                  <h2 className="mt-4 text-xl font-bold text-[]">Harshita Gogia</h2>
                  <p className="text-sm text-[#FFC0CB]">Software Engineer</p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#FF69B4]" />
                    <span className="text-sm text-[#FFC0CB]">+91-639-874-8892</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#FF69B4]" />
                    <span className="text-sm text-[#FFC0CB]">hgogia8656@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-[#FF69B4]" />
                    <span className="text-sm text-[#FFC0CB]">Harshita Gogia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#FF69B4]" />
                    <span className="text-sm text-[#FFC0CB]">Dehradun, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary and Education */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#FF69B4]">
                <h3 className="text-lg font-semibold text-[#FFC0CB]">About Me</h3>
                <p className="mt-4 text-[#FFC0CB]">
                A tech enthusiast with a passion for software development, AI, and cloud computing, I have worked on multiple projects, including cloud-based applications and full-stack development. Certified in AWS Cloud Quest and Cloud Practitioner Essentials, I am also an active dancer and athlete, balancing technical expertise with creativity and teamwork.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-[#FF69B4]" />
                <a
                  href="/pdf/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#FFC0CB] hover:underline"
                >
                  View My Resume
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#FF69B4]">
                <h3 className="text-lg font-semibold text-[#FFC0CB]">Education</h3>
                <div className="mt-4">
                  <h4 className="font-medium text-[#FFC0CB]">Graphic Era Hill University (2022–2026)</h4>
                  <p className="text-sm text-[#FFC0CB]">B.Tech in Computer Science — CGPA: 7.5/10</p>
                  <p className="mt-2 text-sm text-[#FFC0CB]">
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
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#FF69B4]">
              <h3 className="text-lg font-semibold text-[#FFC0CB]">Technical Projects</h3>
              <div className="mt-6 grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-[#FFC0CB] pl-4 py-2">
                    <h4 className="font-medium text-[#FFC0CB]">{project.title}</h4>
                    <p className="mt-2 text-sm text-[#FFC0CB]">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-[#FFD1DC] text-[#FFC0CB] rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((s, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-[#FF69B4] text-white rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
          </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#FF69B4]">
              <h3 className="text-lg font-semibold text-[#FFC0CB]">Technical Skills</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-medium text-[#FFC0CB]">Languages</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'C/C++', 'SQL', 'Java'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#FF69B4] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#FFC0CB]">Web Development</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['React', 'Node.js'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#FF69B4] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[#FFC0CB]">Tools</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Git', 'AWS', 'MySQL', 'Linux'].map((skill, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-[#FF69B4] text-white rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#FF69B4]">
              <h3 className="text-lg font-semibold text-[#FFC0CB]">Achievements</h3>
              <ul className="mt-4 space-y-3 list-disc list-inside text-[#FFC0CB]">
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
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#FF69B4]">
            <h3 className="text-lg font-semibold text-[#FFC0CB]">Weekly Progress Log</h3>
            <div className="mt-6 space-y-6">
              {weeklyLogs.map((log, index) => (
                <div key={index} className="border-b border-[#FFD1DC] pb-6 last:border-0 last:pb-0">
                  <h4 className="font-medium text-[#FFC0CB]">{log.week}</h4>
                  <p className="mt-2 text-[#FFC0CB]">{log.summary}</p>
                  {log.details && (
                    <div className="mt-2 text-sm text-[#FFC0CB]">
                      {Array.isArray(log.details)
                        ? log.details.map((detail, i) => <p key={i}>{detail}</p>)
                        : <p>{log.details}</p>}
                    </div>
                  )}
                  {/* Watch Progress Video link */}
                  <a>
                    href={log.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm text-[#FFC0CB] hover:text-[#FF69B4]"
                  
                    <Youtube className="h-4 w-4 mr-1" />
                    Watch Progress Video
                  </a>
                  {/* PDF link section added below each week */}
                  <div className="flex items-center space-x-3 mt-2">
                    <FileText className="h-5 w-5 text-[#FF69B4]" />
                    <a
                      href={log.pdf || `/pdf/${log.week.replace(/\s+/g, '').toLowerCase()}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#FFC0CB] hover:underline"
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
