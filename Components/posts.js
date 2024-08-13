class PostComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    createPostItem(post) {
        return `
            <div class="col-md-6">
                <div class="post-item">
                    <img src="${post.imgSrc}" alt="${post.alt}" class="img-fluid imgPost">
                    <h5 class="text-muted">${post.subtitle}</h5>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-description">${post.description}</p>
                    <div class="author-info mt-3 d-flex justify-content-between">
                        <div class="d-flex">
                            <img src="${post.authorImg}" alt="${post.authorAlt}" class="justify-content-start">
                            <div>
                                <p class="mb-0">${post.authorName}</p>
                                <small>${post.date}</small>
                            </div>
                        </div>
                        <div class="d-flex gap-2">
                            <div class="post-icons align-items-center justify-content-center">
                                <i class="bi bi-heart"></i>
                            </div>
                            <div class="post-icons align-items-center justify-content-center">
                                <i class="bi bi-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    render(posts) {
        this.container.innerHTML = posts.map(post => this.createPostItem(post)).join('');
    }
}

const posts = [
    {
        imgSrc: "/images/emilyPostImg.png",
        alt: "Benefits of Hydration",
        subtitle: "Weight Loss",
        title: "The Benefits of Hydration for Weight Loss",
        description: "Discover how staying hydrated can support your weight loss goals and improve overall health.",
        authorImg: "/images/emily.png",
        authorAlt: "emily",
        authorName: "Emily Johnson",
        date: "23 May 2023 - 5 min read"
    },
    {
        imgSrc: "/images/markPostImg.png",
        alt: "Understanding Macronutrients",
        subtitle: "Understanding Macronutrients",
        title: "Carbohydrates, Proteins, and Fats",
        description: "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
        authorImg: "/images/mark.png",
        authorAlt: "mark",
        authorName: "Mark Wilson",
        date: "23 May 2023 - 5 min read"
    },
    {
        imgSrc: "/images/saraPostImg.png",
        alt: "Mindful Eating",
        subtitle: "Mindful Eating",
        title: "Cultivating a Healthy Relationship with Food",
        description: "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
        authorImg: "/images/sara.png",
        authorAlt: "sara",
        authorName: "Sarah Thompson",
        date: "23 May 2023 - 5 min read"
    },
    {
        imgSrc: "/images/emily2PostImg.png",
        alt: "Healthy Snacks on the Go",
        subtitle: "Healthy Snacks on the Go",
        title: "Quick and Nutritious Options",
        description: "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
        authorImg: "/images/emily2.png",
        authorAlt: "emily",
        authorName: "Emily Johnson",
        date: "23 May 2023 - 5 min read"
    }
];

const postComponent = new PostComponent('postsContainer');
postComponent.render(posts);
