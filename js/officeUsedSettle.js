
$(document).ready(function(){
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
        'columns':[
            {
                title:'单位',
                data:'f_CycleName'

            },
            {
                title:'结算时间段',
                data:'pK_MTReadCycle',
                class:'theHidden'

            },
            {
                title:'因交费用',
                data:'f_ReadCycleST'

            },
            {
                title:'特殊加减费用',
                data:'f_ClearingDate',

            },
            {
                title:'百分比减免',
                data:'f_ClearingDate',

            },
            {
                title:'实收费用',
                data:'f_ClearingDate',

            },
            {
                title:'缴费状态',
                data:'f_ClearingDate',

            },
            {
                title:'修改加减费用',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn create-data' >修改</button>"
            },
            {
                title:'查看详情',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn change-data' data-toggle='modal' data-target='#remove-deploy'>查看</button>"
            },
            {
                title:'超额用能收费单',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn' >生成</button>"
            }
        ]
    });
});



//选择日期插件
$('.chooseDate').datepicker(
    {
        language:  'zh-CN',
        todayBtn: 1,
        todayHighlight: 1,
        format: 'yyyy-mm-dd'
    }
);