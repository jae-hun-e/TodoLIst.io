const quotes = [
  {
    quote: "등고자비",
    author: "고사성어",
  },
  {
    quote:
      "꿈이 있다면 작은 일이라도 시작하라. 새로운 일을 하는 용기 속에 당신의 능력과 기적이 모두 들어 있다.",
    author: "괴테",
  },
  {
    quote: "비참해지고 싶다면 미래에서 살아라",
    author: "바이런 케이티",
  },
  {
    quote: "모든 어려움에는 기회가 놓여 있기 마련이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "당신이 거둔 것으로 하루를 판단하지 말고 당신이 뿌린 것으로 판단하라",
    author: "로버트 루이 스티븐슨",
  },
  {
    quote:
      "아는 것만으로는 충분하지 않다. 적용할 줄 알아야 한다. 의지만 가지고는 충분하지 않다. 행동으로 옮겨야 한다.",
    author: "괴테",
  },
  {
    quote:
      "모든 사람을 만족시키려면 아무도 만족할 수 없고, 단 한 사람을 제대로 만족시키면 모두가 만족한다.",
    author: "배민다움 中",
  },
  {
    quote: "의지가 크면 어려움이 크지 않다.",
    author: "니콜로 마키아벨리",
  },
  {
    quote: "win or learn",
    author: "맥그리너",
  },
  {
    quote: "No pain, No gain",
    author: "헬창",
  },
];

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
