interface Props {
  items: string[];
}

const Recommendations = ({
  items,
}: Props) => {
  return (
    <div className="rounded-xl bg-slate-900 p-6">

      <h2 className="mb-5 text-2xl font-bold">
        Recommendations
      </h2>

      <ul className="space-y-3">

        {items.map((item, index) => (

          <li key={index}>
            ✅ {item}
          </li>

        ))}

      </ul>

    </div>
  );
};

export default Recommendations;