import { useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "../components/Navbar";
import Main from "../components/Main/Main";
import { useAuth } from "../components/data/authProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Footer from "../components/Footer";

const Home = () => {
  //if login credentials of user disappear, revert back to login page
  const router = useRouter();
  const { user } = useAuth();

  const [startDate, setStartDate] = React.useState(new Date());

  const formattedDate = format(startDate, "P");

  const handleDateChange = (date) => setStartDate(date);

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
    <div className="relative min-h-screen w-screen">
      <Nav selectedDate={startDate} handleDateChange={handleDateChange} />
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        name="startDate"
        dateFormat="PPPP"
        closeOnScroll={true}
        customInput={<DateButton />}
      />

      <Main selectedDate={formattedDate} handleDateChange={handleDateChange} />
      <Footer />
    </div>
  );
};

export default Home;
