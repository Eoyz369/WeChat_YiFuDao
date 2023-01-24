mt=new Date()
mt.setMinutes(0)
bt = mt.getTime()-10800000
et = mt.getTime()+21600000

body = JSON.parse($response.body)
body.data[0].recordStatus = 4
body.data[0].beginTime = bt
body.data[0].endTime = et

$done({ body: JSON.stringify(body) });
