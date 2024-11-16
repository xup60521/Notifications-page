import { create } from "zustand";
import { init_data } from "./utils";

type NotificationStore = {
    data: typeof init_data;
    mark_all_as_read: () => void;
    mark_as_read: (id: string) => void;
};
export const useNotification = create<NotificationStore>((set) => ({
    data: init_data,
    mark_all_as_read: () => {
        set(({ data }) => ({
            data: data.map((d) => {
                d.isRead = true;
                return d;
            }),
        }));
    },
    mark_as_read: (id) => {
        set(({ data }) => {
            return {
                data: data.map((d) => {
                    if (d.id === id) {
                        d.isRead = true;
                        return d;
                    }
                    return d;
                }),
            };
        });
    },
}));
