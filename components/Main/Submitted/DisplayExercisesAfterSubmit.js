import { Card, CardBody } from "@windmill/react-ui";
import { db } from "../../data/firebase";
import { useAuth } from "../../data/authProvider";
import { Delete, DownArrow, Edit, RightArrow } from "../../Icons/Icons";
import EditExerciseModal from "./EditExerciseModal";
import EditExerciseNotes from "./EditExerciseNotes";
import DeleteExerciseModal from "./DeleteExerciseModal";

const DisplayExercisesAfterSubmit = ({
  selectedDate,
  exerciseStats,
  setExerciseStats,
}) => {
  const { user } = useAuth(); //context

  //Expand exercise info
  const [isHidden, setIsHidden] = React.useState({
    setId: "",
    setBoolean: false,
  });

  const [isEditExerciseModal, setIsEditExerciseModal] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  //DELETE EXERCISE MODAL STATE ------------ start
  const [
    isDeleteExerciseModalOpen,
    setIsDeleteExerciseModalOpen,
  ] = React.useState(false);

  function openDeleteExerciseModal() {
    setIsDeleteExerciseModalOpen(true);
  }
  function closeDeleteExerciseModal() {
    setIsDeleteExerciseModalOpen(false);
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

  const isSelected = (id) => {
    exerciseStats.map((ex) => {
      if (ex.id === id) {
        setIsHidden({
          setId: ex.id,
          setBoolean: !isHidden?.setBoolean,
        });
      }
    });
  };
  //DELETE EXERCISE MODAL STATE ------------ end

  function openEditExerciseModal(exercise) {
    setSelected(exercise);
    setIsEditExerciseModal(true);
  }
  function closeEditExerciseModal() {
    setSelected(null);
    setIsEditExerciseModal(false);
  }

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
    };
  }, [user, selectedDate]);

  return (
    exerciseStats.length > 0 &&
    exerciseStats?.map((e) => (
      <section key={e.id} className="mb-4">
        <Card>
          <CardBody>
            <div
              className="cursor-pointer flex justify-between "
              onClick={() => isSelected(e.id)}
            >
              <div className=" flex items-center ">
                <p className=" font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
                  {e.exercise}
                  {isHidden?.setBoolean && isHidden?.setId === e.id ? (
                    <span>
                      <DownArrow />
                    </span>
                  ) : (
                    <span>
                      <RightArrow />
                    </span>
                  )}

                  <span
                    className={`${
                      isHidden.setBoolean && isHidden.setId === e.id
                        ? "hidden"
                        : "inline-block"
                    }`}
                  >
                    {e.sets.length} sets
                  </span>
                </p>
              </div>

              <div aria-label="Delete" onClick={openDeleteExerciseModal}>
                <Delete aria-label="Delete" />
              </div>
              <DeleteExerciseModal
                id={e?.id}
                deleteExercise={deleteExercise}
                setIsHidden={setIsHidden}
                isDeleteExerciseModalOpen={isDeleteExerciseModalOpen}
                closeDeleteExerciseModal={closeDeleteExerciseModal}
              />
            </div>
            {e.sets.length === 0 ? (
              <div
                className={`${
                  isHidden.setBoolean && isHidden.setId === e.id
                    ? "inline-block"
                    : "hidden"
                } flex md:flex-row justify-around mt-2 py-2 sm:mx-4 transition bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 `}
              >
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
                    <div
                      key={index}
                      className={`${
                        isHidden.setBoolean && isHidden.setId === e.id
                          ? "block"
                          : "hidden"
                      } lg:mt-4`}
                    >
                      <div className="lg:mx-4">
                        <div className=" flex flex-col lg:flex-row lg:bg-gray-50 transition lg:dark:bg-black rounded lg:mt-3">
                          <p className="self-center text-gray-800 dark:text-gray-300 text-center m-2 lg:ml-4">
                            Set {index + 1}
                          </p>
                          <div className="flex flex-grow md:flex-row justify-around py-2 sm:mx-4 bg-gray-50 transition dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
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
                              aria-label="Edit Exercise Modal"
                              className="self-center lg:hidden "
                              onClick={() => {
                                openEditExerciseModal(s);
                              }}
                            >
                              <Edit aria-label="Edit Exercise Modal" />
                            </div>
                          </div>

                          <div
                            aria-label="Edit Exercise Modal"
                            className="self-center hidden lg:block lg:mr-3"
                            onClick={() => {
                              openEditExerciseModal(s);
                            }}
                          >
                            <Edit aria-label="Edit Exercise Modal" />
                          </div>
                        </div>
                      </div>

                      {e && (
                        <EditExerciseModal
                          isEditExerciseModal={isEditExerciseModal}
                          closeEditExerciseModal={closeEditExerciseModal}
                          selected={selected}
                          setSelected={setSelected}
                          exerciseStats={exerciseStats}
                          isHidden={isHidden}
                        />
                      )}
                    </div>
                  )
              )}
            <div
              className={`${
                isHidden.setBoolean && isHidden.setId === e.id
                  ? "block"
                  : "hidden"
              } mb-3`}
            >
              <EditExerciseNotes value={e.notes} id={e.id} />
            </div>
          </CardBody>
        </Card>
      </section>
    ))
  );
};

export default DisplayExercisesAfterSubmit;
