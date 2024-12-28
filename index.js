function changeGift() {
    const giftDiv = document.getElementById("gift");
    const gifts ={
        1: { emoji: "🌹", text: "A single rose for you, Sanvii, just to brighten your day" }, 
        2: { emoji: "🍫", text: "sweet chocolates for you, Sanvii" },
        3: { emoji: "🎶", text: "love songs to brighten your day, Sanvii" },
        4: { emoji: "✨", text: "magical moments with you, Sanvii" },
        5: { emoji: "💎", text: "sparkling compliments for your beauty, Sanvii" },
        6: { emoji: "☕", text: "cozy coffee dates, Sanvii" },
        7: { emoji: "🌷", text: "tulips as fresh as you, Sanvii" },
        8: { emoji: "🎨", text: "beautiful colors that remind me of you, Sanvii" },
      }
      
  
    const days = Object.keys(gifts);
    const randomDay = days[Math.floor(Math.random() * days.length)];
    const { emoji, text } = gifts[randomDay];
  
    giftDiv.innerHTML = `<span>${emoji}<span><p>${text}</p>`;
  }
  
  document.getElementById("cube").addEventListener("click", function () {
    this.classList.toggle("active");
    if (!this.classList.contains("active")) {
      changeGift();
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    changeGift();
  
    const cube = document.getElementById("cube");
    cube.classList.add("active");
    setTimeout(() => {
      cube.classList.remove("active");
    }, 3000);
  });
  