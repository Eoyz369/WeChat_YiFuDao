// pages/s/s.js
Page({
  onLoad: function(e) {
    this.getDetail(e.id);
},


getDetail: function(t) {
    var i = this;
    (0, e.getDetail)(t).then(function(e) {
        var t, l;
        null != e.askForLeaveDetail ? (l = e.askForLeaveDetail, t = 1) : null != e.goOutDetail ? (l = e.goOutDetail, 
        t = 2) : null != e.leaveDetail ? (l = e.leaveDetail, t = 3) : null != e.stayDetail ? (l = e.stayDetail, 
        t = 4) : null != e.backDetail && (l = e.backDetail, t = 5), l.leaveConfirm && (l.leaveConfirm.leaveConfirmTime = (0, 
        a.format)(l.leaveConfirm.leaveConfirmTime, "yyyy-MM-dd hh:mm")), console.log("自定义表单");
        var n = [];
        l.applySubjectAnswer && null != l.applySubjectAnswer && l.applySubjectAnswer.forEach(function(e) {
            n.push(e);
        }), l.leaveOffSubjectAnswer && null != l.leaveOffSubjectAnswer && l.leaveOffSubjectAnswer.forEach(function(e) {
            n.push(e);
        }), l.applyAndLeave = n, n && null != n && n.forEach(function(e) {
            if ("picture" == e.subject.subjectEnum || "file" == e.subject.subjectEnum) {
                var t = [];
                e.answer.forEach(function(e) {
                    t.push(JSON.parse(e));
                }), e.answer = t;
            }
            var i;
            "time" == e.subject.subjectEnum && (e.answer && null != e.answer && e.answer.length > 0 && ("yyyyMMdd" == e.subject.dateType ? i = "yyyy-MM-dd" : "yyyyMMddHHmm" == e.subject.dateType && (i = "yyyy-MM-dd hh:mm"), 
            "HHmm" == e.subject.dateType ? e.customTimeFormat = e.answer[0] : e.customTimeFormat = (0, 
            a.format)(Number(e.answer[0]), i)));
        }), i.setData({
            detail: l,
            type: t
        });
        var r = i.data.detail.delayDetails;
        if (r) if (r.length > 0) {
            var o = (r[r.length - 1].delayTime - i.data.detail.beginTime) / 864e5;
            r.forEach(function(e) {
                e.delayTime = (0, a.format)(e.delayTime, "yyyy-MM-dd hh:mm");
            }), i.setData({
                "detail.day": Math.floor(10 * o) / 10,
                "detail.delayDetails": r
            });
        } else {
            var s = (i.data.detail.endTime - i.data.detail.beginTime) / 864e5;
            i.setData({
                "detail.day": Math.floor(10 * s) / 10
            });
        }
        i.setData({
            "detail.beginTime": (0, a.format)(i.data.detail.beginTime, "yyyy-MM-dd hh:mm"),
            "detail.endTime": (0, a.format)(i.data.detail.endTime, "yyyy-MM-dd hh:mm")
        });
    });
},




})