import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Main from "../components/Main/Main";
import { useAuth } from "../components/data/authProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Footer from "../components/Footer";
import Head from "next/head";
import { db } from "../components/data/firebase";

const Home = () => {
  //if login credentials of user disappear, revert back to login page
  const router = useRouter();
  const { user } = useAuth();

  //grabs today's date
  const [startDate, setStartDate] = React.useState(new Date());
  //grabs an array of all the workout dates
  const [exerciseDates, setExerciseDates] = React.useState([]);
  //displays an array of unique dates only
  const uniq = [...new Set(exerciseDates)];
  //date is formated to desired output
  const formattedDate = format(startDate, "P");
  //on select a specific date, it sets it as today's date and shows all info on that date
  const handleDateChange = (date) => setStartDate(date);

  //gets a list of dates from firebase
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

    return () => getExerciseDates();
  }, [user]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }

    // return () => router.push("/");
  }, [user]);

  //the strip of date seen on home page
  const DateButton = ({ value }) => (
    <p className="z-0 select-none py-1 px-4 w-screen text-center text-white bg-indigo-700 rounded font-medium md:text-lg shadow">
      {value}
    </p>
  );

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <section>
        <div className="relative min-h-screen w-screen">
          <Navbar
            selectedDate={startDate}
            handleDateChange={handleDateChange}
            highlightDates={uniq?.map((date) => new Date(date))} //maps the uniq array according to desired output
          />
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            name="startDate"
            dateFormat="PPPP"
            closeOnScroll={true}
            customInput={<DateButton />}
            highlightDates={uniq?.map((date) => new Date(date))}
          />
          <Main
            selectedDate={formattedDate}
            handleDateChange={handleDateChange}
          />
          <Footer />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
