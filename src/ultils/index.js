// eslint-disable-next-line import/prefer-default-export
export const reprint = async (component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.print();
    }
    if (component.afterprint) await component.afterprint();
};
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
// eslint-disable-next-line consistent-return
export const getLocalStorage = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
};