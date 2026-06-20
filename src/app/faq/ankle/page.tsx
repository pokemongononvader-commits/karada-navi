import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { relatedLinks } from "@/data/navigation";

const faqList = [
{
question: "捻挫はクセになりますか？",
answer:
"完治した捻挫がクセになることはありません。ただし、足の使い方や歩き方のクセが残ると再受傷しやすくなります。",
bon:
"🦴 ボンちゃんポイント：クセになるのは捻挫じゃなくて動き方かも♪",
},

{
question: "痛みがなくなったら治ったということですか？",
answer:
"痛みがなくなっても組織が完全に回復したとは限りません。日常生活や運動に問題なく戻れる状態が本当の治癒です。",
bon:
"🦴 ボンちゃんポイント：痛みの消失と治癒は別なんだよ♪",
},

{
question: "サポーターはいつまで必要ですか？",
answer:
"患部の状態を見ながら判断します。自己判断で外すのではなく、指示に従って使用してください。",
bon:
"🦴 ボンちゃんポイント：締めすぎにも注意してね♪",
},

{
question: "再発予防には何をしたらいいですか？",
answer:
"普段からストレッチや足首周囲の運動を行い、柔軟性と安定性を維持することが大切です。",
bon:
"🦴 ボンちゃんポイント：予防も立派な治療だよ♪",
},

{
question: "捻挫が治った後も運動前に気を付けることはありますか？",
answer:
"運動前は動的ストレッチ、運動後はゆっくりとしたストレッチを行いましょう。",
bon:
"🦴 ボンちゃんポイント：クールダウンも忘れないでね♪",
},

{
question: "テーピングはした方がいいですか？",
answer:
"テーピングは有効ですが、貼り方によっては逆効果になることもあります。専門家の指導を受けることをおすすめします。",
bon:
"🦴 ボンちゃんポイント：貼り方にもコツがあるんだよ♪",
},

{
question: "足首がグラグラする感じがあります。治っていますか？",
answer:
"靭帯がまだ十分に安定していない場合があります。状態を確認しながら段階的に負荷を戻していきましょう。",
bon:
"🦴 ボンちゃんポイント：焦らずしっかり治そうね♪",
},
];

export default function AnkleFAQPage() {
return ( <main className="min-h-screen bg-green-50">


  <header className="bg-green-300 p-6 shadow">
    <h1 className="text-4xl font-bold text-center text-green-900">
      🦴 足首 FAQ
    </h1>

    <p className="text-center text-green-800 mt-2">
      足首・捻挫についてよくある質問
    </p>
  </header>

  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/faq"
      className="inline-block mb-6 text-green-700 font-bold"
    >
      ← FAQ一覧へ戻る
    </Link>

    <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

      <h2 className="text-2xl font-bold text-green-800 mb-4">
        🧭 からだナビ関連リンク
      </h2>

      <div className="space-y-4">

        <div>
          <h3 className="font-bold text-green-700">
            🦴 関連部位
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {relatedLinks.足首.bodyParts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-green-200 px-3 py-1 rounded-full hover:bg-green-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-blue-700">
            🚶 関連動作
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {relatedLinks.足首.motions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-blue-200 px-3 py-1 rounded-full hover:bg-blue-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-red-700">
            😣 関連症状
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {relatedLinks.足首.symptoms.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-red-200 px-3 py-1 rounded-full hover:bg-red-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>

    </div>

    <div className="space-y-6">

      {faqList.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg p-6"
        >

          <h2 className="text-xl font-bold text-green-800">
            Q. {faq.question}
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            A. {faq.answer}
          </p>

          <div className="mt-4 bg-green-100 rounded-2xl p-4">
            <p className="text-green-900">
              {faq.bon}
            </p>
          </div>

        </div>
      ))}

    </div>
<ClinicCTA />
  </div>

</main>


);
}
