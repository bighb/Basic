const toggleButton = document.querySelector(".toggle-button");
toggleButton.addEventListener("change", toggleTheme, false);
// 监听系统主题色变化
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    console.log("e: ", e);
    if (e.matches) {
      useTheme("dark");
      toggleButton.checked = true;
    } else {
      useTheme("light");
      toggleButton.checked = false;
    }
  });
const theme = {
  dark: {
    "--primary-color": "#325b97",
    "--secondary-color": "#9cafeb",
    "--font-color": "#e1e1ff",
    "--bg-color": "#000013",
    "--heading-color": "#818cab",
  },
  light: {
    "--primary-color": "#0d0b52",
    "--secondary-color": "#3458b9",
    "--font-color": "#424242",
    "--bg-color": "#ffffff",
    "--heading-color": "#292922",
  },
};

function toggleTheme(e) {
  if (e.target.checked) {
    useTheme("dark");
    localStorage.setItem("theme", "dark");
  } else {
    useTheme("light");
    localStorage.setItem("theme", "light");
  }
}

function useTheme(themeChoice) {
  console.log("themeChoice: ", themeChoice);
  document.documentElement.style.setProperty(
    "--primary-color",
    theme[themeChoice]["--primary-color"]
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    theme[themeChoice]["--secondary-color"]
  );
  document.documentElement.style.setProperty(
    "--font-color",
    theme[themeChoice]["--font-color"]
  );
  document.documentElement.style.setProperty(
    "--bg-color",
    theme[themeChoice]["--bg-color"]
  );
  document.documentElement.style.setProperty(
    "--heading-color",
    theme[themeChoice]["--heading-color"]
  );
}

let preferredTheme = localStorage.getItem("theme");

if (preferredTheme) {
  changeTheme(preferredTheme);
} else {
  // 获取系统主题色
  preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  changeTheme(preferredTheme);
}
function changeTheme(preferredTheme) {
  if (preferredTheme === "dark") {
    useTheme("dark");
    toggleButton.checked = true;
  } else {
    useTheme("light");
    toggleButton.checked = false;
  }
}
