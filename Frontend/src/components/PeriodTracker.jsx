'use client'

import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Calendar, Frown, Smile, Angry, Coffee, Zap, Moon, ChevronDown, ChevronUp, Heart } from 'lucide-react';

const moodOptions = [
  { name: 'Happy', icon: Smile },
  { name: 'Sad', icon: Frown },
  { name: 'Calm', icon: Coffee },
  { name: 'Angry', icon: Angry },
  { name: 'Tired', icon: Moon },
  { name: 'Energized', icon: Zap },
];

const moodSeverityOptions = [
  { name: 'Low', value: 'low' },
  { name: 'Medium', value: 'medium' },
  { name: 'High', value: 'high' },
];

const symptomOptions = [
  'Lower Abdomen Cramps',
  'Back Pain',
  'Bloating',
  'Fatigue',
  'Headaches',
  'Nausea',
  'Sleep Disruption',
  'Digestive Issues',
];

const symptomSeverityOptions = ['None', 'Mild', 'Moderate', 'Severe'];

const healthTips = [
  "Stay hydrated by drinking plenty of water throughout your cycle.",
  "Practice gentle exercises like yoga or walking to alleviate cramps.",
  "Maintain a balanced diet rich in iron and vitamins to support your body.",
  "Get adequate sleep to help regulate your hormones and reduce fatigue.",
  "Use heat therapy (like a hot water bottle) to soothe menstrual cramps.",
];

export function PeriodTracker() {
  const [data, setData] = useState({
    cycleDuration: '',
    lastPeriodStart: '',
    lastPeriodDuration: '',
    moodTypes: [],
    moodSeverity: '',
    moodDate: format(new Date(), 'yyyy-MM-dd'),
    symptoms: [],
    symptomSeverities: {},
    symptomDate: format(new Date(), 'yyyy-MM-dd'),
  });

  const [nextPeriodPrediction, setNextPeriodPrediction] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    cycleInfo: true,
    moodTracking: true,
    symptomTracking: true,
    healthTips: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMoodTypeChange = (moodName) => {
    setData((prev) => ({
      ...prev,
      moodTypes: prev.moodTypes.includes(moodName)
        ? prev.moodTypes.filter((mood) => mood !== moodName)
        : [...prev.moodTypes, moodName],
    }));
  };

  const handleSymptomChange = (symptom) => {
    setData((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom],
    }));
  };

  const handleSymptomSeverityChange = (symptom, severity) => {
    setData((prev) => ({
      ...prev,
      symptomSeverities: { ...prev.symptomSeverities, [symptom]: severity },
    }));
  };

  const predictNextPeriod = () => {
    if (data.lastPeriodStart && data.cycleDuration) {
      const nextPeriodDate = addDays(
        new Date(data.lastPeriodStart),
        parseInt(data.cycleDuration)
      );
      setNextPeriodPrediction(format(nextPeriodDate, 'yyyy-MM-dd'));
    }
  };

  const handleSubmit = () => {
    const submissionData = {
      ...data,
      nextPeriodPrediction,
    };
    console.log('Submission Data:', submissionData);
    alert('Data submitted successfully!');
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderSection = (title, content, section) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleSection(section)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {expandedSections[section] ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>
      {expandedSections[section] && <div className="mt-4">{content}</div>}
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto bg-pink-50 rounded-lg shadow-lg p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Period Tracker</h2>
        <p className="text-gray-600">Track your cycle, moods, and symptoms</p>
      </div>

      {renderSection(
        "Cycle Information",
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Start date of your last period
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="lastPeriodStart"
                  value={data.lastPeriodStart}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Last Period Duration (days)
              </label>
              <input
                type="number"
                name="lastPeriodDuration"
                value={data.lastPeriodDuration}
                onChange={handleInputChange}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Average Cycle Duration (days)
            </label>
            <input
              type="number"
              name="cycleDuration"
              value={data.cycleDuration}
              onChange={handleInputChange}
              min="21"
              max="35"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
            />
          </div>
          <button
            onClick={predictNextPeriod}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 shadow-md"
          >
            Predict Next Period
          </button>
          {nextPeriodPrediction && (
            <p className="text-center font-medium text-gray-700 bg-pink-100 p-3 rounded-md">
              Predicted next period:{' '}
              {format(new Date(nextPeriodPrediction), 'MMMM d, yyyy')}
            </p>
          )}
        </div>,
        "cycleInfo"
      )}

      {renderSection(
        "Mood Tracking",
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Mood(s)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {moodOptions.map((mood) => (
                <button
                  key={mood.name}
                  onClick={() => handleMoodTypeChange(mood.name)}
                  className={`flex items-center justify-center px-4 py-2 border rounded-md transition duration-300 ${
                    data.moodTypes.includes(mood.name)
                      ? 'bg-pink-200 text-gray-800 border-pink-300'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-pink-50'
                  }`}
                >
                  <mood.icon className="mr-2 h-4 w-4" />
                  {mood.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Mood Severity
            </label>
            <div className="flex flex-wrap gap-4">
              {moodSeverityOptions.map((option) => (
                <label key={option.value} className="inline-flex items-center">
                  <input
                    type="radio"
                    value={option.value}
                    checked={data.moodSeverity === option.value}
                    onChange={() =>
                      setData((prev) => ({ ...prev, moodSeverity: option.value }))
                    }
                    className="form-radio text-pink-500"
                  />
                  <span className="ml-2 text-gray-700">{option.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Date of Mood Log
            </label>
            <div className="relative">
              <input
                type="date"
                name="moodDate"
                value={data.moodDate}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              />
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>,
        "moodTracking"
      )}

      {renderSection(
        "Symptom Tracking",
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Symptoms
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {symptomOptions.map((symptom) => (
                <label key={symptom} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={data.symptoms.includes(symptom)}
                    onChange={() => handleSymptomChange(symptom)}
                    className="form-checkbox text-pink-500"
                  />
                  <span className="ml-2 text-gray-700">{symptom}</span>
                </label>
              ))}
            </div>
          </div>

          {data.symptoms.map((symptom) => (
            <div key={symptom} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {symptom} Severity
              </label>
              <select
                value={data.symptomSeverities[symptom] || ''}
                onChange={(e) =>
                  handleSymptomSeverityChange(symptom, e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              >
                <option value="">Select Severity</option>
                {symptomSeverityOptions.map((severity) => (
                  <option key={severity} value={severity}>
                    {severity}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Date of Symptoms
            </label>
            <div className="relative">
              <input
                type="date"
                name="symptomDate"
                value={data.symptomDate}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              />
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>,
        "symptomTracking"
      )}


      {renderSection(
        "Health Tips",
        <div className="space-y-4">
          {healthTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-md shadow-sm">
              <Heart className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>,
        "healthTips"
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-md text-lg transition duration-300 shadow-md"
      >
        Submit Tracking Data
      </button>
    </div>
  );
}

