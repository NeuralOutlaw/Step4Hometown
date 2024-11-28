var array;


array = ['https://media5.bollywoodhungama.in/wp-content/uploads/2024/08/Shraddha-Kapoor-1-11.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg/1200px-Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Rachel_Reeves_Official_Cabinet_Portrait%2C_July_2024_%28cropped_2%29_%28cropped%29.jpg/800px-Rachel_Reeves_Official_Cabinet_Portrait%2C_July_2024_%28cropped_2%29_%28cropped%29.jpg'];
let element_img1 = document.getElementById('img1');
element_img1.setAttribute("src", array.slice(-1)[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_img12 = document.getElementById('img1');
  array.push(array.shift());
  element_img12.setAttribute("src", array.slice(-1)[0]);

});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_img13 = document.getElementById('img1');
  array.unshift(array.pop());
  element_img13.setAttribute("src", array.slice(-1)[0]);

});