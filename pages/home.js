import { useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "../components/Navbar";
import Main from "../components/Main/Main";
import { useAuth } from "../components/data/authProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

// const DateValue = ({ value }) => {
//   const [dateFormat, setDateFormat] = React.useState(null);

//   useEffect(() => {
//     setDateFormat(value);
//   }, [value]);

//   // console.log(dateFormat);
//   return <div>{value}</div>;
// };

// export { DateValue };

const Home = () => {
  //if login credentials of user disappear, revert back to login page
  const router = useRouter();
  const { user } = useAuth();

  const [startDate, setStartDate] = React.useState(new Date());

  const formattedDate = format(startDate, "P");

  console.log(formattedDate);

  const handleDateChange = (date) => setStartDate(date);

  const dateToday = () => {
    setStartDate(new Date());
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const DateButton = ({ value }) => (
    <p className="py-1 px-4 w-screen text-center text-white bg-indigo-700 rounded font-medium md:text-lg shadow">
      {value}
    </p>
  );

  return (
    <div>
      <Nav selectedDate={startDate} handleDateChange={handleDateChange} dateToday={dateToday}  />
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        name="startDate"
        dateFormat="PPPP"
        closeOnScroll={true}
        customInput={<DateButton />}
      />
      <Main selectedDate={formattedDate} handleDateChange={handleDateChange} />
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
