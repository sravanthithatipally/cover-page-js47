let formele = document.getElementById("consoleForm");
let requesturlele = document.getElementById("requestUrl");
let errorele = document.getElementById("requestUrlErrMsg");
let requestbodyele = document.getElementById("requestBody");
let responsebodyele = document.getElementById("responseBody");
let methodele = document.getElementById("requestMethod");
let responsestatusele = document.getElementById("responseStatus");

let formdata = {
    requesturl: "https://gorest.co.in/public-api/users",
    requestmethod: "POST",
    requestbody: ""
};
requesturlele.addEventListener("change", function(event) {
    formdata.requesturl = event.target.value;
});
requestbodyele.addEventListener("change", function(event) {
    formdata.requestbody = event.target.value;
});
methodele.addEventListener("change", function(event) {
    formdata.requestmethod = event.target.value;
});

function tovalidataform(formdata) {
    let {
        requesturl
    } = formdata;
    if (requesturl === "") {
        errorele.textContent = "Required*";
    } else {
        errorele.textContent = "";
    }
}

function tosendrequest(formdata) {
    let {
        requesturl,
        requestmethod,
        requestbody
    } = formdata;
    let options = {
        method: requestmethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 49d55cf904b931e61e7f22f159b95c1acece321417e98c47c0d6314f14bafbb2"
        },
        body: requestbody
    };
    fetch(requesturl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let responsestatus = jsonData.code;
            let responsedata = JSON.stringify(jsonData);
            responsestatusele.value = responsestatus;
            responsebodyele.value = responsedata;
        });
}




formele.addEventListener("submit", function(event) {
    event.preventDefault();
    tovalidataform(formdata);
    tosendrequest(formdata);
});