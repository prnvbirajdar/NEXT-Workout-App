import { useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "../components/Navbar";
import Main from "../components/Main/Main";
import { useAuth } from "../components/data/authProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateValue = ({ value }) => {
  const [dateFormat, setDateFormat] = React.useState("");

  useEffect(() => {
    setDateFormat(value);
  }, [value]);

  console.log(dateFormat);
  return <div>{value}</div>;
};

export { DateValue };

const Home = () => {
  //if login credentials of user disappear, revert back to login page
  const router = useRouter();
  const { user } = useAuth();

  const [startDate, setStartDate] = React.useState(new Date());

  const [dateFormat, setDateFormat] = React.useState("");

  console.log(startDate);

  const handleDateChange = (date) => setStartDate(date);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const DateButton = ({ value }) => (
    <p className="py-1 px-2 text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
      {value}
    </p>
  );

  return (
    <div>
      <Nav selectedDate={startDate} handleDateChange={handleDateChange} />
      <Main selectedDate={startDate} handleDateChange={handleDateChange} />
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        name="startDate"
        dateFormat="MMM dd, yyyy"
        closeOnScroll={true}
        customInput={<DateValue />}
      />
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
