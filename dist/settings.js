/* @hungrybluedev/theme-switcher
 * -----------------------------
 * This project is made available under the MIT license.
 * See https://github.com/hungrybluedev/theme-switcher/ for more information.
 */
import { applyTheme, getLocalTheme } from "./switch.js";
window.addEventListener("pageshow", () => {
  const currentTheme = getLocalTheme();
  applyTheme(currentTheme);
  document.getElementById(currentTheme).checked = true;
});
const allButtons = document.querySelectorAll("input[name=theme-choice]");
allButtons.forEach((button) =>
  button.addEventListener("change", () => {
    applyTheme(button.value);
  })
);
