import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { relatedLinks } from "@/data/navigation";


const faqList = [
{
question: "腰が痛いのに股関節の治療をするのはなぜですか？",
answer:
"股関節の動きが悪いと、その分腰が頑張りすぎてしまいます。腰だけでなく股関節や骨盤との連携も大切です。",
bon:
"🦴 ボンちゃんポイント：腰と股関節は仲良しコンビだよ♪",
},

{
question: "なぜ左右のバランスが大切なのですか？",
answer:
"左右どちらかばかり使うと筋肉の負担が偏り、痛みの原因になります。",
bon:
"🦴 ボンちゃんポイント：人はバランスの生き物だよ♪",
},

{
question: "コルセットはした方がいいですか？",
answer:
"痛みが強い時は有効です。ただし長期間使い続けると筋肉が弱くなる場合があります。",
bon:
"🦴 ボンちゃんポイント：頼りすぎには注意だね♪",
},

{
question: "ストレッチはした方がいいですか？",
answer:
"ぜひ行ってください。ただし勢いをつけず、ゆっくり呼吸をしながら行いましょう。",
bon:
"🦴 ボンちゃんポイント：ゆっくりがコツだよ♪",
},

{
question: "寝方で気を付けることはありますか？",
answer:
"横向きで膝の間にクッションを挟んだり、仰向けで膝の下にタオルを入れると楽になることがあります。",
bon:
"🦴 ボンちゃんポイント：睡眠も治療の一部だよ♪",
},

{
question: "朝起きる時に痛いのはなぜですか？",
answer:
"睡眠中は血流が低下し、起床時に急に動くことで痛みを感じやすくなります。",
bon:
"🦴 ボンちゃんポイント：起きる前に軽く動こう♪",
},

{
question: "長時間座ると痛くなるのはなぜですか？",
answer:
"姿勢が崩れやすく、腰や骨盤周囲に負担が集中するためです。",
bon:
"🦴 ボンちゃんポイント：座り方も大切だよ♪",
},

{
question: "痛みが無くなったら治ったのですか？",
answer:
"痛みがなくても組織が完全に回復したとは限りません。徐々に活動量を戻しましょう。",
bon:
"🦴 ボンちゃんポイント：焦らずゆっくりね♪",
},

{
question: "痛い所だけ治療すればいいのですか？",
answer:
"痛みの原因が別の場所にあることも多く、全身のバランスを確認することが大切です。",
bon:
"🦴 ボンちゃんポイント：身体は全部つながっているよ♪",
},

{
question: "コルセットを外すと不安なのですが？",
answer:
"少しずつ外す時間を増やしていきましょう。筋肉が働く環境を作ることも大切です。",
bon:
"🦴 ボンちゃんポイント：卒業する勇気も必要だよ♪",
},

{
question: "腰痛は癖になりますか？",
answer:
"腰痛そのものが癖になるわけではありませんが、生活習慣や動き方によって再発することがあります。",
bon:
"🦴 ボンちゃんポイント：予防が一番大切だよ♪",
},
];

export default function LowbackFAQPage() {
return ( <main className="min-h-screen bg-green-50">


  <header className="bg-green-300 p-6 shadow">
    <h1 className="text-4xl font-bold text-center text-green-900">
      🦴 腰痛 FAQ
    </h1>

    <p className="text-center text-green-800 mt-2">
      腰痛についてよくある質問
    </p>
  </header>

  <div className="max-w-5xl mx-auto p-6">
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
    {relatedLinks.腰.bodyParts.map((item) => (
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
    {relatedLinks.腰.motions.map((item) => (
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
    {relatedLinks.腰.symptoms.map((item) => (
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


    <Link
      href="/faq"
      className="inline-block mb-6 text-green-700 font-bold"
    >
      ← FAQ一覧へ戻る
    </Link>

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
