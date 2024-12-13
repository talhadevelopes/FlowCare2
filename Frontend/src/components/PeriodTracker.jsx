'use client'

import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Calendar, Frown, Smile, Angry, Coffee, Zap, Moon } from 'lucide-react';

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

  return (
    <div className="w-full max-w-2xl mx-auto bg-pink-50 rounded-lg shadow-md p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Period Tracker
        </h2>
        <p className="text-gray-600 text-center">
          Track your cycle, moods, and symptoms
        </p>
      </div>

      {/* Cycle Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Cycle Information
        </h3>
        <div className="grid gap-4">
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300"
            />
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300"
            />
          </div>
          <button
            onClick={predictNextPeriod}
            className="w-full bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-4 rounded transition duration-300"
          >
            Predict Next Period
          </button>
          {nextPeriodPrediction && (
            <p className="text-center font-medium text-gray-700">
              Predicted next period:{' '}
              {format(new Date(nextPeriodPrediction), 'MMMM d, yyyy')}
            </p>
          )}
        </div>
      </div>

      {/* Mood Tracking */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Mood Tracking</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Mood(s)
            </label>
            <div className="grid grid-cols-3 gap-2">
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
            <div className="flex gap-4">
              {moodSeverityOptions.map((option) => (
                <label key={option.value} className="inline-flex items-center">
                  <input
                    type="radio"
                    value={option.value}
                    checked={data.moodSeverity === option.value}
                    onChange={() =>
                      setData((prev) => ({ ...prev, moodSeverity: option.value }))
                    }
                    className="form-radio text-pink-400"
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300"
              />
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Symptom Tracking */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Symptom Tracking
        </h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Symptoms
            </label>
            <div className="grid grid-cols-2 gap-2">
              {symptomOptions.map((symptom) => (
                <label key={symptom} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={data.symptoms.includes(symptom)}
                    onChange={() => handleSymptomChange(symptom)}
                    className="form-checkbox text-pink-400"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300"
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300"
              />
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-pink-400 hover:bg-pink-500 text-white font-medium py-3 px-4 rounded text-lg transition duration-300"
      >
        Submit Tracking Data
      </button>
    </div>
  );
}

