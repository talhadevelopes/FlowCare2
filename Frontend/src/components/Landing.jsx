import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  GraduationCap,
  ShoppingBag,
  ActivitySquare,
  Stethoscope,
  Bot,
  ChevronRight,
  Calendar,
  Heart,
  Moon,
  Sun,
  Droplet,
  Utensils,
  Menu,
  X,
  Check,
  Star,
  Users,
  ArrowRight,
} from "lucide-react";

export function Landing() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside className="bg-pink-50 dark:bg-gray-800 w-64 min-h-screen p-4">
        <nav className="mt-8 space-y-4">
          <h1 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-8">
            FlowCare
          </h1>
          <SidebarLink
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            onClick={() => navigate("/Dashboard")}
          />
          <SidebarLink
            icon={<Home size={20} />}
            label="Home"
            active
            onClick={() => navigate("/")}
          />
          <SidebarLink
            icon={<GraduationCap size={20} />}
            label="Education"
            onClick={() => navigate("/blogs")}
            
          />
          <SidebarLink
            icon={<ShoppingBag size={20} />}
            label="Shop"
            onClick={() => navigate("/Ecom")}
          />
          <SidebarLink
            icon={<ActivitySquare size={20} />}
            label="Track Your Health"
            onClick={() => navigate("/tracker")}
          />
          <SidebarLink
            icon={<Stethoscope size={20} />}
            label="Expert Consultation"
            onClick={() => navigate("/consultations")}
          />
          <SidebarLink
            icon={<Bot size={20} />}
            label="AI Chatbot"
            onClick={() => navigate("/ChatBot")}
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400">
              Welcome to FlowCare
            </h2>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Hero Section */}
          <Card>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-8">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  Your Trusted Companion for Better Health
                </h1>
                <p className="text-xl mb-4 text-gray-800 dark:text-gray-200">
                  Empowering women through personalized health tracking and
                  education.
                </p>
                <p className="text-lg mb-6 text-gray-800 dark:text-gray-200">
                  Explore, learn, and connect with a community that cares about
                  your well-being.
                </p>
                <button
                  onClick={() => navigate("/Signup")}
                  className="bg-pink-600 dark:bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-700 dark:hover:bg-pink-600 transition-colors"
                >
                  Join Us!
                </button>
              </div>
              {/* <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <img src="/placeholder.svg?height=300&width=400" alt="FlowCare App" className="rounded-lg shadow-lg" />
              </div> */}
            </div>
          </Card>

          {/* Features Overview */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Comprehensive Health Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureOverview
                icon={
                  <LayoutDashboard className="h-8 w-8 text-pink-500 dark:text-pink-400" />
                }
                title="Personalized Dashboard"
                description="Get a quick overview of your health status and upcoming activities."
              />
              <FeatureOverview
                icon={
                  <GraduationCap className="h-8 w-8 text-pink-500 dark:text-pink-400" />
                }
                title="Educational Resources"
                description="Access a wealth of articles and videos on women's health topics."
              />
              <FeatureOverview
                icon={
                  <ShoppingBag className="h-8 w-8 text-pink-500 dark:text-pink-400" />
                }
                title="Curated Shop"
                description="Find health and wellness products tailored to your needs."
              />
              <FeatureOverview
                icon={
                  <ActivitySquare className="h-8 w-8 text-pink-500 dark:text-pink-400" />
                }
                title="Health Tracking"
                description="Monitor your cycle, symptoms, and overall well-being with easy-to-use tools."
              />
              <FeatureOverview
                icon={
                  <Stethoscope className="h-8 w-8 text-pink-500 dark:text-pink-400" />
                }
                title="Expert Consultations"
                description="Connect with healthcare professionals for personalized advice."
              />
              <FeatureOverview
                icon={
                  <Bot className="h-8 w-8 text-pink-500 dark:text-pink-400" />
                }
                title="AI-Powered Chatbot"
                description="Get instant answers to your health questions anytime, anywhere."
              />
            </div>
          </Card>

          {/* Key Benefits Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Key Benefits of Using FlowCare
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BenefitItem
                title="Personalized Insights"
                description="Receive tailored health recommendations based on your unique data and patterns."
              />
              <BenefitItem
                title="Holistic Approach"
                description="Address all aspects of your health: physical, mental, and emotional well-being."
              />
              <BenefitItem
                title="Expert-Backed Content"
                description="Access reliable, up-to-date information curated by healthcare professionals."
              />
              <BenefitItem
                title="Community Support"
                description="Connect with others, share experiences, and find support in our inclusive community."
              />
            </div>
          </Card>

          {/* Our Mission Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Mission
            </h3>
            <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">
              At FlowCare, we're committed to revolutionizing women's health
              management. Our mission is to empower women with the knowledge,
              tools, and support they need to take control of their health and
              well-being.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              We believe that every woman deserves access to personalized health
              insights, expert guidance, and a supportive community. Through
              innovation and compassion, we're building a future where women's
              health is understood, prioritized, and optimized.
            </p>
          </Card>

          {/* How It Works Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              How FlowCare Works
            </h3>
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
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              What Our Users Say
            </h3>
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
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Latest from Our Blog
            </h3>
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

          {/* New Section: Success Stories */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SuccessStoryCard
                name="Jessica M."
                story="After struggling with irregular cycles for years, FlowCare helped me understand my body better. Within 3 months, I could predict my cycle accurately!"
                improvement="Cycle Regularity"
              />
              <SuccessStoryCard
                name="Olivia T."
                story="The nutritional guidance on FlowCare transformed my diet. My energy levels have improved, and I've noticed a significant reduction in PMS symptoms."
                improvement="Overall Well-being"
              />
            </div>
          </Card>

          {/* New Section: Expert Insights */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Expert Insights
            </h3>
            <div className="space-y-6">
              <ExpertInsightCard
                expert="Dr. Amanda Lee, OB/GYN"
                insight="Regular tracking of menstrual cycles can lead to early detection of various health issues. FlowCare's comprehensive tracking features make this process easy and insightful for users."
              />
              <ExpertInsightCard
                expert="Samantha Wong, Nutritionist"
                insight="The personalized nutritional recommendations provided by FlowCare are based on solid scientific research. They can significantly improve hormonal balance and overall health."
              />
            </div>
          </Card>

          {/* New Section: Community Highlights */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Community Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CommunityHighlightCard
                title="Monthly Wellness Challenges"
                description="Join our community-wide challenges focused on different aspects of women's health each month."
              />
              <CommunityHighlightCard
                title="Support Groups"
                description="Connect with women facing similar health challenges in our moderated support groups."
              />
              <CommunityHighlightCard
                title="Expert Q&A Sessions"
                description="Participate in live Q&A sessions with health experts and get your questions answered."
              />
            </div>
          </Card>

          {/* FAQ Section */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Frequently Asked Questions
            </h3>
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
              <FAQItem
                question="How does FlowCare protect my privacy?"
                answer="We use state-of-the-art encryption and follow strict data protection protocols. Your personal information is never sold or shared with third parties without your explicit consent."
              />
              <FAQItem
                question="Can I use FlowCare if I'm not menstruating?"
                answer="FlowCare offers features for all aspects of women's health, including general wellness tracking, nutritional guidance, and mental health support."
              />
              <FAQItem
                question="Are the health articles on FlowCare written by professionals?"
                answer="Yes, all our educational content is created or reviewed by qualified healthcare professionals to ensure accuracy and relevance."
              />
            </div>
          </Card>

          {/* New Section: App Features Showcase */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              App Features Showcase
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AppFeatureCard
                title="Cycle Prediction"
                description="Our AI-powered algorithm learns from your data to provide accurate cycle predictions."
                icon={<Calendar className="h-8 w-8 text-pink-500" />}
              />
              <AppFeatureCard
                title="Symptom Tracking"
                description="Log and monitor various symptoms to gain insights into your health patterns."
                icon={<ActivitySquare className="h-8 w-8 text-pink-500" />}
              />
              <AppFeatureCard
                title="Nutrition Guide"
                description="Get personalized nutrition advice based on your cycle phase and health goals."
                icon={<Utensils className="h-8 w-8 text-pink-500" />}
              />
              <AppFeatureCard
                title="Mood Tracking"
                description="Track your emotional well-being and identify patterns related to your cycle."
                icon={<Heart className="h-8 w-8 text-pink-500" />}
              />
            </div>
          </Card>

          {/* New Section: Partnerships */}
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Our Trusted Partners
            </h3>
            <p className="text-lg mb-6 text-gray-800 dark:text-gray-200">
              We collaborate with leading healthcare providers, research
              institutions, and wellness brands to bring you the best in women's
              health care.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <PartnerLogo name="HealthTech Inc." />
              <PartnerLogo name="WomenWell Research" />
              <PartnerLogo name="NutriBalance" />
              <PartnerLogo name="MindfulHer" />
            </div>
          </Card>

          {/* CTA */}
          <Card>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Ready to Take Control of Your Health?
              </h3>
              <p className="mb-6 text-gray-800 dark:text-gray-200">
                Join FlowCare today and start your journey to better health and
                wellness.
              </p>
              <button
                onClick={() => navigate("/Signup")}
                className="bg-pink-600 dark:bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 dark:hover:bg-pink-600 transition-colors"
              >
                Sign Up Now
              </button>
            </div>
          </Card>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Company
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Resources
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Connect
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                &copy; 2023 FlowCare. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

const SidebarLink = ({ icon, label, onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full px-2 py-2 rounded-lg transition-colors ${
        active
          ? "bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-200"
          : "text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const Card = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      {children}
    </div>
  );
};

const FeatureOverview = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-gray-800 dark:text-gray-200">{description}</p>
      </div>
    </div>
  );
};

const BenefitItem = ({ title, description }) => {
  return (
    <div className="border-l-4 border-pink-500 pl-4">
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-800 dark:text-gray-200">{description}</p>
    </div>
  );
};

const StepCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
          {number}
        </span>
      </div>
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-800 dark:text-gray-200">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-pink-50 dark:bg-pink-900 p-4 rounded-lg">
      <p className="italic mb-2 text-gray-800 dark:text-gray-200">"{quote}"</p>
      <p className="font-semibold text-right text-gray-900 dark:text-gray-100">
        - {author}
      </p>
    </div>
  );
};

const BlogPostCard = ({ title, excerpt, date }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-800 dark:text-gray-200 mb-2">{excerpt}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">{date}</p>
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
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {question}
        </span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-800 dark:text-gray-200">{answer}</p>
      )}
    </div>
  );
};

const SuccessStoryCard = ({ name, story, improvement }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {name}
      </h4>
      <p className="text-gray-800 dark:text-gray-200 mb-4">"{story}"</p>
      <div className="flex items-center">
        <Check className="text-green-500 mr-2" />
        <span className="text-green-600 dark:text-green-400 font-medium">
          {improvement}
        </span>
      </div>
    </div>
  );
};

const ExpertInsightCard = ({ expert, insight }) => {
  return (
    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
      <p className="text-gray-800 dark:text-gray-200 mb-4">"{insight}"</p>
      <p className="font-semibold text-right text-gray-900 dark:text-gray-100">
        - {expert}
      </p>
    </div>
  );
};

const CommunityHighlightCard = ({ title, description }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-gray-800 dark:text-gray-200">{description}</p>
    </div>
  );
};

const AppFeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 bg-pink-100 dark:bg-pink-900 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-gray-800 dark:text-gray-200">{description}</p>
      </div>
    </div>
  );
};

const PartnerLogo = ({ name }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 h-20 rounded-lg flex items-center justify-center">
      <span className="text-gray-500 dark:text-gray-400 font-medium">
        {name}
      </span>
    </div>
  );
};
