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
