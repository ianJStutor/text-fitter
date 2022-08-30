import { fitText } from "../../text-fitter.js";

const input = document.querySelector("main input");
const output = document.querySelector("main output");

input.focus();

input.addEventListener("keyup", () => {
    output.textContent = input.value.trim();
    fitText(output);
});
