import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function RaiseArmPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/motions"
      className="text-green-700 hover:underline"
    >
      ← 動き一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      🙋 腕を上げる
    </h1>

    <p className="mt-4 text-lg text-gray-700">
      腕を上げる動作は肩関節だけで行われているわけではありません。
      肩甲骨や背骨も協力して動いています。
      この連携がうまくいかなくなると肩の痛みにつながることがあります。
    </p>

    <img
      src="/images/motions/raise-arm/raise-arm-main.png"
      alt="腕を上げる"
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
          href="/body-parts/shoulder"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            肩関節
          </h3>

          <p className="text-sm mt-2">
            腕を持ち上げる
          </p>
        </Link>

        <Link
          href="/body-parts/neck"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            首
          </h3>

          <p className="text-sm mt-2">
            姿勢を安定させる
          </p>
        </Link>

        <div className="bg-green-100 rounded-xl p-4">

          <h3 className="font-bold text-lg">
            肩甲骨
          </h3>

          <p className="text-sm mt-2">
            腕の動きを補助する
          </p>

        </div>

      </div>

    </section>

    {/* 関係する筋肉 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関係する筋肉
      </h2>

      <ul className="mt-4 space-y-3 text-gray-700">

        <li>● 三角筋</li>

        <li>● 棘上筋</li>

        <li>● 僧帽筋</li>

        <li>● 前鋸筋</li>

        <li>● 肩甲挙筋</li>

      </ul>

    </section>

    {/* 起こりやすい症状 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        起こりやすい症状
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">

        <div className="bg-red-50 rounded-xl p-4">
          四十肩・五十肩
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          肩痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          インピンジメント症候群
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          首痛
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
          Q. 腕が途中までしか上がらないのはなぜですか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 肩甲骨が硬いと肩は上がりにくくなりますか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 肩だけでなく首も関係していますか？
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
        腕を上げる時は肩関節だけでなく、
        肩甲骨も一緒に動いています。
        肩が痛い時は肩だけを見るのではなく、
        首や肩甲骨の動きも確認することが大切です。
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
