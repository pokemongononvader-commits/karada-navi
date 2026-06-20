import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { relatedLinks } from "@/data/navigation";

const faqList = [
{
question: "階段を使っても大丈夫ですか？",
answer:
"階段は使っても大丈夫ですが、特に下りは膝への負担が大きくなります。手すりを使いながら一段ずつ慎重に降りましょう。",
bon:
"🦴 ボンちゃんポイント：階段は下りの方が負担が大きいよ♪",
},

{
question: "正座はしてもいいですか？",
answer:
"痛みがある時は無理に正座をしないでください。椅子に座る方が膝への負担は少なくなります。",
bon:
"🦴 ボンちゃんポイント：無理な正座はお休みしようね♪",
},

{
question: "膝が痛いのに股関節を見るのはなぜですか？",
answer:
"歩行や立ち上がりでは膝と股関節が連動して動きます。股関節の動きが悪いと膝へ余計な負担がかかります。",
bon:
"🦴 ボンちゃんポイント：膝と股関節はチームプレーなんだよ♪",
},

{
question: "歩いた方がいいですか？",
answer:
"正しい歩き方であれば歩くことは大切です。ただし痛みを我慢して長時間歩くことは避けてください。",
bon:
"🦴 ボンちゃんポイント：引きずらずに歩こうね♪",
},

{
question: "階段と平地ではどちらが負担ですか？",
answer:
"階段の方が負担は大きく、特に下り階段では膝関節に強い負荷がかかります。",
bon:
"🦴 ボンちゃんポイント：下り階段は特に注意だよ♪",
},

{
question: "膝に水が溜まるとはどういうことですか？",
answer:
"炎症が起きると関節の中に体液が集まり、『水が溜まる』状態になります。",
bon:
"🦴 ボンちゃんポイント：炎症のサインのひとつなんだよ♪",
},

{
question: "膝が痛い時は正座しない方がいいですか？",
answer:
"痛みがある時には無理に正座をしないでください。回復状況に合わせて少しずつ練習していきます。",
bon:
"🦴 ボンちゃんポイント：焦らず段階的にね♪",
},
];

export default function KneeFAQPage() {
return ( <main className="min-h-screen bg-green-50">


  <header className="bg-green-300 p-6 shadow">
    <h1 className="text-4xl font-bold text-center text-green-900">
      🦴 膝 FAQ
    </h1>

    <p className="text-center text-green-800 mt-2">
      膝の痛みについてよくある質問
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
            {relatedLinks.膝.bodyParts.map((item) => (
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
            {relatedLinks.膝.motions.map((item) => (
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
            {relatedLinks.膝.symptoms.map((item) => (
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
