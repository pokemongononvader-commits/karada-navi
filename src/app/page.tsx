import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";

export default function Home() {
return ( <main className="min-h-dvh bg-gradient-to-b from-green-100 via-green-50 to-white pb-12">


  {/* ヘッダー */}
  <header className="bg-green-400 shadow-lg">
    <div className="max-w-6xl mx-auto p-6 text-center">

      <h1 className="text-4xl font-bold text-white">
        一心たけうち接骨院
      </h1>

      <p className="text-green-100 text-lg mt-2">
        からだナビ
      </p>

      <p className="text-white text-sm mt-2">
        動き・部位・症状・FAQから身体のつながりを学べます
      </p>

    </div>
  </header>

  {/* メイン */}
  <div className="max-w-6xl mx-auto p-6">

    {/* ほねっぴ＆ボンちゃん */}
    <section className="bg-white rounded-3xl shadow-lg p-8">

      <div className="grid md:grid-cols-2 gap-8 items-center">

        <div className="text-center">

          <img
            src="/honeppi3d02.png"
            alt="ほねっぴ"
            className="mx-auto w-40"
          />

          <h2 className="text-3xl font-bold text-green-800 mt-4">
            ようこそ！
          </h2>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            一心たけうち接骨院の
            「からだナビ」へようこそ。
          </p>

          <p className="mt-2 text-gray-600 leading-relaxed">
            ほねっぴと一緒に、
            気になる身体のことを
            やさしく学んでいきましょう。
          </p>

        </div>

        <div className="bg-green-100 rounded-3xl p-6 text-center">

          <img
            src="/bone3d01.png"
            alt="ボンちゃん"
            className="mx-auto w-40"
          />

          <h3 className="text-2xl font-bold text-green-800 mt-4">
            🦴 ボンちゃんの案内
          </h3>

          <p className="mt-4 text-gray-700 leading-relaxed text-left">
            痛い場所だけでなく、
            関連する部位・動き・症状も一緒に見ていくと、
            身体のつながりが分かりやすくなるよ♪
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed text-left">
            迷ったら「FAQ」から探してみてね。
          </p>

        </div>

      </div>

    </section>

    {/* メインメニュー */}
    <section className="mt-8">

      <h2 className="text-3xl font-bold text-center text-green-800">
        どこから調べますか？
      </h2>

      <p className="text-center text-gray-600 mt-2">
        気になる入口を選んでください
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-6">

        <Link
          href="/motions"
          className="bg-white rounded-3xl shadow-lg p-8 hover:bg-green-100 hover:scale-105 transition"
        >
          <div className="text-5xl text-center">
            🚶
          </div>

          <h3 className="text-2xl font-bold text-center mt-4 text-green-800">
            動きから探す
          </h3>

          <p className="text-center text-gray-600 mt-2">
            歩く・階段・正座など
          </p>
        </Link>

        <Link
          href="/body-parts"
          className="bg-white rounded-3xl shadow-lg p-8 hover:bg-green-100 hover:scale-105 transition"
        >
          <div className="text-5xl text-center">
            🦴
          </div>

          <h3 className="text-2xl font-bold text-center mt-4 text-green-800">
            部位から探す
          </h3>

          <p className="text-center text-gray-600 mt-2">
            首・肩・腰・膝など
          </p>
        </Link>

        <Link
          href="/symptoms"
          className="bg-white rounded-3xl shadow-lg p-8 hover:bg-green-100 hover:scale-105 transition"
        >
          <div className="text-5xl text-center">
            😣
          </div>

          <h3 className="text-2xl font-bold text-center mt-4 text-green-800">
            症状から探す
          </h3>

          <p className="text-center text-gray-600 mt-2">
            腰痛・膝痛・肩痛など
          </p>
        </Link>

        <Link
          href="/faq"
          className="bg-white rounded-3xl shadow-lg p-8 hover:bg-green-100 hover:scale-105 transition"
        >
          <div className="text-5xl text-center">
            ❓
          </div>

          <h3 className="text-2xl font-bold text-center mt-4 text-green-800">
            FAQ
          </h3>

          <p className="text-center text-gray-600 mt-2">
            よくある質問から探す
          </p>
        </Link>

      </div>

    </section>

    {/* からだナビの特徴 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h3 className="text-2xl font-bold text-green-800">
        🧭 からだナビの特徴
      </h3>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <div className="bg-green-50 rounded-2xl p-4">
          <h4 className="font-bold text-green-800">
            ① 身体のつながりが分かる
          </h4>

          <p className="text-gray-700 mt-2">
            痛い場所だけでなく、関連する部位や動きも確認できます。
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-4">
          <h4 className="font-bold text-green-800">
            ② FAQからすぐ探せる
          </h4>

          <p className="text-gray-700 mt-2">
            よくある質問から、今気になることを調べられます。
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-4">
          <h4 className="font-bold text-green-800">
            ③ 回遊しながら学べる
          </h4>

          <p className="text-gray-700 mt-2">
            関連リンクで、部位・動き・症状を行き来できます。
          </p>
        </div>

      </div>

    </section>

    {/* キャラクター紹介 */}
    <section className="grid md:grid-cols-2 gap-6 mt-8">

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h3 className="text-2xl font-bold text-green-800">
          💚 ほねっぴ
        </h3>

        <p className="mt-4 text-gray-700 leading-relaxed">
          一心たけうち接骨院のマスコット。
          患者さんに親しみやすく、
          院の雰囲気をやさしく伝えてくれる存在です。
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h3 className="text-2xl font-bold text-green-800">
          🦴 ボンちゃん
        </h3>

        <p className="mt-4 text-gray-700 leading-relaxed">
          からだナビの案内係。
          部位・動き・症状・FAQをつなぎながら、
          身体のことをわかりやすく説明してくれます。
        </p>

      </div>

    </section>

    {/* 院長メッセージ */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8 mb-8">

      <h3 className="text-2xl font-bold text-green-800">
        院長からひとこと
      </h3>

      <p className="mt-4 text-xl font-bold text-green-700">
        「早期治癒は当院と患者さんとの二人三脚で！」
      </p>

      <p className="mt-4 text-gray-700 leading-relaxed">
        痛みの改善には施術だけでなく、
        日常生活での過ごし方や身体への理解も大切です。

        からだナビを通じて、
        ご自身の身体について知っていただき、
        一緒に健康な身体づくりを目指しましょう。
      </p>

    </section>
{/* フッター */}


<ClinicCTA />
  </div>

</main>


);
}
