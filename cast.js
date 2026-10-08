const casts = [

    {
        name: "むらかみかん",

        description:
            "キャストの紹介文がここに入ります。イベントでは皆さまに癒しの時間をお届けします。",

        birthday:
            "1月1日",

        events: [
            "仮想歯科 はみがきタイム",
            "○○○○"
        ],

        comment:
            "イベントでお会いできるのを楽しみにしています！"
    },


    {
        name: "れいなのさ",

        description:
            "れいなのさの紹介文がここに入ります。",

        birthday:
            "2月15日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "ゆずも",

        description:
            "ゆずもの紹介文がここに入ります。",

        birthday:
            "3月20日",

        events: [
            "仮想歯科 はみがきタイム",
            "○○○○",
            "△△△△"
        ],

        comment:
            "皆さまにお会いできるのを楽しみにしています！"
    },


    {
        name: "こいしいろは",

        description:
            "こいしいろはの紹介文がここに入ります。",

        birthday:
            "4月10日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "やしろのあ",

        description:
            "やしろのあの紹介文がここに入ります。",

        birthday:
            "5月5日",

        events: [
            "仮想歯科 はみがきタイム",
            "○○○○"
        ],

        comment:
            "楽しい時間をお届けします！"
    },


    {
        name: "ちふゆ",

        description:
            "キャスト06の紹介文がここに入ります。",

        birthday:
            "6月6日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "ひーくん",

        description:
            "キャスト07の紹介文がここに入ります。",

        birthday:
            "7月7日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "レイブン",

        description:
            "キャスト08の紹介文がここに入ります。",

        birthday:
            "8月8日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "くろな",

        description:
            "キャスト09の紹介文がここに入ります。",

        birthday:
            "9月9日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "ちせ",

        description:
            "キャスト10の紹介文がここに入ります。",

        birthday:
            "10月10日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "ゆみもきゅ",

        description:
            "キャスト11の紹介文がここに入ります。",

        birthday:
            "11月11日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


{
    name: "うしお",

    description:
        "キャスト12の紹介文がここに入ります。",

    birthday:
        "12月12日",

    events: [
        "仮想歯科 はみがきタイム"
    ],

    comment:
        "よろしくお願いします！"
}

];


/* URLからキャスト番号を取得 */

const params = new URLSearchParams(window.location.search);

let currentCast = Number(params.get("id")) || 1;


/* 0～10の番号に変換 */

currentCast = currentCast - 1;


/* キャスト情報を表示 */

function showCast() {

    const cast = casts[currentCast];

    if (!cast) {
        currentCast = 0;
        return showCast();
    }


    document.querySelector("#detail-number").textContent =
        `CAST ${String(currentCast + 1).padStart(2, "0")}`;

    document.querySelector("#detail-name").textContent =
        cast.name;

   
    document.querySelector("#detail-description").textContent =
    cast.description;


document.querySelector("#detail-birthday").textContent =
    cast.birthday;


document.querySelector("#detail-info-comment").textContent =
    cast.comment;


/* 所属イベント */

const eventList =
    document.querySelector("#detail-events");

eventList.innerHTML = "";


cast.events.forEach(function(eventName) {

    const li = document.createElement("li");

    li.textContent = eventName;

    eventList.appendChild(li);

});
    /* URLも変更 */

    history.replaceState(
        null,
        "",
        `cast.html?id=${currentCast + 1}`
    );
}


/* 前のキャスト */

document.querySelector("#detail-prev").addEventListener(
    "click",
    function () {

        currentCast--;

        if (currentCast < 0) {
            currentCast = casts.length - 1;
        }

        showCast();
    }
);


/* 次のキャスト */

document.querySelector("#detail-next").addEventListener(
    "click",
    function () {

        currentCast++;

        if (currentCast >= casts.length) {
            currentCast = 0;
        }

        showCast();
    }
);


/* 最初に表示 */

showCast();