const jsonPost = function(endPoint, payload) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: endPoint,
            method: 'POST',
            headers: { "apiKey": "ThisIsMyPrivateAPIKey" },
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
            headers: { "apiKey": "ThisIsMyPrivateAPIKey" },
            success: function(success) {
                resolve(success);
            },
            error: function(error) {
                reject(error);
            },
        });
    })
}

const jsonDel = function(endPoint) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: endPoint,
            method: 'DELETE',
            headers: { "apiKey": "ThisIsMyPrivateAPIKey" },
            success: function(success) {
                resolve(success);
            },
            error: function(error) {
                reject(error);
            },
        });
    })
}

const jsonEdit = function(endPoint, payload) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: endPoint,
            method: 'PATCH',
            headers: { "apiKey": "ThisIsMyPrivateAPIKey" },
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