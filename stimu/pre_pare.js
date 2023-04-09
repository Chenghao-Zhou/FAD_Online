var enterFullscreenMode = {
    data: {
        screen_id: "full screen"
    },
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    message: "<p style = 'black : white;font-weight: bold;'>感谢您参加本次实验，实验过程中如有任何疑惑，请联系主试。实验需要全屏模式。</p >",
    button_label: "点击这里进入全屏"
}; // 进入全屏












var subj_id = {
    data: {
        screen_id: "name&ID"
    },
    type: jsPsychSurveyText,
    questions: [{
        prompt: '请输入您的ID编号',
        value: 'subj_ID', rows: 1, columns: 25
    },
    {
        prompt: '请输入您的姓名（拼音）',
        value: 'subj_name', rows: 1, columns: 25
    }],
    on_finish: function (data) {
        localStorage.subj_ID = jsPsych.data.getLastTrialData().trials[0]['response']['Q0'];
        localStorage.subj_name = jsPsych.data.getLastTrialData().trials[0]['response']['Q1'];
    }
};


/* time stamp function, format YYYYMMDDhhmmss*/

function stamp() {
    var dt = new Date();
    var year = dt.getFullYear();
    var month = ((dt.getMonth() + 1) < 10 ? '0' : '') + (dt.getMonth() + 1);
    var day = (dt.getDate() < 10 ? '0' : '') + dt.getDate();
    var hour = (dt.getHours() < 10 ? '0' : '') + dt.getHours();
    var minute = (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
    var second = (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();
    var stamp = year + '' + month + '' + day + '' + hour + '' + minute + '' + second;
    return stamp;
};
/** This function is called when the experiment finishes. Add a thank you message, 
debriefing or direct participants somewhere else (e.g. back to prolific or mturk) 
**/