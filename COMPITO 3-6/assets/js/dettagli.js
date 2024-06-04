document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
  
    if (id) {
      const response = await fetch(`https://striveschool-api.herokuapp.com/books/${id}`);
      const book = await response.json();
      displayBookDetails(book);
    }
  });
  
  const displayBookDetails = (book) => {
    const bookDetails = document.getElementById("book-details");
  
    const detailsHtml = `
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${book.img}" class="img-fluid rounded-start" alt="${book.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">Prezzo: ${book.price} €</p>
              <p class="card-text">Categoria: ${book.category}</p>
              <p class="card-text">ASIN: ${book.asin}</p>
              <p class="card-text"><small class="text-muted">Pubblicato da: ${book.publisher}</small></p>
            </div>
          </div>
        </div>
      </div>
    `;
  
    bookDetails.innerHTML = detailsHtml;
  };
  