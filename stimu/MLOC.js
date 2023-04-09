var Likert_7 = ['-3', '-2', '-1', '0', '1', '2', '3'];

var mloc = {
    timeline: 
    [
        {
        data: {
            screen_id: "bfi_instruc"
        },
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "<p>请仔细阅读下面的的每个陈述，从-3到3给分来表明你的同意程度。</p>" +
        '<p>(请您在对应位置下打钩，其中从-3~3很不同意~很同意)</p>' +
        "<img src='stimu/mloc_Likert.png'></img>" +
        "<p>按任意键继续</p>",
    },
    {
        data: {
            screen_id: "MLOC1"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我能否当上领导主要靠我的能力", labels: Likert_5, required: true },            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC2"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我的生活很大程度上受意外事件所左右", labels: Likert_5, required: true },            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC3"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我感到我生活中所发生的事是由有势力的人掌握的", labels: Likert_5, required: true },            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC4"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我是否出车祸主要取决于我的驾驶技术", labels: Likert_5, required: true },            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOCCheat"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: ['<p>-3~3表示很不同意~很同意(此处为提示不用作答)</p>' + "<img src='stimu/mloc_likert.png'></img>"], name: 'cheat', labels: Likert_5 },
            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC5"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我在订计划时，我几乎肯定能实行它", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC6"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "碰上倒霉事时，我常常没有机会保护自己的利益", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC7"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我获得了我所追求的东西通常是因为我走运", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC8"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "尽管我能力不错，但如果我不拉拢那些身居高位的人就不可能被委以重任", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOCCheat"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: ['<p>-3~3表示很不同意~很同意(此处为提示不用作答)</p>' + "<img src='stimu/mloc_likert.png'></img>"], name: 'cheat', labels: Likert_5 },
            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC9"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我拥有朋友的多少取决于我这个人怎么样", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC10"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我常常发现那些将要发生的注定会发生", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC11"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我的生活多为那些有势力的人控制", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC12"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我是否碰上车祸主要是运气的问题", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOCCheat"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: ['<p>-3~3表示很不同意~很同意(此处为提示不用作答)</p>' + "<img src='stimu/mloc_likert.png'></img>"], name: 'cheat', labels: Likert_5 },
            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC13"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "当局那些有权势的团伙发生冲突时，像我这样的人很少能有机会保护自己的个人利益", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC14"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "照我看来，早早订出计划并不总是明智的，因为许多事情都被证明不过是走运或不幸运的问题", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC15"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "要想得到想要的东西，我需要讨好比我有权势的人", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC16"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我能否当官取决于我是否足够走运，在恰当的时间处在恰当的位置", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOCCheat"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: ['<p>-3~3表示很不同意~很同意(此处为提示不用作答)</p>' + "<img src='stimu/mloc_likert.png'></img>"], name: 'cheat', labels: Likert_5 },
            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC17"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "如果重要人物不喜欢我，那我很可能交不上太多朋友", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC18"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我完全能够主宰我生活中的一切", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC19"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我一般能够保护自己的利益", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC20"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我是否会出车祸，主要取决于其他驾驶者", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOCCheat"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: ['<p>-3~3表示很不同意~很同意(此处为提示不用作答)</p>' + "<img src='stimu/mloc_likert.png'></img>"], name: 'cheat', labels: Likert_5 },
            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC21"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我得到了我所想要的，通常是因为我为之勤奋努力过", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC22"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "为了实行我的计划，我要确信这些计划符合那些权势比我大的人的口味", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC23"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我的生活由我的行为所决定", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOC24"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "我拥有朋友多或少主要是命运的问题", labels: Likert_5, required: true },        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },
    {
        data: {
            screen_id: "MLOCCheat"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: ['<p>-3~3表示很不同意~很同意(此处为提示不用作答)</p>' + "<img src='stimu/mloc_likert.png'></img>"], name: 'cheat', labels: Likert_5 },
            
        ],
        button_label: "继续",
        //scale_width: 500,
        //randomize_question_order: false,
    },

    ]
}






/* 
{ prompt: "我能否当上领导主要靠我的能力", labels: Likert_5, required: true },
            { prompt: "我的生活很大程度上受意外事件所左右", labels: Likert_5, required: true },
            { prompt: "我感到我生活中所发生的事是由有势力的人掌握的", labels: Likert_5, required: true },
            { prompt: "我是否出车祸主要取决于我的驾驶技术", labels: Likert_5, required: true },
            { prompt: "我在订计划时，我几乎肯定能实行它", labels: Likert_5, required: true },
            { prompt: "碰上倒霉事时，我常常没有机会保护自己的利益", labels: Likert_5, required: true },
            { prompt: "我获得了我所追求的东西通常是因为我走运", labels: Likert_5, required: true },
            { prompt: "尽管我能力不错，但如果我不拉拢那些身居高位的人就不可能被委以重任", labels: Likert_5, required: true },
            { prompt: "我拥有朋友的多少取决于我这个人怎么样", labels: Likert_5, required: true },
            { prompt: "我常常发现那些将要发生的注定会发生", labels: Likert_5, required: true },
            { prompt: "我的生活多为那些有势力的人控制", labels: Likert_5, required: true },
            { prompt: "我是否碰上车祸主要是运气的问题", labels: Likert_5, required: true },
            { prompt: "当局那些有权势的团伙发生冲突时，像我这样的人很少能有机会保护自己的个人利益", labels: Likert_5, required: true },
            { prompt: "照我看来，早早订出计划并不总是明智的，因为许多事情都被证明不过是走运或不幸运的问题", labels: Likert_5, required: true },
            { prompt: "要想得到想要的东西，我需要讨好比我有权势的人", labels: Likert_5, required: true },
            { prompt: "我能否当官取决于我是否足够走运，在恰当的时间处在恰当的位置", labels: Likert_5, required: true },
            { prompt: "如果重要人物不喜欢我，那我很可能交不上太多朋友", labels: Likert_5, required: true },
            { prompt: "我完全能够主宰我生活中的一切", labels: Likert_5, required: true },
            { prompt: "我一般能够保护自己的利益", labels: Likert_5, required: true },
            { prompt: "我是否会出车祸，主要取决于其他驾驶者", labels: Likert_5, required: true },
            { prompt: "我得到了我所想要的，通常是因为我为之勤奋努力过", labels: Likert_5, required: true },
            { prompt: "为了实行我的计划，我要确信这些计划符合那些权势比我大的人的口味", labels: Likert_5, required: true },
            { prompt: "我的生活由我的行为所决定", labels: Likert_5, required: true },
            { prompt: "我拥有朋友多或少主要是命运的问题", labels: Likert_5, required: true }, */