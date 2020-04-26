(function() {
    jsonGet('/services').then(function(serverResponse){
        for (i in serverResponse.result) {
            let tbodyTemplate = 
            `<tr data-id="${serverResponse.result[i]._id}" data-price="${serverResponse.result[i].price}">
                <td>${serverResponse.result[i].item}</td>
                <td>${serverResponse.result[i].description}</td>
                <td>${serverResponse.result[i].price}</td>
                <td>
                    <button type="submit" id="edit" onclick="editService('${serverResponse.result[i]._id}')" class="btn btn-block btn-primary custom-buttom">Edit</button>
                    <button type="submit" id="delete" onclick="deleteService('${serverResponse.result[i]._id}')" class="btn btn-block btn-danger custom-buttom">Delete</button>
                </td>
            </tr>`;
            if (serverResponse.result[i].type === 'manicure') {
                $('#table_body_manicure').append(tbodyTemplatev);
            }

            if (serverResponse.result[i].type === 'pedicure') {
                $('#table_body_pedicure').append(tbodyTemplate);
            }

            if (serverResponse.result[i].type === 'extra') {
                $('#table_body_extras').append(tbodyTemplate);
            }
        }
    }).catch(function(error){
        console.log(error);
    })

    jsonGet('/therapists').then(function(serverResponse){
        for (i in serverResponse.result) {
            $('#table_body_therapists').append(
                `<tr>
                    <td>${serverResponse.result[i].name}</td>
                    <td>${serverResponse.result[i].bio}</td>
                    <td>
                        <button type="submit" id="edit" onclick="editTherapist('${serverResponse.result[i]._id}')" class="btn btn-block btn-primary custom-buttom">Edit</button>
                        <button type="submit" id="delete" onclick="deleteTherapist('${serverResponse.result[i]._id}')" class="btn btn-block btn-danger custom-buttom">Delete</button>
                    </td>
                </tr>`
            );
        }
    }).catch(function(error){
        console.log(error);
    })
})()