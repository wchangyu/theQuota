/**
 * Created by admin on 2017/2/22.
 */

var userName = 'xiaohong';
var IP1 = "http://192.168.1.114/BEEWebAPI/api";
var IP2 = 'http://211.100.28.180/DingEAPI/api';
var IP = IP2;

var theTimes = 10000;
var energyType = {
    "alltypes":[
        {"etid":"01",
            "ettype":"100",
            "etname":"电",
            "etunit":"kWh",
            "img":"totalEner.png",
            "color":"#bce3de",
            "img2":"electricity.png"
        },
        {"etid":"211",
            "ettype":"200",
            "etname":"水",
            "etunit":"t",
            "img":"totalWater.png",
            "color":"#fcbf92",
            "img2":"water.png"
        },
        {"etid":"311",
            "etname":"气",
            "ettype":"300",
            "etunit":"m3",
            "img":"totalQi.png",
            "color":"#b1cade",
            "img2":"gas.png"
        },
        {"etid":"412",
            "ettype":"400",
            "etname":"暖",
            "etunit":"MJ",
            "img":"",
            "color":"#b1cade",
            "img2":"hot.png"
        },
        {"etid":"511",
            "ettype":"500",
            "etname":"冷",
            "etunit":"MJ",
            "img":"",
            "color":"#b1cade",
            "img2":"cold.png"
        }
    ]};

//弹窗关闭时清空已输入过的信息

$('.modal-header .close').on('click',function(){
    $(this).parent().parent().parent().find('input').val('');
});
$('.modal-footer .btn-default').on('click',function(){

    $(this).parent().parent().parent().find('input').val('');

});


//检测输入值是否符合要求
function checkWord(password)
{
    $('.hint-text1').css({
        display:'inline-block'
    })
    var reg=/^[1-9][0-9]*$|^(?:[1-9][0-9]*\.[0-9]+|0\.(?!0+$)[0-9]+)$/g;
    if(!reg.test(password)) {

        return false;
    }

    return true;
}


//给表格加入数据
function setData(){
    if(dataArr && dataArr.length>0){
        _table.fnAddData(dataArr);
        _table.fnDraw();

    }
}

//给表格加入数据a
function setDatas(arr){
    if(arr && arr.length>0){
        _table.fnAddData(arr);
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


    _table.fnClearTable();
    alarmHistory();
    setData();
    hiddrenId();

}



//获取对应的能耗类型
function getEnergyType(num){
    var txt = energyType.alltypes;
    for(var i=0; i < txt.length; i++){
        if(num == txt[i].ettype){
            return txt[i].etname;
        }
    }
}

//获取对应的能耗类型单位
function getEnergyUnit(num){
    var txt = energyType.alltypes;
    for(var i=0; i < txt.length; i++){
        if(num == txt[i].ettype){
            return txt[i].etunit;
        }
    }
}

//获取人员类别单位
function getPersonUnit(num){
    if(num == 0){
        return '人数'
    }else if(num == 1){
        return '人时'
    }
}

//获取手工调整状态
function getQuotaState(num){
    if(num == 0){
        return "禁用"
    }else if(num == 1){
        return '加减微调'
    }else if(num == 2){
        return '人工修订'
    }
}

//自定义弹窗
function myAlter(string){
    $('#my-alert').modal('show');
    $('#my-alert p b').html(string);
}
//点击确定时触发
//$(document).on('keydown',function(e){
//    var theEvent = window.event || e;
//    var code = theEvent.keyCode || theEvent.which;
//
//    if(code == 13){
//        $('.in .btn-primary').click();
//        return false;
//    }
//})

