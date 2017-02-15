



$(document).ready(function(){

    $('.window-btn').on('click',function(){

        $('#add-unit').css({
            display:'block'
        })
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
    //定额数据
    var table3 = $('#dateTables3').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':false,
    });
    //定额列表
    var table4 = $('#dateTables4').DataTable({
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
        'ajax': './data/history.json',
        'columns':[
            {
                title:'类别',
                data:'time'

            },
            {
                title:'人数',
                data:'seeing'

            },
            {
                title:'电月指标',
                data:'seeing'
            } ,
            {
                title:'电月定额',
                data:'seeing'
            } ,
            {
                title:'电年指标',
                data:'seeing'
            } ,
            {
                title:'电年定额',
                data:'seeing'
            } ,
            {
                title:'是否人工修订标识',
                data:'seeing'
            } ,
            {
                title:'修改人数',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#amentCount'>修改</button>"
            },
            {
                title:'人工修订定额',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#revise-quota'>修订</button>"
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
                title:'能耗类型',
                data:'time'

            },
            {
                title:'手工调整值',
                data:'seeing'

            },
            {
                title:'启用标识',
                data:'seeing'
            } ,
            {
                title:'操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn'>删除</button>"
            },
        ]
    })
    var table2 = $('#dateTables2').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':false,
        'language': {

        },
        'buttons': [

        ],
        "dom":'B<"clear">lfrtip',
        //数据源
        'ajax': './data/history.json',
        'columns':[
            {
                title:'指标类别',
                data:'time'

            },
            {
                title:'能耗类别',
                data:'seeing'

            },
            {
                title:'人数',
                data:'seeing'
            } ,
            {
                title:'操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn'>删除</button>"
            },
        ]
    })
    var table = $('#dateTables').DataTable(

        {
            //文字，格式初始化

            "autoWidth": false,  //用来启用或禁用自动列的宽度计算
              //是否分页
            "destroy": true,//还原初始化了的datatable
            "pagingType":"full_numbers",
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
                'infoEmpty': '没有数据'
            },
            "dom":'B<"clear">lfrtip',
            'buttons': [

            ],
            //数据源
            'ajax': './data/araming.json',
            'columns':[
                {
                    title:'代码',
                    data:'serialNumber',
                },
                {
                    title:'单位名称',
                    data:'name'
                },
                {
                    title:'单位性质',
                    data:'alarmType'
                },
                {
                    title:'负责人姓名',
                    data:'warningCondition'
                },
                {
                    title:'负责人电话',
                    data:'atThisPointThedata'
                },
                {
                    title:'剩余额度',
                    data:'uniteRoom'
                },
                {
                    title:'单位专业',
                    data:'uniteRoom'
                },
                {
                    title:'用能调整系数',
                    data:'uniteRoom'
                },
                {
                    title:'手工调整是否启用',
                    data:'uniteRoom'
                },
                {
                    title:'单位房间',
                    data:'uniteRoom'
                },
                {
                    title:'查看备注',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#remarks'>查看</button>"
                },
                {
                    title:'定额操作',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#quota'>查看定额</button>"
                },
                {
                    title:'单位修改',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#alter-unit'>修改</button>"
                },
                {
                    title:'单位注销',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#myModal1'>注销</button>"
                },
                {
                    title:'手工调整操作',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn' data-toggle='modal' data-target='#adjust-deploy'>修改</button>"
                },
                {
                    title:'指标类别操作',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn ' data-toggle='modal' data-target='#index-class'>修改</button>"
                },
            ],
        }

    );

    var table5 = $('#dateTables5').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':false,
        'language': {

        },
        'buttons': [

        ],
        "dom":'B<"clear">lfrtip',
        //数据源
        'ajax': './data/history.json',
        'columns':[
            {
                title:'指标类别',
                data:'time'

            },
            {
                title:'能耗类别',
                data:'seeing'

            },
            {
                title:'人数',
                data:'seeing'
            } ,
            {
                title:'操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn'>删除</button>"
            },
        ]
    });
    var table7 = $('#dateTables7').DataTable({
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
        'ajax': './data/history.json',
        'columns':[
            {
                title:'能耗类型',
                data:'time'

            },
            {
                title:'手工调整值',
                data:'seeing'

            },
            {
                title:'启用标识',
                data:'seeing'
            } ,
            {
                title:'操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn'>删除</button>"
            },
        ]
    });
    var table8 = $('#dateTables8').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':false,
        'language': {

        },
        'buttons': [

        ],
        "dom":'B<"clear">lfrtip',
        //数据源
        'ajax': './data/history.json',
        'columns':[
            {
                title:'指标类别',
                data:'time'

            },
            {
                title:'能耗类别',
                data:'seeing'

            },
            {
                title:'人数',
                data:'seeing'
            } ,
            {
                title:'操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn'>删除</button>"
            },
        ]
    })
    $('#min, #max').keyup( function() {
        console.log('11');
        table.draw();
    } );
    var counter = 7;
    $('.adds').on( 'click', function () {
        alert('ok');
        table.row.add( [
            /*counter +'.1',
            counter +'.2',
            counter +'.3',
            counter +'.4',
            counter +'.5',
            counter +'.5',
            counter +'.5',
            counter +'.5'*/
        ] ).draw();
        counter ++;
    } );

    // Automatically add a first row of data
    var str = $('<input type="checkbox">');
    $('.Tcheckbox').prepend(str);
    $('#dateTables tbody').on('click', 'td .details-control', function () {
        var allData = [];
        $.ajax({
            type:'post',
            url:'./data/history.json',
            async: false,
            success:function(result){
                console.log(result);
                for(var i=0;i<result.data.length;i++){
                    allData.push(result.data[0]);
                    if(i==0){

                        console.log(allData);
                    }

                }

            }
        })
        //console.log(allData);["","","","",""];
        var tr = $(this).closest('tr');  //找到距离按钮最近的行tr;
        var row = table.row( tr );
        //console.log(row.data())  //araming.json的第一行数据  object{"":"","":"","":""}
        if ( row.child.isShown() ) {
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(allData) ).show();
            tr.addClass('shown');
        }
    } );

    $('.top-refer').on('click',function(){
        console.log('11');
       //$('#theLoading').css({
       //    display:'block'
       //})
    });

        // Event listener to the two range filtering inputs to redraw on input
})


function format ( d ) {
    var theader = '<table class="table">' +
        '<thead><tr><td>时间</td><td>编号</td><td>名字</td><td>报警类型</td><td>报警环境</td></tr></thead>';
    var theaders = '</table>';
    var tbodyer = '<tbody>'
    var tbodyers = '</tbody>';
    var str = '<tr><td>' + d[0].time +
        '</td><td>' + d[0].serialNumber +
        '</td><td>' + d[0].name +
        '</td><td>' + d[0].alarmType +
        '</td><td>' + d[0].warningCondition +
        '</td></tr>';
    for(var i=1;i< d.length;i++){
        str += '<tr><td>' + d[i].time +
            '</td><td>' + d[i].serialNumber +
            '</td><td>' + d[i].name +
            '</td><td>' + d[i].alarmType +
            '</td><td>' + d[i].warningCondition +
            '</td></tr>'
    }
    return theader + tbodyer + str + tbodyers + theaders;
}

