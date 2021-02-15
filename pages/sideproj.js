import Navbar from "../components/Navbar";
import { useAuth } from "../components/data/authProvider";
import { db } from "../components/data/firebase";
import { useEffect } from "react";

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

  // const getCityStats = async () => {
  //   await db
  //     .collection("cities")
  //     .doc("LA")
  //     .onSnapshot((querySnapshot) => {
  //       console.log(querySnapshot.docs);
  //       //setPhysicalStats(querySnapshot.docs[0].data());
  //     });
  // };

  useEffect(() => {
    db.collection("cities")
      .doc("LA")
      .onSnapshot((snap) => {
        console.log(snap.docs);
      });
  }, []);

  return (
    <div className=" text-gray-600 dark:text-gray-400">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex justify-content items-center flex-col"
      >
        <input className="mb-4" type="text" name="t1" onChange={handleChange} />
        <input type="text" name="t2" onChange={handleChange} />
        <button type="submit">Send</button>
        <p>Hi</p>
      </form>
    </div>
  );
};

export default SideProg;
