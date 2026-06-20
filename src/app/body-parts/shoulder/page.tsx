import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";
export default function ShoulderPage() {
return ( <main className="max-w-4xl mx-auto p-6">


  <Link
    href="/body-parts"
    className="text-green-700 hover:underline"
  >
    ← 体の部位一覧へ戻る
  </Link>

  <h1 className="text-4xl font-bold text-green-700 mb-6">
    肩
  </h1>

  <img
    src="/images/bodyparts/shoulder.png"
    alt="肩"
    className="w-72 mx-auto mb-8"
  />

  <div className="bg-white rounded-3xl shadow-lg p-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      肩とは？
    </h2>

    <p className="leading-relaxed">
      肩は腕を自由に動かすための重要な関節です。
      洗髪や着替え、荷物を持つ動作など、
      日常生活のあらゆる場面で使われています。
    </p>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      関連する骨
    </h2>

    <ul className="list-disc pl-6">
      <li>上腕骨</li>
      <li>肩甲骨</li>
      <li>鎖骨</li>
    </ul>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      関連する筋肉
    </h2>

    <ul className="list-disc pl-6">
      <li>三角筋</li>
      <li>棘上筋</li>
      <li>棘下筋</li>
      <li>小円筋</li>
      <li>肩甲下筋</li>
      <li>僧帽筋</li>
    </ul>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      関連する関節
    </h2>

    <ul className="list-disc pl-6">
      <li>肩甲上腕関節</li>
      <li>肩鎖関節</li>
      <li>胸鎖関節</li>
    </ul>

  </div>

  <div className="bg-green-100 rounded-3xl p-6 mt-6">

    <h2 className="text-2xl font-bold text-green-800 mb-4">
      🦴 よくある質問
    </h2>

    <ul className="space-y-2">
      <li>・腕を動かした方がいいですか？</li>
      <li>・肩が痛いのに肩甲骨の治療をするのはなぜですか？</li>
      <li>・四十肩・五十肩は放っておいても治りますか？</li>
      <li>・洗濯物を干しても大丈夫ですか？</li>
      <li>・肩が鳴るのは悪いことですか？</li>
      <li>・夜寝る時に痛いのはなぜですか？</li>
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
    {bodyPartLinks.肩.motions.map((item) => (
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
    {bodyPartLinks.肩.symptoms.map((item) => (
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
    {bodyPartLinks.肩.faqs.map((item) => (
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
      肩関節は人体の中でも特に大きく動く関節です。
      その反面、不安定になりやすく、
      肩だけでなく肩甲骨や背中との連携も大切です。
    </p>
<ClinicCTA />
  </div>

</main>


);
}
