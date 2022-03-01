function delete_review(reviewId) {
    fetch('/delete-review', {
        method: "POST",
        body: JSON.stringify({ reviewId: reviewId})
    }).then((_res) => {
        window.location.href ="/";
    });
}