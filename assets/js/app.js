/**
 * FLASH TRANSIT - Logique Principale
 */

const COMPANY_WHATSAPP_NUMBER = "221770927265";
const COMPANY_EMAIL = "zhardinebenhoussame@gmail.com";

const AppState = {
  country: localStorage.getItem('ft_country') || 'SN',
  currency: localStorage.getItem('ft_currency') || 'XOF',
  cart: JSON.parse(localStorage.getItem('ft_cart')) || []
};

const CONFIG = {
  SN: { name: "Sénégal", flag: "🇸🇳", currency: "XOF", symbol: "FCFA" },
  KM: { name: "Comores", flag: "🇰🇲", currency: "KMF", symbol: "KMF" }
};

function contactWhatsApp(customText) {
  const message = customText || "Bonjour Flash Transit, je souhaite avoir des informations.";
  const url = `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function switchDestinationCountry(countryCode) {
  if (!CONFIG[countryCode]) return;
  
  AppState.country = countryCode;
  AppState.currency = CONFIG[countryCode].currency;
  
  localStorage.setItem('ft_country', AppState.country);
  localStorage.setItem('ft_currency', AppState.currency);

  updateCurrencyUI();

  if (typeof applyFilters === 'function') {
    applyFilters();
  }
}

function updateCurrencyUI() {
  const btnSN = document.getElementById('btn-currency-sn');
  const btnKM = document.getElementById('btn-currency-km');

  if (btnSN && btnKM) {
    if (AppState.country === 'SN') {
      btnSN.className = "px-2 py-0.5 rounded bg-brand-pink text-white font-bold transition shadow-sm";
      btnKM.className = "px-2 py-0.5 rounded text-slate-400 hover:text-white transition font-medium";
    } else {
      btnKM.className = "px-2 py-0.5 rounded bg-brand-pink text-white font-bold transition shadow-sm";
      btnSN.className = "px-2 py-0.5 rounded text-slate-400 hover:text-white transition font-medium";
    }
  }
}

function formatPrice(priceXOF, priceKMF) {
  if (AppState.country === 'KM') {
    return `${priceKMF.toLocaleString('fr-FR')} KMF`;
  }
  return `${priceXOF.toLocaleString('fr-FR')} FCFA`;
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (badge) {
    const totalQty = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalQty;
  }
}

function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    AppState.cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('ft_cart', JSON.stringify(AppState.cart));
  updateCartBadge();
  alert(`"${product.name}" a été ajouté au panier !`);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateCurrencyUI();
});