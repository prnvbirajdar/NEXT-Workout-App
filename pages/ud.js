import produce from "immer";

const UpdateDelete = () => {
  const [myArr, setMyArr] = React.useState([
    { reps: "1", weight: "1", id: "1uCphYAVibssnZSgzw6bg" },
    { reps: "2", weight: "2", id: "V_Xh5aeXAzC39i6bSjtxd" },
    { reps: "3", weight: "3", id: "xXDUE21RmQo6YsGfqK4rP" },
    { reps: "4", weight: "4", id: "sp5xTkibQZ_VFJ6wuIKrh" },
    { reps: "5", weight: "5", id: "GZDR99k6umGxiKQQEazCX" },
  ]);

  const handleDelete = (id) => {
    const filteredArr = produce(myArr, (draft) =>
      draft.filter((set) => set.id !== id)
    );

    setMyArr(filteredArr);
  };

  return (
    <div>
      {myArr.map((el) => (
        <div key={el.id}>
          <span className="mr-5">{el.weight}</span>
          <span className="mr-5">{el.reps}</span>
          <span className="mr-5">{el.id}</span>
          <button onClick={() => handleDelete(el.id)}>del</button>
        </div>
      ))}
    </div>
  );
};

export default UpdateDelete;
