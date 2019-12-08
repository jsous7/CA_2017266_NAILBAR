$(document).ready(function(){
    draw_table();
})

function draw_table()
{
    $("#results").empty();
    $.getJSONuncached = function (url)
    {
        return $.ajax(
            {
                url: url,
                type: 'GET',
                cache: false,
                success: function (html)
                {
                    $("#results").append(html);
                    select_row();
                }
            });
    };
    $.getJSONuncached("/read")
};

function select_row()
{
    $("#menuTable tbody tr[id]").click(function ()
    {
        //create css class "selected" dynamically on the table rows
        $(".selected").removeClass("selected");
        $(this).addClass("selected");

        var service = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
        var entree = $(this).attr("id") - 1;

        delete_row(service, entree);
    })
};

function delete_row(service, entree)
{
    $("#delete").click(function ()
    {
        $.ajax(
            {
                url: "/delete",
                type: "POST",
                data:
                    {
                        section: service,
                        entree: entree
                    },
                cache: false,
                success: setTimeout(draw_table, 1000)
            })
    })
};