// Retrieve existing data from localStorage on page load
let localData = localStorage.getItem('attendeeList');
let attendeesList = localData ? JSON.parse(localData) : [];

// Get the add attendee button
let addAttendeeButton = document.getElementById('add-attendee-btn');

// Add an event listener to the button
addAttendeeButton.addEventListener('click', () => {
    let addAttendNameInput = document.getElementById('attendee-name');
    let addAttendeeName = addAttendNameInput.value.trim().toUpperCase();
    let regexp = /^[a-zA-Z ]*$/;

    // Validation for empty input or invalid characters
    if (addAttendeeName === '') {
        addAttendNameInput.style.borderColor = 'red';
        document.getElementById('alert').innerHTML = 'Your input box is empty, provide attendee name';
        document.getElementById('alert').style.color = 'red';
    } else if (!regexp.test(addAttendeeName)) {
        addAttendNameInput.style.borderColor = 'red';
        document.getElementById('alert').innerHTML = 'You might have added a number or special characters to your name';
        document.getElementById('alert').style.color = 'red';
    } else {
        addAttendNameInput.style.borderColor = 'green';
        document.getElementById('alert').innerHTML = '';  // Clear any previous alert messages

        // Check if the attendee already exists
        let attendee = attendeesList.find(attend => attend.attendeeName === addAttendeeName);
        if (attendee) {
            alert('Student record already exists');
        } else {
            // Create a new attendee object
            let attendeeInfo = {
                attendeeName: addAttendeeName,
                id: 'ATTENDEE/' + Date.now(),  // Generate a unique ID
            };

            // Add the new attendee to the list
            attendeesList.push(attendeeInfo);
            document.getElementById('alert').innerHTML = '';
            alert('Attendee added successfully');
            addAttendNameInput.value = "";  // Clear the input field
            console.log(attendeesList);

            // Save the updated attendees list to localStorage
            localStorage.setItem('attendeeList', JSON.stringify(attendeesList));
        }
    }
});
