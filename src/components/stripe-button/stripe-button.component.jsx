import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hg1HPKlYWb8VjDf1CC8h1Qk51jC7y6gG5htU0oVKwptidXDqa0yoN5xhofDEbcdxuz6VSiwyyP0QbswqkDXetjD00BhYhu6Wp";
  const onToken = (token) => {
    axios({
      url: "http://localhost:5000/payment",
      method: "post",
      data: { amount: priceForStripe, token },
    })
      .then((res) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Their was an issue with your payment. Please make sure you use the provided card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Royal Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
