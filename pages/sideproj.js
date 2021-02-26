import Navbar from "../components/Navbar";
import { useAuth } from "../components/data/authProvider";
import { db } from "../components/data/firebase";
import { useEffect } from "react";

const sets = [
  { weight: 213, reps: 12 },
  { weight: 253, reps: 15 },
  { weight: 268, reps: 18 },
];

const SideProg = () => {
  const [text, setText] = React.useState({ t1: "", t2: "" });
  // const [text2, setText2] = React.useState("");

  const { user } = useAuth(); //context

  //console.log(user?.uid);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("cities")
      .doc("LA")
      .set({
        name: text.t1,
        address: text.t2,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    setText({ t1: "", t2: "" });
  };

  useEffect(() => {
    db.collection("cities")
      .doc("LA")
      .onSnapshot((snap) => {
        //console.log(snap.docs);
      });
  }, []);

  return (
    <div className=" text-gray-600 dark:text-gray-400">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex justify-content items-center flex-col"
      >
        <img
          aria-hidden="true"
          className="h-8 w-8"
          src="/calender.webp"
          alt="Workflow"
        />
        <input className="mb-4" type="text" name="t1" onChange={handleChange} />
        <input type="text" name="t2" onChange={handleChange} />
        <button type="submit">Send</button>
        <p>Hi</p>
      </form>
    </div>
  );
};

export default SideProg;

{
  sets.map((set, index) => (
    <div key={index} className="flex justify-evenly my-4">
      <p>{set.weight}</p>
      <p>{set.reps}</p>
      <button>Edit</button>
    </div>
  ));
}
