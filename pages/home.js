import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Main from "../components/Main/Main";
import { useAuth } from "../components/data/authProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Footer from "../components/Footer";

import { db } from "../components/data/firebase";
import firebase from "firebase/app";

const Home = () => {
  //if login credentials of user disappear, revert back to login page
  const router = useRouter();
  const { user } = useAuth();

  const [startDate, setStartDate] = React.useState(new Date());
  const [exerciseDates, setExerciseDates] = React.useState([]);
  const uniq = [...new Set(exerciseDates)];

  const dataArr = uniq.map((date) => new Date(date));

  console.log(dataArr);

  const formattedDate = format(startDate, "P");

  const handleDateChange = (date) => setStartDate(date);

  const getExerciseDates = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .orderBy("date", "asc")
      .onSnapshot((querySnapshot) => {
        setExerciseDates(querySnapshot.docs.map((doc) => doc.data().date));
      });
  };

  useEffect(() => {
    if (user) {
      getExerciseDates();
    }

    return () => {
      getExerciseDates();
    };
  }, [user]);

  console.log(uniq);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const DateButton = ({ value }) => (
    <p className="z-0 select-none py-1 px-4 w-screen text-center text-white bg-indigo-700 rounded font-medium md:text-lg shadow">
      {value}
    </p>
  );

  return (
    uniq.length > 0 && (
      <div className="relative min-h-screen w-screen">
        <Navbar
          selectedDate={startDate}
          handleDateChange={handleDateChange}
          highlightDates={uniq.map((date) => new Date(date))}
        />
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          name="startDate"
          dateFormat="PPPP"
          closeOnScroll={true}
          customInput={<DateButton />}
          highlightDates={uniq.map((date) => new Date(date))}
        />

        <Main
          selectedDate={formattedDate}
          handleDateChange={handleDateChange}
        />
        <Footer />
      </div>
    )
  );
};

export default Home;
