/* @hungrybluedev/theme-switcher
 * -----------------------------
 * This project is made available under the MIT license.
 * See https://github.com/hungrybluedev/theme-switcher/ for more information.
 */
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
applyTheme(getLocalTheme());
