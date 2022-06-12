export const scrollToElement = (cssSelector: string) => {
  const settings = document.querySelectorAll(cssSelector);
  const settingsExist = setInterval(() => {
    if (settings.length) {
      settings[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      clearInterval(settingsExist);
    }
  }, 100);
};
