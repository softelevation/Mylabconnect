function axFirstReady() {
    currentThemeColor = "green";
    $($("#themeIcon").closest("li")).css("display", "none");
    if (typeof AxUserRoles != "undefined" && AxUserRoles.toLowerCase().indexOf("doctor") != -1)
        $(".navbar-nav").append('<li class="dropdown messages-menu axpSettings" title="My Profile"><a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" style="position: relative;top: 0px;" onclick="LoadIframe(\'ivtstload.aspx?tstname=dprof&pusername=' + mainUserName + '&hltype=load&torecid=false\')"></i></a></li>');
    $("#qrCodeBtnWrapper").css("display", "none");
    //$(".titlename")[0].innerText = "";
    //$(".titlename").removeAttr("style");
    //$(".titlename").removeAttr("class");
    $(".logo-main .brand .left").removeAttr("style");
    if (isMobileDevice()) {
        $(".header-right").css("display", "none !important");
        $(".logo-main .brand .left").css("width", "70px");
        $(".logo-main .brand .left").css("margin-top", "10px");
        $(".logo-main .brand").css("float", "none");
        $(".header-left").css("width", "100% !important");
    }
    else
        $(".logo-main .brand .left").css("width", "130px");
    $(".navbar-static-top").attr("style", "background:linear-gradient(27deg, rgb(255, 255, 255) 20%, rgb(83, 192, 240) 72%, rgb(20, 139, 189) 100%) !important");
    $("#menuCollapse").css("color", "#4c46a2 !important");
    $(".hisItem").css("display", "none");
    $(".refreshMenu").css("display", "none");
    $("#li3").css("display", "none");
    if (userResp !== "default") {
        $(callParentNew("notifications-menu", "class")).css("display", "none");
        $(callParentNew("AppConfig", "id")).css("display", "none");
    }

    if (isMobileDevice())
        $(callParentNew("menuCollapse", "id")).css("display", "block");
    if (typeof AxUserRoles != "undefined" && AxUserRoles.toLowerCase().indexOf("doctor") >= 0 && !isMobileDevice())
        $(".navbar-static-top").attr("style", "background:#f2f3f8 !important");

    if (typeof AxUserRoles != "undefined" && AxUserRoles.toLowerCase().indexOf("doctor") < 0) {
        $(".skin-blue .main-sidebar").addClass("notDoctor");
        $(".skin-blue .navbar.navbar-static-top").addClass("notDoctor");
    } else {
        $(".skin-blue .main-sidebar").addClass("doctor");
        $(".skin-blue .navbar.navbar-static-top").addClass("doctor");
    }
}

function AxCustomLinks(url) {
    if (url.indexOf('?') > -1) {
        urlinner = url.substring(url.indexOf('/aspx/') + 6, url.indexOf('?'));
    }
    else {
        urlinner = url.substr(url.indexOf('/aspx/') + 6);
    }
    var isCustom = $.inArray(urlinner, ["Getlabel.aspx", "Leixir.aspx", "PickUp.aspx", "ScanLabel.aspx", "SchedulePickup.aspx", "supportChat.aspx", "Track.aspx", "MyCases.aspx", "mycases.aspx", "MyCaseDetails.aspx", "DoctorDashBoard.aspx", "DentalleOrder.aspx", "dentalleOrder.aspx", "DentalleRx.aspx", "PackingSlip.aspx"]);
    return isCustom;
}

function AxCustomMenu({ menuJson = {} }) {

    $.each(menuJson.root.parent, function (i, data) {
        if (data.oname === "Head262") {
            $.each(menuJson.root.parent[i].child, function (j, datainner) {

                if (datainner.oname === "Head270")
                    datainner.target = "../" + mainProject + "/aspx/Getlabel.aspx";
                else if (datainner.oname === "Head260")
                    datainner.target = "tstruct.aspx?transid=scnlb";
                else if (datainner.oname === "Head271")
                    datainner.target = "../" + mainProject + "/aspx/SchedulePickup.aspx";
                else if (datainner.oname === "Head262")
                    datainner.target = "iview.aspx?ivname=trackpi";
            })

        }
        else if (data.oname === "Head284") {
            if (data.child[5].oname === "PageIvcarddtls")
                data.child[5].target = "../" + mainProject + "/aspx/carddetails.aspx";
        }
        else if (data.oname === "Head289") {
            $.each(data.child, function (i, child) {
                if (child.oname == "PageTsnorde")
                    child.target = "/easyconnect/smile?userCode=" + mainUserName;
                if (child.oname == "PageTseorde")
                    child.target = "/easyconnect/smilevalidate?userCode=" + mainUserName;
            });
        }
        else if (data.oname === "Head286") {
            $.each(data.child, function (i, child) {
                if (child.oname == "PageTscascd")
                    child.target = "../" + mainProject + "/aspx/DentalleOrder.aspx";
            });
        }
    });
    return ""
}


function AxCustomIcon(child) {

    //let iconOname = { "PageIvcasemng": "fa fa-clone", "PageTscasrg": "fa fa-pencil-square-o", "Head270": "fa fa-file", "Page260": "fa fa-barcode", "Head271": "fa fa-calendar-o", "Head262": "fa fa-bed", "PageIvcasrtngs": "fa fa-star", "PageIvmyprof": "fa fa-user" };
    //if (Object.keys(iconOname).indexOf(child.oname) > -1) {
    //    return iconOname[child.oname];
    //}
    return "";
}

//function AxOnLoadMiddleIframe(){
//    return $("#middle1").contents().find("#middle2")[0];
//}


function customMenuConfiguration() {
    if (typeof AxUserRoles != "undefined" && AxUserRoles.toLowerCase().indexOf("doctor") != -1 && !isMobileDevice()) {
        return { stagingDiv: ".mainnav-menuTop", stagingParent: ".menu-container", alignment: "horizontal" };
    } else {
        return {};
    }

}

$(document).ready(function () {
    try {
        //currentThemeColor = "blue";
        ////hide theme icon and QrCode icon and Create profile icon
        //$($("#themeIcon").closest("li")).css("display", "none");
        //if (typeof AxUserRoles != "undefined" && AxUserRoles.toLowerCase().indexOf("doctor") != -1)
        //    $(".navbar-nav").append('<li class="dropdown messages-menu axpSettings" title="My Profile"><a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user" style="position: relative;top: 0px;font-size:21px;" onclick="LoadIframe(\'ivtstload.aspx?tstname=dprof&pusername=' + mainUserName + '&hltype=load&torecid=false\')"></i></a></li>');
        //$("#qrCodeBtnWrapper").css("display", "none");
        //AddMessageIcon();
        //AddUserManual();
        //  setTimeout(function(){$("div.menu div.slimScrollDiv ul.list li:first-child").hide(); }, 1000);
        setNotificationCount();
        setTimeout(function () { $("#newProfile a").attr("onclick", "LoadIframe('ivtstload.aspx?tstname=dprof&pusername=" + mainUserName + "&hltype=load&torecid=false')"); }, 500);

    } catch (e) {

    }
});
