

var Likert_5 = ['1', '2', '3', '4', '5'];

/*
var fad = {
    timeline: [{
        data: {
            screen_id: "fad_instruc"
        },
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "<p>请仔细阅读下面的的每个陈述，从1到5给分来表明你的同意程度。</p>" +
            '<p>(请您在对应位置下打钩，其中从1~5表示非常不同意~非常同意)</p>' +
            "<img src='stimu/fad_Likert.png'></img>" +
            "<p>按任意键继续</p>",
    },
    {
        data: {
            screen_id: "FAD"
        },
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "<p>'" + jsPsych.timelineVariable('Q', true) + "'</p>" + "<img src='stimu/fad_Likert.png'></img>",
        choice: Likert_5
    }
    ],

    timeline_variables: FAD_Q

}

*/

var fad = {
    timeline: [{
        data: {
            screen_id: "fad_instruc"
        },
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "<p>请仔细阅读下面的的每个陈述，从1到5给分来表明你的同意程度。</p>" +
            '<p>(请您在对应位置下打钩，其中从1~5表示非常不同意~非常同意)</p>' +
            "<img src='stimu/fad_Likert.png'></img>" +
            "<p>按任意键继续</p>",
    },
    {
        data: {
            screen_id: "FAD"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: ['<p>1~5表示非常不同意~非常同意(此处为提示不用作答)</p>' + "<img src='stimu/fad_Likert.png'></img>"], name: 'cheat', labels: Likert_5 },
            { prompt: "我相信未来是命运已经安排好的。", name: 'FD1', labels: Likert_5, required: true },
            { prompt: "人们的生物因素（如基因）决定了他们的天赋和个性。", name: 'SD2', labels: Likert_5, required: true },
            { prompt: "偶然性事件是人类历史的主要影响因素。", name: 'UD3', labels: Likert_5, required: true },
            { prompt: "人们对自己的决策有完全的控制权。", name: 'FW4', labels: Likert_5, required: true },
            { prompt: "不管你多努力，你都无法改变你的命运。", name: 'FD5', labels: Likert_5, required: true },
            { prompt: "心理学家和精神病学家最终会弄清楚人类所有的行为。", name: 'SD6', labels: Likert_5, required: true },
            { prompt: "没有人能预测世界上将发生什么。", name: 'UD7', labels: Likert_5, required: true },
            { prompt: "人们必须为自己所做的任何错误选择负全责。", name: 'FW8', labels: Likert_5, required: true },
            { prompt: "命运早已为每个人做好安排。", name: 'FD9', labels: Likert_5, required: true },
            { prompt: "你的基因决定你的未来。", name: 'SD10', labels: Likert_5, required: true },
            { prompt: "人生是不可预测的，就像掷骰子、抛硬币一样具有随机性。", name: 'UD11', labels: Likert_5, required: true },
            { prompt: "只要真心想做，人们可以克服任何障碍。", name: 'FW12', labels: Likert_5, required: true },
            { prompt: "未来是怎样就是怎样，你无能为力。", name: 'FD13', labels: Likert_5, required: true },
            { prompt: "科学已经揭示了过去的环境是如何塑造人们现在的能力和性格的。", name: 'SD14', labels: Likert_5, required: true },
            { prompt: "人是不可预测的。", name: 'UD15', labels: Likert_5, required: true },
            { prompt: "罪犯要为他们的恶行承担全部责任。", name: 'FW16', labels: Likert_5, required: true },
            { prompt: "不管人们是否喜欢，似乎有神秘的力量推动着他们的生活。", name: 'FD17', labels: Likert_5, required: true },
            { prompt: "和其他动物一样，人类行为总是遵循自然规律的。", name: 'SD18', labels: Likert_5, required: true },
            { prompt: "生活很难预测，因为几乎一切都是随机发生的。", name: 'UD19', labels: Likert_5, required: true },
            { prompt: "运气在人们的生活中发挥了重要作用。", name: 'UD20', labels: Likert_5, required: true },
            { prompt: "人类有完全自由的意志。", name: 'FW21', labels: Likert_5, required: true },
            { prompt: "父母的性格品质将决定他们孩子的性格品质。", name: 'SD22', labels: Likert_5, required: true },
            { prompt: "人们为他们不好的行为负责任。", name: 'FW23', labels: Likert_5, required: true },
            { prompt: "童年所处的环境将决定成年以后的成就。", name: 'SD24', labels: Likert_5, required: true },
            { prompt: "发生在人们身上的事都是偶然的。", name: 'UD25', labels: Likert_5, required: true },
            { prompt: "精神的力量能克服身体的欲望。", name: 'FW26', labels: Likert_5, required: true },
            { prompt: "人们的未来不能被预测。", name: 'UD27', labels: Likert_5, required: true },


        ],
        button_label: "继续",
        scale_width: 500,
        randomize_question_order: false,
    }
    ],

}


