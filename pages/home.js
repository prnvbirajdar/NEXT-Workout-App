import { useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "../components/Navbar";
import Main from "../components/Main/Main";
import { useAuth } from "../components/data/authProvider";

const Home = () => {
  //if login credentials of user disappear, revert back to login page
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
};

export default Home;

// import Autocomplete from "../components/Autocomplete";
// import WorkoutList from "../components/WorkoutList";

// const [reps, setReps] = useState(0); //input reps
// const [weight, setWeight] = useState(0); //input weights
// const [inputText, setinputText] = useState(""); //search input
// const [dailyExercises, setDailyExercises] = useState([]); //array of all the exercises
// const [exerciseObj, setExerciseObj] = useState({
//   exercise: "",
//   time: "",
//   data: [],
// });

{
  /*
        <Autocomplete
        inputText={inputText}
        setinputText={setinputText}
        dailyExercises={dailyExercises}
        setDailyExercises={setDailyExercises}
        exerciseObj={exerciseObj}
        setExerciseObj={setExerciseObj}
        suggestions={{
          posts: [
            {
              id: 1,
              muscle: "leg",
              exercise: ["leg press", "squats", "lunges"],
            },
            {
              id: 2,
              muscle: "arms",
              exercise: ["hammer curls", "tricep extensions", "barbell curls"],
            },
          ],
        }}
      />

      <WorkoutList
        inputText={inputText}
        dailyExercises={dailyExercises}
        setDailyExercises={setDailyExercises}
        reps={reps}
        setReps={setReps}
        weight={weight}
        setWeight={setWeight}
      />*/
}
