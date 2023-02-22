// // Function declaration
// async function foo() {
//     // ...
//   }

//   // Functional expression
//   const foo = async function () {
//     // ...
//   };

//   // Arrow function
//   const foo = async () => {
//     // ...
//   };

//   // Object method
//   const user = {
//     async foo() {
//       // ...
//     },
//   };

//   // Class method
//   class User {
//     async foo() {
//       // ...
//     }
//   }

// console.log("hello world");

// funcion asincrona // sintaxis // async await
// PROMISES => fullfilled / rejected

// const fetchPhotos = async () => {
//   let url = "https://jsonplaceholder.typicode.com/photos";

//   const photoOne = await fetch(`${url}/1`);
//   const photoTwo = await fetch(`${url}/2`);
//   const photoThree = await fetch(`${url}/3`);

//   console.log(photoOne, photoTwo, photoThree);
// };

// fetchPhotos()
//   .then((photos) => {
//     // console.log("estamos en el then", photos[5].thumbnailUrl);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const fetchPhotos = async () => {
  //   throw Error("esto es un error forzado");

  let url = "https://jsonplaceholder.typicode.com/photos";

  let arrOfPhotosIds = [1, 2, 3];

  //   const photoOne = await fetch(`${url}/1`);
  //   const photoTwo = await fetch(`${url}/2`);
  //   const photoThree = await fetch(`${url}/3`);

  let fetchingMultipleIds = arrOfPhotosIds.map(async (el) => {
    let response = await fetch(`${url}/${el}`);
    return response;
  });

  const photos = await Promise.all(fetchingMultipleIds);

  console.log(photos);
};

function program() {
  try {
    fetchPhotos()
      .then((photos) => {
        // console.log("estamos en el then", photos[5].thumbnailUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log("err dentro de trycatch block");
  }
}

program();

let input = document.querySelector("#inputX");

input.addEventListener("change", () => {
  console.log("llamar a la api con el valor de", input.value);
});

// https://restcountries.com/v3.1/name/{name}
