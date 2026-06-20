type Props = {
  params: {
    id: string;
  };
};

export default function BodyPartDetail({ params }: Props) {

  return (

    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-green-800 mb-6">
        {params.id}
      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <p className="text-lg">
          ここに部位の説明が入ります。
        </p>

        <p className="mt-4">
          今後は画像や筋肉・骨・関節の説明、
          関連FAQを表示します。
        </p>

      </div>

    </main>

  );
}