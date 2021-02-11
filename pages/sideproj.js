import Navbar from "../components/Navbar";
import { useAuth } from "../components/data/authProvider";
import { db } from "../components/data/firebase";

const SideProg = () => {
  const [text, setText] = React.useState("");

  const { user, loading } = useAuth(); //context

  console.log(user.uid);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("cities")
      .doc("LA")
      .set({
        name: text,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <div className=" text-gray-600 dark:text-gray-400">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex justify-content items-center flex-col"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SideProg;

// import Navbar from "../components/Navbar";
// import { useAuth } from "../components/data/authProvider";
// import { db } from "../components/data/firebase";

// const SideProg = () => {
//   const [text, setText] = React.useState("");

//   const { user} = useAuth(); //context

//   //const [textArray, setTextArray] = React.useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     db.collection("hello").push({
//         message: { text },
//       })
//       .then(() => {
//         console.log("Document successfully written!");
//       })
//       .catch((error) => {
//         console.error("Error writing document: ", error);
//       });
//   };

//   return (
//     <div className=" text-gray-600 dark:text-gray-400">
//       <Navbar />
//       <form
//         onSubmit={handleSubmit}
//         className="flex justify-content items-center flex-col"
//       >
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default SideProg;
