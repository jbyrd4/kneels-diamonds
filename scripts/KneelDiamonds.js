import { DiamondSizes } from "./DiamondSizes.js";
import { JewelryStyles } from "./JewelryStyles.js";
import { Metals } from "./Metals.js";
import { Orders } from "./Orders.js";
import { addCustomOrder } from "./database.js";
import { JewelryType } from "./JewleryType.js";

export const KneelDiamonds = () => {
  return `
    <h1>Kneel Diamonds</h1>
    
    <article style="display:flex" class="choices">
        <section class="choices__metals options">
            <h2>Metals</h2>
            ${Metals()}
        </section>
        <section class="choices__sizes options">
            <h2>Sizes</h2>
            ${DiamondSizes()}
        </section>
        <section class="choices__styles options">
            <h2>Styles</h2>
            ${JewelryStyles()}
        </section>
    </article>
    <section>
        <article>
        <br>
            ${JewelryType()}
        </article>
    </section>
    <article>
    <button id="orderButton">Create Custom Order</button>
    </article>
    
    <article class="customOrders">
    <h2>Custom Jewelry Orders</h2>
    ${Orders()}
    </article>
    `;
};

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    addCustomOrder();
  }
});
