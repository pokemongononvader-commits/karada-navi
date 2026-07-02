import Icon from "@/components/Icon";

export default function KneeStructureGuide() {


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
              膝関節のしくみと動き
            </h2>

            <p className="text-gray-700 mt-2 leading-relaxed">
              膝の骨・筋肉・関節包・関節液の働きを、
              図でわかりやすく見てみましょう。
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
            図を見ると、膝がチームで動いていることが
            分かりやすいよ♪
          </p>
        </div>

      </div>

      <div className="bg-green-50 rounded-3xl p-4 shadow-inner">

        <img
          src="/images/bodyparts/knee/knee-structure-guide.png"
          alt="膝関節のしくみと動き 図解"
          className="w-full h-auto rounded-2xl shadow-lg"
        />

      </div>

      <div className="bg-green-100 rounded-3xl p-5 mt-6 flex flex-col md:flex-row items-center gap-4">

        <Icon
        
                 src="/images/icons/honeppi-icon.png"
        
                 alt="ほねっぴ"
        
                 size={55}
        
               />
        
               <h6 className="text-4xl font-bold text-green-700 mt-3">
        
                 ほねっぴポイント </h6>

        <div>
          

          <p className="mt-2 text-green-900 leading-relaxed">
            膝は、骨・筋肉・関節包・関節液が協力して動いているよ。
            痛みがある時は、膝だけでなく股関節・足首・歩き方も
            一緒に見ることが大切なんだ♪
          </p>
        </div>

      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-5 mt-6">
        <h3 className="text-xl font-bold text-yellow-800">
          🎬 次はアニメーション予定
        </h3>

        <p className="mt-2 text-gray-700 leading-relaxed">
          今後は、膝を曲げる・伸ばす動きや、
          大腿四頭筋・ハムストリングスの働きが分かる
          アニメーションを追加予定です。
        </p>
      </div>

    </section>
  );
}