



$(document).ready(function(){
    //限定input框长度

    $('input').attr('maxlength','50');

        $(".tabs0 a").on('touchstart mousedown',function(e){
            e.preventDefault();
            $(".tabs0 .active").removeClass('active');
            $(this).addClass('active');
            $('#add-unit .swiper-container .add-deploy').css({
                display:'none'
            });
            $('#add-unit .swiper-container .add-deploy').eq($(this).index()).css({
                display:'block'
            });
        });

        $(".tabs0 a").click(function(e){
            e.preventDefault();
        });
    //新增二级单位弹窗中的单选按钮操作
    $(".choose-radio label").on('mousedown',function(e){
        e.preventDefault()
        if($(this).index() == 1){

        }

        $('.choose-radio .row').css({
            display:'none'
        });
        $('.choose-radio .row').eq($(this).index()).css({
            display:'block'
        });

        $('.choose-tables').css({
            display:'none'
        });
        $(' .choose-tables').eq($(this).index()).css({
            display:'block'
        });
    });

    //手工调整配置table加载
    $(".choose-radio label").eq(1).one('click',function(){
        setTimeout(function(){
            var table1 = $('#dateTables1').DataTable({
                "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                //是否分页
                "destroy": false,//还原初始化了的datatable
                "paging":false,
                "ordering": false,
                'searching':false,
                "sScrollY": '230px',
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
                        title:'能耗类型',
                        data:'energyType'

                    },
                    {
                        title:'能耗类型ID',
                        data:'energyID',
                        class:'theHidden'

                    },
                    {
                        title:'月加减微调值',
                        data:'mouthNum'

                    },
                    {
                        title:'年加减微调值',
                        data:'yearNum'
                    } ,
                    {
                        title:'调整备注',
                        data:'remark',
                        class:'adjust-comment',
                        render:function(data, type, full, meta){
                            return '<span title="'+data+'">'+data+'</span>'
                        }

                    } ,
                    {
                        title:'编辑操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn alter' data-toggle='modal' data-target='#small-adjust'>编辑</button>"
                    },
                    {
                        title:'删除操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn remove' data-toggle='modal' data-target='#remove-people'>删除</button>"
                    }
                ]
            });
        },100)

    });

    $(".choose-radio label").eq(2).one('click',function(){
        setTimeout(function(){
            var table11 = $('#dateTables11').DataTable({
                "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                //是否分页
                "destroy": false,//还原初始化了的datatable
                "paging":false,
                "ordering": false,
                'searching':false,
                "sScrollY": '230px',
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
                        title:'能耗类型',
                        data:'energyType'

                    },
                    {
                        title:'能耗类型ID',
                        data:'energyID',
                        class:'theHidden'

                    },
                    {
                        title:'月定额',
                        data:'mouthNum'

                    },
                    {
                        title:'年定额',
                        data:'yearNum'
                    } ,
                    {
                        title:'调整备注',
                        data:'remark',
                        class:'adjust-comment',
                        render:function(data, type, full, meta){
                            return '<span title="'+data+'">'+data+'</span>'
                        }

                    } ,
                    {
                        title:'编辑操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn alter' data-toggle='modal' data-target='#big-adjust'>编辑</button>"
                    },
                    {
                        title:'删除操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn remove' data-toggle='modal' data-target='#remove-people'>删除</button>"
                    }
                ]
            });
        },100)

    });

    //选择计费方案table加载
    $('#add-unit .tabs a').eq(2).one('click',function(){
        setTimeout(function(){
            var table9 = $('#dateTables9').DataTable({
                "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                //是否分页
                "destroy": false,//还原初始化了的datatable
                "paging":false,
                "ordering": false,
                'searching':false,
                "sScrollY": '300px',
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
                        title:'能耗类型',
                        data:'energyType'

                    },
                    {
                        title:'能耗类型ID',
                        data:'energyID',
                        class:'theHidden'

                    },
                    {
                        title:'计费方案',
                        data:'countType'

                    },
                    {
                        title:'计费方案ID',
                        data:'countID',
                        class:'theHidden'

                    },
                    {
                        title:'编辑操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn alter' data-toggle='modal' data-target='#adjust-count'>编辑</button>"
                    },
                    {
                        title:'删除操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn remove' data-toggle='modal' data-target='#remove-people'>删除</button>"
                    }
                ]
            })
        },100)
    });

    $(".choose-radio1 label").on('mousedown',function(e){
        e.preventDefault()


        $('.choose-radio1 .row').css({
            display:'none'
        });
        $('.choose-radio1 .row').eq($(this).index()).css({
            display:'block'
        });

        $('.choose-tables1').css({
            display:'none'
        });
        $(' .choose-tables1').eq($(this).index()).css({
            display:'block'
        });
    });

    //select 优化动画
    var rotateNum = 1;
    $(document).on('click',function(){
        if($('.add-select-block').is(':hidden')){
            $('.add-select-block').css({
                display:'none'
            }) ;
            rotateNum = 1;
            var num = rotateNum * 180;
            var string = num + 'deg';
            $('.add-input-select').children('div').css({
                'transform':'rotate('+string+')'
            })
        }

    });
    $('.add-input-select').click(function(e){
        $('.add-select-block').not($(this).parents('.add-input-father').children('.add-select-block')).css({
            display:'none'
        });
        rotateNum++;
        var num = rotateNum * 180;
        var string = num + 'deg';
        console.log('bb');
        $(this).parents('.add-input-father').children('.add-select-block').slideToggle('fast');
        $(this).children('div').css({

            'transform':'rotate('+string+')'
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

    $('.choose-radio').children('label').css({
       marginRight:'50px'
    });

    //调用获取后台数据方法，进行数据获取
    alarmHistory();
    //初始化页面table表单
    var table = $('#dateTables').DataTable({
            //文字，格式初始化
            "bProcessing" : true,
            "autoWidth": false,  //用来启用或禁用自动列的宽度计算
            //是否分页
            "destroy": true,//还原初始化了的datatable
            "pagingType":"full_numbers",
            "ordering": false,
            'searching':false,
            //'stateSave':true,
            //'stateSaveCallback':true,
            //'stateLoadCallback':true,
            'language': {
                'emptyTable': '没有数据',
                'loadingRecords': '加载中...',
                'processing': '查询中...',
                'lengthMenu': '每页 _MENU_ 条',
                'zeroRecords': '没有数据',
                'info': '第 _PAGE_ 页 / 总 _PAGES_ 页  总记录数为 _TOTAL_ 条',
                "sInfoEmpty" : "记录数为0",
                "sInfoFiltered" : "(全部记录数 _MAX_ 条)",
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
            //'data':dataArr,
            'columns':[
                {
                    title:'代码',
                    data:'f_Code',
                },
                {
                    title:'ID',
                    data:'pK_Unit',
                    class:'theHidden'
                },
                {
                    title:'单位名称',
                    data:'f_UnitName'
                },
                {
                    title:'单位性质',
                    data:'f_UnitNatureName'
                },
                {
                    title:'负责人姓名',
                    data:'f_DirectorName'
                },
                {
                    title:'负责人电话',
                    data:'f_DirectorPhone'
                },
                {
                    title:'剩余额度',
                    data:'remainingAmount'
                },
                {
                    title:'单位专业',
                    data:'f_SpecialtyName'
                },
                {
                    title:'用能调整系数',
                    data:'f_CoefficientK'
                },
                {
                    title:'定额手工调整状态',
                    data:'f_QuotaEditStateWord'
                },
                {
                    title:'单位房间',
                    data:'f_UnitRoom'
                },
                {
                    title:'单位面积',
                    data:'f_UnitArea'
                },
                {
                    title:'百分比减免',
                    data:'f_PercentageReduction'
                },
                {
                    title:'查看备注',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn examine-remark' data-toggle='modal' data-target='#remarks'>查看</button>"
                },
                {
                    title:'定额操作',
                    "targets": -1,
                    "data": null,
                    "defaultContent": "<button class='top-btn examine-quota' data-toggle='modal' data-target='#quota'>查看定额</button>"
                }
            ]
        }
    );

    _table = $('#dateTables').dataTable();
    //给表格添加后台获取到的数据
    setData();
    hiddrenId();


    //按条件查询功能
    $('.condition-query .unit-refer').on('click',function(){
        $('#theLoading').modal('show');
        var txt1 = $('.unit-names').val();
        var txt2 = $('input[class="rct-form-control"]:checked').val();
        if(txt2 == undefined){
            txt2 = 0;
        }
        dataArr=[];
        $.ajax({
            type:'get',
            url:IP + "/SecondUnit/GetSecondUnitByCondition",
            async:false,
            timeout:theTimes,
            data:{
                unitName: txt1,
                cancelFlag: txt2
            },
            beforeSend:function(){

            },
            complete:function(){
                $('#theLoading').modal('hide');
            },
            success:function(result){

                for(var i=0;i<result.length;i++){
                    dataArr.push(result[i]);
                }
                for(var i=0; i < dataArr.length;i++){
                    var nums = dataArr[i].f_QuotaEditState;
                    dataArr[i].f_QuotaEditStateWord = getQuotaState(nums);
                }

                _table = $('#dateTables').dataTable();
                $('#dateTables').dataTable().fnClearTable();
                setData();
                hiddrenId();
                $('#theLoading').modal('hide');
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(textStatus);

                if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                    ajaxTimeoutTest.abort();
                    myAlter("超时");
                }
                myAlter("请求失败！");
                $('#theLoading').modal('hide');
            }

        });

    });

    //添加操作

    $('.top-btn1').on('click',function(){
        var personNum = $('#add-unit .person-type .add-input-select').find('span').attr('unit');
        var personUnits = getPersonUnit(personNum);
        $('#add-unit .person-type').next().children('label').html(personUnits +":");
    });

    $('#add-unit .btn-primary').on('click',function(){

        checkedText1();
        if(!checkedText1()){
            return false;
        };
        checkedText2('#add-unit .first-row');
        if(!checkedText2('#add-unit .first-row')){
            return false;
        };
        if($('#add-unit .first-row .inner-input').eq(4).find('.add-input').val() != ''){
            checkedPhone('#add-unit');
            if(!checkedPhone('#add-unit')){
                return false;
            };
        }


        //生成对应参数
       var code = $('#add-unit .first-row .inner-input').eq(0).find('.add-input').val();
        var unitName = $('#add-unit .first-row .inner-input').eq(1).find('.add-input').val();
        var natureID = $('#add-unit .first-row .inner-input').eq(2).find('.add-input').children('span').attr('ids');
        var DirectorName = $('#add-unit .first-row .inner-input').eq(3).find('.add-input').val();
        var telNum = $('#add-unit .first-row .inner-input').eq(4).find('.add-input').val();
        var SpecialtyID = $('#add-unit .first-row .inner-input').eq(5).find('.add-input').children('span').attr('ids');
        var factor = $('#add-unit .first-row .inner-input').eq(5).find('.add-input').children('span').attr('factor');
        var unitRoom = $('#add-unit .first-row .inner-input').eq(6).find('.add-input').val();
        var reduction = $('#add-unit .first-row .inner-input').eq(7).find('.add-input').val();
        var remark1 = $('#add-unit .first-row .inner-input').eq(8).find('.add-input').val();
        var remark2 = $('#add-unit .first-row .inner-input').eq(9).find('.add-input').val();
        var remark3 = $('#add-unit .first-row .inner-input').eq(10).find('.add-input').val();
        var remark4 = $('#add-unit .first-row .inner-input').eq(11).find('.add-input').val();
        var remark5 = $('#add-unit .first-row .inner-input').eq(12).find('.add-input').val();
        var unitArea = $('#add-unit .first-row .inner-input1').find('.add-input').val();
        var data1;
        var data2;
        var data3;
        var data4;
        var editState = 0;
        var length = $('.chooseIt').length;
        //获取手工调整状态
        for(var i=0; i<length; i++){

            if($('.chooseIt').eq(i).is(":checked")) {
                editState = i;
            }
        }
        if(thePerson.length != 0){
            data1 =thePerson;
        }else{
            data1 =  [

                ]
        }
        console.log(data1);

        if(postSmall.length != 0 && editState == 1){
            data2 =postSmall;
        }else{
            data2 =  [

            ]
        }
        console.log(postSmall);
        console.log(data2);

        if(postBig.length != 0 && editState == 2){
            data3 =postBig;
        }else{
            data3 =  [

            ]
        };
        console.log(data3);

        if(postPrice.length != 0){
            data4 =postPrice;
        }else{
            data4 =  [

            ]
        };
        console.log(data4);


        $.ajax({
            type: "post",
            url: IP + "/SecondUnit/AddSecondUnit",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
            timeout:theTimes,
            data:{
                "pK_Unit": 0,
                "fK_Specialty_Unit": SpecialtyID,
                "f_CoefficientK": factor,
                "f_Code": code,
                "f_UnitName": unitName,
                "fK_Nature_Unit": natureID,
                "f_DirectorName": DirectorName,
                "f_DirectorPhone": telNum,
                "f_UnitRoom": unitRoom,
                "f_UnitArea":unitArea,
                "f_Comment1": remark1,
                "f_Comment2": remark2,
                "f_Comment3": remark3,
                "f_Comment4": remark4,
                "f_Comment5": remark5,
                "f_PercentageReduction":  reduction,
                "f_QuotaEditState": editState,
                "unitQuotaEdits":data2,
                "unitQuotaRevises":data3,
                "unitPeopleRelations":data1,
                "unitPrices":data4,
                "userID": userName
            },
            cache: false,
            async : false,
            dataType: "json",
            beforeSend:function(){
                $('#add-unit').modal('hide');
            },
            complete:function(){
                $('#theLoading').modal('hide');
            },

            success: function (data)
            {

                console.log(data);

                _table = $('#dateTables').dataTable();
                ajaxSuccess();
                $('#add-unit').modal('hide');
                $('#theLoading').modal('hide');
                if(data == 2){
                    myAlter('二级单位已存在')
                }

            },
            error:function (data, textStatus, errorThrown) {
                //var num = data.responseText.split('"')[3];
                $('#theLoading').modal('hide');
                if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                    ajaxTimeoutTest.abort();
                    myAlter("超时");
                }

                $('#add-unit').modal('hide');
                myAlter('执行失败');
            }
        });
        //完成后清空input框
        $(this).parent().parent().parent().find('input').val('');
        removeTable();
    });

    //查看备注
    $('#dateTables').on('click','.examine-remark',function(){
        //获取要传的ID;
        var id = $(this).parent().parent().children().eq(1).html();
        var txt = $(this).parent().parent().children().eq(2).html();

        $('#remarks .add-title').html(txt +' 备注信息')
            $.ajax({
                type: "get",
                timeout:theTimes,
                url: IP + "/SecondUnit/GetSecondUnitByUnitID",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                data: {
                    unitID:id
                },
                cache: false,
                async : false,
                dataType: "json",
                beforeSend:function(){
                    $('#theLoading').modal('show');
                },
                complete:function(){
                    $('#theLoading').modal('hide');
                },
                success: function (data)

                {
                    var arr = [];
                    arr.push(data.f_Comment1);
                    arr.push(data.f_Comment2);
                    arr.push(data.f_Comment3);
                    arr.push(data.f_Comment4);
                    arr.push(data.f_Comment5);
                    for(var i=0; i<arr.length; i++){
                        $('#remarks .add-input').eq(i).val(arr[i])
                    }


                },
                error:function (data, textStatus, errorThrown) {
                    console.log(textStatus);
                    if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }else{
                        myAlter(data.responseText.split('"')[3]);
                    }


                },

            });


    });

    //查看定额
    table4Arr = [];

    $('#dateTables').one('click','.examine-quota',function(){
        setTimeout(function(){
            var table4 = $('#dateTables4').DataTable({
                "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                //是否分页
                "destroy": false,//还原初始化了的datatable
                "paging":false,
                "ordering": false,
                'searching':false,
                "sScrollY": '240px',
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
                //数据源,
                'columns':[
                    {
                        title:'能耗类型',
                        data:'f_EnergyTypeName'

                    },
                    {
                        title:'单位',
                        data:'f_EnergyTypeUnit'

                    },
                    {
                        title:'月指标',
                        data:'f_EnergyMonthIndex'
                    } ,
                    {
                        title:'月定额',
                        data:'f_EnergyMonthQuota'
                    } ,
                    {
                        title:'年指标',
                        data:'f_EnergyYearIndex'
                    } ,
                    {
                        title:'年定额',
                        data:'f_EnergyYearQuota'
                    } ,

                ]
            });
        },200)

    });

    $('#dateTables').on('click','.examine-quota',function(){
        var that = $(this);
        setTimeout(function(){
            var id = that.parent().parent().children().eq(1).html();
            var txt = that.parent().parent().children().eq(0).html();
            $('#quota .add-title span').html(txt + ' ');

            //    获取数据
            $.ajax({
                type: "get",
                timeout:theTimes,
                url: IP + "/SecondUnit/GetShowQuotaByUnitID",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                data: {
                    unitID:id
                },
                cache: false,
                async : false,
                dataType: "json",
                beforeSend:function(){

                },
                complete:function(){
                    $('#theLoading').modal('hide');
                },
                success: function (data)

                {
                    console.log(data);
                    $('#theLoading').modal('hide');
                    var state = judgeState(data.f_QuotaEditState);
                    //获取手工调整状态
                    $('.quota-data p').eq(0).find('span').html(state);
                    //获取用能调整系数
                    $('.quota-data p').eq(1).find('span').html(data.coefficientK);
                    var totalArr = data.summaryUnitQuotas;
                    var arr = data.showPersonTypeAndQuotas;
                    var personArr = [];
                    var html1 = '';
                    var html2 = '';
                    var html3 = '';
                    var html4 = '';
                    var bottomData = [];
                    for(var i = 0; i < totalArr.length; i++){
                        var energyType = getEnergyType(totalArr[i].f_EnergyType);
                        var unit = getEnergyUnit(totalArr[i].f_EnergyType);
                        html1+= '<td>'+energyType+'月定额</td><td>'+energyType+'年定额</td>';
                        html2+= '<td>'+totalArr[i].f_EnergyMonthQuota+' ' + unit +'</td><td>'+totalArr[i].f_EnergyYearQuota+' '+ unit +'</td>'
                    };

                    $('#dateTables3 .data-top').html(html1);
                    $('#dateTables3 .data-body').html(html2);
                    if(arr.length != 0){

                    }
                    for(var i=0; i< arr.length; i++){
                        var person = arr[i].f_PersonType;
                        var personUnit = getPersonUnit(arr[i].f_IndexUnit);
                        bottomData.push(arr[i].showUnitQuotas);
                        var num = arr[i].f_PeopleNum;
                        var obj = {
                            'name' : person,
                            'unit' : personUnit,
                            'count': num
                        };
                        personArr.push(obj);

                        if(i == 0){
                            html3 += '<a href="#" hidefocus="true" class="active">'+person+'</a>'
                        }else {
                            html3 += '<a href="#" hidefocus="true" >'+person+'</a>'
                        }

                    };
                    console.log(bottomData);
                    //
                    for(var i = 0 ; i< bottomData.length;i++){
                        var arrs = bottomData[i];
                        console.log(arrs);
                        for(var j=0 ; j < arrs.length; j++){
                            var num = arrs[j].f_EnergyType;
                            var txt = getEnergyType(num);
                            var unit = getEnergyUnit(num);
                            arrs[j].f_EnergyTypeName = txt;
                            arrs[j].f_EnergyTypeUnit = unit;
                        }

                    }

                    console.log(bottomData);

                    _table = $('#dateTables4').dataTable();

                    _table.dataTable().fnClearTable();

                    table4Arr = bottomData[0];




                    setDatas(table4Arr);

                    $('#quota .tabs1').html(html3);
                    if(personArr.length != 0){
                        html4 = '<b>'+personArr[0].name+' '+personArr[0].unit +':</b>'+ personArr[0].count+'';
                    }else{
                        html4 = '<b></b>'
                    }

                    $('.show-person-total').html(html4);

                    $(".tabs1 a").on('touchstart mousedown',function(e){
                        e.preventDefault();
                        $(".tabs1 .active").removeClass('active');
                        $(this).addClass('active');
                        var num = $(this).index();
                        html4 = '<b>'+personArr[num].name+' '+personArr[num].unit +':</b>'+ personArr[num].count+'';
                        $('.show-person-total').html(html4);

                        table4Arr = bottomData[num];
                        console.log(table4Arr);
                        _table = $('#dateTables4').dataTable();
                        _table.dataTable().fnClearTable();
                        setDatas(table4Arr);


                    });

                    $(".tabs1 a").click(function(e){
                        e.preventDefault();
                    });

                },
                error:function (data, textStatus, errorThrown) {
                    console.log(textStatus);
                    if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }else{
                        myAlter(data.responseText.split('"')[3]);
                    }


                }
            });
        },300)


    });

    //修改二级单位

    $('.top-btn2').on('click',function(){
        var dom = $('.onFocus');
        if(dom.length == 0){
            myAlter('请选中一行数据进行操作');
            return false;
        }
        var index = $(dom).index() + 1;
        var id = dom.children().eq(1).html();
        var txt = $(dom).children().eq(2).html();

        $('#alter-unit .add-title').html(txt +" 信息修改");
        var postData ;

    //    获取后台数据
        $.ajax({
            type: "get",
            timeout:theTimes,
            url: IP + "/SecondUnit/GetSecondUnitByUnitID",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
            data: {
                unitID:id
            },
            cache: false,
            async : false,
            dataType: "json",
            beforeSend:function(){

            },
            complete:function(){

            },
            success: function (data)

            {
                console.log(data);

                postData = data;
                $('#alter-unit .add-input').eq(0).val(data.f_Code);
                $('#alter-unit .add-input').eq(1).val(data.f_UnitName );
                $('#alter-unit .add-input').eq(2).children('span').attr('ids',data.fK_Nature_Unit);
                var id1 = data.fK_Nature_Unit;

                for(var i = 0; i < unitNature.length;i++){
                    if(unitNature[i].pK_Nature == id1){
                        var txt = unitNature[i].f_UnitNatureName;
                        $('#alter-unit .add-input').eq(2).children('span').html(txt);
                    };

                };

                $('#alter-unit .add-input').eq(3).val(data.f_DirectorName);
                $('#alter-unit .add-input').eq(4).val(data.f_DirectorPhone);

                $('#alter-unit .add-input').eq(5).children('span').attr('ids',data.fK_Specialty_Unit);
                var id2 = data.fK_Specialty_Unit;
                for(var i = 0; i < unitSpecialty.length;i++){
                    if(unitSpecialty[i].pK_Specialty == id2){
                        var txt = unitSpecialty[i].f_SpecialtyName;
                        var num = unitSpecialty[i].f_CoefficientK;
                        $('#alter-unit .inner-input .add-input').eq(5).children('span').html(txt);
                        $('#alter-unit .inner-input .add-input').eq(5).children('span').attr('factor',num);
                    };

                };
                $('#alter-unit .inner-input .add-input').eq(6).val(data.f_UnitRoom);
                $('#alter-unit .inner-input .add-input').eq(7).val(data.f_PercentageReduction);
                $('#alter-unit .inner-input .add-input').eq(8).val(data.f_Comment1);
                $('#alter-unit .inner-input .add-input').eq(9).val(data.f_Comment2);
                $('#alter-unit .inner-input .add-input').eq(10).val(data.f_Comment3);
                $('#alter-unit .inner-input .add-input').eq(11).val(data.f_Comment4);
                $('#alter-unit .inner-input .add-input').eq(12).val(data.f_Comment5);
                $('#alter-unit .inner-input1 .add-input').val(data.f_UnitArea);

            },
            error:function (data, textStatus, errorThrown) {
                console.log(textStatus);
                if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                    ajaxTimeoutTest.abort();
                    myAlter("超时");
                }else{
                    myAlter(data.responseText.split('"')[3]);
                }
                $('#theLoading').modal('hide');

            }

        });
        $('#alter-unit .btn-primary').off('click');
        $('#alter-unit .btn-primary').on('click',function(){
            console.log(postData);

            checkedText11();
            if(!checkedText11()){
                return false;
            };
            checkedText2('#alter-unit .row');
            if(!checkedText2('#alter-unit .row')){
                return false;
            };
            if($('#alter-unit  .inner-input').eq(4).find('.add-input').val() != ''){
                checkedPhone('#alter-unit');
                if(!checkedPhone('#alter-unit')){
                    console.log('ok');
                    return false;
                };
            }

            var code = $('#alter-unit  .inner-input').eq(0).find('.add-input').val();
            var unitName = $('#alter-unit  .inner-input').eq(1).find('.add-input').val();
            var natureID = $('#alter-unit  .inner-input').eq(2).find('.add-input').children('span').attr('ids');
            var DirectorName = $('#alter-unit  .inner-input').eq(3).find('.add-input').val();
            var telNum = $('#alter-unit  .inner-input').eq(4).find('.add-input').val();
            var SpecialtyID = $('#alter-unit  .inner-input').eq(5).find('.add-input').children('span').attr('ids');
            var factor = $('#alter-unit  .inner-input').eq(5).find('.add-input').children('span').attr('factor');
            var unitRoom = $('#alter-unit  .inner-input').eq(6).find('.add-input').val();
            var reduction = $('#alter-unit  .inner-input').eq(7).find('.add-input').val();
            var remark1 = $('#alter-unit  .inner-input').eq(8).find('.add-input').val();
            var remark2 = $('#alter-unit  .inner-input').eq(9).find('.add-input').val();
            var remark3 = $('#alter-unit  .inner-input').eq(10).find('.add-input').val();
            var remark4 = $('#alter-unit  .inner-input').eq(11).find('.add-input').val();
            var remark5 = $('#alter-unit  .inner-input').eq(12).find('.add-input').val();
            var unitArea = $('#alter-unit .inner-input1').find('.add-input').val();
            postData.f_Code = code;
            postData.f_UnitName = unitName;
            postData.fK_Nature_Unit = natureID;
            postData.pK_Unit = id;
            postData.f_DirectorName = DirectorName;
            postData.f_DirectorPhone = telNum;
            postData.fK_Specialty_Unit = SpecialtyID;
            postData.f_UnitRoom = unitRoom;
            postData.f_PercentageReduction = reduction;
            postData.f_Comment1 = remark1;
            postData.f_Comment1 = remark2;
            postData.f_Comment1 = remark3;
            postData.f_Comment1 = remark4;
            postData.f_Comment1 = remark5;
            postData.f_UnitArea = unitArea;
            postData.userID = userName;

            console.log(postData);

            $.ajax({
                type: "post",
                timeout:theTimes,
                url:IP + "/SecondUnit/EditSecondUnit",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                data:postData,
                cache: false,
                async : false,
                dataType: "json",
                beforeSend:function(){
                },
                complete:function(){
                    $('#theLoading').modal('hide');
                },
                success: function (data)

                {
                    $('#theLoading').modal('hide');
                    if(data == 2){
                        myAlter('单位名称重复');
                        return false;
                    }
                    if(data == 3){
                        myAlter('修改失败');
                        return false;
                    }
                    $('#alter-unit').modal('hide');
                    //window.location.reload();
                    _table = $('#dateTables').dataTable();
                    //_table.fnDraw();
                    jumpNow();


                    $('#dateTables tr').eq(index).addClass('onFocus');
                },
                error:function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest);
                    var txt = XMLHttpRequest.responseText;
                    var hint = txt.split('"')[3];
                    myAlter(hint);
                    $('#theLoading').modal('hide');

                    if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }
                    $('#alter-unit').modal('hide');
                }
            });






        })


    });

    //修改手工调整值

    $('.top-btn4').one('click',function(){
        setTimeout(function(){
            var table1s = $('#dateTables1-1').DataTable({
                "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                //是否分页
                "destroy": false,//还原初始化了的datatable
                "paging":false,
                "ordering": false,
                'searching':false,
                "sScrollY": '230px',
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
                        title:'能耗类型',
                        data:'f_EnergyName'

                    },
                    {
                        title:'能耗类型ID',
                        data:'f_EnergyType',
                        class:'theHidden'

                    },
                    {
                        title:'月加减微调值',
                        data:'f_MonthEditValue'

                    },
                    {
                        title:'年加减微调值',
                        data:'f_YearEditValue'
                    } ,
                    {
                        title:'调整备注',
                        data:'f_Comment',
                        class:'adjust-comment',
                        render:function(data, type, full, meta){
                          return '<span title="'+data+'">'+data+'</span>'
                        }

                    } ,
                    {
                        title: '编辑操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn alter' data-toggle='modal' data-target='#small-adjust'>编辑</button>"
                    },
                    {
                        title:'删除操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn remove' data-toggle='modal' data-target='#remove-people'>删除</button>"
                    }
                ]
            });
            var table11s = $('#dateTables11-1').DataTable({
                "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                //是否分页
                "destroy": false,//还原初始化了的datatable
                "paging":false,
                "ordering": false,
                'searching':false,
                "sScrollY": '230px',
                "bPaginate": false,
                "scrollCollapse": true,
                'language': {
                    'emptyTable': '没有数据',
                    'loadingRecords': '加载中...',
                    'processing': '查询中...',
                    'lengthMenu': '每页 _MENU_ 条',
                    'zeroRecords': '没有数据',
                    'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
                    "search":   "搜索：",
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
                        title:'能耗类型',
                        data:'f_EnergyName'

                    },
                    {
                        title:'能耗类型ID',
                        data:'f_EnergyType',
                        class:'theHidden'

                    },
                    {
                        title:'月定额量',
                        data:'f_ReviseMonthQuota'

                    },
                    {
                        title:'年定额量',
                        data:'f_ReviseYearQuota'
                    } ,
                    {
                        title:'调整备注',
                        data:'f_Comment',
                        class:'adjust-comment',
                        render:function(data, type, full, meta){
                            return '<span title="'+data+'">'+data+'</span>'
                        }

                    } ,
                    {
                        title: '编辑操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn alter' data-toggle='modal' data-target='#big-adjust'>编辑</button>"
                    },
                    {
                        title:'删除操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn remove' data-toggle='modal' data-target='#remove-people'>删除</button>"
                    }
                ]
            });
        },200)
    });

    var tableNumber = 0;



    $('.top-btn4').on('click',function(){
        var dom = $('.onFocus');
        if(dom.length == 0){
            myAlter('请选中一行数据进行操作');
            return false;
        }
        var index = $(dom).index() + 1;
        //获取当前ID
        setTimeout(function(){

            var id = dom.children().eq(1).html();
            var datas;
            var postData = [];
            var postData1 = [];
            var postData2 = [];

            //获取后台数据
            $.ajax({
                type: "get",
                timeout:theTimes,
                url: IP + "/SecondUnit/GetUnitQuotaEditPackages",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                data: {
                    unitID:id
                },
                cache: false,
                async : false,
                dataType: "json",
                beforeSend:function(){

                },
                complete:function(){
                    $('#theLoading').modal('hide');
                },
                success: function (data)

                {
                    console.log(data);
                    datas = data;
                    console.log(datas);
                    $('#theLoading').modal('hide');
                    var num = data.f_QuotaEditState;
                    $('#adjust-deploy .choose-radio1 label').eq(num).children().prop('checked','checked');
                    $('#adjust-deploy .choose-radio1 ').children('.row').css({
                        display:'none'
                    });
                    $('#adjust-deploy .choose-radio1 ').children('.row').eq(num).css({
                        display:'block'
                    });

                    $('#adjust-deploy .choose-tables1 ').css({
                        display:'none'
                    });
                    $('#adjust-deploy .choose-tables1 ').eq(num).css({
                        display:'block'
                    });
                    var tableArr = [];
                    if(tableNumber == 1){
                        $('#dateTables1-1').dataTable().fnClearTable();
                    }else if(tableNumber == 2){
                        $('#dateTables11-1').dataTable().fnClearTable();
                    }
                    if( num != 0){
                        if(num == 1){
                            postData1 = data.unitQuotaEdits;
                            tableArr =  postData1;
                        }else if(num == 2){
                            postData2 = data.unitQuotaRevises;
                            tableArr =  postData2;
                        }
                        for( var i = 0 ; i < tableArr.length; i++){
                            num1 = tableArr[i].f_EnergyType;
                            txt = getEnergyType(num1);
                            tableArr[i].f_EnergyName = txt;

                        }

                        if(num == 2){
                            _table = $('#dateTables11-1').dataTable();


                        }else if(num == 1){
                            _table = $('#dateTables1-1').dataTable();
                        }
                        tableNumber = num;
                        _table.dataTable().fnClearTable();
                        setDatas(tableArr);
                    };
                    $('.add-row-big').off('click');
                    $('.add-row-big').on('click',function(){


                        var txt1 = $(this).prev().children('.add-input').val();
                        var txt2 = $(this).parent().prev().prev().find('.add-input-select').children('span').html();
                        var id = $(this).parent().prev().prev().find('.add-input-select').children('span').attr('ids');
                        var txt3 = $(this).parent().prev().find('.add-input').val();

                        var dom = $(this).parent().prev().find('.add-input');
                        if(isNaN(txt3 / 1) ||　txt3 == ''){
                            myAlter('月定额量 必须为数字');
                            getFocus1(dom);
                            return false;
                        };
                        for(var i=0 ; i<postData2.length; i++){
                            if(postData2[i].f_EnergyType == id){
                                myAlter('能耗类型已存在');
                                return false;
                            }
                        };
                        _table = $('#dateTables11-1').dataTable();
                        _table.dataTable().fnClearTable();

                        var obj2 = {
                            "f_EnergyType": id,
                            "f_EnergyName" : txt2,
                            "f_ReviseMonthQuota":txt3,
                            "f_ReviseYearQuota":txt3 * 12,
                            "f_Comment":txt1
                        };



                        postData2.push(obj2);
                        console.log(postData2);
                        setDatas(postData2);
                        $('#dateTables11-1')
                    });

                    $('.add-row-small').off('click');
                    $('.add-row-small').on('click',function(){


                        var txt1 = $(this).prev().children('.add-input').val();
                        var txt2 = $(this).parent().prev().prev().find('.add-input-select').children('span').html();
                        var id = $(this).parent().prev().prev().find('.add-input-select').children('span').attr('ids');
                        var txt3 = $(this).parent().prev().find('.add-input').val();

                        var dom = $(this).parent().prev().find('.add-input');
                        if(isNaN(txt3 / 1) ||　txt3 == ''){
                            myAlter('月加减微调值 必须为数字');
                            getFocus1(dom);
                            return false;
                        };
                        for(var i=0 ; i<postData1.length; i++){
                            if(postData1[i].f_EnergyType == id){
                                myAlter('能耗类型已存在');
                                return false;
                            }
                        };

                        _table = $('#dateTables1-1').dataTable();
                        _table.dataTable().fnClearTable();
                        var obj1 = {
                            "f_EnergyType": id,
                            "f_EnergyName" : txt2,
                            "f_MonthEditValue":txt3,
                            "f_YearEditValue":txt3 * 12,
                            "f_Comment":txt1
                        };


                        postData1.push(obj1);
                        console.log(postData1);
                        setDatas(postData1);
                    });

                    //删除按钮
                    $('#dateTables11-1').on('click','.remove',function(){

                        console.log(postData2);
                        var num1 = $(this).parent().parent().index();
                        var txt = $(this).parent().parent().children().eq(0).html();
                        $('#remove-people p b').html(txt);
                        $('#remove-people p span').html("注：本次操作将在提交更改后生效");

                        $('#remove-people .btn-primary').one('click',function(){
                            $('#remove-people').modal('hide');
                            postData2.splice(num1,1);
                            _table = $('#dateTables11-1').dataTable();
                            _table.dataTable().fnClearTable();
                            setDatas(postData2);

                        });



                    })


                    $('#dateTables1-1').on('click','.remove',function(){

                        var num1 = $(this).parent().parent().index();
                        console.log(num);

                        var txt = $(this).parent().parent().children().eq(0).html();
                        $('#remove-people p b').html(txt);
                        $('#remove-people p span').html("注：本次操作将在提交更改后生效");

                        $('#remove-people .btn-primary').one('click',function(){
                            $('#remove-people').modal('hide');
                            postData1.splice(num1,1);
                            _table = $('#dateTables1-1').dataTable();
                            _table.dataTable().fnClearTable();
                            setDatas(postData1);

                        });


                    });

                    //修改按钮
                    $('#dateTables1-1').on('click','.alter',function(){
                        var num0 = $(this).parent().parent().index();

                        var txt1 = $(this).parent().parent().children().eq(0).html();
                        var id = $(this).parent().parent().children().eq(1).html();
                        var txt2 = $(this).parent().parent().children().eq(2).html();
                        var txt3 = $(this).parent().parent().children().eq(4).children('span').html();

                        $('#small-adjust').find('.add-input-select').children('span').html(txt1);
                        $('#small-adjust').find('.add-input-select').children('span').attr('ids',id);
                        $('#small-adjust .add-input').eq(1).val(txt2);
                        $('#small-adjust .add-input').eq(2).val(txt3);

                        $('#small-adjust .btn-primary').off('click');
                        $('#small-adjust .btn-primary').on('click',function(){
                            var txt1 =  $('#small-adjust').find('.add-input-select').children('span').html();
                            var id = $('#small-adjust').find('.add-input-select').children('span').attr('ids');
                            console.log(txt1);
                            console.log(id);
                            var txt2 = $('#small-adjust .add-input').eq(1).val();
                            var txt3 = $('#small-adjust .add-input').eq(2).val();
                            if(num == 1){
                                postData1 = tableArr;
                            }

                            var dom = $('#small-adjust .add-input').eq(1);
                            if(isNaN(txt2 / 1) ||　txt2 == ''){
                                myAlter('月加减微调值 必须为数字');
                                getFocus1(dom);
                                return false;
                            };
                            for(var i=0 ; i<postData1.length; i++){
                                if( i !=num0 && postData1[i].f_EnergyType == id){
                                    myAlter('能耗类型已存在');
                                    return false;
                                }
                            };
                            var obj1 = {
                                "f_EnergyType": id,
                                "f_EnergyName" : txt1,
                                "f_MonthEditValue":txt2,
                                "f_YearEditValue":txt2 * 12,
                                "f_Comment":txt3
                            };

                            console.log(num);


                            postData1[num0] = obj1;

                            _table = $('#dateTables1-1').dataTable();
                            _table.dataTable().fnClearTable();
                            setDatas(postData1);


                            $('#small-adjust').modal('hide');

                        })
                    });

                    $('#dateTables11-1').on('click','.alter',function(){
                        var num0 = $(this).parent().parent().index();

                        var txt1 = $(this).parent().parent().children().eq(0).html();
                        var id = $(this).parent().parent().children().eq(1).html();
                        var txt2 = $(this).parent().parent().children().eq(2).html();
                        var txt3 = $(this).parent().parent().children().eq(4).children('span').html();

                        $('#big-adjust').find('.add-input-select').children('span').html(txt1);
                        $('#big-adjust').find('.add-input-select').children('span').attr('ids',id);
                        $('#big-adjust .add-input').eq(1).val(txt2);
                        $('#big-adjust .add-input').eq(2).val(txt3);

                        $('#big-adjust .btn-primary').off('click');
                        $('#big-adjust .btn-primary').on('click',function(){
                            var txt1 =  $('#big-adjust').find('.add-input-select').children('span').html();
                            var id = $('#big-adjust').find('.add-input-select').children('span').attr('ids');
                            console.log(txt1);
                            console.log(id);
                            var txt2 = $('#big-adjust .add-input').eq(1).val();
                            var txt3 = $('#big-adjust .add-input').eq(2).val();
                            if(num == 2){
                                postData2 = tableArr;
                            }
                            var dom = $('#big-adjust .add-input').eq(1);
                            if(isNaN(txt2 / 1) ||　txt2 == ''){
                                myAlter('月定额量 必须为数字');
                                getFocus1(dom);
                                return false;
                            };
                            for(var i=0 ; i<postData2.length; i++){
                                if( i !=num0 && postData2[i].f_EnergyType == id){
                                    myAlter('能耗类型已存在');
                                    return false;
                                }
                            };

                            var obj1 = {
                                "f_EnergyType": id,
                                "f_EnergyName" : txt1,
                                "f_ReviseMonthQuota":txt2,
                                "f_ReviseYearQuota":txt2 * 12,
                                "f_Comment":txt3
                            };




                            postData2[num0] = obj1;

                            _table = $('#dateTables11-1').dataTable();
                            _table.dataTable().fnClearTable();
                            setDatas(postData2);


                            $('#big-adjust').modal('hide');

                        })
                    });


                },
                error:function (data, textStatus, errorThrown) {
                    console.log(textStatus);
                    if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }else{
                        myAlter(data.responseText.split('"')[3]);
                    }
                    $('#theLoading').modal('hide');

                }

            });

            $('#adjust-deploy .btn-primary').off('click');
            $('#adjust-deploy .btn-primary').on('click',function(){
                var length = $('#adjust-deploy .choose-radio1 label').length;
                console.log(datas);
                console.log(postData1);
                console.log(postData2);
                var editState;
                for(var i=0; i<length; i++){

                    if($('#adjust-deploy .choose-radio1 label').eq(i).children('input').is(":checked")) {
                        editState = i;
                    }
                }

                datas.f_QuotaEditState =  editState;
                if(editState == 0){
                    datas.unitQuotaEdits = [];
                    datas.unitQuotaRevises = [];
                }else if(editState == 1){
                    datas.unitQuotaEdits = postData1;
                    var arr = datas.unitQuotaEdits;
                    for(var i=0; i<arr.length; i++){
                        delete  arr[i].f_EnergyName;
                    }
                    datas.unitQuotaRevises = [];
                    console.log('ok');
                }else if(editState == 2){
                    datas.unitQuotaRevises = postData2;
                    var arr = datas.unitQuotaRevises;
                    for(var i=0; i<arr.length; i++){
                        delete  arr[i].f_EnergyName;
                    }
                    datas.unitQuotaEdits = [];
                    console.log('ok1');
                };
                datas.userID = userName;
                console.log(datas);

                $.ajax({
                    type: "post",
                    timeout:theTimes,
                    url:IP + "/SecondUnit/EditUnitQuotaEditPackages",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                    data:datas,
                    cache: false,
                    async : false,
                    dataType: "json",
                    beforeSend:function(){
                    },
                    complete:function(){
                        $('#theLoading').modal('hide');
                    },
                    success: function (data)

                    {

                        if(data == 3){
                            myAlter('修改失败')
                        };
                        if(data == 99){
                            myAlter('修改成功')
                        }

                        $('#adjust-deploy').modal('hide');

                        _table = $('#dateTables').dataTable();
                        //_table.fnDraw();
                        jumpNow();


                        $('#dateTables tr').eq(index).addClass('onFocus');
                        $('#dateTables1-1').dataTable().fnClearTable();
                        $('#dateTables11-1').dataTable().fnClearTable();

                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {
                        $('#theLoading').modal('hide');
                        $('#adjust-deploy').modal('hide');
                        var txt = XMLHttpRequest.responseText;
                        var hint = txt.split('"')[3];
                        myAlter(hint);
                        if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                            ajaxTimeoutTest.abort();
                            myAlter("超时");
                        }
                        myAlter("请求失败！");
                    }
                });
           })

        },300)


    });

    //$('#adjust-deploy .close').on('click',function(){
    //    $('#dateTables1-1').dataTable().fnClearTable();
    //    $('#dateTables11-1').dataTable().fnClearTable();
    //});

    //修改人员类别

    $('.top-btn5').one('click',function(){
        setTimeout(function(){
            var table8 = $('#dateTables8').DataTable({
                "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                //是否分页
                "destroy": false,//还原初始化了的datatable
                "paging":false,
                "ordering": false,
                'searching':false,
                "sScrollY": '240px',
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
                        title:'人员类别',
                        data:'f_PersonType'

                    },
                    {
                        title:'人员类别ID',
                        data:'fK_PersonType_Relation',
                        class:'theHidden'

                    },

                    {
                        title:'人数或人时',
                        data:'f_PeopleNum'
                    } ,
                    {
                        title:'编辑操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn alter' data-toggle='modal' data-target='#alter-person-type'>编辑</button>"
                    },
                    {
                        title:'删除操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn remove' data-toggle='modal' data-target='#remove-people'>删除</button>"
                    }
                ]
            })
        },200)
    });

    $('.top-btn5').on('click',function(){
        var dom = $('.onFocus');
        if(dom.length == 0){
            myAlter('请选中一行数据进行操作');
            return false;
        }
        var index = $(dom).index() + 1;
        setTimeout(function(){

            var id = dom.children().eq(1).html();
            var datas;
            var postData = [];

            var personNum = $('#index-class .person-type .add-input-select').find('span').attr('unit');
            var personUnits = getPersonUnit(personNum);
            $('#index-class .person-type').next().children('label').html(personUnits +":");
            //获取后台数据
            $.ajax({
                type: "get",
                timeout:theTimes,
                url: IP + "/SecondUnit/GetUnitPeopleRelations",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                data: {
                    unitID:id
                },
                cache: false,
                async : false,
                dataType: "json",
                beforeSend:function(){

                },
                complete:function(){
                    $('#theLoading').modal('hide');
                },
                success: function (data)

                {
                    console.log(data);
                    datas = data;

                    $('#theLoading').modal('hide');


                    _table = $('#dateTables8').dataTable();
                    _table.dataTable().fnClearTable();
                    setDatas(datas);

                    $('.add-row-people').off('click');
                    $('.add-row-people').on('click',function(){

                        var txt1 = $(this).prev().children('.add-input').val();
                        var txt2 = $(this).parent().prev().find('.add-input-select').children('span').html();
                        var id = $(this).parent().prev().find('.add-input-select').children('span').attr('ids');
                        var unit = $(this).parent().prev().find('.add-input-select').children('span').attr('unit');
                        var dom = $(this).prev().children('.add-input');
                        if(txt1 % 1 != 0 || txt1 < 0 || txt1 == '' ){
                            myAlter('人数或人时 必须为正整数');
                            getFocus1(dom);
                            return false;
                        }
                        for(var i=0 ; i< datas.length; i++){
                            if( datas[i].fK_PersonType_Relation == id){
                                myAlter('人员类别已存在');
                                return false;
                            }
                        }

                        _table = $('#dateTables8').dataTable();
                        _table.dataTable().fnClearTable();
                        var obj = {
                            "f_PersonType": txt2,
                            "fK_PersonType_Relation": id,
                            "f_PeopleNum":txt1,
                            "f_IndexUnit":unit
                        };
                        datas.push(obj);
                        setDatas(datas);
                    });
                    $('#dateTables8').off('click')
                    $('#dateTables8').on('click','.remove',function(){
                        var num = $(this).parent().parent().index();
                        var txt = $(this).parent().parent().children().eq(0).html();
                        $('#remove-people p b').html(txt);
                        $('#remove-people p span').html("注：本次操作将在提交更改后生效");

                        $('#remove-people .btn-primary').one('click',function(){

                            $('#remove-people').modal('hide');
                            datas.splice(num,1);
                            _table = $('#dateTables8').dataTable();
                            _table.dataTable().fnClearTable();
                            setDatas(datas);

                        });



                    });
                    $('#dateTables8').on('click','.alter',function(){
                        var num = $(this).parent().parent().index();

                        var txt1 = $(this).parent().parent().children().eq(0).html();
                        var id = $(this).parent().parent().children().eq(1).html();
                        var txt2 = $(this).parent().parent().children().eq(2).html();
                        var unit0;
                        for(var i = 0 ; i < personType.length; i++){
                            if( id == personType[i].pK_PersonType){
                                unit0 = personType[i].f_IndexUnit;
                            }
                        }
                        console.log(unit0);
                        if(unit0 == 0 ){
                            $('#alter-person-type label').eq(1).html('人数:');
                        }else{
                            $('#alter-person-type label').eq(1).html('人时:');
                        }

                        $('#alter-person-type').find('.add-input-select').children('span').html(txt1);
                        $('#alter-person-type').find('.add-input-select').children('span').attr('ids',id);
                        $('#alter-person-type .add-input').eq(1).val(txt2);

                        $('#alter-person-type .btn-primary').off('click');
                        $('#alter-person-type .btn-primary').on('click',function(){
                            var txt1 =  $('#alter-person-type').find('.add-input-select').children('span').html();
                            var id = $('#alter-person-type').find('.add-input-select').children('span').attr('ids');

                            console.log(txt1);
                            console.log(id);
                            var txt2 = $('#alter-person-type .add-input').eq(1).val();
                            var unit;

                            for(var i=0 ; i < personType.length; i++){
                                if(id == personType[i].pK_PersonType){
                                    unit = personType[i].f_IndexUnit;
                                }
                            }
                            var dom = $('#alter-person-type .add-input').eq(1);
                            if(txt2 % 1 != 0 || txt2 < 0 || txt2 == '' ){
                                myAlter('人数或人时 必须为正整数');
                                getFocus1(dom);
                                return false;
                            };
                            for(var i=0; i<datas.length;i++){
                                if( i != num && datas[i].fK_PersonType_Relation == id){
                                    myAlter('人员类别已存在');
                                    return false;
                                }
                            }

                            var obj = {
                                "f_PersonType": txt1,
                                "fK_PersonType_Relation": id,
                                "f_PeopleNum":txt2,
                                "f_IndexUnit":unit
                            };

                            datas[num] = obj;
                            _table = $('#dateTables8').dataTable();
                            _table.dataTable().fnClearTable();
                            setDatas(datas);

                            $('#alter-person-type').modal('hide');

                        })
                    });

                },
                error:function (data, textStatus, errorThrown) {
                    console.log(textStatus);
                    if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }else{
                        myAlter(data.responseText.split('"')[3]);
                    }
                    $('#theLoading').modal('hide');

                }

            });


            //点击提交按钮
            $('#index-class .btn-primary').off('click');
            $('#index-class .btn-primary').on('click',function(){

                $.ajax({
                    type: "post",
                    timeout:theTimes,
                    url:IP + "/SecondUnit/EditUnitPeopleRelationNum",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                    data:{
                        "pK_Unit": id,
                        "unitPeopleRelations":datas,
                        "userID":userName
                    },
                    cache: false,
                    async : false,
                    dataType: "json",
                    beforeSend:function(){
                    },
                    complete:function(){
                        $('#theLoading').modal('hide');
                    },
                    success: function (data)

                    {
                        $('#theLoading').modal('hide');
                        $('#index-class').modal('hide');

                        if(data == 3){
                            myAlter('修改失败')
                        };
                        if(data == 99){
                            myAlter('修改成功')
                        }
                        _table = $('#dateTables').dataTable();
                        //_table.fnDraw();
                        jumpNow();


                        $('#dateTables tr').eq(index).addClass('onFocus');


                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {
                        $('#theLoading').modal('hide');
                        $('#index-class').modal('hide');
                        var txt = XMLHttpRequest.responseText;
                        var hint = txt.split('"')[3];
                        myAlter(hint);
                        if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                            ajaxTimeoutTest.abort();
                            myAlter("超时");
                        }
                        myAlter("请求失败！");

                    }
                });

            })
        },300)
    });

    //修改计费方案
    $('.top-btn6').one('click',function(){
        setTimeout(function(){
            var table10 = $('#dateTables10').DataTable({
                "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                //是否分页
                "destroy": false,//还原初始化了的datatable
                "paging":false,
                "ordering": false,
                'searching':false,
                "sScrollY": '240px',
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
                        title:'能耗类型',
                        data:'f_EnergyName'

                    },
                    {
                        title:'能耗类型ID',
                        data:'f_EnergyType',
                        class:'theHidden'
                    },

                    {
                        title:'计费方案',
                        data:'f_CountName'
                    } ,
                    {
                        title:'计费方案ID',
                        data:'fK_PricePRJ_UnitPrice',
                        class:'theHidden'
                    } ,
                    {
                        title: '编辑操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn alter' data-toggle='modal' data-target='#adjust-count'>编辑</button>"
                    },
                    {
                        title:'删除操作',
                        "targets": -1,
                        "data": null,
                        "defaultContent": "<button class='top-btn remove' data-toggle='modal' data-target='#remove-people'>删除</button>"
                    }
                ]
            })
        },200)
    });

    $('.top-btn6').on('click',function(){
        var dom = $('.onFocus');
        if(dom.length == 0){
            myAlter('请选中一行数据进行操作');
            return false;
        }
        var index = $(dom).index() + 1;
        setTimeout(function(){

            var id = dom.children().eq(1).html();
            console.log(id);
            var datas;
            var postData = [];
            //获取后台数据
            $.ajax({
                type: "get",
                timeout:theTimes,
                url: IP + "/SecondUnit/GetUnitPriceByUnitID",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                data: {
                    unitID:id
                },
                cache: false,
                async : false,
                dataType: "json",
                beforeSend:function(){

                },
                complete:function(){
                    $('#theLoading').modal('hide');
                },
                success: function (data)

                {
                    console.log(data);
                    datas = data;

                    if(datas.length == 0){
                        datas = [];
                    }else{
                        for(var i=0 ; i<datas.length;i++){
                            var energyID = datas[i].f_EnergyType;
                            var countID = datas[i].fK_PricePRJ_UnitPrice;
                            var txt1 = getEnergyType(energyID);
                            var txt2 = getCountName(countID);
                            datas[i].f_EnergyName = txt1;
                            datas[i].f_CountName = txt2;
                        }
                    }
                    $('#theLoading').modal('hide');

                    _table = $('#dateTables10').dataTable();
                    _table.dataTable().fnClearTable();
                    setDatas(datas);

                    //添加操作
                    $('.add-row-count').off('click');
                    $('.add-row-count').on('click',function(){

                        var txt1 = $(this).prev().find('.add-input-select').children('span').html();
                        var id1 = $(this).prev().find('.add-input-select').children('span').attr('ids');
                        var txt2 = $(this).parent().prev().find('.add-input-select').children('span').html();
                        var id2 = $(this).parent().prev().find('.add-input-select').children('span').attr('ids');
                        for(var i=0 ; i<datas.length; i++){
                            if(datas[i].f_EnergyType == id2){
                                myAlter('能耗类型已存在');
                                return false;
                            }
                        };
                        _table = $('#dateTables10').dataTable();
                        _table.dataTable().fnClearTable();
                        var obj = {
                            "f_EnergyName": txt2,
                            "fK_PricePRJ_UnitPrice": id1,
                            "f_CountName":txt1,
                            "f_EnergyType":id2
                        };
                        datas.push(obj);
                        setDatas(datas);

                    });
                    //删除操作
                    $('#dateTables10').off('click')
                    $('#dateTables10').on('click','.remove',function(){
                        var num = $(this).parent().parent().index();
                        var txt = $(this).parent().parent().children().eq(0).html();
                        $('#remove-people p span').html("注：本次操作将在提交更改后生效");
                        $('#remove-people p b').html(txt);

                        $('#remove-people .btn-primary').one('click',function(){
                            $('#remove-people').modal('hide');
                            datas.splice(num,1);
                            _table = $('#dateTables10').dataTable();
                            _table.dataTable().fnClearTable();
                            setDatas(datas);
                        });



                    });
                    //编辑操作
                    $('#dateTables10').on('click','.alter',function(){
                        var num = $(this).parent().parent().index();

                        var txt1 = $(this).parent().parent().children().eq(0).html();
                        var id1 = $(this).parent().parent().children().eq(1).html();
                        var txt2 = $(this).parent().parent().children().eq(2).html();
                        var id2 = $(this).parent().parent().children().eq(3).html();

                        $('#adjust-count').find('.add-input-select').eq(0).children('span').html(txt1);
                        $('#adjust-count').find('.add-input-select').eq(0).children('span').attr('ids',id1);

                        $('#adjust-count').find('.add-input-select').eq(1).children('span').html(txt2);
                        $('#adjust-count').find('.add-input-select').eq(1).children('span').attr('ids',id2);

                        var personArr = [];
                        var personArr1 = [];
                        var html2 = '';

                        for(var i=0;i<countType.length;i++){
                            if(countType[i].f_EnergyType == id1){
                                personArr.push(countType[i].f_PriceGroupName);
                                personArr1.push(countType[i].f_PriceGroupID);
                            }
                        }
                        for(var i = 0 ; i < personArr.length; i++){
                            html2 += '<li ids='+personArr1[i]+'>'+ personArr[i]+'</li>'
                        };
                        $("#adjust-count .add-select-block").eq(1).html(html2);

                        $('#adjust-count .btn-primary').off('click');
                        $('#adjust-count .btn-primary').on('click',function(){
                            var txt1 =  $('#adjust-count').find('.add-input-select').eq(0).children('span').html();
                            var id1 = $('#adjust-count').find('.add-input-select').eq(0).children('span').attr('ids');

                            var txt2 =  $('#adjust-count').find('.add-input-select').eq(1).children('span').html();
                            var id2 = $('#adjust-count').find('.add-input-select').eq(1).children('span').attr('ids');
                            for(var i=0 ; i<datas.length; i++){
                                if(i != num && datas[i].f_EnergyType == id1){
                                    myAlter('能耗类型已存在');
                                    return false;
                                }
                            };
                            var obj = {
                                "f_EnergyName": txt1,
                                "fK_PricePRJ_UnitPrice": id2,
                                "f_CountName":txt2,
                                "f_EnergyType":id1
                            };

                            datas[num] = obj;

                            _table = $('#dateTables10').dataTable();
                            _table.dataTable().fnClearTable();
                            setDatas( datas);
                            hiddrenId();

                            $('#adjust-count').modal('hide');

                        })
                    });
                },
                error:function (data, textStatus, errorThrown) {
                    console.log(textStatus);
                    if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                        ajaxTimeoutTest.abort();
                        myAlter("超时");
                    }else{
                        myAlter(data.responseText.split('"')[3]);
                    }
                    $('#theLoading').modal('hide');

                }

            });


            //点击提交按钮
            $('#count-type .btn-primary').off('click');
            $('#count-type .btn-primary').on('click',function(){

                if(datas.length != 0){
                    for(var i=0 ; i<datas.length; i++){
                        delete datas[i].f_EnergyName;
                        delete datas[i].f_CountName;
                    }
                }
                $.ajax({
                    type: "post",
                    timeout:theTimes,
                    url:IP + "/SecondUnit/EditUnitPrice",
//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
                    data:{
                        "pK_Unit": id,
                        "unitPrices":datas,
                        "userID":userName
                    },
                    cache: false,
                    async : false,
                    dataType: "json",
                    beforeSend:function(){
                    },
                    complete:function(){
                        $('#theLoading').modal('hide');
                    },
                    success: function (data)

                    {
                        $('#theLoading').modal('hide');
                        $('#count-type').modal('hide');

                        if(data == 3){
                            myAlter('修改失败')
                        };
                        if(data == 99){
                            myAlter('修改成功')
                        }
                        _table = $('#dateTables').dataTable();
                        //_table.fnDraw();
                        jumpNow();


                        $('#dateTables tr').eq(index).addClass('onFocus');


                    },
                    error:function (XMLHttpRequest, textStatus, errorThrown) {
                        $('#theLoading').modal('hide');
                        $('#count-type').modal('hide');
                        var txt = XMLHttpRequest.responseText;
                        var hint = txt.split('"')[3];
                        myAlter(hint);
                        if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                            ajaxTimeoutTest.abort();
                            myAlter("超时");
                        }
                        myAlter("请求失败！");
                    }
                });

            })
        },300)
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

    //新增二级单位中 右侧已选定额人工修订列表


    //点击新增二级单位按钮时触发
    $('.top-btn1').one('click',function(){
           setTimeout(function(){
               var table2 = $('#dateTables2').DataTable({
                   "autoWidth": false,  //用来启用或禁用自动列的宽度计算
                   //是否分页
                   "destroy": false,//还原初始化了的datatable
                   "paging":false,
                   "ordering": false,
                   'searching':false,
                   "sScrollY": '300px',
                   "bPaginate": false,
                   "scrollCollapse": true,
                   'language': {
                       'zeroRecords': '没有数据'
                   },

                   'buttons': [

                   ],
                   "dom":'B<"clear">lfrtip',
                   //数据源
                   'columns':[
                       {
                           title:'人员类型',
                           data:'f_PersonType'

                       },
                       {
                           title:'人员ID',
                           data:'fK_PersonType_Relation',
                           class:'theHidden'

                       },
                       {
                           title:'人数或人时',
                           data:'f_PeopleNum'

                       },
                       {
                           title:'编辑操作',
                           "targets": -1,
                           "data": null,
                           "defaultContent": "<button class='top-btn alter' data-toggle='modal' data-target='#alter-person-type'>编辑</button>"
                       },
                       {
                           title:'删除操作',
                           "targets": -1,
                           "data": null,
                           "defaultContent": "<button class='top-btn remove' data-toggle='modal' data-target='#remove-people'>删除</button>"
                       },
                   ],

                   "fnInitComplete": function() {

                   },

               });
           },300)

    });

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
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 条',
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

    $('#min, #max').keyup( function() {
        console.log('11');
        table.draw();
    } );
    var counter = 7;
    $('.adds').on( 'click', function () {
        myAlter('ok');
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

    $('.top-refer').on('click',function(){
        console.log('11');
       //$('#theLoading').css({
       //    display:'block'
       //})
    });

        // Event listener to the two range filtering inputs to redraw on input
})

//弹窗关闭时清空已输入过的信息
$('.modal-header .close').on('click',function(){
    $(this).parent().parent().parent().find('input').val('');
});

$('.modal').modal({backdrop: 'static',  show:false,});


$('#quota .btn-primary').on('click',function(){
    console.log('hello');
});
function addFocus(){
    var position = $('#add-unit .btn-primary').focus();
    console.log(position);

}
//点击确定时触发
$(document).on('keydown',function(e){
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which;

    if(code == 13){
        $('.unit-refer').click();
        return false;
    }
});
//重置按钮
$('.unit-reset').on('click',function(){
    $('.unit-names').val('');
    $('#orgNameInput').prop('checked',false);
    console.log('ok');
});

//点击table中某一行时
$('#dateTables tbody').on('click','tr',function(){
    $('tr').removeClass('onFocus');
    $(this).addClass('onFocus');

});

//获取后台数据
function alarmHistory(){

    var txt1 = $('.unit-names').val();
    var txt2 = $('input[class="rct-form-control"]:checked').val();
    if(txt2 == undefined){
        txt2 = 0;
    }
    dataArr=[];
    $.ajax({
        type:'get',
        url:IP + "/SecondUnit/GetSecondUnitByCondition",
        async:false,
        timeout:theTimes,
        data:{
            unitName: txt1,
            cancelFlag: txt2
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
                dataArr.push(result[i]);
            }
            for(var i=0; i < dataArr.length;i++){
                var nums = dataArr[i].f_QuotaEditState;
                dataArr[i].f_QuotaEditStateWord = getQuotaState(nums);
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
        }

    });
}

//存放单位性质
var unitNature = [];

//存放单位专业
var unitSpecialty = [];

//用于存放人员类型的数组

var personType = [];

//用于存放计费方案
var countType = [];

//获取单位性质
function getUnitNature(){
    $.ajax({
        type:'get',
        url:IP + "/SecondUnit/GetAllUnitNature",
        async:false,
        timeout:theTimes,
        beforeSend:function(){
            $('#theLoading').modal('show');
        },
        complete:function(){
            $('#theLoading').modal('hide');
        },
        success:function(result){
            for(var i=0;i<result.length;i++){
                unitNature.push(result[i]);
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                ajaxTimeoutTest.abort();
                myAlter("超时");
            }
            myAlter("请求失败！");

        }

    });
}
getUnitNature();

//获取单位专业
function getUnitSpecialty(){
    $.ajax({
        type:'get',
        url:IP + "/SecondUnit/GetAllUnitSpecialty",
        async:false,
        timeout:theTimes,
        beforeSend:function(){
            $('#theLoading').modal('show');
        },
        complete:function(){
            $('#theLoading').modal('hide');
        },
        success:function(result){
            for(var i=0;i<result.length;i++){
                unitSpecialty.push(result[i]);
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                ajaxTimeoutTest.abort();
                myAlter("超时");
            }
            myAlter("请求失败！");

        }

    });
}
getUnitSpecialty();

//获取人员类型

function  getPerson(){
    $.ajax({
        type:'get',
        url:IP + "/SecondUnit/GetAllPersonType",
        async:false,
        timeout:theTimes,
        beforeSend:function(){
            $('#theLoading').modal('show');
        },
        complete:function(){
            $('#theLoading').modal('hide');
        },
        success:function(result){
            for(var i=0;i<result.length;i++){
                personType.push(result[i]);
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                ajaxTimeoutTest.abort();
                myAlter("超时");
            }
            myAlter("请求失败！");

        }

    });
}
getPerson();

//获取计费方案

function  getCountType(){
    $.ajax({
        type:'get',
        url:IP + "/SecondUnit/GetALLPriceGroup",
        async:false,
        timeout:theTimes,
        beforeSend:function(){
            $('#theLoading').modal('show');
        },
        complete:function(){
            $('#theLoading').modal('hide');
        },
        success:function(result){
            for(var i=0;i<result.length;i++){
                countType.push(result[i]);
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            if(textStatus=='timeout'){//超时,status还有success,error等值的情况
                ajaxTimeoutTest.abort();
                myAlter("超时");
            }
            myAlter("请求失败！");

        }

    });
}

getCountType();

//将单位性质显示到页面中
function getAllNature(){
    var personArr = [];
    var personArr1 = [];
    var html = '<option value="-1">全部</option>';
    var html2 = '';
    for(var i=0;i<unitNature.length;i++){
        personArr.push(unitNature[i].f_UnitNatureName);
        personArr1.push(unitNature[i].pK_Nature);
    }

    for(var i = 0 ; i < personArr.length; i++){

        html += '<option value="'+personArr1[i]+'">'+personArr[i] +'</option>';
        html2 += '<li ids='+personArr1[i]+'>'+ personArr[i]+'</li>'
    }

    $('#add-unit .add-input-select').eq(0).find('span').html(personArr[0]);
    $('#add-unit .add-input-select').eq(0).find('span').attr('ids',personArr1[0]);
    $('#add-unit .add-select-block').eq(0).html(html2);

    $('#alter-unit .add-input-select').eq(0).find('span').html(personArr[0]);
    $('#alter-unit .add-input-select').eq(0).find('span').attr('ids',personArr1[0]);
    $('#alter-unit .add-select-block').eq(0).html(html2);
};
getAllNature();

//将单位专业显示到页面中
function getAllSpecialty(){
    var personArr = [];
    var personArr1 = [];
    var personArr2 = [];
    var html2 = '';
    for(var i=0;i<unitSpecialty.length;i++){
        personArr.push(unitSpecialty[i].f_SpecialtyName);
        personArr1.push(unitSpecialty[i].pK_Specialty);
        personArr2.push(unitSpecialty[i].f_CoefficientK);
    }

    for(var i = 0 ; i < personArr.length; i++){

        html2 += '<li factor='+personArr2[i] +' ids='+personArr1[i]+'>'+ personArr[i]+'</li>'
    }

    $('#add-unit .add-input-select').eq(1).find('span').html(personArr[0]);
    $('#add-unit .add-input-select').eq(1).find('span').attr('ids',personArr1[0]);
    $('#add-unit .add-input-select').eq(1).find('span').attr('factor',personArr2[0]);
    $('#add-unit .add-select-block').eq(1).html(html2);

    $('#alter-unit .add-input-select').eq(1).find('span').html(personArr[0]);
    $('#alter-unit .add-input-select').eq(1).find('span').attr('ids',personArr1[0]);
    $('#alter-unit .add-input-select').eq(1).find('span').attr('factor',personArr2[0]);
    $('#alter-unit .add-select-block').eq(1).html(html2);
};
getAllSpecialty();

//将人员类别显示到页面中
function getAllPerson(){
    var personArr = [];
    var personArr1 = [];
    var personArr2 = [];
    var html2 = '';
    for(var i=0;i<personType.length;i++){
        personArr.push(personType[i].f_PersonType);
        personArr1.push(personType[i].pK_PersonType);
        personArr2.push(personType[i].f_IndexUnit);
    }

    for(var i = 0 ; i < personArr.length; i++){
        html2 += '<li unit='+personArr2[i]+' ids='+personArr1[i]+'>'+ personArr[i]+'</li>'
    }
    $('#add-unit .person-type .add-input-select').eq(0).find('span').html(personArr[0]);
    $('#add-unit .person-type .add-input-select').eq(0).find('span').attr('ids',personArr1[0]);
    $('#add-unit .person-type .add-input-select').eq(0).find('span').attr('unit',personArr2[0]);
    $('#add-unit .person-type .add-select-block').eq(0).html(html2);

    $('#index-class .add-input-select').eq(0).find('span').html(personArr[0]);
    $('#index-class .add-input-select').eq(0).find('span').attr('ids',personArr1[0]);
    $('#index-class .add-input-select').eq(0).find('span').attr('unit',personArr2[0]);
    $('#index-class .add-select-block').eq(0).html(html2);

    $('#alter-person-type .add-input-select').eq(0).find('span').html(personArr[0]);
    $('#alter-person-type .add-input-select').eq(0).find('span').attr('ids',personArr1[0]);
    $('#alter-person-type .add-input-select').eq(0).find('span').attr('unit',personArr2[0]);
    $('#alter-person-type .add-select-block').eq(0).html(html2);
};
getAllPerson();

//获取全部能耗类型
function  getAllEnergy(dom){
    var arr1 = [];
    var arr2 = [];
    var txt = energyType.alltypes;
    var html2 = '';
    for(var i=0 ; i < txt.length; i++){
        var id = parseInt(txt[i].ettype);
        var type = txt[i].etname;
        arr1.push(id);
        arr2.push(type);
    }
    for(var i = 0 ; i < arr2.length; i++){

        html2 += '<li ids="'+arr1[i]+'">'+ arr2[i]+'</li>'
    }
    for(var i=0; i<$(dom).length; i++){
        $(dom).eq(i).find('.add-input-select').eq(0).find('span').html(arr2[0]);
        $(dom).eq(i).find('.add-select-block').eq(0).html(html2);
        $(dom).eq(i).find('.add-input-select').eq(0).find('span').attr('ids',arr1[0]);
    }
    var theID = $('.change-count').prev().find('span').attr('ids');
    var sss = $('.change-count').prev().find('span');
    getCount(theID);
}
getAllEnergy('.energy-type');

//将所有计费方案放入页面中

function getCount(num){
    var id = num;
    var personArr = [];
    var personArr1 = [];
    var html2 = '';

    for(var i=0;i<countType.length;i++){
      if(countType[i].f_EnergyType == id){
          personArr.push(countType[i].f_PriceGroupName);
          personArr1.push(countType[i].f_PriceGroupID);
      }
    }
    for(var i = 0 ; i < personArr.length; i++){
        html2 += '<li ids='+personArr1[i]+'>'+ personArr[i]+'</li>'
    };

    $('.count-type .add-input-select').find('span').html(personArr[0]);
    $('.count-type .add-input-select').find('span').attr('ids',personArr1[0]);
    $('.count-type .add-select-block').eq(0).html(html2);
    if(personArr1.length == 0){
        $('.count-type .add-input-select').find('span').html('');
        $('.count-type .add-input-select').find('span').attr('ids','');
    };

    $('.count-types .add-input-select').find('span').html(personArr[0]);
    $('.count-types .add-input-select').find('span').attr('ids',personArr1[0]);
    $('.count-types .add-select-block').eq(0).html(html2);
    if(personArr1.length == 0){
        $('.count-types .add-input-select').find('span').html('');
        $('.count-types .add-input-select').find('span').attr('ids','');
    };
};

function getCount1(num){
    var id = num;
    var personArr = [];
    var personArr1 = [];
    var html2 = '';

    for(var i=0;i<countType.length;i++){
        if(countType[i].f_EnergyType == id){
            personArr.push(countType[i].f_PriceGroupName);
            personArr1.push(countType[i].f_PriceGroupID);
        }
    }
    for(var i = 0 ; i < personArr.length; i++){
        html2 += '<li ids='+personArr1[i]+'>'+ personArr[i]+'</li>'
    };
    $('.count-type1 .add-input-select').find('span').html(personArr[0]);
    $('.count-type1 .add-input-select').find('span').attr('ids',personArr1[0]);
    $('.count-type1 .add-select-block').eq(0).html(html2);
    if(personArr1.length == 0){
        $('.count-type1 .add-input-select').find('span').html('');
        $('.count-type1 .add-input-select').find('span').attr('ids','');
    };
};
$('.change-count').on('click',function(){

    var num = $(this).prev().find('span').attr('ids');
    var txt = $(this).prev().find('span').html();
    $('.change-count').prev().find('span').html(txt);
    $('.change-count').prev().find('span').attr('ids',num);
    console.log(num);
    getCount(num);
});

$('.change-count1').on('click',function(){
    var num = $(this).prev().find('span').attr('ids');
    var txt = $(this).prev().find('span').html();
    $('.change-count1').prev().find('span').html(txt);
    $('.change-count1').prev().find('span').attr('ids',num);
    getCount1(num);

});

//新增弹窗中的人员类别添加按钮
thePerson = [];
$('.add-person-table').on('click',function(){

    var txt1 = $(this).prev().children('.add-input').val();
    console.log(txt1);

    var txt2 = $(this).parent().prev().find('.add-input-select').children('span').html();
    var id = $(this).parent().prev().find('.add-input-select').children('span').attr('ids');
    var unit = $(this).parent().prev().find('.add-input-select').children('span').attr('unit');
    var dom = $(this).prev().children('.add-input');
    if(txt1 % 1 != 0 || txt1 < 0 || txt1 == '' ){
        myAlter('人数或人时 必须为正整数');
        getFocus1(dom);
        return false;
    }
    for(var i=0 ; i<thePerson.length; i++){
        if(thePerson[i].f_PersonType == txt2){
            myAlter('人员类别已存在');
            return false;
        }
    }
    var obj = {
      "f_PersonType": txt2,
        "fK_PersonType_Relation": id,
        "f_PeopleNum":txt1,
        "f_IndexUnit":unit
    };

    _table = $('#dateTables2').dataTable();
    _table.dataTable().fnClearTable();
    thePerson.push(obj);

    //给表格添加后台获取到的数据
    setDatas(thePerson);
    hiddrenId();
});

//删除操作

$('#dateTables2').on('click','.remove',function(){
    var num = $(this).parent().parent().index();
    var txt = $(this).parent().parent().children().eq(0).html();
    $('#remove-people p b').html(txt);
    $('#remove-people .btn-primary').one('click',function(){
        $('#remove-people').modal('hide');
        thePerson.splice(num,1);
        console.log(thePerson);
        _table = $('#dateTables2').dataTable();
        _table.dataTable().fnClearTable();
        setDatas(thePerson);
        hiddrenId();

    });

});

//编辑操作
$('#dateTables2').on('click','.alter',function(){
    console.log('ok');
    var num = $(this).parent().parent().index();

    var txt1 = $(this).parent().parent().children().eq(0).html();
    var id = $(this).parent().parent().children().eq(1).html();
    var txt2 = $(this).parent().parent().children().eq(2).html();
    var unit0;
    for(var i = 0 ; i < personType.length; i++){
        if( id == personType[i].pK_PersonType){
            unit0 = personType[i].f_IndexUnit;
        }
    }
    console.log(unit0);
    if(unit0 == 0 ){
        $('#alter-person-type label').eq(1).html('人数:');
    }else{
        $('#alter-person-type label').eq(1).html('人时:');
    }

    $('#alter-person-type').find('.add-input-select').children('span').html(txt1);
    $('#alter-person-type').find('.add-input-select').children('span').attr('ids',id);
    $('#alter-person-type .add-input').eq(1).val(txt2);

    $('#alter-person-type .btn-primary').off('click');
    $('#alter-person-type .btn-primary').on('click',function(){
        var txt1 =  $('#alter-person-type').find('.add-input-select').children('span').html();
        var id = $('#alter-person-type').find('.add-input-select').children('span').attr('ids');
        console.log(txt1);
        console.log(id);
        var txt2 = $('#alter-person-type .add-input').eq(1).val();
        var unit;
        for(var i=0 ; i < personType.length; i++){
            if(id == personType[i].pK_PersonType){
                unit = personType[i].f_IndexUnit;
            }
        }
        var dom = $('#alter-person-type .add-input').eq(1);
        if(txt2 % 1 != 0 || txt2 < 0 || txt2 == '' ){
            myAlter('人数或人时 必须为正整数');
            getFocus1(dom);
            return false;
        };
        for(var i=0; i<thePerson.length;i++){
            if( i != num && thePerson[i].fK_PersonType_Relation == id){
                myAlter('人员类别已存在');
                return false;
            }
        }
        var obj = {
            "f_PersonType": txt1,
            "fK_PersonType_Relation": id,
            "f_PeopleNum":txt2,
            "f_IndexUnit":unit
        };

        thePerson[num] = obj;
        console.log(thePerson);
        _table = $('#dateTables2').dataTable();
        _table.dataTable().fnClearTable();
        setDatas(thePerson);
        hiddrenId();

        $('#alter-person-type').modal('hide');

    })
});

//点击关闭按钮时清除table数据
 $('#add-unit .modal-header .close').on('click',function(){
    if(thePerson.length != 0){
        $('#dateTables2').dataTable().fnClearTable();
        thePerson = [];
    };
     if(theSmallAd.length != 0){
         $('#dateTables1').dataTable().fnClearTable();
         theSmallAd = [];
         postSmall = [];
     };
     if(theQuotaAd.length != 0){
         $('#dateTables11').dataTable().fnClearTable();
         theQuotaAd = [];
         postBig = [];
     };
     console.log(thePriceAd);
     if(thePriceAd.length != 0){
         $('#dateTables9').dataTable().fnClearTable();
         thePriceAd = [];
         postPrice = [];
     };
     $('#add-unit .choose-radio').children().eq(0).find('input').prop('checked','checked');
     $('#add-unit .choose-radio').children('.row').css({
         display:'none'
     });
     $('#add-unit .choose-radio').children('.row').eq(0).css({
         display:'block'
     })

     //$('#dateTables9').dataTable().fnClearTable();
     //$('#dateTables11').dataTable().fnClearTable();
 });

//新增弹窗中的加减微调添加按钮
theSmallAd = [];
var postSmall = [];
$('.small-adjust').on('click',function(){



    var txt1 = $(this).prev().children('.add-input').val();
    var txt2 = $(this).parent().prev().prev().find('.add-input-select').children('span').html();
    var id = $(this).parent().prev().prev().find('.add-input-select').children('span').attr('ids');
    var txt3 = $(this).parent().prev().find('.add-input').val();
    var dom = $(this).parent().prev().find('.add-input');
    if(isNaN(txt3 / 1) ||　txt3 == ''){
        myAlter('月加减微调值 必须为数字');
        getFocus1(dom);
        return false;
    };
    for(var i=0 ; i<theSmallAd.length; i++){
        if(theSmallAd[i].energyID == id){
            myAlter('能耗类型已存在');
            return false;
        }
    };

    var obj = {
        "energyType": txt2,
        "energyID": id,
        "mouthNum":txt3,
        "yearNum":txt3 * 12,
        "remark":txt1
    };
    theSmallAd.push(obj);

    _table = $('#dateTables1').dataTable();
    _table.dataTable().fnClearTable();

    var obj1 = {
        "f_EnergyType": id,
        "f_MonthEditValue":txt3,
        "f_YearEditValue":txt3 * 12,
        "f_Comment":txt1
    };

    postSmall.push(obj1);
    //给表格添加后台获取到的数据
    setDatas(theSmallAd);
    hiddrenId();
});
//删除操作

$('#dateTables1').on('click','.remove',function(){
    var num = $(this).parent().parent().index();
    console.log(num);
    var txt = $(this).parent().parent().children().eq(0).html();
    $('#remove-people p b').html(txt);
    $('#remove-people .btn-primary').one('click',function(){
        $('#remove-people').modal('hide');
        theSmallAd.splice(num,1);
        postSmall.splice(num,1);
        console.log(theSmallAd);
        _table = $('#dateTables1').dataTable();
        _table.dataTable().fnClearTable();
        setDatas(theSmallAd);
        hiddrenId();

    });

});

//编辑操作

$('#dateTables1').on('click','.alter',function(){
    var num = $(this).parent().parent().index();

    var txt1 = $(this).parent().parent().children().eq(0).html();
    var id = $(this).parent().parent().children().eq(1).html();
    var txt2 = $(this).parent().parent().children().eq(2).html();
    var txt3 = $(this).parent().parent().children().eq(4).children('span').html();

    $('#small-adjust').find('.add-input-select').children('span').html(txt1);
    $('#small-adjust').find('.add-input-select').children('span').attr('ids',id);
    $('#small-adjust .add-input').eq(1).val(txt2);
    $('#small-adjust .add-input').eq(2).val(txt3);

    $('#small-adjust .btn-primary').off('click');
    $('#small-adjust .btn-primary').on('click',function(){
        var txt1 =  $('#small-adjust').find('.add-input-select').children('span').html();
        var id = $('#small-adjust').find('.add-input-select').children('span').attr('ids');
        console.log(txt1);
        console.log(id);
        var txt2 = $('#small-adjust .add-input').eq(1).val();
        var txt3 = $('#small-adjust .add-input').eq(2).val();
        var unit;
        var dom = $('#small-adjust .add-input').eq(1);
        if(isNaN(txt2 / 1) ||　txt2 == ''){
            myAlter('月加减微调值 必须为数字');
            getFocus1(dom);
            return false;
        };
        for(var i=0 ; i<postSmall.length; i++){
            if( i !=num && postSmall[i].f_EnergyType == id){
                myAlter('能耗类型已存在');
                return false;
            }
        };
        var obj = {
            "energyType": txt1,
            "energyID": id,
            "mouthNum":txt2,
            "yearNum":txt2 * 12,
            "remark":txt3
        };
        var obj1 = {
            "f_EnergyType": id,
            "f_MonthEditValue":txt2,
            "f_YearEditValue":txt2 * 12,
            "f_Comment":txt3
        };

        theSmallAd[num] = obj;
        postSmall[num] = obj1;

        _table = $('#dateTables1').dataTable();
        _table.dataTable().fnClearTable();
        setDatas(theSmallAd);
        hiddrenId();

        $('#small-adjust').modal('hide');

    })
});

//新增弹窗中的人工修订添加按钮
theQuotaAd = [];
var postBig = [];
$('.quota-adjust').on('click',function(){



    var txt1 = $(this).prev().children('.add-input').val();
    var txt2 = $(this).parent().prev().prev().find('.add-input-select').children('span').html();
    var id = $(this).parent().prev().prev().find('.add-input-select').children('span').attr('ids');
    var txt3 = $(this).parent().prev().find('.add-input').val();

    var dom = $(this).parent().prev().find('.add-input');
    if(isNaN(txt3 / 1) || txt3 == ''){
        myAlter('月定额量 必须为数字');
        getFocus1(dom);
        return false;
    };
    for(var i=0 ; i<theQuotaAd.length; i++){
        if(theQuotaAd[i].energyID == id){
            myAlter('能耗类型已存在');
            return false;
        }
    };

    _table = $('#dateTables11').dataTable();
    _table.dataTable().fnClearTable();
    var obj = {
        "energyType": txt2,
        "energyID": id,
        "mouthNum":txt3,
        "yearNum":txt3 * 12,
        "remark":txt1
    };
    theQuotaAd.push(obj);

    var obj1 = {
        "f_EnergyType": id,
        "f_ReviseMonthQuota":txt3,
        "f_ReviseYearQuota":txt3 * 12,
        "f_Comment":txt1
    };
    postBig.push(obj1);

    //给表格添加后台获取到的数据
    setDatas(theQuotaAd);
    hiddrenId();
});

//删除操作

$('#dateTables11').on('click','.remove',function(){
    var num = $(this).parent().parent().index();
    var txt = $(this).parent().parent().children().eq(0).html();
    $('#remove-people p b').html(txt);
    $('#remove-people .btn-primary').one('click',function(){
        $('#remove-people').modal('hide');
        theQuotaAd.splice(num,1);
        postBig.splice(num,1);

        _table = $('#dateTables11').dataTable();
        _table.dataTable().fnClearTable();
        setDatas(theQuotaAd);
        hiddrenId();

    });


});

//编辑操作

$('#dateTables11').on('click','.alter',function(){
    var num = $(this).parent().parent().index();

    var txt1 = $(this).parent().parent().children().eq(0).html();
    var id = $(this).parent().parent().children().eq(1).html();
    var txt2 = $(this).parent().parent().children().eq(2).html();
    var txt3 = $(this).parent().parent().children().eq(4).children('span').html();

    $('#big-adjust').find('.add-input-select').children('span').html(txt1);
    $('#big-adjust').find('.add-input-select').children('span').attr('ids',id);
    $('#big-adjust .add-input').eq(1).val(txt2);
    $('#big-adjust .add-input').eq(2).val(txt3);

    $('#big-adjust .btn-primary').off('click');
    $('#big-adjust .btn-primary').on('click',function(){
        var txt1 =  $('#big-adjust').find('.add-input-select').children('span').html();
        var id = $('#big-adjust').find('.add-input-select').children('span').attr('ids');
        console.log(txt1);
        console.log(id);
        var txt2 = $('#big-adjust .add-input').eq(1).val();
        var txt3 = $('#big-adjust .add-input').eq(2).val();
        var unit;

        var dom = $('#big-adjust .add-input').eq(1);
        if(isNaN(txt2 / 1) ||　txt2 == ''){
            myAlter('月定额量 必须为数字');
            getFocus1(dom);
            return false;
        };
        for(var i=0 ; i<postBig.length; i++){
            if( i !=num && postBig[i].f_EnergyType == id){
                myAlter('能耗类型已存在');
                return false;
            }
        };

        var obj = {
            "energyType": txt1,
            "energyID": id,
            "mouthNum":txt2,
            "yearNum":txt2 * 12,
            "remark":txt3
        };
        var obj1 = {
            "f_EnergyType": id,
            "f_ReviseMonthQuota":txt2,
            "f_ReviseYearQuota":txt2 * 12,
            "f_Comment":txt3
        };

        theQuotaAd[num] = obj;
        postBig[num] = obj1;

        _table = $('#dateTables11').dataTable();
        _table.dataTable().fnClearTable();
        setDatas(theQuotaAd);
        hiddrenId();

        $('#big-adjust').modal('hide');

    })
});
//新增弹窗中的计费方案添加按钮
thePriceAd = [];
var postPrice = [];
$('.price-group').on('click',function(){

    var txt1 = $(this).prev().find('.add-input-select').children('span').html();
    var id1 = $(this).prev().find('.add-input-select').children('span').attr('ids');
    var txt2 = $(this).parent().prev().find('.add-input-select').children('span').html();
    var id2 = $(this).parent().prev().find('.add-input-select').children('span').attr('ids');


    for(var i=0 ; i<thePriceAd.length; i++){
        if(thePriceAd[i].energyID == id2){
            myAlter('能耗类型已存在');
            return false;
        }
    };

    _table = $('#dateTables9').dataTable();
    _table.dataTable().fnClearTable();
    var obj = {
        "energyType": txt2,
        "energyID": id2,
        "countType":txt1,
        "countID":id1,
    };
    thePriceAd.push(obj);
    console.log(thePriceAd);
    var obj1 = {
        "f_EnergyType": id2,
        "fK_PricePRJ_UnitPrice":id1,
    };

    postPrice.push(obj1);

    //给表格添加后台获取到的数据
    setDatas(thePriceAd);
    hiddrenId();
});

//编辑操作

$('#dateTables9').on('click','.alter',function(){
    var num = $(this).parent().parent().index();

    var txt1 = $(this).parent().parent().children().eq(0).html();
    var id1 = $(this).parent().parent().children().eq(1).html();
    var txt2 = $(this).parent().parent().children().eq(2).html();
    var id2 = $(this).parent().parent().children().eq(3).html();

    $('#adjust-count').find('.add-input-select').eq(0).children('span').html(txt1);
    $('#adjust-count').find('.add-input-select').eq(0).children('span').attr('ids',id1);

    $('#adjust-count').find('.add-input-select').eq(1).children('span').html(txt2);
    $('#adjust-count').find('.add-input-select').eq(1).children('span').attr('ids',id2);

    var personArr = [];
    var personArr1 = [];
    var html2 = '';

    for(var i=0;i<countType.length;i++){
        if(countType[i].f_EnergyType == id1){
            personArr.push(countType[i].f_PriceGroupName);
            personArr1.push(countType[i].f_PriceGroupID);
        }
    }
    for(var i = 0 ; i < personArr.length; i++){
        html2 += '<li ids='+personArr1[i]+'>'+ personArr[i]+'</li>'
    };
    $("#adjust-count .add-select-block").eq(1).html(html2);

    $('#adjust-count .btn-primary').off('click');
    $('#adjust-count .btn-primary').on('click',function(){
        var txt1 =  $('#adjust-count').find('.add-input-select').eq(0).children('span').html();
        var id1 = $('#adjust-count').find('.add-input-select').eq(0).children('span').attr('ids');

        var txt2 =  $('#adjust-count').find('.add-input-select').eq(1).children('span').html();
        var id2 = $('#adjust-count').find('.add-input-select').eq(1).children('span').attr('ids');

        for(var i=0 ; i<postPrice.length; i++){
            if(i != num && postPrice[i].f_EnergyType == id1){
                myAlter('能耗类型已存在');
                return false;
            }
        };
        var obj = {
            "energyType": txt1,
            "energyID": id1,
            "countType":txt2,
            "countID":id2
        };
        var obj1 = {
            "f_EnergyType": id1,
            "fK_PricePRJ_UnitPrice":id2,
        };

        thePriceAd[num] = obj;
        postPrice[num] = obj1;

        _table = $('#dateTables9').dataTable();
        _table.dataTable().fnClearTable();
        setDatas(thePriceAd);
        hiddrenId();

        $('#adjust-count').modal('hide');

    })
});

//删除操作
$('#dateTables9').on('click','.remove',function(){
    var num = $(this).parent().parent().index();
    console.log(num);

    var txt = $(this).parent().parent().children().eq(0).html();
    $('#remove-people p b').html(txt);
    $('#remove-people .btn-primary').one('click',function(){
        $('#remove-people').modal('hide');
        thePriceAd.splice(num,1);
        postPrice.splice(num,1);
        _table = $('#dateTables9').dataTable();
        _table.dataTable().fnClearTable();
        setDatas(thePriceAd);
    });



});

//删除表单中的数据
function removeTable(){
    if(thePerson.length != 0){
        $('#dateTables2').dataTable().fnClearTable();
        thePerson = [];
    };
    if(theSmallAd.length != 0){
        $('#dateTables1').dataTable().fnClearTable();
        theSmallAd = [];
        postSmall = [];
    };
    if(theQuotaAd.length != 0){
        $('#dateTables11').dataTable().fnClearTable();
        theQuotaAd = [];
        postBig = [];
    };
    if(thePriceAd.length != 0){
        $('#dateTables9').dataTable().fnClearTable();
        thePriceAd = [];
        postPrice = [];
    };
};

$('#add-unit .btn-default').on('click',function(){
    removeTable();
});

$('.choose-education').eq(0).on('click',function(){
    $('.row-left').css({
        display:'block'
    });
    $('.row-right').css({
        display:'none'
    });

});
$('.choose-education').eq(1).on('click',function(){
    $('.row-right').css({
        display:'block'
    });
    $('.row-left').css({
        display:'none'
    });

});

//判断当前手工调整状态
function judgeState(num){
    if(num == 0){
        return '已禁用'
    }else if(num == 1){
        return '加减微调'
    }else if(num == 2){
        return '人工修订'
    }
};


//获取对应的计费方案
function getCountName(num){
    var id = num;
    for(var i=0;i<countType.length;i++){
        if(countType[i].f_PriceGroupID == id){
            return countType[i].f_PriceGroupName;

        }
    }
};

//判断必填项是否填写
function checkedText(){
    var num = $('#add-unit .first-row .input-label').length;
    for(var i=0; i < num; i++){
        (function (i) {
            $('#add-unit .first-row .input-label').eq(i).next().children('input').on('blur',function(){
                if( $('#add-unit .first-row .input-label').eq(i).next().children('input').val() == ''){
                    var txt = $(this).parent().prev().html().split('：')[0];
                    $('#check-text').modal('show');
                    $('#check-text p b').html(txt);
                    return false;
                };

            });
        })(i);

    }
}

function checkedText1(){
    var num = $('#add-unit .first-row .input-label').length;
    console.log(num);
    for(var i=0; i< num; i++){
        if( $('#add-unit .first-row .input-label').eq(i).next().children('input').val() == ''){
            var txt = $('#add-unit .first-row .input-label').eq(i).next().children('input').parent().prev().html().split('：')[0];

            console.log(txt);
            $('#check-text').modal('show');
            $('#check-text p b').html(txt);
            $('#check-text p span').html('不能为空');
           getFocus($('#add-unit .first-row .input-label').eq(i).next().children('input'));
            return false;
        };
        if($('#add-unit .first-row .input-label').eq(i).next().find('.add-input-select').children('span').html() == ''){
            var txt = $('#add-unit .first-row .input-label').eq(i).html().split('：')[0];
            $('#check-text').modal('show');
            $('#check-text p b').html(txt);
            $('#check-text p span').html('不能为空');
            return false;
        }
    }
    return true;
}

function checkedText11(){
    var num = $('#alter-unit .input-label').length;
    console.log(num);
    for(var i=0; i< num; i++){
        if( $('#alter-unit .input-label').eq(i).next().children('input').val() == ''){
            var txt = $('#alter-unit .input-label').eq(i).next().children('input').parent().prev().html().split('：')[0];

            console.log(txt);
            $('#check-text').modal('show');
            $('#check-text p b').html(txt);
            $('#check-text p span').html('不能为空');
            getFocus($('#alter-unit .input-label').eq(i).next().children('input'));
            return false;
        };
        if($('#alter-unit .input-label').eq(i).next().find('.add-input-select').children('span').html() == ''){
            var txt = $('#alter-unit .input-label').eq(i).html().split('：')[0];
            $('#check-text').modal('show');
            $('#check-text p b').html(txt);
            $('#check-text p span').html('不能为空');
            return false;
        }
    }
    return true;
}
//判断输入内容是否为数字
function checkedText2(dom){
    var num = $(dom).find('.type-number').length;
   for(var i=0; i<num; i++){
       var txt = $(dom).find('.type-number').eq(i).find('input').val() / 1;
       console.log( txt / 1);
       if(isNaN(txt)){
          var txt1 = $(dom).find('.type-number').eq(i).children('label').html().split('：')[0];
           console.log(txt1);
           $('#check-text').modal('show');
           $('#check-text p b').html(txt1);
           $('#check-text p span').html('必须为数字');
           getFocus($(dom).find('.type-number').eq(i).find('input'));
           return false;
       }
   }
    return true;
}

//判断输入是否为电话号码

function checkedPhone(dom){
    var txt = $(dom).find('.type-phone').find('input').val();
    if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(txt))){
        $('#check-text').modal('show');
        $('#check-text p b').html('手机号');
        $('#check-text p span').html('输入错误');
        getFocus($(dom).find('.type-phone').find('input'));
        return false
    }
    return true;
}


//当人员类别改变时 对应的单位进行改变
$('.person-type .add-select-block li').on('click',function(){
    var num = $(this).attr('unit');

    var txt = getPersonUnit(num);

    $(this).parents('.person-type').next().children('label').html(txt + ":");

});

//提交更改后跳转到当前页
function jumpNow(){
    var txt = $('#dateTables_paginate').children('span').children('.current').html();

        ajaxSuccess();
        var num = txt - 1;
        var dom = $('#dateTables_paginate').children('span').children().eq(num);
        console.log(txt);
        console.log(dom);
        dom.click();

}

