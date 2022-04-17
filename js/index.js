// 首页
let input = document.getElementsByClassName("input")[0];
let gps = document.getElementsByClassName("gps")[0];
let back = document.getElementsByClassName("back")[0];
let boxes = document.getElementsByClassName("boxes");
let i = document.getElementsByClassName("i")[0];
let footer = document.getElementsByClassName("footer");
// 未来天气
let when = document.getElementsByClassName("when");
let weather = document.getElementsByClassName("weather");
let max = document.getElementsByClassName("max");
let min = document.getElementsByClassName("min");
// 今日天气
let temperature = document.getElementsByClassName("temperature")[0];
let cloud = document.getElementsByClassName("cloud")[0];
let wind = document.getElementsByClassName("wind")[0];
let tip = document.getElementsByClassName("tip")[0];
// 生活指数
let zhishu = document.getElementsByClassName("zhishu");
let level = document.getElementsByClassName("level");
let tips = document.getElementsByClassName("tips");
// 点击切换
i.onclick = function () {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("get", 'https://tianqiapi.com/api?version=v1&appid=85214918&appsecret=m5rMoSIV &city=' + input.value);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // 切换到未来天气
            if (xhr.status >= 200 && xhr.status < 300) {
                let text = xhr.response;
                console.log(text);
                footer[0].onclick = function () {
                    footer[0].className = "footer dian";
                    footer[1].className = "footer";
                    footer[2].className = "footer";
                    boxes[0].style.display = "none";
                    boxes[1].style.display = "block";
                    boxes[2].style.display = "none";
                    boxes[3].style.display = "none";

                    for (let i = 0; i < 3; i++) {
                        when[i].innerHTML = text.data[i].day;
                    }
                    for (let i = 3; i < 7; i++) {
                        when[i].innerHTML = text.data[i].day;
                    }
                    for (let i = 0; i < 7; i++) {
                        weather[i].innerHTML = text.data[i].wea;
                    }
                    for (let i = 0; i < 7; i++) {
                        max[i].innerHTML = text.data[i].tem1;
                        min[i].innerHTML = text.data[i].tem2;
                    }
                }

                // 切换到今日天气
                footer[1].onclick = function () {
                    footer[1].className = "footer dian";
                    footer[0].className = "footer";
                    footer[2].className = "footer";
                    boxes[0].style.display = "none";
                    boxes[1].style.display = "none";
                    boxes[2].style.display = "block";
                    boxes[3].style.display = "none";

                    temperature.innerHTML = text.data[0].tem;
                    cloud.innerHTML = text.data[0].wea;
                    wind.innerHTML = text.data[0].win[0];
                    tip.innerHTML = text.data[0].air_tips;
                }

                // 切换到指数
                footer[2].onclick = function () {
                    footer[2].className = "footer dian";
                    footer[0].className = "footer";
                    footer[1].className = "footer";
                    boxes[0].style.display = "none";
                    boxes[3].style.display = "flex";
                    boxes[2].style.display = "none";
                    boxes[1].style.display = "none";

                    zhishu[0].innerHTML = text.data[0].index[0].title;
                    level[0].innerHTML = text.data[0].index[0].level;
                    tips[0].innerHTML = text.data[0].index[0].desc;

                    zhishu[1].innerHTML = text.data[0].index[4].title;
                    level[1].innerHTML = text.data[0].index[4].level;
                    tips[1].innerHTML = text.data[0].index[4].desc;

                    zhishu[2].innerHTML = text.data[0].index[3].title;
                    level[2].innerHTML = text.data[0].index[3].level;
                    tips[2].innerHTML = text.data[0].index[3].desc;

                    zhishu[3].innerHTML = text.data[0].index[1].title;
                    level[3].innerHTML = text.data[0].index[1].level;
                    tips[3].innerHTML = text.data[0].index[1].desc;
                }
                footer[1].onclick();
                gps.innerHTML = text.city;
                let li = document.createElement("li");
                li.innerHTML = `<span class='historyli'>${text.city}</span><i class='iconfont X' style='background-color: white;font-size: 12PX;color: rgb(153,153,153);'>&#xe69d;</i>`;
                hlist.appendChild(li);
            }
        }
    }
    // 返回
    back.innerHTML = "<";
    back.onclick = function () {
        boxes[2].style.display = "none";
        boxes[0].style.display = "block";
        boxes[1].style.display = "none";
        boxes[3].style.display = "none";
        footer[2].className = "footer";
        footer[0].className = "footer";
        footer[1].className = "footer";
        h.style.display = "none";
    }
    input.value = null;
}

// 历史记录
let h = document.getElementsByClassName("history")[0];
let hlist = document.getElementsByClassName("historyList")[0];
let hli = document.getElementsByTagName("li");
let hlispan = document.getElementsByClassName("historyli");
let hX = document.getElementsByClassName("X");
let lispan = document.getElementsByTagName("span");

input.onclick = function () {
    if (hli[0] !== undefined) {
        h.style.display = "block";
        setInterval(function () {
            for (let i = 0; i < hli.length; i++) {
                hX[i].onclick = function () {
                    hlist.removeChild(hli[i]);
                    if (hli[0] == undefined) {
                        h.style.display = "none";
                    }
                }
            }
        }, 100)
        setInterval(function () {
            for (let i = 0; i < lispan.length; i++) {
                lispan[i].onclick = function () {
                    input.value = lispan[i].innerHTML;
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = "json";
                    xhr.open("get", 'https://tianqiapi.com/api?version=v1&appid=85214918&appsecret=m5rMoSIV &city=' + input.value);
                    xhr.send(null);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                let text = xhr.response;
                                console.log(text);
                                footer[0].onclick = function () {
                                    footer[0].className = "footer dian";
                                    footer[2].className = "footer";
                                    footer[1].className = "footer";
                                    boxes[0].style.display = "none";
                                    boxes[1].style.display = "block";
                                    boxes[2].style.display = "none";
                                    boxes[3].style.display = "none";

                                    for (let i = 0; i < 3; i++) {
                                        when[i].innerHTML = text.data[i].day;
                                    }
                                    for (let i = 3; i < 7; i++) {
                                        when[i].innerHTML = text.data[i].day;
                                    }
                                    for (let i = 0; i < 7; i++) {
                                        weather[i].innerHTML = text.data[i].wea;
                                    }
                                    for (let i = 0; i < 7; i++) {
                                        max[i].innerHTML = text.data[i].tem1;
                                        min[i].innerHTML = text.data[i].tem2;
                                    }
                                }


                                footer[1].onclick = function () {
                                    footer[1].className = "footer dian";
                                    footer[0].className = "footer";
                                    footer[2].className = "footer";
                                    boxes[0].style.display = "none";
                                    boxes[2].style.display = "block";
                                    boxes[1].style.display = "none";
                                    boxes[3].style.display = "none";

                                    temperature.innerHTML = text.data[0].tem;
                                    cloud.innerHTML = text.data[0].wea;
                                    wind.innerHTML = text.data[0].win[0];
                                    tip.innerHTML = text.data[0].air_tips;
                                }


                                footer[2].onclick = function () {
                                    footer[2].className = "footer dian";
                                    footer[0].className = "footer";
                                    footer[1].className = "footer";
                                    boxes[0].style.display = "none";
                                    boxes[3].style.display = "flex";
                                    boxes[2].style.display = "none";
                                    boxes[1].style.display = "none";

                                    zhishu[0].innerHTML = text.data[0].index[0].title;
                                    level[0].innerHTML = text.data[0].index[0].level;
                                    tips[0].innerHTML = text.data[0].index[0].desc;

                                    zhishu[1].innerHTML = text.data[0].index[4].title;
                                    level[1].innerHTML = text.data[0].index[4].level;
                                    tips[1].innerHTML = text.data[0].index[4].desc;

                                    zhishu[2].innerHTML = text.data[0].index[3].title;
                                    level[2].innerHTML = text.data[0].index[3].level;
                                    tips[2].innerHTML = text.data[0].index[3].desc;

                                    zhishu[3].innerHTML = text.data[0].index[1].title;
                                    level[3].innerHTML = text.data[0].index[1].level;
                                    tips[3].innerHTML = text.data[0].index[1].desc;
                                }
                                footer[1].onclick();
                                gps.innerHTML = text.city;
                                let li = document.createElement("li");
                                li.innerHTML = `<span class='historyli'>${text.city}</span>
                                                        <i class='iconfont X' style=background-color: white;font-size: 12PX;color: rgb(153,153,153);>&#xe69d;</i>`;
                                hlist.appendChild(li);
                            }
                        }
                    }
                }
            }
        }, 100)

    }
    else {
        h.style.display = "none";
    }
}


