const wallet = document.getElementById('wallet');
const insights = document.getElementById('insights');
const swiftSell = document.getElementById('swift-sell');
const popupCard = document.getElementById('popup-card');

wallet.addEventListener('click', () => {
    showPopupCard(wallet, 'Wallet');
});

insights.addEventListener('click', () => {
    showPopupCard(insights, 'Insights');
});

swiftSell.addEventListener('click', () => {
    showPopupCard(swiftSell, 'Swift Sell');
});


{/* <i class="fa-solid fa-shield" style="color: #f04e29;" ></i> */}

function showPopupCard(card, title) {
    const iconElement = card.querySelector('i');
    const iconClass = iconElement.classList[1];
    const content = `
        <i class="fa-solid fa-shield" style="font-size: 35px; margin-right: 10px; color: #f04e29;"></i>
        <span>${title}</span>
        <p>Prevent counterfeiting, safeguard product authenticity, and uphold reputation, customer experience, and trust.</p>
        <button style="width: 100%; background-color: #f04e29; color: white; padding: 10px; border: none; border-radius: 5px;">KNOW MORE</button>
    `;
    popupCard.querySelector('.card-content').innerHTML = content;
    popupCard.style.display = 'inline-block';
}





function hidePopupCard() {
    popupCard.style.display = 'none';
}

wallet.addEventListener('click', () => {
    showPopupCard(wallet, 'Wallet Details');
});

insights.addEventListener('click', () => {
    showPopupCard(insights, 'Insights Details');
});

swiftSell.addEventListener('click', () => {
    showPopupCard(swiftSell, 'Swift Sell Details');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.card') && event.target !== popupCard) {
        hidePopupCard();
    }
});

const phoneScreen = document.querySelector('.content-container');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const previewText = card.getAttribute('data-preview');
        phoneScreen.innerText = previewText;
    });

    card.addEventListener('mouseleave', () => {
        phoneScreen.innerText = '';
    });
});
