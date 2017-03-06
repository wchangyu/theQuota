/**
 * Created by admin on 2017/2/15.
 */

$(document).ready(function(){
    //初始化表格
    var table = $('#dateTables').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": true,//还原初始化了的datatable
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
                title:'选择',
                "targets": -1,
                "data": null,
                "defaultContent": "<input type='checkbox' class='tableCheck'/>"

            },
            {
                title:'仪表类型',
                data:'time'

            },
            {
                title:'能耗类型',
                data:'alarmType'

            },
            {
                title:'表号或代号',
                data:'serialNumber'

            },
            {
                title:'出场编号',
                data:'serialNumber'

            },
            {
                title:'倍率',
                data:'seeing'

            },
            {
                title:'建档日期',
                data:'seeing'

            },
            {
                title:'建档起数',
                data:'seeing'

            },
            {
                title:'最后止数',
                data:'seeing'

            },
            {
                title:'抄表日期',
                data:'seeing'

            },
            {
                title:'子账户标识',
                data:'seeing'

            },
            {
                title:'公摊比例',
                data:'seeing'

            },
            {
                title:'安装位置',
                data:'seeing'

            },
            {
                title:'计量区域',
                data:'seeing'

            },
            {
                title:'操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#change-meter'>更换</button>"
            }

        ]
    });
    var table1 = $('#dateTables1').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':false,
        'buttons': [

        ],
        "dom":'B<"clear">lfrtip',
        //数据源
        'ajax': './data/history.json',
        'columns':[
            {
                title:'表名或代号',
                data:'time'

            },
            {
                title:'设备终止读数',
                data:'seeing'

            },
            {
                title:'注销原因',
                "targets": -1,
                "data": null,
                "class":'theReson',
                "defaultContent": '<textarea name="yj" cols="40" rows="2" style="resize:none;">'
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

})


//二级单位搜索功能
$(function(){
    // search-test-inner --->  最外层div
    // search-value --->  input 输入框
    // search-value-list --->  搜索结果显示div
    // search-li --->  搜索条目
    new SEARCH_ENGINE("search-test-inner0","search-value0","search-value-list0","search-li0");
    new SEARCH_ENGINE("search-test-inner1","search-value1","search-value-list1","search-li1");

});


function SEARCH_ENGINE(dom,searchInput,searchResultInner,searchList){

    //存储拼音+汉字+数字的数组
    this.searchMemberArray = [];

    //作用对象
    this.dom = $("." + dom);

    //搜索框
    this.searchInput = "." + searchInput;

    //搜索结果框
    this.searchResultInner = this.dom.find("." + searchResultInner);

    //搜索对象的名单列表
    this.searchList = this.dom.find("." + searchList);

    //转换成拼音并存入数组
    this.transformPinYin();

    //绑定搜索事件
    this.searchActiveEvent();

}

SEARCH_ENGINE.prototype = {
    //-----------------------------【转换成拼音，并将拼音、汉字、数字存入数组】
    transformPinYin : function(){

        //临时存放数据对象
        $("body").append('<input type="text" class="hidden pingying-box">');
        var $pinyin = $("input.pingying-box");

        for(var i=0;i<this.searchList.length;i++){

            //存放名字，转换成拼音
            $pinyin.val(this.searchList.eq(i).attr("data-name"));

            //汉字转换成拼音
            var pinyin = $pinyin.toPinyin().toLowerCase().replace(/\s/g,"");

            //汉字
            var cnCharacter = this.searchList.eq(i).attr("data-name");

            //数字
            var online = this.searchList.eq(i).attr("data-online");

            //存入数组
            this.searchMemberArray.push(pinyin + "&" + cnCharacter + "&" + online);
        }

        //删除临时存放数据对象
        $pinyin.remove();
    },

    //-----------------------------【模糊搜索关键字】
    fuzzySearch : function(type,val){
        var s;
        var returnArray = [];

        //拼音
        if(type === "pinyin"){
            s = 0;
        }
        //汉字
        else if(type === "cnCharacter"){
            s = 1;
        }
        //数字
        else if(type === "digital"){
            s = 2;
        }

        for(var i=0;i<this.searchMemberArray.length;i++){
            //包含字符
            if(this.searchMemberArray[i].split("&")[s].indexOf(val) >= 0){
                returnArray.push(this.searchMemberArray[i]);
            }
        }

        return returnArray;

    },

    //-----------------------------【输出搜索结果】
    postMemberList : function(tempArray){
        var html = '';

        //有搜索结果
        if(tempArray.length > 0){

            html += '<li class="tips">搜索结果（' + tempArray.length + '）</li>';

            for(var i=0;i<tempArray.length;i++){
                var sArray = tempArray[i].split("&");

                html += '<li class="theResult">';

                //判断是否在线
                var color;
                if(sArray[2] == '不在线'){

                    color = '#2097f3';
                }else{
                    color = 'red'
                }

                html += '<span class="ifOnline"></span>';
                html += '<span class="name">' + sArray[1] + '</span>';
                html += '</li>';

            }
        }
        //无搜索结果
        else{

            if($(this.searchInput).val() != ""){
                html += '<li class="tips">无搜索结果……</li>';
            }else{
                this.searchResultInner.html("");
            }
        }
        this.searchResultInner.html(html);
        showResult();
    },

    //-----------------------------【绑定搜索事件】
    searchActiveEvent : function(){

        var searchEngine = this;

        $(document).on('keyup',this.searchInput,function(){
            //使默认的展示项关闭

            $(this).parent().parent().children('.search-show-list').css({
                display:'none'
            });
            $(this).parent().parent().children('.search-value-list').css({
                display:'block'
            });
            $(this).parent().parent().children('h4').css({
                display:'none',
            });
            //临时存放找到的数组
            var tempArray = [];

            var val = $(this).val();

            //判断拼音的正则
            var pinYinRule = /^[A-Za-z]+$/;

            //判断汉字的正则
            var cnCharacterRule = new RegExp("^[\\u4E00-\\u9FFF]+$","g");

            //判断整数的正则
            var digitalRule = /^[-\+]?\d+(\.\d+)?$/;

            //只搜索3种情况
            //拼音
            if(pinYinRule.test(val)){
                tempArray = searchEngine.fuzzySearch("pinyin",val);
            }
            //汉字
            else if(cnCharacterRule.test(val)){
                tempArray = searchEngine.fuzzySearch("cnCharacter",val);
            }
            //数字
            else if(digitalRule.test(val)){

                tempArray = searchEngine.fuzzySearch("digital",val);
            }
            else{
                searchEngine.searchResultInner.html('<li class="tips">无搜索结果……</li>');
            }

            searchEngine.postMemberList(tempArray);
            buildClick()
        });

        $('.search-build-btn').on('click',function(){
            console.log('ok');
            //使默认的展示项关闭
            $('#ul1').css({
                'display':'none'
            })
            //临时存放找到的数组
            var tempArray = [];

            var val = $('.search-value').val();
            //判断拼音的正则
            var pinYinRule = /^[A-Za-z]+$/;

            //判断汉字的正则
            var cnCharacterRule = new RegExp("^[\\u4E00-\\u9FFF]+$","g");

            //判断整数的正则
            var digitalRule = /^[-\+]?\d+(\.\d+)?$/;

            //只搜索3种情况
            //拼音
            if(pinYinRule.test(val)){
                tempArray = searchEngine.fuzzySearch("pinyin",val);
            }
            //汉字
            else if(cnCharacterRule.test(val)){
                tempArray = searchEngine.fuzzySearch("cnCharacter",val);
            }
            //数字
            else if(digitalRule.test(val)){

                tempArray = searchEngine.fuzzySearch("digital",val);
            }
            else{
                searchEngine.searchResultInner.html('<li class="tips">无搜索结果……</li>');
            }

            searchEngine.postMemberList(tempArray);
            buildClick()
        })
    }
};
//显示全部按钮
$('.show-all').on('click',function(){
    $(this).parent().children('.search-show-list').css({
        display:'block'
    });
    $(this).parent().children('.search-value-list').css({
        display:'none'
    });
    $(this).parent().children('h4').css({
        display:'block',
    });

});


$('.search-value').on('focus',function(){
    if($(this).val() != ""){
        $(this).parent().children('.search-show-list').css({
            display:'none'
        });
        $(this).parent().children('.search-value-list').css({
            display:'block'
        })
    }
});

//当点击二级单位时触发
$('#ul1 li').on('click',function(){
    var txt = $(this).html();
    $('.search-value').val(txt);
});

function buildClick(){
    $('.search-value-list0 li').on('click',function(){
        console.log('ok');
        var txt = $(this).children().eq(1).html();
        $('.search-value').val(txt);
    });
}
//选择日期插件
$('.chooseDate').datepicker(
    {
        language:  'zh-CN',
        todayBtn: 1,
        todayHighlight: 1,
        format: 'yyyy-mm-dd'
    }
)
setInterval(function(){
    addMeasure();
    removeMeasure();
    addMeasure1();
    removeMeasure1();
},300)
function addMeasure(){
    $('#ul2 li').off('click');
    $('#ul2 li').on('click',function(){

        var txt1 = $(this).html().split('<')[0];
        $(this).remove();
        var txt2 = $('<li class="search-li search-li2">'+txt1+'<span></span></li>');
        txt2.appendTo('#ul3');

    });
}
function removeMeasure(){
    $('#ul3 li').off('click');
    $('#ul3 li').on('click',function(){

        var txt1 = $(this).html().split('<')[0];
        $(this).remove();
        var txt2 = $('<li class="search-li search-li1 search-li-add">'+txt1+'<span></span></li>');
        txt2.appendTo('#ul2');
    });
}
//点击弹窗中的搜索结果时
function showResult(){
    $('.search-value-list1 .theResult').on('click',function(){
        var txt = $(this).children('.name').html();
        console.log(txt);
        var txt2 = $('<li class="search-li search-li2">'+txt+'<span></span></li>');
        txt2.appendTo('#ul3');
        for(var i = 0 ; i < $('.search-li1').length; i++){
            if(txt == $('.search-li1').eq(i).attr('data-name')){
                $('.search-li1').eq(i).remove();
            }
        }
    });
}
function addMeasure1(){
    $('#ul4 li').off('click');
    $('#ul4 li').on('click',function(){

        var txt1 = $(this).html().split('<')[0];
        $(this).remove();
        var txt2 = $('<li class="search-li search-li2 search-li-input">'+txt1+'<span></span><input type="text" placeholder="请输入定额" /></li>');
        txt2.appendTo('#ul5');

    });
}

function removeMeasure1(){
    $('#ul5 li').off('click');
    $('#ul5 li').on('click',function(){
        if($('.search-li-input input').is(':focus')){
            $('.search-li-input input').css({
                color:'#333'
            })
          return false;
        }
        var txt1 = $(this).html().split('<')[0];
        $(this).remove();
        var txt2 = $('<li class="search-li search-li1 search-li-add">'+txt1+'<span></span></li>');
        txt2.appendTo('#ul4');
    });
}