// //superclass
// class Testimonial {
//     #quote = "";
//     #image = "";
//     constructor(quote, image) {
//         this.#quote = quote;
//         this.#image = image;
//     }
//     get quote() {
//         return this.#quote;
//     }
//     get image() {
//         return this.#image;
//     }
//     get testimonialHTML() {
//         return `<div class="testimonials1">
//                 <img class="picture" src="${this.image}">
//                 <p class="quote">
//                    ${this.quote}
//                 </p>
//               <p class="author">${this.author}</p>
//          </div>`
//     }

// }
// //subclass
// class AuthorTestimonials extends Testimonial {
//     #author = "";
//     constructor(author, quote, image) {
//         super(quote, image);
//         this.#author = author;
//     }
//     get author() {
//         return this.#author;
//     }
// }
// //subclass
// class CompanyTestimonial extends Testimonial {
//     #company = "";
//     constructor(company, quote, image) {
//         super(quote, image);
//         this.#company = company;
//     }
//     get author() {
//         return this.#company + "Company";
//     }
// }
// const testimonial1 = new AuthorTestimonials(
//     "Zulkifli",
//     "Semangat walaupun belum paham",
//     "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );
// const testimonial2 = new AuthorTestimonials(
//     "albert Enstein",
//     "Try Again!!",
//     "https://zulnas.com/wp-content/uploads/2023/03/16789770061322944224228636931208_copy_800x520.jpg",
// );
// const testimonial3 = new AuthorTestimonials(
//     "James Gosling",
//     "Don't Pesimis",
//     "https://i0.wp.com/diengcyber.com/wp-content/uploads/2022/10/Artikel-Sejarah-Program-Java-1-3.webp?fit=1170%2C585&ssl=1",
// );

// let testimonialData = [testimonial1, testimonial2,testimonial3];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById('testi').innerHTML = testimonialHTML;

const testimonialsData = [
    {
        author: "albert Enstein",
        quote: "Try Again!!",
        image: "https://zulnas.com/wp-content/uploads/2023/03/16789770061322944224228636931208_copy_800x520.jpg",
        rating: 5,
    },
    {
        author: "James Gosling",
        quote: "Don't Pesimis",
        image: "https://i0.wp.com/diengcyber.com/wp-content/uploads/2022/10/Artikel-Sejarah-Program-Java-1-3.webp?fit=1170%2C585&ssl=1",
        rating: 4,
    },
    {
        author: "Zulkifli",
        quote: "Semangat walaupun belum paham",
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4,
    }
];

function allTestimonials() {
    let testimonialHTML = "";

    testimonialsData.forEach(function (item) {
        testimonialHTML += `<div class="testimonial">
                                    <img
                                    src="${item.image}"
                                    class="profile"
                                />
                                <p class="quote">${item.quote}</p>
                                <p class="author">${item.author}</p>
                                <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
                            </div>`
    });
    document.getElementById("testimonials").innerHTML = testimonialHTML;

}

allTestimonials();

function filterTestimonials(rating) {
    let testimonialHTML = "";

    const testimonialsFiltered = testimonialsData.filter(function (item) {
        return item.rating === rating;
    });

    if (testimonialsFiltered.length === 0) {
        testimonialHTML += `<h1>Data not found!</h1>`;
    } else {
        testimonialsFiltered.forEach(function (item) {
            testimonialHTML += `<div class="testimonial">
                                    <img
                                        src="${item.image}"
                                        class="profile"
                                    />
                                    <p class="quote">${item.quote}</p>
                                    <p class="author">- ${item.author}</p>
                                    <p class="rating">${item.rating} <i class="fa-solid fa-star"></i></p>
                                </div>
                            `;
        });
    }

    document.getElementById("testimonials").innerHTML = testimonialHTML;
}


