/* @hungrybluedev/theme-switcher
 * -----------------------------
 * This project is made available under the MIT license.
 * See https://github.com/hungrybluedev/theme-switcher/ for more information.
 */
// Externally available functions
export const attemptToSetDefaultTheme = (theme) => {
  const actualTheme = localStorage.getItem("tswitch-theme") || theme;
  applyTheme(actualTheme);
};
export const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("tswitch-theme", theme);
};
export const getLocalTheme = () => {
  return localStorage.getItem("tswitch-theme") || "light";
};
// Website-wide side-effect
const allButtons = document.querySelectorAll(
  "#theme-switcher-form input[name=theme-choice]"
);
applyTheme(getLocalTheme());
if (allButtons.length > 0) {
  attemptToSetDefaultTheme("light");
  allButtons.forEach((button) =>
    button.addEventListener("change", () => {
      console.log(button.value.slice(0, -6));
      applyTheme(button.value.slice(0, -6));
    })
  );
}
window.addEventListener("pageshow", () => {
  const currentTheme = getLocalTheme();
  applyTheme(currentTheme);
  const themeRadio = document.getElementById(`${currentTheme}-theme`);
  if (themeRadio) {
    themeRadio.checked = true;
  }
});
