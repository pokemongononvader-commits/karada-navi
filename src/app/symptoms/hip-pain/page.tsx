import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { symptomLinks } from "@/data/symptomNavigation";
import Icon from "@/components/Icon";

export default function HipPainPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/symptoms"
      className="text-green-700 hover:underline"
    >
      ← 症状一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      🦴 股関節痛
    </h1>

    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      股関節の痛みは、股関節そのものだけでなく、
      腰・骨盤・膝・歩き方などが関係して起こることがあります。
      立つ・歩く・階段を上るなど、日常動作とのつながりを見ることが大切です。
    </p>

    <img
      src="/images/symptoms/hip-pain.png"
      alt="股関節痛"
      className="w-72 mx-auto rounded-3xl shadow-lg mt-8"
    />

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-800 mb-4">
        🧭 からだナビ関連リンク
      </h2>

      <div className="space-y-4">

        <div>
          <h3 className="font-bold text-green-700">
            🦴 関連部位
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {symptomLinks.股関節痛.bodyParts.map((item) => (
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

        <div>
          <h3 className="font-bold text-blue-700">
            🚶 関連動作
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {symptomLinks.股関節痛.motions.map((item) => (
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
            ❓ 関連FAQ
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {symptomLinks.股関節痛.faqs.map((item) => (
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

      </div>

    </section>

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        股関節痛で関係しやすい部位
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/body-parts/hip"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            股関節
          </h3>

          <p className="text-sm mt-2">
            股関節痛の中心となる部位です。
          </p>
        </Link>

        <Link
          href="/body-parts/lowback"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            腰
          </h3>

          <p className="text-sm mt-2">
            股関節の動きと腰は関係しやすいです。
          </p>
        </Link>

        <Link
          href="/body-parts/knee"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            膝
          </h3>

          <p className="text-sm mt-2">
            下肢全体のバランスに関係します。
          </p>
        </Link>

      </div>

    </section>

    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        股関節痛と関係しやすい動き
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/motions/walk"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          歩行
        </Link>

        <Link
          href="/motions/stairs-up"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          階段を上る
        </Link>

        <Link
          href="/motions/seiza"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          正座
        </Link>

        <Link
          href="/faq/lowback"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          腰痛FAQ
        </Link>

        <Link
          href="/faq/knee"
          className="bg-blue-100 rounded-xl p-4 hover:bg-blue-200"
        >
          膝FAQ
        </Link>

      </div>

    </section>

    <section className="bg-green-200 rounded-3xl p-6 mt-8">

      <Icon
      
               src="/images/icons/honeppi-icon.png"
      
               alt="ほねっぴ"
      
               size={55}
      
             />
      
             <h6 className="text-4xl font-bold text-green-700 mt-3">
      
               ほねっぴポイント </h6>

      <p className="mt-4 text-green-900 leading-relaxed">
        股関節は、腰や膝と一緒に動く大切な場所だよ。
        歩く時や階段を上る時の動きも見ながら、
        身体全体のバランスを考えていこう♪
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
