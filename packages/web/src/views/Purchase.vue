<script>
import Dropdown from 'primevue/dropdown'

export default {
  name: 'Purchase',
  components: {
    Dropdown
  },
  data() {
    return {
      zipCode: '',
      measurements: [
        { name: 'mili-meters' },
        { name: 'centi-meters' },
        { name: 'inches' },
        { name: 'meters' }
      ],
      selectedMeasurement: '',
      deliveryCheckbox1: '',
      deliveryCheckbox2: '',
      DiyCheckbox1: '',
      DiyCheckbox2: '',
      KITCheckbox1: '',
      KITCheckbox2: '',
      step1: false,
      step2: '',
      step3: '',
      step4: '',
      step5: '',

      picked: '',
      picked2: '',
      picked3: '',
      connectorCount: '150',
      edges: '150',
      KITprice: 0,
      DIYprice: 0,
      Total: 0
    }
  },
  computed: {
    computedStep3() {
      if (this.picked || this.picked2 || this.picked3) {
        return true
      } else return false
    },
    computedStep4() {
      if (this.deliveryCheckbox1 && this.deliveryCheckbox2 && this.zipCode) {
        return true
      } else return false
    },

    watchFile() {
      const element = document.getElementById('fileinput')
      if (element === {}) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.step1 = true
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      } else this.step1 = false
      return this.step1
    }
  },
  methods: {
    watchFileMethod() {
      const element = document.getElementById('fileinput')
      if (element) {
        return (this.step1 = true)
      } else this.step1 = false
    }
  }
}
const appId = 'sq0idp-zsQ21xpYek-OegO_6HzZ7w'
const locationId = '34K94YVJ90B5S'

async function initializeCard(payments) {
  const card = await payments.card()
  await card.attach('#card-container')
  return card
}

// Call this function to send a payment token, buyer name, and other details
// to the project server code so that a payment can be created with
// Payments API
async function createPayment(token) {
  const body = JSON.stringify({
    locationId,
    sourceId: token
  })
  const paymentResponse = await fetch('/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
  if (paymentResponse.ok) {
    return paymentResponse.json()
  }
  const errorBody = await paymentResponse.text()
  throw new Error(errorBody)
}

// This function tokenizes a payment method.
// The ‘error’ thrown from this async function denotes a failed tokenization,
// which is due to buyer error (such as an expired card). It is up to the
// developer to handle the error and provide the buyer the chance to fix
// their mistakes.
async function tokenize(paymentMethod) {
  const tokenResult = await paymentMethod.tokenize()
  if (tokenResult.status === 'OK') {
    return tokenResult.token
  } else {
    let errorMessage = `Tokenization failed-status: ${tokenResult.status}`
    if (tokenResult.errors) {
      errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`
    }
    throw new Error(errorMessage)
  }
}

// Helper method for displaying the Payment Status on the screen.
// status is either SUCCESS or FAILURE;
function displayPaymentResults(status) {
  const statusContainer = document.getElementById('payment-status-container')
  if (status === 'SUCCESS') {
    statusContainer.classList.remove('is-failure')
    statusContainer.classList.add('is-success')
  } else {
    statusContainer.classList.remove('is-success')
    statusContainer.classList.add('is-failure')
  }

  statusContainer.style.visibility = 'visible'
}

document.addEventListener('DOMContentLoaded', async () => {
  if (!window.Square) {
    throw new Error('Square.js failed to load properly')
  }
  const payments = window.Square.payments(appId, locationId)
  let card
  try {
    card = await initializeCard(payments)
  } catch (e) {
    console.error('Initializing Card failed', e)
    return
  }

  async function handlePaymentMethodSubmission(event, paymentMethod) {
    event.preventDefault()

    try {
      // disable the submit button as we await tokenization and make a
      // payment request.
      cardButton.disabled = true
      const token = await tokenize(paymentMethod)
      const paymentResults = await createPayment(token)
      displayPaymentResults('SUCCESS')

      console.debug('Payment Success', paymentResults)
    } catch (e) {
      cardButton.disabled = false
      displayPaymentResults('FAILURE')
      console.error(e.message)
    }
  }

  const cardButton = document.getElementById('card-button')
  cardButton.addEventListener('click', async (event) => {
    await handlePaymentMethodSubmission(event, card)
  })
})
</script>

<template>
  <div style="width: 100vw; height: 100vh" class="mt-24">
    <div class="md:text-8xl font-bold text-black">Its time... Lets go BIG</div>
    <div class="flex items-center flex-col">
      <div id="step1" class="card mt-6">
        <div>Step 1: upload a low poly image</div>

        <div>
          This will generate {{ connectorPieces }} 3D printed connectors
        </div>
        <div>
          you can save $$$ by simplifying the model so it will generate less
          connectors
        </div>
        <input
          id="fileinput"
          type="file"
          name="upload"
          @change="watchFileMethod"
        />
      </div>
      <div id="step2" :class="step1 ? '' : 'disabled'" class="card mt-6">
        <div>Step 2: Tell us the longest dimension in your model</div>
        <div class="flex justify-evenly">
          <input v-model="step2" type="text" placeholder="size" />
          <Dropdown
            v-model="selectedMeasurement"
            :options="measurements"
            option-label="name"
            placeholder="Select a Measurement"
          />
        </div>
      </div>
      <div
        id="step3"
        :class="step2 && selectedMeasurement ? '' : 'disabled'"
        class="mt-6 cardBig"
      >
        Step 3: Choose your connector style
        <div class="flex-col flex p-4 justify-evenly">
          <table class="">
            <tr>
              <th>Sizes</th>
              <th>Square Wood Dowels</th>
              <th>Round PVC tubing</th>
            </tr>
            <tr>
              <td><span style="color: dodgerblue">recommended</span> 3/4"</td>
              <td>
                <input id="34" v-model="picked" type="radio" value="one" />
                <label for="34">.25 cents per ft.</label>
              </td>
              <td>
                <input id="342nd" v-model="picked" type="radio" value="two" />
                <label for="342nd">.19 cents pr ft.</label>
              </td>
            </tr>
            <tr>
              <td>1/2"</td>
              <td>
                <input id="12" v-model="picked" type="radio" value="three" />
                <label for="12">.17 cents per ft.</label>
              </td>
              <td>
                <input id="122nd" v-model="picked" type="radio" value="four" />
                <label for="122nd">.13 cents pr ft.</label>
              </td>
            </tr>
            <tr>
              <td>1/4"</td>
              <td>
                <input id="14" v-model="picked" type="radio" value="five" />
                <label for="14">.04 cents pr ft.</label>
              </td>
              <td>
                <div v-if="false">
                  <input id="142nd" v-model="picked" type="radio" value="six" />
                  <label for="142nd" />
                </div>
              </td>
            </tr>
          </table>
          <div class="flex flex-col">
            <div class="flex justify-evenly items-center">
              <div>Connectors:</div>
              <div class="mr-2 ml-2">{{ connectorCount }}</div>
              <div><img src="../../public/connectors.png" /></div>
            </div>
            <div class="flex justify-evenly items-center">
              <div>Edges:</div>
              <div>{{ edges }}</div>
              <div><img src="../../public/edges.png" /></div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="step4"
        :class="computedStep3 ? '' : 'disabled'"
        class="card mt-6"
      >
        Step 4: Choose delivery option

        <div class="grid-container">
          <div class="first">
            <div class="flex flex-col">
              <div class="font-bold text-2xl">DIY</div>
              <div>Digital Delivery</div>
            </div>
          </div>
          <div class="second">
            <div class="flex flex-col items-start">
              <div>
                <input
                  id="deliveryOption1"
                  v-model="deliveryCheckbox1"
                  type="radio"
                  value="d1"
                />
                I want to print the connectors myself (25 cents per .STL file)
              </div>
              <div>
                <input
                  id="deliveryOption2"
                  v-model="deliveryCheckbox2"
                  type="radio"
                  value="d2"
                />
                I will cut the edges myself (free delivery of detailed cut
                sheet)
              </div>
            </div>
          </div>
          <div class="third">
            <div v-if="DIYprice">${{ DIYprice }}</div>
            <div v-else>$0.00</div>
          </div>
          <div class="fourth">
            <div class="flex flex-col">
              <div class="font-bold text-2xl">KIT</div>
              <div>Shipped to your door</div>
            </div>
          </div>
          <div class="fifth">
            <div class="flex flex-col items-start">
              <div>
                <input
                  id="deliveryOption3"
                  v-model="deliveryCheckbox1"
                  type="radio"
                  value="d3"
                />

                Send my prints to my favorite print farm and have them ship to
                me ($2.12 per connector)
              </div>
              <div>
                <input
                  id="deliveryOption4"
                  v-model="deliveryCheckbox2"
                  type="radio"
                  value="d4"
                />
                Cut, label, and package edges (25 cents per foot)
              </div>
            </div>
          </div>
          <div class="six">
            <div v-if="KITprice">${{ KITprice }}</div>
            <div v-else>$0.00</div>
          </div>
          <div class="test">
            <input v-model="zipCode" type="input" placeholder="zip code" />
            <div>Shipping and handling</div>
          </div>
          <div class="total">
            <div>
              <div>Total</div>
            </div>
          </div>
          <div class="totalAmt flex flex-col">
            <div>
              <hr style="border-color: black" />
            </div>
            <div v-if="Total">${{ Total }}</div>

            <div v-else>$0.00</div>
          </div>
        </div>
        <div />
      </div>

      <div id="step5" class="card m-6" :class="computedStep4 ? '' : 'disabled'">
        Step 5: Checkout

        <form id="payment-form">
          <div id="card-container" />
          <button id="card-button" type="button">Pay $1.00</button>
        </form>
        <div id="payment-status-container" />
      </div>
    </div>
  </div>
</template>

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
    'first second third'
    'fourth fifth six'
    'test total totalAmt';
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
