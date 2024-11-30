// List of songs
const songs = [
    "The 1975",
    "Give Yourself a Try",
    "TOOTIMETOOTIMETOOTIME",
    "Love It If We Made It",
    "Be My Mistake",
    "Sincerity Is Scary",
    "I Like America & America Likes Me",
    "The Man Who Married a Robot",
    "Inside Your Mind",
    "It's Not Living (If It's Not With You)",
    "Surrounded By Heads and Bodies",
    "Mine",
    "I Couldn't Be More in Love",
    "I Always Wanna Die (Sometimes)"
  ];
  
  const songList = document.getElementById("song-list");
  
  // Add songs dynamically to the list
  songs.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = song;
    songList.appendChild(li);
  });
  
  // Initialize Sortable.js for drag-and-drop functionality
  new Sortable(songList, {
    animation: 150, // Smooth animation during drag-and-drop
  });
  
  // Function to create a tweet with the current ranking
  document.getElementById("tweet-results").addEventListener("click", () => {
    const ranking = Array.from(songList.children).map((li) => li.textContent).join(" > ");
    const tweetText = `Here's my "A Brief Inquiry Into Online Relationships" ranking: ${ranking}. What's yours? #The1975`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, "_blank"); // Open Twitter's compose page
  });
  