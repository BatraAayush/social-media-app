import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
        _id: uuid(),
        content: "Just had an amazing brunch with friends! #foodie",
        mediaURL:
            "https://plus.unsplash.com/premium_photo-1687905431875-e5ed5f632eda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        likes: {
            likeCount: 10,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "alicesmith",
                text: "That looks delicious! I need to try that place.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "bobjohnson",
                text: "I'm so jealous! Wish I could have joined you.",
                votes: {
                    upvotedBy: ["user1"],
                    downvotedBy: [],
                },
            },
        ],
        username: "aayushbatra",
        createdAt: "2023-07-01T15:30:45+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: "Just finished a great workout at the gym! Feeling energized!",
        mediaURL:
            "https://media.istockphoto.com/id/1272773180/photo/one-young-woman-making-a-selfie-for-social-media-at-the-gym.jpg?s=612x612&w=0&k=20&c=Pbf8XltWkf0bVk8a8zcK_9i-8vDYXnG5pmSI7KiCGrM=",
        likes: {
            likeCount: 30,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "carolwilliams",
                text: "You're killing it! Keep up the good work.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "carolwilliams",
        createdAt: "2022-04-05T08:12:20+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Spent the weekend hiking in the mountains. Nature is breathtaking!",
        mediaURL:
            "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 20,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "emmadavis",
                text: "I love hiking too! Which trail did you take?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "frankwilson",
                text: "The view must have been amazing! I need to go there someday.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "alicesmith",
        createdAt: "2022-06-18T11:40:55+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Attended an incredible concert last night! The music was mind-blowing.",
        mediaURL:
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        likes: {
            likeCount: 8,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "gracemartinez",
                text: "I was there too... It gave me goosebumps",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "bobjohnson",
        createdAt: "2022-04-18T11:40:55+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Celebrating my graduation today! So proud to have completed my degree.",
        mediaURL:
            "https://images.unsplash.com/photo-1618355776464-8666794d2520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZHVhdGUlMjBzdHVkZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 25,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "frankwilson",
                text: "Congratulations! Your hard work paid off.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "emmadavis",
                text: "I can't wait for my graduation too. Only a few more months!",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "carolwilliams",
        createdAt: "2022-07-10T14:25:30+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: "Enjoying a relaxing day at the beach. Perfect weather!",
        mediaURL:
            "https://plus.unsplash.com/premium_photo-1687653084934-426d3e01cd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 18,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "davidbrown",
                text: "I wish I could be there right now. Looks so peaceful.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "davidbrown",
        createdAt: "2022-08-27T09:55:12+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Exploring the vibrant streets of Tokyo. Such a fascinating city!",

        mediaURL:
            "https://images.unsplash.com/photo-1561503972-839d0c56de17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW8lMjBzdHJlZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 32,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "carolwilliams",
                text: "I miss Tokyo! Did you try any local delicacies?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "bobJohnson123",
                text: "Tokyo is definitely on my travel bucket list.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "emmadavis",
        createdAt: "2022-09-14T16:40:05+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content: "Attended an inspiring conference today. Learned so much!",
        mediaURL: "",
        likes: {
            likeCount: 12,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [],
        username: "frankwilson",
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Enjoying a cozy evening by the fireplace. Perfect way to unwind!",
        mediaURL:
            "https://images.unsplash.com/photo-1543393470-b2c833b98dce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXBsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 22,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "alicesmith",
                text: "That looks so inviting! I wish I had a fireplace.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "gracemartinez",
        createdAt: "2022-11-05T19:15:40+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Had an incredible adventure skydiving today. Adrenaline rush like no other!",
        mediaURL:
            "https://images.unsplash.com/photo-1521673252667-e05da380b252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5JTIwZGl2aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 28,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "gracemartinez",
                text: "Wow, I admire your bravery! I could never do that.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "alicesmith",
                text: "That's on my bucket list! How was the experience?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "aayushbatra",
        createdAt: "2022-12-20T12:30:15+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Trying out a new recipe in the kitchen. Hope it turns out delicious!",
        mediaURL:
            "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 15,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "bobjohnson",
                text: "Let us know how it tastes! Share the recipe too, please.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "alicesmith",
        createdAt: "2023-01-10T17:45:22+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Attended a thrilling sports match today. The atmosphere was electric!",
        mediaURL:
            "https://images.unsplash.com/photo-1517008655149-73e6fa31504f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JpY2tldCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 20,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "carolwilliams",
                text: "I can imagine the excitement! Who won?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "bobjohnson",
        createdAt: "2023-05-10T17:45:22+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Exploring ancient ruins on my vacation. So much history to uncover!",
        mediaURL:
            "https://images.unsplash.com/photo-1600023062179-6c6b954698cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5jaWVudCUyMHJ1aW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 30,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "davidbrown",
                text: "I'm fascinated by archaeology! Which site are you visiting?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "emmadavis",
                text: "The ruins look stunning! Enjoy your trip.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "carolwilliams",
        createdAt: "2023-02-15T10:20:35+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Attended an art exhibition today. So many talented artists showcased their work!",
        mediaURL:
            "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwZXhoaWJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        likes: {
            likeCount: 18,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "frankwilson",
                text: "Art exhibitions are always inspiring. Any favorite artwork?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "davidbrown",
        createdAt: "2023-03-08T14:05:55+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Spent the day volunteering at a local shelter. It's fulfilling to help those in need.",
        mediaURL:
            "data:image/jpeg;base64,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",
        likes: {
            likeCount: 16,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "gracemartinez",
                text: "That's wonderful! Volunteering makes a real difference in the community.",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "frankwilson",
                text: "I've been meaning to volunteer too. Which shelter did you visit?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "emmadavis",
        createdAt: "2023-04-20T11:50:40+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Attended a live music concert last night. The energy was incredible!",
        mediaURL:
            "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljJTIwY29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 25,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "emmadavis",
                text: "I wish I could've been there. Who was performing?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "davidbrown",
                text: "Concerts are the best! How was the sound quality?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "frankwilson",
        createdAt: "2023-05-12T19:30:20+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Exploring a picturesque countryside village. So charming and peaceful!",
        mediaURL:
            "https://plus.unsplash.com/premium_photo-1661842948783-66241524d047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291bnRyeXNpZGUlMjB2aWxsYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        likes: {
            likeCount: 20,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "carolwilliams",
                text: "I love countryside getaways. Which village is it?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "bobjohnson",
                text: "The scenery looks breathtaking! Any local attractions to visit?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "gracemartinez",
        createdAt: "2023-06-12T19:30:20+00:00",
        updatedAt: formatDate(),
    },
    {
        _id: uuid(),
        content:
            "Enjoying a fun day at the amusement park. So many thrilling rides!",
        mediaURL:
            "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        likes: {
            likeCount: 36,
            likedBy: [],
            dislikedBy: [],
        },
        comments: [
            {
                _id: uuid(),
                username: "bobjohnson",
                text: "I love amusement parks! Which ride was your favorite?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
            {
                _id: uuid(),
                username: "alicesmith",
                text: "The park looks so lively! Did you try any delicious snacks?",
                votes: {
                    upvotedBy: [],
                    downvotedBy: [],
                },
            },
        ],
        username: "aayushbatra",
        createdAt: "2023-02-12T19:30:20+00:00",
        updatedAt: formatDate(),
    },
];
