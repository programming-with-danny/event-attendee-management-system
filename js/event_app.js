// Task: Event Attendee Management System

// You are tasked with creating a basic event attendee management system. The system should allow organizers to add new attendees, manage their names, search for attendees, and list all attendees in a formatted way.

// Requirements:

// Attendee Data:
// Store the names of event attendees in an array. Each name should be a string.

let attendees = [];

// Functionalities to Implement:

// Add a new attendee:
// Create a function addAttendee that takes an attendee's name as input, converts it to uppercase, and adds it to the array of attendees if it's not already in the list.
function addSingleAttendee(attendeeName) {
    attendeeName = attendeeName.toUpperCase();
    if (!attendees.includes(attendeeName)) {
        attendees.push(attendeeName);
        return true;
    }
    return false;
}

function addMultipleAttendee(...name_of_attendees) {
    let notAdded = [];
    name_of_attendees.forEach((attendee) => {
        attendee = attendee.toUpperCase();
        if (!attendees.includes(attendee)) {
            attendees.push(attendee);
        } else {
            notAdded.push(attendee)
        }
    })
    return notAdded;
}

if (addSingleAttendee('Nnanna John')) {
    console.log('Attendee added successfully');
} else {
    console.log('Did not add attendee, probaby already added')
}

let response = addMultipleAttendee('Nnanna John', 'Blessing Oyiri', 'Chioma Okafor');
if (response.length > 0) {
    console.log(`${response.length} name(s) was/were not added - ${response.join()}`)
} else {
    console.log(`All ${response.length} name(s) was/were added`)
}
let response2 = addMultipleAttendee('Chibuike Kalu', 'Blessing Oyiri', 'Chioma Okafor')
if (response2.length > 0) {
    console.log(`${response2.length} name(s) was/were not added - ${response2.join()}`)
} else {
    console.log(`All ${response2.length} name(s) was/were added`)
}

// Search for an attendee:
// Create a function findAttendee that takes a name as input, converts the name to uppercase, and checks if it exists in the array. If it exists, display the attendee's position in the list. If not, display a message that the attendee was not found.
function findAttendee(name) {
    name = name.toUpperCase();
    let index = attendees.indexOf(name);
    if (index >= 0) {
        console.log(`${name} was found in position ${index}`);
        return;
    }
    console.log(`${name} was not found`);
}

findAttendee('Nnanna John');
findAttendee('Nanna John');

// Format and display all attendees:
// Create a function listAttendees that formats the list of attendees into a single string, separating names by commas (,) and adds "Attendees:" at the start of the list.
function listAttendees() {
    return attendees.join();
}

console.log(`Attendees: ${listAttendees()}`)

// Remove an attendee:
// Create a function removeAttendee that takes an attendee's name, converts it to uppercase, and removes the attendee from the list if they exist.

function removeAttendee(name) {
    name = name.toUpperCase();
    let index = attendees.indexOf(name);
    if (index >= 0) {
        attendees.splice(index, 1)
    }
}

removeAttendee('blessing oyiri');
console.log(`Attendees: ${listAttendees()}`);
