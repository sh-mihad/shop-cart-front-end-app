import CartCard from "./CartCard";

export default function CartList({cartProducts}) {
    return (
        <>
           {
            cartProducts.map(cartItem=><CartCard key={cartItem.id} cartItem={cartItem}/>)
           }
        </>
    )
}
