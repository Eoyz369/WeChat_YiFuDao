

mt=new Date()
mt.setMinutes(0)
bt = mt.getTime()-10800000
et = mt.getTime()+21600000




body = JSON.parse($response.body)
body.data.qrCodeColor ="green"
body.data.qrCodeUrl="https://yfd.ly-sky.com/ly-ms/application/open/qrCode/1?t=ms_84&y=1001670642842623004230000000369"

body.data.qrCodeOARecord = {
"oaType": "请假",
"oaAlias": "事假",
"beginTime": bt,
"endTime": et,
"applyStatus": 4
}




$done({ body: JSON.stringify(body) });

