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
  methods: {
    watchFileMethod() {
      const element = document.getElementById("fileinput");
      if (element) {
        return (this.step1 = true);
      } else this.step1 = false;
    },
  },
  computed: {
    computedStep3() {
      if (this.picked || this.picked2 || this.picked3) {
        return true;
      } else return false;
    },
    computedStep4() {
      if (this.deliveryCheckbox1 && this.deliveryCheckbox2 && this.zipCode) {
        return true;
      } else return false;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    watchFile() {
      const element = document.getElementById("fileinput");
      if (element === {}) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.step1 = true;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      } else this.step1 = false;
      return this.step1;
    },
  },
  data() {
    return {
      zipCode: "",
      measurements: [
        { name: "mili-meters" },
        { name: "centi-meters" },
        { name: "inches" },
        { name: "meters" },
      ],
      selectedMeasurement: "",
      deliveryCheckbox1: "",
      deliveryCheckbox2: "",
      DiyCheckbox1: "",
      DiyCheckbox2: "",
      KITCheckbox1: "",
      KITCheckbox2: "",
      step1: false,
      step2: "",
      step3: "",
      step4: "",
      step5: "",

      picked: "",
      picked2: "",
      picked3: "",
      connectorCount: "150",
      edges: "150",
      KITprice: 0,
      DIYprice: 0,
      Total: 0,
    };
  },
};
const appId = "sandbox-sq0idb-pQwx1Qsl06yTrVNGGqWjdg";
const locationId = "LEGGMZBM3774X";

async function initializeCard(payments) {
  const card = await payments.card();
  await card.attach("#card-container");
  return card;
}

// Call this function to send a payment token, buyer name, and other details
// to the project server code so that a payment can be created with
// Payments API
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

// This function tokenizes a payment method.
// The ‘error’ thrown from this async function denotes a failed tokenization,
// which is due to buyer error (such as an expired card). It is up to the
// developer to handle the error and provide the buyer the chance to fix
// their mistakes.
async function tokenize(paymentMethod) {
  const tokenResult = await paymentMethod.tokenize();
  if (tokenResult.status === "OK") {
    return tokenResult.token;
  } else {
    let errorMessage = `Tokenization failed-status: ${tokenResult.status}`;
    if (tokenResult.errors) {
      errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
    }
    throw new Error(errorMessage);
  }
}

// Helper method for displaying the Payment Status on the screen.
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
  const payments = window.Square.payments(appId, locationId);
  let card;
  try {
    card = await initializeCard(payments);
  } catch (e) {
    console.error("Initializing Card failed", e);
    return;
  }

  async function handlePaymentMethodSubmission(event, paymentMethod) {
    event.preventDefault();

    try {
      // disable the submit button as we await tokenization and make a
      // payment request.
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
