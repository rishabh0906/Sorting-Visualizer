import Display from "./Display";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import {
  SelectionSortHelper,
  BubbleSortHelper,
  MergeSortHelper,
  InsertionSortHelper,
} from "../Algorithms/SortingAlgorithm";

const PRIMARY_COLOR = "rgba(0, 132, 255, 0.527)";
const SECONDARY_COLOR = " rgb(49, 226, 13)";


let SortingVisualizer = () => {
  let [Array, setArray] = useState([]);
  let [AlreadySorted,setSorted]=useState(false);
  let ResetArray = () => {
    console.log(window.innerWidth);
    let temp = [];
    for (let i = 0; i < (window.innerWidth<768?20:50); i++) {
      temp.push(Math.floor(Math.random() * 105) + 5);
    }
    setSorted(false);
    setArray(temp);
  };

  useEffect(() => {
    ResetArray();
  }, []);

  let GenerateArray = () => {
    ResetArray();
  };

  let SelectionSort = async () => {
    let animations = SelectionSortHelper(Array);

    for (let i = 0; i < animations.length; i++) {
      let [index1, index2] = animations[i].color;

      let Bar1 = document.querySelectorAll(".bar")[index1];
      let Bar2 = document.querySelectorAll(".bar")[index2];

      Bar1.style.backgroundColor = SECONDARY_COLOR;
      Bar2.style.backgroundColor = SECONDARY_COLOR;

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });

      let [height1, height2] = animations[i].swap;
      Bar1.style.height = `${height1}px`;
      Bar2.style.height = `${height2}px`;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });
      Bar1.style.backgroundColor = PRIMARY_COLOR;
      Bar2.style.backgroundColor = PRIMARY_COLOR;
    }
    setSorted(true);
  };

  let BubbleSort = async () => {
    let animations = BubbleSortHelper(Array);

    for (let i = 0; i < animations.length; i++) {
      let [index1, index2] = animations[i].color;

      let Bar1 = document.querySelectorAll(".bar")[index1];
      let Bar2 = document.querySelectorAll(".bar")[index2];

      Bar1.style.backgroundColor = SECONDARY_COLOR;
      Bar2.style.backgroundColor = SECONDARY_COLOR;

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });

      let [height1, height2] = animations[i].swap;
      Bar1.style.height = `${height1}px`;
      Bar2.style.height = `${height2}px`;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });
      Bar1.style.backgroundColor = PRIMARY_COLOR;
      Bar2.style.backgroundColor = PRIMARY_COLOR;
    }
    setSorted(true);
  };

  let MergeSort = async () => {
    const animations = MergeSortHelper(Array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 200);
        });
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      } else {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 200);
        });
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }
    }

    setSorted(true);
  };
  let InsertionSort = async () => {
    let animations = InsertionSortHelper(Array);

    for (let i = 0; i < animations.length; i++) {
      let [index1, index2] = animations[i].color;

      let Bar1 = document.querySelectorAll(".bar")[index1];
      let Bar2 = document.querySelectorAll(".bar")[index2];

      Bar1.style.backgroundColor = SECONDARY_COLOR;
      Bar2.style.backgroundColor = SECONDARY_COLOR;

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });

      let [height1, height2] = animations[i].swap;
      Bar1.style.height = `${height1}px`;
      Bar2.style.height = `${height2}px`;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });
      Bar1.style.backgroundColor = PRIMARY_COLOR;
      Bar2.style.backgroundColor = PRIMARY_COLOR;
    }
    setSorted(true);
  };
  return (
    <>
      <NavBar
        SelectionSort={SelectionSort}
        BubbleSort={BubbleSort}
        MergeSort={MergeSort}
        InsertionSort={InsertionSort}
        GenerateArray={GenerateArray}
        Sorted={AlreadySorted}
      />
      <Display Array={Array} />
    </>
  );
};

export default SortingVisualizer;
