<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <div class="steps">
      <h2>Delivery</h2>
      <h2>Payment</h2>
      <h2>Summary</h2>
    </div>
    <div class="fill">
      <h3>Fill Delivery Form</h3>
    </div>
    <form>
      <label for="fname">First Name</label>
      <input type="text" name="fname" id="fname" />
      <label for="lname">Last Name</label>
      <input type="text" name="lname" id="lname" />
      <label for="phone">Phone No</label>
      <input type="tel" name="phone" id="phone" />
      <label for="state">State/Province</label>
      <input type="text" name="state" id="state" />
      <label for="postal">Postal Code</label>
      <input type="text" name="postal" id="postal" />
      <label for="address1">Address Line 1</label>
      <input type="text" name="address1" id="address1" />
      <label for="address2">Address Line 2</label>
      <input type="text" name="address2" id="address2" />
    </form>

    <div class="fill">
      <h3>Select a Delivery Option</h3>
    </div>
    <div class="door">
      <input type="radio" name="delivery" id="delivery" />

      <div>
        <h4>Door Delivery</h4>
        <p>Delivered between Tuesday 1 Nov and Wednesday9 Nov</p>
        <h4>Shipping Fee: N1000</h4>
      </div>
    </div>
    <hr />
    <div class="door">
      <input type="radio" name="delivery" id="door" />
      <div>
        <h4>Pickup Station (Cheaper Shipping Fee)</h4>
        <p>Ready for pickup between Tuesday 1 Nov and Wednesday 9 Nov</p>
      </div>
    </div>
    <hr />
    <div class="proceed">
      <select name="pickup" id="pickup">
        <option value="choose">Select Pickup Station</option>
      </select>
    </div>

    <div class="checkout-details">
      <h5>Subtotal :</h5>
      <h5>N{{ $store.state.totalAmount }}</h5>
    </div>
    <div class="checkout-details">
      <h5>Shipping Fee :</h5>
      <h5>N1000</h5>
    </div>
    <hr />
    <div class="checkout-details">
      <h5>Total :</h5>
      <h5>N{{ $store.state.totalAmount + 1000 }}</h5>
    </div>
    <div class="proceed">
      <button>Proceed to Payment</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPage",
};
</script>

<style scoped>
.checkout {
  padding: 50px 100px;
}

.steps {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #81839e;
  padding: 10px 20px;
  font-size: 16px;
  margin-block: 20px;
}

h2 {
  font-weight: 300;
}

.steps h2:nth-child(1) {
  font-weight: 600;
  font-size: 28px;
}

.fill {
  padding: 10px 20px;
  background: #81839e;
}

form {
  padding: 50px;
  display: flex;
  flex-direction: column;
}

label {
  margin-block: 20px;
  font-weight: 600;
}

form input {
  height: 35px;
  width: 60%;
  border: 2px solid white;
  background: transparent;
}

.proceed {
  text-align: center;
  margin-top: 30px;
}

.door {
  padding: 20px;
  font-size: 20px;
  display: flex;
  gap: 20px;
}

.door p {
  margin-block: 5px;
}

.door input {
  /* display: none;
        width: 25px;
        height: 50px;
        background: red; */
  height: 35px;
  width: 20%;
  border: 2px solid white;
  background: transparent;
}

/* .door label {
       
        background: transparent;
        border: 2px solid white;
        border-radius: 50%;
    } */

/* .door input[type="radio"]:checked + .door label {
        background: white;
    } */

hr {
  color: white;
}

.checkout-details {
  display: flex;
  justify-content: space-between;
  padding-inline: 30px;
  align-items: center;
}

select {
  padding: 10px 50px;
  font-size: 18px;
  font-family: Inter;
  border: none;
  outline: none;
  margin-block: 0 20px;
  color: #81839e;
  border-radius: 5px;
}

.checkout-details {
  font-size: 20px;
  margin-block: 20px;
}

button {
  padding: 10px 30px;
  color: white;
  background: #1e1173;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-family: Inter;
  border-radius: 5px;
  font-weight: 600;
}

@media (max-width: 480px) {
  .checkout {
    padding: 20px;
  }

  .steps h2 {
    font-size: 15px;
  }

  form {
    padding: 20px;
  }

  form input {
    width: 100%;
  }

  .door p {
    font-size: 12px;
  }

  .door h4 {
    font-size: 14px;
  }

  .steps h2:nth-child(1) {
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
