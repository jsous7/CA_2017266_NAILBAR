(function() {
    jsonGet('/services').then(function(serverResponse){
        for (i in serverResponse.result) {
            if (serverResponse.result[i].type === 'manicure') {
                $('#table_body_manicure').append(
                    `<tr>
                        <td>${serverResponse.result[i].item}</td>
                        <td>${serverResponse.result[i].description}</td>
                        <td>${serverResponse.result[i].price}</td>
                        <td>
                            <button type="submit" id="edit" class="btn btn-block btn-primary custom-buttom">Edit</button>
                            <button type="submit" id="delete" onclick="deleteService('${serverResponse.result[i]._id}')" class="btn btn-block btn-danger custom-buttom">Delete</button>
                        </td>
                    </tr>`
                );
            }

            if (serverResponse.result[i].type === 'pedicure') {
                $('#table_body_pedicure').append(
                    `<tr>
                        <td>${serverResponse.result[i].item}</td>
                        <td>${serverResponse.result[i].description}</td>
                        <td>${serverResponse.result[i].price}</td>
                        <td>
                            <button type="submit" id="edit"class="btn btn-block btn-primary custom-buttom">Edit</button>
                            <button type="submit" id="delete" onclick="deleteService('${serverResponse.result[i]._id}')" class="btn btn-block btn-danger custom-buttom">Delete</button>
                        </td>
                    </tr>`
                );
            }

            if (serverResponse.result[i].type === 'extra') {
                $('#table_body_extras').append(
                    `<tr>
                        <td>${serverResponse.result[i].item}</td>
                        <td>${serverResponse.result[i].description}</td>
                        <td>${serverResponse.result[i].price}</td>
                        <td>
                            <button type="submit" id="edit" class="btn btn-block btn-primary custom-buttom">Edit</button>
                            <button type="submit" id="delete" onclick="deleteService('${serverResponse.result[i]._id}')" class="btn btn-block btn-danger custom-buttom">Delete</button>
                        </td>
                    </tr>`
                );
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
                        <button type="submit" id="edit" class="btn btn-block btn-primary custom-buttom">Edit</button>
                        <button type="submit" id="delete" onclick="deleteTherapist('${serverResponse.result[i]._id}')" class="btn btn-block btn-danger custom-buttom">Delete</button>
                    </td>
                </tr>`
            );
        }
    }).catch(function(error){
        console.log(error);
    })
})()