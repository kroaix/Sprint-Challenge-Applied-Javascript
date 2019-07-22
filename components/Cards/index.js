// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    console.log('Success!', response);
    newArticle(response.data.articles);
  })
  .catch((error) => {
    console.log('Error: ', error);
  })

function newArticle(articles) {
  for (let topic in articles) {
    const cardsContainer = document.querySelector('.cards-container');
    const topics = articles[topic];
    topics.map((article) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const headline = document.createElement('div');
      headline.classList.add('headline');
      headline.textContent = article.headline;
      card.appendChild(headline);

      const author = document.createElement('div');
      author.classList.add('author');
      card.appendChild(author);

      const imgContainer = document.createElement('div');
      imgContainer.classList.add('img-container');
      author.appendChild(imgContainer);

      const img = document.createElement('img');
      img.src = article.authorPhoto;
      imgContainer.appendChild(img);

      const authorName = document.createElement('span');
      authorName.textContent = `By: ${article.authorName}`;
      author.appendChild(authorName);

      cardsContainer.appendChild(card);
    })
  }
}