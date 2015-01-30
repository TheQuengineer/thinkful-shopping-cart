(function() {
    $("#accordion").accordion({
        active: false,
        header: "h4",
        collapsible: true,
        icons: {
            "header": "ui-icon-plus",
            "activeHeader": "ui-icon-minus"
        }
    });

    var list = $("ul#sortable");
    if (list.size() < 2) {
        list.append('<li>' + ' Add Item To List Below' + '</li>');
    }

    $(".item-checkbox").click(function(event) {
        event.preventDefault();
        $(this).fadeOut("slow");
        $(this).siblings("p.fa.fa-cart-plus").fadeOut("slow");
        $("ul#sortable").append('<li>' + $(this).data("header")+ '</li>');
    });
    $("#sortable").sortable();
}());
