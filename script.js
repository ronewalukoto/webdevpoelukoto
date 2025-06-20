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

$(document).ready(function () {
  const $input = $('#mainSearchInput');
  const $results = $('#search-results');

  function showMatches(query) {
    const lowerQuery = query.toLowerCase();
    $results.empty();

    if (lowerQuery.length < 2) {
      $results.hide();
      return;
    }

    let found = false;

    $('h1, h2, h3, p').each(function () {
      const $el = $(this);
      const text = $el.text().toLowerCase();

      if (text.includes(lowerQuery)) {
        const $match = $('<div>')
          .text($el.text())
          .css({
            padding: '0.5rem',
            background: 'var(--card-bg)',
            borderBottom: '1px solid var(--accent-color)',
            cursor: 'pointer'
          })
          .click(() => {
            $('html, body').animate({
              scrollTop: $el.offset().top - 80
            }, 500);
          });

        $results.append($match);
        found = true;
      }
    });

    $results.toggle(found);
  }

  // Live results while typing
  $input.on('input', function () {
    const query = $(this).val();
    showMatches(query);
  });

  // Show full result list on Enter key
  $input.on('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = $(this).val();
      showMatches(query);
      $results.show(); // force show
    }
  });
});

