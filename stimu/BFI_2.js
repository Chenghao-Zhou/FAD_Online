

var Likert_5 = ['1', '2', '3', '4', '5'];

var bfi = {
    timeline: [{
        data: {
            screen_id: "bfi_instruc"
        },
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "<p>下面是一些关于个人特征的描述，有些可能适用于你，有些可能不适用于你。</p>" +
            '<p>比如，你是否同意“我是一个喜欢与他人待在一起的人”？<p>' +
            '<p>请在下面每个句子前的横线上填入对应的数字以表明你同意或不同意这个描述。</p>' +
            "<img src='stimu/mloc_likert.png'></img>" +
            "<p>按任意键继续</p>",
    },
    {
        data: {
            screen_id: "BFI_2"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: ['<p>我是一个……的人<p>' + '<p>1~5表示非常不同意~非常同意(此处为提示不用作答)</p>' + "<img src='stimu/fad_Likert.png'></img>"], name: 'cheat', labels: Likert_5 },
            { prompt: "___性格外向，喜欢交际", labels: Likert_5, required: true },
            { prompt: "___心肠柔软，有同情心", labels: Likert_5, required: true },
            { prompt: "___缺乏条理", labels: Likert_5, required: true },
            { prompt: "___从容，善于处理压力", labels: Likert_5, required: true },
            { prompt: "___对艺术没有什么兴趣", labels: Likert_5, required: true },
            { prompt: "___性格坚定自信，敢于表达自己的观点", labels: Likert_5, required: true },
            { prompt: "___为人恭谦，尊重他人", labels: Likert_5, required: true },
            { prompt: "___比较懒", labels: Likert_5, required: true },
            { prompt: "___经历挫折后仍能保持积极心态", labels: Likert_5, required: true },
            { prompt: "___对许多不同的事物都感兴趣", labels: Likert_5, required: true },
            { prompt: "___很少觉得兴奋或者特别想要(做)什么", labels: Likert_5, required: true },
            { prompt: "___常常挑别人的毛病", labels: Likert_5, required: true },
            { prompt: "___可信赖的，可靠的", labels: Likert_5, required: true },
            { prompt: "___喜怒无常，情绪起伏较多", labels: Likert_5, required: true },
            { prompt: "___善于创造，能找到聪明的方法来做事", labels: Likert_5, required: true },
            { prompt: "___比较安静", labels: Likert_5, required: true },
            { prompt: "___对他人没有什么同情心", labels: Likert_5, required: true },
            { prompt: "___做事有计划有条理", labels: Likert_5, required: true },
            { prompt: "___容易紧张", labels: Likert_5, required: true },
            { prompt: "___着迷于艺术、音乐或文学", labels: Likert_5, required: true },
            { prompt: "___常常处于主导地位，像个领导一样", labels: Likert_5, required: true },
            { prompt: "___常与他人意见不和", labels: Likert_5, required: true },
            { prompt: "___很难开始行动起来去完成一项任务", labels: Likert_5, required: true },
            { prompt: "___觉得有安全感，对自己满意", labels: Likert_5, required: true },
            { prompt: "___不喜欢知识性或者哲学性强的讨论", labels: Likert_5, required: true },
            { prompt: "___不如别人有活力", labels: Likert_5, required: true },
            { prompt: "___宽宏大量", labels: Likert_5, required: true },
            { prompt: "___有时比较没有责任心", labels: Likert_5, required: true },
            { prompt: "___情绪稳定，不易生气", labels: Likert_5, required: true },
            { prompt: "___几乎没有什么创造性", labels: Likert_5, required: true },
            { prompt: "___有时会害羞，比较内向", labels: Likert_5, required: true },
            { prompt: "___乐于助人，待人无私", labels: Likert_5, required: true },
            { prompt: "___习惯让事物保持整洁有序", labels: Likert_5, required: true },
            { prompt: "___时常忧心忡忡，担心很多事情", labels: Likert_5, required: true },
            { prompt: "___重视艺术与审美", labels: Likert_5, required: true },
            { prompt: "___感觉自己很难对他人产生影响", labels: Likert_5, required: true },
            { prompt: "___有时对人比较粗鲁", labels: Likert_5, required: true },
            { prompt: "___有效率，做事有始有终", labels: Likert_5, required: true },
            { prompt: "___时常觉得悲伤", labels: Likert_5, required: true },
            { prompt: "___思想深刻", labels: Likert_5, required: true },
            { prompt: "___精力充沛", labels: Likert_5, required: true },
            { prompt: "___不相信别人，怀疑别人的意图", labels: Likert_5, required: true },
            { prompt: "___可靠的，总是值得他人信赖", labels: Likert_5, required: true },
            { prompt: "___能够控制自己的情绪", labels: Likert_5, required: true },
            { prompt: "___缺乏想象力", labels: Likert_5, required: true },
            { prompt: "___爱说话，健谈", labels: Likert_5, required: true },
            { prompt: "___有时对人冷淡，漠不关心", labels: Likert_5, required: true },
            { prompt: "___乱糟糟的，不爱收拾", labels: Likert_5, required: true },
            { prompt: "___很少觉得焦虑或者害怕", labels: Likert_5, required: true },
            { prompt: "___觉得诗歌、戏剧很无聊", labels: Likert_5, required: true },
            { prompt: "___更喜欢让别人来领头负责", labels: Likert_5, required: true },
            { prompt: "___待人谦逊礼让", labels: Likert_5, required: true },
            { prompt: "___有恒心，能坚持把事情做完", labels: Likert_5, required: true },
            { prompt: "___时常觉得郁郁寡欢", labels: Likert_5, required: true },
            { prompt: "___对抽象的概念和想法没什么兴趣", labels: Likert_5, required: true },
            { prompt: "___充满热情", labels: Likert_5, required: true },
            { prompt: "___把人往最好的方面想", labels: Likert_5, required: true },
            { prompt: "___有时候会做出一些不负责任的行为", labels: Likert_5, required: true },
            { prompt: "___情绪多变，容易愤怒", labels: Likert_5, required: true },
            { prompt: "___有创意，能想出新点子", labels: Likert_5, required: true },
        ],
        button_label: "继续",
        scale_width: 500,
        randomize_question_order: false,
    },
    {
        data: {
            screen_id: "check2"
        },
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: ['<p>___上部分题目一共有几个等级（填写数字）<p>'], name: 'cheat', labels: Likert_5 },
        ],
    }
    ]
}