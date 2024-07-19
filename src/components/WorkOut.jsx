import React, { useState } from 'react';

export default function WorkOut() {
  const [page, setPage] = useState('home'); // State to manage which page to show
  const [showMuscleGroups, setShowMuscleGroups] = useState(false); // State to manage showing muscle groups
  const [showFormulated, setShowFormulated] = useState(false); // State to manage showing formulated results
  const [selectedMuscles, setSelectedMuscles] = useState([]); // State to manage selected muscles
  const [selectedWorkout, setSelectedWorkout] = useState(''); // State to manage selected workout type

  const handleClick = () => {
    setPage('next'); // Change state to show the next page
  };

  const handleFullBodyClick = () => {
    setSelectedWorkout('fullBody'); // Set the selected workout type
  };

  const handleLowerBodyClick = () => {
    setSelectedWorkout('lowerBody'); // Set the selected workout type
  };

  const handleUpperBodyClick = () => {
    setSelectedWorkout('upperBody'); // Set the selected workout type
  };

  const handleSelectMuscleGroups = () => {
    setShowMuscleGroups(true); // Set state to show the muscle groups page
  };

  const handleBackToWorkouts = () => {
    setShowMuscleGroups(false); // Return to the workouts page
  };

  const handleMuscleClick = (muscle) => {
    setSelectedMuscles((prev) =>
      prev.includes(muscle) ? prev.filter((item) => item !== muscle) : [...prev, muscle]
    ); // Toggle muscle selection
  };

  const handleFormulateClick = () => {
    setShowFormulated(true); // Show the formulated results
  };

  const handleBackToMuscleGroups = () => {
    setShowFormulated(false); // Return to muscle groups page
  };

  const handleBackToFirstPage = () => {
    setPage('home'); // Return to the first page
  };

  const muscleGroups = ['Chest', 'Shoulder', 'Biceps', 'Triceps', 'Leg', 'Back', 'Abs'];

  return (
    <div className="flex flex-col items-center h-screen bg-black text-blue-500">
      {page === 'home' ? (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-red-500 text-4xl md:text-6xl lg:text-8xl">IT'S TIME TO GET</h1>
            <h1 className="text-red-500 text-4xl md:text-6xl lg:text-8xl">GYM APP</h1>
            <h3 className="text-blue-500 mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              I understand that by using this app<br />
              I may transform into a muscle-bound behemoth<br />
              accept all consequences of becoming a living legend<br />
              and embrace the possibility of outgrowing my clothes and doorways.
            </h3>
          </div>
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-8"
          >
            Accept & Begin
          </button>
        </div>
      ) : showMuscleGroups ? (
        <div className="flex flex-col items-center h-screen bg-black p-4">
          <div className="flex-grow flex flex-col items-center mb-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl mb-8">
              <h1 className="text-red-500 text-3xl md:text-4xl lg:text-5xl text-center mb-4">Select Muscle Groups</h1>
              <p className="text-blue-500 text-center mb-8">
                Choose the muscle groups you want to target.
              </p>
              <div className="flex flex-col items-center mb-8">
                {muscleGroups.map((muscle) => (
                  <button
                    key={muscle}
                    onClick={() => handleMuscleClick(muscle)}
                    className={`bg-blue-500 text-white font-bold py-2 px-4 rounded mb-2 w-full max-w-md ${
                      selectedMuscles.includes(muscle) ? 'bg-blue-700' : ''
                    }`}
                  >
                    {muscle}
                  </button>
                ))}
              </div>
              <button
                onClick={handleFormulateClick}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
              >
                Formulate
              </button>
              <button
                onClick={handleBackToWorkouts}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Back to Workouts
              </button>
            </div>
          </div>
          {showFormulated && (
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h1 className="text-red-500 text-3xl md:text-4xl lg:text-5xl text-center mb-4">Formulated Workout</h1>
                <p className="text-blue-500 text-center mb-8">
                  Based on your selections, here’s your personalized workout plan:
                </p>
                <ul className="text-blue-500 mb-8">
                  <li className="mb-2"><strong>Workout Type:</strong> {selectedWorkout.replace(/([A-Z])/g, ' $1').toUpperCase()}</li>
                  <li><strong>Selected Muscles:</strong> {selectedMuscles.length > 0 ? selectedMuscles.join(', ') : 'None'}</li>
                </ul>
                <button
                  onClick={handleBackToMuscleGroups}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                  Back to Muscle Groups
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center h-screen bg-black pt-8 justify-center">
          <div className="flex flex-col items-center w-full max-w-4xl mb-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full mb-4">
              <h2 className="text-red-500 text-xl md:text-2xl lg:text-3xl mb-4 text-center">GENERATE YOUR WORK OUT</h2>
              <h1 className="text-red-500 text-2xl md:text-4xl lg:text-5xl text-center">IT'S TIME TO BUILD YOUR BODY</h1>
            </div>
            <h3 className="text-blue-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl text-center mb-1">
              1 Pick your position <br />
              Select the workout you wish to endure.
            </h3>
          </div>
          <div className="flex flex-col items-center mb-1">
            <div className="flex space-x-4 mb-1">
              <button
                onClick={handleFullBodyClick}
                className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${selectedWorkout === 'fullBody' ? 'bg-blue-700' : ''}`}
              >
                Full Body Workout
              </button>
              <button
                onClick={handleLowerBodyClick}
                className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${selectedWorkout === 'lowerBody' ? 'bg-blue-700' : ''}`}
              >
                Lower Body Workout
              </button>
              <button
                onClick={handleUpperBodyClick}
                className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${selectedWorkout === 'upperBody' ? 'bg-blue-700' : ''}`}
              >
                Upper Body Workout
              </button>
            </div>
            <h4 className="text-blue-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl text-center mb-4">
              2 Lock on targets <br />
              Select the muscles you want to workout.
            </h4>
            <button
              onClick={handleSelectMuscleGroups}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Select Muscle Groups
            </button>
            <button
              onClick={handleBackToFirstPage}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Back to First Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
