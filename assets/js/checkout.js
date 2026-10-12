/**
 * FLASH TRANSIT - Logique de Paiement et Confirmation
 */

// Met à jour les options de paiement en fonction du pays choisi
function updateCheckoutPaymentUI() {
  const countrySelect = document.getElementById('country-select');
  const container = document.getElementById('payment-methods-container');
  if (!countrySelect || !container) return;

  const selectedCountry = countrySelect.value;
  AppState.country = selectedCountry;
  AppState.currency = CONFIG[selectedCountry].currency;

  if (selectedCountry === 'SN') {
    // Moyen de paiement au SÉNÉGAL
    container.innerHTML = `
      <label class="flex items-center justify-between p-3.5 border border-zinc-200 rounded-xl cursor-pointer hover:border-orange-500 transition bg-zinc-50">
        <div class="flex items-center space-x-3">
          <input type="radio" name="payment" value="Wave Mobile Money" checked class="text-orange-500 focus:ring-orange-500">
          <div>
            <span class="font-bold text-xs text-zinc-900 block">Wave</span>
            <span class="text-[10px] text-zinc-500">Paiement rapide via l'application Wave</span>
          </div>
        </div>
        <span class="text-[10px] bg-sky-100 text-sky-700 font-extrabold px-2 py-0.5 rounded">Sénégal</span>
      </label>

      <label class="flex items-center justify-between p-3.5 border border-zinc-200 rounded-xl cursor-pointer hover:border-orange-500 transition bg-zinc-50">
        <div class="flex items-center space-x-3">
          <input type="radio" name="payment" value="Orange Money Senegal" class="text-orange-500 focus:ring-orange-500">
          <div>
            <span class="font-bold text-xs text-zinc-900 block">Orange Money</span>
            <span class="text-[10px] text-zinc-500">Transfert direct au #144#</span>
          </div>
        </div>
        <span class="text-[10px] bg-orange-100 text-orange-700 font-extrabold px-2 py-0.5 rounded">Sénégal</span>
      </label>
    `;
  } else {
    // Moyen de paiement aux COMORES
    container.innerHTML = `
      <label class="flex items-center justify-between p-3.5 border border-zinc-200 rounded-xl cursor-pointer hover:border-orange-500 transition bg-zinc-50">
        <div class="flex items-center space-x-3">
          <input type="radio" name="payment" value="Mvola / Telma" checked class="text-orange-500 focus:ring-orange-500">
          <div>
            <span class="font-bold text-xs text-zinc-900 block">Mvola (Telma)</span>
            <span class="text-[10px] text-zinc-500">Paiement Mobile aux Comores</span>
          </div>
        </div>
        <span class="text-[10px] bg-emerald-100 text-emerald-700 font-extrabold px-2 py-0.5 rounded">Comores</span>
      </label>

      <label class="flex items-center justify-between p-3.5 border border-zinc-200 rounded-xl cursor-pointer hover:border-orange-500 transition bg-zinc-50">
        <div class="flex items-center space-x-3">
          <input type="radio" name="payment" value="Western Union" class="text-orange-500 focus:ring-orange-500">
          <div>
            <span class="font-bold text-xs text-zinc-900 block">Western Union</span>
            <span class="text-[10px] text-zinc-500">Envoi d'argent international</span>
          </div>
        </div>
        <span class="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-2 py-0.5 rounded">International</span>
      </label>

      <label class="flex items-center justify-between p-3.5 border border-zinc-200 rounded-xl cursor-pointer hover:border-orange-500 transition bg-zinc-50">
        <div class="flex items-center space-x-3">
          <input type="radio" name="payment" value="Ria Money Transfer" class="text-orange-500 focus:ring-orange-500">
          <div>
            <span class="font-bold text-xs text-zinc-900 block">Ria Money Transfer</span>
            <span class="text-[10px] text-zinc-500">Transfert rapide en agence ou en ligne</span>
          </div>
        </div>
        <span class="text-[10px] bg-orange-100 text-orange-800 font-extrabold px-2 py-0.5 rounded">International</span>
      </label>
    `;
  }

  // Mettre à jour le total selon la devise du pays
  let totalXOF = 0;
  let totalKMF = 0;
  AppState.cart.forEach(item => {
    totalXOF += item.priceXOF * item.quantity;
    totalKMF += item.priceKMF * item.quantity;
  });

  const totalEl = document.getElementById('checkout-total');
  if (totalEl) {
    totalEl.textContent = formatPrice(totalXOF, totalKMF);
  }
}

// Traitement de la commande et envoi du récépissé WhatsApp
function processCheckoutOrder(event) {
  event.preventDefault();

  if (!AppState.cart || AppState.cart.length === 0) {
    alert("Votre panier est vide.");
    return;
  }

  const fullname = document.getElementById('fullname')?.value || "Non renseigné";
  const phone = document.getElementById('phone')?.value || "Non renseigné";
  const countrySelect = document.getElementById('country-select')?.value;
  const countryLabel = countrySelect === 'SN' ? 'Sénégal 🇸🇳' : 'Comores 🇰🇲';
  const address = document.getElementById('address')?.value || "Non renseignée";
  const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || "Non précisé";

  let summary = AppState.cart.map(item => `- ${item.name} (x${item.quantity})`).join('\n');
  let totalFormatted = document.getElementById('checkout-total')?.textContent || "";

  let message = `*NOUVELLE COMMANDE - FLASH TRANSIT*\n\n` +
                `👤 *Client :* ${fullname}\n` +
                `📞 *Téléphone :* ${phone}\n` +
                `📍 *Destination :* ${countryLabel}\n` +
                `🏠 *Adresse / Agence :* ${address}\n` +
                `💳 *Mode de Paiement :* ${paymentMethod}\n\n` +
                `📦 *ARTICLES :*\n${summary}\n\n` +
                `💰 *TOTAL :* ${totalFormatted}\n\n` +
                `Merci de me transmettre les instructions pour valider le paiement.`;

  contactWhatsApp(message);

  // Vider le panier
  localStorage.removeItem('ft_cart');
  AppState.cart = [];
  updateCartBadge();
}