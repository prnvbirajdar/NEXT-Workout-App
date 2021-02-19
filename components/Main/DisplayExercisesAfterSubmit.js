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

  function deleteExercise(id) {
    db.collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(id)
      .delete();
    setSelected(null);
    setIsEditExerciseModal(false);
  }

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
          }))
        );
      });
  };

  const randomNum = Math.floor(Math.random() * 100);
  const randomKey = (num) => (num + randomNum) * randomNum;

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
              <div key={randomKey(index)}>
                <p className=" text-gray-800 dark:text-gray-300 text-center m-2 ">
                  Set {index + 1}
                </p>
                <div className="flex md:flex-row justify-around py-2 sm:mx-4  bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
                  <div className="flex flex-col sm:flex-row justify-between py-2 ml-2">
                    <label className=" self-center sm:self-end  ">Weight</label>
                    <p className="  sm:text-right font-semibold ">
                      {s.weight} lbs
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between p-2 ml-2">
                    <label className="sm:self-end  ">Reps</label>
                    <p className=" text-center sm:text-right font-semibold  ">
                      {s.reps}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="flex justify-end mt-2"
              onClick={() => openEditExerciseModal(e)}
            >
              <Edit />
            </div>
            <EditExerciseModal
              isEditExerciseModal={isEditExerciseModal}
              closeEditExerciseModal={closeEditExerciseModal}
              selected={selected}
              deleteExercise={deleteExercise}
              setSelected={setSelected}
            />
          </CardBody>
        </Card>
      </div>
    ))
  );
};

export default DisplayExercisesAfterSubmit;
