$(document).ready(function () {
    var timer1;
    try {
        varTimer = setInterval(function () {
            callGetchoicesmethod();
        }, 300000);

        window.onunload = clearObjs;
        function clearObjs() {
            clearInterval(varTimer);
        }
    } catch (e) {
    }
});


function callGetchoicesmethod() {
    try {
        $.ajax({
            type: "POST",
            url: "../CustomWebService.asmx/CallGetChoice",
            cache: false,
            async: true,
            contentType: "application/json;charset=utf-8",
            //data: JSON.stringify({ key: key, val: val, appendVal: appendVal, delimiter: delimiter }),
            dataType: "json",
            success: function (data) {
                //console.log("dummy GetChoice call result: " + data.d);
            },
        });
    } catch (ex) {
        console.warn("Error in setNotificationCount Ajax call : " + ex.message);
    }
}