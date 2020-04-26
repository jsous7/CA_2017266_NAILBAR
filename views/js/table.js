
var selected = false;
$('[data-product-table]').on('click', 'tbody tr', function (event) {
    if (!selected) {
        $(this).addClass("selected");
        selected = true;
        console.log($(this).data("price"))
        let price = 0;
        $("[data-id][data-price].selected").each(function() {
            price += $(this).data("price");
        })
        $("#totalPrice").text(price.toFixed(2));
        
    }else{
        $(this).removeClass('selected');
        selected = false;
        let price = 0;
        $("[data-id][data-price].selected").each(function() {
            price += $(this).data("price");
        })
        $("#totalPrice").text(price.toFixed(2));
    }
});