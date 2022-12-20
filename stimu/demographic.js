
var likert_10 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

var demographic = {
    timeline: [
        {
            data: {
                screen_id: "gender"
            },
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "性别",
                    name: 'gender',
                    options: ['男', '女'],
                    required: true,
                    horizontal: true,
                }
            ],
            on_finish: function (data) {
                let cc = {
                    '男': "1",
                    '女': "2"
                };
                data.response.Q1 = cc[data.response.gender]

            }
        }, {
            data: {
                screen_id: "age"
            },
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "年龄",
                    name: 'age',
                    options: [
                        "<20",
                        "20-29",
                        "30-39",
                        "40-49",
                        "50-59",
                        "60-69",
                        "70-79",
                        ">80",
                    ],
                    required: true
                }
            ],
            button_label: "继续",
            on_finish: function (data) {
                let cc = {
                    "<20": "1",
                    "20-29": "2",
                    "30-39": "3",
                    "40-49": "4",
                    "50-59": "5",
                    "60-69": "6",
                    "70-79": "7",
                    ">80": "8",
                };
                data.response.Q1 = cc[data.response.age]
            }
        }, {
            data: {
                screen_id: "ethnicity"
            },
            type: jsPsychSurveyHtmlForm,
            preamble: "<p style = 'color : black'>您的民族是</p>",
            html: function () {
                return `
                    <p><select name="Q0" size=10 required>
                    <option value=1>汉族</option>
                    <option value=2>蒙古族</option>
                    <option value=3>回族</option>
                    <option value=4>藏族</option>
                    <option value=5>维吾尔族</option>
                    <option value=6>苗族</option>
                    <option value=7>傣族</option>
                    <option value=8>剩下的我补充一下=。=</option>
                    </select></p>`
            },
            button_label: '继续',
            on_finish: function (data) {

            }
        }, {
            data: {
                screen_id: "education"
            },
            type: jsPsychSurveyHtmlForm,
            preamble: "<p style = 'color : black'>您的教育经历是</p>",
            html: function () {
                return `
                <p><select name="Q0" size=10 required>
                <option value=1>小学（含小学未毕业）</option>
                <option value=2>初中（含初中未毕业）</option>
                <option value=3>高中（含高中未毕业）</option>
                <option value=4>大专（含大专毕业或未毕业）</option>
                <option value=5>本科（含本科在读）</option>
                <option value=6>硕士（含硕士在读）</option>
                <option value=7>博士及以上（含博士在读)</option>
                </select></p>`
            },
            on_load: function () {
            },
            button_label: '继续',
            on_finish: function (data) {
            }
        }, {
            data: {
                screen_id: "income_family"
            },
            type: jsPsychSurveyText,
            questions: [{
                prompt: '家庭月收入约为（人民币）:',
                value: 'income_family', rows: 1, columns: 50
            }],
            button_label: "继续",
        }, {
            data: {
                screen_id: "SES1"
            },
            type: jsPsychSurveyLikert,
            questions: [
                {
                    prompt: ["<img src='stimu/ladder.png'></img>"
                        + '<p> 如上图所示您所在家庭的社会经济地位假如有十个等级，根据家庭客观条件来判断目前家庭在整个社会上处于什么水平？最顶端=社会经济地位最高的家庭，最低端=社会经济地位水平最低的家庭。</p>'],
                    name: 'SES1',
                    labels: likert_10,
                    required: true
                }
            ],

            on_load: function () {
                $(".jspsych-survey-multi-choice-question p").css({
                    "text-align": "justify"
                })
                $(".jspsych-survey-multi-choice-question img").css({
                    "vertical-align": "middle"
                })
            },

            button_label: "继续",
            scale_width: 500,
            randomize_question_order: false,
        }, {
            data: {
                screen_id: "SES2"
            },
            type: jsPsychSurveyLikert,
            questions: [
                {
                    prompt: ["<img src='stimu/ladder.png'></img>"
                        + '<p>如图所示，如果您估计您的家庭社会经济地位相比周围的同学、朋友等而言，与哪个阶层水平更高就在上面打“√”，例如：比大约 50%人群高，那么就在第 5级梯子上画“√”若感觉处于最底层就在第一级打“√”类似的选出自己最合适的一台阶打“√”。</p>'],
                    name: 'SES1',
                    labels: likert_10,
                    required: true
                }
            ],
            on_load: function () {
                $(".jspsych-survey-multi-choice-question p").css({
                    "text-align": "justify"
                })
                $(".jspsych-survey-multi-choice-question img").css({
                    "vertical-align": "middle"
                })
            },
            button_label: "继续",
            scale_width: 500,
            randomize_question_order: false,
        }, {
            data: {
                screen_id: "living abroad"
            },
            type: jsPsychSurveyText,
            questions: [{
                prompt: '你曾经在去过某个西方国家或在某个西方国家生活过吗？',
                value: 'if_living_abroad', rows: 1, columns: 50
            },
            {
                prompt: '如果是的，请列出国家名称：',
                value: 'where_living_abroad', rows: 1, columns: 50
            },
            {
                prompt: '如果是的，请写明居住年限(精确到月份,例如1999.04)',
                value: 'when_living_abroad', rows: 1, columns: 50
            }],
            button_label: "继续",
        }, {
            data: {
                screen_id: "check1"
            },
            type: jsPsychSurveyMultiChoice,
            questions: [
                {
                    prompt: "<p>我已经周游了世界92次。</p>",
                    name: 'check1',
                    options: ['合理', '不合理'],
                    required: true,
                    horizontal: true,
                }
            ],
            on_finish: function (data) {
                let ccheck = {
                    '合理': "1",
                    '不合理': "2"
                };
                data.response.Q1 = ccheck[data.response.check1]

            }
        },

    ]
}








