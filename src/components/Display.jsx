
import "../css/Display.css";

const Display = ({Array}) => {
 

  return (
    <div className=" bar-container row-2">
      <div className="col-11" style={{ display: "flex" }}>
        {Array.map((el) => {
          return <div className="bar" style={{ height: el }}></div>;
        })}
      </div>
    </div>
  );
};

export default Display;
