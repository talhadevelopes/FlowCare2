import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Home, GraduationCap, ShoppingBag, ActivitySquare, Stethoscope, Bot, ChevronRight, Calendar, Heart, Moon, Sun, Droplet, Utensils, Menu, X } from 'lucide-react';

export function Landing() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''} bg-pink-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans`}>
      {/* Sidebar */}
      <aside className="hidden md:flex w-[240px] bg-white dark:bg-gray-800 p-6 flex-col">
        <h1 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-6">FlowCare</h1>
        <nav className="flex-1">
          <ul className="space-y-2">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={() => navigate('/dashboard')} />
            <NavItem icon={<Home size={20} />} label="Home" onClick={() => navigate('/')} active />
            <NavItem icon={<GraduationCap size={20} />} label="Education" onClick={() => navigate('/blogs')} />
            <NavItem icon={<ShoppingBag size={20} />} label="Shop" onClick={() => navigate('/Ecom')} />
            <NavItem icon={<ActivitySquare size={20} />} label="Track Your Health" onClick={() => navigate('/tracker')} />
            <NavItem icon={<Stethoscope size={20} />} label="Expert Consultation" onClick={() => navigate('/consultations')} />
            <NavItem icon={<Bot size={20} />} label="AI Chatbot" onClick={() => navigate('/ChatBot')} />
          </ul>
        </nav>
        <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-300">
              UN
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">User Name</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Guest</p>
            </div>
            <ChevronRight size={16} className="ml-auto text-gray-400" />
          </div>
        </div>
      </aside>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-20 p-2 bg-white dark:bg-gray-800 rounded-md shadow-md"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-10">
            <div className="bg-white dark:bg-gray-800 w-64 h-full p-6">
              <h1 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-6">FlowCare</h1>
              <nav>
                <ul className="space-y-2">
                  <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={() => { navigate('/dashboard'); setIsMobileMenuOpen(false); }} />
                  <NavItem icon={<Home size={20} />} label="Home" onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} active />
                  <NavItem icon={<GraduationCap size={20} />} label="Education" onClick={() => { navigate('/blogs'); setIsMobileMenuOpen(false); }} />
                  <NavItem icon={<ShoppingBag size={20} />} label="Shop" onClick={() => { navigate('/Ecom'); setIsMobileMenuOpen(false); }} />
                  <NavItem icon={<ActivitySquare size={20} />} label="Track Your Health" onClick={() => { navigate('/tracker'); setIsMobileMenuOpen(false); }} />
                  <NavItem icon={<Stethoscope size={20} />} label="Expert Consultation" onClick={() => { navigate('/consultations'); setIsMobileMenuOpen(false); }} />
                  <NavItem icon={<Bot size={20} />} label="AI Chatbot" onClick={() => { navigate('/ChatBot'); setIsMobileMenuOpen(false); }} />
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400">Welcome to FlowCare</h2>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Hero Section */}
          <Card>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Your Trusted Companion for Better Health</h1>
                <p className="text-lg mb-6">Explore, learn, and connect with a community that cares about your well-being.</p>
                <button 
                  onClick={() => navigate('/Signup')}
                  className="bg-pink-600 dark:bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-700 dark:hover:bg-pink-600 transition-colors"
                >
                  Join Us!
                </button>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <img src="/placeholder.svg?height=300&width=400" alt="Women's Health" className="rounded-lg shadow-md" />
              </div>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Explore Blogs"
              description="Stay informed with our latest articles on women's health and wellness."
              icon={<GraduationCap className="h-8 w-8 text-pink-500 dark:text-pink-400" />}
              onClick={() => navigate('/blogs')}
            />
            <FeatureCard
              title="Track Your Health"
              description="Monitor your cycle, symptoms, and overall well-being with our easy-to-use tools."
              icon={<ActivitySquare className="h-8 w-8 text-pink-500 dark:text-pink-400" />}
              onClick={() => navigate('/tracker')}
            />
            <FeatureCard
              title="Connect with People"
              description="Join our supportive community and share experiences with others."
              icon={<Heart className="h-8 w-8 text-pink-500 dark:text-pink-400" />}
              onClick={() => navigate('/community')}
            />
            <FeatureCard
              title="Shop Products"
              description="Discover curated products for your health and wellness needs."
              icon={<ShoppingBag className="h-8 w-8 text-pink-500 dark:text-pink-400" />}
              onClick={() => navigate('/Ecom')}
            />
            <FeatureCard
              title="Expert Consultation"
              description="Get personalized advice from our network of healthcare professionals."
              icon={<Stethoscope className="h-8 w-8 text-pink-500 dark:text-pink-400" />}
              onClick={() => navigate('/consultations')}
            />
            <FeatureCard
              title="AI Chatbot"
              description="Get instant answers to your health questions with our AI-powered chatbot."
              icon={<Bot className="h-8 w-8 text-pink-500 dark:text-pink-400" />}
              onClick={() => navigate('/ChatBot')}
            />
          </div>

          {/* How It Works Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6">How FlowCare Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StepCard
                number={1}
                title="Sign Up"
                description="Create your account and set up your profile with basic health information."
              />
              <StepCard
                number={2}
                title="Track Your Health"
                description="Log your symptoms, cycle, and wellness data regularly for personalized insights."
              />
              <StepCard
                number={3}
                title="Get Insights"
                description="Receive tailored recommendations and connect with experts for better health management."
              />
            </div>
          </Card>

          {/* Testimonials */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6">What Our Users Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TestimonialCard
                quote="FlowCare has completely changed how I manage my health. It's like having a personal health assistant!"
                author="Sarah J."
              />
              <TestimonialCard
                quote="The community here is so supportive. I've learned so much and feel empowered to take control of my well-being."
                author="Emily R."
              />
            </div>
          </Card>

          {/* Latest Blog Posts */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6">Latest from Our Blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BlogPostCard
                title="Understanding Your Menstrual Cycle"
                excerpt="Learn about the four phases of the menstrual cycle and how they affect your body and mood."
                date="May 15, 2023"
              />
              <BlogPostCard
                title="Nutrition Tips for Hormonal Balance"
                excerpt="Discover the foods that can help regulate your hormones and improve your overall health."
                date="May 10, 2023"
              />
              <BlogPostCard
                title="Stress Management Techniques"
                excerpt="Explore effective ways to manage stress and its impact on your menstrual health."
                date="May 5, 2023"
              />
            </div>
          </Card>

          {/* FAQ Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <FAQItem
                question="Is my data safe and private?"
                answer="Yes, we take your privacy seriously. All your data is encrypted and we never share your personal information with third parties."
              />
              <FAQItem
                question="Can I use FlowCare if I have irregular cycles?"
                answer="FlowCare is designed to accommodate all types of cycles, including irregular ones. Our AI adapts to your unique patterns over time."
              />
              <FAQItem
                question="How often should I log my symptoms?"
                answer="For the best results, we recommend logging your symptoms daily. However, even logging a few times a week can provide valuable insights."
              />
            </div>
          </Card>

          {/* CTA */}
          <Card>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Take Control of Your Health?</h3>
              <p className="mb-6">Join FlowCare today and start your journey to better health and wellness.</p>
              <button 
                onClick={() => navigate('/Signup')}
                className="bg-pink-600 dark:bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 dark:hover:bg-pink-600 transition-colors"
              >
                Sign Up Now
              </button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

const NavItem = ({ icon, label, onClick, active = false }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm w-full text-left ${
          active ? "bg-pink-50 dark:bg-pink-900 text-pink-600 dark:text-pink-400" : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
        }`}
      >
        {icon}
        {label}
      </button>
    </li>
  );
};

const Card = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      {children}
    </div>
  );
};

const FeatureCard = ({ title, description, icon, onClick }) => {
  return (
    <Card>
      <div className="flex flex-col items-center text-center cursor-pointer" onClick={onClick}>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Card>
  );
};

const StepCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center
 text-center">
      <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">{number}</span>
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-pink-50 dark:bg-pink-900 p-4 rounded-lg">
      <p className="italic mb-2">"{quote}"</p>
      <p className="font-semibold text-right">- {author}</p>
    </div>
  );
};

const BlogPostCard = ({ title, excerpt, date }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{excerpt}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600 dark:text-gray-300">{answer}</p>}
    </div>
  );
};

