export const handleToggleModal = (setModal) =>
  setModal((prev) => {
    if (!prev) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return !prev;
  });
