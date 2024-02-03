
export const getTotals = (cart) => {
    let totalAmount = 0;
    let totalPrice = 0;
    for(let {amount, price} of cart.values()){
        totalAmount += amount;
        totalPrice += price * amount
    }
    return (
    {totalAmount, totalPrice}
    )
}

