import Workout from "./Workout";

const WorkoutList = ({
  dailyExercises,
  setDailyExercises,
  reps,
  weight,
  setReps,
  setWeight,
  inputText
}) => {
  return (
    <div className="flex flex-col items-center mt-10">
      {/*dailyExercises.map((v, i) => (
        <Workout
          key={i}
          exercise={v.exercise}
          setDailyExercises={setDailyExercises}
          dailyExercises={dailyExercises}
          value={v}
          reps={reps}
          setReps={setReps}
          weight={weight}
          setWeight={setWeight}
          inputText={inputText}
        />
      ))*/}
    </div>
  );
};

export default WorkoutList;
