function displayRating() {
    event.preventDefault();

    var rating = document.getElementById("rating").value;
    var feedback = document.getElementById("feedback").value;
    var output = `Rating: ${rating} <br> Feedback: ${feedback}`;
    document.getElementById("reviews").innerHTML = output;
}



