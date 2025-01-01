import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Brain, Users, ThumbsUp, AlertCircle, ChevronRight, Loader2, CheckCircle, Sun, Moon } from 'lucide-react';

const commonSymptoms = [
  'Abdominal cramps', 'Fatigue', 'Headache', 'Nausea', 'Back pain',
  'Mood swings', 'Bloating', 'Breast tenderness', 'Acne', 'Insomnia'
];

const mockAiAnalysis = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    possibleCauses: ['Hormonal changes', 'Stress', 'Dietary factors'],
    suggestions: ['Get plenty of rest', 'Stay hydrated', 'Consider speaking with a healthcare provider'],
    communityInsights: {
      similarExperiences: 75,
      commonRelief: 'Warm compress and over-the-counter pain relievers',
      percentageSeekingMedicalAttention: 30
    }
  };
};

export function SymptomAnalysis() {
  const [step, setStep] = useState(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [intensity, setIntensity] = useState('');
  const [duration, setDuration] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = async () => {
    setIsAnalyzing(true);
    const result = await mockAiAnalysis();
    setAnalysis(result);
    setIsAnalyzing(false);
    setStep(5);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Step 1: Select Your Symptoms</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
              {commonSymptoms.map(symptom => (
                <button
                  key={symptom}
                  onClick={() => handleSymptomToggle(symptom)}
                  className={`p-2 rounded-md text-sm transition-colors ${
                    selectedSymptoms.includes(symptom)
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-700 dark:bg-gray-00 text-gray-900 dark:text-gray-00 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {symptom}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={selectedSymptoms.length === 0}
              className={`w-full py-3 rounded-md text-white font-semibold transition-colors ${
                selectedSymptoms.length > 0
                  ? 'bg-pink-600 hover:bg-pink-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRight className="inline ml-2" />
            </button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Step 2: Rate Symptom Intensity</h2>
            <div className="space-y-4 mb-6">
              <button
                onClick={() => setIntensity('Mild')}
                className={`w-full p-3 rounded-md text-sm transition-colors ${
                  intensity === 'Mild'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Mild
              </button>
              <button
                onClick={() => setIntensity('Moderate')}
                className={`w-full p-3 rounded-md text-sm transition-colors ${
                  intensity === 'Moderate'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Moderate
              </button>
              <button
                onClick={() => setIntensity('Severe')}
                className={`w-full p-3 rounded-md text-sm transition-colors ${
                  intensity === 'Severe'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Severe
              </button>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="py-3 px-6 rounded-md text-pink-600 font-semibold border border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!intensity}
                className={`py-3 px-6 rounded-md text-white font-semibold transition-colors ${
                  intensity
                    ? 'bg-pink-600 hover:bg-pink-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Next
                <ChevronRight className="inline ml-2" />
              </button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Step 3: Symptom Duration</h2>
            <div className="space-y-4 mb-6">
              <button
                onClick={() => setDuration('Less than a day')}
                className={`w-full p-3 rounded-md text-sm transition-colors ${
                  duration === 'Less than a day'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Less than a day
              </button>
              <button
                onClick={() => setDuration('1-3 days')}
                className={`w-full p-3 rounded-md text-sm transition-colors ${
                  duration === '1-3 days'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                1-3 days
              </button>
              <button
                onClick={() => setDuration('4-7 days')}
                className={`w-full p-3 rounded-md text-sm transition-colors ${
                  duration === '4-7 days'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                4-7 days
              </button>
              <button
                onClick={() => setDuration('More than a week')}
                className={`w-full p-3 rounded-md text-sm transition-colors ${
                  duration === 'More than a week'
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                More than a week
              </button>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="py-3 px-6 rounded-md text-pink-600 font-semibold border border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!duration}
                className={`py-3 px-6 rounded-md text-white font-semibold transition-colors ${
                  duration
                    ? 'bg-pink-600 hover:bg-pink-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Next
                <ChevronRight className="inline ml-2" />
              </button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Step 4: Additional Information</h2>
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Any other details you'd like to share..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-100 mb-6"
              rows={4}
            />
            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="py-3 px-6 rounded-md text-pink-600 font-semibold border border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="py-3 px-6 rounded-md text-white font-semibold bg-pink-600 hover:bg-pink-700 transition-colors"
              >
                {isAnalyzing ? (
                  <span className="flex items-center">
                    <Loader2 className="animate-spin mr-2" />
                    Analyzing...
                  </span>
                ) : (
                  <span>
                    Analyze Symptoms
                    <ChevronRight className="inline ml-2" />
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">Analysis Results</h2>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Brain className="mr-2 text-pink-600" /> Possible Causes:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                {analysis.possibleCauses.map((cause, index) => (
                  <li key={index}>{cause}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Activity className="mr-2 text-pink-600" /> Suggestions:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                {analysis.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Users className="mr-2 text-pink-600" /> Community Insights:
              </h3>
              <div className="bg-pink-50 dark:bg-pink-900 rounded-lg p-4 space-y-2">
                <p className="flex items-center">
                  <ThumbsUp className="mr-2 text-green-500" />
                  <span className="font-semibold">{analysis.communityInsights.similarExperiences}%</span> of users reported similar symptoms
                </p>
                <p className="flex items-center">
                  <AlertCircle className="mr-2 text-yellow-500" />
                  <span className="font-semibold">{analysis.communityInsights.percentageSeekingMedicalAttention}%</span> of users with these symptoms sought medical attention
                </p>
                <p>Common relief method: <span className="font-semibold">{analysis.communityInsights.commonRelief}</span></p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded">
              Remember: This analysis is not a substitute for professional medical advice. If symptoms persist or worsen, please consult a healthcare provider.
            </p>
            <button
              onClick={() => {
                setStep(1);
                setSelectedSymptoms([]);
                setIntensity('');
                setDuration('');
                setAdditionalInfo('');
                setAnalysis(null);
              }}
              className="w-full py-3 px-6 mt-4 rounded-md text-white font-semibold bg-pink-600 hover:bg-pink-700 transition-colors"
            >
              Start New Analysis
            </button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`max-w-4xl mx-auto p-4 space-y-6 text-gray-900 dark:text-gray-100 ${darkMode ? 'dark' : ''}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400">AI-Powered Symptom Analysis</h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= stepNumber ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step > stepNumber ? <CheckCircle size={20} /> : stepNumber}
              </div>
              <div className="text-xs mt-2">Step {stepNumber}</div>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>
    </div>
  );
}

