import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";

export default function LowBackPage() {
return ( <main className="max-w-4xl mx-auto p-6">


  <Link
    href="/body-parts"
    className="text-green-700 hover:underline"
  >
    ← 体の部位一覧へ戻る
  </Link>

  <h1 className="text-4xl font-bold text-green-700 mb-6">
    腰
  </h1>

  <img
    src="/images/bodyparts/lowback.png"
    alt="腰"
    className="w-72 mx-auto rounded-3xl shadow-lg"
  />

  <div className="bg-white rounded-3xl shadow-lg p-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      腰とは？
    </h2>

    <p className="leading-relaxed">
      腰は上半身と下半身をつなぐ重要な部分です。
      歩く、立つ、座る、持ち上げるなど、
      日常生活のあらゆる動作で大きな役割を担っています。
    </p>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      関連する骨
    </h2>

    <ul className="list-disc pl-6">
      <li>腰椎</li>
      <li>仙骨</li>
      <li>骨盤</li>
    </ul>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      関連する筋肉
    </h2>

    <ul className="list-disc pl-6">
      <li>脊柱起立筋</li>
      <li>腰方形筋</li>
      <li>大殿筋</li>
      <li>中殿筋</li>
      <li>腸腰筋</li>
    </ul>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      関連する関節
    </h2>

    <ul className="list-disc pl-6">
      <li>腰椎椎間関節</li>
      <li>仙腸関節</li>
      <li>股関節</li>
    </ul>

  </div>

  <div className="bg-green-100 rounded-3xl p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-800 mb-4">
      🦴 よくある質問
    </h2>

    <ul className="space-y-2">
      <li>・腰が痛いのに股関節の治療をするのはなぜですか？</li>
      <li>・なぜ左右のバランスが大切なのですか？</li>
      <li>・コルセットはした方がいいですか？</li>
      <li>・ストレッチはした方がいいですか？</li>
      <li>・寝方で気を付けることはありますか？</li>
      <li>・朝起きる時に痛いのはなぜですか？</li>
      <li>・長時間座ると痛くなるのはなぜですか？</li>
      <li>・腰痛は癖になりますか？</li>
    </ul>

  </div>

  <div className="bg-green-200 rounded-3xl p-6 mt-6 shadow">
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
    {bodyPartLinks.腰.motions.map((item) => (
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
    {bodyPartLinks.腰.symptoms.map((item) => (
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
    {bodyPartLinks.腰.faqs.map((item) => (
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

    <h2 className="text-2xl font-bold text-green-900 mb-4">
      🦴 ほねっぴメモ
    </h2>

    <p className="leading-relaxed">
      腰だけが悪いとは限りません。
      股関節や骨盤、背中の動きが悪くなることで、
      腰に負担が集中して痛みが出ることがあります。
      当院では腰だけでなく身体全体のバランスも大切にしています。
    </p>
<ClinicCTA />
  </div>

</main>


);
}
