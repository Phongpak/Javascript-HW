const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];
const nums12 = [5, ...nums1, -6, -1, ...nums2];
let result = nums12.reduce((acc, item) => acc + item, 0);
console.log(result);
