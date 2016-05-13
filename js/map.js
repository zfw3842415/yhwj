

    // 百度地图API功能
    var map = new BMap.Map('map');
    var poi = new BMap.Point(106.7469935, 26.581808);
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom();
    //创建检索信息窗口对象
    var searchInfoWindow = null;
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function (e) {
        searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
    searchInfoWindow.open(marker); //在marker上打开检索信息串口
    $("close").onclick = function () {
        searchInfoWindow.close();
    }
    $("open").onclick = function () {
        var enableSendToPhone = false;
        if ($("enableSendToPhone").checked) {
            enableSendToPhone = true;
        }

        if ($("enableAutoPan").checked) {
            searchInfoWindow.enableAutoPan();
        } else {
            searchInfoWindow.disableAutoPan();
        };
        searchInfoWindow.open(marker);
    }
    $("show").onclick = function () {
        searchInfoWindow.show();
    }
    $("hide").onclick = function () {
        searchInfoWindow.hide();
    }
    $("getPosition").onclick = function () {
        var position = searchInfoWindow.getPosition();
        alert("经度：" + position.lng + "；纬度：" + position.lat);
    }
    $("setValue").onclick = function () {
        searchInfoWindow.setPosition(new BMap.Point($("lng").value, $("lat").value));
        searchInfoWindow.setTitle($("title").value);
        searchInfoWindow.setContent($("content").value);
    }
    $("getContent").onclick = function () {
        alert(searchInfoWindow.getContent());
    }
    $("getTitle").onclick = function () {
        alert(searchInfoWindow.getTitle());
    }
    function $(id) {
        return document.getElementById(id);
    }
