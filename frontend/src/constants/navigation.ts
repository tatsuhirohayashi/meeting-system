export const BASE_PATH = "";

/**
 * リンク先一覧
 * 遷移先定義の際に使用
 */
export const NAVIGATION_LIST = {
    LOGIN: `${BASE_PATH}/`,
    SIGNUP: `${BASE_PATH}/signup`,
    TOP: `${BASE_PATH}/meeting`,
    DETAIL: `${BASE_PATH}/meeting/detail/:id`,
    CREATE: `${BASE_PATH}/meeting/create`,
    EDIT: `${BASE_PATH}/meeting/edit/:id`,
};

/**
 * パス一覧
 * 画面遷移時の使用
 */
export const NAVIGATION_PATH = {
    LOGIN: `${BASE_PATH}/`,
    SIGNUP: `${BASE_PATH}/signup`,
    TOP: `${BASE_PATH}/meeting`,
    DETAIL: `${BASE_PATH}/meeting/detail/`,
    CREATE: `${BASE_PATH}/meeting/create`,
    EDIT: `${BASE_PATH}/meeting/edit/`,
};