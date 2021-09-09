export const SelectionSortHelper = (Array) => {
  let animations = [];

  for (let i = 0; i < Array.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < Array.length; j++) {
      let obj = { color: [], swap: [] };

      obj["color"].push(min_index, j);

      if (Array[min_index] > Array[j]) {
        obj["swap"].push(Array[j], Array[min_index]);

        let temp = Array[min_index];
        Array[min_index] = Array[j];
        Array[j] = temp;
      } else {
        obj["swap"].push(Array[min_index], Array[j]);
      }

      animations.push(obj);
    }
  }

  return animations;
};

export const BubbleSortHelper = (Array) => {
  let animations = [];

  for (let i = 0; i < Array.length; i++) {
    for (let j = 0; j < Array.length - i - 1; j++) {
      let obj = { swap: [], color: [] };
      obj["color"].push(j, j + 1);
      if (Array[j] > Array[j + 1]) {
        obj["swap"].push(Array[j + 1], Array[j]);
        let temp = Array[j];
        Array[j] = Array[j + 1];
        Array[j + 1] = temp;
      } else {
        obj["swap"].push(Array[j], Array[j + 1]);
      }
      animations.push(obj);
    }
  }

  return animations;
};

let animations = [];

let Merge = (Arr, leftindex, mid, rightindex) => {
  let leftlength = mid - leftindex + 1;
  let rightlength = rightindex - mid;
  let left = new Array(leftlength);
  let right = new Array(rightlength);
  for (let i = 0; i < leftlength; i++) {
    left[i] = Arr[i + leftindex];
  }
  for (let i = 0; i < rightlength; i++) {
    right[i] = Arr[i + mid + 1];
  }

  let i = 0,
    j = 0;
  let k = leftindex;
  while (i < leftlength && j < rightlength) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i + leftindex, j + mid + 1]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i + leftindex, j + mid + 1]);
    if (left[i] < right[j]) {
      animations.push([k, left[i]]);
      Arr[k++] = left[i];
      i++;
    } else {
      animations.push([k, right[j]]);

      Arr[k++] = right[j];
      j++;
    }
  }

  while (i < leftlength) {
    animations.push([i + leftindex, i + leftindex]);
    animations.push([i + leftindex, i + leftindex]);
    animations.push([k, left[i]]);
    Arr[k++] = left[i++];
  }

  while (j < rightlength) {
    animations.push([j + mid + 1, j + mid + 1]);
    animations.push([j + mid + 1, j + mid + 1]);
    animations.push([k, right[j]]);
    Arr[k++] = right[j++];
  }
};
let MergeSort = (Array, l, r) => {
  if (l >= r) {
    return;
  }

  let mid = l + parseInt((r - l) / 2);

  MergeSort(Array, l, mid);
  MergeSort(Array, mid + 1, r);

  Merge(Array, l, mid, r);
};

export const MergeSortHelper = (Array) => {
  let l = 0,
    r = Array.length - 1;

  MergeSort(Array, l, r);

  return animations;
};

export const InsertionSortHelper = (Array) => {
  let animations = [];

  for (let i = 0; i < Array.length; i++) {
    let j = i - 1;
    
    while (j >= 0 && Array[j] > Array[j + 1]) {
      let obj = { color: [], swap: [] };
      obj["color"].push(j, j + 1);
      obj["swap"].push(Array[j + 1], Array[j]);
      let temp = Array[j + 1];
      Array[j + 1] = Array[j];
      Array[j] = temp;
      animations.push(obj);
      j--;
    }
  }

  return animations;
};
