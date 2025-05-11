const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
    const inputKeyword = document.querySelector('.input-keyword').value;

    fetch(`https://newsapi.org/v2/everything?q=${inputKeyword}&apiKey=1d41f9b2bcc64da991c02f253e8b206e`)
        .then(response => response.json())
        .then(result => {
            const articles = result.articles;
            const cards = generateNewsCards(articles); 
            document.querySelector('.news-container').innerHTML = cards;

            // tombol detail
            const detailButtons = document.querySelectorAll('.modal-detail-button');
            detailButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const articleIndex = this.dataset.index;
                    fetchNewsDetail(articles[articleIndex]);
                });
            });
        })
        .catch(error => console.error('Error:', error));
});

const inputKeyword = document.querySelector('.input-keyword');

//live search
inputKeyword.addEventListener('input', function () {
    const keyword = inputKeyword.value;

    if (keyword.length > 2) {
        // hide berita unggulan
        document.querySelector('.featured-news-container').style.display = 'none';

        fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=1d41f9b2bcc64da991c02f253e8b206e`)
            .then(response => response.json())
            .then(result => {
                const articles = result.articles;
                const cards = generateNewsCards(articles); 
                document.querySelector('.news-container').innerHTML = cards;

                // tombol detail
                const detailButtons = document.querySelectorAll('.modal-detail-button');
                detailButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        const articleIndex = this.dataset.index;
                        fetchNewsDetail(articles[articleIndex]);
                    });
                });
            })
            .catch(error => console.error('Error:', error));
    } else {
        // show berita unggulan
        document.querySelector('.featured-news-container').style.display = 'block';
        document.querySelector('.news-container').innerHTML = ''; // kalo ga ada kosongin
    }
});

// Func untuk mengambil detail berita
function fetchNewsDetail(article) {
    const newsDetail = generateNewsDetail(article); 
    document.querySelector('.modal-content').innerHTML = newsDetail;
}

// Func untuk membuat kartu berita
function generateNewsCards(articles) {
    let cards = '';
    articles.forEach((article, index) => {
        cards += `<div class="col-md-4 my-3">
                    <div class="card">
                        <img src="${article.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${article.source.name}</h6>
                            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#newsDetail" data-index="${index}">Show Detail</a>
                        </div>
                    </div>
                  </div>`;
    });
    return cards;
}

// Func untuk buat detail berita
function generateNewsDetail(article) {
    return `<div class="modal-header">
                <h5 class="modal-title" id="newsDetailLabel">${article.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p><strong>Author:</strong> ${article.author || 'Unknown'}</p>
                <p><strong>Description:</strong> ${article.description || 'Deskripsi tidak tersedia:(.'}</p>
                <p><strong>Content:</strong> ${article.content || 'Konten tidak tersedia.'}</p>
                <a href="${article.url}" target="_blank" class="btn btn-primary mt-3">Read Full Article</a>
            </div>`;
}

// Func news featured
function fetchFeaturedNews() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=1d41f9b2bcc64da991c02f253e8b206e`)
        .then(response => response.json())
        .then(result => {
            const articles = result.articles.slice(0, 3); 
            const featuredCards = generateFeaturedNewsCards(articles);
            document.querySelector('.featured-news-container').innerHTML = featuredCards;

            const detailButtons = document.querySelectorAll('.featured-modal-detail-button');
            detailButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const articleIndex = this.dataset.index;
                    fetchNewsDetail(articles[articleIndex]);
                });
            });
        })
        .catch(error => console.error('Error:', error));
}

function generateFeaturedNewsCards(articles) {
    let cards = '';
    articles.forEach((article, index) => {
        cards += `<div class="col-md-4 my-3">
                    <div class="card">
                        <img src="${article.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${article.source.name}</h6>
                            <a href="#" class="btn btn-primary featured-modal-detail-button" data-bs-toggle="modal" data-bs-target="#newsDetail" data-index="${index}">Show Detail</a>
                        </div>
                    </div>
                  </div>`;
    });
    return cards;
}

fetchFeaturedNews();
