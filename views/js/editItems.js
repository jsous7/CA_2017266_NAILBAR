function editService(id){
    jsonGet('/service/'+id).then(function(serverResponse){
        $('#input_container').empty();
        $('#input_container').append(defaultInputs);
        $('#select_new_register_type').val(serverResponse.result.type);
        $('#select_new_register_type option[value='+serverResponse.result.type+']').text('Edit '+serverResponse.result.type+' service');
        $('#select_new_register_type').focus();
        $('#select_new_register_type').prop( "disabled", true )
        $('#create_new_service').attr("id", "edit_service");
        $('#edit_service').text('Confirm Changes')
        $('#item').focus();
        $('#service_type').val(serverResponse.result.type)
        $('#item').val(serverResponse.result.item);
        $('#description').val(serverResponse.result.description);
        $('#price').val(serverResponse.result.price);
        
        showCancelButton();

        $('#edit_service').click(function(){
            var service_type = $('#service_type').val();
            var item = $('#item').val();
            var description = $('#description').val();
            var price = $('#price').val();
    
            payload = {
                "type": service_type,
                "item": item,
                "description": description,
                "price": price
            }
    
            jsonEdit('/service/'+id, payload).then(function(){
                window.location = '/';
            }).catch(function(){
                alert('Error when editing service');
                console.log(error.status);
                console.log(error.responseText);
                console.log(error);
            })
        });
    }).catch(function(error){
        console.log(error.status);
        console.log(error.responseText);
        console.log(error);
    })
}


function editTherapist(id){
    jsonGet('/therapist/'+id).then(function(serverResponse){
        $('#input_container').empty();
        $('#input_container').append(therapistsInputs);
        $('#select_new_register_type').val('therapist');
        $('#select_new_register_type option[value="therapist"]').text('Edit therapist');
        $('#select_new_register_type').focus();
        $('#select_new_register_type').prop( "disabled", true )
        $('#create_new_therapist').attr("id","edit_therapist");
        $('#edit_therapist').text('Confirm Changes')
        $('#therapist_name').focus();
        $('#therapist_name').val(serverResponse.result.name);
        $('#therapist_bio').val(serverResponse.result.bio);

        showCancelButton();

        $('#edit_therapist').click(function(){
            var therapist_name = $('#therapist_name').val();
            var therapist_bio = $('#therapist_bio').val();
           
            payload = {
                "name": therapist_name,
                "bio": therapist_bio
            }
    
            jsonEdit('/therapist/'+id, payload).then(function(){
                window.location = '/';
            }).catch(function(){
                alert('Error when editing therapist');
                console.log(error.status);
                console.log(error.responseText);
                console.log(error);
            })
        });
    }).catch(function(error){
        console.log(error.status);
        console.log(error.responseText);
        console.log(error);
    })
}

function showCancelButton(){
    $('#input_container').append(`<button class="btn btn-warning btn-block custom-buttom" id="cancel">Cancel Changes</button>`);
        $('#cancel').click(function(){
            window.location = '/';
        })
}