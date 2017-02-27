/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	citys = document.getElementById("aqi-city-input").value;
	values = document.getElementById("aqi-value-input").value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	citys = citys.trim();
	values = values.trim();
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
  document.getElementById("add-btn").onclick = function(){
  	var trObject1 = document.createElement('tr');
                var td1 = document.createElement('td');
                td1.innerHTML = "城市";
                var td2 = document.createElement('td');
                td2.innerHTML = "空气质量";
                var td3 = document.createElement('td');
                td3.innerHTML = "操作";
                trObject1.appendChild(td1);
                trObject1.appendChild(td2);
                trObject1.appendChild(td3);
    var trObject2 = document.createElement('tr');
                var td4 = document.createElement('td');
                td4.innerHTML = citys;
                var td5 = document.createElement('td');
                td5.innerHTML = values;
                var td6 = document.createElement('button');
                td6.innerHTML = "删除";
                trObject2.appendChild(td4);
                trObject2.appendChild(td5);
                trObject2.appendChild(td6);
    document.getElementById("aqi-table").appendChild(trObject1);
    document.getElementById("aqi-table").appendChild(trObject2);

  }
}

addBtnHandle();

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();