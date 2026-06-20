import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";


export default function AnklePage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/body-parts"
      className="text-green-700 hover:underline"
    >
      ← 部位一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      足関節（足首）
    </h1>

    <p className="mt-4 text-lg text-gray-700">
      足関節は歩行・走行・ジャンプなど、
      すべての移動動作に関わる重要な関節です。
    </p>

    <img
      src="/images/bodyparts/ankle.png"
      alt="足関節"
      className="w-72 mx-auto rounded-3xl shadow-lg"
    />

    {/* 解剖 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        足関節とは？
      </h2>

      <p className="mt-4 text-gray-700 leading-relaxed">
        足関節は
        脛骨（けいこつ）、
        腓骨（ひこつ）、
        距骨（きょこつ）
        によって構成されています。
      </p>

      <p className="mt-4 text-gray-700 leading-relaxed">
        身体の体重を支えながら
        歩く・走る・跳ぶなどの動作を行います。
      </p>

    </section>

    {/* 主な筋肉 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関連する筋肉
      </h2>

      <ul className="mt-4 space-y-2 text-gray-700">
        <li>● 前脛骨筋</li>
        <li>● 腓腹筋</li>
        <li>● ヒラメ筋</li>
        <li>● 長腓骨筋</li>
        <li>● 短腓骨筋</li>
      </ul>

    </section>

    {/* よくある症状 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        よくある症状
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">

        <div className="bg-red-50 p-4 rounded-xl">
          足関節捻挫
        </div>

        <div className="bg-red-50 p-4 rounded-xl">
          アキレス腱炎
        </div>

        <div className="bg-red-50 p-4 rounded-xl">
          足底筋膜炎
        </div>

        <div className="bg-red-50 p-4 rounded-xl">
          外果部痛
        </div>

      </div>

    </section>

    {/* 動作 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関連する動作
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-4">

        <div className="bg-green-100 p-4 rounded-xl text-center">
          歩行
        </div>

        <div className="bg-green-100 p-4 rounded-xl text-center">
          ランニング
        </div>

        <div className="bg-green-100 p-4 rounded-xl text-center">
          ジャンプ
        </div>

      </div>

    </section>

    {/* ほねっぴ */}
    <section className="bg-green-200 rounded-3xl p-6 mt-8">
<section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

  <h2 className="text-2xl font-bold text-green-800 mb-4">
    🧭 からだナビ関連リンク
  </h2>

  <div className="space-y-4">


<div>
  <h3 className="font-bold text-blue-700">
    🚶 関連動作
  </h3>

  <div className="flex flex-wrap gap-2 mt-2">
    {bodyPartLinks.足首.motions.map((item) => (
      <Link
        key={`${item.name}-${item.href}`}
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
    {bodyPartLinks.足首.symptoms.map((item) => (
      <Link
        key={`${item.name}-${item.href}`}
        href={item.href}
        className="bg-red-200 px-3 py-1 rounded-full hover:bg-red-300"
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>

<div>
  <h3 className="font-bold text-green-700">
    ❓ 関連FAQ
  </h3>

  <div className="flex flex-wrap gap-2 mt-2">
    {bodyPartLinks.足首.faqs.map((item) => (
      <Link
        key={`${item.name}-${item.href}`}
        href={item.href}
        className="bg-green-200 px-3 py-1 rounded-full hover:bg-green-300"
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>


  </div>

</section>

      <h2 className="text-2xl font-bold text-green-900">
        🦴 ほねっぴポイント
      </h2>

      <p className="mt-4 text-green-900 leading-relaxed">
        足首の捻挫は「痛みがなくなった＝治った」
        ではありません。
        靭帯や周囲の筋肉の機能回復まで行うことで、
        再発予防につながります。
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
