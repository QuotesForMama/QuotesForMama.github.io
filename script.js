function randomizer(max) {
    i= Math.floor(Math.random() * 20);
  document.getElementById("quote").innerHTML = quotes[i]
  console.log(quotes.length)
}


const quotes = ['Prevention is better than cure', 'You are what you think others think you are', "It's not over until you quit", 'Only you can control your actions and emotions', 'We cannot solve problems with the kind of thinking we employed when we came up with them.', 'Learn as if you will live forever, live like you will die tomorrow', 'When you change your thoughts, remember to also change your world', 'Success is not final; failure is not fatal: It is the courage to continue that counts.', 'The road to success and the road to failure are almost exactly the same.', 'Experience is a hard teacher because she gives the test first, the lesson afterwards.', 'Either you run the day or the day runs you.', 'Setting goals is the first step in turning the invisible into the visible.', 'He who conquers himself is the mightiest warrior.', "The elevator to success is out of order. You'll have to use the stairs, one step at a time.", 'Just one small positive thought in the morning can change your whole day.', "Don't let someone else's opinion of you become your reality", "If you're not positive energy, you're negative energy.", 'I am not a product of my circumstances. I am a product of my decisions.', 'You cannot plow a field by turning it over in your mind. To begin, begin.', "Don't look at your feet to see if you are doing it right. Just dance."]
