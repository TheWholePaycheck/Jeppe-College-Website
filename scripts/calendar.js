// create array of holiday objects
// Day-Month-Week
let holidays = [
    {
        name: "New Year's Day",
        date: "1-1-Saturday"
    },
    {
        name: "Tweede Nuwe Jaar",
        date: "2-1-Sunday"
    },
    {
        name: "Human Rights Day",
        date: "21-3-Saturday"
    },
    {
        name: "Good  Friday",
        date: "15-4-Friday"
    },
    {
        name: "Holy Saturday",
        date: "16-4-Saturday"
    },
    {
        name: "Easter Sunday",
        date: "17-4-Sunday"
    },
    {
        name: "Family Day",
        date: "18-4-Mon"
    },
    {
        name: "Freedom Day",
        date: "27-4-Wed"
    },
    {
        name: "Workers Day",
        date: "1-5-Sunday"
    },
    {
        name: "Day of for Workers Day",
        date: "2-5-Mon"
    },
    {
        name: "Mother's Day",
        date: "8-5-Sunday"
    },
    {
        name: "Youth Day",
        date: "16-6-Thu"
    },
    {
        name: "Father's Day",
        date: "19-6-Sunday"
    },
    {
        name: "Nelson Mandela Day",
        date: "18-7-Mon"
    },
    {
        name: "National Women's Day",
        date: "9-8-Tue"
    },
    {
        name: "Heritage Day",
        date: "24-9-Saturday"
    },
    {
        name: "Day of Reconciliation",
        date: "16-12-Friday"
    },
    {
        name: "Christmas Eve",
        date: "24-12-Saturday",
        description: "It's going down my nigga!",
        campuses: "Johannesburg, Braamfontein, Nelspruit"
    },
    {
        name: "Christmas Day",
        date: "25-12-Sunday"
    },
    {
        name: "Day of Goodwill",
        date: "26-12-Mon"
    },
    {
        name: "New Year's Eve",
        date: "31-12-Saturday"
    }
]

/* ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
 * TASK
 * Using javascript, create algorithim that will highlight a cell in a table that
 * matches a holiday in the holidays array
 *
 * SOLUTION
 * loop throug tables
 * then loop through rows
 * then loop through cells to access each cell in a table
 * track which month we are on using index
 * check if it is a holiday
 * add class to cell to style it
 * add title/tooltip to the cell
 * ** ** ** ** ** ** ** ** ** ** ** ** ** ** **/

// get all the tables as array
const months = document.querySelectorAll('table');

// monthNumber will used to know which month we are on
months.forEach((month, monthNumber) => {
    
    monthNumber += 1 // add one to make it start from 1 instrad of zero
    let monthName = month.previousElementSibling.innerText; // get month name 

    // nested for loop to get the cells of each tables
    for (row of month.rows) {
        for(cell of row.cells) {
             
            // skip the empty cells and the <th>
            if (cell.tagName == "TD" && cell.innerHTML != " &nbsp; ") {
                // console.log(cell)
                const tableDay = cell.innerText
                holidays.filter(holiday => {
        
                    // split the date string to get the day and month number
                    let date = holiday.date.split('-');
                    let holidayMonth = date[1];
                    let holidayDay = date[0];

                    // if there is no description, then set to default  
                    holiday.description == null ? holiday.description = "No details about this event" : holiday.description = holiday.description

                    // if month matches month number and cell number matches holiday, then it is a holiday
                    if (holidayMonth == monthNumber && tableDay == holidayDay ) {
                        // add class to style the cell
                        cell.classList.add("is-holiday")
                        cell.title = holiday.name; // add tooltip to show holiday name

                        // add onclick event function to the holiday cell to show alert with the date 
                        cell.onclick = () => {
                          // show the popup
                          showEventPopup(holiday.name, `${tableDay} ${month.previousElementSibling.innerText}`, holiday.description)
                            // alert(`On ${tableDay} of ${month.previousElementSibling.innerText} it is ${holiday.name} \n\n\n ${holiday.description}`)
                        }
                    }
                })
              
              // if cell is any empty cell, add "empty" class to remove hover effect
            } else if (cell.innerHTML == " &nbsp; ") {
              cell.classList.add("empty");
              cell.style.userSelect = "none"; // disable selection
            }
        }
    }

})

// get the popup elements
const popupElem = document.querySelector('.popup-background')
const eventTitleElem = document.querySelector('.event-title') 
const eventDateElem = document.querySelector('.event-date')
const eventDescriptionElem = document.querySelector('.event-description')

function showEventPopup(title, date, description) {
  // set the values to the date
  eventTitleElem.innerText = title;
  eventDateElem.innerText = date;
  eventDescriptionElem.innerText = description;

  // show the popup
  popupElem.classList.remove('hide')
}

// setup the close button
const closePopupBtn = document.querySelector('.close-popup-btn')

closePopupBtn.addEventListener('click', () => {
  popupElem.classList.add('hide')
})
