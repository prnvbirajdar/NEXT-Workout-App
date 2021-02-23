import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";
import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,
  deleteExercise,
  selected,
  setSelected,
  notes,
  id,
  reps,
  weight,
  index,
  name,
  exer,
}) => {
  const [currentId, setCurrentId] = React.useState("");

  const [newNotes, setNewNotes] = React.useState(notes);

  //const [updatedSet, setUpdatedSet] = React.useState(sets);
  console.log(exer);

  // exer.map((e) => console.log(e.id));

  // const rightSet = exer.map((e) => e.id === selected?.id);
  // console.log(rightSet);

  // if (rightSet) {
  //   (reps = selected.reps), (weight = selected.weight);
  // }

  const { user } = useAuth(); //context

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelected(
      produce(selected, (draft) => {
        draft[name] = value;
      })
    );

    Object.assign(
      exer.find((b) => b.id === selected.id),
      { reps: selected.reps, weight: selected.weight }
    );

    // setSelected(
    //   produce(selected.sets, (draft) => {
    //     const index = draft.findIndex((set) => {
    //       setCurrentId(set.id);
    //       set.id === currentId;
    //     });
    //     if (index !== -1) draft[name] = value;
    //   })
    // );
  };

  const handleNotesChange = (e) => {
    setNewNotes(e.target.value);
  };

  //console.log(sets);

  const updateExercise = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(id)
      .update({
        notes: newNotes,
      });
  };

  return (
    selected && (
      <Modal
        isOpen={isEditExerciseModal}
        onClose={() => closeEditExerciseModal(selected)}
      >
        <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
          Edit Set
        </p>
        <ModalBody>
          <div key={index}>
            {/*<p className=" text-gray-800 dark:text-gray-300 text-center m-2 text-base ">
              Set {index + 1}
    </p>*/}
            <div className=" flex bg-black p-2 rounded-lg sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
              <div>
                <div className="text-center pb-2 text-base font-semibold">
                  <label>Weight</label>
                </div>
                <div className="flex justify-center pb-2 ">
                  <input
                    className="py-2 rounded w-1/2 border text-black text-center"
                    type="number"
                    name="weight"
                    onChange={handleChange}
                    required
                    value={selected.weight}
                  />
                </div>
              </div>
              <div>
                <div className="text-center pb-2 text-base font-semibold">
                  <label>Reps</label>
                </div>
                <div className="flex justify-center ">
                  <input
                    className="py-2 rounded w-1/2 border text-black text-center	"
                    type="number"
                    name="reps"
                    onChange={handleChange}
                    required
                    value={selected.reps}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
              Notes
            </p>
            <textarea
              type="text"
              onChange={handleNotesChange}
              value={newNotes}
              className="p-2 flex justify-center items-center rounded w-full m-auto text-sm bg-gray-50 dark:bg-black dark:text-gray-100 "
            />
          </div>
        </ModalBody>

        <div className="flex justify-between">
          {/*  <div onClick={() => deleteExercise(selected.id)}>
            <Delete />
          </div>*/}
          <div onClick={updateExercise}>
            <Correct />
          </div>
        </div>
      </Modal>
    )
  );
};

export default EditExerciseModal;

// const EditExerciseModal = ({
//   isEditExerciseModal,
//   closeEditExerciseModal,
//   deleteExercise,
//   selected,
//   setSelected,
//   notes,
//   id,
//   sets,
// }) => {
//   const [currentId, setCurrentId] = React.useState("");

//   const [newNotes, setNewNotes] = React.useState(notes);

//   const [updatedSet, setUpdatedSet] = React.useState(sets);

//   const { user } = useAuth(); //context

//   //   React.useEffect(() => {
//   //       effect
//   //       return () => {
//   //           cleanup
//   //       }
//   //   }, [input])

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // setSelected(
//     //   produce(selected.sets, (draft) => {
//     //     const index = draft.findIndex((set) => {
//     //       setCurrentId(set.id);
//     //       set.id === currentId;
//     //     });
//     //     if (index !== -1) draft[name] = value;
//     //   })
//     // );

//     setUpdatedSet(
//       produce(updatedSet, (draft) => {
//         {
//           draft[name] = value;
//         }
//       })
//     );
//   };

//   const handleNotesChange = (e) => {
//     setNewNotes(e.target.value);
//   };

//   console.log(sets);

//   const updateExercise = async () => {
//     await db
//       .collection("profiles")
//       .doc(user?.uid)
//       .collection("workouts")
//       .doc(id)
//       .update({
//         notes: newNotes,
//       });
//   };

//   return (
//     selected && (
//       <Modal
//         isOpen={isEditExerciseModal}
//         onClose={() => closeEditExerciseModal(selected)}
//       >
//         <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
//           {selected.exercise}
//         </p>
//         <ModalBody>
//           {updatedSet.map((set, index) => (
//             <div key={index}>
//               <p className=" text-gray-800 dark:text-gray-300 text-center m-2 text-base ">
//                 Set {index + 1}
//               </p>
//               <div className=" flex bg-black p-2 rounded-lg sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
//                 <div>
//                   <div className="text-center pb-2 text-base font-semibold">
//                     <label>Weight</label>
//                   </div>
//                   <div className="flex justify-center pb-2 ">
//                     <input
//                       className="py-2 rounded w-1/2 border text-black text-center"
//                       type="number"
//                       name="weight"
//                       onChange={handleChange}
//                       required
//                       value={set.weight}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="text-center pb-2 text-base font-semibold">
//                     <label>Reps</label>
//                   </div>
//                   <div className="flex justify-center ">
//                     <input
//                       className="py-2 rounded w-1/2 border text-black text-center	"
//                       type="number"
//                       name="reps"
//                       onChange={handleChange}
//                       required
//                       value={set.reps}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div>
//             <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
//               Notes
//             </p>
//             <textarea
//               type="text"
//               onChange={handleNotesChange}
//               value={newNotes}
//               className="p-2 flex justify-center items-center rounded w-full m-auto text-sm bg-gray-50 dark:bg-black dark:text-gray-100 "
//             />
//           </div>
//         </ModalBody>

//         <div className="flex justify-between">
//           <div onClick={() => deleteExercise(selected.id)}>
//             <Delete />
//           </div>
//           <div onClick={updateExercise}>
//             <Correct />
//           </div>
//         </div>
//       </Modal>
//     )
//   );
// };
