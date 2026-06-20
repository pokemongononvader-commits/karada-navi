import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";

export default function HipPage() {
return ( <main className="max-w-4xl mx-auto p-6">


  <Link
    href="/body-parts"
    className="text-green-700 hover:underline"
  >
    ← 体の部位一覧へ戻る
  </Link>

  <h1 className="text-4xl font-bold text-green-700 mb-6">
    股関節
  </h1>

  <img
    src="/images/bodyparts/hip.png"
    alt="股関節"
    className="w-72 mx-auto rounded-3xl shadow-lg"
  />

  <div className="bg-white rounded-3xl shadow-lg p-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      股関節とは？
    </h2>

    <p className="leading-relaxed">
      股関節は骨盤と太ももの骨をつなぐ大きな関節です。
      歩く、走る、しゃがむ、立ち上がるなど、
      人の移動動作の中心となる重要な関節です。
    </p>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      関連する骨
    </h2>

    <ul className="list-disc pl-6">
      <li>骨盤</li>
      <li>大腿骨</li>
    </ul>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      関連する筋肉
    </h2>

    <ul className="list-disc pl-6">
      <li>腸腰筋</li>
      <li>大殿筋</li>
      <li>中殿筋</li>
      <li>小殿筋</li>
      <li>大腿直筋</li>
      <li>内転筋群</li>
    </ul>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      関連する関節
    </h2>

    <ul className="list-disc pl-6">
      <li>股関節</li>
      <li>仙腸関節</li>
    </ul>

  </div>

  <div className="bg-green-100 rounded-3xl p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-800 mb-4">
      🦴 股関節が関係する動作
    </h2>

    <ul className="space-y-2">
      <li>・歩く</li>
      <li>・走る</li>
      <li>・階段昇降</li>
      <li>・しゃがむ</li>
      <li>・立ち上がる</li>
      <li>・正座</li>
      <li>・靴下を履く</li>
    </ul>

  </div>

  <div className="bg-green-100 rounded-3xl p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-800 mb-4">
      🦴 よくある関連症状
    </h2>

    <ul className="space-y-2">
      <li>・腰痛</li>
      <li>・膝痛</li>
      <li>・歩行時痛</li>
      <li>・立ち上がり時痛</li>
      <li>・股関節の詰まり感</li>
      <li>・足の付け根の痛み</li>
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
    {bodyPartLinks.股関節.motions.map((item) => (
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
    {bodyPartLinks.股関節.symptoms.map((item) => (
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
    {bodyPartLinks.股関節.faqs.map((item) => (
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
      腰痛の原因が実は股関節だった、
      というケースは少なくありません。
      股関節が硬くなると腰が頑張りすぎてしまい、
      結果として腰痛につながることがあります。
    </p>
<ClinicCTA />
  </div>

</main>


);
}
