import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { relatedLinks } from "@/data/navigation";

const faqList = [
{
question: "腕を動かした方がいいですか？",
answer:
"腕を動かして痛みが出る時には無理に動かさないでください。ただし肩関節の可動域を保つために、痛みのない範囲で使うことは大切です。",
bon:
"🦴 ボンちゃんポイント：痛くない範囲で動かそうね♪",
},

{
question: "肩が痛いのに肩甲骨の治療をするのはなぜですか？",
answer:
"肩関節は肩甲骨・上腕骨・鎖骨で構成されています。肩甲骨の動きが悪いと肩への負担が増えるためです。",
bon:
"🦴 ボンちゃんポイント：肩甲骨は肩の大切な相棒だよ♪",
},

{
question: "四十肩・五十肩は放っておいても治りますか？",
answer:
"自然に改善することもありますが、放置すると可動域が狭くなったり長引くことがあります。早めの施術をおすすめします。",
bon:
"🦴 ボンちゃんポイント：早めの対策が回復への近道だよ♪",
},

{
question: "洗濯物を干しても大丈夫ですか？",
answer:
"腕を上げても痛みがなければ問題ありません。ただし痛みがある場合は無理をしないでください。",
bon:
"🦴 ボンちゃんポイント：痛みがある時は無理しないでね♪",
},

{
question: "腕を上げない方がいいですか？",
answer:
"肩関節が固まらないように、痛みのない範囲では動かしてほしいです。ただし無理な挙上は避けてください。",
bon:
"🦴 ボンちゃんポイント：動かすことと無理することは違うよ♪",
},

{
question: "肩が鳴るのは悪いことですか？",
answer:
"音だけで問題とは限りません。ただし痛みを伴う場合や無理に鳴らそうとするのは避けましょう。",
bon:
"🦴 ボンちゃんポイント：音より痛みの有無が大事だよ♪",
},

{
question: "夜寝る時に痛いのはなぜですか？",
answer:
"肩への圧迫や炎症、血流の変化によって夜間痛が起こることがあります。",
bon:
"🦴 ボンちゃんポイント：寝る姿勢も影響するんだよ♪",
},

{
question: "肩を回すとゴリゴリ鳴るのですが大丈夫ですか？",
answer:
"関節や腱の動きによって音が鳴ることがあります。可動域が狭くなっている時にも起こりやすいです。",
bon:
"🦴 ボンちゃんポイント：肩甲骨を動かす運動も大切だよ♪",
},
];

export default function ShoulderFAQPage() {
return ( <main className="min-h-screen bg-green-50">


  <header className="bg-green-300 p-6 shadow">
    <h1 className="text-4xl font-bold text-center text-green-900">
      🦴 肩 FAQ
    </h1>

    <p className="text-center text-green-800 mt-2">
      肩の痛みについてよくある質問
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
            {relatedLinks.肩.bodyParts.map((item) => (
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
            {relatedLinks.肩.motions.map((item) => (
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
            {relatedLinks.肩.symptoms.map((item) => (
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
