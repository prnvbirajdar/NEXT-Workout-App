import Navbar from "../components/Navbar";
import { useAuth } from "../components/data/authProvider";
import { db } from "../components/data/firebase";
import { useEffect } from "react";

const SideProg = () => {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");

  const { user } = useAuth(); //context

  //console.log(user?.uid);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("cities")
      .doc("LA")
      .set({
        name: text,
        address: text2,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    setText("");
    setText2("");
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
        <input
          className="mb-4"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
        <button type="submit">Send</button>
        <p>Hi</p>
      </form>
    </div>
  );
};

export default SideProg;

