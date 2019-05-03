/**
 * @name      FAQ Plugin
 * @author    Rod Howard
 * @url       http://goideate.com
 * @date      April 28, 2012
 * @license   GNU/GPL Version 3
 *
 *
 * Example:
 *
 *   $(function() {
 *     $("element, #id, .class").technify({
 *       // #{EDIT-HERE}# Your run-time options go here ...
 *     });
 *   });
 */
/**
 * Create an anonymous function to avoid library conflicts
 */
(function ($) {
    /**
     * Add our plugin to the jQuery.fn object
     */
    $.fn.goFaq = function (options) {
        //	//debugger
        /**
         * Define some default settings
         */
        var defaults = {
            enableSearch: true,
            enableToc: true,
            enableStyling: true,
            //numberHtml: '{{#}}.',
            numberHtml: '<div class="faq-number">{{#}}</div>'
        };
        /**
         * Merge the runtime options with the default settings
         */
        var options = $.extend({}, defaults, options);
        /**
         * Iterate through the collection of elements and
         * return the object to preserve method chaining
         */
        return this.each(function (i) {
            /**
             * Wrap the current element in an instance of jQuery
             */
            var $this = $(this);

            var $container = $this.wrap('<div class="faq-container"></div>');

            $this.addClass('faq-list');

            if (options.enableSearch) {
                var $form = generateSearchForm();
                $form.insertBefore($this);
            }

            if (options.enableToc) {
                var $toc = generateToc($this);
                $toc.insertBefore($this);
            }


            var $empty = generateEmptySearch();
            $empty.appendTo($container);

            generateAnswerNumbers($this);

        });

        function search(e) {
            var el, container, filter, count, pattern, container, answers, toc, tocs, empty;

            el = $(this);
            container = el.parents('.faq-container');
            filter = el.val();
            toc = container.find('.faq-toc');
            answers = container.find('.faq-list').find('li');
            tocs = container.find('.faq-toc').find('li');
            empty = container.find('.faq-empty');
            pattern = new RegExp(filter, 'i');

            answers.hide();
            tocs.hide();

            $.grep(answers.find('.faq-text'), function (input) {
                if (pattern.test($(input).text())) {
                    $(input).parents('li').show();

                    var index = $(input).parents('li').index();
                    tocs.eq(index).show();
                }
            });

            if (!answers.is(':visible')) {
                empty.show();
                toc.hide();
            } else {
                empty.hide();
                toc.show();
            }
        }

        function test1(e) {
            // //debugger
        }

        function generateEmptySearch() {
            var $empty = $('<div>', {'class': 'faq-empty'});

            return $empty.html('Nothing Found');
        }

        function generateSearchForm() {

            var $form = $('<form>', {'class': 'faq-search'});
            var $input = $('<input>', {
                'class': 'col-md-8',
                'type': 'text',
                'name': 'search',
                'placeholder': '请输入要查询的地址'
            });
            var $buton = $('<btton>', {
                'class': 'col-md-4',
                'type': 'button',
                'class': 'btn btn-default',
                'text': '查询'
            });
            <!-- 标准的按钮 -->
            // <button type="button" class="btn btn-default">默认按钮</button>
            $input.appendTo($form);
            // $buton.appendTo ($form);
            //
            $input.bind('keyup', search);
            // $buton.bind ('keyup', test1);

            return $form;
        }

        function generateAnswerNumbers($list) {
            $list.find('li').each(function (i) {
                var id = parseInt(i + 1);


                $(this).wrapInner('<div class="faq-text"></div>');


                if (options.enableStyling) {
                    var icon = '<div class="faq-icon">' + options.numberHtml + '</div>';

                    icon = icon.replace('{{#}}', id);
                    $(this).prepend(icon);
                }
            });
        }

        function generateToc($list) {
            var html = '<ol>';

            $list.find('li').each(function (i) {
                var id = parseInt(i + 1);
                html += '<li>' + id + '. <a href="#faq-' + id + '">' + $(this).find('h4').text() + '</a></li>';
                $(this).attr('id', 'faq-' + id);
            });

            html += '</ol>';

            var $toc = $('<div>', {'class': 'faq-toc'});

            $toc.html(html);

            return $toc;

        }

        //点击事件
        function select() {
            $("#selectdrc2").click(function () {
                //debugger
                //显示模态框
                var res = $("#inputresu").val();
                //在模态框里面显示内容
                // var code = $(this).attr("code");
                $.ajax({
                    url: "xiangqing.php",
                    data: {code: code},
                    dataType: "TEXT",
                    type: "POST",
                    success: function (data) {
                        //debugger
                        // var lie = data.split("^");
                        // var str = "<div>民族代号："+lie[0]+"</div><div>民族名称："+lie[1]+"</div>";
                        //
                        // $("#nr").html(str);
                    }
                });
            })
        }

        select()
    };
    $.fn.goFaq1 = function (options) {
        // //debugger
        loadtime()
        select()
        //设置监听时间
        var intervalID = setInterval(Pollerdata, 8000);
        intervalID.start;
        intervalID.toFixed()
    }

    function select() {
        //debugger
        $("#selectdrc2").click(function () {
            // //debugger
            //显示模态框
            //debugger
            var sAddress = $("#ethaddress").val();
            var sStartTime = $("#starttime1").val();
            var sEndTime = $("#endtime2").val();
            var data = {
                id: sAddress,
                start: sStartTime,
                end: sEndTime
            }
            //
            //debugger
            var data = {
                "row": [
                    {
                        "no": 0,
                        "address": "0x32cDA8ca0A0fFA4cb7F40ccc33e007950d96A34F",
                        "blockHash": "0x17b3df01170636c9952129e29d77f6ccecc850bcb1e1c0721677d19ef1b9b920",
                        "blockNumber": 4892143,
                        "logIndex": 0,
                        "removed": false,
                        "transactionHash": "0x0ff1146e95c2428e35a807f84bac0d540fe4cc2190f3c3fae2097bcee04ed230",
                        "transactionIndex": 0,
                        "id": "log_0xca19b55be112677c58bf12f7bd4c56fba16400d2a74fe5444d8952703e63ac25",
                        "returnValues": {
                            "0": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "1": "0xb775a1BA2b3017d89096F830959A3d95d674Bac9",
                            "2": "9",
                            "_from": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "_to": "0xb775a1BA2b3017d89096F830959A3d95d674Bac9",
                            "_value": "9"
                        },
                        "event": "Transfer",
                        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                    },
                    {
                        "no": 1,
                        "address": "0x32cDA8ca0A0fFA4cb7F40ccc33e007950d96A34F",
                        "blockHash": "0x17b3df01170636c9952129e29d77f6ccecc850bcb1e1c0721677d19ef1b9b920",
                        "blockNumber": 4892143,
                        "logIndex": 1,
                        "removed": false,
                        "transactionHash": "0x0ff1146e95c2428e35a807f84bac0d540fe4cc2190f3c3fae2097bcee04ed230",
                        "transactionIndex": 0,
                        "id": "log_0x16bad3e9e9ad4ad8d968434b84086c43766215a9f49f1e40aab6b4578ddbbea8",
                        "returnValues": {
                            "0": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "1": "0x3Fa90A1eB7340F8abd18E91bDD277b3629Fcd414",
                            "2": "10",
                            "_from": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "_to": "0x3Fa90A1eB7340F8abd18E91bDD277b3629Fcd414",
                            "_value": "10"
                        },
                        "event": "Transfer",
                        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                    },
                    {
                        "no": 2,
                        "address": "0x32cDA8ca0A0fFA4cb7F40ccc33e007950d96A34F",
                        "blockHash": "0xe70b1aa497064115160bdab2e3c5b706dd6b4964f0e9487185ccbb5212f47848",
                        "blockNumber": 4892164,
                        "logIndex": 0,
                        "removed": false,
                        "transactionHash": "0x903d0fa82111b04677cd6fe27723a861d69d316299cacc6b82fa705214550813",
                        "transactionIndex": 0,
                        "id": "log_0x3cb3bb1653ea93e80da9fa3da37ec270b7064b0c9d843bb22bb78b15d4541b08",
                        "returnValues": {
                            "0": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "1": "0xb775a1BA2b3017d89096F830959A3d95d674Bac9",
                            "2": "9",
                            "_from": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "_to": "0xb775a1BA2b3017d89096F830959A3d95d674Bac9",
                            "_value": "9"
                        },
                        "event": "Transfer",
                        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                    },
                    {
                        "no": 3,
                        "address": "0x32cDA8ca0A0fFA4cb7F40ccc33e007950d96A34F",
                        "blockHash": "0xe70b1aa497064115160bdab2e3c5b706dd6b4964f0e9487185ccbb5212f47848",
                        "blockNumber": 4892164,
                        "logIndex": 1,
                        "removed": false,
                        "transactionHash": "0x903d0fa82111b04677cd6fe27723a861d69d316299cacc6b82fa705214550813",
                        "transactionIndex": 0,
                        "id": "log_0x00cbfaf3a4677a57b8108f0d90ef01e9d06d2d9d8e1599494ee90ebda6a969f0",
                        "returnValues": {
                            "0": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "1": "0x3Fa90A1eB7340F8abd18E91bDD277b3629Fcd414",
                            "2": "10",
                            "_from": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "_to": "0x3Fa90A1eB7340F8abd18E91bDD277b3629Fcd414",
                            "_value": "10"
                        },
                        "event": "Transfer",
                        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                    },
                    {
                        "no": 4,
                        "address": "0x32cDA8ca0A0fFA4cb7F40ccc33e007950d96A34F",
                        "blockHash": "0x3afd6ca4b4b06d934067501eb640564b73b1396b43ee601dfacced5edcd135e3",
                        "blockNumber": 4892177,
                        "logIndex": 0,
                        "removed": false,
                        "transactionHash": "0x6e47964a0fbe037a6e4ee60796169eb4ab6d3efc17d4b29874954d365281c86f",
                        "transactionIndex": 0,
                        "id": "log_0x0a3369ed68004d0043e09c5c58e9b4e66fbaf5026462d50692eee7b6a4808a94",
                        "returnValues": {
                            "0": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "1": "0xb775a1BA2b3017d89096F830959A3d95d674Bac9",
                            "2": "9",
                            "_from": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "_to": "0xb775a1BA2b3017d89096F830959A3d95d674Bac9",
                            "_value": "9"
                        },
                        "event": "Transfer",
                        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                    },
                    {
                        "no": 5,
                        "address": "0x32cDA8ca0A0fFA4cb7F40ccc33e007950d96A34F",
                        "blockHash": "0x3afd6ca4b4b06d934067501eb640564b73b1396b43ee601dfacced5edcd135e3",
                        "blockNumber": 4892177,
                        "logIndex": 1,
                        "removed": false,
                        "transactionHash": "0x6e47964a0fbe037a6e4ee60796169eb4ab6d3efc17d4b29874954d365281c86f",
                        "transactionIndex": 0,
                        "id": "log_0x3f22ecc8cfabc545bd529ba5f938900278385e431a55b37f4d44a6f888e09b29",
                        "returnValues": {
                            "0": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "1": "0x3Fa90A1eB7340F8abd18E91bDD277b3629Fcd414",
                            "2": "10",
                            "_from": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "_to": "0x3Fa90A1eB7340F8abd18E91bDD277b3629Fcd414",
                            "_value": "10"
                        },
                        "event": "Transfer",
                        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                    },
                    {
                        "no": 6,
                        "address": "0x32cDA8ca0A0fFA4cb7F40ccc33e007950d96A34F",
                        "blockHash": "0x4f52fca232d0016b2086a019c03435c367056fb410fc672f5173d241df80c914",
                        "blockNumber": 4892329,
                        "logIndex": 0,
                        "removed": false,
                        "transactionHash": "0x2ebbf8eac2c4a8165464cb0ce39e69ce70b531ed50a754df1bed546789f14298",
                        "transactionIndex": 0,
                        "id": "log_0x1cc507de49030fb0eba1d9d38d15d1a44d98ee1021e44c7b6b858c70c2416b68",
                        "returnValues": {
                            "0": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "1": "0xb775a1BA2b3017d89096F830959A3d95d674Bac9",
                            "2": "9",
                            "_from": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "_to": "0xb775a1BA2b3017d89096F830959A3d95d674Bac9",
                            "_value": "9"
                        },
                        "event": "Transfer",
                        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                    },
                    {
                        "no": 7,
                        "address": "0x32cDA8ca0A0fFA4cb7F40ccc33e007950d96A34F",
                        "blockHash": "0x4f52fca232d0016b2086a019c03435c367056fb410fc672f5173d241df80c914",
                        "blockNumber": 4892329,
                        "logIndex": 1,
                        "removed": false,
                        "transactionHash": "0x2ebbf8eac2c4a8165464cb0ce39e69ce70b531ed50a754df1bed546789f14298",
                        "transactionIndex": 0,
                        "id": "log_0x3df96c75071c6157072422fb6ddd56dc724a133c50f9d18cb3e86fe932df4dc3",
                        "returnValues": {
                            "0": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "1": "0x3Fa90A1eB7340F8abd18E91bDD277b3629Fcd414",
                            "2": "10",
                            "_from": "0x66A4F55B53Cfd0563a16F40BE7EDF8A07796F692",
                            "_to": "0x3Fa90A1eB7340F8abd18E91bDD277b3629Fcd414",
                            "_value": "10"
                        },
                        "event": "Transfer",
                        "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                    }
                ]
            }
            //
            var strsum = '';
            for (i = 0; i < data.row.length; i++) {
                //
                var rows = "<tr><td>1</td><td>Michael</td><td>834389</td><td>543</td><td>活跃</td><td class='action-td'><a href='javascript:;' class='btn btn-small btn-warning'><i class='icon-ok'></i></a></td></tr>";
                //
                strsum += rows;

            }
            //
            var header = "<div class='widget widget-table'><div class='widget-header'><i class='icon-th-list'></i><h3>查询结果</h3></div> <div class='widget-content'><table class='table table-striped table-bordered'><thead><tr><th>#</th><th>发送者</th><th>接收者</th><th>数量</th><th>时间</th><th></th></tr></thead>";
            var end = "</tbody></table></div></div>";
            //
            var newTable = header + strsum + end;
            $("#faq-list-addset").html(newTable);
            // for (i=0;i<data.row.length;i++){
            // 	//
            // 	//debugger
            // 	var str ="<li id='faq-1"+i+"><div class='faq-icon'><div class='faq-number'>"+i+"</div></div><div class='faq-text'>" +
            // 		"<h4>地址："+data.row[i].returnValues._from+"</h4>" +
            // 		"<p>发送地址  :"+data.row[i].returnValues._from+"</p>" +
            // 		"<p>接收地址  :"+data.row[i].returnValues._to+"</p>" +
            // 		"<p>数值  :"+data.row[i].returnValues._value+"</p>" +
            // 		"<p>区块哈希值  :"+data.row[i].blockHash+"</p>" +
            // 		"<p>区块号  :"+data.row[i].blockNumber+"</p>" +
            // 		"<p>交易哈希值  :"+data.row[i].transactionHash+"</p>" +
            // 		"</div></li>";
            // 	strsum+=str;
            // }
            // $("#faq-list-addset").html(strsum);
            /*
            * 								<tr>
                                    <td>1</td>
                                    <td>Michael</td>
                                    <td>834389</td>
                                    <td>543</td>
                                    <td>活跃</td>
                                    <td class="action-td">
                                        <a href="javascript:;" class="btn btn-small btn-warning">
                                            <i class="icon-ok"></i>
                                        </a>
                                        <a href="javascript:;" class="btn btn-small">
                                            <i class="icon-remove"></i>
                                        </a>
                                    </td>
                                </tr>
            * */
            //requset
            $.ajax({
                url: "http://127.0.0.1:3000/getThreeData",
                data: data,
                dataType: "json",
                type: "post",
                success: function (data) {
                    //debugger
                    alert(data);
                    //do
                    //debugger
                    if (data.row.length > 0) {
                        //
                        for (i = 0; i < data.row.length; i++) {
                            //
                            //debugger
                            // var str="<li id='faq-'+i>" +
                            // 	"<div class='faq-icon'>" +
                            // 	"<div class='faq-number'>i</div>" +
                            // 	"</div>" +
                            // 	"<div class='faq-text'>" +
                            // 	"<h4>data.row[i].returnValues._form+'gei'+data.row[i].returnValues._to+'num'+data.row[i].returnValues._value</h4>" +
                            // 	" <p>'addresss:'+data.row[i].address</p> " +
                            // 	" <p>'blockHash:'+data.row[i].blockHash</p> " +
                            // 	" <p>'blockNumber:'+data.row[i].blockNumber</p> " +
                            // 	" <p>'id:'+data.row[i].id</p> " +
                            // 	" <p>'transactionHash:'+data.row[i].transactionHash</p> " +
                            // 	"</div> " +
                            // 	"</li>";
                            // //
                            // $("#faq-list-addset").html(str);
                        }

                    } else {
                        console.log("data is null")

                    }
                },
                //dff
                error: function (err) {
                    //debugger
                    console.log(err);
                }
            });
        })
    }

    function loadtime() {

        laydate.render({
            elem: '#starttime1'
            , theme: '#393D49'
        });

        //
        laydate.render({
            elem: '#endtime2'
            , theme: '#393D49'
        });
    }

    function hello() {
        console.log("11111")
        alert("aaa")
    }

    //
    var arr = [];
    var brr = [];
    var isOne = [];
    var list = '';

    function Pollerdata() {
        //
        console.log("轮询中。。。。。", list)
        var start = "<ul>";
        var end = "</ul>";
        let data1 = {name: "zhangsan"}
        $.ajax({
            url: "http://127.0.0.1:3000/Pollerdata",
            data: data1,
            dataType: "json",
            type: "post",
            success: function (data) {

                if (data.state == 2) {
                    // intervalID.stop;
                    debugger;
                    for (i = 0; i < data.row.length; i++) {
                        // set
                        debugger;
                        var blockHash = data.row[i].blockHash;
                        var sTime = data.row[i].time;
                        var sFrom = data.row[i].returnValues._from;
                        var sTo = data.row[i].returnValues._to;
                        var sValue = data.row[i].returnValues._value;
                        //
                        var parNumber = unitCheck(sValue, 8);

                        var state = isOnefunc(blockHash);
                        if (state) {
                            //
                            debugger;
                            return
                        }
                        isOne.push(blockHash);
                        var str = "<li><strong>交易时间:</strong>" + sTime + "<strong>交易信息:</strong>" + sFrom + "转给" + sTo + "共" + parNumber + "个DRCC</li>";
                        list = str + list;
                        // arr.push(str);
                    }
                    //add
                    debugger;
                    var rowsdataPROO = start + list + end;
                    $("#Pollerdata").empty();
                    $("#Pollerdata").html(rowsdataPROO);
                }
                //
            },
            //dff
            error: function (err) {
                //debugger
                console.log(err);
            }
        });
        //数组去数量
        arrselect();
    }

    //
    function arrselect() {
        var brr = [];
        if (arr.length > 50) {
            for (i = 0; i < 40; i++) {
                //
                brr[i] = arr[10 + i];
            }
            arr = brr;
        }

    }

    function isOnefunc(data) {
        //
        var state = false;
        for (i = 0; i < isOne.length; i++) {
            if (isOne[i] == data) {

                state = true
            }
            //
        }
        return state;
    }

    function unitCheck(digit, num) {
        //
        if (digit && num > 0) {
            //
            debugger;
            var moneyNum = parseInt(digit);
            var powNum = Math.pow(10, num);
            var parNum = moneyNum / powNum;
            return parNum;
        }
    }
})(jQuery);