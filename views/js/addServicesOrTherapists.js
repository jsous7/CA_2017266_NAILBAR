// Logic for select button
defaultInputs =
`<div class="form-group">
    <input class="form-control" type="text" name="item" placeholder="Item" id="item" required>
</div>
<div class="form-group">
    <input class="form-control" type="text" name="description" placeholder="Description" id="description" required>
</div>
<div class="form-group">
    <input class="form-control" type="number" name="price" step="0.01" min="0" max="10" placeholder="Price" id="price" required>
</div>
<div class="form-group">
    <input type="hidden" name="service_type" id="service_type">
    <button type="submit" class="btn btn-primary btn-block custom-buttom" id="create_new_service">Create new service</button>
</div>`;

therapistsInputs =
`<div class="form-group">
    <input class="form-control" type="text" name="therapist_name" placeholder="Therapist Name" id="therapist_name" required>
</div>
<div class="form-group">
    <input class="form-control" type="text" name="therapist_bio" placeholder="Therapist Bio" id="therapist_bio" required>
</div>
<div class="form-group">
    <button type="submit" class="btn btn-primary btn-block custom-buttom" id="create_new_therapist">Create new therapist</button>
</div>`;

$('#select_new_register_type option[value="none"]').prop( "disabled", true )
var select = $("#select_new_register_type");
select.change(function(){
    switch(select.val()) {
        case "none":
            $('#input_container').empty();
            break;
        case "manicure":
        case "pedicure":
        case "extra":
            $('#input_container').empty();
            $('#input_container').append(defaultInputs);
            $('#service_type').val(select.val());
            createService();
            break;
        case "therapist":
            $('#input_container').empty();
            $('#input_container').append(therapistsInputs);
            createTherapist();
            break;
      }
});

function createService(){
    $('#create_new_service').click(function(){
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

        jsonPost('/service', payload).then(function(){
            window.location = '/';
        }).catch(function(){
            console.log('Error when creating new service');
        })
    });
}

function createTherapist(){
    $("#create_new_therapist").click(function(){
        var therapist_name = $('#therapist_name').val();
        var therapist_bio = $('#therapist_bio').val();

        payload = {
            "name": therapist_name,
            "bio": therapist_bio
        }

        jsonPost('/therapist', payload).then(function() {
            window.location = '/';
        }).catch(function() {
            console.log('Error when creating new therapist');
        });
    });
}