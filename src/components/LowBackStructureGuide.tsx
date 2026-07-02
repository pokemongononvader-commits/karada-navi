import Image from "next/image";
import Icon from "@/components/Icon";

export default function LowBackStructureGuide() {
  return (
    <section className="bg-white rounded-3xl shadow-lg p-6 mt-8">

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-4">
           <Icon
          
                   src="/images/icons/honeppi02-icon.png"
          
                   alt="ほねっぴ"
          
                   size={60}
          
                 />

          <div>
            <h2 className="text-3xl font-bold text-green-800">
              腰の主な症例と原因
            </h2>

            <p className="text-gray-700 mt-2 leading-relaxed">
              腰痛は、日常生活の動き・姿勢・筋肉の働きが
              関係して起こることがあります。
            </p>
          </div>
        </div>

        <div className="bg-green-100 rounded-3xl p-4 flex items-center gap-4">
           <Icon
          
                   src="/images/icons/bonchan02-icon.png"
          
                   alt="ボンちゃん"

           size={60}
          
         />

          <p className="text-green-900 leading-relaxed">
            腰は身体を支える大切な場所だよ。
            図でしくみを見てみよう♪
          </p>
        </div>
      </div>

      <div className="bg-green-50 rounded-3xl p-4 shadow-inner">
        <Image
          src="/images/bodyparts/lowback/lowback-structure-guide.png"
          alt="腰の主な症例と原因 図解"
          width={1200}
          height={1600}
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-green-800">
            ① 急性腰痛（ぎっくり腰）
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            同じ足に体重をかけ続けたり、同じ方向ばかりを向くなど、
            日々の反復動作が積み重なることで起こりやすくなります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            前屈や中腰姿勢が続いた後に急に反対方向へ向くと、
            筋肉の緊張と弛緩のバランスが崩れ、
            筋損傷や炎症につながることがあります。
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-blue-800">
            ② 椎間板ヘルニア
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            腰椎の間にある椎間板が飛び出し、
            神経を圧迫することで強い痛みやしびれが出ることがあります。
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>・体幹の前後屈の反復による慢性的な負担</li>
            <li>・くしゃみなどの瞬間的な負荷</li>
            <li>・重い物を踏ん張って持ち上げる</li>
            <li>・軽い物を油断して持ち上げる</li>
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-orange-800">
            ③ 腸腰筋の働き
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            腸腰筋は、腰から脚の付け根に位置する筋肉で、
            骨盤や背骨を正しい位置に保つ働きがあります。
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>・姿勢を支える</li>
            <li>・骨盤を安定させる</li>
            <li>・脚を持ち上げる</li>
            <li>・歩行やバランスを助ける</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-blue-800">
          🛏 腰痛の時の寝姿勢
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              横向きで寝る場合
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              膝の間にクッションを挟むと、
              骨盤のねじれが少なくなり、腰が楽になることがあります。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              仰向けで寝る場合
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              膝の下にタオルやクッションを入れると、
              腰の反りが軽くなり、負担が減ることがあります。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-red-700">
              避けたい姿勢
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              うつ伏せ寝は腰が反りやすく、
              首もねじれやすいため、腰痛時には負担になることがあります。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-100 rounded-3xl p-5 mt-6 flex flex-col md:flex-row items-center gap-4">
        

        <div>
           <Icon
        
                 src="/images/icons/honeppi-icon.png"
        
                 alt="ほねっぴ"
        
                 size={55}
        
               />
        
               <h6 className="text-4xl font-bold text-green-700 mt-3">
        
                 ほねっぴポイント </h6>

          <p className="mt-2 text-green-900 leading-relaxed">
            腰痛は、生活習慣や姿勢の積み重ねで起こることが多いよ。
            痛みが強い時は無理をせず、楽な姿勢を探すことも大切なんだ♪
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-yellow-800">
          🎬 次は腰の動きアニメーション予定
        </h3>

        <p className="mt-2 text-gray-700 leading-relaxed">
          今後は、前屈・後屈・ひねり動作や、
          腸腰筋と骨盤の関係が分かるアニメーションを追加予定です。
        </p>
      </div>

    </section>
  );
}