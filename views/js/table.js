

function select_row() {
    var selected = false;
    $("#table tr").click(function ()
    {
        if (!selected) {
            $(this).addClass("selected");
            selected = true;
        }else{
            $(this).removeClass('selected');
            selected = false;
        }
        console.log($(this));
    })
};