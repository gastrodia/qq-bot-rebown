'use strict';

const {QQ, MsgHandler} = require('.');

const groupHandler = new MsgHandler(
    msg => {
        console.log(`HandlerTest: ${JSON.stringify(msg, null, 4)}`);
    }, 'buddy', 'discu', 'group'
);

new QQ(groupHandler).run(false, function (data) {
    console.log(data);
}, function () {
    console.log('登录成功');
}, function () {
    console.log('登录失败');
});
