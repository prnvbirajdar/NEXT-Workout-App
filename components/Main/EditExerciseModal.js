import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";
import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,
  selected,
  setSelected,
  id,
  exer,
  currentExer,
  exerciseStats,
  setExerciseStats,
}) => {
  const ind = exer.findIndex((e) => e.id === selected?.id);
  //console.log(ind);

  if (ind >= 0) {
    exer[ind] = {
      id: selected?.id,
      reps: selected?.reps,
      weight: selected?.weight,
    };
  }

  const { user } = useAuth(); //context

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelected(
      produce(selected, (draft) => {
        draft[name] = value;
      })
    );
  };

  const updateExercise = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(id)
      .update({
        sets: exer,
      });

    closeEditExerciseModal(selected);
  };

  return (
    selected && (
      <Modal isOpen={isEditExerciseModal} onClose={updateExercise}>
        <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
          Edit Set
        </p>
        <ModalBody>
          <div key={selected?.id}>
            <div className=" flex bg-gray-50 dark:bg-black  p-2 rounded-lg sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
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
        </ModalBody>

        <div className="flex justify-end">
          {/*<div onClick={clicked}>
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

// const deleteSelectedSet = async () => {
//   const filtered = exer.findIndex((e) => e.id === selected?.id);

//   //console.log(filtered);

//   if (ind >= 0) {
//     exer.splice(exer[filtered], 1);
//   }

//   // await db
//   //   .collection("profiles")
//   //   .doc(user?.uid)
//   //   .collection("workouts")
//   //   .doc(id)
//   //   .where("sets", "array-contains", setId );
// };

// const handleDelete = (setId) => {
//   setExerciseStats(
//     exerciseStats.map((ex) =>
//       produce(ex, (draft) => {
//         draft?.sets?.splice(setId, 1);
//       })
//     )
//   );
// };

// const hope2 = exer.map((set) => set.id !== selected?.id);
// //console.log(hope2);

// const hope = exerciseStats.map((exer) =>
//   exer.sets.filter((set) => set.id !== selected?.id)
// );

// //   exerciseStats.map((exer) =>

// // )
// const delSet = async () => {
//   for (let index = 0; index < exer.length; index++) {
//     const element = exer[index];
//     console.log(element.id);

//     if (element.id === selected?.id) {
//       setExerciseStats(
//         exerciseStats.map((ex) =>
//           produce(ex, (draft) => {
//             draft?.sets?.splice(element.id, 1);
//           })
//         )
//       );
//     }
//   }

//   await db
//     .collection("profiles")
//     .doc(user?.uid)
//     .collection("workouts")
//     .doc(id)
//     .update({
//       sets: exer,
//     });

//   closeEditExerciseModal(selected);
// };

// //console.log(hope);

// const hope1 = exer.filter((set) => set.id !== selected?.id);

// if (hope2 === false) {
//   exer.map((set) =>
//     produce(
//       (set,
//       (draft) => {
//         draft.splice(hope2, 1);
//       })
//     )
//   );
// }

// //console.log(exer);

// //console.log(hope1);

// //console.log(exer);

// const deleteSet = async () => {
//   await db
//     .collection("profiles")
//     .doc(user?.uid)
//     .collection("workouts")
//     .doc(id)
//     .update({
//       sets: hope1,
//     });

//   closeEditExerciseModal(selected);
// };
