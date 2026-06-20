"use client";
import ClinicCTA from "@/components/ClinicCTA";
import Link from "next/link";
import { useState } from "react";

const faqCategories = [
{
title: "急性期",
href: "/faq/acute",
icon: "🧊",
keywords: ["捻挫", "冷やす", "温める", "湿布", "急性"],
},

{
title: "腰",
href: "/faq/lowback",
icon: "🦴",
keywords: ["腰", "腰痛", "コルセット", "ストレッチ"],
},

{
title: "首",
href: "/faq/neck",
icon: "🧠",
keywords: ["首", "寝違え", "枕", "スマホ"],
},

{
title: "肩",
href: "/faq/shoulder",
icon: "💪",
keywords: ["肩", "四十肩", "五十肩", "腕"],
},

{
title: "膝",
href: "/faq/knee",
icon: "🦵",
keywords: ["膝", "正座", "階段", "歩行"],
},

{
title: "足首",
href: "/faq/ankle",
icon: "🦶",
keywords: ["足首", "捻挫", "サポーター", "テーピング"],
},
];

export default function FAQPage() {

const [search, setSearch] = useState("");

const filteredFaq = faqCategories.filter((item) => {


const text =
  item.title +
  item.keywords.join("");

return text.includes(search);


});

return ( <main className="min-h-screen bg-green-50">


  <header className="bg-green-300 shadow p-6">

    <h1 className="text-4xl font-bold text-center text-green-900">
      ❓ FAQ よくある質問
    </h1>

    <p className="text-center text-green-800 mt-2">
      気になる内容を探してみましょう
    </p>

  </header>

  <div className="max-w-5xl mx-auto p-6">
    <Link
  href="/"
  className="inline-block mb-6 text-green-700 font-bold"
>
  ← トップページへ戻る
</Link>

    <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

      <input
        type="text"
        placeholder="例：腰痛、階段、正座、捻挫..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border-2 border-green-300 rounded-2xl p-4 text-lg"
      />

    </div>

    <div className="grid md:grid-cols-2 gap-6">

      {filteredFaq.map((faq) => (

        <Link
          key={faq.href}
          href={faq.href}
          className="bg-white rounded-3xl shadow-lg p-6 hover:bg-green-100 transition"
        >

          <div className="text-5xl text-center">
            {faq.icon}
          </div>

          <h2 className="text-2xl font-bold text-center mt-4 text-green-800">
            {faq.title}
          </h2>

          <p className="text-center text-gray-600 mt-3">
            {faq.keywords.join(" ・ ")}
          </p>

        </Link>

      ))}

    </div>

    <div className="bg-green-200 rounded-3xl p-6 mt-10 shadow">

      <h3 className="text-2xl font-bold text-green-900 mb-3">
        🦴 ボンちゃんからひとこと
      </h3>

      <p className="text-green-900 leading-relaxed">
        「腰が痛い」「膝が痛い」だけじゃなく、
        「階段がつらい」「正座できない」など、
        気になる言葉で検索してみてね♪
      </p>

    </div>
<ClinicCTA />
  </div>

</main>


);
}
