function deleteService(id){
    if (confirm("Are you sure you want to delete this item?")) {
        var url = ('/service/'+id);
        jsonDel(url).then(function(){
            window.location = '/';
        }).catch(function(error){
            console.log(error);
        })
    }
}

function deleteTherapist(id){
    if (confirm("Are you sure you want to delete this item?")) {
        var url = ('/therapist/'+id);
        jsonDel(url).then(function(){
            window.location = '/';
        }).catch(function(error){
            console.log(error);
        })
    }
}