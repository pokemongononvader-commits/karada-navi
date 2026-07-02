import Image from "next/image";
import Icon from "@/components/Icon";

export default function HipStructureGuide() {
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
              股関節のしくみと痛みの原因・対処法
            </h2>

            <p className="text-gray-700 mt-2 leading-relaxed">
              股関節は、歩く・立つ・座る動作に深く関わる大切な関節です。
              歩き方やつま先の向きも、痛みに関係することがあります。
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
            股関節は腰や膝ともつながっているよ。
            図でしくみを見てみよう♪
          </p>
        </div>
      </div>

      <div className="bg-green-50 rounded-3xl p-4 shadow-inner">
        <Image
          src="/images/bodyparts/hip/hip-structure-guide.png"
          alt="股関節のしくみと痛みの原因・対処法 図解"
          width={1200}
          height={1800}
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-green-800">
            ① 股関節捻挫
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            つま先の向きや体重の乗り方のくせにより、
            股関節まわりの筋肉や靭帯に負担がかかり、
            ねじれた状態で痛みが出ることがあります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            股関節と膝関節がまっすぐに屈伸し、
            足裏が前後左右に平らに着くことで、
            股関節への負担は少なくなります。
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-blue-800">
            ② つま先の向き
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            つま先が内側に入ると小指側に体重が乗り、
            股関節の外側の筋肉が伸ばされ、ねじれた状態になりやすくなります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            つま先が外側を向くと親指側に体重が乗り、
            股関節の内側の筋肉が伸ばされ、負担がかかりやすくなります。
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-orange-800">
            ③ 足を上げずに歩くと
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            股関節や膝をしっかり曲げ伸ばしせず、
            まっすぐのまま足を出すと、
            地面に接した時の力が股関節へ直接伝わりやすくなります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            そのため痛みが出やすくなったり、
            回復が遅くなることがあります。
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-yellow-800">
            ④ 腸腰筋の働き
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            腸腰筋は、背骨・骨盤・股関節をつなぐ重要な筋肉です。
            姿勢をまっすぐに保ち、脚を持ち上げる働きがあります。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            固くなると縮んだ状態になり、
            骨盤が前に引っ張られ、
            股関節の可動域が狭くなることがあります。
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-3xl p-5">
          <h3 className="text-xl font-bold text-purple-800">
            ⑤ 中殿筋の働き
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            中殿筋は、骨盤の外側から大腿骨の付け根についている筋肉です。
            骨盤を安定させ、歩く時のバランスに関係します。
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            緊張して収縮がうまくできないと、
            姿勢の崩れや骨盤の不安定さにつながることがあります。
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-blue-800">
          🚶 理想的な歩き方の練習
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              STEP 1
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              まずは太ももを上げるように足踏みをします。
              股関節と膝をしっかり使う感覚をつかみましょう。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              STEP 2
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              足裏の前後左右をベタっと着け、
              土踏まずで地面を踏む感覚を意識します。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              STEP 3
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              少しお腹に力を入れると骨盤が安定し、
              背筋が自然に伸びて歩きやすくなります。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-green-800">
              STEP 4
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              目線は足元ではなく7〜8m前を見るようにします。
              胸を軽く開くと股関節も使いやすくなります。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm md:col-span-2">
            <h4 className="font-bold text-green-800">
              STEP 5
            </h4>
            <p className="mt-2 text-gray-700 leading-relaxed">
              ここまでできたら、歩幅を少し広くして歩いてみましょう。
              かかとから着く場合は、歩幅を80〜100cm位にすると、
              膝への負担を減らしやすくなります。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-red-700">
          ⚠ 注意したい歩き方
        </h3>

        <p className="mt-3 text-gray-700 leading-relaxed">
          歩幅が狭い状態でかかとから着いて歩くと、
          膝が伸びすぎる「過伸展」が起こりやすく、
          膝を痛める原因になることがあります。
        </p>

        <p className="mt-3 text-gray-700 leading-relaxed">
          かかとから着くことだけを意識するのではなく、
          股関節と膝をしっかり使い、
          歩幅や目線も一緒に整えることが大切です。
        </p>
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
            歩く時は、つま先の向き・足裏の着き方・目線が大切だよ。
            少しお腹に力を入れて、股関節と膝をしっかり使うと、
            腰や膝への負担も減りやすいんだ♪
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-yellow-800">
          🎬 次は股関節の動きアニメーション予定
        </h3>

        <p className="mt-2 text-gray-700 leading-relaxed">
          今後は、股関節の屈伸・歩行時の足の上げ方・
          腸腰筋や中殿筋の働きが分かるアニメーションを追加予定です。
        </p>
      </div>

    </section>
  );
}