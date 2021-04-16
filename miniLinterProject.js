let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
// console.log(storyWords);


const betterWords = storyWords.filter(word => 
  !unnecessaryWords.includes(word)
)

console.log(betterWords.length);
// console.log(betterWords);

// We want to know how many time overusedWords are used on the storyWords.
// using for loops

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;


for (word of storyWords) {
  if (word === 'really') {
    reallyCount += 1;
  } else if (word === 'very') {
    veryCount += 1;
  } else if (word === 'basically') {
    basicallyCount += 1;
  }
}

console.log(reallyCount, veryCount, basicallyCount);

// Sentence Counter
// Since sentence is end up with a period and exclamation mark, we will use loop and access the last of the string of the array.

let sentenceCount = 0;
for (word of storyWords) {
  if (word[word.length - 1 ] == '.' || word[word.length - 1 ] == '!'  ) {
    sentenceCount += 1;
  }
}


// Summary Counter
const summary = () => {
  console.log(`The total words are: ${storyWords.length}`);
  console.log(`The total sentences are: ${sentenceCount}`);
  console.log(`The number of times word really: ${reallyCount} times, basically: ${basicallyCount}, very: ${veryCount}.`);
}

summary();

// Now, log the betterWords array to the console as a single string.
console.log(betterWords.join(' '));