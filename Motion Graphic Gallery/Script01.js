// Get video ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

// Update view count
function updateViewCount(videoId) {
    const viewCountElement = document.getElementById(`view-count-${videoId}`);
    let viewCount = localStorage.getItem(`viewCount-${videoId}`);

    if (viewCount) {
        viewCount++;
    } else {
        viewCount = 1;
    }

    localStorage.setItem(`viewCount-${videoId}`, viewCount);
    viewCountElement.textContent = `Views: ${viewCount}`;
}

// Retrieve and display comments
function displayComments(videoId) {
    const commentsElement = document.getElementById('comments');
    let comments = JSON.parse(localStorage.getItem(`comments-${videoId}`)) || [];

    let commentsHTML = '';

    comments.forEach(comment => {
        commentsHTML += `<div class="comment"><strong>${comment.name}</strong>: ${comment.comment}</div>`;
    });

    commentsElement.innerHTML = commentsHTML;
}

// Add a new comment
function addComment(videoId, name, comment) {
    const commentsElement = document.getElementById('comments');
    let comments = JSON.parse(localStorage.getItem(`comments-${videoId}`)) || [];

