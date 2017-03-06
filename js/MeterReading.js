/**
 * Created by admin on 2017/2/20.
 */

$(document).ready(function(){
    //初始化树状图
    $.fn.zTree.init($("#treeMultiple"), setting, zNodes);


        var table = $('#dateTables').DataTable({
            "autoWidth": false,  //用来启用或禁用自动列的宽度计算
            //是否分页
            "destroy": false,//还原初始化了的datatable
            "paging":true,
            "ordering": false,
            'searching':false,
            'language': {
                'emptyTable': '没有数据',
                'loadingRecords': '加载中...',
                'processing': '查询中...',
                'lengthMenu': '每页 _MENU_ 件',
                'zeroRecords': '没有数据',
                'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
                'paginate': {
                    'first':      '第一页',
                    'last':       '最后一页',
                    'next':       '下一页',
                    'previous':   '上一页'
                },
                'infoEmpty': ''
            },
            'buttons': [

            ],
            "dom":'B<"clear">lfrtip',
            //数据源
            'ajax': './data/history.json',
            'columns':[
                {
                    title:'仪表类型',
                    data:'alarmType'

                },
                {
                    title:'安装位置',
                    data:'name'

                },
                {
                    title:'抄表起始日期',
                    data:'startDate'

                },
                {
                    title:'抄表结束日期',
                    data:'stopDate'

                },
                {
                    title:'抄表起数',
                    data:'time'

                },
                {
                    title:'抄表止数',
                    data:'seeing'

                },

                {
                    title:'倍率',
                    data:'seeing'

                },
                {
                    title:'用能量',
                    data:'warningCondition'

                },
                {
                    title:'抄表人',
                    data:'seeing'

                },
                {
                    title:'是否结算',
                    data:'seeing'

                },
                {
                    title:'编辑操作',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#remove-deploy'>修改</button>"
                },
                {
                    title:'删除操作',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn'>删除</button>"
                },
            ]
        });

    //select 优化动画
    var rotateNum = 1;
    $('.add-input-select').click(function(){
        rotateNum++;
        var num = rotateNum * 180;
        var string = num + 'deg';
        console.log('bb');
        $(this).parents('.add-input-father').children('.add-select-block').slideToggle();
        $(this).children('div').css({

            'transform':'rotate('+string+')'
        })


    });
    $('.add-select-block li').on('click',function(){
        var text = $(this).html();

        $(this).parents('.add-input-father').children('.add-select-block').slideToggle();
        $(this).parents('.add-input-father').children('.add-input-block').children('.add-input-select').children('span').html(text);
        rotateNum++;
        var num = rotateNum * 180;
        var string = num + 'deg';
        $(this).parents('.add-input-father').children('.add-input-block').children('.add-input-select').children('div').css({

            'transform':'rotate('+string+')'
        })
    });

});



var setting = {
    check: {
        enable: true,
        chkStyle: "checkbox",
        chkboxType: { "Y": "s", "N": "ps" }
    },
    view: {
        nameIsHTML: true
    },
    data: {
        simpleData: {
            enable: true
        }
    },
};
var zNodes =[
    { id:1, pId:0, name:"A楼", open:true},
    { id:11, pId:1, name:"<font color=' #307f7a'>仪表1</font>"},
    { id:12, pId:1, name:"<font color=' #b2041a'>仪表2</font>"},
    { id:13, pId:1, name:"仪表3"},
    { id:14, pId:1, name:"仪表4"},
    { id:2, pId:0, name:"B楼", open:true},
    { id:21, pId:2, name:"仪表1"},
    { id:22, pId:2, name:"仪表2"},
    { id:23, pId:2, name:"仪表3"},
    { id:24, pId:2, name:"仪表4"},
    { id:25, pId:2, name:"仪表5"},
    { id:26, pId:2, name:"仪表6"},
    { id:27, pId:2, name:"仪表7"},
    { id:3, pId:0, name:"C楼", open:true},
    { id:31, pId:3, name:"仪表1"},
    { id:32, pId:3, name:"仪表2"},
    { id:33, pId:3, name:"仪表3"},
    { id:34, pId:3, name:"仪表4"},
    { id:35, pId:2, name:"仪表5"},
    { id:36, pId:2, name:"仪表6"},
    { id:4, pId:0, name:"D楼", open:true},
    { id:41, pId:4, name:"仪表1"},
    { id:42, pId:4, name:"仪表2"},
    { id:43, pId:4, name:"仪表3"},
    { id:44, pId:4, name:"仪表4"},
    { id:45, pId:2, name:"仪表5"}
    ];


//搜索功能
//搜索功能
//首先判断搜索框的状态(目的：通过判断是否有empty类来判断input中是否有内容)；
$('#key').bind('blur',blurKey);
$('#key').bind('focus',focusKey);
//input标签内容改变的触发事件(input和propertychange)事件
//　input事件是IE之外的大多数浏览器支持的事件，在value改变时实时触发，但是通过js改变value时不会触发；propertychange事件是任何属性改变都会触发，而input却只在value改变时触发，input要通过addEventListener()来注册，propertychange注册方法与一般事件相同。
$('#key').bind('input',seachNode);
//目的就是判断搜索框内是不是输入了内容
function blurKey(e){
    //如果失去焦点的时候，搜索框没有内容的时候添加empty类
    if($('#key').val()==''){
        $('#key').addClass('empty');
    }  //起了初始化的作用
}
//获得焦点的时候，搜索框移除empty类
function focusKey(e){
    if($('#key')){
        $('#key').removeClass('empty');
    }
}
//模糊搜索
//nodeList存放的是搜索出来的zTree节点；
var nodeList = [];
//目的是为了区分是不是重新输入了搜索关键字，如果一样的话就不变，不一样的话重新构建
var lastValue = '';
function seachNode(e){
    //首先获得要搜索的zTree树
    var zTree = $.fn.zTree.getZTreeObj("treeMultiple");
    //获得input里的输入内容
    //var value = $('#key').val();
    //这里为了更精确，用trim来去掉value的首尾空格
    var value = $.trim($('#key').val());
    var keyType = 'name';
    //判断如果输入框的内容和上次输入的一样，就不执行了，如果不一样再执行
    if (lastValue === value)
        return;
    lastValue = value;
    if (value === "") {
        $('.tip').hide();
        //将 zTree 使用的标准 JSON 嵌套格式的数据转换为简单 Array 格式。
        //获取 zTree 的全部节点数据
        //如果input是空的则显示全部；
        zTree.showNodes(zTree.transformToArray(zTree.getNodes())) ;
        return;
    }
    //依据：nodeList = zTree.getNodesByParamFuzzy(keyType,value) ;这是zTree自带的模糊搜索的功能keyType是需要模糊匹配的属性名称，value是需要模糊匹配的属性值
    //根据节点数据的属性搜索，获取条件模糊匹配的节点数据 JSON 对象集合
    nodeList = zTree.getNodesByParamFuzzy(keyType,value);
    //console.log(nodeList); //[onject](父节点，子孙节点都是以属性的形式存在)
    //console.log(nodeList);  输出的是对象
    //将 zTree 使用的标准 JSON 嵌套格式的数据转换为简单 Array 格式。(免去用户自行编写递归遍历全部节点的麻烦)
    nodeList = zTree.transformToArray(nodeList);
    //console.log(nodeList);//[object,object,object,object,object];
    //只要是nodeList是父元素，子孙元素也是会查找出来的；
    //得到的数组
    if(nodeList.length == 0){
        //显示提示div（抱歉......）
        $('.tip').show();
    }else{
        $('.tip').hide();
    }
    updateNodes();
}
//选中之后更新节点
function updateNodes(){
    //首先选中树
    //获取 id 为 tree 的 zTree 对象
    var zTree = $.fn.zTree.getZTreeObj("treeMultiple");
    //获取 zTree 的全部节点数据
    //console.log(zTree.getNodes());
    var allNode = zTree.transformToArray(zTree.getNodes());
    //console.log(allNode);所有节点不管是父子孙都输出
    //指定被隐藏的节点 JSON 数据集合hideNodes();
    zTree.hideNodes(allNode);
    //zTree都是可以在控制台输出的，只是界面显示不出来
    //zTree.showNodes(nodeList);
    //遍历nodeList第n个nodeList
    for(var n in nodeList){
        findParent(zTree,nodeList[n]);
    }
    zTree.showNodes(nodeList);
}
//整理选出来的节点的关系
function findParent(zTree,node){
    //展开 / 折叠 指定的节点（需要 展开 / 折叠 的节点数据，expandFlag = true表示展开节点，操作是否影响子节点，focus = true 表示 展开 / 折叠 操作后，通过设置焦点保证此焦点进入可视区域内）
    zTree.expandNode(node,true,false,false);
    //pNode父节点getParentNode（）获取 treeNode 节点的父节点。
    var pNode = node.getParentNode();
    //console.log(pNode);//得到搜索节点后的父节点和祖先节点
    if(pNode != null){
        nodeList.push(pNode);
        findParent(zTree,pNode);
    }
}

//选择日期插件
$('.chooseDate').datepicker(
    {
        language:  'zh-CN',
        todayBtn: 1,
        todayHighlight: 1,
        format: 'yyyy-mm-dd'
    }
);
$('#mult-import').on('click','.btn-primary',function(){
    console.log('ok');
    $('.show-plan').css({
        display:'block'
    });
    $('#mult-import').modal('hide')

});