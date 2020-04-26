const jsonPost = function(endPoint, payload) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: endPoint,
            method: 'POST',
            processData: false,
            data: JSON.stringify(payload),
            contentType: 'application/json',
            success: function(success) {
                resolve(success);
            },
            error: function(error) {
                reject(error);
            },
        });
    })
}

const jsonGet = function(endPoint) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: endPoint,
            method: 'GET',
            success: function(success) {
                resolve(success);
            },
            error: function(error) {
                reject(error);
            },
        });
    })
}