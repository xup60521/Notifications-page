export const init_data = [
    {
        id: "dbe0914b-62c4-4360-ba21-b8278abcf8e0",
        name: "Mark Webber",
        avatar: "/images/avatar-mark-webber.webp",
        created_ago: "1m ago",
        isRead: false,
        react: {
            reacted_to: "My first tournament today!",
        },
    },
    {
        id: "b0fa3ef1-5324-4239-b571-e3f0e1158e9e",
        name: "Angela Gray",
        avatar: "/images/avatar-angela-gray.webp",
        created_ago: "5m ago",
        isRead: false,
        follow: true,
    },
    {
        id: "5063c086-5703-497c-ae77-ce2f1088d31b",
        name: "Jacob Thompson",
        avatar: "/images/avatar-jacob-thompson.webp",
        created_ago: "1 day ago",
        isRead: false,
        join_group: "Chess Club",
    },
    {
        id: "7afac463-56e5-4d94-8686-6b419aa4e88a",
        name: "Rizky Hasanuddin",
        avatar: "/images/avatar-rizky-hasanuddin.webp",
        created_ago: "5 days ago",
        isRead: true,
        private_message:
            "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    },
    {
        id: "e1a643c3-5cd5-4de7-8d56-7e534bf79dfe",
        name: "Kimberly Smith",
        avatar: "/images/avatar-kimberly-smith.webp",
        created_ago: "1 week ago",
        isRead: true,
        comment: {
            photo_url: "/images/image-chess.webp",
        },
    },
    {
        id: "4d56817e-7130-4720-90ab-5cc62cda4137",
        name: "Nathan Peterson",
        avatar: "/images/avatar-nathan-peterson.webp",
        created_ago: "2 weeks ago",
        isRead: true,
        react: {
            reacted_to: "5 end-game strategies to increase your win rate",
        },
    },
    {
        id: "662541b3-8eae-4dc6-8588-79a82abca9e0",
        name: "Anna Kim",
        avatar: "/images/avatar-anna-kim.webp",
        created_ago: "2 weeks ago",
        isRead: true,
        left_group: "Chess Club",
    },
] as Message[];

export type Message = {
    id: string;
    name: string;
    avatar: string;
    created_ago: string;
    isRead: boolean;
    react?: {
        reacted_to: string;
    };
    follow?: boolean;
    join_group?: string;
    left_group?: string;
    private_message?: string;
    comment?: {
        photo_url: string;
    };
};

export const image_paths = [
    "avatar-angela-gray.webp",
    "avatar-anna-kim.webp",
    "avatar-jacob-thompson.webp",
    "avatar-kimberly-smith.webp",
    "avatar-mark-webber.webp",
    "avatar-nathan-peterson.webp",
    "avatar-rizky-hasanuddin.webp",
    "favicon-32x32.png",
    "image-chess.webp",
] as const;
