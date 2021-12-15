import { PostFilterType, PostType } from "../types/types";

import { v4 as uuidv4 } from 'uuid';

import postImage1 from '../assets/images/blogPage/posts/postImage1.png';
import postImage2 from '../assets/images/blogPage/posts/postImage2.png';
import postImage3 from '../assets/images/blogPage/posts/postImage3.png';
import postImage4 from '../assets/images/blogPage/posts/postImage4.png';
import postImage5 from '../assets/images/blogPage/posts/postImage5.png';
import postImage6 from '../assets/images/blogPage/posts/postImage6.png';

export const blogAPI = {
    getPosts: (startIndex: number, endIndex: number, filter: PostFilterType) => {


        const data = {
            posts: [] as PostType[],
            totalItems: 0,
        }

        let newPosts: PostType[] = [];

        newPosts = [...posts].sort(_compareDates);

        if (filter.query.length > 0) {
            newPosts = newPosts.filter(p => p.title.includes(filter.query));
        }

        data.totalItems = newPosts.length;
        data.posts = newPosts.slice(startIndex, endIndex);

        return data;
    },

    getRecent: (amount: number) => {
        const tempPosts = posts.sort(_compareDates);
        return tempPosts.slice(0, amount);
    }

}

const _compareDates = (a: PostType, b: PostType) => {
    if (a.date > b.date) {
        return -1;
    }
    if (a.date < b.date) {
        return 1;
    }
    return 0;
}

export const posts: PostType[] = [
    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 5, 17),
        image: {
            url: postImage1,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 5, 17),
        image: {
            url: postImage1,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 5, 17),
        image: {
            url: postImage1,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 5, 17),
        image: {
            url: postImage1,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 5, 17),
        image: {
            url: postImage1,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 5, 17),
        image: {
            url: postImage1,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 5, 17),
        image: {
            url: postImage1,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 5, 17),
        image: {
            url: postImage1,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2021, 7, 22),
        image: {
            url: postImage2,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 8, 9),
        image: {
            url: postImage3,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2021, 2, 12),
        image: {
            url: postImage4,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2020, 4, 5),
        image: {
            url: postImage5,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2019, 3, 27),
        image: {
            url: postImage6,
            alt: "post preview",
        },
        title: "Quia voluptas sit asernatur aut  renit aut fugit",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2021, 12, 14),
        image: {
            url: "https://picsum.photos/id/256/500/800",
            alt: "post preview",
        },
        title: "Lorem ipsum dolor sit amet",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2021, 12, 13),
        image: {
            url: "https://picsum.photos/id/322/500/800",
            alt: "post preview",
        },
        title: "Excepteur sint occaecat cupidatat non proident",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2021, 12, 12),
        image: {
            url: "https://picsum.photos/id/323/500/800",
            alt: "post preview",
        },
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2021, 12, 12),
        image: {
            url: "https://picsum.photos/id/324/500/800",
            alt: "post preview",
        },
        title: "Sed ut perspiciatis unde omnis iste natus",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2021, 8, 10),
        image: {
            url: "https://picsum.photos/id/326/500/800",
            alt: "post preview",
        },
        title: "Nemo enim ipsam voluptatem quia voluptas",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },

    {
        id: uuidv4(),
        authorName: "admin",
        date: new Date(2021, 7, 11),
        image: {
            url: "https://picsum.photos/id/328/500/800",
            alt: "post preview",
        },
        title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
        text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
    },
]

// export const posts: PostType[] = [
//     {
//         id: "0b343662-6152-477d-bb7d-72e29c83b6c2",
//         authorName: "admin",
//         date: new Date(2020, 5, 17),
//         image: {
//             url: postImage1,
//             alt: "post preview",
//         },
//         title: "Quia voluptas sit asernatur aut  renit aut fugit",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "d75d5407-c6dc-422e-b1d0-b64ecfaf220b",
//         authorName: "admin",
//         date: new Date(2021, 7, 22),
//         image: {
//             url: postImage2,
//             alt: "post preview",
//         },
//         title: "Quia voluptas sit asernatur aut  renit aut fugit",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "5205485d-3d84-400d-9791-c4af5081d5cc",
//         authorName: "admin",
//         date: new Date(2020, 8, 9),
//         image: {
//             url: postImage3,
//             alt: "post preview",
//         },
//         title: "Quia voluptas sit asernatur aut  renit aut fugit",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "908e9f10-5867-41e0-9447-2ec4a6412202",
//         authorName: "admin",
//         date: new Date(2021, 2, 12),
//         image: {
//             url: postImage4,
//             alt: "post preview",
//         },
//         title: "Quia voluptas sit asernatur aut  renit aut fugit",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "fb5f56b5-6fbc-451d-ba39-45ad1b88dcbe",
//         authorName: "admin",
//         date: new Date(2020, 4, 5),
//         image: {
//             url: postImage5,
//             alt: "post preview",
//         },
//         title: "Quia voluptas sit asernatur aut  renit aut fugit",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "83d7811f-38f5-44a9-9a5b-4adb6b733a9a",
//         authorName: "admin",
//         date: new Date(2019, 3, 27),
//         image: {
//             url: postImage6,
//             alt: "post preview",
//         },
//         title: "Quia voluptas sit asernatur aut  renit aut fugit",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "0f755d84-09db-4dbb-8964-42edf5bcf9fa",
//         authorName: "admin",
//         date: new Date(2021, 12, 14),
//         image: {
//             url: "https://picsum.photos/id/256/500/800",
//             alt: "post preview",
//         },
//         title: "Lorem ipsum dolor sit amet",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "a1626ddb-4a1c-4ec0-b051-b0dea55f1f0e",
//         authorName: "admin",
//         date: new Date(2021, 12, 13),
//         image: {
//             url: "https://picsum.photos/id/322/500/800",
//             alt: "post preview",
//         },
//         title: "Excepteur sint occaecat cupidatat non proident",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "e5a40567-7e34-4a07-8ed0-919b860d636d",
//         authorName: "admin",
//         date: new Date(2021, 12, 12),
//         image: {
//             url: "https://picsum.photos/id/323/500/800",
//             alt: "post preview",
//         },
//         title: "Duis aute irure dolor in reprehenderit in voluptate",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "54d4c9c8-7423-4d09-9037-c714e4af0f89",
//         authorName: "admin",
//         date: new Date(2021, 12, 12),
//         image: {
//             url: "https://picsum.photos/id/324/500/800",
//             alt: "post preview",
//         },
//         title: "Sed ut perspiciatis unde omnis iste natus",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "0ac5d059-912d-4817-9f1e-d26feaf2ba63",
//         authorName: "admin",
//         date: new Date(2021, 8, 10),
//         image: {
//             url: "https://picsum.photos/id/326/500/800",
//             alt: "post preview",
//         },
//         title: "Nemo enim ipsam voluptatem quia voluptas",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },

//     {
//         id: "afd20b32-3a4d-4613-872c-e932dedc1e32",
//         authorName: "admin",
//         date: new Date(2021, 7, 11),
//         image: {
//             url: "https://picsum.photos/id/328/500/800",
//             alt: "post preview",
//         },
//         title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
//         text: "Neque porro quisquam est aui dolorem sit amet, consectetur, adipisci velit, se eius modi tempora incidunt.",
//     },
// ]