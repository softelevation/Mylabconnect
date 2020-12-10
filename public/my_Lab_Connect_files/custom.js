var custRowDele = {};
custRowDele["2"] = "false";
custRowDele["3"] = "false";
function AxAfterTstLoad() {
    CustomDataType();
    //if (transid != "casrg")
    //    $("#heightframe").attr("style", "height:auto !important");
    /*if (transid == "casrg") {

        if (isMobileDevice()) {
            $("#actbtn_shipcal").hide();
            //hiding + button in mobile view
            $(".grdButtons .btnMobile").hide();
        }
        $("div#bootstrapModal input.form-control, div#bootstrapModal select.form-control, div#wBdr input.form-control, div#wBdr select.form-control").attr("style", "height:36px!important;");
        $(".grid-stack:not(.staticRunMode)>.grid-stack-item").css("width", "100%");
        $("#gridHd4 tbody tr").addClass("col-sm-4 col-lg-4 col-md-4 col-xs-4");
        $("#gridHd4").attr("style", "max-width: 100%;min-width: 100%;");
        $("#gridHd4 tbody tr").each(function () {
            var thrID = $(this).attr("id");
            $("#" + thrID + " td").removeAttr("style").attr("style", "display: none;");
            $("#" + thrID + " td [id^=qty]").attr("style", "display: none;");
            $("#" + thrID + " td [id^=enclosurename]").attr("style", "display: none;");
            $("#" + thrID + " td [id^=qty]").parent().attr("style", "display: block;");
            $("#" + thrID + " td [id^=enclosurename]").parent().attr("style", "display: block;");
            $("#" + thrID + " td [id^=enclosurename]").after("<label for=\"name\">" + $("#" + thrID + " td [id^=enclosurename]").val() + "</label>");
            $("#" + thrID + " td [id^=qty]").after("<input id=\"" + $("#" + thrID + " td [id^=qty]").attr("id") + "\" name=\"" + $("#" + thrID + " td [id^=qty]").attr("id") + "\" value=\"\" style=\"height:36px!important;\" type=\"text\" class=\"tem Family form-control number\">");
        });
        $(".autoclear").attr("style", "padding-top: 10px!important;");
        $(".edit").attr("style", "padding-top: 10px!important;")
        var arrEditDiv = new Array();
        arrEditDiv.push("#gridHd4");
        AssignJQueryEvents(arrEditDiv);
        $("#gridAddBtn4").removeAttr("onclick");
        $("#gridAddBtn4").after("<button id=\"gridAddBtnMinus\" style=\"font-size:17px;margin-top:-20px;display:none;\" class=\"normalbtntiny btn handCur fillcls gridBtns fa fa-minus\" type=\"button\" title=\"Close\"></button>");
        $("#gridHd4").css("display", "none");
    }*/
    if (transid == "casrg") {
        try {
            $("table[id^='gridHd']").each(function () {
                var id = $(this)[0].id;
                $(this).parent().prepend("<button onclick=\"javascript:clearDataGrid('" + id.charAt(id.length - 1) + "')\" type=\"button\" title=\"Add Row\">Clear Data</button>");
                $(this).parent().prepend("<button onclick=\"javascript:editTheRow(''," + id.charAt(id.length - 1) + ",'',event)\" type=\"button\" title=\"Add Row\">Add Row</button>");
            });
            ////ManojMadeChmages
            $("[data-target='DivFrame1']").removeClass("complete");
            $("[data-target='DivFrame2']").removeClass("complete");
            $("[data-target='DivFrame3']").removeClass("complete");
            $("[data-target='DivFrame4']").removeClass("complete");
            //Checking nodes
            //if (recordid > 0) {
            //    setTimeout(function myfunction() {

            //        if ($("#sp2R001F2").not(".dirty").length == 0) {
            //            $("[data-target='DivFrame2']").removeClass("complete").addClass("in-progress");
            //        }
            //        if ($("#sp3R001F3").not(".dirty").length == 0) {
            //            $("[data-target='DivFrame3']").removeClass("complete").addClass("in-progress");
            //        }
            //        if ($("#sp4R001F4").not(".dirty").length == 0) {
            //            $("[data-target='DivFrame4']").removeClass("complete").addClass("in-progress");
            //        }

            //    }, 100);
            //}
        } catch (e) {

        }

    }
    else if ((transid == "prerx") || (transid == "csprc")) {
        if (transid == "csprc") {
            $("#design").hide();
        }
        var termhtmlpage = $("#termpage000F1").val();
        $('label[for="termscond000F3"]').html($('label[for="termscond000F3"]').html().replace("termsandcondtion.html", termhtmlpage));

    }
    else if (transid == "lbusr") {
        $("#pusername000F1").prop("autocomplete", "off");
        //$("#pusername000F1").val("");
        $("#pwd000F1").prop("autocomplete", "off");
        //$("#pwd000F1").val("");
    }
    else if (transid == "spreq") {
        $("#fillgrid2").parent().hide();
    }
    else if (transid == "norde") {
        $("#del-newsmile000F1").parent().insertAfter("#newsmile000F1");
    }
    else if (transid == "spprt") {
        //ManojMadeChanges
        //$("#new").attr("onclick","javascript:parent.LoadIframe('tstruct.aspx?transid=spprt')");
        //try {
        //    var qsKey = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')[1].split("=")[0].replace(/%20/g, " ");
        //    var qsVal = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')[1].split("=")[1].replace(/%20/g, " ");
        //    if (qsKey.length > 0 && qsKey == "casenodisplay")
        //        $("#casenodisplay000F1").val(window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')[1].split("=")[1].replace(/%20/g, " ")).blur();
        //} catch (e) {
        //}
    }
    else if (transid == "nscal") {
        $(".gridstackCalc").remove();
        $("font").css({ "font-size": "12px", "font-weight": "normal" });
        $("#esttdate000F3").css({ "height": "47px!important", "font-weight": "bold", "font-size": "21px" });
        //ManojMadeChanges
        $("#searchBar").remove();
    }
}

function CustomDataType(dcNo, newRowNo) {
    FCustDatatype.map(function (val, ind) {
        if (val == "fd_teethpick") {
            var stsVal = "0";
            var custFldName = FNames[ind];
            if (newRowNo == undefined) {
                var dcNos = GetDcNo(custFldName);
                var custFldId = custFldName + "000F" + dcNos;
                stsVal = $("#" + custFldId).val();
                stsVal = "0";
                var isgridTooth = false;
                $("#" + custFldId).parent().append("<div><span title=\"Choose Teeth\" class=\"teethBtn\" onclick='javascript:PickTeethPopup(" + custFldId + "," + isgridTooth + "," + stsVal + ");'><img style='border-left: 1px solid #ddd' src='../../images/teethicon.png' alt='teeth' border='0' height='20px' /></span></div>");
            }
            else if (IsGridField(custFldName)) {
                var custFldId = custFldName + newRowNo + "F" + dcNo;
                var cssProp = "";
                if (axInlineGridEdit) {
                    cssProp = "position:absolute;right:2px;width:auto!important;font-size:20px;font-weight:600;";
                }
                else {
                    cssProp = "position:absolute;width:auto!important;bottom:1px;right:10px;font-size:20px;font-weight:600;bottom:13px!important;";
                    $("#bootstrapModalData .teeth_btn").remove();
                }
                var isgridTooth = true;
                stsVal = $("#" + custFldId).val();
                stsVal = "0";
                var tdElement = "";
                if (axInlineGridEdit) {
                    tdElement = $("#" + custFldId).closest("td").find(".edit-mode-content");
                    tdElement.css("position", "relative");
                }
                else
                    tdElement = $("#" + custFldId).closest(".grid-stack-item-content");
                tdElement.append("<div><span title=\"Choose Teeth\" class=\"teeth_btn\" style=" + cssProp + " onclick='javascript:PickTeethPopup(" + custFldId + "," + isgridTooth + "," + stsVal + ");'><img style='border-left: 1px solid #ddd' src='../../images/teethicon.png' alt='teeth' border='0' height='20px' /></span></div>");
            }
        }
    });
}

function AxAfterInlineAddRowUpdate() {
    $(".customSetupTableMN .teeth_btn").remove();
}

function AxAfterInlineEditRow(dcNo, newRowNo) {
    CustomDataType(dcNo, newRowNo);
    //CustomDateType(dcNo, newRowNo)
}

function AxAfterPopupAddRow(dcNo, newRowNo) {
    /*if (transid == "casrg") {
        //var rCnt = GetDcRowCount(dcNo);
        //var i = parseInt(rCnt, 10);
        //var strRowNo = GetRowNoHelper(i);//$j("#wrapperForEditFields" + dcNo+" .editWrapTr").attr("id")
        var TrId = $j("#wrapperForEditFields" + dcNo + " .editWrapTr").attr("id").split("F")[0];
        var strRowNo = TrId.substring(TrId.length - 3, TrId.length);
        if (dcNo == 2) {
            $("#colScroll" + dcNo + " .addbutton").remove();
            $("#gridHd" + dcNo).css("display", "none");
            var btnRemove = "";
            if (strRowNo != "001")
                btnRemove = "<div class=\"form-group grRmovebutton\"><button id=\"gridRemoveBtnAdd" + dcNo + strRowNo + "\" onclick=\"DeleteRow('" + dcNo + "','" + strRowNo + "F" + dcNo + "','this');\" class=\"btn handCur fillcls gridBtns\" style=\"float: right;background: #47b9db;color: white!important;cursor: pointer;margin-bottom: 0;\">Remove</button></div>";
            var gridHtml = "<div class=\"clearfix\"></div><div id=\"gridrowWrap" + dcNo + "-" + strRowNo + "\"><div class=\"row\" id=\"wrapperForEditFields" + dcNo + "\" style=\"margin-top:0px !important;padding: 0px !important;box-shadow:none;;position: relative;;height: 100%;;border-width: 0px;;border-style: solid;;border-color: rgb(236; 235; 235);;border-image: initial;;padding: 8px 0px;;border-radius: 3px;\">" + $j("#wrapperForEditFields" + dcNo).html() + "</div>" + btnRemove + "</div>";
            $("#bootstrapModalData").remove();
            $("#colScroll" + dcNo + " [id^=gridrowWrap" + dcNo + "-]").children("#wrapperForEditFields" + dcNo + "Added").attr('id', "wrapperForEditFields" + dcNo);
            $("#colScroll" + dcNo).append(gridHtml + "<div class=\"form-group addbutton\"><button id=\"gridAddBtnAdd2\" style=\"float: right;background: #47b9db;color: white;cursor: pointer;margin-bottom: 0;\" onclick=\"editTheRow('',2," + strRowNo + ",event)\" class=\"normalbtntiny btn handCur fillcls gridBtns\" type=\"button\" title=\"Add\">Add More Restorations</button></div>");
            if ($(".grdButtons #gridAddBtnMinus" + dcNo).length == 0) {
                $("#gridAddBtn" + dcNo).removeAttr("onclick").css("display", "none");
                $("#gridAddBtn" + dcNo).after("<button id=\"gridAddBtnMinus" + dcNo + "\" style=\"font-size:17px;margin-top:-20px;\" class=\"normalbtntiny btn handCur fillcls gridBtns fa fa-minus\" type=\"button\" title=\"Close\"></button>");
            }
        }
        if (dcNo == 3) {
            $("#colScroll" + dcNo + " .addbutton").remove();
            $("#gridHd" + dcNo).css("display", "none");
            var btnRemove = "";
            if (strRowNo != "001")
                btnRemove = "<div class=\"form-group grRmovebutton\"><button id=\"gridRemoveBtnAdd" + dcNo + strRowNo + "\" onclick=\"DeleteRow('" + dcNo + "','" + strRowNo + "F" + dcNo + "','this');\" class=\"btn handCur fillcls gridBtns\" style=\"float: right;background: #47b9db;color: white!important;cursor: pointer;margin-bottom: 0;\">Remove</button></div>";
            var gridHtml = "<div class=\"clearfix\"></div><div id=\"gridrowWrap" + dcNo + "-" + strRowNo + "\"><div class=\"row\"  id=\"wrapperForEditFields" + dcNo + "\" style=\"margin-top:0px !important;padding: 0px !important;box-shadow:none;;position: relative;;height: 100%;;border-width: 0px;;border-style: solid;;border-color: rgb(236; 235; 235);;border-image: initial;;padding: 8px 0px;;border-radius: 3px;\">" + $j("#wrapperForEditFields" + dcNo).html() + "</div>" + btnRemove + "</div>";
            $("#bootstrapModalData").remove();
            $("#colScroll" + dcNo + " [id^=gridrowWrap" + dcNo + "-]").children("#wrapperForEditFields" + dcNo + "Added").attr('id', "wrapperForEditFields" + dcNo);
            $("#colScroll" + dcNo).append(gridHtml + "<div class=\"form-group addbutton\"><button id=\"gridAddBtnAdd3\" style=\"float: right;background: #47b9db;color: white;cursor: pointer;margin-bottom: 0;\" onclick=\"editTheRow('',3," + strRowNo + ",event)\" class=\"normalbtntiny btn handCur fillcls gridBtns\" type=\"button\" title=\"Add\">Add More Documents</button></div>");
            if ($(".grdButtons #gridAddBtnMinus" + dcNo).length == 0) {
                $("#gridAddBtn" + dcNo).removeAttr("onclick").css("display", "none");
                $("#gridAddBtn" + dcNo).after("<button id=\"gridAddBtnMinus" + dcNo + "\" style=\"font-size:17px;margin-top:-20px;\" class=\"normalbtntiny btn handCur fillcls gridBtns fa fa-minus\" type=\"button\" title=\"Close\"></button>");
            }
            $("#grdAtt_img_" + strRowNo + "F3").attr("style", "float:right;");
        }
        $(".autoclear").attr("style", "padding-top: 10px!important;");
        $(".edit").attr("style", "padding-top: 10px!important;");
        SetGridBtnAccess();
        var arrEditDiv = new Array();
        arrEditDiv.push("#gridrowWrap" + dcNo + "-" + strRowNo);
        AssignJQueryEvents(arrEditDiv);
        $(".editLayoutFooter").css("display", "none");
        $("div#bootstrapModal input.form-control, div#bootstrapModal select.form-control, div#wBdr input.form-control, div#wBdr select.form-control").attr("style", "height:36px!important;");
        CustomDataType(dcNo, strRowNo);
        CustomDateType(dcNo, strRowNo)
    }
    if (transid != "casrg") {
        CustomDataType(dcNo, newRowNo);
        CustomDateType(dcNo, newRowNo)
    }
	*/
}

function AxAfterGridRowDelete(dcNo, delRowNo, type) {
    $("#colScroll" + dcNo + " #gridrowWrap" + dcNo + "-" + delRowNo).remove();
    //if (typeof type != "undefined") {
    var rdId = $("#colScroll" + dcNo + " [id^=gridrowWrap" + dcNo + "]").last().attr("id");
    $("#gridAddBtnAdd" + dcNo).removeAttr("onclick").attr("onclick", "editTheRow(''," + dcNo + "," + rdId.split("-")[1] + ",event)");
    custRowDele[dcNo] = "true";
    //}
    return;
}

$(document).on('click', '#gridAddBtn2', function () {
    /*if (transid == "casrg") {
        $("#gridAddBtn2").css({ "font-size": "17px", "margin-top": "-20px", "display": "none" });
        $("#colScroll2").css("display", "block");
        $("#gridAddBtnMinus2").css({ "font-size": "17px", "margin-top": "-20px", "display": "block" });
    }*/
});
$(document).on('click', '#gridAddBtnMinus2', function () {
    // if (transid == "casrg") {
    // $("#gridAddBtn2").css({ "font-size": "17px", "margin-top": "-20px", "display": "block" });
    // $("#colScroll2").css("display", "none");
    // $("#gridAddBtnMinus2").css({ "font-size": "17px", "margin-top": "-20px", "display": "none" });
    // }
});

$(document).on('click', '#gridAddBtn3', function () {
    // if (transid == "casrg") {
    // $("#gridAddBtn3").css({ "font-size": "17px", "margin-top": "-20px", "display": "none" });
    // $("#colScroll3").css("display", "block");
    // $("#gridAddBtnMinus3").css({ "font-size": "17px", "margin-top": "-20px", "display": "block" });
    // }
});
$(document).on('click', '#gridAddBtnMinus3', function () {
    // if (transid == "casrg") {
    // $("#gridAddBtn3").css({ "font-size": "17px", "margin-top": "-20px", "display": "block" });
    // $("#colScroll3").css("display", "none");
    // $("#gridAddBtnMinus3").css({ "font-size": "17px", "margin-top": "-20px", "display": "none" });
    // }
});

function AxAfterBlur(fldObj) {
    // if (transid == "casrg") {
    // if (fldObj[0].id.startsWith("grdAtt_img_")) {
    // fldObj = $("#" + fldObj[0].id).parent().parent().find("input");
    // }
    // var fldcutId = fldObj.attr("id");
    // var dcNo = GetFieldsDcNo(fldcutId);
    // var fieldName = GetFieldsName(fldcutId);
    // divEditClass = "";
    // if (IsGridField(fieldName)) {
    // var rowNo = GetFieldsRowNo(fldcutId);
    // var fldDbRowNo = GetDbRowNo(rowNo, dcNo);
    // var gridRowCust = "sp" + dcNo + "R" + rowNo + "F" + dcNo;// sp2R001F2
    // var trIndex = 0;
    // $("#gridrowWrap3-" + rowNo + " .attach-files").show();
    // $("#gridrowWrap3-" + rowNo + " .attachment-count").hide();
    // $("#gridHd" + dcNo + " tbody tr").each(function () {
    // if ($(this).attr('id') == gridRowCust)
    // trIndex = $(this).index();
    // });
    // if ($("#gridHd" + dcNo + " tbody tr").length > 0) {
    // divEditClass = "gridrowWrap" + dcNo + "-" + rowNo;
    // var isUpdate = false;
    // $("#gridHd" + dcNo + " tbody tr").each(function () {
    // if ($(this).attr('id') == gridRowCust) {
    // isUpdate = true;
    // addTheValuesToGrid(dcNo, $(this), trIndex);
    // }
    // });
    // if (isUpdate == false)
    // addTheValuesToGrid(dcNo, $(this));
    // $("#gridHd" + dcNo + ">tbody>tr>td>textarea").removeClass("fldAutocomplete");
    // }
    // else {
    // divEditClass = "gridrowWrap" + dcNo + "-" + rowNo;
    // addTheValuesToGrid(dcNo, $(this));
    // $("#gridHd" + dcNo + ">tbody>tr>td>textarea").removeClass("fldAutocomplete")
    // }

    // var arrEditDiv = new Array();
    // arrEditDiv.push("#wrapperForEditFields" + dcNo);
    // AssignJQueryEvents(arrEditDiv);
    // createAutoComplete("#wrapperForEditFields" + dcNo + " .fldAutocomplete");
    // }
    // }
}

var isOK = false;
function PickTeethPopup(custFldId, isgridTooth, stsVal) {
    var stsTeeth = "";
    $.get("../" + proj + "/tooth.html?v=1", function (data) {
        stsTeeth = data;
        // Jai Added this function for Mobile issue
        if (!isMobileDevice()) {
            stsTeeth = "<div class=\"toothHeader\">[ Ctrl + Click of any upper/lower tooth will select all the teeth of upper/lower jaw. ]</div>" + stsTeeth;
        }
        // Jai Added Above function for Mobile issue
    }).done(function () {
        //ManojMadeChanges
        var teethSelected = $(custFldId).val();
        displayBootstrapModalDialog("Select Teeth", "md", "400px", false, stsTeeth, false, function () {
            //ManojMadeChanges
            //var custFldName = FNames[52];
            var custFldName = 'notation';
            var dcNo = GetDcNo(custFldName);
            var RowsNos = GetLastDbRowNo(dcNo);
            if (IsDcGrid(dcNo)) {
                for (var i = 0; i < RowsNos; i++) {
                    var eachRowcustFldId = custFldName + GetClientRowNo(i + 1, dcNo) + "F" + dcNo;
                    var custValue = $("#" + eachRowcustFldId).val();
                    var custuniqueid = $(custFldId).uniqueId();
                    var eachRowcustuniqueid = $("#" + eachRowcustFldId).uniqueId();
                    if (custuniqueid[0] == eachRowcustuniqueid[0]) {
                        SelectedTeeth(custFldId);
                    } else {
                        SelectedTeeth("", custValue, "#D3D3D3");
                    }
                }
            }
            //ManojMAdeChanges

            //ManojMAdeChanges(commented actual code)
            //SelectedTeeth(custFldId);

            //ManojMAdeChanges
            $("#toothWrapper .jaws").click(function (e) {
                var setVal = $(this).attr("data-tooth");
                if (e.ctrlKey) {
                    var teethSelectedArray = teethSelected.split(",")
                    var index = teethSelectedArray.indexOf(setVal);
                    if (index != -1) {
                        teethSelectedArray.splice(index, 1);
                        teethSelected = teethSelectedArray.join(",");
                        //setVal = "";
                    }
                    var strTeeth = 0, endTeeth = 0;
                    if (($("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("upper"))) {
                        $(".teethSelected").each(function () {
                            if ($(this).hasClass("upper")) {
                                var sltVal = $(this).attr("data-tooth");
                                var teethSelectedArray = teethSelected.split(",")
                                var index = teethSelectedArray.indexOf(sltVal);
                                if (index != -1) {
                                    teethSelectedArray.splice(index, 1);
                                    teethSelected = teethSelectedArray.join(",")
                                }
                            }
                        });
                        if (!$("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("teethSelected")) {
                            $(".upper").css('fill', 'none').removeClass("teethSelected");
                        }
                        else {
                            strTeeth = 1;
                            endTeeth = 16;
                            $(".upper").css('fill', '#01b9f4').addClass("teethSelected");
                        }
                    }
                    else if (($("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("lower"))) {
                        $(".teethSelected").each(function () {
                            if ($(this).hasClass("lower")) {
                                var sltVal = $(this).attr("data-tooth");
                                var teethSelectedArray = teethSelected.split(",")
                                var index = teethSelectedArray.indexOf(sltVal);
                                if (index != -1) {
                                    teethSelectedArray.splice(index, 1);
                                    teethSelected = teethSelectedArray.join(",")
                                }
                            }
                        });
                        if (!$("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("teethSelected")) {
                            $(".lower").css('fill', 'none').removeClass("teethSelected");
                        }
                        else {
                            strTeeth = 17;
                            endTeeth = 32;
                            $(".lower").css('fill', '#01b9f4').addClass("teethSelected");
                        }
                    }
                    if (strTeeth != 0) {
                        for (var i = strTeeth; i <= endTeeth; i++) {
                            if (teethSelected != "")
                                setVal = teethSelected + "," + i;
                            else
                                setVal = i;
                            teethSelected = setVal;
                        }
                    }
                }
                else {
                    //setVal = $(this).attr("data-tooth");
                    if (($("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("teethSelected"))) {
                        if (teethSelected != "")
                            setVal = teethSelected + "," + setVal;
                    }
                    else {
                        var teethSelectedArray = teethSelected.split(",")
                        var index = teethSelectedArray.indexOf(setVal);
                        teethSelectedArray.splice(index, 1);
                        setVal = teethSelectedArray.join(",")
                    }
                    teethSelected = setVal;
                }
            });
        }, function () {
            if (teethSelected != "")
                teethSelected = teethSelected.split(",").sort(function (a, b) { return a - b });
            if (isgridTooth == false) {
                $(custFldId).focus();
                $(custFldId).val(teethSelected);
                MainBlur($j(custFldId));
            }
            else {
                if (isOK)
                    $(custFldId).val(teethSelected);
                isGrdEditDirty = true;
                if (axInlineGridEdit) {
                    $(custFldId).next().focus();
                    MainBlur($j(custFldId));
                }
                else
                    MainBlur($j(custFldId));
                isOK = false;
            }
        });
    }).fail(function (jqXHR, textStatus, errorThrown) {
        showAlertDialog("error", "HTML file not found!");
    });
}
//ManojMadeChanges
function SelectedTeeth(custFldId, custvalue, Colour) {
    if (typeof Colour === 'undefined' && typeof custvalue === 'undefined') {
        var teethSelected = $(custFldId).val();
        var teethSelectedArray = teethSelected.split(",");
        teethSelectedArray.forEach(function (teethSelectedvalue, index) {
            $(".tooth-" + teethSelectedvalue + "-parent").css('fill', '#01b9f4').addClass("teethSelected");
        });
    } else {
        var teethSelectedArray = custvalue.split(",");
        teethSelectedArray.forEach(function (teethSelectedvalue, index) {
            if (!$(".tooth-" + teethSelectedvalue + "-parent").hasClass("teethSelected")) {
                $(".tooth-" + teethSelectedvalue + "-parent").css('fill', Colour).addClass("AlreadyteethSelected");
            }
        });
    }
}



//ManojMadeChnages(commented actual code)
//var isOK = false;
//function PickTeethPopup(custFldId, isgridTooth, stsVal) {

//    var stsTeeth = "";
//    $.get("../" + proj + "/tooth.html", function (data) {
//        stsTeeth = data;
//        // Jai Added this function for Mobile issue
//        if (!isMobileDevice()) {
//            stsTeeth = "<div class=\"toothHeader\">[ Ctrl + Click of any upper/lower tooth will select all the teeth of upper/lower jaw. ]</div>" + stsTeeth;
//        }
//        // Jai Added Above function for Mobile issue
//    }).done(function () {
//        var teethSelected = $(custFldId).val();
//        displayBootstrapModalDialog("Select Teeth", "md", "400px", false, stsTeeth, false, function () {
//            SelectedTeeth(custFldId);
//            $("#toothWrapper .jaws").click(function (e) {
//                var setVal = $(this).attr("data-tooth");
//                if (e.ctrlKey) {
//                    var teethSelectedArray = teethSelected.split(",")
//                    var index = teethSelectedArray.indexOf(setVal);
//                    if (index != -1) {
//                        teethSelectedArray.splice(index, 1);
//                        teethSelected = teethSelectedArray.join(",");
//                        //setVal = "";
//                    }
//                    var strTeeth = 0, endTeeth = 0;
//                    if (($("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("upper"))) {
//                        $(".teethSelected").each(function () {
//                            if ($(this).hasClass("upper")) {
//                                var sltVal = $(this).attr("data-tooth");
//                                var teethSelectedArray = teethSelected.split(",")
//                                var index = teethSelectedArray.indexOf(sltVal);
//                                if (index != -1) {
//                                    teethSelectedArray.splice(index, 1);
//                                    teethSelected = teethSelectedArray.join(",")
//                                }
//                            }
//                        });
//                        if (!$("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("teethSelected")) {
//                            $(".upper").css('fill', 'none').removeClass("teethSelected");
//                        }
//                        else {
//                            strTeeth = 1;
//                            endTeeth = 16;
//                            $(".upper").css('fill', '#01b9f4').addClass("teethSelected");
//                        }
//                    }
//                    else if (($("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("lower"))) {
//                        $(".teethSelected").each(function () {
//                            if ($(this).hasClass("lower")) {
//                                var sltVal = $(this).attr("data-tooth");
//                                var teethSelectedArray = teethSelected.split(",")
//                                var index = teethSelectedArray.indexOf(sltVal);
//                                if (index != -1) {
//                                    teethSelectedArray.splice(index, 1);
//                                    teethSelected = teethSelectedArray.join(",")
//                                }
//                            }
//                        });
//                        if (!$("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("teethSelected")) {
//                            $(".lower").css('fill', 'none').removeClass("teethSelected");
//                        }
//                        else {
//                            strTeeth = 17;
//                            endTeeth = 32;
//                            $(".lower").css('fill', '#01b9f4').addClass("teethSelected");
//                        }
//                    }
//                    if (strTeeth != 0) {
//                        for (var i = strTeeth; i <= endTeeth; i++) {
//                            if (teethSelected != "")
//                                setVal = teethSelected + "," + i;
//                            else
//                                setVal = i;
//                            teethSelected = setVal;
//                        }
//                    }
//                }
//                else {
//                    //setVal = $(this).attr("data-tooth");
//                    if (($("." + $(this).attr("class").split(" ")[0] + "-parent").hasClass("teethSelected"))) {
//                        if (teethSelected != "")
//                            setVal = teethSelected + "," + setVal;
//                    }
//                    else {
//                        var teethSelectedArray = teethSelected.split(",")
//                        var index = teethSelectedArray.indexOf(setVal);
//                        teethSelectedArray.splice(index, 1);
//                        setVal = teethSelectedArray.join(",")
//                    }
//                    teethSelected = setVal;
//                }
//            });
//        }, function () {
//            if (teethSelected != "")
//                teethSelected = teethSelected.split(",").sort(function (a, b) { return a - b });
//            if (isgridTooth == false) {
//                $(custFldId).focus();
//                $(custFldId).val(teethSelected);
//                MainBlur($j(custFldId));
//            }
//            else {
//                if (isOK)
//                    $(custFldId).val(teethSelected);
//                isGrdEditDirty = true;
//                if (axInlineGridEdit) {
//                    $(custFldId).next().focus();
//                    MainBlur($j(custFldId));
//                }
//                else
//                    MainBlur($j(custFldId));
//                isOK = false;
//            }
//        });
//    }).fail(function (jqXHR, textStatus, errorThrown) {
//        showAlertDialog("error", "HTML file not found!");
//    });
//}

//function SelectedTeeth(custFldId) {
//    var teethSelected = $(custFldId).val();
//    var teethSelectedArray = teethSelected.split(",");
//    teethSelectedArray.forEach(function (teethSelectedvalue, index) {
//        $(".tooth-" + teethSelectedvalue + "-parent").css('fill', '#01b9f4').addClass("teethSelected");
//    });
//}

function AxBeforeTstLoad() {
    CustomCss();
    CustomDateType();
    if ((transid == "prerx") || (transid == "csprc")) {
        $("#heightframe .dcTitle").hide().nextAll("hr.hrline").hide();
        $("#heightframe .grdButtons").hide()

        //Bringing toolbar buttons to bottom  of the screen
        try {
            $("#divDc3").parent().append($("#searchBar"));
            $("#searchBar").css({ "text-align": "center" });
        } catch (e) {
            console.log('Error while modifying the toolbar buttons');
        }

    }
}

function AxBeforeEditTheRow(dcNo, rowNo) {
    //if (!isMobileDevice() && transid == "casrg") {
    //    if (dcNo == "4")
    //        axInlineGridEdit = true;
    //    else {
    //        axInlineGridEdit = false;
    //        AxEditActiveDcNo = "";
    //        if (rowNo != "") {
    //            var wIdgrid = $("#colScroll" + dcNo + " [id^=gridrowWrap" + dcNo + "-]").children("#wrapperForEditFields" + dcNo).attr('id');
    //            $("#colScroll" + dcNo + " [id^=gridrowWrap" + dcNo + "-]").children("#wrapperForEditFields" + dcNo).attr('id', wIdgrid + "Added");
    //            $("#divDc" + dcNo + " .grid-icons").append(gridDivHtml[dcNo]);
    //            var i = parseInt(rowNo, 10);
    //            var strRowNo = GetRowNoHelper(i);
    //            changeEditLayoutIds(strRowNo, dcNo);
    //            if (custRowDele[dcNo] == "false")
    //                AddRow(dcNo, "AddRow");
    //            else
    //                custRowDele[dcNo] = "false";
    //        }
    //    }
    //}
}

function CustomCss() {
    // if (transid == "casrg") {
    // if (!isMobileDevice()) {
    // axInlineGridEdit = false;
    // $("#wBdr [id^=DivFrame]").css("width", "80%");
    // $(".dcTitle [id^=dcButspan]").css("display", "none");
    // $(".dcTitle [id^=dcCaption]").css({ "vertical-align": "top", "margin-left": "0px" });
    // }
    // else {
    // $("#wBdr [id^=DivFrame]").css("width", "100%");
    // }
    // $(".grdButtons [id^=clearThisDC]").css({ "cursor": "pointer", "list-style": "none", "display": "none" });
    // $(".grdButtons").css({ "float": "right", "top": "0px;", "float": "right", "top": "0px", "margin-bottom": "0px", "margin-top": "-20px" });
    // $("#containerDc .grid-icons").css("background", "none");
    // $(".grdButtons [id^=fillgrid]").css("display", "none");
    // $(".customSetupTableMN thead tr").css("display", "none");
    // $(".customSetupTableMN").css("display", "none");
    // }
}

$(document).on('click', '#gridAddBtn4', function () {
    //if (transid == "casrg") {
    //     ShowDimmer(false);
    //    $("#gridAddBtn4").css({ "font-size": "17px", "margin-top": "-20px", "display": "none" });
    //    $("#gridHd4").css("display", "block");
    //    $("#gridAddBtnMinus").css({ "font-size": "17px", "margin-top": "-20px", "display": "block" });
    //}
});
$(document).on('click', '#gridAddBtnMinus', function () {
    //if (transid == "casrg") {
    //    $("#gridAddBtn4").css({ "font-size": "17px", "margin-top": "-20px", "display": "block" });
    //    $("#gridHd4").css("display", "none");
    //    $("#gridAddBtnMinus").css({ "font-size": "17px", "margin-top": "-20px", "display": "none" });
    //}
});

function AxBeforeBlur(custFldName) {
    CustomDateType(custFldName, undefined);
}
function AxBeforeBlurEnclos(custFldName) {
    var fldcutId = custFldName.attr("id");
    var dcNo = GetFieldsDcNo(fldcutId);
    var fieldName = GetFieldsName(fldcutId);
    if (dcNo == "4") {
        if (!isMobileDevice()) {
            var rowNo = GetFieldsRowNo(fldcutId);
            var fldDbRowNo = GetDbRowNo(rowNo, dcNo);
            UpdateFieldArray(fldcutId, fldDbRowNo, $(custFldName).val(), "parent");
        }
    }
}

function CustomDateType(custdcNo, newRowNo) {
    FCustDatatype.map(function (val, ind) {
        if (val == "fd_pastdate") {
            var custFldName = FNames[ind];
            var dtelementdiv = "";
            if (newRowNo == undefined) {
                var dcNos = GetDcNo(custFldName);
                var custFldId = custFldName + "000F" + dcNos;
                $("#" + custFldId).addClass(" date ");
                dtelementdiv = $("#" + custFldId).closest("div");
                var dtelement = $("#" + custFldId);
                dtelement.wrap("<span class=\"input-group\"></span>");
                dtelement.parent().append("<span class=\"input-group-addon spandate \" style=\"color:black\"><i class=\"glyphicon glyphicon-calendar icon-basic-calendar\" title=\"Date Field\"></i></span>");
            }
            else if (IsGridField(custFldName)) {
                var custFldId = custFldName + newRowNo + "F" + custdcNo;
                $("#" + custFldId).addClass(" date ");
                dtelementdiv = $("#" + custFldId).closest("div");
                var dtelement = $("#" + custFldId);
                dtelement.wrap("<span class=\"input-group\"></span>");
                dtelement.parent().append("<span class=\"input-group-addon spandate \" style=\"color:black\"><i class=\"glyphicon glyphicon-calendar icon-basic-calendar\" title=\"Date Field\"></i></span>");
            }
            var glType = eval(callParent('gllangType'));
            var dtpkrRTL = false;
            if (glType == "ar")
                dtpkrRTL = true;
            else
                dtpkrRTL = false;
            $j(dtelementdiv).find(".date").datepicker({
                isRTL: dtpkrRTL,
                maxDate: 0,
                changeMonth: true,
                changeYear: true
            });
        }
        else if (val == "fd_futuredate") {
            var custFldName = FNames[ind];
            if (newRowNo == undefined) {
                var dcNos = GetDcNo(custFldName);
                var custFldId = custFldName + "000F" + dcNos;
                $("#" + custFldId).addClass(" date ");
                var dtelementdiv = $("#" + custFldId).closest("div");
                var dtelement = $("#" + custFldId);
                dtelement.wrap("<span class=\"input-group\"></span>");
                dtelement.parent().append("<span class=\"input-group-addon spandate \" style=\"color:black\"><i class=\"glyphicon glyphicon-calendar icon-basic-calendar\" title=\"Date Field\"></i></span>");
            }
            else if (IsGridField(custFldName)) {
                var custFldId = custFldName + newRowNo + "F" + custdcNo;
                $("#" + custFldId).addClass(" date ");
                var dtelementdiv = $("#" + custFldId).closest("div");
                var dtelement = $("#" + custFldId);
                dtelement.wrap("<span class=\"input-group\"></span>");
                dtelement.parent().append("<span class=\"input-group-addon spandate \" style=\"color:black\"><i class=\"glyphicon glyphicon-calendar icon-basic-calendar\" title=\"Date Field\"></i></span>");
            }
            var glType = eval(callParent('gllangType'));
            var dtpkrRTL = false;
            if (glType == "ar")
                dtpkrRTL = true;
            else
                dtpkrRTL = false;
            $j(dtelementdiv).find(".date").datepicker({
                isRTL: dtpkrRTL,
                minDate: 0,
                changeMonth: true,
                changeYear: true
            });
        }
        else if (val == "uppercase") {
            var custFldid = custdcNo.attr("id");
            var custFldidName = GetFieldsName(custFldid);
            var custFldName = FNames[ind];
            if (custFldName == custFldidName) {
                var custFldVal = $("#" + custFldid).val();
                $("#" + custFldid).val(custFldVal.toUpperCase());
            }
        }
    });
}


function AxAfterCallAction() {
    //pay safe payment by mahesh 24/10/2019
    var trcid = $j("#recordid000F0").val();

    if (trcid > "0") {
        if ((transid == "crcre" || transid == "lcrcr" || transid == "advpy") && AxActiveAction == "axp_payment") {
            try {
                var idval = transid == "advpy" ? $("#totalsettled000F1").val() : $("#totalsettled000F3").val();
                var docname = $("#subledgername000F1").val();
                if ((idval == "") || (idval == "0.00")) {
                    showAlertDialog('warning', 'Please Select Invoice');
                    return false;
                }
                else {
                    window.parent.globalChange = false;
                    var isLab;
                    if (transid == "crcre") isLab = "F";
                    else if (transid == "lcrcr") isLab = "T";
                    else if (transid == "advpy") isLab = "T";
                    var uniqueid = typeof ($("#ccdetailsid000F1").val()) === "undefined" ? "" : $("#ccdetailsid000F1").val();
                    var src = "../mylabconnect/aspx/PaymentRequest.aspx?id=" + idval + "&trecid=" + trcid + "&tid=" + transid + "&name=" + docname + "&uniqueid=" + uniqueid + "&islab=" + isLab;
                    if (window.location.href.toLowerCase().indexOf("axpop") > -1)
                        window.parent.ReloadIframe(src);
                    else
                        parent.LoadIframe(src);
                }

            } catch (e) {
            }

        }
        ///
    }
}



function AxBeforeCallAction(actionName) {
    if ((transid == "prerx") && actionName == "offlinesubmit") {
        if (!$("#termscond000F3").prop("checked")) {
            showAlertDialog('warning', 'Please check the Terms And Conditions');
            ShowDimmer(false);
            return false;
        }
        var labid = $("#lab_id000F1").val();
        var doctorid = $("#doctor_id000F1").val();
        var caseId = $("#caseregistrationid000F1").val();
        if (caseId.length > 0) {
            ASB.WebService.CallSaveCase(labid, doctorid, caseId, SuccessCallbackActionLeixirAction);
            return false;
        }
        else
            return true;
    }
    else if (transid == "csmsg" && AxActiveAction == "mycase") {
        parent.LoadIframe("../../" + parent.mainProject + "/aspx/mycases.aspx");
        return true;
    }
    else
        return true;
}

function SuccessCallbackActionLeixirAction(result, eventArgs) {
    try {
        ShowDimmer(false);
        showAlertDialog('success', result);
        var redirectFlag = $("#dummy000F1").val();
        if (!redirectFlag || typeof redirectFlag == 'undefined')
            setTimeout(window.location.href = "iview.aspx?ivname=casemng", 5000);
        else
            setTimeout(window.location.href = "tstruct.aspx?transid=cacsc", 5000);

    } catch (e) {

    }
}


function setNotificationCount() {

    try {
        $.ajax({
            type: "POST",
            url: "../CustomWebService.asmx/GetNotificationCount",
            cache: false,
            async: true,
            contentType: "application/json;charset=utf-8",
            //data: JSON.stringify({ key: key, val: val, appendVal: appendVal, delimiter: delimiter }),
            dataType: "json",
            success: function (data) {
                var count = data.d == "0" ? "" : data.d;
                $(".notification-badge").text(count);
                console.log("Notifications count for this user is: " + data.d);
            },
        });
    } catch (ex) {
        console.warn("Error in setNotificationCount Ajax call : " + ex.message);
    }
}

function AxAfterIviewLoad() {
   if (iName == "notifcn") {
        window.parent.$(".notification-badge").text('');
        try {
            $.ajax({
                type: "POST",
                url: "../CustomWebService.asmx/GUpdateNotificationFlag",
                cache: false,
                async: true,
                contentType: "application/json;charset=utf-8",
                //data: JSON.stringify({ key: key, val: val, appendVal: appendVal, delimiter: delimiter }),
                dataType: "json",
                success: function (data) {
                    console.log("Successfully updated AxMessages");
                },
            });
        } catch (ex) {
            console.warn("Error in setNotificationCount Ajax call : " + ex.message);
        }
    }
}

function AddMessageIcon() {
    window.parent.$(".nav.navbar-nav").append("<li class=\"dropdown messages-menu\" title=\"Messages\"><a href=\"javascript:void(0)\" onclick=\"LoadIframe('iview.aspx?ivname=notifcn');\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-music-bell\" onclick=\"resetLeftMenu();\"></i><span id=\"notification\" class=\"notif\" style=\"text-align: right;font-size: smaller;color: white;float: right;position: absolute;margin-left: 33px;margin-bottom: 54px;height: 12px;float: right;font-weight: bold;top: -4px !important;left: -26px;\"></span></a></li>")
    window.parent.$(".dropdown.messages-menu.axpSettings i.icon-basic-home").attr("onclick", $(".dropdown.messages-menu.axpSettings i.icon-basic-home").attr("onclick") + "setNotificationCount();")
    try {
        setNotificationCount();
    } catch (e) {

    }
}


function AddUserManual() {
    window.parent.$(".nav.navbar-nav").append("<li class=\"dropdown messages-menu\" title=\"Help\"><a href=\"javascript:void(0)\" onclick=\"LoadIframe('iview.aspx?ivname=hlpdocs');\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon-basic-question\"></i>");

}

function AfterParseServiceResult() {
    if (transid == "crate") {
        setTimeout(function () {
            parent.location.href = parent.location.href;
            //parent.loadPop.close();
        }, 5000);
    }
}

//pay safe payment by mahesh 24/10/2019
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event) {
    var url = parent.document.getElementById("middle1").src;
    if (url.includes("PaymentRequest.aspx")) {

        SetSession({
            key: "Payres",
            val: event.data,
            cb: function (data) {
                parent.LoadIframe("../mylabconnect/aspx/PaymentResponse.aspx");
            }
        })
    }
    else
        return;
}
//

function AxBeforeCreateTstructWizard() {
    if (transid == "prerx") {
        $("#dvFooter").hide();
        return false;
    }
}

function AxAfterCreateTstructWizard() {
    if (transid == "csmsg") {
        $(".wizardFooter").hide();
    }
}
function AxCheckNxtPrevBtns(setFocus, curStep, curDcNo, totalSteps) {
    var proceed = true;

    if (transid == 'casrg' || transid == 'cacsc') {
        proceed = false;
        $("#wizardCancelbtn").hide();
        if (curStep == 0) {
            $("#wizardPrevbtn").hide();
            $("#wizardNextbtn").show().attr({
                "onclick": "wizardObj.checkClick(this,'next')",
                "title": "Next"
            }).html("Next &gt;");
        } else if (curStep == (totalSteps - 1)) {
            $("#wizardPrevbtn").show();
            // $("#wizardNextbtn").show().attr({
            // "onclick": "FormSubmit();",
            // "title": "Save"
            // }).html("Save");
            $("#wizardNextbtn").hide()
        } else {
            $("#wizardPrevbtn").show();
            $("#wizardNextbtn").show().attr({
                "onclick": "wizardObj.checkClick(this,'next')",
                "title": "Next"
            }).html("Next &gt;");
        }
        if (setFocus && curDcNo)
            FocusOnFirstField(curDcNo);
        Closediv();
        if ($("#divDc" + curDcNo).find("#casenotes000F1").length <= 0) {
            $("#divDc" + curDcNo).append($("#dvcasenotes"));
            $("#dvcasenotes div").attr('style', 'margin-right:150px!important');
            $("#dvcasenotes div label").attr('style', 'margin-right:90px!important');
        }
        else {

        }
        // $("#divDc" + curDcNo).append($("#dvcasenotes"));
    }
    return proceed;
}

//ManojMadeChanges
function AxCustomReturn() {
    return false;
}

//ManojMadeChanges
function AxCustomNextOrprev(parentElem, type) {
    var dcNo = parseInt(GetWizardDcNo($j("#wizardWrappper #wizardHeader .step.active").data("target")));
    var isExitDummy = false;
    if (IsDcGrid(dcNo)) {
        if (gridDummyRowVal.length > 0) {
            if (rowNo == "")
                gridDummyRowVal.map(function (v) { if (v.split("~")[0] == dcNo) isExitDummy = true; });
            else
                gridDummyRowVal.map(function (v) { if (v.split("~")[0] == dcNo && v.split("~")[1] == rowNo) isExitDummy = true; });
        }
    }
    if (type == "next") {
        var nextparentelem = parentElem.nextAll(":visible").first();
        if (!parentElem.hasClass('complete')) {
            if (IsDcGrid(dcNo) && isExitDummy && dcNo == 2) {
                parentElem.removeClass('in-progress active');
            } else {
                parentElem.removeClass('in-progress active');
            }
            nextparentelem.addClass('in-progress active');
        } else {
            parentElem.removeClass('active');
            if (!nextparentelem.hasClass('complete'))
                nextparentelem.addClass('in-progress active');
            else
                nextparentelem.addClass('active');
        }
        var targetObj = nextparentelem.data('objtype');
        var targetId = wizardObj[targetObj].ids[nextparentelem.data('id')];
        wizardObj.showActiveData(targetId)
        wizardObj.checkNxtPrevBtns();
    } else {
        if (IsDcGrid(dcNo) && isExitDummy && dcNo == 2) {
            parentElem.removeClass('in-progress active');
        } else {
            parentElem.removeClass('in-progress active');
        }
        var prevParentElem = parentElem.prevAll(":visible:first");
        if (!prevParentElem.hasClass('complete'))
            prevParentElem.addClass('in-progress active');
        else
            prevParentElem.addClass('active');
        var targetObj = prevParentElem.data('objtype');
        var targetId = wizardObj[targetObj].ids[prevParentElem.data('id')];
        wizardObj.showActiveData(targetId)
        wizardObj.checkNxtPrevBtns();
    }
    return false;
}

//ManojMadeChanges
function AxWizCustomValidation(wizardObj, isValid, goingStep, curStep, elem) {
    if (isValid && goingStep != curStep) {
        //next
        //ManojMadeChanges
        //var dcNo = curStep + 1;
        //var isExitDummy = false;
        //if (IsDcGrid(dcNo)) {
        //    if (gridDummyRowVal.length > 0) {
        //        if (rowNo == "")
        //            gridDummyRowVal.map(function (v) { if (v.split("~")[0] == dcNo) isExitDummy = true; });
        //        else
        //            gridDummyRowVal.map(function (v) { if (v.split("~")[0] == dcNo && v.split("~")[1] == rowNo) isExitDummy = true; });
        //    }
        //}

        parentElem = $("#wizardHeader .step.active");
        var Selectedparentelem = elem.parents('.step');
        if (!parentElem.hasClass('complete')) {
            //if (!IsDcGrid(dcNo) || !(IsDcGrid(dcNo) && isExitDummy && dcNo == 2)) {
            //    parentElem.removeClass('in-progress active');
            //} else {
                
            //}
            parentElem.removeClass('in-progress active');
            Selectedparentelem.addClass('in-progress active');
        } else {
            parentElem.removeClass('active');
            if (!Selectedparentelem.hasClass('complete'))
                Selectedparentelem.addClass('in-progress active');
            else
                Selectedparentelem.addClass('active');
        }
        var targetObj = Selectedparentelem.data('objtype');
        var targetId = wizardObj[targetObj].ids[Selectedparentelem.data('id')];
        wizardObj.showActiveData(targetId)
        wizardObj.checkNxtPrevBtns();
    } else {
        if (curStep === goingStep || (!parentElem.hasClass('in-progress') && !parentElem.hasClass('complete')))
            return false;
        var parentElem = elem.parents('.step');
        if (isValid === true && !parentElem.hasClass('active') && (parentElem.hasClass('complete') || parentElem.hasClass('in-progress'))) {
            targetElemClicked = "";
            $("#wizardHeader .step.active").removeClass('active')
            var target = parentElem.addClass('active').data('target');
            wizardObj.showActiveData(target);
            wizardObj.checkNxtPrevBtns();
        } else if (isValid !== undefined && isValid != "") {
            showAlertDialog("warning", isValid);
        }
    }
    ////In New case, there is a box displaying in patient details which needs to be removed(this particular code is to remove focus)
    FocusOnFirstField(1);

    return false;
}
