$(document).ready(() => {
    $(".btn-menu").click(() => {
        $("#menu").toggleClass('hide')
        $("#menu .btn-menu i").toggleClass('fa-bars fa-times')
    })
})