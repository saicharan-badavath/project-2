document.addEventListener('DOMContentLoaded', function () {
    const createPostBtn = document.getElementById('createPostBtn');
    const createPostModal = document.getElementById('createPostModal');
    const closeModal = document.getElementById('closeModal');
    const postForm = document.getElementById('postForm');
    const postSubmitBtn = document.getElementById('postSubmitBtn');
    const postContainer = document.querySelector('.post-container');
    const postDetailModal = document.getElementById('postDetailModal');
    const closeDetailModal = document.getElementById('closeDetailModal');
    const detailTitle = document.getElementById('detailTitle');
    const detailDate = document.getElementById('detailDate');
    const detailDescription = document.getElementById('detailDescription');

    // Edit Post Modal
    const editPostModal = document.getElementById('editPostModal');
    const closeEditModal = document.getElementById('closeEditModal');
    const editCategoryInput = document.getElementById('editCategory');
    const editTitleInput = document.getElementById('editTitle');
    const editDescriptionInput = document.getElementById('editDescription');
    const editPostForm = document.getElementById('editPostForm');
    let currentEditPost = null;

    // Open the Create Post Modal
    createPostBtn.addEventListener('click', function () {
        createPostModal.style.display = 'flex';
    });

    // Close the Create Post Modal
    closeModal.addEventListener('click', function () {
        createPostModal.style.display = 'none';
    });

    // Handle the Post Form Submission (Create Post)
    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const postCategory = document.getElementById('postCategory').value;
        const postTitle = document.getElementById('postTitle').value;
        const postDescription = document.getElementById('postDescription').value;

        if (postCategory.trim() === '' || postTitle.trim() === '' || postDescription.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Get the current date
        const currentDate = new Date();
        const formattedDate = currentDate.getDate() + ' ' + currentDate.toLocaleString('default', { month: 'short' }) + ' ' + currentDate.getFullYear();

        // Create a new post
        const newPost = document.createElement('div');
        newPost.className = 'post-box';
        newPost.innerHTML = `
            <h1 class="post-title" data-title="${postTitle}" data-date="${formattedDate}" data-description="${postDescription}">
                ${postTitle}</h1><br>
            <h2 class="category">${postCategory}</h2><br>
            <span class="post-date">${formattedDate}</span>
            <p class="post-description">${postDescription.substring(0, 100)}...</p>
            <button class="delete-post" data-title="${postTitle}">Delete</button>
            <button class="edit-post" data-title="${postTitle}" data-date="${formattedDate}" data-description="${postDescription}">Edit</button>
            <span class="load-more" data-title="${postTitle}" data-date="${formattedDate}" data-description="${postDescription}">Load more</span>
        `;

        // Append the new post to the container
        postContainer.insertBefore(newPost, postContainer.firstChild);

        // Display "Post Created" message
        const postCreatedMessage = document.getElementById('postCreatedMessage');
        postCreatedMessage.style.display = 'block';

        // Close the modal
        createPostModal.style.display = 'none';

        // Reset the form
        postForm.reset();

        setTimeout(() => {
            postCreatedMessage.style.display = 'none';
        }, 3000);
    });

    // Handle Post Container Click (View, Edit, Delete)
    postContainer.addEventListener('click', function (event) {
        // View Post
        if (event.target.classList.contains('load-more') || event.target.classList.contains('post-title')) {
            const title = event.target.getAttribute('data-title');
            const date = event.target.getAttribute('data-date');
            const description = event.target.getAttribute('data-description');

            detailTitle.textContent = title;
            detailDate.textContent = date;
            detailDescription.textContent = description;

            postDetailModal.style.display = 'flex';
        }

        // Delete Post
        if (event.target.classList.contains('delete-post')) {
            const titleToDelete = event.target.getAttribute('data-title');
            const postToDelete = document.querySelector(`.post-title[data-title="${titleToDelete}"]`).closest('.post-box');

            postToDelete.classList.add('fadeOut');
            setTimeout(() => {
                postContainer.removeChild(postToDelete);
            }, 500);
        }

        // Edit Post
        if (event.target.classList.contains('edit-post')) {
            const title = event.target.getAttribute('data-title');
            const date = event.target.getAttribute('data-date');
            const description = event.target.getAttribute('data-description');
            const category = event.target.previousElementSibling.previousElementSibling.textContent;

            // Populate the edit modal with current post data
            editCategoryInput.value = category;
            editTitleInput.value = title;
            editDescriptionInput.value = description;

            // Show the edit modal
            editPostModal.style.display = 'flex';

            // Set the post to edit
            currentEditPost = event.target.closest('.post-box');
        }
    });

    // Close Post Detail Modal
    closeDetailModal.addEventListener('click', function () {
        postDetailModal.style.display = 'none';
    });

    // Close Edit Post Modal
    closeEditModal.addEventListener('click', function () {
        editPostModal.style.display = 'none';
    });

    // Handle Edit Post Form Submission
    editPostForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const updatedCategory = editCategoryInput.value;
        const updatedTitle = editTitleInput.value;
        const updatedDescription = editDescriptionInput.value;

        if (updatedCategory.trim() === '' || updatedTitle.trim() === '' || updatedDescription.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Update the post details
        currentEditPost.querySelector('.category').textContent = updatedCategory;
        currentEditPost.querySelector('.post-title').textContent = updatedTitle;
        currentEditPost.querySelector('.post-title').setAttribute('data-title', updatedTitle);
        currentEditPost.querySelector('.post-description').textContent = updatedDescription.substring(0, 100) + '...';
        currentEditPost.querySelector('.post-title').setAttribute('data-description', updatedDescription);

        // Close the edit modal
        editPostModal.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const createPostBtn = 
        document.getElementById('createPostBtn');
    const createPostModal = 
        document.getElementById('createPostModal');
    const closeModal = 
        document.getElementById('closeModal');
    const postForm = 
        document.getElementById('postForm');
    const postSubmitBtn = 
        document.getElementById('postSubmitBtn');
    const postContainer = 
        document.querySelector('.post-container');
    const postDetailModal = 
        document.getElementById('postDetailModal');
    const closeDetailModal = 
        document.getElementById('closeDetailModal');
    const detailTitle = 
        document.getElementById('detailTitle');
    const detailDate = 
        document.getElementById('detailDate');
    const detailDescription = 
        document.getElementById('detailDescription');

    createPostBtn.addEventListener('click', function () {
        createPostModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function () {
        // Add fadeOut class
        createPostModal.classList.add('fadeOut');
        setTimeout(() => {
            createPostModal.style.display = 'none';
            // Remove fadeOut class
            createPostModal.classList.remove('fadeOut');
        }, 500);
    });

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validation
        const postCategory = 
            document.getElementById('postCategory').value;
        const postTitle = 
            document.getElementById('postTitle').value;
        const postDescription = 
            document.getElementById('postDescription').value;

        if (postCategory.trim() === '' ||
         postTitle.trim() === '' || 
         postDescription.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Get the current date
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default',
         { month: 'short' });
        const year = currentDate.getFullYear();
        const formattedDate = day + ' ' + month + ' ' + year;

        // Create a new post element
        const newPost = document.createElement('div');
        newPost.className = 'post-box';
        newPost.innerHTML = `
            <h1 class="post-title" data-title="${postTitle}"
         data-date="${formattedDate}"
          data-description="${postDescription}">
            ${postTitle}</h1><br>
            
        <h2 class="category">${postCategory}</h2><br>
        <span class="post-date">${formattedDate}</span>
        <p class="post-description">
        ${postDescription.substring(0, 100)}...</p>
        <button class="delete-post" data-title="${postTitle}">
        Delete</button>
        <span class="load-more" data-title="${postTitle}" 
        data-date="${formattedDate}" 
        data-description="${postDescription}">
        Load more</span>
        `;

        // Append the new post to the post container
        postContainer.insertBefore(newPost, 
            postContainer.firstChild);

        const postCreatedMessage = document
        .getElementById('postCreatedMessage');
        postCreatedMessage.style.display = 'block';


        // Close the modal
        createPostModal.style.display = 'none';

        // Reset the form
        postForm.reset();

        setTimeout(() => {
            postCreatedMessage.style.display = 'none';
        }, 3000);
    });

    postContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('load-more') ||
         event.target.classList.contains('post-title')) {
            const title = event.target.getAttribute('data-title');
            const date = event.target.getAttribute('data-date');
            const description = 
                event.target.getAttribute('data-description');

            // Set content in detail modal
            detailTitle.textContent = title;
            detailDate.textContent = date;
            detailDescription.textContent = description;

            // Display the detail modal
            postDetailModal.style.display = 'flex';
        }

        if (event.target.classList.contains('delete-post')) {
            const titleToDelete = 
                event.target.getAttribute('data-title');
            const postToDelete = 
                document.querySelector(`
            .post-title[data-title=
                "${titleToDelete}"]`).closest('.post-box');

            // Add fadeOut class to initiate the animation
            postToDelete.classList.add('fadeOut');

            // Remove the post after the animation completes
            setTimeout(() => {
                postContainer.removeChild(postToDelete);
            }, 500);

        }
    });

    closeDetailModal.addEventListener('click', function () {
    
        // Add fadeOut class
        postDetailModal.classList.add('fadeOut'); 
        setTimeout(() => {
           postDetailModal.style.display = 'none';
           
           // Remove fadeOut class
          postDetailModal.classList.remove('fadeOut'); 
        }, 500);
    });
});

