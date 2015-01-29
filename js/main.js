(function() {
    $("#accordion").accordion({
        header: "h4",
        collapsible: true,
        icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus"}
    });
    $("#grocery-name-field").autocomplete({
        source: ["Eggs", "Milk", "Flour", "Beans", "Cereal", "PaperTowels", "Snacks", "Dairy", "Meat", "Fish", "Bread", "Jam", "ZephraHills Drinking Water"]
    });
}());
