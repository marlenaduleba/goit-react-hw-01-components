import PropTypes from "prop-types";
import css from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
return (
    <table className={css.transactionHistory}>
  <thead className={css.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tbody}>
{
    items.map(({id, type, amount, currency}) => {
        return (
             <tr key={id} className={css.trow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
        )
    })
}
  </tbody>
</table>
)

};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired).isRequired,
};

export default TransactionHistory;