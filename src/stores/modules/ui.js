export default {
    state: {
        drawer: false,
        notification: {
            display: false,
            text: "notification placeholder text",
            timeout: 3000,
            clazz: 'success'
        }
    },
    getters: {
        DRAWER: state => {
            return state.drawer;
        },
        NOTIFICATION: state => {
            return state.notification;
        }
    },
    mutations: {
        SET_DRAWER: (state, payload) => {
            state.drawer = payload;
        },
        SET_NOTIFICATION: (state, {display, text, clazz}) => {
            state.notification.display = display;
            state.notification.text = text;
            state.notification.clazz = clazz;
        }
    },
    actions: {

    }
}