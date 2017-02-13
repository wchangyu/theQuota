/**
 * Created by admin on 2017/2/9.
 */


$('#theLoading').modal('show');
$(document).ready(function(){
    //调用获取后台数据方法，进行数据获取
    alarmHistory();
    //初始化table表单
    var table = $('#dateTables').DataTable({
        "bProcessing" : true, //DataTables载入数据时，是否显示‘进度’提示
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
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
        'columns':[
            {
                title:'单位性质',
                data:"f_UnitNatureName",
            },
            {
                title:'单位ID',
                data:"f_id",
                class:'theHidden'
            },
            {
                title:'编辑操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn alter' data-toggle='modal' data-target='#alter-people'>修改</button>"
            },
            {
                title:'删除操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn remove' data-toggle='modal' data-target='#remove-people'>删除</button>"
            },
        ]
    });
    _table = $('#dateTables').dataTable();
    //给表格添加后台获取到的数据
    setData();
    hiddrenId();
    $('#theLoading').modal('hide');
    //添加操作
    $('#add-people .btn-primary').on('click',function(){
        var text = $("#add-people .add-input").val();
        $('#add-people .add-input').on('focus',function(){
            $('#add-people .marks').css({
                display:'none'
            });
            $('#add-people .hint-text').css({
                display:'none'
            });
            $('#add-people .hooks').css({
                display:'none'
            });

        });
        if(text == ""){
            $('#add-people .marks1').css({
                display:'inline-block'
            });
            $('#add-people .hint-text1').html('单位性质不能为空');
            $('#add-people .hint-text1').css({
                display:'inline-block',
                color:'#c40000'
            })
            return false;

        }else{

        }

        $.ajax({
            type: "post",
            url: "http://192.168.1.113/BEEWebAPI/api/SecondUnit/AddUnitNature",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
            data: {
                "f_id": 0,
                "f_UnitNatureName": text,
                "f_Order": 0,
                "userID": "string"
            },
            cache: false,
            async : false,
            dataType: "json",
            success: function (data)
            {
                console.log(data);
                $('#add-people').modal('hide');
                ajaxSuccess();
            },
            error:function (data) {
                var num = parseInt(data.responseText.split('"')[3]);
                console.log(data.responseText);
                if(num == 2){
                    alert('单位性质已存在')
                }
                console.log(num);
                $('#add-people').modal('hide');
                //alert("请求失败！");
            }
        });

    })


    //修改操作
    $('#dateTables').on('click','.alter',function(e){
        //获取要传的ID;
        e = e || window.event;
        var tar = e.target || e.srcElement;
        var id = $(tar).parent().parent().children().eq(1).html();
        console.log(id);
       //点击提交按钮
       $('#alter-people .btn-primary').one('click',function(){
           console.log(id);
            var txt = $('#alter-people .add-input').val();
           $.ajax({
               type: "post",
               url: "http://192.168.1.113/BEEWebAPI/api/SecondUnit/EditUnitNature",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
               data: {
                   "f_id": id,
                   "f_UnitNatureName": txt,
                   "f_Order": 0,
                   "userID": "string"
               },
               cache: false,
               async : false,
               dataType: "json",
               success: function (data)

               {
                   console.log(data);
                   $('#alter-people').modal('hide');
                   ajaxSuccess();

               },
               error:function (XMLHttpRequest, textStatus, errorThrown) {
                   alert("请求失败！");
               }
           });
       })

    })

    //删除操作

    $('#dateTables').on('click','.remove',function(){
        //获取要传的ID;
        var id = parseInt($(this).parent().parent().children().eq(1).html());
        console.log(id)
        //点击提交按钮
        $('#remove-people .btn-primary').one('click',function(){
            $.ajax({
                type: "post",
                url: "http://192.168.1.113/BEEWebAPI/api/SecondUnit/DelUnitNature",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                data:{
                    "f_id": id,
                    "f_UnitNatureName": "string",
                    "f_Order": 0,
                    "userID": "string"
                },
                cache: false,
                async : false,
                dataType: "json",
                success: function (data)

                {
                    $('#remove-people').modal('hide');
                    ajaxSuccess();
                },
                error:function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("请求失败！");
                }
            });
        })

    })
});

//获取后台数据
function alarmHistory(){
    dataArr=[];
    $.ajax({
        type:'get',
        url:'http://192.168.1.113/BEEWebAPI/api/SecondUnit/GetAllUnitNature',
        async:false,
        beforeSend:function(){
            $('.main-contents-table').children('img').show();
        },
        success:function(result){
            for(var i=0;i<result.length;i++){
                dataArr.push(result[i]);
            }
        }
    });
}

//给表格加入数据
function setData(){
    if(dataArr && dataArr.length>0){
        _table.fnAddData(dataArr);
        _table.fnDraw();

    }
}
//隐藏ID属性
function hiddrenId(){
    $('.theHidden').css({
        display:'none'
    })
}
//调用对应接口成功后
function ajaxSuccess(){

    $('#theLoading').modal('show');
    _table.fnClearTable();
    alarmHistory();
    setData();
    hiddrenId();
    $('#theLoading').modal('hide');
}
