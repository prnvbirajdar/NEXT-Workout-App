import { Card, CardBody } from "@windmill/react-ui";
import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";
import { Delete, Edit } from "../Icons/Icons";
import EditExerciseModal from "./EditExerciseModal";
import EditExerciseNotes from "./EditExerciseNotes";

const DisplayExercisesAfterSubmit = ({ selectedDate }) => {
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

  //const dateToday = new Date().toLocaleString().split(",")[0];
  const getExerciseStats = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .where("date", "==", selectedDate)
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
    if ((user, selectedDate)) {
      getExerciseStats();
    }

    return () => {
      getExerciseStats();
      console.log("displayAfterSumbmit cleanup");
    };
  }, [selectedDate]);

  return (
    exerciseStats.length > 0 &&
    exerciseStats?.map((e) => (
      <section key={e.id} className="mb-4">
        <Card>
          <CardBody>
            <div className="flex justify-between ">
              <div className=" flex items-center  ">
                <p className=" font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
                  {e.exercise}
                </p>
              </div>
              <div onClick={() => deleteExercise(e.id)}>
                <Delete />
              </div>
            </div>
            {e.sets.length === 0 ? (
              <div className="flex md:flex-row justify-around mt-2 py-2 sm:mx-4 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
                <p className=" text-gray-800 dark:text-gray-300 text-center m-2 ">
                  No sets to display
                </p>
              </div>
            ) : (
              <div></div>
            )}

            {e.sets &&
              e.sets.map(
                (s, index) =>
                  s && (
                    <div key={index} className="lg:mt-4">
                      <div className="lg:mx-4">
                        <div className=" flex flex-col lg:flex-row lg:bg-gray-50 lg:dark:bg-black rounded lg:mt-3">
                          <p className="self-center text-gray-800 dark:text-gray-300 text-center m-2 lg:ml-4">
                            Set {index + 1}
                          </p>
                          <div className="flex flex-grow md:flex-row justify-around py-2 sm:mx-4 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
                            <div className="flex flex-col  py-2 ml-2">
                              <label className="self-center">Weight</label>
                              <p className="font-semibold">{s.weight} lbs</p>
                            </div>
                            <div className="flex flex-col  p-2 ml-2">
                              <label>Reps</label>
                              <p className=" text-center  font-semibold  ">
                                {s.reps}
                              </p>
                            </div>
                            <div
                              className="self-center lg:hidden "
                              onClick={() => {
                                console.log(s);
                                openEditExerciseModal(s);
                              }}
                            >
                              <Edit />
                            </div>
                          </div>

                          <div
                            className="self-center hidden lg:block lg:mr-3"
                            onClick={() => {
                              console.log(s);
                              openEditExerciseModal(s);
                            }}
                          >
                            <Edit />
                          </div>
                        </div>
                      </div>

                      {e && (
                        <EditExerciseModal
                          isEditExerciseModal={isEditExerciseModal}
                          exer={e.sets}
                          closeEditExerciseModal={closeEditExerciseModal}
                          selected={selected}
                          deleteExercise={deleteExercise}
                          setSelected={setSelected}
                          id={e.id}
                        />
                      )}
                    </div>
                  )
              )}
            <div className=" mb-3 ">
              <EditExerciseNotes value={e.notes} id={e.id} />
            </div>
          </CardBody>
        </Card>
      </section>
    ))
  );
};

export default DisplayExercisesAfterSubmit;

// <p className=" text-gray-800 dark:text-gray-300 text-center m-2 ">
// Set {index + 1}
// </p>
// <div className="flex md:flex-row justify-around py-2 sm:mx-4 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
// <div className="flex flex-col lg:flex-row justify-between py-2 ml-2">
//   <label className=" self-center lg:self-end  ">
//     Weight
//   </label>
//   <p className="  lg:text-right font-semibold ">
//     {s.weight} lbs
//   </p>
// </div>
// <div className="flex flex-col lg:flex-row justify-between p-2 ml-2">
//   <label className="lg:self-end">Reps</label>
//   <p className=" text-center lg:text-right font-semibold">
//     {s.reps}
//   </p>
// </div>
// <div>
// <div
//   onClick={() => {
//     console.log(s);
//     openEditExerciseModal(s);
//   }}
// >
//   <Edit />
// </div>
// </div>
// </div>

// const deleteSet = async (s) => {
//   await db
//     .collection("profiles")
//     .doc(user?.uid)
//     .collection("workouts")
//     .doc(s?.docId)
//     .update( {firebase.firestore.FieldValue.arrayRemove(s)} );
// };

// const deleteSet = async (id) => {
//   await db
//     .collection("profiles")
//     .doc(user?.uid)
//     .collection("workouts")
//     .where("sets", "array-contains", id)
//     .update({ sets: firebase.firestore.FieldValue.arrayRemove(s) });
// };

// onClick={async (s) => {
//   await db
//     .collection("profiles")
//     .doc(user?.uid)
//     .collection("workouts")
//     .where("id", "in", [s.id])
//     .update({
//       sets: firebase.firestore.FieldValue.arrayRemove(
//         s
//       ),
//     });
// }}

// const [id, setId] = React.useState("");
// const [updatedSet, setUpdatedSet] = React.useState([]);

// React.useEffect(() => {
//   exerciseStats.map((ex) => setId(ex.id));
//   return;
// }, [exerciseStats]);

// const handleDelete = (index) => {
//   setExerciseStats(
//     exerciseStats.map((ex) =>
//       produce(ex, (draft) => {
//         draft?.sets?.splice(index, 1);
//       })
//     )
//   );

//   const updateExerciseSet = async () => {
//     await db
//       .collection("profiles")
//       .doc(user?.uid)
//       .collection("workouts")
//       .doc(id)
//       .update({
//         sets: exerciseStats,
//       });
//   };

//   updateExerciseSet();
// };

// onClick={(index) => {
//   setUpdatedSet(
//     exerciseStats.map((ex) =>
//       produce(ex, (draft) => {
//         draft?.sets?.splice(index, 1);
//       })
//     )
//   );

//   const updateExerciseSet = async () => {
//     await db
//       .collection("profiles")
//       .doc(user?.uid)
//       .collection("workouts")
//       .doc(id)
//       .update({
//         sets: updatedSet,
//       });
//   };

//   updateExerciseSet();
// }}
