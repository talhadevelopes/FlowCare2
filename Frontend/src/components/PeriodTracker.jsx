import React, { useState } from 'react';
import { format, addDays } from 'date-fns';

// Custom icons (you can replace these with your preferred icon library)
const Icons = {
  Smile: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>,
  Frown: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>,
  // Add more icons as needed
};

const moodOptions = [
  { name: 'Happy', icon: Icons.Smile },
  { name: 'Sad', icon: Icons.Frown },
  // Add more mood options
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
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleMoodTypeChange = (moodName) => {
    setData(prev => ({
      ...prev,
      moodTypes: prev.moodTypes.includes(moodName)
        ? prev.moodTypes.filter(mood => mood !== moodName)
        : [...prev.moodTypes, moodName]
    }));
  };

  const handleSymptomChange = (symptom) => {
    setData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom]
    }));
  };

  const handleSymptomSeverityChange = (symptom, severity) => {
    setData(prev => ({
      ...prev,
      symptomSeverities: { ...prev.symptomSeverities, [symptom]: severity }
    }));
  };

  const predictNextPeriod = () => {
    if (data.lastPeriodStart && data.cycleDuration) {
      const nextPeriodDate = addDays(new Date(data.lastPeriodStart), parseInt(data.cycleDuration));
      setNextPeriodPrediction(format(nextPeriodDate, 'yyyy-MM-dd'));
    }
  };

  const handleSubmit = () => {
    const submissionData = {
      ...data,
      nextPeriodPrediction,
    };

    // Log the data to the console (for demonstration purposes)
    console.log('Submission Data:', submissionData);

    // Here you would typically send the data to your backend
    // For example: sendToBackend(submissionData);
    alert('Data submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Period Tracker</h2>
      
      {/* Cycle Information Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Cycle Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Start date of your last period</label>
            <input
              type="date"
              name="lastPeriodStart"
              value={data.lastPeriodStart}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Last Period Duration (days)</label>
            <input
              type="number"
              name="lastPeriodDuration"
              value={data.lastPeriodDuration}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              min="1"
            />
          </div>
          <div>
            <label className="block mb-2">Average Cycle Duration (days)</label>
            <input
              type="number"
              name="cycleDuration"
              value={data.cycleDuration}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              min="21"
              max="35"
            />
          </div>
          <button 
            onClick={predictNextPeriod}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Predict Next Period
          </button>
          {nextPeriodPrediction && (
            <p className="mt-4 text-center font-semibold">
              Predicted next period: {format(new Date(nextPeriodPrediction), 'MMMM d, yyyy')}
            </p>
          )}
        </div>
      </section>

      {/* Mood Tracking Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Mood Tracking</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Select Mood(s)</label>
            <div className="flex flex-wrap gap-2">
              {moodOptions.map((mood) => (
                <button
                  key={mood.name}
                  onClick={() => handleMoodTypeChange(mood.name)}
                  className={`flex items-center p-2 rounded ${
                    data.moodTypes.includes(mood.name) 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  <mood.icon className="mr-2" />
                  {mood.name}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block mb-2">Mood Severity</label>
            <div className="flex space-x-4">
              {moodSeverityOptions.map((severity) => (
                <label key={severity.value} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="moodSeverity"
                    value={severity.value}
                    checked={data.moodSeverity === severity.value}
                    onChange={() => setData(prev => ({ ...prev, moodSeverity: severity.value }))}
                    className="mr-2"
                  />
                  {severity.name}
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block mb-2">Date of Mood Log</label>
            <input
              type="date"
              name="moodDate"
              value={data.moodDate}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </section>

      {/* Symptom Tracking Section */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Symptom Tracking</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Select Symptoms</label>
            <div className="grid grid-cols-2 gap-2">
              {symptomOptions.map((symptom) => (
                <label key={symptom} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={data.symptoms.includes(symptom)}
                    onChange={() => handleSymptomChange(symptom)}
                    className="mr-2"
                  />
                  {symptom}
                </label>
              ))}
            </div>
          </div>

          {data.symptoms.map((symptom) => (
            <div key={symptom}>
              <label className="block mb-2">{symptom} Severity</label>
              <select
                value={data.symptomSeverities[symptom] || ''}
                onChange={(e) => handleSymptomSeverityChange(symptom, e.target.value)}
                className="w-full p-2 border rounded"
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

          <div>
            <label className="block mb-2">Date of Symptoms</label>
            <input
              type="date"
              name="symptomDate"
              value={data.symptomDate}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </section>

      <button 
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 text-lg font-bold"
      >
        Submit Tracking Data
      </button>
    </div>
  );
}