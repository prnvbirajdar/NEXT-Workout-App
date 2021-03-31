// import { Modal, ModalBody, Alert } from "@windmill/react-ui";
// import { Correct } from "../../Icons/Icons";

// const DeleteExerciseModal = ({
//   closeDeleteExerciseModal,
//   isDeleteExerciseModalOpen,
//   setIsHidden,
//   id,
//   deleteExercise,
// }) => {
//   return (
//     <Modal
//       isOpen={isDeleteExerciseModalOpen}
//       onClose={closeDeleteExerciseModal}
//     >
//       <ModalBody>
//         <div className="flex flex-col  text-gray-600 dark:text-gray-200 mt-4 ">
//           <Alert type="danger">
//             Are you sure you want to delete this exercise?
//           </Alert>
//         </div>
//       </ModalBody>
//       <div className="flex justify-end">
//         <div
//           onClick={() => {
//             setIsHidden({
//               setId: "",
//               setBoolean: false,
//             });
//             deleteExercise(id);
//             closeDeleteExerciseModal();
//           }}
//           aria-label="correct"
//         >
//           <Correct aria-label="correct" />
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default DeleteExerciseModal;
