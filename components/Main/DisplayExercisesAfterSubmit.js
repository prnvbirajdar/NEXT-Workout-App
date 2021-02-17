import { Card, CardBody } from "@windmill/react-ui";
import { db } from "../data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../data/authProvider";

const DisplayExercisesAfterSubmit = () => {
  const { user } = useAuth(); //context

  const [exerciseStats, setExerciseStats] = React.useState([]);

  const dateToday = new Date().toLocaleString().split(",")[0];

  const getExerciseStats = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .where("date", "==", dateToday)
      .orderBy("timeStamp", "asc")
      .onSnapshot((querySnapshot) => {
        //console.log(querySnapshot.docs.map((d) => d.data()));
        setExerciseStats(querySnapshot.docs.map((d) => d.data()));
      });
  };

  console.log(exerciseStats);

  React.useEffect(() => {
    if (user) {
      getExerciseStats();
    }
  }, [user]);

  return (
    exerciseStats.length > 0 &&
    exerciseStats.map((e) => (
      <div key={e.timeStamp}>
        <Card>
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
              {e.exercise}
            </p>
            {e.sets.map((s, index) => (
              <div>
                <p className=" font-semibold text-gray-800 dark:text-gray-300 text-center text-xl">
                  Set {index + 1}
                </p>
                <div className="flex flex-col md:flex-row justify-around p-2 mx-4 mb-2 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
                  <div className="flex justify-between p-2   ">
                    <label className="self-end  ">Weight</label>
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
          </CardBody>
        </Card>
      </div>
    ))
  );
};

export default DisplayExercisesAfterSubmit;

// <Card>
// <CardBody>
//   <p className=" font-semibold text-gray-800 dark:text-gray-300 text-center text-xl">
//     Set {index + 1}
//   </p>
//   <div className="flex flex-col md:flex-row justify-around p-2 mx-4 mb-2 bg-gray-50 dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
//     <div className="flex justify-between p-2   ">
//       <label className="self-end  ">Weight</label>
//       <p className=" font-medium ml-3  text-right ">{m.weight} lbs</p>
//     </div>
//     <div className="flex justify-between p-2   ">
//       <label className="self-end  ">Reps</label>
//       <p className=" font-medium ml-3 capitalize text-right ">{m.reps}</p>
//     </div>
//   </div>
// </CardBody>
// </Card>
