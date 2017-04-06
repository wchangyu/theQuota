/**
 * Created by admin on 2017/2/15.
 */

$(document).ready(function(){

    //select 优化动画
    var rotateNum = 1;
    $(document).on('click', function () {
        if ($('.add-select-block').is(':hidden')) {
            $('.add-select-block').css({
                display: 'none'
            });
            rotateNum = 1;
            var num = rotateNum * 180;
            var string = num + 'deg';
            $('.add-input-select').children('div').css({
                'transform': 'rotate(' + string + ')'
            })
        }

    });
    $('.add-input-select').click(function (e) {
        $('.add-select-block').not($(this).parents('.add-input-father').children('.add-select-block')).css({
            display: 'none'
        });
        rotateNum++;
        var num = rotateNum * 180;
        var string = num + 'deg';
        console.log('bb');
        $(this).parents('.add-input-father').children('.add-select-block').slideToggle('fast');
        $(this).children('div').css({

            'transform': 'rotate(' + string + ')'
        })

        e.stopPropagation();

    });
    $('.add-select-block li').on('click',function(){
        var text = $(this).html();
        var num0 = $(this).attr('ids');
        var num1 = $(this).attr('factor');
        var num2 = $(this).attr('unit');
        $(this).parents('.add-input-father').children('.add-select-block').slideToggle();
        $(this).parents('.add-input-father').children('.add-input-block').children('.add-input-select').children('span').html(text);
        $(this).parents('.add-input-father').children('.add-input-block').children('.add-input-select').children('span').attr('ids',num0);
        $(this).parents('.add-input-father').children('.add-input-block').children('.add-input-select').children('span').attr('factor',num1);
        $(this).parents('.add-input-father').children('.add-input-block').children('.add-input-select').children('span').attr('unit',num2);
        rotateNum++;
        var num = rotateNum * 180;
        var string = num + 'deg';
        $(this).parents('.add-input-father').children('.add-input-block').children('.add-input-select').children('div').css({

            'transform':'rotate('+string+')'
        })
    });

    //初始化表格
    console.log(unitId[0])
    importantId = unitId[0];
    alarmHistory(unitId[0]);

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
        'columns':[
            {
                title:'选择',
                "targets": -1,
                "data": null,
                "defaultContent": "<input type='checkbox' class='tableCheck'/>"

            },
            {
                title:'本行ID',
                data:'pK_Meter',
                class:'theHidden'

            },
            {
                title:'本行关系',
                data:'pK_UnitMeter',
                class:'theHidden'

            },
            {
                title:'计量设备类型',
                data:'f_MeterTypeName'

            },
            {
                title:'能耗类型',
                data:'f_EnergyName'

            },
            {
                title:'仪表状态',
                data:'f_onlineName'

            },

            {
                title:'表号或代号',
                data:'f_mtNumber'

            },
            {
                title:'绑定楼宇',
                data:'pointerName'
            },
            {
                title:'计量区域',
                data:'f_MeasureArea'

            },
            {
                title:'绑定数采仪',
                data:'cNameT'

            },
            {
                title:'出场编号',
                data:'f_FactoryNumber'

            },
            {
                title:'倍率',
                data:'f_Rate'

            },
            {
                title:'建档日期',
                data:'f_FilingDT'

            },
            {
                title:'建档起数',
                data:'f_FilingNumber'

            },
            {
                title:'最后止数',
                data:'f_ReadEndNum'

            },
            {
                title:'抄表日期',
                data:'f_ReadET'

            },
            {
                title:'子账户标识',
                data:'f_ChildAccount',
                render:function(data, type, full, meta){
                    if(data == 0){
                        return '累加'
                    }else if(data == 1){
                        return '累减'
                    }else if(data ==2){
                        return '公摊'
                    }

                }

            },
            {
                title:'公摊比例',
                data:'f_EquallyShared'

            },
            {
                title:'安装位置',
                data:'f_InstalPosition'

            },
            {
                title:'操作',
                "data": 'f_ChildAccount',
                render:function(data, type, full, meta){
                    if(data == 0){
                        return  "<button class='top-btn remove' data-toggle='modal' data-target='#change-meter'>更换</button>"
                    }else if(data == 1){
                        return '无'
                    }else if(data ==2){
                        return  "<button class='top-btn remove' data-toggle='modal' data-target='#change-meter'>更换</button>"
                    }

                }
            }

        ]
    });

    _table = $('#dateTables').dataTable();
    //给表格添加后台获取到的数据
    setData();
    hiddrenId();

    //头部搜索功能

    $('.top-refer').on('click',function(){
        dataArr = [];
        var id = importantId;
        var energy = $('.refer-unit-table li').eq(0).find('select').val();
        var online = $('.refer-unit-table li').eq(1).find('select').val();
        var number0 =  $('.refer-unit-table li').eq(2).find('input').val();
        var number1 = 0;
        console.log(energy);
        if($(".refer-unit-table li input[type='checkbox']").is(':checked')){
            console.log('ok');
            number1 = -1
        }
        $.ajax({
            type:'get',
            url:IP + "/UnitMeter/GetUnitMeterByCondition",
            async:false,
            timeout:theTimes,
            data:{
                'PK_Unit':id,
                'F_MTEnergyType' : energy,
                'F_MTOnline' : online,
                'F_MTNumber' :number0,
                'F_CancelFlag':number1
            },
            beforeSend:function(){
                $('#theLoading').modal('show');
            },
            complete:function(){
                $('#theLoading').modal('hide');
            },
            success:function(result){

                $('#theLoading').modal('hide');
                console.log(result);
                for(var i=0;i<result.length;i++){
                    dataArr.push(result[i]);
                }
                var num = dataArr.length;
                for(var i=0; i<num; i++){
                    var num1 =  dataArr[i].f_mtEnergyType;
                    var num2 = dataArr[i].f_mtOnline;
                    var txt = getEnergyType(num1);
                    dataArr[i].f_EnergyName = txt;
                    var txt2 = getMtonline(num2);
                    dataArr[i].f_onlineName = txt2;
                }

                _table = $('#dateTables').dataTable();
                _table.fnClearTable();
                //给表格添加后台获取到的数据
                setData();
                hiddrenId();

            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {
                $('#theLoading').modal('hide');
                console.log(textStatus);

                if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                    ajaxTimeoutTest.abort();
                    myAlter("超时");
                }
                myAlter("请求失败！");
            },

        });
    });

    //累加子账户维护

    var table2 = $('#dateTables2').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':true,
        "sScrollY": '340px',
        "bPaginate": false,
        //"scrollCollapse": true,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 件',
            'zeroRecords': '没有数据',
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
            'search':'搜索:',
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
                "data": null,
                "class":'add-row',
                "defaultContent": '<img src="img/add-sign.png">'

            },
            {
                title:'id',
                data:'pK_Meter',
                class:'theHidden'
            },
            {
                title:'表名或代号',
                data:'f_mtNumber',
                class:'adjust-comment',
                render:function(data, type, full, meta){
                    return '<span title="'+data+'">'+data+'</span>'
                }
            },
            {
                title:'计量区域',
                data:'f_MeasureArea',
                class:'adjust-comment',
                render:function(data, type, full, meta){
                    return '<span title="'+data+'">'+data+'</span>'
                }
            }
        ]
    });

    var table3 = $('#dateTables3').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':false,
        "sScrollY": '340px',
        "bPaginate": false,
        //"scrollCollapse": true,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 件',
            'zeroRecords': '没有数据',
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
            'search':'搜索:',
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
                "data": null,
                "class":'add-row',
                "defaultContent": '<img src="img/minus-sign.png">'

            },
            {
                title:'id',
                data:'pK_Meter',
                class:'theHidden'

            },
            {
                title:'表号或代号',
                data:'f_mtNumber',
                class:'adjust-comment',
                render:function(data, type, full, meta){
                    return '<span title="'+data+'">'+data+'</span>'
                }
            },
            {
                title:'建档日期',
                data:'f_FilingDT',
                class:'adjust-comment',
                render:function(data, type, row, meta){
                    if(row.isBindingUnitMeter == 1){
                        return '<input  value="'+data+'" disabled="true"> '
                    }else if(row.f_mtOnline == 1){
                        return '<input  value="'+data+'" disabled="true"> '
                    }else if(row.f_mtOnline == 0){
                        return '<input class="chooseDate wait-change0" value="'+data+'"> '
                    }
                }
            },
            {

                title:'建档读数',
                data:'f_FilingNumber',
                class:'adjust-comment',
                render:function(data, type, row, meta){

                    if(row.isBindingUnitMeter == 1){
                        return '<input style="width:75px" value="'+data+'"  disabled="true"> '
                    }else if(row.f_mtOnline == 1){
                        return '<input style="width:75px" value="'+data+'" disabled="true"> '
                    }else if(row.f_mtOnline == 0){
                        return '<input class="wait-change1" style="width:75px" value="'+data+'"> '
                    }

                }

            }

        ]
    });

    var table4 = $('#dateTables4').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':true,
        "sScrollY": '340px',
        "bPaginate": false,
        //"scrollCollapse": true,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 件',
            'zeroRecords': '没有数据',
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
            'search':'搜索:',
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
                "targets": -1,
                "data": null,
                "defaultContent": "<input type='checkbox' class='tableCheck'/>"
            },
            {
                title:'id',
                data:'key',
                class:'theHidden'
            },
            {
                title:'楼宇名称',
                data:'valueStr',
                class:'adjust-comment',
                render:function(data, type, full, meta){
                    return '<span title="'+data+'">'+data+'</span>'
                }
            }
        ]
    });


    $('.top-btn1').on('click',function(){

        $('#accum-preseve .add-title').html('累加子账户维护');

        var id = importantId;

        setTimeout(function(){
            $.ajax({
                type: 'get',
                url: IP + "/UnitMeter/GetAddMeterByUnitID",
                async: false,
                timeout: theTimes,
                data:{
                    unitID:id
                },
                beforeSend: function () {
                    $('#theLoading').modal('show');
                },

                complete: function () {

                },
                success: function (data) {
                    $('#theLoading').modal('hide');
                    console.log(data);
                    waitArr = data.waitMeters;
                    pointArr = data.meterPointers;
                    selectArr = data.selectMeters;
                    buildArr = data.meterPointers;

                    leftArr = waitArr;

                    _table = $('#dateTables2').dataTable();
                    _table.fnClearTable();
                    setDatas(waitArr);

                    _table = $('#dateTables3').dataTable();
                    _table.fnClearTable();
                    setDatas(selectArr);



                    selectNum = selectArr.length;

                    for(var i=0 ; i<selectNum; i++){
                        $('#dateTables3 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
                    }

                    console.log(buildArr)
                    _table = $('#dateTables4').dataTable();
                    _table.fnClearTable();
                    setDatas(buildArr);



                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#theLoading').modal('hide');
                    console.log(textStatus);

                    if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }
                    myAlter("请求失败！");
                }
            });
        },300)

        //获取待选计量设备列表





        $('#accum-preseve .btn-primary').off('click');
        $('#accum-preseve .btn-primary').on('click',function(){

            $.ajax({
                type: 'post',
                url: IP + "/UnitMeter/PostAddOrSubtractMeter",
                async: false,
                timeout: theTimes,
                data:{
                    "pK_Unit": id,
                    "f_ChildAccount": 0,
                    "selectMeters":selectArr,
                    "userID": userName
                },
                beforeSend: function () {

                },

                complete: function () {

                },
                success: function (data) {
                    console.log(data);
                    $('#accum-preseve').modal('hide');
                    if(data == 1){
                        myAlter('参数错误')
                    }else if(data == 3){
                        myAlter('执行失败')
                    }else if(data == 5){
                        var html='';
                        for(var i=0; i<data.meterNumbers.length;i++){
                            html+=data.memeterNumbers[i];
                        }
                        myAlter(html + '已在其他二级单位存在');
                    }
                    _table = $('#dateTables').dataTable();
                    _table.fnClearTable();
                    alarmHistory(importantId);
                    setData();
                    hiddrenId();

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#theLoading').modal('hide');
                    $('#accum-preseve').modal('hide');
                    console.log(textStatus);

                    if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }
                    myAlter("请求失败！");
                }
            });
        });
    });

    //累减子账户维护

    $('.top-btn2').on('click',function(){

        $('#accum-preseve  .add-title').html('累减子账户维护');
        var id = importantId;
        //获取待选计量设备列表

        setTimeout(function(){
            $.ajax({
                type: 'get',
                url: IP + "/UnitMeter/GetSubtractMeterByUnitID",
                async: false,
                timeout: theTimes,
                data:{
                    unitID:id
                },
                beforeSend: function () {
                    $('#theLoading').modal('show');
                },

                complete: function () {

                },
                success: function (data) {
                    $('#theLoading').modal('hide');
                    console.log(data);
                    waitArr = data.waitMeters;
                    pointArr = data.meterPointers;
                    selectArr = data.selectMeters;
                    buildArr = data.meterPointers;

                    leftArr = waitArr;

                    _table = $('#dateTables2').dataTable();
                    _table.fnClearTable();
                    setDatas(waitArr);

                    _table = $('#dateTables3').dataTable();
                    _table.fnClearTable();
                    setDatas(selectArr);



                    selectNum = selectArr.length;

                    for(var i=0 ; i<selectNum; i++){
                        $('#dateTables3 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
                    }

                    console.log(buildArr)
                    _table = $('#dateTables4').dataTable();
                    _table.fnClearTable();
                    setDatas(buildArr);



                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#theLoading').modal('hide');
                    console.log(textStatus);

                    if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }
                    myAlter("请求失败！");
                }
            });
        },300);



        $('#accum-preseve .btn-primary').off('click');
        $('#accum-preseve .btn-primary').on('click',function(){

            $.ajax({
                type: 'post',
                url: IP + "/UnitMeter/PostAddOrSubtractMeter",
                async: false,
                timeout: theTimes,
                data:{
                    "pK_Unit": id,
                    "f_ChildAccount": 1,
                    "selectMeters":selectArr,
                    "userID": userName
                },
                beforeSend: function () {

                },

                complete: function () {

                },
                success: function (data) {
                    console.log(data);
                    $('#accum-preseve').modal('hide');
                    if(data == 1){
                        myAlter('参数错误')
                    }else if(data == 3){
                        myAlter('执行失败')
                    }else if(data == 5){
                        var html='';
                        for(var i=0; i<data.meterNumbers.length;i++){
                            html+=data.memeterNumbers[i];
                        }
                        myAlter(html + '已在其他二级单位存在');
                    }
                    _table = $('#dateTables').dataTable();
                    _table.fnClearTable();
                    alarmHistory(importantId);
                    setData();
                    hiddrenId();
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#theLoading').modal('hide');
                    $('#accum-preseve').modal('hide');
                    console.log(textStatus);

                    if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }
                    myAlter("请求失败！");
                }
            });
        });
    });

    //公摊比例账户维护
    var table5 = $('#dateTables5').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':true,
        "sScrollY": '340px',
        "bPaginate": false,
        //"scrollCollapse": true,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 件',
            'zeroRecords': '没有数据',
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
            'search':'搜索:',
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
                "data": null,
                "class":'add-row',
                "defaultContent": '<img src="img/add-sign.png">'

            },
            {
                title:'id',
                data:'pK_Meter',
                class:'theHidden'
            },
            {
                title:'表名或代号',
                data:'f_mtNumber',
                class:'adjust-comment',
                render:function(data, type, full, meta){
                    return '<span title="'+data+'">'+data+'</span>'
                }
            },
            {
                title:'计量区域',
                data:'f_MeasureArea',
                class:'adjust-comment',
                render:function(data, type, full, meta){
                    return '<span title="'+data+'">'+data+'</span>'
                }
            }
        ]
    });

    var table6 = $('#dateTables6').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':false,
        "sScrollY": '340px',
        "bPaginate": false,
        //"scrollCollapse": true,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 件',
            'zeroRecords': '没有数据',
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
            'search':'搜索:',
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
                "data": null,
                "class":'add-row',
                "defaultContent": '<img src="img/minus-sign.png">'

            },
            {
                title:'id',
                data:'pK_Meter',
                class:'theHidden'

            },
            {
                title:'表号或代号',
                data:'f_mtNumber',
                class:'adjust-comment',
                render:function(data, type, full, meta){
                    return '<span title="'+data+'">'+data+'</span>'
                }
            },
            {
                title:'建档日期',
                data:'f_FilingDT',
                class:'adjust-comment',
                render:function(data, type, row, meta){
                    if(row.isBindingUnitMeter == 1){
                        return '<input  value="'+data+'" disabled="true"> '
                    }else if(row.f_mtOnline == 1){
                        return '<input  value="'+data+'" disabled="true"> '
                    }else if(row.f_mtOnline == 0){
                        return '<input class="chooseDate wait-change0" value="'+data+'"> '
                    }
                }
            },
            {
                title:'建档读数',
                data:'f_FilingNumber',
                class:'adjust-comment',
                render:function(data, type, row, meta){

                    if(row.isBindingUnitMeter == 1){
                        return '<input style="width:75px" value="'+data+'"  disabled="true"> '
                    }else if(row.f_mtOnline == 1){
                        return '<input style="width:75px" value="'+data+'" disabled="true"> '
                    }else if(row.f_mtOnline == 0){
                        return '<input class="wait-change1" style="width:75px" value="'+data+'"> '
                    }
                }
            },
            {
                title:'公摊比例',
                data:'f_EquallyShared',
                class:'adjust-comment',
                render:function(data, type, row, meta){

                    if(row.isBindingUnitMeter == 1){

                            return '<input style="width:75px" value="'+data+'"  disabled="true"> '

                    }else {

                        if(data == 0){
                            return '<input class="wait-change2" style="width:75px" value=""> '
                        }else{
                            return '<input class="wait-change2" style="width:75px" value="'+data+'"> '
                        }

                    }
                }
            }

        ]
    });

    $('.top-btn3').on('click',function(){
        var id = importantId;
        setTimeout(function(){
            $.ajax({
                type: 'get',
                url: IP + "/UnitMeter/GetApportionMeterByUnitID",
                async: false,
                timeout: theTimes,
                data:{
                    unitID:id
                },
                beforeSend: function () {
                    $('#theLoading').modal('show');
                },

                complete: function () {

                },
                success: function (data) {
                    $('#theLoading').modal('hide');
                    console.log(data);
                    waitArr = data.waitMeters;
                    pointArr = data.meterPointers;
                    selectArr = data.selectMeters;
                    buildArr = data.meterPointers;

                    leftArr = waitArr;

                    _table = $('#dateTables5').dataTable();
                    _table.fnClearTable();
                    setDatas(waitArr);

                    _table = $('#dateTables6').dataTable();
                    _table.fnClearTable();
                    setDatas(selectArr);



                    selectNum = selectArr.length;

                    for(var i=0 ; i<selectNum; i++){
                        $('#dateTables6 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
                    }

                    console.log(buildArr)
                    _table = $('#dateTables4').dataTable();
                    _table.fnClearTable();
                    setDatas(buildArr);



                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#theLoading').modal('hide');
                    console.log(textStatus);

                    if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }
                    myAlter("请求失败！");
                }
            });
        },300)


        $('#accum-shared .btn-primary').off('click');
        $('#accum-shared .btn-primary').on('click',function(){
            //检验是否填写正确
            if(!checkedNull2('#accum-shared')){
                console.log('ii');
                return false;
            };

            $.ajax({
                type: 'post',
                url: IP + "/UnitMeter/PostApportionMeter",
                async: false,
                timeout: theTimes,
                data:{
                    "pK_Unit": id,
                    "f_ChildAccount": 2,
                    "selectMeters":selectArr,
                    "userID": userName
                },
                beforeSend: function () {

                },

                complete: function () {

                },
                success: function (data) {
                    console.log(data);
                    $('#accum-shared').modal('hide');
                    if(data == 1){
                        myAlter('参数错误')
                    }else if(data == 3){
                        myAlter('执行失败')
                    }else if(data == 5){
                        var html='';
                        for(var i=0; i<data.meterNumbers.length;i++){
                            html+=data.memeterNumbers[i];
                        }
                        myAlter(html + '公摊表分配比例超额');

                    }
                    _table = $('#dateTables').dataTable();
                    _table.fnClearTable();
                    alarmHistory(importantId);
                    setData();
                    hiddrenId();
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#theLoading').modal('hide');
                    $('#accum-shared').modal('hide');
                    console.log(textStatus);

                    if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }
                    myAlter("请求失败！");
                }
            });
        });
    });

    //注销计量设备


    $('.top-btn4').one('click',function(){
        setTimeout(function(){
            var table1 = $('#dateTables1').DataTable({
                "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                //是否分页
                "destroy": false,//还原初始化了的datatable
                "paging":false,
                "ordering": false,
                'searching':false,
                "sScrollY": '380px',
                "bPaginate": false,
                "scrollCollapse": true,
                'language': {
                    'emptyTable': '没有数据',
                    'loadingRecords': '加载中...',
                    'processing': '查询中...',
                    'lengthMenu': '每页 _MENU_ 件',
                    'zeroRecords': '没有数据',
                    'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
                    'search':'搜索:',
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
                        title:'表名或表号',
                        data:'f_mtNumber'

                    },
                    {
                        title:'本行ID',
                        data:'pK_Meter',
                        class:'theHidden'

                    },
                    {
                        title:'能耗类型',
                        data:'f_mtEnergyType',
                        render:function(data, type, row, meta){
                            var energyName = getEnergyType(data);
                            return energyName;
                        }
                    },
                    {
                        title:'仪表状态',
                        data:'f_mtOnline',
                        render:function(data, type, row, meta){
                            if(data == 0){
                                return '手抄表';
                            }else if(data == 1){
                                return '在线表'
                            }

                        }
                    },
                    {
                        title:'子账户标识',
                        data:'f_ChildAccount',
                        render:function(data, type, full, meta){
                            if(data == 0){
                                return '累加'
                            }else if(data == 1){
                                return '累减'
                            }else if(data ==2){
                                return '公摊'
                            }

                        }

                    },
                    {
                        title:'抄表起始日期',
                        data:'f_ReadET'

                    },
                    {
                        title:'抄表起数',
                        data:'f_ReadEndNum'

                    },
                    {
                        title:'抄表结束日期',
                        data:'meterEndDate',
                        class:'adjust-comment',
                        render:function(data, type, row, meta){
                            if(row.f_mtOnline == 1){
                                return '<input  value="'+data+'" disabled="true"> '
                            }else if(row.f_mtOnline == 0){
                                return '<input class="chooseDate wait-push0 wait-push" txt="抄表结束日期" value=""> '
                            }
                        }
                    },
                    {
                        title:'设备终止读数',
                        data:'meterEndNumber',
                        class:'adjust-comment',
                        render:function(data, type, row, meta){
                            if(row.f_mtOnline == 1){
                                return '<input style="width:75px" value="'+data+'" disabled="true"> '
                            }else if(row.f_mtOnline == 0){
                                return '<input  style="width:75px" txt="设备终止读数" class="wait-push1 wait-push" value=""> '
                            }
                        }

                    },
                    {
                        title:'圈数',
                        data:'f_CycleNum',
                        class:'adjust-comment',
                        render:function(data, type, row, meta){
                            if(row.f_mtOnline == 1){
                                return '<input style="width:45px" value="'+data+'" disabled="true"> '
                            }else if(row.f_mtOnline == 0){
                                return '<input  style="width:45px" txt="圈数" class="wait-push2 wait-push" value="0"> '
                            }
                        }

                    },
                    {
                        title:'抄表人',
                        data:'f_ReadPerson',
                        class:'adjust-comment',
                        render:function(data, type, row, meta){
                            if(row.f_mtOnline == 1){
                                return '<input style="width:75px" value="" disabled="true"> '
                            }else if(row.f_mtOnline == 0){
                                return '<input  style="width:75px" txt="抄表人" class="wait-push3 wait-push" value=""> '
                            }
                        }

                    },
                    {
                        title:'操作',
                        data:null,
                        render:function(data, type, row, meta){
                            if(row.f_ChildAccount == 1){
                                if(row.cancelMeterSubtract != null){
                                    return '<span>已绑定累加表（'+ row.cancelMeterSubtract.f_UnitName +'）</span>';
                                }else{
                                    return '无'
                                }

                            }else if(row.f_ChildAccount == 0){
                                if(row.cancelMeterSubtract != null){
                                    var id = 'unit-name'+ row.pK_Meter;

                                    return '  <input id="'+id+'" style="width:18px;height:19px;display:inline-block" value="" class="handle" type="checkbox"><label for="'+id+'" style="margin-left:5px;">是否注销累减表（'+ row.cancelMeterSubtract.f_UnitName+'）</label> ';
                                }else{
                                    return '无'
                                }

                            }else if(row.f_ChildAccount == 2){
                                var length = row.cancelMeterApportions.length;
                                if(length != 0){
                                      var html = '';
                                      for(var i=0 ; i<length; i++){
                                          html+='<label for="unit-name" style="margin-right:5px;">'+ row.cancelMeterApportions[i].f_UnitName+':</label><input type="text" txt="公摊比例" class="ratio wait-push" style="width:45px" value="'+row.cancelMeterApportions[i].f_EquallyShared+'">';
                                      }
                                    return html
                                }else{
                                    return '无'
                                }
                            }
                        }

                    },
                    {
                        title:'注销原因',
                        "targets": -1,
                        "data": null,
                        "class":'theReson',
                        "defaultContent": '<textarea name="yj" txt="注销原因" cols="30" rows="2" style="resize:none;" class="wait-push4 wait-push">'
                    }
                ]
            });
        },200)
    });

    $('.top-btn4').on('click',function(){
        logoutArr = [];
        var length = $('#dateTables .tableCheck').length;
        console.log(length);
        var idArr = [];
        for(var i=0; i<length; i++){
            if( $('#dateTables .tableCheck').eq(i).is(':checked')){
                var id = parseInt($('#dateTables .tableCheck').eq(i).parent().next().html());
                var id1 = $('#dateTables .tableCheck').eq(i).parent().next().next().html();
                console.log(id1);
                var obj = {Key:id1,ValueInt:id};

                idArr.push(obj);
            }
        }
        console.log(idArr);
        if(idArr.length == 0){
            myAlter('请选择注销项目');
            return false;
        }
        setTimeout(function(){


            $.ajax({
                type: 'get',
                url: IP + "/UnitMeter/GetCancelMeterModels",
                async: false,
                timeout: theTimes,
                data:{
                    "meterGet.pK_Unit": importantId,
                    "meterGet.pK_Meters": idArr
                },
                beforeSend: function () {
                    $('#theLoading').modal('show');
                },

                complete: function () {

                },
                success: function (data) {
                    $('#theLoading').modal('hide');
                    console.log(data);
                    logoutArr = data.cancelMeterModels;
                    var alterText = data.validateNumber;
                    if(alterText == 1){
                        myAlter('注销失败，请联系管理员');
                        $('#cancel-meter').modal('hide');
                        return false;
                    };
                    if(alterText == 3){
                        myAlter('注销失败');
                        $('#cancel-meter').modal('hide');
                        return false;
                    };

                    _table = $('#dateTables1').dataTable();
                    _table.fnClearTable();
                    setDatas(logoutArr);
                    hiddrenId();

                    $('.chooseDate').datepicker(
                        {
                            language:  'zh-CN',
                            todayBtn: 1,
                            todayHighlight: 1,
                            format: 'yyyy-mm-dd'
                        }
                    );
                    tableChanges();

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#theLoading').modal('hide');
                    console.log(textStatus);

                    if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }
                    myAlter("请求失败！");
                }
            });

            $('#cancel-meter .btn-primary').off('click');
            $('#cancel-meter .btn-primary').on('click',function(){

                //判断输入是否正确
                if(!checkedNull1('#cancel-meter')){
                    console.log('ii');
                    return false;
                };
                var postData = {};
                postData.cancelMeterModels= logoutArr;
                postData.pK_Unit = importantId;
                postData.userID = userName;

                console.log(postData);
                $.ajax({
                    type: 'post',
                    url: IP + "/UnitMeter/PostCancelMeter",
                    async: false,
                    timeout: theTimes,
                    data:postData,
                    beforeSend: function () {

                    },

                    complete: function () {

                    },
                    success: function (data) {
                        $('#theLoading').modal('hide');
                        $('#cancel-meter').modal('hide');

                        console.log(data);
                        if(data.validateNumber == 5){
                            var arr = data.f_mtNumberInfos;

                            for(var i=0; i<arr.length; i++){

                            }
                        }
                        _table = $('#dateTables').dataTable();
                        _table.fnClearTable();
                        alarmHistory(importantId);
                        setData();
                        hiddrenId();

                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $('#theLoading').modal('hide');
                        $('#cancel-meter').modal('hide');
                        console.log(textStatus);

                        if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                            ajaxTimeoutTest.abort();
                            myAlter("超时");
                        }
                        myAlter("请求失败！");
                    }
                })
            });

        },300)


    });

    //更换计量设备

    var table7 = $('#dateTables7').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':true,
        "sScrollY": '340px',
        "bPaginate": false,
        //"scrollCollapse": true,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 件',
            'zeroRecords': '没有数据',
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
            'search':'搜索:',
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
                title:'id',
                data:'pK_Meter',
                class:'theHidden'
            },
            {
                title:'建档日期',
                data:'f_FilingDT',
                class:'theHidden'
            },
            {
                title:'建档起数',
                data:'f_FilingNumber',
                class:'theHidden'
            },
            {
                title:'表名或代号',
                data:'f_mtNumber',
                class:'adjust-comment',
                render:function(data, type, full, meta){
                    return '<span title="'+data+'">'+data+'</span>'
                }
            },
            {
                title:'计量区域',
                data:'f_MeasureArea',
                class:'adjust-comment',
                render:function(data, type, full, meta){
                    return '<span title="'+data+'">'+data+'</span>'
                }
            }
        ]
    });

    $('#dateTables').on('click','.remove',function(){
        //获取本行ID
        var id = $(this).parent().parent().children().eq(1).html();
        var dataObj = {};
        var postData = {};
        console.log(id);
        var idArr = [];


        var id1 = $(this).parent().parent().children().eq(2).html();
        console.log(id1);
        var obj = {Key:id1,ValueInt:id};

        idArr.push(obj);


        $.ajax({
            type: 'get',
            url: IP + "/UnitMeter/GetChangeMeterModel",
            async: false,
            timeout: theTimes,
            data:{
                'meterGet.pK_Unit': importantId,
                'meterGet.pK_Meters' : idArr
            },
            beforeSend: function () {
                $('#theLoading').modal('show');
            },

            complete: function () {

            },
            success: function (data) {
                $('#theLoading').modal('hide');
                console.log(data);
                var alterText = data.validateNumber;
                if(alterText == 1){
                    myAlter('注销失败，请联系管理员');
                    $('#change-meter').modal('hide');
                    return false;
                };
                if(alterText == 3){
                    myAlter('注销失败');
                    $('#change-meter').modal('hide');
                    return false;
                };

                dataObj = data.cancelMeterModels[0];
                console.log(dataObj);

                var tableArr = [];

                $('.ament-data').eq(0).find('span').html(dataObj.f_mtNumber);
                var type = dataObj.f_mtEnergyType;
                var typeName = getEnergyType(type);
                $('.ament-data').eq(1).find('span').html(typeName);

                var childNum = dataObj.f_ChildAccount;
                var childTxt;
                if(childNum == 0){
                    childTxt = '累加'
                }else if(childNum == 1){
                    childTxt = '累减'
                }else if(childNum == 2){
                    childTxt = '公摊'
                }
                $('.ament-data').eq(2).find('span').html(childTxt);

                $('#change-meter .add-input').eq(0).val(dataObj.f_ReadET);
                $('#change-meter .add-input').eq(1).val(dataObj.f_ReadEndNum);

                if(dataObj.f_mtOnline == 0){
                    $('#change-meter .add-input').eq(3).val('');
                }else{
                    $('#change-meter .add-input').eq(3).val(dataObj.meterEndNumber);
                }

                $('#change-meter .add-input').eq(2).val(dataObj.meterEndDate);
                $('#change-meter .add-input').eq(4).val(dataObj.f_CycleNum);
                $('#change-meter .add-input').eq(5).val(dataObj.f_ReadPerson);


                $('.choose-num').off('click');
                $('.choose-num').on('click',function(){

                    if(dataObj.f_ChildAccount == 0){
                        $.ajax({
                            type: 'get',
                            url: IP + "/UnitMeter/GetAddMeterByUnitID",
                            async: false,
                            timeout: theTimes,
                            data:{
                                unitID:importantId
                            },
                            beforeSend: function () {
                                $('#theLoading').modal('show');
                            },

                            complete: function () {

                            },
                            success: function (data) {
                                $('#theLoading').modal('hide');
                                console.log(data);
                                tableArr = data.waitMeters;

                            },
                            error: function (XMLHttpRequest, textStatus, errorThrown) {
                                $('#theLoading').modal('hide');
                                console.log(textStatus);

                                if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                                    ajaxTimeoutTest.abort();
                                    myAlter("超时");
                                }
                                myAlter("请求失败！");
                            }
                        });
                    }else if(dataObj.f_ChildAccount == 1){
                        $.ajax({
                            type: 'get',
                            url: IP + "/UnitMeter/GetSubtractMeterByUnitID",
                            async: false,
                            timeout: theTimes,
                            data:{
                                unitID:importantId
                            },
                            beforeSend: function () {
                                $('#theLoading').modal('show');
                            },

                            complete: function () {

                            },
                            success: function (data) {
                                $('#theLoading').modal('hide');
                                console.log(data);
                                tableArr = data.waitMeters;

                            },
                            error: function (XMLHttpRequest, textStatus, errorThrown) {
                                $('#theLoading').modal('hide');
                                console.log(textStatus);

                                if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                                    ajaxTimeoutTest.abort();
                                    myAlter("超时");
                                }
                                myAlter("请求失败！");
                            }
                        });
                    }else if(dataObj.f_ChildAccount == 2){
                        $.ajax({
                            type: 'get',
                            url: IP + "/UnitMeter/GetApportionMeterByUnitID",
                            async: false,
                            timeout: theTimes,
                            data:{
                                unitID:importantId
                            },
                            beforeSend: function () {
                                $('#theLoading').modal('show');
                            },

                            complete: function () {

                            },
                            success: function (data) {
                                $('#theLoading').modal('hide');
                                console.log(data);
                                tableArr = data.waitMeters;

                            },
                            error: function (XMLHttpRequest, textStatus, errorThrown) {
                                $('#theLoading').modal('hide');
                                console.log(textStatus);

                                if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                                    ajaxTimeoutTest.abort();
                                    myAlter("超时");
                                }
                                myAlter("请求失败！");
                            }
                        });
                    }

                    console.log(tableArr);
                    _table = $('#dateTables7').dataTable();
                    _table.fnClearTable();

                    setDatas(tableArr);
                    hiddrenId();

                    $('#dateTables7 tbody').on('click','tr',function(){
                        $('#dateTables7 tr').removeClass('onFocus');
                        $(this).addClass('onFocus');

                    });


                });

                $('#choose-meter .btn-primary').off('click');

                $('#choose-meter .btn-primary').on('click',function(){
                    if($('.onFocus').length == 0){
                        myAlter('请选择仪表后进行提交');
                        return false;
                    }
                    var id = $('.onFocus td').eq(0).html()
                    var date = $('.onFocus td').eq(1).html();
                    var num = $('.onFocus td').eq(2).html();
                    var name = $('.onFocus td').eq(3).find('span').html();

                    $('#change-meter .add-input').eq(6).val(name);
                    $('#change-meter .add-input').eq(6).attr('ids',id);
                    $('#change-meter .add-input').eq(7).val(date);
                    $('#change-meter .add-input').eq(8).val(num);

                    $('#choose-meter').modal('hide');

                })

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#theLoading').modal('hide');
                console.log(textStatus);
                $('#choose-meter').modal('hide');
                if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                    ajaxTimeoutTest.abort();
                    myAlter("超时");
                }
                myAlter("请求失败！");
                $('#change-meter .add-input').val('');
            }
        });

        $('#change-meter .btn-primary').off('click');
        $('#change-meter .btn-primary').on('click',function(){
            //判断输入是否正确
            if(!checkedNull('#change-meter')){
                return false;
            };

            dataObj.meterEndDate = $('#change-meter .add-input').eq(2).val();
            dataObj.meterEndNumber = $('#change-meter .add-input').eq(3).val();

            dataObj.f_CycleNum = $('#change-meter .add-input').eq(4).val();
            dataObj.f_ReadPerson = $('#change-meter .add-input').eq(5).val();

            dataObj.newPK_Meter = $('#change-meter .add-input').eq(6).attr('ids');
            dataObj.newFilingDT = $('#change-meter .add-input').eq(7).val();
            dataObj.newFilingNumber = $('#change-meter .add-input').eq(8).val();

            dataObj.f_CancelComment = $('#change-meter .add-input').eq(9).val();

            postData.cancelMeterModels= [];
            postData.cancelMeterModels.push(dataObj);
            postData.pK_Unit = importantId;
            postData.userID = userName;

            console.log(dataObj);
            console.log(postData);

            $.ajax({
                type: 'post',
                url: IP + "/UnitMeter/PostChangeMeter",
                async: false,
                timeout: theTimes,
                data:postData,
                beforeSend: function () {

                },

                complete: function () {

                },
                success: function (data) {
                    $('#theLoading').modal('hide');
                    $('#change-meter').modal('hide');
                    console.log(data);

                    _table = $('#dateTables').dataTable();
                    _table.fnClearTable();
                    alarmHistory(importantId);
                    setData();
                    hiddrenId();

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#theLoading').modal('hide');
                    console.log(textStatus);

                    if (textStatus == 'timeout') {//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }
                    myAlter("请求失败！");
                }
            })
            $('#change-meter .add-input').val('');
        });



    });





});



var waitArr = [];
var pointArr = [];
var selectArr = [];
var buildArr = [];
var selectNum = 0;

var leftArr = [];
//注销弹窗中的table
var logoutArr = [];

//二级单位搜索功能
$(function(){
    // search-test-inner --->  最外层div
    // search-value --->  input 输入框
    // search-value-list --->  搜索结果显示div
    // search-li --->  搜索条目
    new SEARCH_ENGINE("search-test-inner0","search-value0","search-value-list0","search-li0");


});

$('.show-all-unit').on('click',function(){
    $('.search-value-list0').css({
        display:'none'
    });
    $('#ul1').css({
        display:'block'
    });

    //$('.search-value0').val('');
    //$('.search-value0').attr('placeHolder','请输入单位名称进行搜索')
});

//点击左侧添加按钮


    $('#dateTables2 tbody').on('click', 'td.add-row', function () {
        var id = $(this).parent().children().eq(1).html();
        console.log(leftArr);
        for(var i=0 ;i<leftArr.length; i++){
            if(id == leftArr[i].pK_Meter){


                selectArr.push(leftArr[i]);

                leftArr.splice(i,1);

                console.log(selectArr);


                _table = $('#dateTables2').dataTable();
                _table.fnClearTable();
                setDatas(leftArr);

                _table = $('#dateTables3').dataTable();
                _table.fnClearTable();
                setDatas(selectArr);

                for(var i=0 ; i<selectNum; i++){
                    $('#dateTables3 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
                }
                break;
            }


        }
        if(waitArr != leftArr){
            console.log('ok');
            for(var i=0 ;i<waitArr.length; i++) {
                if (id == waitArr[i].pK_Meter) {

                    waitArr.splice(i, 1);
                    console.log(waitArr);

                }
            }
        }
        $('.chooseDate').datepicker(
            {
                language:  'zh-CN',
                todayBtn: 1,
                todayHighlight: 1,
                format: 'yyyy-mm-dd'
            }
        );
        tableChange()

    } );

    $('#dateTables5 tbody').on('click', 'td.add-row', function () {
    var id = $(this).parent().children().eq(1).html();
    console.log(leftArr);
    for(var i=0 ;i<leftArr.length; i++){
        if(id == leftArr[i].pK_Meter){


            selectArr.push(leftArr[i]);

            leftArr.splice(i,1);

            console.log(selectArr);


            _table = $('#dateTables5').dataTable();
            _table.fnClearTable();
            setDatas(leftArr);

            _table = $('#dateTables6').dataTable();
            _table.fnClearTable();
            setDatas(selectArr);

            for(var i=0 ; i<selectNum; i++){
                $('#dateTables6 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
            }
            break;
        }


    }
    if(waitArr != leftArr){
        console.log('ok');
        for(var i=0 ;i<waitArr.length; i++) {
            if (id == waitArr[i].pK_Meter) {

                waitArr.splice(i, 1);
                console.log(waitArr);

            }
        }
    }
    $('.chooseDate').datepicker(
        {
            language:  'zh-CN',
            todayBtn: 1,
            todayHighlight: 1,
            format: 'yyyy-mm-dd'
        }
    );
    tableChange()

} );


//点击右侧删除按钮

    $('#dateTables3 tbody').on('click', 'td.add-row', function () {
        var id = $(this).parent().children().eq(1).html();
        for(var i=0 ;i<selectArr.length; i++){
            if(id == selectArr[i].pK_Meter){
                if(selectArr[i].isBindingUnitMeter == 0){
                    leftArr.push(selectArr[i]);
                   if(leftArr != waitArr){
                       waitArr.push(selectArr[i]);
                   }


                    selectArr.splice(i,1);


                    _table = $('#dateTables2').dataTable();
                    _table.fnClearTable();
                    setDatas(leftArr);

                    _table = $('#dateTables3').dataTable();
                    _table.fnClearTable();
                    setDatas(selectArr);

                    for(var i=0 ; i<selectNum; i++){
                        $('#dateTables3 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
                    }
                    break;
                }else{
                    return false;
                }

            }


        }

        $('.chooseDate').datepicker(
            {
                language:  'zh-CN',
                todayBtn: 1,
                todayHighlight: 1,
                format: 'yyyy-mm-dd'
            }
        );
        tableChange()
    } );

    $('#dateTables6 tbody').on('click', 'td.add-row', function () {
    var id = $(this).parent().children().eq(1).html();
    for(var i=0 ;i<selectArr.length; i++){
        if(id == selectArr[i].pK_Meter){
            if(selectArr[i].isBindingUnitMeter == 0){
                leftArr.push(selectArr[i]);
                if(leftArr != waitArr){
                    waitArr.push(selectArr[i]);
                }


                selectArr.splice(i,1);


                _table = $('#dateTables5').dataTable();
                _table.fnClearTable();
                setDatas(leftArr);

                _table = $('#dateTables6').dataTable();
                _table.fnClearTable();
                setDatas(selectArr);

                for(var i=0 ; i<selectNum; i++){
                    $('#dateTables6 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
                }
                break;
            }else{
                return false;
            }

        }


    }

    $('.chooseDate').datepicker(
        {
            language:  'zh-CN',
            todayBtn: 1,
            todayHighlight: 1,
            format: 'yyyy-mm-dd'
        }
    );
    tableChange()
} );



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
            var id = this.searchList.eq(i).attr("data-id");

            //存入数组
            this.searchMemberArray.push(pinyin + "&" + cnCharacter + "&" + id);
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
            s = 1;
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



                html += '<span class="name" ids="'+sArray[2]+'">' + sArray[1] + '</span>';
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
        buildClick();
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
                display:'none'
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

        });


    }
};

//显示全部按钮
$('.show-all').on('click',function(){

  leftArr = waitArr;
    var doms = $('.in');
    console.log(doms.attr('id'));
    if(doms.attr('id') == 'accum-preseve'){
        _table = $('#dateTables2').dataTable();
    }else if(doms.attr('id') == 'accum-shared'){
        _table = $('#dateTables5').dataTable();
    }

    _table.fnClearTable();
    setDatas(leftArr);

});

//添加全部按钮
$('.push-all').on('click',function(){

    if(waitArr != leftArr){
        console.log('ok');
        for(var i=0 ;i<leftArr.length; i++) {
            var id = leftArr[i].pK_Meter;
            for(var j=0; j<waitArr.length; j++){
                if (id == waitArr[j].pK_Meter) {

                    waitArr.splice(j, 1);

                }
            }

        }
    }

   for(var i=0; i<leftArr.length; i++){
       selectArr.push(leftArr[i]);
       leftArr.splice(i,1);
       i--;

   }
    var doms = $('.in');
    console.log(doms.attr('id'));
    if(doms.attr('id') == 'accum-preseve'){
        _table = $('#dateTables2').dataTable();
        _table.fnClearTable();
        setDatas(leftArr);

        _table = $('#dateTables3').dataTable();
        _table.fnClearTable();
        setDatas(selectArr);
        for(var i=0 ; i<selectNum; i++){
            $('#dateTables3 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
        }
    }else if(doms.attr('id') == 'accum-shared'){
        _table = $('#dateTables5').dataTable();
        _table.fnClearTable();
        setDatas(leftArr);

        _table = $('#dateTables6').dataTable();
        _table.fnClearTable();
        setDatas(selectArr);
        for(var i=0 ; i<selectNum; i++){
            $('#dateTables6 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
        }
    }


    $('.chooseDate').datepicker(
        {
            language:  'zh-CN',
            todayBtn: 1,
            todayHighlight: 1,
            format: 'yyyy-mm-dd'
        }
    );
    tableChange()
});

//删除全部按钮
$('.remove-all').on('click',function(){
   for(var i=0; i<selectArr.length; i++){
       if(selectArr[i].isBindingUnitMeter == 0){
           leftArr.push(selectArr[i]);
           if(leftArr != waitArr){
               waitArr.push(selectArr[i]);
           }

           selectArr.splice(i,1);
           i--;
       }
   }
    var doms = $('.in');
    console.log(doms.attr('id'));
    if(doms.attr('id') == 'accum-preseve'){
        _table = $('#dateTables2').dataTable();
        _table.fnClearTable();
        setDatas(leftArr);

        _table = $('#dateTables3').dataTable();
        _table.fnClearTable();
        setDatas(selectArr);
        for(var i=0 ; i<selectNum; i++){
            $('#dateTables3 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
        }
    }else if(doms.attr('id') == 'accum-shared'){
        _table = $('#dateTables5').dataTable();
        _table.fnClearTable();
        setDatas(leftArr);

        _table = $('#dateTables6').dataTable();
        _table.fnClearTable();
        setDatas(selectArr);
        for(var i=0 ; i<selectNum; i++){
            $('#dateTables6 tbody .add-row').eq(i).find('img').attr('src','img/minus-sign1.png');
        }
    }

    $('.chooseDate').datepicker(
        {
            language:  'zh-CN',
            todayBtn: 1,
            todayHighlight: 1,
            format: 'yyyy-mm-dd'
        }
    );
});

//右侧table进行修改操作时

function tableChange(){
    $('.wait-change1').on('blur',function(){
        var id = $(this).parents('tr').find('.theHidden').html();
        var txt = $(this).val();
        if(isNaN(txt) || txt < 0){
            myAlter('建档起数必须为非负数字');
            getFocus1($(this));
            return false;
        }
        for(var i=0; i<selectArr.length; i++){
            if(id == selectArr[i].pK_Meter){

                selectArr[i].f_FilingNumber = txt;
            }
        }
    });

    $('.wait-change0').on('blur',function(){
        var id = $(this).parents('tr').find('.theHidden').html();
        var txt = $(this).val();

        for(var i=0; i<selectArr.length; i++){
            if(id == selectArr[i].pK_Meter){

                selectArr[i].f_FilingDT = txt;
            }
        }
    });

    $('.wait-change2').on('blur',function(e){


        var id = $(this).parents('tr').find('.theHidden').html();
        var txt = $(this).val();
        //if(txt == ''){
        //    return false;
        //}else if(){
        //
        //        myAlter('公摊比例输入错误');
        //        getFocus1($(this));
        //        return false;
        //
        //}

        for(var i=0; i<selectArr.length; i++){
            if(id == selectArr[i].pK_Meter){

                selectArr[i].f_EquallyShared = txt;
            }
        }
    });

};

//注销计量设备时

function tableChanges(){
    $('.wait-push0').on('blur',function(){
        var id = $(this).parents('tr').find('.theHidden').html();
        var txt = $(this).val();

        for(var i=0; i<logoutArr.length; i++){
            if(id == logoutArr[i].pK_Meter){

                logoutArr[i].meterEndDate = txt;
            }
        }
    });

    $('.wait-push1').on('blur',function(){
        var id = $(this).parents('tr').find('.theHidden').html();

        var txt = $(this).val();
        var startNum = parseFloat($(this).parents('tr').children().eq(6).html());
        if(isNaN(txt) || txt < 0 || txt == 0){
            myAlter('设备终止读数错误');
            getFocus1($(this));
            return false;
        }else if(parseFloat(txt) < startNum){
            myAlter('止数小于起数，请输入圈数');
            $(this).parents('tr').find('.wait-push2').val('');
            getFocus1($(this).parents('tr').find('.wait-push2'));
        }
        for(var i=0; i<logoutArr.length; i++){
            if(id == logoutArr[i].pK_Meter){

                logoutArr[i].meterEndNumber = txt;
            }
        }
    });

    $('.wait-push2').on('blur',function(){

        var id = $(this).parents('tr').find('.theHidden').html();

        var txt = $(this).val();

        if(isNaN(txt) || txt < 0 || txt == 0){
            myAlter('圈数输入错误');
            getFocus1($(this));
            return false;
        }
        for(var i=0; i<logoutArr.length; i++){
            if(id == logoutArr[i].pK_Meter){

                logoutArr[i].f_CycleNum = txt;
            }
        }
    });

    $('.wait-push3').on('blur',function(){

        var id = $(this).parents('tr').find('.theHidden').html();

        var txt = $(this).val();

        for(var i=0; i<logoutArr.length; i++){
            if(id == logoutArr[i].pK_Meter){

                logoutArr[i].f_ReadPerson = txt;
            }
        }
    });

    $('.wait-push4').on('blur',function(){

        var id = $(this).parents('tr').find('.theHidden').html();

        var txt = $(this).val();

        for(var i=0; i<logoutArr.length; i++){
            if(id == logoutArr[i].pK_Meter){

                logoutArr[i].f_CancelComment = txt;
            }
        }
    });

    $('.handle').on('change',function(){
       console.log('ok');

        var id = $(this).parents('tr').find('.theHidden').html();




        for(var i=0; i<logoutArr.length; i++){
            if(id == logoutArr[i].pK_Meter){
                if($(this).is(':checked')) {
                    logoutArr[i].isHavingSubtractMeter = 1;
                }else{
                    logoutArr[i].isHavingSubtractMeter = 0;
                }
            }
        }
    });

    $('.ratio').on('blur',function(){

        var id = $(this).parents('tr').find('.theHidden').html();
        var length = $(this).parents('tr').find('.ratio').length - 1;

        var index = parseInt($(this).index() - 1) / 2;
        var txt = $(this).val();
        console.log(index);

        if(isNaN(txt) || txt < 0 || txt == 0 || txt > 1){
            myAlter('公摊比例输入错误');
            getFocus1($(this));
            return false;
        }

        for(var i=0; i<logoutArr.length; i++){
            if(id == logoutArr[i].pK_Meter){

                    var num = 0;
                    for(var j=0; j<index + 1; j++){
                        console.log($(this).parents('tr').find('.ratio').eq(j).val());

                        var num0 = $(this).parents('tr').find('.ratio').eq(j).val();
                        console.log(num0);
                        num += parseFloat(num0);
                        console.log(num);
                    }
                    console.log(num);
                    if(num > 1){
                        myAlter('公摊比例总和不能大于1，请重新填写');
                        $(this).val('');
                        getFocus1($(this).parents('tr').find('.ratio').eq(0));
                        return false;
                    }

                logoutArr[i].cancelMeterApportions[index].f_EquallyShared = txt;
            }
        }
    });

};

//按楼宇查询按钮

$('#choose-building .btn-primary').on('click',function(){
    var dom = $('#dateTables4 tbody tr');
    var length = dom.length;
    var seekArr= [];

    var waitSeekArr = [];
    for(var i=0 ; i<length; i++){
        if(dom.eq(i).find("input[type='checkbox']").is(':checked')){
            seekArr.push(dom.eq(i).children().eq(1).html())
        }
    };
    console.log(seekArr);

    $('#choose-building').modal('hide');
    var doms = $('.in');
    console.log(doms.attr('id'));
    if(doms.attr('id') == 'accum-preseve'){
        for(var i=0; i<seekArr.length; i++){
            var id = seekArr[i];
            for(var j=0; j<waitArr.length; j++){
                if(id == waitArr[j].f_PointerID){
                    waitSeekArr.push(waitArr[j]);
                }
            }
        }

        leftArr = waitSeekArr;
        _table = $('#dateTables2').dataTable();
        _table.fnClearTable();
        setDatas(leftArr);

    }else if(doms.attr('id') == 'accum-shared'){
        for(var i=0; i<seekArr.length; i++){
            var id = seekArr[i];
            for(var j=0; j<waitArr.length; j++){
                if(id == waitArr[j].f_PointerID){
                    waitSeekArr.push(waitArr[j]);
                }
            }
        }

        leftArr = waitSeekArr;
        _table = $('#dateTables5').dataTable();
        _table.fnClearTable();
        setDatas(leftArr);
    };

});

//关闭
$('#change-meter .close').on('click',function(){
    $('#change-meter .add-input').val('');
});
$('#change-meter .btn-primary').on('click',function(){
    $('#change-meter .add-input').val('');
});


var unitId = [];
var unitName = [];

//当前页面显示的二级单位ID
var importantId;
//获取全部单位信息
function getUnitMessage(){

    $.ajax({
        type:'get',
        url:IP + "/SecondUnit/GetSecondUnitByCondition",
        async:false,
        timeout:theTimes,
        data:{
            unitName: '',
            cancelFlag: 0
        },
        beforeSend:function(){
            $('#theLoading').modal('show');
        },
        complete:function(){
            $('#theLoading').modal('hide');
        },
        success:function(result){
            $('#theLoading').modal('hide');
            for(var i=0;i<result.length;i++){
                unitId.push(result[i].pK_Unit);
                unitName.push(result[i].f_UnitName);
            }
            var html = '';
            for(var i=0; i<unitId.length;i++){
                html += '<li class="titles search-li search-li0" data-name="'+unitName[i]+'" data-id="'+ unitId[i]+'">'+unitName[i]+'</li>'
            }

            $('#ul1').html(html);
            $('#ul1 li').eq(0).css({
                background:'#fbec88'
            })


        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            $('#theLoading').modal('hide');
            console.log(textStatus);

            if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                ajaxTimeoutTest.abort();
                myAlter("超时");
            }
            myAlter("请求失败！");
        }

    });
}
getUnitMessage();

//获取后台数据
function alarmHistory(id){
    dataArr=[];

    $.ajax({
        type:'get',
        url:IP + "/UnitMeter/GetUnitMeterByCondition",
        async:false,
        timeout:theTimes,
        data:{
            'PK_Unit':id,
            'F_MTEnergyType' : -1,
            'F_MTOnline' : -1,
            'F_MTNumber' :'',
            'F_CancelFlag':0
        },
        beforeSend:function(){
            $('#theLoading').modal('show');
        },
        complete:function(){
            $('#theLoading').modal('hide');
        },
        success:function(result){

            $('#theLoading').modal('hide');
            console.log(result);
            for(var i=0;i<result.length;i++){
                dataArr.push(result[i]);
            }
            var num = dataArr.length;
            for(var i=0; i<num; i++){
                var num1 =  dataArr[i].f_mtEnergyType;
                var num2 = dataArr[i].f_mtOnline;
                var txt = getEnergyType(num1);
                dataArr[i].f_EnergyName = txt;
                var txt2 = getMtonline(num2);
                dataArr[i].f_onlineName = txt2;
            }

        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            $('#theLoading').modal('hide');
            console.log(textStatus);

            if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                ajaxTimeoutTest.abort();
                myAlter("超时");
            }
            myAlter("请求失败！");
        },

    });
}

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
    $('.search-show-list li').css({
        background:'none'
    })
    $(this).css({
        background:'#fbec88'
    });
    var txt = $(this).html();
    var id = $(this).attr('data-id');
    $('.search-value0').val(txt);
    $('.search-value0').attr('ids',id);

    importantId = id;
    ajaxSuccess1(importantId);

});

//点击搜索到的信息时
function buildClick(){
    $('.search-value-list0 li').on('click',function(){
        console.log('ok');
        var txt = $(this).children().html();
        var id = $(this).children().attr('ids');
        $('.search-value0').val(txt);
        $('.search-value0').attr('ids',id);

        importantId = id;
        ajaxSuccess1(importantId);
    });
};

//更换弹窗中输入的验证
$('.end-number').on('blur',function(){
    var txt = $(this).val();
    var txt1 = parseInt($(this).val());
    var startNum = parseInt($(this).parents('.deploy-form').find('.add-input').eq(1).val());
    console.log(startNum)
    if(isNaN(txt) || txt < 0 || txt == 0){
        myAlter('设备终止读数输入错误');
        getFocus1($(this));
        return false;
    }else if(txt1 < startNum){
        myAlter('止数小于起数，请输入圈数');
        $(this).parents('.deploy-form').find('.add-input').eq(4).val('');
        getFocus1($(this).parents('.deploy-form').find('.add-input').eq(4));
    }

});

$('.cycle-number').on('blur',function(){
    var txt = $(this).val();
    var startNum = $(this).parents('.deploy-form').find('.add-input').eq(1).val();
    var endNum =  $(this).parents('.deploy-form').find('.add-input').eq(3).val();
    console.log(startNum)
    if(txt % 1 !== 0 || txt < 0 ){
        myAlter('圈数输入错误');
        getFocus1($(this));
        return false;
    }else if(endNum < startNum && txt == 0){
        myAlter('止数小于起数，圈数必须大于0');
        $(this).parents('.deploy-form').find('.add-input').eq(4).val('');
        getFocus1($(this).parents('.deploy-form').find('.add-input').eq(4));
    }

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


//点击确定时触发
$(document).on('keydown',function(e){
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which;

    if(code == 13){
        $('.top-refer').click();
        return false;
    }
});

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


function ajaxSuccess1(id){
    _table = $('#dateTables').dataTable();
    _table.fnClearTable();
    alarmHistory(id);
    setData();
    hiddrenId();
}

//检验是否必填项全部填写
function checkedNull(dom){
    var checkNum = $(dom).find('.input-label').length;

    for(var i=0; i< checkNum; i++){
        if( $(dom).find('.input-label').eq(i).next().find('input').val() == ''){
            var txt = $(dom).find('.input-label').eq(i).next().find('input').parent().prev().html().split('：')[0];

            console.log(txt);
            myAlter(txt + " 不能为空")
            getFocus1($(dom).find('.input-label').eq(i).next().find('input'));
            return false;
        };
        if($(dom).find('.input-label').eq(i).next().find('.add-input-select').find('span').html() == ''){
            var txt = $(dom).children('.input-label').eq(i).html().split('：')[0];
            $('#check-text').modal('show');
            myAlter(txt + " 不能为空")
            return false;
        }
    }
    return true;
}

function checkedNull1(dom){
    var length = $(dom).find('.wait-push').length;
    for(var i=0; i<length; i++){
        if($(dom).find('.wait-push').eq(i).val() == ''){

            console.log('333')
            var txt = $(dom).find('.wait-push').eq(i).attr('txt');
            myAlter('请填写对应的'+ txt);

            getFocus1($(dom).find('.wait-push').eq(i));


            return false;
        }
    }
    return true;
}

function checkedNull2(dom){
    var length = $(dom).find('.wait-change2').length;
    for(var i=0; i<length; i++){
        var txt = $(dom).find('.wait-change2').eq(i).val();
        if(txt == ''){
            myAlter('公摊比例不能为空');

            getFocus1($(dom).find('.wait-change2').eq(i));


            return false;
        }else      if(isNaN(txt) || txt < 0 || txt == 0  || txt > 1){


            myAlter('公摊比例为大于0小于1的数字');

            getFocus1($(dom).find('.wait-change2').eq(i));


            return false;
        }
    }
    return true;
}