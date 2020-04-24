// /** All the code and subroutines are based on the code of Mikhail Timofeev,
//  * the reference code is on github: https://github.com/mikhail-cct/CA1-In-class-Demo.git */

// $(document).ready(function(){
//     draw_table();
// })

// function draw_table()
// {
//     $("#results").empty();
//     $.getJSONuncached = function (url)
//     {
//         return $.ajax(
//             {
//                 url: '/services',
//                 type: 'GET',
//                 cache: false,
//                 success: function (html)
//                 {
//                     $("#results").append(html);
//                     select_row();
//                 }
//             });
//     };
//     $.getJSONuncached("/read")
// };

// function select_row()
// {
//     $("#menuTable tbody tr[id]").click(function ()
//     {
//         //create css class "selected" dynamically on the table rows
//         $(".selected").removeClass("selected");
//         $(this).addClass("selected");

//         var service = $(this).prevAll("tr").children("td[colspan='4']").length - 1;
//         var entree = $(this).attr("id") - 1;
//         console.log(service);
//         console.log(entree);
//         delete_row(service, entree);
//     })
// };

// function delete_row(service, entree)
// {
//     $("#delete").click(function ()
//     {
//         $.ajax(
//             {
//                 url: "/delete",
//                 type: "POST",
//                 data:
//                     {
//                         section: service,
//                         entree: entree
//                     },
//                 cache: false,
//                 success: setTimeout(draw_table, 1000)
//             })
//     })
// };