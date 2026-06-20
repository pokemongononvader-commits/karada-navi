import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";

export default function NeckPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">

      <Link
        href="/body-parts"
        className="text-green-700 hover:underline"
      >
        ← 体の部位一覧へ戻る
      </Link>

      <h1 className="text-4xl font-bold text-green-700 mb-6">
        首（頚部）
      </h1>

      <Image
  src="/images/bodyparts/neck.png"
  alt="首"
  width={500}
  height={500}
  className="w-72 mx-auto rounded-3xl shadow-lg"
/>

      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-2xl font-bold text-green-700 mb-4">
          首とは？
        </h2>

        <p className="leading-relaxed">
          首は頭を支え、
          視線を向けたり、
          神経や血管を守る大切な部位です。
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

        <h2 className="text-2xl font-bold text-green-700 mb-4">
          関連する骨
        </h2>

        <ul className="list-disc pl-6">
          <li>頚椎</li>
        </ul>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

        <h2 className="text-2xl font-bold text-green-700 mb-4">
          関連する筋肉
        </h2>

        <ul className="list-disc pl-6">
          <li>僧帽筋</li>
          <li>肩甲挙筋</li>
          <li>胸鎖乳突筋</li>
        </ul>

      </div>

      <div className="bg-green-100 rounded-3xl p-6 mt-6">
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
    {bodyPartLinks.首.motions.map((item) => (
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
    {bodyPartLinks.首.symptoms.map((item) => (
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
    {bodyPartLinks.首.faqs.map((item) => (
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

        <h2 className="text-2xl font-bold text-green-800 mb-4">
          🦴ほねっぴメモ
        </h2>

        <p>
          スマホを見る時間が長いと、
          首に大きな負担がかかります。
          画面はなるべく目線の高さに近づけましょう。
        </p>
<ClinicCTA />
      </div>

    </main>
  );
}