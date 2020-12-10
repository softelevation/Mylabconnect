$(document).ready(function () {

    $.ajax({
        type: "POST",
        url: "DoctorDashBoard.aspx/GetPieJson",
        cache: false,
        async: false,
        contentType: "application/json;charset=utf-8",
        //data: JSON.stringify({ key: key }),
        dataType: "json",
        success: function (data) {
            var sdata = [];
            var total = parseInt(0);
            if (data.d.length > 0) {
                var dataArr = data.d.split('~');
                if (dataArr.length > 0) {
                    for (var i = 0; i < dataArr.length; i++) {
                        var dataVal = dataArr[i].split(',');
                        sdata.push({
                            name: dataVal[0],
                            y: parseInt(dataVal[1]),
                            url: dataVal[2]
                        });
                        try {
                            total = parseInt(total) + parseInt(dataVal[1]);
                        } catch (e) {

                        }
                    }
                }
            }
            var chart = {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            };
            var title = {
                text: ''
            };
            var tooltip = {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> of total<br/><b>' + total + '</b>'
            };
            var plotOptions = {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function () {
                                location.href = this.options.url;
                                //parent.LoadIframe(this.options.url);
                            }
                        }
                    }
                },
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: 5
                    }
                }
            };
            //var plotOptions = {
            //    pie: {
            //        allowPointSelect: true,
            //        cursor: 'pointer',
            //        dataLabels: {
            //            enabled: true,
            //            format: '<b>{point.name}</b>',
            //            style: {
            //                color: (
            //                    Highcharts.theme && Highcharts.theme.contrastTextColor) ||
            //                    'black'
            //            }
            //        }
            //    }
            //};
            var navigation = {
                buttonOptions: {
                    enabled: false
                }
            };
            var series = [{
                type: 'pie',
                name: 'Case Summary',
                data: sdata
            }];

            //Make monochrome colors and set them as default for all pies
            //Highcharts.getOptions().plotOptions.pie.colors = (function () {
            //    var colors = [];
            //    var base = Highcharts.getOptions().colors[0];
            //    var i;

            //    for (i = 0; i < 10; i += 1) {
            //        // Start out with a darkened base color (negative brighten), and end
            //        // up with a much brighter color
            //        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
            //    }
            //    return colors;
            //}());
            var json = {};
            json.chart = chart;
            json.title = title;
            json.tooltip = tooltip;
            json.navigation = navigation;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container').highcharts(json);
        }
    });

    try {
        
        if (!($(callParentNew("mainNewPageBody", "id")).hasClass("sidebar-collapse")) && !isMobileDevice())
            callParentNew("menuCollapse", "id").click();

        $(callParentNew("Div1", "id")).css("display", "none");
        $(callParentNew("notifications-menu", "class")).css("display", "none");
        $(callParentNew("AppConfig", "id")).css("display", "none");
        $(callParentNew("Label1", "id")).closest("li").css("display", "none");
        $(callParentNew("hisItem", "class")).css("display", "none");
        $(callParentNew("li3", "id")).css("display", "none");
        $(callParentNew("configApp1", "id")).css("display", "none");

    } catch (e) {

    }

    //banner
    var customBanner = "";
    var newsEventBanner = "";
    var indicators = "";
    try {
        var count = 0;
        $.each(JSON.parse(bannerHTMLJSON), function (i, data) {
            if (data.FILEPATH != undefined) {

                if (count == 0) {
                    customBanner += "<div class='item active'  onclick='window.open(\"" + data.PROMOTIONURL + "\")'><img src='data:image/png;base64, " + data.FILEPATH + " ' alt='image' style='width: 100%;height: 190px;'></div>";
                    indicators = '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>';
                    count++;
                }
                else {
                    customBanner += "<div class='item' onclick='window.open(\"" + data.PROMOTIONURL + "\")'> <img src='data:image/png;base64, " + data.FILEPATH + " ' alt='image' style='width: 100%;height: 190px;'></div>";
                    indicators += '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
                }
            }
        });
    } catch (e) {

    }
    if (customBanner === "") {
        customBanner = "<div class='item active'><img src='../images/slider-1.jpg?v=2' alt='los angeles' style='width: 100%;'></div>";
        customBanner += "<div class='item'><img src='../images/slider-2.jpg' alt='los angeles' style='width: 100%;'></div>";
        customBanner += "<div class='item'><img src='../images/slider-3.jpg' alt='los angeles' style='width: 100%;'></div>";
    }
    else {
        $(".carousel-indicators").html("");
        $(".carousel-indicators").append(indicators);
    }
    $(".carousel-inner.customSliderBannerDoc").append(customBanner);

    //$('.slider').slider({ full_width: true });
    //$(".slider .slides li").css({ "opacity": "1" });
    try {
        window.parent.$(".loadingoverlay").addClass("hide");
    } catch (e) {

    }

    //document ready end
});
