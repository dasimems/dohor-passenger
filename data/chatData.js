import { FemaleAvatarOne, MaleAvatarOne, MaleAvatarThree, MaleAvatarTwo } from "../assets/images";

export const chats = [
    {
        image: MaleAvatarThree,
        id: 1,
        status: "online",
        name: "Duyil Ayomid",
        messages: [
            {
                type: "sent",
                message: "Hello",
                time: Date.now(),
                status: "read",
            },

            {
                type: "received",
                message: "Hi",
                time: Date.now(),
                status: "unread",
            },

             {
                type: "received",
                message: "How may i help you?",
                time: Date.now(),
                status: "unread",
            },

             {
                type: "received",
                message: "Please let me know how i can be of help",
                time: Date.now(),
                status: "unread",
            }
        ]
    },

    {
        image: MaleAvatarOne,
        id: 2,
        status: "online",
        name: "Seun Ayomid",
        messages: [
            {
                type: "sent",
                message: "Hello",
                time: Date.now(),
                status: "read",
            },

            {
                type: "received",
                message: "Hi",
                time: Date.now(),
                status: "read",
            },

             {
                type: "received",
                message: "Hey what's up",
                time: Date.now(),
                status: "read",
            },

             {
                type: "received",
                message: "Doing great yeah?",
                time: Date.now(),
                status: "read",
            }
        ]
    },

    {
        image: MaleAvatarTwo,
        id: 3,
        status: "",
        name: "Gill Stiff",
        messages: [
            {
                type: "sent",
                message: "Hello",
                time: Date.now(),
                status: "read",
            },

            {
                type: "received",
                message: "Hi",
                time: Date.now(),
                status: "unread",
            },

             {
                type: "received",
                message: "what is happening?",
                time: Date.now(),
                status: "unread",
            },

             {
                type: "received",
                message: "Hmm",
                time: Date.now(),
                status: "unread",
            }
        ]


    },

    {
        image: FemaleAvatarOne,
        id: 4,
        status: "",
        name: "Sarah Glit",
        messages: [
            {
                type: "sent",
                message: "Hello",
                time: Date.now(),
                status: "read",
            },

            {
                type: "received",
                message: "Hi",
                time: Date.now(),
                status: "read",
            },

             {
                type: "received",
                message: "what is happening?",
                time: Date.now(),
                status: "read",
            },

             {
                type: "received",
                message: "who are you please?",
                time: Date.now(),
                status: "read",
            }
        ]

        
    }
]