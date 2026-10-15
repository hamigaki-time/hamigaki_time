const casts = [

    {
        name: "むらかみかん",
        image: "images/cast.1.png",

        description:
            "キャストの紹介文がここに入ります。イベントでは皆さまに癒しの時間をお届けします。",

        birthday:
            "10月1日",

        events: [
            "仮想歯科 はみがきタイム",
            "○○○○"
        ],

        comment:
            "イベントでお会いできるのを楽しみにしています！"
    },


    {
        name: "れいなのさ",
        image: "images/cast.21.png",

        description:
            "れいなのさの紹介文がここに入ります。",

        birthday:
            "3月2日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "ゆずも",
        image: "images/cast.3.png",

        description:
            "ゆずもの紹介文がここに入ります。",

        birthday:
            "2月25日",

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
        image: "images/cast.4.png",

        description:
            "こいしいろはの紹介文がここに入ります。",

        birthday:
            "9月14日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "やしろのあ",
        image: "images/cast.5.png",

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
        image: "images/cast.6.png",

        description:
            "キャスト06の紹介文がここに入ります。",

        birthday:
            "4月2日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "ひーくん",
        image: "images/cast.7.png",

        description:
            "キャスト07の紹介文がここに入ります。",

        birthday:
            "6月13日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "レイブン",
        image: "images/cast.8.png",

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
        image: "images/cast.9.png",

        description:
            "キャスト09の紹介文がここに入ります。",

        birthday:
            "12月23日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "ちせ",
        image: "images/cast.10.png",

        description:
            "キャスト10の紹介文がここに入ります。",

        birthday:
            "3月12日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


    {
        name: "ゆみもきゅ",
        image: "images/cast.11.png",

        description:
            "キャスト11の紹介文がここに入ります。",

        birthday:
            "11月8日",

        events: [
            "仮想歯科 はみがきタイム"
        ],

        comment:
            "よろしくお願いします！"
    },


{
    name: "うしお",
    image: "images/cast.12.png",

    description:
        "キャスト12の紹介文がここに入ります。",

    birthday:
        "10月15日",

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

const characterImage =
    document.querySelector("#detail-character-image");

if (characterImage && cast.image) {
    characterImage.src = cast.image;
    characterImage.alt = cast.name + "の立ち絵";
}


   
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