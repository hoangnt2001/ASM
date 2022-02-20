// eslint-disable-next-line import/prefer-default-export
export const reprint = async (component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.print();
    }
    if (component.afterprint) await component.afterprint();
};