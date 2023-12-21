document.getElementById('waitlistForm').addEventListener('submit', function(event){
    event.preventDefault();

    // Get input values
    var firstName = document.getElementById('FirstName').value;
    var lastName = document.getElementById('LastName').value;
    var email = document.getElementById('email').value;

    // Store data in an array in local storage
    var submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    submissions.push({ firstName, lastName, email });
    localStorage.setItem('submissions', JSON.stringify(submissions));

    alert('Submission saved. Thank you!');
});

// Function to download the data as CSV
function downloadCSV() {
    var submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    var csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "First Name,Last Name,Email\n"; // Column headers
    submissions.forEach(function(sub){
        csvContent += [sub.firstName, sub.lastName, sub.email].join(",") + "\n"; // Data rows
    });

    // Create a link to download the CSV
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "waitlist_data.csv");
    document.body.appendChild(link);

    // Trigger the download
    link.click();
}
