const postsElement = document.querySelector("#posts");

fetch('https://crudpi.io/c4989d/posts')
    .then(res => res.json())
    .then(posts => {
        console.log(posts);

        for(let i = posts.length - 1; i >= 0; i--) {
            const div = document.createElement('div');
            div.id = 'post'

            const row1 = document.createElement('div');
            row1.className = 'row container';

            const row2 = document.createElement('div');
            row2.className = 'row container';

            const col1 = document.createElement('div');
            col1.className = 'col';

            const col2 = document.createElement('div');
            col2.className = 'col';

            const title = document.createElement('h3');
            title.id = 'title';
            title.textContent = posts[i].title;

            const author = document.createElement('h5');
            author.id = author;
            author.textContent = posts[i].author;

            const rating = document.createElement('div');
            rating.id = 'rating';

            let ratingInt = parseInt(posts[i].rating * 2);

            let ratingHTML = '';
            for(let j = 0; j < 5; j++) {
                if(ratingInt >= 2) {
                    ratingHTML += '<i class="fas fa-star"></i>'
                    ratingInt -= 2;
                } else if(ratingInt >= 1) {
                    ratingHTML += '<i class="fas fa-star-half-alt"></i>'
                    ratingInt -= 1;
                } else {
                    ratingHTML += '<i class="far fa-star"></i>'
                }
            }

            rating.innerHTML = ratingHTML;
            console.log(rating.innerHTML);

            const date = document.createElement('h5');
            date.id = 'date';
            date.className = "mb-4 mt-0"
            date.textContent = posts[i].date;

            const body = document.createElement('p');
            body.id = 'body';
            body.textContent = posts[i].body;

            const img = document.createElement('img');
            img.className = "mb-3"
            img.src = posts[i].imageUrl;

            div.appendChild(row1);
            row1.appendChild(col1);

            col1.appendChild(title);
            col1.appendChild(author);
            col1.appendChild(rating);

            div.appendChild(img);

            div.appendChild(row2);
            row2.appendChild(col2);

            col2.appendChild(body);
            col2.appendChild(date);

            postsElement.appendChild(div);
        }
    });