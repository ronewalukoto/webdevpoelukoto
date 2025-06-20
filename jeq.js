$(document).ready(function () {
  $("img").click(function () {
    const src = $(this).attr("src");

    // Create overlay
    const overlay = $(`
      <div id="img-overlay" style="
        position: fixed;
        top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      ">
        <img src="${src}" style="
          max-width: 90%;
          max-height: 90%;
          box-shadow: 0 0 20px #fff;
          border: 4px solid white;
          border-radius: 12px;
        ">
      </div>
    `);

    $("body").append(overlay);

    // Close on click
    $("#img-overlay").click(function () {
      $(this).fadeOut(200, function () {
        $(this).remove();
      });
    });
  });
});


 function initMap() {
    const location = { lat: -23.9045, lng: 29.4689 }; // Example: Polokwane, South Africa
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "TCC IT Group",
    });
  }