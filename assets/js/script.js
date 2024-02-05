
// tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// color franja de quienes somos
$(".franja").on("dblclick", function () {
    $(this).css("background-color", "red");
});

// Desaparicion de las tarjetas
$(".destacadosTitulo").on("click", function () {
    $(".card").toggle();
});


