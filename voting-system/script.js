// Initialize poll as a Map
const poll = new Map();

// Function to add option
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// Function to vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// Function to display results
function displayResults() {
  let results = "Poll Results:\n";
  for (const [option, voters] of poll.entries()) {
    results += `${option}: ${voters.size} votes\n`;
  }
  return results.trim();
}

// Add at least 3 options
addOption("Turkey");
addOption("Morocco");
addOption("Spain");
addOption("Algeria");

// Cast at least 3 votes
vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
vote("Algeria", "traveler1");

console.log(displayResults());
console.log(vote("Algeria", "traveler1"));
