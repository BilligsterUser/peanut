import { useSelector } from 'react-redux';

const useBalance = () => {
  const proofs = useSelector((state) => state.proof.proofs);
  const amount = proofs.reduce((a, c) => a + c.amount, 0);
  return amount;
};

export default useBalance;
