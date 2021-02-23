import { Card, CardBody } from "@windmill/react-ui";
import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";
import { Delete, Edit } from "../Icons/Icons";
import EditExerciseModal from "./EditExerciseModal";

const DisplayExercisesAfterSubmit = () => {
  const { user } = useAuth(); //context

  const [exerciseStats, setExerciseStats] = React.useState([]);
  const [isEditExerciseModal, setIsEditExerciseModal] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  function openEditExerciseModal(exercise) {
    setSelected(exercise);
    setIsEditExerciseModal(true);
  }
  function closeEditExerciseModal() {
    setSelected(null);
    setIsEditExerciseModal(false);
  }

  const deleteExercise = async (id) => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(id)
      .delete();
    setSelected(null);
    setIsEditExerciseModal(false);
  };

  const dateToday = new Date().toLocaleString().split(",")[0];

  const getExerciseStats = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .where("date", "==", dateToday)
      .orderBy("timeStamp", "asc")
      .onSnapshot((querySnapshot) => {
        setExerciseStats(
          querySnapshot.docs.map((doc) => ({
            timeStamp: doc.data().timeStamp,
            exercise: doc.data().exercise,
            sets: doc.data().sets,
            id: doc.id,
            notes: doc.data().notes,
          }))
        );
      });
  };

  React.useEffect(() => {
    if (user) {
      getExerciseStats();
    }
  }, []);

  return (
    exerciseStats.length > 0 &&
    exerciseStats.map((e) => (
      <div key={e.id} className="mb-4">
        <Card>
          <CardBody>
            <div className="flex justify-between ">
              <div className=" flex items-center ">
                <p className=" font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
                  {e.exercise}
                </p>
              </div>
              <div onClick={() => deleteExercise(e.id)}>
                <Delete />
              </div>
            </div>
            {e.sets.map((s, index) => (
              <div key={index}>
                <p className=" text-gray-800 dark:text-gray-300 text-center m-2 ">
                  Set {index + 1}
                </p>
                <div className="flex md:flex-row justify-around py-2 sm:mx-4 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
                  <div className="flex flex-col lg:flex-row justify-between py-2 ml-2">
                    <label className=" self-center lg:self-end  ">Weight</label>
                    <p className="  lg:text-right font-semibold ">
                      {s.weight} lbs
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between p-2 ml-2">
                    <label className="lg:self-end">Reps</label>
                    <p className=" text-center lg:text-right font-semibold">
                      {s.reps}
                    </p>
                  </div>
                  <div onClick={() => openEditExerciseModal(s)}>
                    <Edit />
                  </div>
                </div>
                {e && (
                  <EditExerciseModal
                    isEditExerciseModal={isEditExerciseModal}
                    exer={e.sets}
                    reps={s.reps}
                    weight={s.weight}
                    index={index}
                    closeEditExerciseModal={closeEditExerciseModal}
                    selected={selected}
                    notes={e.notes}
                    deleteExercise={deleteExercise}
                    setSelected={setSelected}
                    id={e.id}
                    name={e.exercise}
                  />
                )}
              </div>
            ))}
            <div>
              <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
                Notes
              </p>
              <p className="p-2 flex rounded w-full m-auto text-sm bg-gray-50 dark:bg-black dark:text-gray-100 ">
                {e.notes}
              </p>
            </div>
            {/* <div
              className="flex justify-end mt-2"
              onClick={() => openEditExerciseModal(e)}
            >
              <Edit />
           </div>*/}
            {/*selected && (
              <EditExerciseModal
                isEditExerciseModal={isEditExerciseModal}
                closeEditExerciseModal={closeEditExerciseModal}
                selected={selected}
                notes={selected.notes}
                sets={selected.sets}
                deleteExercise={deleteExercise}
                setSelected={setSelected}
                id={e.id}
              />
            )*/}
          </CardBody>
        </Card>
      </div>
    ))
  );
};

export default DisplayExercisesAfterSubmit;

//<div>
// <div className="flex flex-col lg:flex-row lg:bg-gray-50 lg:dark:bg-black rounded lg:mt-3">
// <p className="self-center text-gray-800 dark:text-gray-300 text-center m-2 lg:ml-4">
//   Set {index + 1}
// </p>
// <div className="flex flex-grow md:flex-row justify-around py-2 sm:mx-4 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
//   <div className="flex flex-col  py-2 ml-2">
//     <label className="self-center">Weight</label>
//     <p className="font-semibold">{s.weight} lbs</p>
//   </div>
//   <div className="flex flex-col  p-2 ml-2">
//     <label>Reps</label>
//     <p className=" text-center  font-semibold  ">{s.reps}</p>
//   </div>
//   <div onClick={handleDelete} className="self-center lg:hidden ">
//     <Delete />
//   </div>
// </div>

// <div onClick={handleDelete} className="self-center hidden lg:block lg:mr-3">
//   <Delete />
// </div>
// </div>
// </div>

// const DisplayExercisesAfterSubmit = () => {
//   const { user } = useAuth(); //context

//   const [exerciseStats, setExerciseStats] = React.useState([]);
//   const [isEditExerciseModal, setIsEditExerciseModal] = React.useState(false);

//   const [selected, setSelected] = React.useState(null);

//   function openEditExerciseModal(exercise) {
//     setSelected(exercise);
//     setIsEditExerciseModal(true);
//   }
//   function closeEditExerciseModal() {
//     setSelected(null);
//     setIsEditExerciseModal(false);
//   }

//   const deleteExercise = async (id) => {
//     await db
//       .collection("profiles")
//       .doc(user?.uid)
//       .collection("workouts")
//       .doc(id)
//       .delete();
//     setSelected(null);
//     setIsEditExerciseModal(false);
//   };

//   const dateToday = new Date().toLocaleString().split(",")[0];

//   const getExerciseStats = async () => {
//     await db
//       .collection("profiles")
//       .doc(user?.uid)
//       .collection("workouts")
//       .where("date", "==", dateToday)
//       .orderBy("timeStamp", "asc")
//       .onSnapshot((querySnapshot) => {
//         setExerciseStats(
//           querySnapshot.docs.map((doc) => ({
//             timeStamp: doc.data().timeStamp,
//             exercise: doc.data().exercise,
//             sets: doc.data().sets,
//             id: doc.id,
//             notes: doc.data().notes,
//           }))
//         );
//       });
//   };

//   React.useEffect(() => {
//     if (user) {
//       getExerciseStats();
//     }
//   }, []);

//   return (
//     exerciseStats.length > 0 &&
//     exerciseStats.map((e) => (
//       <div key={e.id} className="mb-4">
//         <Card>
//           <CardBody>
//             <div className="flex justify-between ">
//               <div className=" flex items-center ">
//                 <p className=" font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
//                   {e.exercise}
//                 </p>
//               </div>
//               <div onClick={() => deleteExercise(e.id)}>
//                 <Delete />
//               </div>
//             </div>
//             {e.sets.map((s, index) => (
//               <div key={index}>
//                 <p className=" text-gray-800 dark:text-gray-300 text-center m-2 ">
//                   Set {index + 1}
//                 </p>
//                 <div className="flex md:flex-row justify-around py-2 sm:mx-4 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
//                   <div className="flex flex-col lg:flex-row justify-between py-2 ml-2">
//                     <label className=" self-center lg:self-end  ">Weight</label>
//                     <p className="  lg:text-right font-semibold ">
//                       {s.weight} lbs
//                     </p>
//                   </div>
//                   <div className="flex flex-col lg:flex-row justify-between p-2 ml-2">
//                     <label className="lg:self-end">Reps</label>
//                     <p className=" text-center lg:text-right font-semibold">
//                       {s.reps}
//                     </p>
//                   </div>
//                   <div>
//                     <Edit />
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div>
//               <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
//                 Notes
//               </p>
//               <p className="p-2 flex rounded w-full m-auto text-sm bg-gray-50 dark:bg-black dark:text-gray-100 ">
//                 {e.notes}
//               </p>
//             </div>
//             <div
//               className="flex justify-end mt-2"
//               onClick={() => openEditExerciseModal(e)}
//             >
//               <Edit />
//             </div>
//             {selected && (
//               <EditExerciseModal
//                 isEditExerciseModal={isEditExerciseModal}
//                 closeEditExerciseModal={closeEditExerciseModal}
//                 selected={selected}
//                 notes={selected.notes}
//                 sets={selected.sets}
//                 deleteExercise={deleteExercise}
//                 setSelected={setSelected}
//                 id={e.id}
//               />
//             )}
//           </CardBody>
//         </Card>
//       </div>
//     ))
//   );
// };
