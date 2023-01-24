mt=new Date()
mt.setMinutes(0)
bt = mt.getTime()-10800000
et = mt.getTime()+21600000



body = JSON.parse($response.body)
body.data.askForLeaveDetail.applyStatus = 4
body.data.askForLeaveDetail.beginTime = bt
body.data.askForLeaveDetail.endTime = et

body.data.askForLeaveDetail.chains[1].status = 3

body.data.askForLeaveDetail.chains.pop()


const timenow = new Date().setMinutes(0, 0);
let applyDate = new Date();
let approveDate = new Date();
let a = Math.floor(Math.random() * (19 - 7 + 1) + 7);
let i = a + 2;
let b = Math.floor(Math.random() * (22 - i + 1) + i);
applyDate.setDate(applyDate.getDate() - 1);
approveDate.setDate(approveDate.getDate() - 1);
applyDate.setHours(a, Math.floor(Math.random() * 60), 0, 0);
approveDate.setHours(b, Math.floor(Math.random() * 60), 0, 0);

Date.prototype.format=function(fmt){var o={'M+':this.getMonth()+1,'d+':this.getDate(),'h+':this.getHours(),'m+':this.getMinutes(),'s+':this.getSeconds(),'q+':Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};if(/(y+)/.test(fmt)){fmt=fmt.replace(RegExp.$1,(this.getFullYear()+'').substr(4-RegExp.$1.length));}for(var k in o){if(new RegExp('('+k+')').test(fmt)){fmt=fmt.replace(RegExp.$1,RegExp.$1.length==1?o[k]:('00'+o[k]).substr((''+o[k]).length));}}return fmt;};

body.data.askForLeaveDetail.chains[0].time = applyDate.format('yyyy-MM-dd hh:mm');
body.data.askForLeaveDetail.chains[1].time = approveDate.format('yyyy-MM-dd hh:mm');



$done({ body: JSON.stringify(body) });
