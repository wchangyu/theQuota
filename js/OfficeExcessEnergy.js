/**
 * Created by admin on 2017/4/24.
 */

$(document).ready(function(){
    $('input').attr('maxlength','50');
    $('.add-comment').attr('maxlength','200');

    //select 优化动画
    var rotateNum = 1;
    $(document).on('click', function () {
        if ($('.add-select-block').is(':hidden')) {
            $('.add-select-block').css({
                display: 'none'
            });
            rotateNum = 2;
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

    $('.add-input-arrow').css({
        transform: 'rotate(0deg)'
    });

    alarmHistory();

    //初始化表格

    var table = $('#dateTables').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging": true,
        "ordering": false,
        'searching': false,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 件',
            'zeroRecords': '没有数据',
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页  总记录数为 _TOTAL_ 条',
            "sInfoEmpty": "记录数为0",
            "sInfoFiltered": "(全部记录数 _MAX_ 条)",
            'paginate': {
                'first': '第一页',
                'last': '最后一页',
                'next': '下一页',
                'previous': '上一页'
            },
            'infoEmpty': ''
        },
        'buttons': [

        ],
        "dom":'B<"clear">lfrtip',
        //数据源
        'columns':[
            {
                title:'结算名称',
                data:'f_AccountName'

            },
            {
                title:'本行ID',
                data:'pK_AboveQuotaMain',
                class:'theHidden'

            },
            {
                title:'结算时间段',
                data:'f_AccountST',
                render:function(data, type, row, meta){
                    var date1 = data.split(' ')[0];
                    var date2 = row.f_AccountET.split(' ')[0];
                    return ''+ date1 + ' - ' + date2 + '';
                }

            },
            {
                title:'定额结算方式',
                data:'f_AccountWay',
                render:function(data, type, row, meta){
                    if(data == 0){
                        return '月'
                    }else if(data == 1){
                        return '年'
                    }else if(data == 2){
                        return '日'
                    }
                }

            },
            {
                title:'用能结算生成日期',
                data:'f_AccountET'


            },
            {
                title:'经办人',
                data:'f_AccountUserID',
                render:function(data, type, row, meta){

                    return data;
                }

            },
            {
                title:'是否缴费完结',
                data:'f_IsPayFinish',
                render:function(data, type, row, meta){
                    if(data == 0){
                        return '<span ><b class="pay-not0" ></b><font>未完结</font></span>'
                    }else if(data == 1){
                        return '<span ><b class="pay-not1" ></b><font>已完结</font></span>'
                    }
                }

            },
            {
                title:'结算调整状态',
                data:'f_IsFinanceFlow',
                render:function(data, type, row, meta){
                    if(data == 0){
                        return '结算可调整'
                    }else if(data == 1){
                        return '结算调整完毕'
                    }
                }

            },
            {
                title:'结算调整',
                "data":'f_IsFinanceFlow',
                render:function(data, type, row, meta){
                    if(data == 1){
                        return '无'
                    }else if(data == 0){
                        return "<button class='top-btn change-quote'>查看详情</button>"
                    }
                }
            },
            {
                title:'财务登记',
                "data":'f_IsFinanceFlow',
                render:function(data, type, row, meta){
                    //if(data == 0){
                    //    return '无'
                    //}else if(data == 1){
                    //    return "<button class='top-btn change-data'>查看详情</button>"
                    //}

                    return "<button class='top-btn change-data'>查看详情</button>"
                }
            }

        ]
    });
    _table = $('#dateTables').dataTable();
    //给表格添加后台获取到的数据
    setData();
    hiddrenId();

    //结算调整功能
    var leftArr;

    var table1 = $('#dateTables1').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging": true,
        "ordering": false,
        'searching': false,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 件',
            'zeroRecords': '没有数据',
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页  总记录数为 _TOTAL_ 条',
            "sInfoEmpty": "记录数为0",
            "sInfoFiltered": "(全部记录数 _MAX_ 条)",
            'paginate': {
                'first': '第一页',
                'last': '最后一页',
                'next': '下一页',
                'previous': '上一页'
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
                data:'f_UnitName'

            },
            {
                title:'单位ID',
                data:'fK_Unit_AboveChild',
                class:'theHidden'

            },
            {
                title:'本行ID',
                data:'pK_AboveQuotaChild',
                class:'theHidden'

            },
            {
                title:'结算时间段',
                data:'f_AccountST',
                render:function(data, type, row, meta){
                    var date1 = data.split(' ')[0];
                    var date2 = row.f_AccountET.split(' ')[0];
                    return ''+ date1 + ' - ' + date2 + '';
                }

            },
            {
                title:'应缴费用',
                data:'f_ShouldPay'

            },
            {
                title:'特殊加减费用',
                data:'f_SpecialRebatePay'

            },
            {
                title:'百分比减免(%)',
                data:'f_PercentageReduction',
                render:function(data, type, row, meta){

                    return data * 100;
                }

            },
            {
                title:'实收费用',
                data:'f_ActualPay'

            },
            {
                title:'缴费状态',
                data:'f_PayState',
                render:function(data, type, row, meta){
                    if(data == 0){
                        return '<span ><b class="pay-not0" ></b><font>未超额</font></span>'
                    }else if(data == 1){
                        return '<span ><b class="pay-not1" ></b><font>未缴费</font></span>'
                    }
                }

            },
            {
                title:'修改加减费用',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn create-data' data-toggle='modal' data-target='#alter-cost'>修改</button>"
            },
            {
                title:'查看详情',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn check-data'>查看</button>"
            },
            {
                title:'超额用能收费单',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn change-data'>生成</button>"
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
        "sScrollY": '260px',
        "bPaginate": false,
        "scrollCollapse": true,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 条',
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
                title:'表名',
                data:'f_mtNumber'

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
                title:'倍率',
                data:'f_ReadRate',
                class:'thePower'

            },
            {
                title:'起数',
                data:'f_ReadStartNum'

            },
            {
                title:'止数',
                data:'f_ReadEndNum'
            } ,
            {
                title:'用量',
                data:'f_EnergyValue'
            }

        ]
    });

    $('#dateTables').on('click','.change-quote',function(){

        $('#change-quote').modal('show');

        var id = $(this).parents('tr').find('td').eq(1).html();

        var head = $(this).parents('tr').find('td').eq(0).html();

        $('#change-quote .add-title').html(head +' 超额用能调整');

        $.ajax({
            type: 'get',
            url: IP + "/AboveQuota/GetAboveQuotaChildByMainID",
            async: false,
            timeout: theTimes,
            data:{
                aboveQuotaMain:id,
                unitName : '',
                unitVirtualID : -1
            },
            beforeSend: function () {

            },

            complete: function () {

            },
            success: function (data) {
                $('#theLoading').modal('hide');
                leftArr = [];

                var arr0 = [];
                for(var i=0; i<data.length; i++){
                    arr0.push(data[i]);
                }

                deepCopy(arr0,leftArr);



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

        setTimeout(function(){
            _table = $('#dateTables1').dataTable();
            _table.fnClearTable();
            setDatas(leftArr);
            hiddrenId();
        },280);

        //搜索功能

        $('.top-refer').off('click');

        $('.top-refer').on('click',function(){

            var txt = $('#change-quote .condition-query').find('input').val();

            $.ajax({
                type: 'get',
                url: IP + "/AboveQuota/GetAboveQuotaChildByMainID",
                async: false,
                timeout: theTimes,
                data:{
                    aboveQuotaMain:id,
                    unitName : txt,
                    unitVirtualID : -1
                },
                beforeSend: function () {

                },

                complete: function () {

                },
                success: function (data) {
                    $('#theLoading').modal('hide');
                    console.log(data);
                    leftArr = [];

                    var arr0 = [];
                    for(var i=0; i<data.length; i++){
                        arr0.push(data[i]);
                    }

                    deepCopy(arr0,leftArr);

                    _table = $('#dateTables1').dataTable();
                    _table.fnClearTable();
                    setDatas(leftArr);
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
            });
        });



        $('#dateTables1').off('click');

        //结算调整弹窗中，查看详情

        $('#dateTables1').on('click','.check-data',function(){

            var id = $(this).parents('tr').children().eq(1).html();

            //存放获得到的数据
            var getArr = [];



            deepCopy(leftArr,getArr);


            var unit = $(this).parents('tr').children().eq(0).html();

            var importNum = 0;


            for(var i=0; i<getArr.length; i++){
                if(id == getArr[i].fK_Unit_AboveChild){
                    importNum = i;
                    getDate = getArr[i];
                }
            }

            console.log(getDate);

            var showData = getDate.aboveQuotaDetails;



            if(showData.length == 0){
                myAlter(unit + '未绑定计量仪表设备');
                return false;
            }else{
                $('#show-details').modal('show');
            }
            var html = '';
            console.log(showData);
            for(var i=0; i<showData.length; i++){
                var type = getEnergyType(showData[i].f_EnergyType);
                if(i == 0){
                    html += '<a href="#" hidefocus="true" class="active">'+type+'</a>'
                }else {
                    html += '<a href="#" hidefocus="true" >'+type+'</a>'
                }
            }

            //上方选项卡添加数据
            $('.tabs').html(html);

            //给下方数据统计中添加数据

            //用电单价
            $('.ament-data').eq(0).find('b').html('用' + getEnergyType(showData[0].f_EnergyType) + '单价：');
            $('.ament-data').eq(0).find('span').html(showData[0].f_EnergyPrice);

            //定额量
            $('.ament-data').eq(1).find('span').html(showData[0].f_EnergyQuota);

            //用能量
            $('.ament-data').eq(2).find('span').html(showData[0].f_EnergyValue);

            //实际用能量
            $('#show-details').find('.add-input').eq(1).val(showData[0].f_EndResultEnergyValue);

            //超额用能量
            $('.ament-data').eq(3).find('span').html(showData[0].f_AboveEnergyValue);

            //应缴费用
            $('.ament-data').eq(4).find('span').html(showData[0].f_EnergyShouldPay);

            //备注
            $('#show-details').find('.remarks').val(showData[0].f_SpecialEnergyComment);

            //特殊加减用能量
            $('#show-details').find('.add-input').eq(0).val(showData[0].f_SpecialRebateEnergy);

            //重构表格
            var tableArr = showData[0].mtReturnReads;

            setTimeout(function(){
                _table = $('#dateTables3').dataTable();
                _table.fnClearTable();
                setDatas(tableArr);
                hiddrenId();
            },300);

            //控制是否跳转
            var jumpNum = 0;

            $(".tabs1 a").on('touchstart mousedown',function(e){
                //e.preventDefault();

                var that = $(this);

                setTimeout(function(){

                    if(jumpNum == 1){
                        return false;
                    }

                    $(".tabs1 .active").removeClass('active');
                    that.addClass('active');
                    var num = that.index();

                    $('.ament-data').eq(0).find('b').html('用' + getEnergyType(showData[num].f_EnergyType) + '单价：');
                    $('.ament-data').eq(0).find('span').html(showData[num].f_EnergyPrice);

                    //定额量
                    $('.ament-data').eq(1).find('span').html(showData[num].f_EnergyQuota);

                    //用能量
                    $('.ament-data').eq(2).find('span').html(showData[num].f_EnergyValue);

                    //实际用能量
                    $('#show-details').find('.add-input').eq(1).val(showData[num].f_EndResultEnergyValue);

                    $('#show-details').find('.add-input').eq(0).val(showData[num].f_SpecialRebateEnergy);

                    $('#show-details').find('.remarks').val(showData[num].f_SpecialEnergyComment);

                    //超额用能量
                    $('.ament-data').eq(3).find('span').html(showData[num].f_AboveEnergyValue);

                    //应缴费用
                    $('.ament-data').eq(4).find('span').html(showData[num].f_EnergyShouldPay);

                    //重构表格
                    var tableArr = showData[num].mtReturnReads;
                    _table = $('#dateTables2').dataTable();
                    _table.fnClearTable();
                    setDatas(tableArr);
                    hiddrenId();
                },10);

            });

            $(".tabs1 a").click(function(e){
                //e.preventDefault();
            });

            //修改特殊微调用能量时

            $('.smallEnergy').off('blur');
            $('.smallEnergy').on('blur',function(){
                var theNum = $('.active').index();
                //特殊加减用能量
                var smallNum = parseFloat($(this).val());

                if(isNaN(smallNum) && smallNum != ''){
                    jumpNum = 1;
                    myAlter('特殊加减用能量必须为数字');
                    getFocus1($(this));
                    return false;
                }

                //实际用能量
                var bigNum = parseFloat($('.actualEnergy').val());
                //用能量
                var num = parseFloat($('#show-details .ament-data').eq(2).find('span').html());

                if(smallNum + num < 0){
                    jumpNum = 1;
                    myAlter('当前特殊加减用能量输入错误，请重新输入');
                    getFocus1($(this));
                    return false;
                }
                //
                bigNum = smallNum + num;

                $('.actualEnergy').val(bigNum);
                //定额量
                var quota =  parseFloat($('#show-details .ament-data').eq(1).find('span').html());

                $('#show-details .ament-data').eq(3).find('span').html(bigNum - quota);

                //单价
                var price = parseFloat($('#show-details .ament-data').eq(0).find('span').html());

                $('#show-details .ament-data').eq(4).find('span').html((bigNum - quota) * price);

                showData[theNum].f_SpecialRebateEnergy = smallNum;

                showData[theNum].f_EndResultEnergyValue = bigNum;

                showData[theNum].f_AboveEnergyValue = bigNum - quota;

                showData[theNum].f_EnergyShouldPay = (bigNum - quota) * price;


                jumpNum = 0;

            });

            $('.remarks').off('blur');
            $('.remarks').on('blur',function(){
                var theNum0 = $('.active').index();
                console.log($(this).val());

                showData[theNum0].f_SpecialEnergyComment = $(this).val();
            });

            //提交更改到内存中
            $('#show-details .btn-primary').off('click');

            $('#show-details .btn-primary').on('click',function(){

                leftArr[importNum].aboveQuotaDetails = showData;

                var pay = 0;
                for(var i=0; i<showData.length; i++){
                    pay += showData[i].f_EnergyShouldPay;
                }
                leftArr[importNum].f_ShouldPay = pay;
                //特殊加减费用
                var num1 = parseFloat(leftArr[importNum].f_SpecialRebatePay);

                var num2 = pay;

                var rate = leftArr[importNum].f_PercentageReduction;
                var realPay = (num1 + num2) * (1 - rate);
                leftArr[importNum].f_ActualPay = realPay;


                //缴费状态
                if(realPay > 0){
                    leftArr[importNum].f_PayState = 1;
                }else{
                    leftArr[importNum].f_PayState = 0;
                }

                _table = $('#dateTables1').dataTable();
                _table.fnClearTable();
                setDatas(leftArr);
                hiddrenId();


                $('#show-details').modal('hide');
            });


        });

        //结算调整弹窗中 修改加减费用
        $('#dateTables1').on('click','.create-data',function(){

            var id = $(this).parents('tr').children().eq(1).html();

            var importID = $(this).parents('tr').children().eq(2).html();

            var getData = {};
            //找到是dataArr中的第几项
            var importNum = 0;

            for(var i=0; i<leftArr.length; i++){
                if(id == leftArr[i].fK_Unit_AboveChild){
                    importNum = i;
                    getData = leftArr[i];
                }
            }
            console.log(getData);

            $('#alter-cost .add-input').eq(0).val(getData.f_ShouldPay);
            $('#alter-cost .add-input').eq(1).val(getData.f_SpecialRebatePay);


            $('#alter-cost .btn-primary').off('click');
            $('#alter-cost .btn-primary').on('click',function(){

                if(!checkedNull('#alter-cost') || !checkedSmallChange('#alter-cost')){
                    return false;
                };

               var theValue = parseFloat($('#alter-cost .smallChange').val());


                $.ajax({
                    type: 'post',
                    url: IP + "/AboveQuota/PostEditSpecialRebatePay",
                    async: false,
                    timeout: theTimes,
                    contentType: 'application/json',
                    data:JSON.stringify({
                        "aboveQuotaChildID":importID,
                        "specialRebatePay" : theValue,
                        "userID" : userName}),
                    beforeSend: function () {

                    },

                    complete: function () {

                    },
                    success: function (data) {
                        $('#theLoading').modal('hide');
                        console.log(data);


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

                $.ajax({
                    type: 'get',
                    url: IP + "/AboveQuota/GetAboveQuotaChildByMainID",
                    async: false,
                    timeout: theTimes,
                    data:{
                        aboveQuotaMain:importID,
                        unitName : '',
                        unitVirtualID : -1
                    },
                    beforeSend: function () {

                    },

                    complete: function () {

                    },
                    success: function (data) {
                        $('#theLoading').modal('hide');
                        leftArr = [];

                        var arr0 = [];
                        for(var i=0; i<data.length; i++){
                            arr0.push(data[i]);
                        }

                        deepCopy(arr0,leftArr);

                        console.log(leftArr);

                        _table = $('#dateTables1').dataTable();
                        _table.fnClearTable();
                        setDatas(leftArr);
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
                });



                $('#alter-cost').modal('hide');
            });

        });



    });


    //财务登记功能
    var rightArr;

    var table2 = $('#dateTables2').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging": true,
        "ordering": false,
        'searching': false,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 件',
            'zeroRecords': '没有数据',
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页  总记录数为 _TOTAL_ 条',
            "sInfoEmpty": "记录数为0",
            "sInfoFiltered": "(全部记录数 _MAX_ 条)",
            'paginate': {
                'first': '第一页',
                'last': '最后一页',
                'next': '下一页',
                'previous': '上一页'
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
                data:'f_UnitName'

            },
            {
                title:'单位ID',
                data:'fK_Unit_AboveChild',
                class:'theHidden'

            },
            {
                title:'本行ID',
                data:'pK_AboveQuotaChild',
                class:'theHidden'

            },
            {
                title:'应缴费用',
                data:'f_ShouldPay'

            },
            {
                title:'特殊加减费用',
                data:'f_SpecialRebatePay'

            },
            {
                title:'百分比减免(%)',
                data:'f_PercentageReduction',
                render:function(data, type, row, meta){

                    return data * 100;
                }

            },
            {
                title:'实收费用',
                data:'f_ActualPay'

            },
            {
                title:'票据号',
                data:'f_Bill'

            },
            {
                title:'特殊费用备注',
                data:'f_SpecialComment'

            },
            {
                title:'付费状态',
                data:'f_PayState',
                render:function(data, type, row, meta){
                    if(data == 0){
                        return '<span ><b class="pay-not0" ></b><font>未超额</font></span>'
                    }else if(data == 1){
                        return '<span ><b class="pay-not1" ></b><font>未缴费</font></span>'
                    }
                }

            },
            {
                title:'转账登记',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn check-in'>登记</button>"
            },
            {
                title:'票据操作',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn add-bill'>添加票据</button>"
            },
            {
                title:'查看详情',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn check-data'>查看</button>"
            }

        ]
    });

    $('#dateTables').on('click','.change-data',function(){

        $('#account-register').modal('show');

        var id = $(this).parents('tr').find('td').eq(1).html();

        var head = $(this).parents('tr').find('td').eq(2).html();

        $('#account-register .add-title').html(head +' 超额用能二级单位列表');

        $.ajax({
            type: 'get',
            url: IP + "/AboveQuota/GetAboveQuotaChildByFinance",
            async: false,
            timeout: theTimes,
            data:{
                aboveQuotaMain:id,
                unitName : '',
                payState : -1
            },
            beforeSend: function () {

            },

            complete: function () {

            },
            success: function (data) {
                $('#theLoading').modal('hide');
                console.log(data);
                rightArr = [];

                var arr0 = [];
                for(var i=0; i<data.length; i++){
                    arr0.push(data[i]);
                }

                deepCopy(arr0,rightArr);



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

        setTimeout(function(){
            _table = $('#dateTables2').dataTable();
            _table.fnClearTable();
            setDatas(rightArr);
            hiddrenId();
        },280);

        //查询功能
        $('#account-register .top-refer1').off('click');
        $('#account-register .top-refer1').on('click',function(){

            var txt = $('#account-register .condition-query').find('input').val();
            var payNum = $('#account-register .condition-query').find('select').val();

            $.ajax({
                type: 'get',
                url: IP + "/AboveQuota/GetAboveQuotaChildByFinance",
                async: false,
                timeout: theTimes,
                data:{
                    aboveQuotaMain:id,
                    unitName : txt,
                    payState :  payNum
                },
                beforeSend: function () {

                },

                complete: function () {

                },
                success: function (data) {
                    $('#theLoading').modal('hide');
                    console.log(data);
                    rightArr = [];

                    var arr0 = [];
                    for(var i=0; i<data.length; i++){
                        arr0.push(data[i]);
                    }

                    deepCopy(arr0,rightArr);

                    _table = $('#dateTables2').dataTable();
                    _table.fnClearTable();
                    setDatas(rightArr);
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
            });
        });

    });





    //其他




    var table4 = $('#dateTables4').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':false,
        "sScrollY": '260px',
        "bPaginate": false,
        "scrollCollapse": true,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 条',
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
                title:'已收金额',
                data:'f_mtNumber'

            },
            {
                title:'付费状态',
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
                title:'缴费日期',
                data:'f_ReadRate',
                class:'thePower'

            },
            {
                title:'登记人',
                data:'f_ReadStartNum'

            },
            {
                title:'备注',
                data:'f_ReadEndNum'
            } ,
            {
                title:'用量',
                data:'f_EnergyValue'
            },
            {
                title:'修改',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn create-data' data-toggle='modal' data-target=''>修改</button>"
            },
            {
                title:'删除',
                "targets": -1,
                "data": null,
                "defaultContent": "<button class='top-btn create-data' data-toggle='modal' data-target=''>修改</button>"
            }

        ]
    });

    var table5 = $('#dateTables5').DataTable({
        "autoWidth": false,  //用来启用或禁用自动列的宽度计算
        //是否分页
        "destroy": false,//还原初始化了的datatable
        "paging":false,
        "ordering": false,
        'searching':false,
        "sScrollY": '260px',
        "bPaginate": false,
        "scrollCollapse": true,
        'language': {
            'emptyTable': '没有数据',
            'loadingRecords': '加载中...',
            'processing': '查询中...',
            'lengthMenu': '每页 _MENU_ 条',
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
                title:'收费金额',
                data:'f_mtNumber'

            },
            {
                title:'付费状态',
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
                title:'缴费日期',
                data:'f_ReadRate',
                class:'thePower'

            },
            {
                title:'登记人',
                data:'f_ReadStartNum'

            },
            {
                title:'备注',
                data:'f_ReadEndNum'
            }

        ]
    });



});


//获取后台数据
function alarmHistory(){
    dataArr=[];
    $.ajax({
        type:'get',
        url:IP + "/AboveQuota/GetAboveQuotaMains",
        async:false,
        timeout:theTimes,
        data:{
            'payFinish' : -1
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


//选择日期插件
$('.chooseDate').datepicker(
    {
        language:  'zh-CN',
        todayBtn: 1,
        todayHighlight: 1,
        format: 'yyyy-mm-dd'
    }
);

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
        };
        if( $(dom).find('.input-label').eq(i).next().find('textarea').val() == ''){
            var txt = $(dom).find('.input-label').eq(i).next().find('textarea').parent().prev().html().split('：')[0];

            console.log(txt);
            myAlter(txt + " 不能为空")
            getFocus1($(dom).find('.input-label').eq(i).next().find('textarea'));
            return false;
        };
    }
    return true;
}

//判断加减微调值是否合理
function checkedSmallChange(dom){

    var num1 = parseFloat($(dom).find('.shouldPay').val());

    var num2 = parseFloat($(dom).find('.smallChange').val());

    if(num1 + num2 < 0){
        myAlter('加减费用输入不合理，请重新输入');
        getFocus1($(dom).find('.smallChange'));
        return false;
    }

    return true;

}