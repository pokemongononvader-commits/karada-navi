import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import Icon from "@/components/Icon"; 
export default function TurnNeckPage() {
return ( <main className="min-h-screen bg-green-50">


  <div className="max-w-5xl mx-auto p-6">

    <Link
      href="/motions"
      className="text-green-700 hover:underline"
    >
      ← 動き一覧へ戻る
    </Link>

    <h1 className="text-4xl font-bold text-green-800 mt-4">
      🔄 首を回す
    </h1>

    <p className="mt-4 text-lg text-gray-700">
      首を回す動作は、頚椎（首の骨）だけでなく、
      肩や背中の筋肉とも協力して行われています。
      首周囲の筋肉が硬くなると、
      振り向きにくさや痛みにつながることがあります。
    </p>

    <img
      src="/images/motions/turn-neck/turn-neck-main.png"
      alt="首を回す"
      width={1200}
      height={800}
      className="w-72 mx-auto rounded-3xl shadow-lg"
    />

    {/* 関係する部位 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        関係する部位
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <Link
          href="/body-parts/neck"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            首
          </h3>

          <p className="text-sm mt-2">
            回旋運動の中心
          </p>
        </Link>

        <Link
          href="/body-parts/shoulder"
          className="bg-green-100 rounded-xl p-4 hover:bg-green-200"
        >
          <h3 className="font-bold text-lg">
            肩
          </h3>

          <p className="text-sm mt-2">
            首の動きを補助
          </p>
        </Link>

        <div className="bg-green-100 rounded-xl p-4">

          <h3 className="font-bold text-lg">
            背中
          </h3>

          <p className="text-sm mt-2">
            姿勢を支える
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

        <li>● 胸鎖乳突筋</li>

        <li>● 僧帽筋</li>

        <li>● 肩甲挙筋</li>

        <li>● 斜角筋</li>

        <li>● 後頭下筋群</li>

      </ul>

    </section>

    {/* 起こりやすい症状 */}
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-green-700">
        起こりやすい症状
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-4">

        <div className="bg-red-50 rounded-xl p-4">
          首痛
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          寝違え
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          肩こり
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          緊張型頭痛
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
          Q. 振り向く時だけ首が痛いのはなぜですか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 首の動きと肩こりは関係がありますか？
        </div>

        <div className="bg-gray-100 rounded-xl p-4">
          Q. 首が硬いと頭痛の原因になりますか？
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
        首を回す動作は首だけでなく、
        肩や背中の筋肉とも連携しています。
        首が痛い時は、肩や姿勢の状態も一緒に確認することが大切です。
      </p>

    </section>
<ClinicCTA />
  </div>

</main>


);
}
