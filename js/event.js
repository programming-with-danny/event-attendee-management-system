
let dataInLocalStorage = localStorage.getItem('attendeesList');
let attendeesList = !dataInLocalStorage ? [] : JSON.parse(attendeesList);
let addAttendeeButton = document.getElementById('add-attendee-btn');
let searchAttendeeButton = document.getElementById('search-attendee-btn');


addAttendeeButton.addEventListener('click',() => {
    let addAttendNameInput = document.getElementById('attendee-name');
    let addAttendeeName = addAttendNameInput.value.trim().toUpperCase();
    let regexp = /^[a-zA-Z ]*$/;
    
    if (addAttendeeName === ''){
        addAttendNameInput.style.borderColor = 'red';
        document.getElementById('alert').innerHTML = 'Your input box is empty, provide attendee name'
        document.getElementById('alert').style.color = 'red'
    }else if (!regexp.test(addAttendeeName)) {
            addAttendNameInput.style.borderColor = 'red';
            document.getElementById('alert').innerHTML = 'You might have added a number or special characters to your name'
            document.getElementById('alert').style.color = 'red'
    } else {
        addAttendNameInput.style.borderColor = 'green';

        let attendee = attendeesList.find(attend => attend.attendeeName.trim().toUpperCase() === addAttendeeName);
        if (attendee) {
            alert('Attendee already added');
            addAttendNameInput.value = "";
        } else {
            let attendeeInfo = {
                attendeeName: addAttendeeName,
                id: 'ATTENDEE/0000' + (attendeesList.length + 1),
            };

            attendeesList.push(attendeeInfo);
            updateDatabase();
            document.getElementById('alert').innerHTML = ''
            alert('attendee added successfully');
            addAttendNameInput.value = "";
            
        }
    }
})

searchAttendeeButton.addEventListener('click', () => {
    let attendeeSearchInput = document.getElementById('search-attendee');
    let attendSearch = attendeeSearchInput.value.trim().toUpperCase();
    if (attendSearch == '') {
        alert('enter attendee name')
    } else {
        let attendee = attendeesList.find((attend) => attend.attendeeName.toUpperCase() === attendSearch);
        if (!attendee) {
            alert(`${attendee} was not found`)
            document.getElementById('display').innerHTML = '';
        } else {
            let response = `<ul>
                <li>${attendee.attendeeName} with the ID: ${attendee.id} registered for the event</li>
            </ul>`;
            document.getElementById('display').innerHTML = response;
        }
    }
    
})

function updateDatabase() {
    localStorage.setItem('attendeeList', JSON.stringify(attendeesList));
}

