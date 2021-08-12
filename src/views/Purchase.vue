<template>
  <div>
    Step 5: Checkout

    <form id="payment-form">
      <div id="card-container"></div>
      <button id="card-button" type="button">Pay $1.00</button>
    </form>
    <div id="payment-status-container"></div>
  </div>
</template>

<script>
export default {
  name: "Purchase",
  components: {},
};
const appId = "sandbox-sq0idb-pQwx1Qsl06yTrVNGGqWjdg";
const locationId = "LEGGMZBM3774X";

async function initializeCard(payments) {
  const card = await payments.card();
  await card.attach("#card-container");

  return card;
}

async function createPayment(token) {
  const body = JSON.stringify({
    locationId,
    sourceId: token,
  });

  const paymentResponse = await fetch("/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  if (paymentResponse.ok) {
    return paymentResponse.json();
  }

  const errorBody = await paymentResponse.text();
  throw new Error(errorBody);
}

async function tokenize(paymentMethod) {
  const tokenResult = await paymentMethod.tokenize();
  if (tokenResult.status === "OK") {
    return tokenResult.token;
  } else {
    let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
    if (tokenResult.errors) {
      errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
    }

    throw new Error(errorMessage);
  }
}

// status is either SUCCESS or FAILURE;
function displayPaymentResults(status) {
  const statusContainer = document.getElementById("payment-status-container");
  if (status === "SUCCESS") {
    statusContainer.classList.remove("is-failure");
    statusContainer.classList.add("is-success");
  } else {
    statusContainer.classList.remove("is-success");
    statusContainer.classList.add("is-failure");
  }

  statusContainer.style.visibility = "visible";
}

document.addEventListener("DOMContentLoaded", async function () {
  if (!window.Square) {
    throw new Error("Square.js failed to load properly");
  }

  let payments;
  try {
    payments = window.Square.payments(appId, locationId);
  } catch {
    const statusContainer = document.getElementById("payment-status-container");
    statusContainer.className = "missing-credentials";
    statusContainer.style.visibility = "visible";
    return;
  }

  let card;
  try {
    card = await initializeCard(payments);
  } catch (e) {
    console.error("Initializing Card failed", e);
    return;
  }

  // Checkpoint 2.
  async function handlePaymentMethodSubmission(event, paymentMethod) {
    event.preventDefault();

    try {
      // disable the submit button as we await tokenization and make a payment request.
      cardButton.disabled = true;
      const token = await tokenize(paymentMethod);
      const paymentResults = await createPayment(token);
      displayPaymentResults("SUCCESS");

      console.debug("Payment Success", paymentResults);
    } catch (e) {
      cardButton.disabled = false;
      displayPaymentResults("FAILURE");
      console.error(e.message);
    }
  }

  const cardButton = document.getElementById("card-button");
  cardButton.addEventListener("click", async function (event) {
    await handlePaymentMethodSubmission(event, card);
  });
});
</script>

<style scoped>
.cardBig {
  @apply shadow-md rounded-lg md:w-1/2;
  background: #f8f0e3;
}

.card {
  @apply shadow-md rounded-lg md:w-1/2;
  min-height: 16rem;
  background: #f8f0e3;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

/* Style table headers and table data */
th,
td {
  text-align: center;
  padding: 16px;
}

th:first-child,
td:first-child {
  text-align: left;
}

/* Zebra-striped table rows */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

.fa-check {
  color: green;
}

.fa-remove {
  color: red;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "first second third"
    "fourth fifth six"
    "test total totalAmt";
  grid-gap: 10px;
  padding: 10px;
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
