import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { relatedLinks } from "@/data/navigation";

const faqList = [
{
question: "枕は変えた方がいいですか？",
answer:
"枕は自分に合うものを探すのが難しいものです。枕そのものを変えるより、首や肩への当たり方を工夫してみましょう。",
bon:
"🦴 ボンちゃんポイント：枕探しは意外と難しいんだよ♪",
},

{
question: "スマホは見ても大丈夫ですか？",
answer:
"首が痛い原因がスマホの見過ぎなら、できるだけ時間を減らしましょう。机に置いて目線を下げ過ぎない工夫も大切です。",
bon:
"🦴 ボンちゃんポイント：うつむき姿勢には注意だよ♪",
},

{
question: "首が痛いのに肩も治療するのはなぜですか？",
answer:
"首は肩の上に乗っています。肩や肩甲骨の位置が悪いと首にも負担がかかるためです。",
bon:
"🦴 ボンちゃんポイント：土台から整えることが大切だよ♪",
},

{
question: "寝違えはなぜ起こるのですか？",
answer:
"数日前からの疲労や筋肉の緊張が積み重なり、寝ている時の姿勢がきっかけとなって起こることが多いです。",
bon:
"🦴 ボンちゃんポイント：寝違えは突然じゃないことも多いよ♪",
},

{
question: "パソコン作業はしてもいいですか？",
answer:
"可能ですが、首への負担が原因の場合は時間を調整し、定期的に休憩やストレッチを行いましょう。",
bon:
"🦴 ボンちゃんポイント：1時間に1回は休憩しよう♪",
},

{
question: "運転しても大丈夫ですか？",
answer:
"首が痛い時は左右確認や後方確認がしづらくなるため注意が必要です。",
bon:
"🦴 ボンちゃんポイント：安全第一だよ♪",
},

{
question: "首をポキポキ鳴らしてもいいですか？",
answer:
"おすすめしません。首には大切な神経や血管が通っていますので、無理に鳴らさないようにしましょう。",
bon:
"🦴 ボンちゃんポイント：音より動きが大切なんだよ♪",
},
];

export default function NeckFAQPage() {
return ( <main className="min-h-screen bg-green-50">


  <header className="bg-green-300 p-6 shadow">
    <h1 className="text-4xl font-bold text-center text-green-900">
      🦴 首・頚部 FAQ
    </h1>

    <p className="text-center text-green-800 mt-2">
      首や頚部についてよくある質問
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
            {relatedLinks.首.bodyParts.map((item) => (
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
            {relatedLinks.首.motions.map((item) => (
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
            {relatedLinks.首.symptoms.map((item) => (
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

