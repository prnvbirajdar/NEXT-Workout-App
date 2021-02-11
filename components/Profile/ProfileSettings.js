import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import { db } from "../data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../data/authProvider";

const ProfileSettings = ({ closeProfileModal, isProfileModalOpen }) => {
  const [physicalStats, setPhysicalStats] = useState(null);

  //   const [value, setValue] = useState({
  //     weight: "",
  //     height: "",
  //     bodyFatPercentage: "",
  //     dailyCalories: "",
  //     BMI: "",
  //   });
  const { user } = useAuth(); //context

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setPhysicalStats(data);
    db.collection("new").doc(user.uid).collection("stats").add({
      Weight: data.weight,
      Height: data.Height,
      "Daily Calories": data.dailyCalories,
      "Body Fat Percentage": data.bodyFatPercentage,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

 // console.log(errors);

  //   const handleValueChange = (e) => {
  //     const { name, value } = e.target;
  //     setValue((prevState) => ({ ...prevState, [name]: value }));
  //   };

  //   const handleValueSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(value);
  //   };

  //   console.log(value);

  //   <form onSubmit={handleSubmit(onSubmit)}>
  //       <input type="number" placeholder="Weight" name="Weight" ref={register({pattern: /^\S+@\S+$/i})} />
  //       <input type="number" placeholder="Height" name="Height" ref={register({pattern: /^\S+@\S+$/i})} />
  //       <input type="number" placeholder="Daily Calories" name="Daily Calories" ref={register({pattern: /^\S+@\S+$/i})} />
  //       <input type="number" placeholder="Body Fat Percentage" name="Body Fat Percentage" ref={register} />

  //       <input type="submit" />
  //     </form>

  return (
    <Modal isOpen={isProfileModalOpen} onClose={closeProfileModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Physical Stats</ModalHeader>
        <ModalBody>
          <div className="flex flex-col ">
            <div className="text-center text-base pb-2">
              <label>Weight</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-2 rounded w-1/3 border text-black text-center	"
                type="number"
                placeholder="pounds"
                name="weight"
                ref={register}
              />
            </div>
            <div className="text-center text-base p-2">
              <label>Height</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-2 rounded w-1/3 border text-black text-center	"
                placeholder="inches"
                name="height"
                ref={register}
              />
            </div>
            <div className="text-center text-base p-2">
              <label>Daily Calories</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-2 rounded w-1/3 border text-black text-center	"
                placeholder="Daily Calories"
                name="calories"
                ref={register}
              />
            </div>
            <div className="text-center text-base p-2">
              <label>Body Fat Percentage</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-2 rounded w-1/3 border text-black text-center	"
                ref={register}
                type="number"
                name="bodyFatPercentage"
                placeholder="%"
              />
            </div>
            {/*  <div className="text-center text-base p-2">
              <label>BMI</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-2 rounded w-1/3 border text-black text-center	"
                onChange={handleValueChange}
                type="number"
                name="BMI"
              />
  </div>*/}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeProfileModal}
          >
            Cancel
          </Button>
          <Button type="submit" className="w-full sm:w-auto">
            Accept
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default ProfileSettings;

// <Modal isOpen={isProfileModalOpen} onClose={closeProfileModal}>
// <ModalHeader>Physical Stats</ModalHeader>
// <ModalBody>
//   <div className="flex flex-col ">
//     <div className="text-center text-base pb-2">
//       <label>Weight</label>
//     </div>
//     <div className="flex justify-center ">
//       <input
//         className="py-2 rounded w-1/3 border text-black text-center	"
//         onChange={handleValueChange}
//         type="number"
//         name="weight"
//       />
//     </div>
//     <div className="text-center text-base p-2">
//       <label>Height</label>
//     </div>
//     <div className="flex justify-center ">
//       <input
//         className="py-2 rounded w-1/3 border text-black text-center	"
//         onChange={handleValueChange}
//         type="number"
//         name="height"
//       />
//     </div>
//     <div className="text-center text-base p-2">
//       <label>Daily Calories</label>
//     </div>
//     <div className="flex justify-center ">
//       <input
//         className="py-2 rounded w-1/3 border text-black text-center	"
//         onChange={handleValueChange}
//         type="number"
//         name="dailyCalories"
//       />
//     </div>
//     <div className="text-center text-base p-2">
//       <label>Body Fat Percentage</label>
//     </div>
//     <div className="flex justify-center ">
//       <input
//         className="py-2 rounded w-1/3 border text-black text-center	"
//         onChange={handleValueChange}
//         type="number"
//         name="bodyFatPercentage"
//       />
//     </div>
//     <div className="text-center text-base p-2">
//       <label>BMI</label>
//     </div>
//     <div className="flex justify-center ">
//       <input
//         className="py-2 rounded w-1/3 border text-black text-center	"
//         onChange={handleValueChange}
//         type="number"
//         name="BMI"
//       />
//     </div>
//   </div>
// </ModalBody>
// <ModalFooter>
//   <Button
//     className="w-full sm:w-auto"
//     layout="outline"
//     onClick={closeProfileModal}
//   >
//     Cancel
//   </Button>
//   <div >
//     <Button onClick={handleValueSubmit} className="w-full sm:w-auto">Accept</Button>
//   </div>
// </ModalFooter>
// </Modal>

// <div className="w-1/2 shadow text-gray-600 dark:text-gray-400 ">
// <Card>
//   <CardBody>
//     <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl">
//       Profile Settings
//     </p>
//     <div className="flex flex-col md:flex-row justify-around p-2 m-4">
//       <label>Weight</label>
//       <label>Height</label>
//       <label>Body Fat Percentage</label>
//       <label>Daily Calories</label>
//       <label>BMI</label>
//     </div>
//     <div className="flex justify-end">
//       <Button>Edit</Button>
//     </div>
//   </CardBody>
// </Card>
// </div>
