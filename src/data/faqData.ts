export type FAQItem = {
category: string;
question: string;
answer: string;
bon: string;
parts: string[];
motions: string[];
symptoms: string[];
};

export const faqData: FAQItem[] = [

// -------------------------
// 急性期
// -------------------------

{
category: "acute",

question: "温めた方がいいですか？",

answer:
  "負傷したばかりのときは炎症を起こしていて熱感を持ちやすいので氷や保冷剤で冷やしてください。",

bon:
  "急性の場合はPOLICE処置を考えます。腫れや炎症を抑えるため冷却が大切です。",

parts: ["患部全般"],

motions: ["歩行", "階段昇降", "スポーツ動作"],

symptoms: ["捻挫", "打撲", "急性痛"],


},

{
category: "acute",


question: "冷やした方がいいですか？",

answer:
  "患部は冷やしてください。ただし氷や保冷剤はタオルなどに包んで使用してください。",

bon:
  "冷やしすぎによる凍傷には注意してください。",

parts: ["患部全般"],

motions: ["歩行", "階段昇降"],

symptoms: ["捻挫", "打撲", "急性痛"],


},

{
category: "acute",


question: "お風呂に入ってもいいですか？",

answer:
  "入浴は可能ですが患部を揉まないようにしてください。",

bon:
  "入浴後は10〜20分程度アイシングがおすすめです。",

parts: ["炎症部位"],

motions: ["日常生活"],

symptoms: ["捻挫", "打撲"],


},

// -------------------------
// 腰痛
// -------------------------

{
category: "lowback",


question: "腰が痛いのに股関節の治療をするのはなぜですか？",

answer:
  "股関節の動きが悪いと、その分腰が頑張りすぎてしまいます。",

bon:
  "腰と股関節は仲良しコンビです。",

parts: ["腰椎", "骨盤", "股関節"],

motions: ["歩行", "立ち上がり", "しゃがみ込み"],

symptoms: ["腰痛", "股関節痛"],


},

{
category: "lowback",


question: "なぜ左右のバランスが大切なのですか？",

answer:
  "左右どちらかばかり使うと筋肉への負担が偏り痛みにつながります。",

bon:
  "人はバランスの生き物です。",

parts: ["全身"],

motions: ["歩行", "立位保持", "スポーツ"],

symptoms: ["腰痛", "肩こり"],


},

{
category: "lowback",


question: "コルセットはした方がいいですか？",

answer:
  "痛みが強い時は有効です。ただし長期間の使用には注意してください。",

bon:
  "頼りすぎると筋肉が怠けてしまいます。",

parts: ["腰部", "骨盤"],

motions: ["立位", "荷物の持ち上げ"],

symptoms: ["腰痛"],


},

];
