// ZENTRA Voting Logic (Preview Only)

const yesBtn = document.querySelector('.vote-btn:nth-child(2)');
const noBtn = document.querySelector('.vote-btn:nth-child(3)');

yesBtn.addEventListener('click', () => {
  yesBtn.style.background = '#22aa44';
  noBtn.style.background = '#0077cc';
  alert('✅ Forecasted: Yes for Reform');
});

noBtn.addEventListener('click', () => {
  noBtn.style.background = '#cc4444';
  yesBtn.style.background = '#0077cc';
  alert('❌ Forecasted: No to Reform');
});
