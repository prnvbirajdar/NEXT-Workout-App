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
    <div>
      <Card onClick={getExerciseStats}>
        <CardBody>
          <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
            Revenue
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
            commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at
            qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default DisplayExercisesAfterSubmit;
