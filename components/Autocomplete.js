// import { useState, useEffect, useRef } from "react";

// const Autocomplete = ({
//   suggestions,
//   setinputText,
//   inputText,
//   dailyExercises,
//   setDailyExercises,
//   exerciseObj,
//   setExerciseObj,
// }) => {
//   const [displayOptions, setDisplayOptions] = useState(false); //if options are displayed or not
//   const [options, setOptions] = useState([]); //render all the options
//   const [disabled, setDisabled] = useState(true); //add button disabales if someone is typing random stuff
//   const wrapperRef = useRef(null);

//   let exerciseArr = []; //empty array to push all exercises

//   //maps through every muscle object and them maps through every exercise and pushes them all in exerciseArr
//   const arr = suggestions.posts.map((m) =>
//     m.exercise.map((e) => exerciseArr.push(e))
//   );

//   useEffect(() => {
//     setOptions(exerciseArr);
//   }, []);

//   //handleClickOutside and the useEffect below handles the displayOptions once the input text in not in focus.
//   //It toggles the options off, if the input is not in focus
//   useEffect(() => {
//     window.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       window.removeEventListener("mousedown", handleClickOutside);
//     };
//   });

//   const handleClickOutside = (event) => {
//     const { current: wrap } = wrapperRef;
//     if (wrap && !wrap.contains(event.target)) {
//       setDisplayOptions(false);
//     }
//   };

//   // setExercise lets searchInput fill up the exercise that user clicks on and then set the displayOptions to false
//   const setExercise = (exercise) => {
//     setinputText(exercise);
//     setDisplayOptions(false);
//   };

//   //displays options that match user search
//   const displayedOptions =
//     displayOptions && inputText ? (
//       <div>
//         {options
//           .filter(
//             (suggestion) =>
//               suggestion.toLowerCase().indexOf(inputText.toLowerCase()) > -1
//           )
//           .map((v, i) => {
//             return (
//               <div
//                 key={i}
//                 onClick={() => setExercise(v)}
//                 onKeyDown={() => setExercise(v)}
//                 tabIndex="0"
//               >
//                 {v}
//               </div>
//             );
//           })}
//       </div>
//     ) : (
//       <div></div>
//     );

//   //sets inputText state, adds exercises to daily exercise array, sets inputText to empty
//   const handleAddClick = () => {
//     setinputText(inputText);

//     const currE = produce(exerciseObj, (draft) => {
//       draft.exercise = inputText;
//       draft.time = moment().format("LL");
//       draft.data = [{ set: { weight: 0, reps: 0 } }];
//     });

//     setExerciseObj(currE);

//     setDailyExercises([...dailyExercises, exerciseObj]);

//     // setExerciseObj({
//     //   ...exerciseObj,
//     //   exercise: inputText,
//     //   time: moment().format("LL"),
//     // });

//     setinputText("");
//   };

//   useEffect(() => {
//     const handleDisable = options.some((v) => v === inputText);
//     setDisabled(handleDisable);
//   }, []);

//   console.log(exerciseObj);
//   console.log(dailyExercises);

//   return (
//     <div className="flex flex-col items-center mt-10">
//       <div className="flex justify-center">
//         <input
//           required
//           className="mr-5"
//           type="text"
//           placeholder="Search exercise"
//           value={inputText}
//           onClick={() => {
//             setDisplayOptions(!displayOptions);
//           }}
//           onChange={(e) => {
//             setinputText(e.target.value);
//             options.map((v) => v.includes(e.target.value.toLowerCase()))
//               ? setDisabled(false)
//               : setDisabled(true);
//           }}
//         />
//         <button
//           disabled={options.some((v) => v === inputText) ? disabled : !disabled}
//           href="#"
//           onClick={handleAddClick}
//           className="bg-gray-900 text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white disabled:bg-opacity-50"
//         >
//           Add
//         </button>
//       </div>

//       {/* filters through the exercise options based on inputText and render all the exercises that match*/}
//       <div ref={wrapperRef}>{displayedOptions}</div>
//     </div>
//   );
// };

// export default Autocomplete;
