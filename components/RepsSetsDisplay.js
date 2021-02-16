import { Card, CardBody } from "@windmill/react-ui";

const RepsSetsDisplay = ({ currentExerciseData }) => {
    
  return currentExerciseData.sets.map((m, index) => (
    <Card>
      <CardBody>
        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl">
          Set {m[index]}
        </p>
        <div className="flex justify-around p-2 mx-4 mb-2">
          <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
            <label className="self-end">{m.reps}</label>
            <p className=" text-gray-800 font-medium ml-3 capitalize text-right dark:text-gray-100"></p>
          </div>
          <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
            <label className="self-end">{m.weight}</label>
            <p className=" text-gray-800 font-medium ml-3  text-right dark:text-gray-100"></p>
          </div>
        </div>
      </CardBody>
    </Card>
  ));
};

export default RepsSetsDisplay;
