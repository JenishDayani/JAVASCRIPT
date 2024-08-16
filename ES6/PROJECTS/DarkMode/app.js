const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', function () {
  document.documentElement.classList.toggle('dark-theme');
});

console.log(articles);

const articleData = articles
  .map((article) => {
    console.log(article);
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMM Do,YYYY');
    return `
  <article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span class="date">${formatDate}</span>
          <span class="author">${length} min read</span>
        </div>
        <p>
        ${snippet}
        </p>
      </article>
  `;
  })
  .join('');

articlesContainer.innerHTML = articleData;

console.log(moment);
