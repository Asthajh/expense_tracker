import React , {useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../Context/Globalstate';
export const Transactionlist = () => {
    const { transactions} = useContext(GlobalContext);

    return (
        <>
        <h3> History</h3>
        <ul  className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction=
                {transaction}
            />))}
        </ul>
          
        </>
    )
}