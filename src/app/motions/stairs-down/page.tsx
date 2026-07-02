import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Icon from "@/components/Icon"; 
export default function StairsDownPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/motions"
      className="text-green-700 hover:underline"
    >
      ← 動き一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      ⬇️ 階段を下りる
    </h1>

    <p className="mt-4 text-lg text-gray-700">
      階段を下りる動作では、
      体重を支えながらゆっくり身体をコントロールする必要があります。
      特に膝関節への負担が大きく、
      膝痛を感じやすい動作の一つです。
    </p>

    <img
      src="/images/motions/stairs-down/stairs-down-main.png"
      alt="階段を下りる"
      width={1200}
      height={800}
      className="w-72 mx-auto rounded-3xl shadow-lg"
    />

    {/* 関係する関節 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関係する関節
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
            体重移動を支える
          </p>
        </Link>

        <Link
          href="/body-parts/knee"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            膝関節
          </h3>

          <p className="text-sm mt-2">
            衝撃を吸収する
          </p>
        </Link>

        <Link
          href="/body-parts/ankle"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            足関節
          </h3>

          <p className="text-sm mt-2">
            バランスを保つ
          </p>
        </Link>

      </div>

    </section>

    {/* 関係する筋肉 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関係する筋肉
      </h2>

      <ul className="mt-4 space-y-3 text-gray-700">

        <li>● 大腿四頭筋</li>

        <li>● ハムストリングス</li>

        <li>● 大殿筋</li>

        <li>● 中殿筋</li>

        <li>● 前脛骨筋</li>

        <li>● 腓腹筋</li>

      </ul>

    </section>

    {/* 起こりやすい症状 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        起こりやすい症状
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">

        <div className="bg-red-50 rounded-xl p-4">
          膝痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          股関節痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          腰痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          足関節痛
        </div>

      </div>

    </section>

    {/* FAQ */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関連FAQ
      </h2>

      <div className="space-y-3 mt-4">

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 階段を下りる時だけ膝が痛いのはなぜですか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 上るより下りる方が負担は大きいですか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 股関節が硬いと階段がつらくなりますか？
        </div>

      </div>

    </section>

    {/* ほねっぴ */}
    <section className="bg-green-200 rounded-3xl p-6 mt-8">

      <Icon

         src="/images/icons/honeppi-icon.png"

         alt="ほねっぴ"

         size={55}

       />

       <h6 className="text-4xl font-bold text-green-700 mt-3">

         ほねっぴポイント </h6>

      <p className="mt-4 text-green-900 leading-relaxed">
        階段を下りる時は、
        膝が体重を受け止めながらブレーキをかけています。
        痛い場所だけでなく、
        股関節や足首の動きも一緒に見ることが大切です。
      </p>

    </section>
    <ClinicCTA />
  </div>

</main>


);
}
