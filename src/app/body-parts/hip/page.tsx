import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Image from "next/image";
import { bodyPartLinks } from "@/data/bodyPartNavigation";
import HipStructureGuide from "@/components/HipStructureGuide";
import HipMotionAnimation from "@/components/HipMotionAnimation";

export default function HipPage() {
  return (
    <main className="min-h-screen bg-green-50">
      <div className="max-w-5xl mx-auto p-6">

        <Link
          href="/body-parts"
          className="inline-block mb-6 text-green-700 font-bold"
        >
          ← 部位一覧へ戻る
        </Link>

        <section className="bg-white rounded-3xl shadow-lg p-6">

          <h1 className="text-4xl font-bold text-green-800 mb-6">
            股関節（こかんせつ）
          </h1>

          <Image
            src="/images/bodyparts/hip.png"
            alt="股関節"
            width={500}
            height={500}
            className="w-72 mx-auto rounded-3xl shadow-lg"
          />

          <HipStructureGuide />

<div className="grid md:grid-cols-2 gap-6">

<HipMotionAnimation motion="flexion" />
<HipMotionAnimation motion="extension" />
<HipMotionAnimation motion="abduction" />
<HipMotionAnimation motion="adduction" />
<HipMotionAnimation motion="external-rotation" />
<HipMotionAnimation motion="internal-rotation" />

</div>

    <section className="bg-green-50 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-700">
              股関節とは？
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              股関節は、骨盤と太ももの骨（大腿骨）をつなぐ大切な関節です。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              歩く・立つ・座る・階段を上るなど、
              日常生活の多くの動作で使われています。
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              股関節の動きが悪くなると、
              腰や膝にも負担がかかることがあります。
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white border border-green-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-green-700">
                主な役割
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>歩行</li>
                <li>階段昇降</li>
                <li>立ち上がり</li>
                <li>しゃがみ込み</li>
                <li>足を上げる</li>
                <li>骨盤を安定させる</li>
              </ul>
            </div>

            <div className="bg-white border border-red-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700">
                よくある症状
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>足の付け根が痛い</li>
                <li>歩くと股関節が痛い</li>
                <li>足が上がりにくい</li>
                <li>つまずきやすい</li>
                <li>腰が反りやすい</li>
                <li>膝にも痛みが出る</li>
              </ul>
            </div>

            <div className="bg-white border border-blue-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-700">
                関連する筋肉
              </h2>

              <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
                <li>腸腰筋</li>
                <li>中殿筋</li>
                <li>大殿筋</li>
                <li>内転筋群</li>
                <li>大腿四頭筋</li>
                <li>ハムストリングス</li>
              </ul>
            </div>

          </section>

          <section className="bg-blue-50 rounded-3xl p-6 mt-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800">
              関連する骨・関節
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-bold text-blue-700">
                  関連する骨
                </h3>
                <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
                  <li>骨盤</li>
                  <li>大腿骨</li>
                  <li>仙骨</li>
                  <li>腰椎</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-blue-700">
                  関連する関節
                </h3>
                <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
                  <li>股関節</li>
                  <li>仙腸関節</li>
                  <li>膝関節</li>
                  <li>腰椎椎間関節</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-green-100 rounded-3xl p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-800">
              🦴 ボンちゃんポイント
            </h2>

            <p className="mt-4 text-green-900 leading-relaxed">
              股関節は、腰や膝と深く関係しています。
              つま先の向きや足裏の着き方が乱れると、
              股関節だけでなく腰や膝にも負担がかかることがあります。
            </p>

            <p className="mt-3 text-green-900 leading-relaxed">
              歩く時は、足元ばかり見ずに目線を7〜8m前へ向け、
              少しお腹に力を入れて、股関節と膝をしっかり使うことが大切です。
            </p>
          </section>

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

        </section>

        <ClinicCTA />

      </div>
    </main>
  );
}
