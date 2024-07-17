import useCartQueryStore from "../../store/AddToCartStore";

const CartPrint = ({ CartPrintRef }: any) => {
  const { CartItemQuery } = useCartQueryStore();
  const TotalPrice = CartItemQuery.reduce((acc, cur) => {
    return acc + cur.totalPrice;
  }, 0).toFixed(2);
  return (
    <div
      ref={CartPrintRef}
      className="checkout-container absolute hidden bg-white w-full h-screen top-0 left-0 p-5"
    >
      <h1 className="text-xl mb-2">Your orders</h1>
      <table className=" w-full break-all">
        <thead className="border-b-2 border-b-gray-200 ">
          <tr className="bg-gray-100 border">
            <th className="w-1 tracking-wide p-3 font-semibold text-left border-[1px] border-solid border-black">
              No.
            </th>
            <th className="w-32 tracking-wide p-3 font-semibold text-left border-[1px] border-solid border-black">
              Item Name
            </th>
            <th className="w-20 tracking-wide p-3 font-semibold text-left border-[1px] border-solid border-black">
              Price
            </th>
            <th className="w-5 tracking-wide p-3 font-semibold text-left border-[1px] border-solid border-black">
              Quantity
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {CartItemQuery.map((i, index) => (
            <tr key={i.id} className="bg-gray-200">
              <td className="p-3 text-sm text-gray-700 border-[1px] border-solid border-black">
                {index}
              </td>
              <td className="p-3 text-sm text-gray-700 border-[1px] border-solid border-black ">
                {i.title}
              </td>
              <td className="p-3 text-sm text-gray-700 border-[1px] border-solid border-black">
                ${i.price}
              </td>
              <td className="p-3 text-sm text-gray-700 border-[1px] border-solid border-black">
                {i.count}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className=" p-3 text-gray-700 border-l border-b border-black font-bold text-xl">
              Total
            </td>
            <td className="p-3 text-sm text-gray-700 border-y border-black"></td>
            <td className="p-3 text-gray-700 border-y border-l border-black font-bold text-xl">
              {TotalPrice}
            </td>
            <td className="p-3 text-sm text-gray-700 border-y border-r border-black"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartPrint;
