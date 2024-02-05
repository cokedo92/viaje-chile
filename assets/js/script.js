
// tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// color rojo en franja de quienes somos
$(".franja").on("dblclick", function () {
    $(this).css("background-color", "red");
});



