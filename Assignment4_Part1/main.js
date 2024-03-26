const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//  StoryText variable and insertX, insertY, and insertZ arrays

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
;
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into ", "a puddle on the sidewalkturned into a slug and crawled away"];

// Copied the provided event handle

randomize.addEventListener('click', result);

function result() {

  // A new variable newStory set equal to storyText

    let newStory = storyText;

    // Three (3) variables xitem, yItem and zItem that are respectively set by selecting a random element from insertX, insertY and insertZ

    const xItem = randomValueFromArray (insertX);
    const yItem = randomValueFromArray (insertY) ;
    const zItem = randomValueFromArray (insertZ);

  //  A newStory.replaceAll() function call to replace :insertx:, :inserty: and :insertz: with the random insertX, insertY and insertZ variables

    newStory = newStory.replaceAll(":insertx:", xItem)
                       .replace(":inserty:", yItem)
                       .replace(":insertz:", zItem);
    

  if(customName.value !== '') {

    // Replaces "Bob" for every inputted name

    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  // If the "uk" radio input is selected, converts the 300lb to its equivalent in "stones"

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    newStory = newStory

              // If the "uk" radio input is selected, converts the 300lb to its equivalent in "stones"

               .replace("300 pounds", weight)

               // If the "uk" radio input is selected, converts the 94 degrees fahrenhiet to its equivalent in centigrade using the equation celsius = (fahrenheit-32) * 5 / 9

               .replace("94 fahrenheit", `${Math.round((94 - 32) * (5 / 9))} centigrade`);
  }

  // Setting the story.textContent equal to the modified newStory variable
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}