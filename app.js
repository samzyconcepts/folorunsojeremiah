// variables for blog comment
const blogComment = document.getElementById('blog');
const blogToggler = document.querySelector('li.blog');

// display coming soon
blogToggler.addEventListener('click',
  function () {
    blogToggler.style.opacity = '0.5';
    blogComment.style.display = 'block';

  })