import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { relatedLinks } from "@/data/navigation";

const faqList = [
{
question: "温めた方がいいですか？",
answer:
"負傷したばかりのときは炎症を起こしていて熱感を持ちやすいので氷や保冷剤で冷やしてください。",
bon:
"🦴 ボンちゃんポイント：ケガ直後は冷却が大切だよ♪",
},

{
question: "冷やした方がいいですか？",
answer:
"患部は冷やしてください。ただし氷や保冷剤を直接当てず、タオルなどに包んで使用してください。",
bon:
"🦴 ボンちゃんポイント：冷やしすぎにも注意してね♪",
},

{
question: "お風呂に入ってもいいですか？",
answer:
"入浴は可能ですが患部を揉まないようにしてください。入浴後は10〜20分程度アイシングをおすすめします。",
bon:
"🦴 ボンちゃんポイント：お風呂で温まった後はクールダウン♪",
},

{
question: "お酒を飲んでもいいですか？",
answer:
"飲酒により血流が良くなりすぎると痛みが増す場合があります。飲み過ぎには注意してください。",
bon:
"🦴 ボンちゃんポイント：ほどほどが一番だよ♪",
},

{
question: "湿布は貼った方がいいですか？",
answer:
"消炎鎮痛成分が含まれている湿布は有効です。適切に使用してください。",
bon:
"🦴 ボンちゃんポイント：湿布はお守りじゃないよ♪",
},

{
question: "サポーターはした方がいいですか？",
answer:
"部位によって必要性が異なります。固定の仕方によっては逆効果になることもあるのでご相談ください。",
bon:
"🦴 ボンちゃんポイント：締めすぎは禁物だよ♪",
},

{
question: "動かさない方がいいですか？",
answer:
"患部によっては安静が必要です。適切な負荷をかけながら回復を目指すこともあります。",
bon:
"🦴 ボンちゃんポイント：無理も放置もしないことが大切♪",
},

{
question: "歩いてもいいですか？",
answer:
"状態によります。歩行が回復を助けることもありますが、悪化させる場合もあります。",
bon:
"🦴 ボンちゃんポイント：迷った時は相談してね♪",
},

{
question: "痛くても仕事に行っていいですか？",
answer:
"無理をすると回復が遅れることがあります。症状に応じて判断しましょう。",
bon:
"🦴 ボンちゃんポイント：身体も大切な仕事道具だよ♪",
},

{
question: "痛み止めを飲んでもいいですか？",
answer:
"市販の鎮痛剤を服用しても構いませんが、痛みが消えても無理な運動は控えてください。",
bon:
"🦴 ボンちゃんポイント：用法用量を守ってね♪",
},
];

export default function AcuteFAQPage() {
return ( <main className="min-h-screen bg-green-50">


  <header className="bg-green-300 p-6 shadow">
    <h1 className="text-4xl font-bold text-center text-green-900">
      🚑 急性期・捻挫 FAQ
    </h1>

    <p className="text-center text-green-800 mt-2">
      ケガ直後によくある質問
    </p>
  </header>

  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/faq"
      className="inline-block mb-6 text-green-700 font-bold"
    >
      ← FAQ一覧へ戻る
    </Link>
<section className="bg-white rounded-3xl shadow-lg p-6 mb-8">

  <h2 className="text-2xl font-bold text-green-800 mb-4">
    🧊 ケガをしたばかりの基本対応「POLICE」
  </h2>

  <p className="text-gray-700 leading-relaxed mb-6">
    捻挫・打撲・肉離れなど、ケガをした直後は、
    患部を守りながら腫れや痛みを強くしないことが大切です。
  </p>

  <div className="space-y-4">

    <div className="bg-green-100 rounded-2xl p-4">
      <h3 className="font-bold text-green-800">
        P = Protect（保護）
      </h3>
      <p className="mt-2 text-gray-700">
        患部をサポーターやテーピングなどで守り、
        これ以上悪化しないようにします。
      </p>
    </div>

    <div className="bg-blue-100 rounded-2xl p-4">
      <h3 className="font-bold text-blue-800">
        OL = Optimal Loading（最適な負荷）
      </h3>
      <p className="mt-2 text-gray-700">
        痛みのない範囲で、早期から適切に動かし、
        少しずつ負荷をかけていきます。
      </p>
    </div>

    <div className="bg-cyan-100 rounded-2xl p-4">
      <h3 className="font-bold text-cyan-800">
        I = Ice（冷却）
      </h3>
      <p className="mt-2 text-gray-700">
        腫れや痛みを抑えるために冷やします。
        冷やしすぎには注意しましょう。
      </p>
    </div>

    <div className="bg-yellow-100 rounded-2xl p-4">
      <h3 className="font-bold text-yellow-800">
        C = Compression（圧迫）
      </h3>
      <p className="mt-2 text-gray-700">
        包帯などで圧迫し、内出血や腫れを防ぎます。
        ただし、しびれや色の変化が出るほど強く圧迫しないことが大切です。
      </p>
    </div>

    <div className="bg-purple-100 rounded-2xl p-4">
      <h3 className="font-bold text-purple-800">
        E = Elevation（挙上）
      </h3>
      <p className="mt-2 text-gray-700">
        患部を心臓より高い位置に保ち、
        腫れを抑えやすくします。
      </p>
    </div>

  </div>

  <div className="bg-green-200 rounded-2xl p-5 mt-6">
    <h3 className="font-bold text-green-900">
      🦴 ボンちゃんポイント
    </h3>
    <p className="mt-2 text-green-900 leading-relaxed">
      ケガをした直後は、無理に動かしすぎず、
      でも完全に動かさないだけでもなく、
      「守りながら少しずつ」が大切だよ♪
    </p>
  </div>

</section>
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
            {relatedLinks.急性期.bodyParts.map((item) => (
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
            {relatedLinks.急性期.motions.map((item) => (
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
            {relatedLinks.急性期.symptoms.map((item) => (
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
