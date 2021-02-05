// import WorkoutNumbers from "./WorkoutNumbers";

const Workout = ({
  exercise,
  setDailyExercises,
  dailyExercises,
  reps,
  weight,
  setReps,
  setWeight,
  inputText,
}) => {
  //data: [{ set: { weight: 2, reps: 0 } }],

  const handleSaveSet = () => {
    dailyExercises.map((e) => e.data.weight.push(weight));
  };

  const handleDeleteSet = () => {};

  const handleAddSet = () => {
    setWeight(weight);
    setReps(reps);

    setDailyExercises([
      {
        ...dailyExercises.exercise,
        data: [{ set: { weight: weight, reps: reps } }],
      },
    ]);

    // setDailyExercises((prevState) => {
    //   [
    //     ...prevState,
    //     {
    //       ...prevState,
    //       data: [{ set: { weight: weight, reps: reps } }],
    //     },
    //   ];
    // });
  };

  const handleDelete = () => {
    setDailyExercises(
      dailyExercises.filter((exer) => exer.exercise !== exercise)
    );
  };

  console.log(weight);
  // console.log(dailyExercises.map((e) => e.data.weight.map((w) => <p>hi</p>)));

  return (
    <div className="flex bg-gray-400 h-auto flex-col">
      <div className="flex">
        <div className="mx-2">{exercise}</div>
        <div>
          <button onClick={handleAddSet}>Add set</button>
        </div>
        <div className="mx-2">
          <button onClick={handleDelete}>Delete Exercise</button>
        </div>
      </div>

      <div className="text-center flex justify-center">
        <div className="mx-2">
          <label className="text-center">Weight</label>
          <input
            value={weight}
            type="number"
            className="w-10"
            required
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mx-2">
          <label className="text-center">Reps</label>
          <input
            value={reps}
            type="number"
            className="w-10"
            required
            onChange={(e) => setReps(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSaveSet}>Save Set</button>
        </div>
        <div>
          <button onClick={handleDeleteSet}>Delete Set</button>
        </div>
      </div>
    </div>
  );
};

export default Workout;

// <WorkoutNumbers
// setDailyExercises={setDailyExercises}
// dailyExercises={dailyExercises}
// reps={reps}
// setReps={setReps}
// weight={weight}
// setWeight={setWeight}
// />
