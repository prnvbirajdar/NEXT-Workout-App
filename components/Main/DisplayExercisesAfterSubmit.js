import { Card, CardBody } from "@windmill/react-ui";
import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";
import { Edit } from "../Icons/Icons";
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
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-xl">
              {e.exercise}
            </p>
            {e.sets.map((s, index) => (
              <div key={randomKey(index)}>
                <p className=" font-semibold text-gray-800 dark:text-gray-300 text-center text-lg mb-1 ">
                  Set {index + 1}
                </p>
                <div className="flex flex-col md:flex-row justify-around p-2 mx-4 mb-2 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
                  <div className="flex justify-between p-2   ">
                    <label className="self-end ">Weight</label>
                    <p className=" font-medium ml-3  text-right ">
                      {s.weight} lbs
                    </p>
                  </div>
                  <div className="flex justify-between p-2   ">
                    <label className="self-end  ">Reps</label>
                    <p className=" font-medium ml-3 capitalize text-right ">
                      {s.reps}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="flex justify-end"
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
