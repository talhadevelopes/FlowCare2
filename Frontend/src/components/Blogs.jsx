import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar,HeartPulse, MessageSquare, Frown, Smile, Angry, Coffee, Zap, Moon, ChevronDown, ChevronUp, Heart, Sun, LayoutDashboard, Home, GraduationCap, ShoppingBag, ActivitySquare, Stethoscope, Bot, Search, BookOpen, Utensils, Leaf, Clock, Filter, Bookmark, Share2, Award, Sparkles, Brain, Dumbbell, Pill, Droplet, X } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Menstrual Cycle",
    excerpt: "Learn about the phases of your menstrual cycle and how they affect your body.",
    author: "Dr. Emily Johnson",
    date: "2024-03-15",
    readingTime: "5 min",
    icon: <Calendar className="h-12 w-12 text-pink-500" />,
    category: "Health",
    content: "The menstrual cycle is typically 28 days long, but can range from 21 to 35 days. It consists of four main phases: menstruation, the follicular phase, ovulation, and the luteal phase. Each phase is characterized by different hormonal changes that affect your body and mood. Understanding these phases can help you better manage your health and well-being throughout your cycle."
  },
  {
    id: 2,
    title: "Nutrition Tips for a Healthy Period",
    excerpt: "Discover the best foods to eat during your menstrual cycle for optimal health.",
    author: "Nutritionist Sarah Lee",
    date: "2024-03-10",
    readingTime: "4 min",
    icon: <Utensils className="h-12 w-12 text-green-500" />,
    category: "Nutrition",
    content: "During your period, it's important to focus on foods rich in iron, such as leafy greens and lean meats, to replenish iron lost through menstruation. Omega-3 fatty acids found in fish and flaxseeds can help reduce inflammation and cramps. Staying hydrated and consuming foods high in magnesium, like nuts and seeds, can also alleviate common period symptoms."
  },
  {
    id: 3,
    title: "Managing PMS Symptoms Naturally",
    excerpt: "Explore natural remedies and lifestyle changes to alleviate PMS symptoms.",
    author: "Holistic Health Coach Maria Garcia",
    date: "2024-03-05",
    readingTime: "6 min",
    icon: <Leaf className="h-12 w-12 text-purple-500" />,
    category: "Wellness",
    content: "Natural remedies for PMS include regular exercise, stress-reduction techniques like meditation, and herbal supplements such as chasteberry and evening primrose oil. Reducing caffeine and salt intake, while increasing complex carbohydrates and calcium-rich foods, can also help balance hormones and reduce symptoms. Always consult with a healthcare provider before starting any new supplement regimen."
  },
  {
    id: 4,
    title: "The History of Menstrual Products",
    excerpt: "A journey through time exploring the evolution of menstrual products.",
    author: "Historian Dr. Alex Thompson",
    date: "2024-02-28",
    readingTime: "7 min",
    icon: <Clock className="h-12 w-12 text-blue-500" />,
    category: "History",
    content: "The history of menstrual products dates back to ancient civilizations. Early methods included using papyrus in Egypt and wool in Rome. The first commercial disposable pads were introduced in the late 19th century. Tampons were patented in the 1930s, and menstrual cups were first developed in the 1930s but gained popularity in recent decades. Today, there's a growing focus on sustainable and reusable menstrual products."
  },
  {
    id: 5,
    title: "Exercise and Your Menstrual Cycle",
    excerpt: "Learn how to optimize your workouts based on your menstrual cycle phases.",
    author: "Fitness Expert Lisa Brown",
    date: "2024-03-20",
    readingTime: "5 min",
    icon: <Dumbbell className="h-12 w-12 text-orange-500" />,
    category: "Fitness",
    content: "Your menstrual cycle can affect your energy levels and exercise performance. During the follicular phase, estrogen levels rise, potentially increasing your strength and endurance. This is a great time for high-intensity workouts. In the luteal phase, you might feel less energetic, making it ideal for lower-intensity exercises like yoga or pilates. Listen to your body and adjust your workout routine accordingly throughout your cycle."
  },
  {
    id: 6,
    title: "Hormones and Mental Health",
    excerpt: "Understand the connection between hormonal changes and mental well-being.",
    author: "Psychologist Dr. Rachel Green",
    date: "2024-03-25",
    readingTime: "6 min",
    icon: <Brain className="h-12 w-12 text-indigo-500" />,
    category: "Mental Health",
    content: "Hormonal fluctuations during the menstrual cycle can significantly impact mental health. Many women experience mood swings, anxiety, or depression, especially during the premenstrual phase. Understanding these changes can help in managing symptoms. Techniques such as cognitive-behavioral therapy, mindfulness, and in some cases, medication, can be effective in addressing hormone-related mental health concerns."
  },
  {
    id: 7,
    title: "Menstrual Hygiene Best Practices",
    excerpt: "Essential tips for maintaining proper menstrual hygiene and preventing infections.",
    author: "Gynecologist Dr. Sophia Chen",
    date: "2024-03-30",
    readingTime: "4 min",
    icon: <Droplet className="h-12 w-12 text-cyan-500" />,
    category: "Hygiene",
    content: "Proper menstrual hygiene is crucial for preventing infections and ensuring comfort. Change your menstrual product regularly, at least every 4-8 hours for pads and tampons. Wash your hands before and after changing products. If using reusable products like menstrual cups or cloth pads, ensure they are thoroughly cleaned and sterilized between uses. Avoid scented products as they can disrupt your natural pH balance."
  },
  {
    id: 8,
    title: "Hormonal Birth Control Options",
    excerpt: "An overview of different hormonal contraceptive methods and their effects on your cycle.",
    author: "Reproductive Health Specialist Dr. Mark Davis",
    date: "2024-04-05",
    readingTime: "7 min",
    icon: <Pill className="h-12 w-12 text-red-500" />,
    category: "Contraception",
    content: "Hormonal birth control methods include pills, patches, injections, and intrauterine devices (IUDs). These work by altering your hormone levels to prevent ovulation or fertilization. While effective for contraception, they can also affect your menstrual cycle, often making periods lighter or more regular. Some methods may even stop periods altogether. It's important to discuss the pros and cons of each method with your healthcare provider to find the best option for you."
  },
  {
    id: 9,
    title: "Menstrual Disorders: When to Seek Help",
    excerpt: "Learn about common menstrual disorders and signs that indicate you should consult a doctor.",
    author: "Obstetrician Dr. Laura Martinez",
    date: "2024-04-10",
    readingTime: "6 min",
    icon: <Stethoscope className="h-12 w-12 text-teal-500" />,
    category: "Health",
    content: "While some variation in menstrual cycles is normal, certain symptoms may indicate a disorder. Heavy bleeding, severe pain, irregular cycles, or bleeding between periods could be signs of conditions like endometriosis, PCOS, or fibroids. If you experience these symptoms, or if your period significantly impacts your daily life, it's important to consult with a healthcare provider for proper diagnosis and treatment."
  }
];

const womenHealthTopics = [
  {
    id: 1,
    question: "Understanding Your Menstrual Cycle",
    answer: "The menstrual cycle is a complex process involving hormonal changes that prepare your body for potential pregnancy. It typically lasts 28 days but can range from 21 to 35 days. The cycle consists of four main phases: menstruation, the follicular phase, ovulation, and the luteal phase. Each phase is characterized by different hormonal levels and physical changes in your body.",
  },
  {
    id: 2,
    question: "Breast Health and Self-Examination",
    answer: "Regular breast self-examinations are crucial for early detection of any abnormalities. Perform a self-exam once a month, preferably a few days after your period ends. Look for changes in size, shape, or color, and feel for lumps or thickening. If you notice any changes or have concerns, consult with your healthcare provider promptly.",
  },
  {
    id: 3,
    question: "Reproductive Health and Fertility",
    answer: "Reproductive health encompasses various aspects, including fertility, contraception, and sexual health. Understanding your fertile window, typically the 5 days before ovulation and the day of ovulation, is crucial for both achieving and avoiding pregnancy. Regular check-ups with a gynecologist can help monitor your reproductive health and address any concerns.",
  },
  {
    id: 4,
    question: "Menopause and Hormonal Changes",
    answer: "Menopause is a natural biological process marking the end of menstrual cycles, typically occurring in your 40s or 50s. It's preceded by perimenopause, which can last several years. Common symptoms include irregular periods, hot flashes, mood changes, and sleep disturbances. Hormone replacement therapy and lifestyle changes can help manage symptoms. Regular check-ups during this transition are important for maintaining overall health.",
  },
  {
    id: 5,
    question: "Women's Nutrition and Bone Health",
    answer: "A balanced diet is crucial for women's health, particularly for maintaining strong bones and preventing osteoporosis. Ensure adequate intake of calcium, vitamin D, and other essential nutrients. Weight-bearing exercises and strength training can also help maintain bone density. As women are at higher risk for osteoporosis, especially after menopause, it's important to prioritize bone health throughout your life.",
  },
];

export function Blogs() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [activeItem, setActiveItem] = useState(null);
  const [readSections, setReadSections] = useState(Array(womenHealthTopics.length).fill(false));
  const [completedBlogs, setCompletedBlogs] = useState(0);
  const [completedTopics, setCompletedTopics] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedPosts, setSavedPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

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

  const toggleAccordion = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
  };

  const handleRead = (index) => {
    const updatedReadSections = [...readSections];
    updatedReadSections[index] = true;
    setReadSections(updatedReadSections);
    setCompletedTopics(updatedReadSections.filter(Boolean).length);
  };

  const handleSavePost = (postId) => {
    setSavedPosts(prev => {
      if (prev.includes(postId)) {
        return prev.filter(id => id !== postId);
      } else {
        return [...prev, postId];
      }
    });
  };

  const handleShare = (postId) => {
    // Implement sharing functionality here
    console.log(`Sharing post ${postId}`);
  };

  const handleCardClick = (post) => {
    setSelectedPost(post);
    if (!savedPosts.includes(post.id)) {
      setCompletedBlogs(prev => prev + 1);
    }
  };

  const SidebarLink = ({ icon, label, onClick, active = false }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-200'
          : 'text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className="bg-white dark:bg-gray-800 w-64 min-h-screen p-4">
        <nav className="mt-8 space-y-4">
          <h1 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-8">FlowCare</h1>
          <SidebarLink icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={() => navigate('/dashboard')} />
          <SidebarLink icon={<Home size={20} />} label="Home" onClick={() => navigate('/')} />
          <SidebarLink icon={<GraduationCap size={20} />} label="Education" onClick={() => navigate('/blogs')} active />
          <SidebarLink icon={<ShoppingBag size={20} />} label="Shop" onClick={() => navigate('/Ecom')} />
          <SidebarLink icon={<ActivitySquare size={20} />} label="Track Your Health" onClick={() => navigate('/tracker')} />
          <SidebarLink icon={<Stethoscope size={20} />} label="Expert Consultation" onClick={() => navigate('/consultations')} />
          <SidebarLink icon={<Bot size={20} />} label="AI Chatbot" onClick={() => navigate('/ChatBot')} />
          <SidebarLink icon={<HeartPulse size={20} />} label="HealthLens" onClick={() => navigate('/symptomsanalyzer')} />
          <SidebarLink icon={<MessageSquare size={20} />} label="Forums" onClick={() => navigate('/forums')} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">Education Hub</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-transform hover:scale-110"
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
            </button>
          </div>

          {/* Featured Article */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-pink-800 dark:text-pink-300 mb-2 flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-yellow-400" />
              Featured Article
            </h2>
            <div className="flex items-center space-x-4">
              <Award className="h-16 w-16 text-pink-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Embracing Your Cycle: A Guide to Menstrual Wellness</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Discover how to work with your menstrual cycle for optimal health and well-being.</p>
              </div>
            </div>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
              Read More
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-700 dark:text-white transition-all duration-300 focus:shadow-lg"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-gray-700 dark:text-white transition-all duration-300 focus:shadow-lg"
            >
              <option value="All">All Categories</option>
              <option value="Health">Health</option>
              <option value="Nutrition">Nutrition</option>
              <option value="Wellness">Wellness</option>
              <option value="History">History</option>
              <option value="Fitness">Fitness</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Hygiene">Hygiene</option>
              <option value="Contraception">Contraception</option>
            </select>
          </div>

          {/* Trophy System */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 mb-4">
              Your Learning Journey
            </h2>
            <div className="flex flex-col space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Articles Read</h3>
                <div className="flex justify-center gap-4">
                  {[...Array(9)].map((_, index) => (
                    <BookOpen
                      key={index}
                      className={`h-8 w-8 transition-all duration-300 ${
                        index < completedBlogs ? 'text-pink-500 scale-110' : 'text-gray-300 dark:text-gray-600'
                      }`}
                      fill={index < completedBlogs ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="mt-2 text-gray-800 dark:text-gray-300">
                  {completedBlogs} out of 9 articles read
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Topics Completed</h3>
                <div className="flex justify-center gap-4">
                  {[...Array(5)].map((_, index) => (
                    <GraduationCap
                      key={index}
                      className={`h-8 w-8 transition-all duration-300 ${
                        index < completedTopics ? 'text-purple-500 scale-110' : 'text-gray-300 dark:text-gray-600'
                      }`}
                      fill={index < completedTopics ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="mt-2 text-gray-800 dark:text-gray-300">
                  {completedTopics} out of 5 topics completed
                </p>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => handleCardClick(post)}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    {post.icon}
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSavePost(post.id);
                        }}
                        className={`p-2 rounded-full ${
                          savedPosts.includes(post.id)
                            ? 'bg-pink-100 text-pink-500'
                            : 'bg-gray-100 text-gray-500'
                        } hover:bg-pink-200 transition-colors duration-300`}
                      >
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(post.id);
                        }}
                        className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-pink-200 transition-colors duration-300"
                      >
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{post.title}</h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Women's Health Topics Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 mb-4">Women's Health 101</h2>
            <p className="text-gray-800 dark:text-gray-300 mb-6">
              Explore key topics in women's health to deepen your understanding and take control of your well-being.
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 dark:bg-gray-700 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${(readSections.filter(Boolean).length / readSections.length) * 100}%` }}
              ></div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {womenHealthTopics.map(({ id, question, answer }, index) => (
                <div key={id} className="border border-pink-200 dark:border-pink-800 rounded-lg overflow-hidden transition-all duration-300">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-pink-50 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-gray-600 transition-colors duration-300"
                    onClick={() => toggleAccordion(id)}
                  >
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{question}</span>
                    {activeItem === id ? <ChevronUp className="text-pink-500" /> : <ChevronDown className="text-pink-500" />}
                  </button>
                  {activeItem === id && (
                    <div className="p-4 bg-white dark:bg-gray-800">
                      <p className="text-gray-800 dark:text-gray-300">{answer}</p>
                      <div className="mt-4">
                        <label className="flex items-center space-x-2 text-gray-800 dark:text-gray-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={readSections[index]}
                            onChange={() => handleRead(index)}
                            className="form-checkbox text-pink-500 rounded focus:ring-pink-500 h-5 w-5 transition duration-150 ease-in-out"
                          />
                          <span>I've read this section</span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal for selected post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{selectedPost.title}</h2>
              <button onClick={() => setSelectedPost(null)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mb-4">
              {selectedPost.icon}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedPost.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{selectedPost.author}</span>
              <span>{selectedPost.date}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

