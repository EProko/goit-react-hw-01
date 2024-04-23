import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.headValue}>Type</th>
          <th className={css.headValue}>Amount</th>
          <th className={css.headValue}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map((item) => (
          <tr className={css.bodyItem} key={item.id}>
            <td className={css.bodyValue}>{item.type}</td>
            <td className={css.bodyValue}>{item.amount}</td>
            <td className={css.bodyValue}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
