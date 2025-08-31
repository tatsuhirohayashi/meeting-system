import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { NAVIGATION_LIST } from "./navigation";
import type { Menu } from "../apis/uiPractice";

// Meeting一覧の仮データ
export const MEETING_LIST = {
    APPLICATIONDATE: `6月1日`,
    APPLICANT: `鈴木一郎`,
    CONSULTATIONOVERVIEW: `保険の相談`,
    CONSULTATIONCONTENT: `保険の相談がしたくてご連絡させていただきました。保険の相談がしたくてご連絡させていただきました。保険の相談がしたくてご連絡させていただきました。保険の相談がしたくてご連絡させていただきました。`
};

// サイドバーの基本データ
export const MENUES: Array<Menu> = [
    { to: NAVIGATION_LIST.LOGIN, label: "トースト", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "モーダル", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "ブレッドクラム", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "ページネーション", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "検索バー", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "アコーディオン", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "バッチ", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "セレクトボックス", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "ドロップダウン", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "日付ピッカー", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "チェックボックス", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "ラジオボタン", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "トグルスイッチ", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "スプリットビュー", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "タブ", icon: faHouse },
    { to: NAVIGATION_LIST.LOGIN, label: "コンテキストメニュー", icon: faHouse },
];