import Link from "next/link";

type MotionData = {
title: string;
muscles: string[];
joints: string[];
symptoms: string[];
explanation: string;
};

const motionDatabase: Record<string, MotionData> = {
"raise-arm": {
title: "腕を上げる",
muscles: ["三角筋", "棘上筋", "前鋸筋"],
joints: ["肩関節", "肩甲胸郭関節"],
symptoms: ["四十肩", "五十肩", "インピンジメント症候群"],
explanation:
"腕を上げる時は肩だけでなく肩甲骨も一緒に動いています。この連携が悪くなると肩の痛みが起こりやすくなります。",
},

walk: {
title: "歩く",
muscles: ["大殿筋", "大腿四頭筋", "前脛骨筋"],
joints: ["股関節", "膝関節", "足関節"],
symptoms: ["膝痛", "股関節痛"],
explanation:
"歩く動作では股関節・膝・足首が連携して働きます。どこか一つの動きが悪くなると痛みにつながります。",
},

seiza: {
title: "正座",
muscles: ["大腿四頭筋", "ハムストリングス", "腓腹筋"],
joints: ["膝関節", "足関節"],
symptoms: ["膝痛", "半月板障害"],
explanation:
"正座では膝を深く曲げるため、関節や半月板への負担が増加します。",
},
};

export default async function MotionDetail({
params,
}: {
params: Promise<{ id: string }>;
}) {
const { id } = await params;

const motion = motionDatabase[id];

if (!motion) {
return ( <main className="min-h-screen flex items-center justify-center"> <h1>データが見つかりません</h1> </main>
);
}

return ( <main className="min-h-screen bg-green-50">

```
  <header className="bg-green-300 p-6 shadow">
    <h1 className="text-3xl font-bold text-center text-green-900">
      一心たけうち接骨院
    </h1>

    <p className="text-center text-green-800">
      からだナビ
    </p>
  </header>

  <div className="max-w-2xl mx-auto p-6">

    <Link
      href="/motions"
      className="inline-block mb-4 text-green-700 font-bold"
    >
      ← 動き一覧へ戻る
    </Link>

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold text-center text-green-900">
        {motion.title}
      </h2>

      <div className="mt-6 bg-green-100 rounded-2xl p-4">
        <h3 className="font-bold text-lg mb-2">
          🦴 ほねっぴの解説
        </h3>

        <p>{motion.explanation}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">
          💪 主な筋肉
        </h3>

        <ul className="space-y-2">
          {motion.muscles.map((muscle) => (
            <li key={muscle}>
              ・{muscle}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">
          🦴 主な関節
        </h3>

        <ul className="space-y-2">
          {motion.joints.map((joint) => (
            <li key={joint}>
              ・{joint}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">
          😣 関連する症状
        </h3>

        <ul className="space-y-2">
          {motion.symptoms.map((symptom) => (
            <li key={symptom}>
              ・{symptom}
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</main>


);
}
