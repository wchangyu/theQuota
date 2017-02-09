/**
 * Created by admin on 2017/2/9.
 */

$(document).ready(function(){
    var rotateNum = 1;
    //点击下拉框时
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
    //下拉框中内容被点击时
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
    var table = $('#dateTables').DataTable({
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
        'ajax': './data/araming.json',
        'columns':[
            {
                title:'人员类别',
                data:'name'

            },
            {
                title:'能耗类型',
                data:'alarmType'

            },
            {
                title:'月指标',
                data:'warningCondition'

            },
            {
                title:'年指标',
                data:'warningCondition'

            },
            {
                title:'编辑操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#alter-type'>修改</button>"
            },
            {
                title:'删除操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn'>删除</button>"
            },
        ]
    })
});