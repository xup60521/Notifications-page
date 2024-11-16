import { useNotification } from "./state";
import type { Message } from "./utils";

export default function App() {
    const { data, mark_all_as_read } = useNotification();
    const notReadCount = data.filter((d) => !d.isRead).length;
    return (
        <main
            data-testid="test-app"
            className="w-full font-plus_jakarta min-h-screen bg-n_Very_light_grayish_blue md:px-5 flex justify-center md:py-12"
        >
            <div className="bg-white rounded-lg flex flex-col p-6 w-full md:max-w-[45rem] gap-6">
                <div className="w-full flex gap-2 items-center">
                    <h1 className="font-extrabold text-n_Very_dark_blue text-2xl">
                        Notification
                    </h1>
                    <span className="flex rounded-md bg-p_Blue px-[0.6rem] font-extrabold text-white items-center justify-center">
                        {notReadCount}
                    </span>
                    <div className="flex-grow"></div>
                    <button
                        onMouseDown={mark_all_as_read}
                        className="text-n_Dark_grayish_blue"
                    >
                        Mark all as read
                    </button>
                </div>
                <div className="w-full flex flex-col gap-2">
                    {data.map((notification) => (
                        <Notification notification={notification} />
                    ))}
                </div>
            </div>
        </main>
    );
}

function Notification({ notification }: { notification: Message }) {
    if (notification.react) {
        return (
            <div
                className={`flex p-4 rounded-md gap-4 ${
                    !notification.isRead && "bg-n_Very_light_grayish_blue"
                }`}
            >
                {/* image wrapper */}
                <div className="flex justify-center flex-shrink-0">
                    <img
                        src={notification.avatar}
                        alt={notification.name}
                        className="size-12 rounded-full"
                    />
                </div>
                {/* right section */}
                <div className="flex-grow flex flex-col">
                    <p className="text-n_Dark_grayish_blue font-medium">
                        <DisplayName>{notification.name}</DisplayName>
                        reacted to your recent post
                        <span className="font-bold ml-2 text-n_Dark_grayish_blue">
                            {notification.react.reacted_to}
                        </span>
                        {!notification.isRead && <UnReadDot />}
                    </p>
                    <DisplayTimeAgo>{notification.created_ago}</DisplayTimeAgo>
                </div>
            </div>
        );
    }
    if (notification.follow) {
        return (
            <div
                className={`flex p-4 rounded-md gap-4 ${
                    !notification.isRead && "bg-n_Very_light_grayish_blue"
                }`}
            >
                {/* image wrapper */}
                <div className="flex justify-center flex-shrink-0">
                    <img
                        src={notification.avatar}
                        alt={notification.name}
                        className="size-12 rounded-full"
                    />
                </div>
                {/* right section */}
                <div className="flex-grow flex flex-col">
                    <p className="text-n_Dark_grayish_blue font-medium">
                        <DisplayName>{notification.name}</DisplayName>
                        followed you
                        {!notification.isRead && <UnReadDot />}
                    </p>
                    <DisplayTimeAgo>{notification.created_ago}</DisplayTimeAgo>
                </div>
            </div>
        );
    }
    if (notification.join_group) {
        return (
            <div
                className={`flex p-4 rounded-md gap-4 ${
                    !notification.isRead && "bg-n_Very_light_grayish_blue"
                }`}
            >
                {/* image wrapper */}
                <div className="flex justify-center flex-shrink-0">
                    <img
                        src={notification.avatar}
                        alt={notification.name}
                        className="size-12 rounded-full"
                    />
                </div>
                {/* right section */}
                <div className="flex-grow flex flex-col">
                    <p className="text-n_Dark_grayish_blue font-medium">
                        <DisplayName>{notification.name}</DisplayName>
                        has joined your group
                        <span className="font-extrabold ml-2 text-p_Blue">
                            {notification.join_group}
                            {!notification.isRead && <UnReadDot />}
                        </span>
                    </p>
                    <DisplayTimeAgo>{notification.created_ago}</DisplayTimeAgo>
                </div>
            </div>
        );
    }
    if (notification.private_message) {
        return (
            <div
                className={`flex p-4 rounded-md gap-4 ${
                    !notification.isRead && "bg-n_Very_light_grayish_blue"
                }`}
            >
                {/* image wrapper */}
                <div className="flex justify-center flex-shrink-0">
                    <img
                        src={notification.avatar}
                        alt={notification.name}
                        className="size-12 rounded-full"
                    />
                </div>
                {/* right section */}
                <div className="flex-grow flex flex-col">
                    <p className="text-n_Dark_grayish_blue font-medium">
                        <DisplayName>{notification.name}</DisplayName>
                        sent you a private message
                        {!notification.isRead && <UnReadDot />}
                    </p>
                    <DisplayTimeAgo>{notification.created_ago}</DisplayTimeAgo>
                    <p className="w-full px-4 py-3 mt-2 font-medium rounded text-n_Dark_grayish_blue text-sm text-wrap border-[1px] border-n_Light_grayish_blue_2">
                        {notification.private_message}
                    </p>
                </div>
            </div>
        );
    }
    if (notification.comment) {
        return (
            <div
                className={`flex p-4 rounded-md gap-4 ${
                    !notification.isRead && "bg-n_Very_light_grayish_blue"
                }`}
            >
                {/* image wrapper */}
                <div className="flex justify-center flex-shrink-0">
                    <img
                        src={notification.avatar}
                        alt={notification.name}
                        className="size-12 rounded-full"
                    />
                </div>
                {/* right section */}
                <div className="flex-grow flex flex-col">
                    <p className="text-n_Dark_grayish_blue font-medium">
                        <DisplayName>{notification.name}</DisplayName>
                        commented on your picture
                        {!notification.isRead && <UnReadDot />}
                    </p>
                    <DisplayTimeAgo>{notification.created_ago}</DisplayTimeAgo>
                </div>
                <div className="flex-shrink-0">
                    <img
                        src={notification.comment.photo_url}
                        alt={notification.comment.photo_url}
                        className="size-12"
                    />
                </div>
            </div>
        );
    }
    if (notification.left_group) {
        return (
            <div
                className={`flex p-4 rounded-md gap-4 ${
                    !notification.isRead && "bg-n_Very_light_grayish_blue"
                }`}
            >
                {/* image wrapper */}
                <div className="flex justify-center flex-shrink-0">
                    <img
                        src={notification.avatar}
                        alt={notification.name}
                        className="size-12 rounded-full"
                    />
                </div>
                {/* right section */}
                <div className="flex-grow flex flex-col">
                    <p className="text-n_Dark_grayish_blue font-medium">
                        <DisplayName>{notification.name}</DisplayName>
                        left the group
                        <span className="font-extrabold ml-2 text-p_Blue">
                            {notification.left_group}
                        </span>
                        {!notification.isRead && <UnReadDot />}
                    </p>
                    <DisplayTimeAgo>{notification.created_ago}</DisplayTimeAgo>
                </div>
            </div>
        );
    }
    return (
        <div
            className={`flex p-4 rounded-md gap-4 ${
                !notification.isRead && "bg-n_Very_light_grayish_blue"
            }`}
        >
            {/* image wrapper */}
            <div className="flex justify-center flex-shrink-0">
                <img
                    src={notification.avatar}
                    alt={notification.name}
                    className="size-12 rounded-full"
                />
            </div>
            {/* right section */}
            <div className="flex-grow flex flex-col">
                <p className="text-n_Dark_grayish_blue font-medium">
                    <DisplayName>{notification.name}</DisplayName>
                    {!notification.isRead && <UnReadDot />}
                </p>
                <DisplayTimeAgo>{notification.created_ago}</DisplayTimeAgo>
            </div>
        </div>
    );
}

const DisplayName = ({ children }: { children: React.ReactNode }) => (
    <span className="font-extrabold text-n_Very_dark_blue mr-2">
        {children}
    </span>
);

const DisplayTimeAgo = ({ children }: { children: React.ReactNode }) => (
    <span className="text-n_Grayish_blue text-sm">{children}</span>
);

const UnReadDot = () => (
    <span className="mx-1 rounded-full text-p_Red -translate-y-4">•</span>
);
