"use client";

import { useState } from "react";

export default function FAQClient({ faqs }: { faqs: any[] }) {

  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    JSON.stringify(faq)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-green-800 mb-6">
        FAQ
      </h1>

      <input
        type="text"
        placeholder="キーワード検索（腰・肩・正座など）"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 border rounded-2xl mb-8 shadow"
      />

      {filteredFaqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow p-6 mb-6"
        >
          <h2 className="font-bold text-xl text-green-700">
            Q. {faq.question}
          </h2>

          <p className="mt-3">
            A. {faq.answer}
          </p>

          <div className="mt-4 bg-green-100 p-4 rounded-xl">
            🦴 ほねっぴポイント
            <br />
            {faq.honeppi}
          </div>

          <div className="mt-3 text-sm text-gray-600">
            関連部位：{faq.bodyPart}
          </div>

          <div className="text-sm text-gray-600">
            関連動作：{faq.motion}
          </div>

        </div>
      ))}

    </main>
  );
}