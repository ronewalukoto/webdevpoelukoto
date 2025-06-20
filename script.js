document.addEventListener("DOMContentLoaded", () => {
  const labels = document.querySelectorAll(".label");

  labels.forEach(label => {
    label.addEventListener("click", () => {
      const content = label.nextElementSibling;

      // Close others if you want accordion style
      document.querySelectorAll('.contentA').forEach(box => {
        if (box !== content) {
          box.classList.remove("active");
          box.style.maxHeight = null;
          box.style.padding = "0 1rem";
        }
      });

      // Toggle clicked box
      content.classList.toggle("active");

      if (content.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "1rem";
      } else {
        content.style.maxHeight = null;
        content.style.padding = "0 1rem";
      }
    });
  });
});
