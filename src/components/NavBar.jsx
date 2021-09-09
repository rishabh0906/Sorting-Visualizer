import { useState } from "react";
import "../css/NavBar.css";

let NavBar = (props) => {
  let [currSortAlgo, setSortAlgo] = useState("");

  if (props.Sorted === true) {
    document.querySelector(".sort").disabled = false;
    document.querySelector(".reset-array").disabled = false;
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand">Sorting Visualizer</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li
              class="nav-item nav-link"
              onClick={() => {
                setSortAlgo("Selection Sort");
              }}
            >
              Selection Sort
            </li>
            <li
              class="nav-item nav-link"
              onClick={() => {
                setSortAlgo("Merge Sort");
              }}
            >
              Merge Sort
            </li>
            <li
              class="nav-item nav-link"
              onClick={() => {
                setSortAlgo("Insertion Sort");
              }}
            >
              Insertion Sort
            </li>
            <li
              class="nav-item nav-link"
              onClick={() => {
                setSortAlgo("Bubble Sort");
              }}
            >
              Bubble Sort
            </li>
          </ul>
        </div>
      </div>
      <label className="namespace"> {currSortAlgo} </label>
      <button
        type="button"
        className=" reset-array btn btn-danger me-2 "
        onClick={() => {
          props.GenerateArray();
        }}
      >
        Generate Array
      </button>
      <button
        type="button"
        class=" sort btn btn-danger me-2 "
        onClick={(e) => {
          if (currSortAlgo === "") {
            alert("Select Algorithm");
            return;
          } else if (props.Sorted === true) {
            alert("Already Sorted");
            return;
          } else if (props.Sorted === false) {
            e.currentTarget.disabled = true;
            let Generate = document.querySelector(".reset-array");
            Generate.disabled = true;
          }  
          if (currSortAlgo === "Selection Sort") {
            props.SelectionSort();
          } else if (currSortAlgo === "Bubble Sort") {
            props.BubbleSort();
          } else if (currSortAlgo === "Merge Sort") {
            props.MergeSort();
          } else if (currSortAlgo === "Insertion Sort") {
            props.InsertionSort();
          }
        }}
      >
        Sort
      </button>
    </nav>
  );
};

export default NavBar;
