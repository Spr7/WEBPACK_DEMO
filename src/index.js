import axios from "axios";
import { sum } from "./utils/maths";
import { mul } from "./utils/maths";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import jsonContent from "./model/notes.json";
import textContent from "./utils/test.txt";

const btnFetch = document.querySelector("#btnFetch");
btnFetch.addEventListener("click", () => {
  axios
    .get("https://reqres.in/api/user")
    .then((Response) => {
      console.log("Response ->", Response);
    })
    .catch(console.log);
});

console.log("hello");
console.log("sum:", sum(2, 4));
console.log("mul:", mul(2, 4));
console.log(jsonContent);
console.log(textContent);
