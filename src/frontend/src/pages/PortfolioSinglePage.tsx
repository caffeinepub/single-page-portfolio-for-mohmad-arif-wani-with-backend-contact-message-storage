import { Phone, Mail, Github, Linkedin, Award, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ContactForm from '@/features/contact/ContactForm';
import { Reveal } from '@/components/Reveal';
import { CONTACT_EMAIL } from '@/content/contact';
import { PROFILE_PHOTO_PATH } from '@/content/profilePhoto';
import PortfolioBackground from '@/components/PortfolioBackground';
import { useState, useEffect } from 'react';

export default function PortfolioSinglePage() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'objective', 'education', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Colorful Aurora Background */}
      <PortfolioBackground />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-lg font-bold text-gradient-shimmer hover:text-primary transition-all duration-300 motion-safe:hover:scale-105"
              >
                MAW
              </button>
              <div className="hidden md:flex items-center space-x-6">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'objective', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'certifications', label: 'Certifications' },
                  { id: 'contact', label: 'Contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-all duration-300 hover:text-primary motion-safe:hover:-translate-y-0.5 ${
                      activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <Button variant="default" size="sm" asChild className="motion-safe:hover:scale-105 transition-transform duration-300">
              <a href="#resume" className="font-medium">
                Resume
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/generated/portfolio-hero-bg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient-rainbow">
                    Mohmad Arif Wani
                  </h1>
                  <p className="text-2xl md:text-3xl font-semibold text-gradient-shimmer">
                    Data Scientist & Machine Learning Enthusiast
                  </p>
                  <p className="text-lg text-muted-foreground max-w-xl">
                    A detail-oriented Computer Science graduate with a passion for solving real-world problems with data.
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 6005659068</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{CONTACT_EMAIL}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/ArifWani12312300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      github.com/ArifWani12312300
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection('projects')}
                    className="motion-safe:hover:scale-105 motion-safe:hover:shadow-lg transition-all duration-300"
                  >
                    View My Work
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => scrollToSection('contact')}
                    className="motion-safe:hover:scale-105 motion-safe:hover:shadow-lg transition-all duration-300"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-pink-500/30 rounded-full blur-3xl motion-safe:animate-pulse" />
                  {/* Profile photo - To replace: frontend/public/assets/generated/random-profile-photo.dim_800x800.jpg */}
                  <img
                    src={PROFILE_PHOTO_PATH}
                    alt="Mohmad Arif Wani"
                    width="320"
                    height="320"
                    className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary/20 shadow-2xl motion-safe:hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="objective" className="py-20 bg-muted/20 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-4xl font-bold mb-8 text-center text-gradient-cosmic">About Me</h2>
            </Reveal>
            <Reveal delay={100}>
              <Card className="border-2 motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Highly motivated and detail-oriented Computer Science graduate with a Master of Computer Applications (MCA). 
                    Seeking an entry-level position as a Data Scientist, where I can apply my skills in machine learning, data 
                    analysis, and software development to solve complex real-world problems and contribute to organizational success.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient-sunset">Education</h2>
          </Reveal>
          <div className="max-w-5xl mx-auto space-y-6">
            <Reveal delay={100}>
              <Card className="border-l-4 border-l-primary motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <span className="text-gradient-primary">Master of Computer Applications (MCA)</span>
                      </CardTitle>
                      <CardDescription className="text-base">University of Kashmir</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">2019 - 2023</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-3">CGPA: 7.9</p>
                  <p className="text-sm label-emphasis-purple mb-2">Key Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Data Science', 'Advanced Algorithms', 'Data Structures', 'AI', 'Web Development', 'Python'].map((course) => (
                      <Badge key={course} variant="outline" className="motion-safe:hover:scale-110 transition-transform duration-200">{course}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card className="border-l-4 border-l-primary motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <span className="text-gradient-primary">Diploma in COPA</span>
                      </CardTitle>
                      <CardDescription className="text-base">ITI, Seer Hamdan (J&K)</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">2018</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-3">Percentage: 84%</p>
                  <p className="text-sm label-emphasis-cyan mb-2">Key Learning:</p>
                  <div className="flex flex-wrap gap-2">
                    {['MS Office', 'HTML', 'CSS', 'Cyber Security'].map((skill) => (
                      <Badge key={skill} variant="outline" className="motion-safe:hover:scale-110 transition-transform duration-200">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card className="border-l-4 border-l-primary motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <span className="text-gradient-primary">Bachelor of Science (BSc)</span>
                      </CardTitle>
                      <CardDescription className="text-base">Government Boys Degree College, Anantnag</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">2014 - 2017</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm label-emphasis-coral mb-2">Key Learning:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Differentiation', 'Integration', 'Statistical Distributions', 'Probability'].map((topic) => (
                      <Badge key={topic} variant="outline" className="motion-safe:hover:scale-110 transition-transform duration-200">{topic}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/20 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient-rainbow">Technical Toolkit</h2>
          </Reveal>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Programming Languages', skills: ['Python', 'JavaScript', 'Java', 'SQL'] },
              { title: 'ML & Data Science', skills: ['Data Analysis', 'Scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'Matplotlib', 'Seaborn', 'Plotly'] },
              { title: 'Web Development', skills: ['HTML', 'CSS', 'JavaScript', 'Flask', 'Streamlit'] },
              { title: 'Tools & Technologies', skills: ['Git', 'GitHub', 'Jupyter Notebooks', 'Power BI', 'PyCharm', 'Anaconda'] },
              { title: 'Office & Finance', skills: ['MS Word', 'MS Excel', 'MS PowerPoint', 'LibreOffice', 'Tally ERP-9', 'Tally Prime', 'Busy Software'] },
              { title: 'Other Strengths', skills: ['Strong Typing (50 WPM)', 'Problem Solving', 'Linux Basics'] },
            ].map((category, idx) => (
              <Reveal key={category.title} delay={idx * 100}>
                <Card className="motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      <span className="text-gradient-shimmer">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} className="motion-safe:hover:scale-110 transition-transform duration-200">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient-cosmic">Featured Projects</h2>
          </Reveal>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <Reveal delay={100}>
              <Card className="flex flex-col motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl text-gradient-sunset">COVID-19 Detection & Analysis</CardTitle>
                  <CardDescription>Machine Learning Model with Interactive Dashboard</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4">
                    Built a machine learning model using supervised techniques to analyze and predict COVID-19 presence 
                    based on symptoms. Created an interactive data visualization dashboard.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs label-emphasis-coral mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Seaborn'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs motion-safe:hover:scale-110 transition-transform duration-200">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">90% Accuracy</Badge>
                  </div>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" asChild className="w-full motion-safe:hover:scale-105 transition-transform duration-300">
                      <a href="https://github.com/ArifWani12312300/MyProjectCovid-19/tree/main" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card className="flex flex-col motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl text-gradient-sunset">J&K Temperature Prediction</CardTitle>
                  <CardDescription>Time Series Analysis & Forecasting</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed a time series forecasting model to predict temperature trends in Jammu & Kashmir. 
                    Implemented data preprocessing, feature engineering, and model evaluation techniques.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs label-emphasis-purple mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs motion-safe:hover:scale-110 transition-transform duration-200">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20">Time Series Model</Badge>
                  </div>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" asChild className="w-full motion-safe:hover:scale-105 transition-transform duration-300">
                      <a href="https://github.com/ArifWani12312300/J-K-Temperature-Prediction" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card className="flex flex-col motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl text-gradient-sunset">Iris Flower Classification</CardTitle>
                  <CardDescription>Multi-class Classification Model</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4">
                    Built a classification model to identify iris flower species based on sepal and petal measurements. 
                    Explored multiple algorithms and compared their performance.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs label-emphasis-cyan mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs motion-safe:hover:scale-110 transition-transform duration-200">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/20">Classification</Badge>
                  </div>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" asChild className="w-full motion-safe:hover:scale-105 transition-transform duration-300">
                      <a href="https://github.com/ArifWani12312300/Iris-Flower-Classification" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={400}>
              <Card className="flex flex-col motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl text-gradient-sunset">Sales Prediction Model</CardTitle>
                  <CardDescription>Regression Analysis & Forecasting</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4">
                    Created a predictive model to forecast sales based on advertising spend across different channels. 
                    Performed exploratory data analysis and feature selection.
                  </p>
                  <div className="mb-4">
                    <p className="text-xs label-emphasis-coral mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs motion-safe:hover:scale-110 transition-transform duration-200">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20">Regression</Badge>
                  </div>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" asChild className="w-full motion-safe:hover:scale-105 transition-transform duration-300">
                      <a href="https://github.com/ArifWani12312300/Sales-Prediction" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/20 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient-sunset">Professional Experience</h2>
          </Reveal>
          <div className="max-w-5xl mx-auto space-y-6">
            <Reveal delay={100}>
              <Card className="border-l-4 border-l-primary motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                        <span className="text-gradient-primary">Accountant</span>
                      </CardTitle>
                      <CardDescription className="text-base">Wani Enterprises, Anantnag (J&K)</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">2023 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Managed financial records and transactions using Tally ERP-9, Tally Prime, and Busy Software</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Prepared detailed financial reports and maintained accurate bookkeeping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Streamlined accounting processes and improved data accuracy</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <p className="text-xs label-emphasis-purple mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Tally ERP-9', 'Tally Prime', 'Busy Software', 'Financial Reporting', 'MS Excel'].map((skill) => (
                        <Badge key={skill} variant="outline" className="motion-safe:hover:scale-110 transition-transform duration-200">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient-cosmic">Certifications & Achievements</h2>
          </Reveal>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Reveal delay={100}>
              <Card className="motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-gradient-primary">Python for Data Science</span>
                  </CardTitle>
                  <CardDescription>NPTEL (IIT Madras)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive course covering Python programming fundamentals, data structures, and data science libraries.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card className="motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-gradient-primary">Machine Learning</span>
                  </CardTitle>
                  <CardDescription>NPTEL (IIT Kharagpur)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced course on machine learning algorithms, model evaluation, and practical applications.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card className="motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-gradient-primary">Data Science Foundations</span>
                  </CardTitle>
                  <CardDescription>Online Certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Covered statistical analysis, data visualization, and exploratory data analysis techniques.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={400}>
              <Card className="motion-safe:hover:shadow-xl motion-safe:hover:scale-[1.02] transition-all duration-300 bg-background/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-gradient-primary">Web Development</span>
                  </CardTitle>
                  <CardDescription>Self-paced Learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Proficient in HTML, CSS, JavaScript, and modern web frameworks like Flask and Streamlit.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/20 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-4xl font-bold mb-8 text-center text-gradient-rainbow">Get In Touch</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and technology.
            </p>
          </Reveal>
          <div className="max-w-2xl mx-auto">
            <Reveal delay={200}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/95 backdrop-blur py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mohmad Arif Wani. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <span className="text-red-500">❤</span>
              <span>using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'portfolio-app'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ArifWani12312300"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary motion-safe:hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/mohmad-arif-wani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary motion-safe:hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
