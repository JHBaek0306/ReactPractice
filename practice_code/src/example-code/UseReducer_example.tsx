import React, { useReducer } from 'react';

// 계좌 상태 타입 정의
type AccountState = {
    balance: number;
};

// 액션 타입 정의
type AccountAction =
    | { type: 'DEPOSIT'; amount: number }
    | { type: 'WITHDRAW'; amount: number };

// 초기 상태
const initialState: AccountState = {
    balance: 0,
};

// Reducer 함수 정의
function accountReducer(state: AccountState, action: AccountAction): AccountState {
    switch (action.type) {
        case 'DEPOSIT':
            return { balance: state.balance + action.amount };
        case 'WITHDRAW':
            return { balance: state.balance - action.amount };
        default:
            throw new Error('Unhandled action');
    }
}

// 컴포넌트 구현
const UseReducer_example = () => {
    const [state, dispatch] = useReducer(accountReducer, initialState);
    const [amount, setAmount] = React.useState<number>(0);

    const handleDeposit = () => {
        dispatch({ type: 'DEPOSIT', amount });
    };

    const handleWithdraw = () => {
        dispatch({ type: 'WITHDRAW', amount });
    };

    return (
        <div>
            <h1>Bank Account</h1>
            <p>Current Balance: {state.balance}</p>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Enter amount"
                step={100}
            />
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
};

export default UseReducer_example;
