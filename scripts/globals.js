const dictionary = {
  en: {
    all: 'All',
    allTrophies: 'All Trophies',
    aZ: 'A-Z',
    false: 'false',
    game: 'Game',
    language: 'Language: ',
    name: 'Name',
    normal: 'Normal',
    smash: 'Smash',
    sortBy: 'Sort by: ',
    speedrunTracker: 'Speedrun Tracker',
    superSmashBrosMelee: 'Super Smash Bros. Melee',
    trophy: 'Trophy',
    trophySize: 'Trophy Size: ',
    true: 'true'
  },
  jp: {
    all: '全て',
    allTrophies: '全てフィギュア',
    aZ: 'あいうえお',
    false: '偽',
    game: 'タイトル',
    language: '言語： ',
    name: '名前',
    normal: '通常',
    smash: 'スマッシュ',
    sortBy: '並び替え： ',
    speedrunTracker: 'スピードラントラッカー',
    superSmashBrosMelee: '大乱闘スマッシュブラザーズＤＸ',
    trophy: 'フィギュア',
    trophySize: 'フィギュアサイズ： ',
    true: '真'
  }
};

window.httpVueLoader = function (componentPath) {
  const options = {
    moduleCache: {
      vue: Vue
    },
    getFile: async function (url) {
      const cacheBust = (new Date()).getTime();
      const result = await fetch(url + '?t=' + cacheBust);
      if (!result.ok) {
        throw Object.assign(new Error(result.statusText + ' ' + url), { result });
      }
      return {
        getContentData: (asBinary) => {
          if (asBinary) {
            return result.arrayBuffer();
          }
          return result.text();
        }
      }
    },
    addStyle: function (textContent) {
      const style = Object.assign(document.createElement('style'), { textContent });
      const ref = document.head.getElementsByTagName('style')[0] || null;
      document.head.insertBefore(style, ref);
    },
  }

  return Vue.defineAsyncComponent(function (){
    return window['vue3-sfc-loader'].loadModule(componentPath, options);
  });
}

window.generateTrophyData = function () {
  return [
    {
      id: 1,
      name: 'Mario',
      nameJP: 'マリオ',
      smash: false,
      imageIndex: 0,
      sortBy: {
        normal: 1,
        game: 1,
        aZ: 151,
        aZjp: 234
      }
    },
    {
      id: 2,
      name: 'Mario',
      nameJP: 'マリオ',
      smash: true,
      imageIndex: 1,
      sortBy: {
        normal: 2,
        game: 223,
        aZ: 152,
        aZjp: 235
      }
    },
    {
      id: 3,
      name: 'Mario',
      nameJP: 'マリオ',
      smash: true,
      imageIndex: 2,
      sortBy: {
        normal: 3,
        game: 224,
        aZ: 153,
        aZjp: 236
      }
    },
    {
      id: 4,
      name: 'Donkey Kong',
      nameJP: 'ドンキーコング',
      smash: false,
      imageIndex: 3,
      sortBy: {
        normal: 4,
        game: 48,
        aZ: 53,
        aZjp: 147
      }
    },
    {
      id: 5,
      name: 'Donkey Kong',
      nameJP: 'ドンキーコング',
      smash: true,
      imageIndex: 4,
      sortBy: {
        normal: 5,
        game: 227,
        aZ: 54,
        aZjp: 148
      }
    },
    {
      id: 6,
      name: 'Donkey Kong',
      nameJP: 'ドンキーコング',
      smash: true,
      imageIndex: 5,
      sortBy: {
        normal: 6,
        game: 228,
        aZ: 55,
        aZjp: 149
      }
    },
    {
      id: 7,
      name: 'Link',
      nameJP: 'リンク',
      smash: false,
      imageIndex: 6,
      sortBy: {
        normal: 7,
        game: 56,
        aZ: 136,
        aZjp: 277
      }
    },
    {
      id: 8,
      name: 'Link',
      nameJP: 'リンク',
      smash: true,
      imageIndex: 7,
      sortBy: {
        normal: 8,
        game: 229,
        aZ: 137,
        aZjp: 278
      }
    },
    {
      id: 9,
      name: 'Link',
      nameJP: 'リンク',
      smash: true,
      imageIndex: 8,
      sortBy: {
        normal: 9,
        game: 230,
        aZ: 138,
        aZjp: 279
      }
    },
    {
      id: 10,
      name: 'Samus Aran',
      nameJP: 'サムス',
      smash: false,
      imageIndex: 9,
      sortBy: {
        normal: 10,
        game: 93,
        aZ: 232,
        aZjp: 79
      }
    },
    {
      id: 11,
      name: 'Samus Aran',
      nameJP: 'サムス',
      smash: true,
      imageIndex: 10,
      sortBy: {
        normal: 11,
        game: 235,
        aZ: 233,
        aZjp: 80
      }
    },
    {
      id: 12,
      name: 'Samus Aran',
      nameJP: 'サムス',
      smash: true,
      imageIndex: 11,
      sortBy: {
        normal: 12,
        game: 236,
        aZ: 234,
        aZjp: 81
      }
    },
    {
      id: 13,
      name: 'Yoshi',
      nameJP: 'ヨッシー',
      smash: false,
      imageIndex: 12,
      sortBy: {
        normal: 13,
        game: 42,
        aZ: 285,
        aZjp: 263
      }
    },
    {
      id: 14,
      name: 'Yoshi',
      nameJP: 'ヨッシー',
      smash: true,
      imageIndex: 13,
      sortBy: {
        normal: 14,
        game: 225,
        aZ: 286,
        aZjp: 264
      }
    },
    {
      id: 15,
      name: 'Yoshi',
      nameJP: 'ヨッシー',
      smash: true,
      imageIndex: 14,
      sortBy: {
        normal: 15,
        game: 226,
        aZ: 287,
        aZjp: 265
      }
    },
    {
      id: 16,
      name: 'Kirby',
      nameJP: 'カービィ',
      smash: false,
      imageIndex: 15,
      sortBy: {
        normal: 16,
        game: 101,
        aZ: 120,
        aZjp: 26
      }
    },
    {
      id: 17,
      name: 'Kirby',
      nameJP: 'カービィ',
      smash: true,
      imageIndex: 16,
      sortBy: {
        normal: 17,
        game: 237,
        aZ: 121,
        aZjp: 27
      }
    },
    {
      id: 18,
      name: 'Kirby',
      nameJP: 'カービィ',
      smash: true,
      imageIndex: 17,
      sortBy: {
        normal: 18,
        game: 238,
        aZ: 122,
        aZjp: 28
      }
    },
    {
      id: 19,
      name: 'Fox McCloud',
      nameJP: 'フォックス',
      smash: false,
      imageIndex: 18,
      sortBy: {
        normal: 19,
        game: 83,
        aZ: 84,
        aZjp: 199
      }
    },
    {
      id: 20,
      name: 'Fox McCloud',
      nameJP: 'フォックス',
      smash: true,
      imageIndex: 19,
      sortBy: {
        normal: 20,
        game: 233,
        aZ: 85,
        aZjp: 200
      }
    },
    {
      id: 21,
      name: 'Fox McCloud',
      nameJP: 'フォックス',
      smash: true,
      imageIndex: 20,
      sortBy: {
        normal: 21,
        game: 234,
        aZ: 86,
        aZjp: 201
      }
    },
    {
      id: 22,
      name: 'Pikachu',
      nameJP: 'ピカチュウ',
      smash: false,
      imageIndex: 21,
      sortBy: {
        normal: 22,
        game: 135,
        aZ: 201,
        aZjp: 182
      }
    },
    {
      id: 23,
      name: 'Pikachu',
      nameJP: 'ピカチュウ',
      smash: true,
      imageIndex: 22,
      sortBy: {
        normal: 23,
        game: 241,
        aZ: 202,
        aZjp: 183
      }
    },
    {
      id: 24,
      name: 'Pikachu',
      nameJP: 'ピカチュウ',
      smash: true,
      imageIndex: 23,
      sortBy: {
        normal: 24,
        game: 242,
        aZ: 203,
        aZjp: 184
      }
    },
    {
      id: 25,
      name: 'Ness',
      nameJP: 'ネス',
      smash: false,
      imageIndex: 24,
      sortBy: {
        normal: 25,
        game: 121,
        aZ: 183,
        aZjp: 158
      }
    },
    {
      id: 26,
      name: 'Ness',
      nameJP: 'ネス',
      smash: true,
      imageIndex: 25,
      sortBy: {
        normal: 26,
        game: 239,
        aZ: 184,
        aZjp: 159
      }
    },
    {
      id: 27,
      name: 'Ness',
      nameJP: 'ネス',
      smash: true,
      imageIndex: 26,
      sortBy: {
        normal: 27,
        game: 240,
        aZ: 185,
        aZjp: 160
      }
    },
    {
      id: 28,
      name: 'Capt. Falcon',
      nameJP: 'キャプテン・ファルコン',
      smash: false,
      imageIndex: 27,
      sortBy: {
        normal: 28,
        game: 76,
        aZ: 32,
        aZjp: 48
      }
    },
    {
      id: 29,
      name: 'Capt. Falcon',
      nameJP: 'キャプテン・ファルコン',
      smash: true,
      imageIndex: 28,
      sortBy: {
        normal: 29,
        game: 231,
        aZ: 33,
        aZjp: 49
      }
    },
    {
      id: 30,
      name: 'Capt. Falcon',
      nameJP: 'キャプテン・ファルコン',
      smash: true,
      imageIndex: 29,
      sortBy: {
        normal: 30,
        game: 232,
        aZ: 34,
        aZjp: 50
      }
    },
    {
      id: 31,
      name: 'Bowser',
      nameJP: 'クッパ',
      smash: false,
      imageIndex: 30,
      sortBy: {
        normal: 31,
        game: 10,
        aZ: 23,
        aZjp: 58
      }
    },
    {
      id: 32,
      name: 'Bowser',
      nameJP: 'クッパ',
      smash: true,
      imageIndex: 31,
      sortBy: {
        normal: 32,
        game: 247,
        aZ: 24,
        aZjp: 59
      }
    },
    {
      id: 33,
      name: 'Bowser',
      nameJP: 'クッパ',
      smash: true,
      imageIndex: 32,
      sortBy: {
        normal: 33,
        game: 248,
        aZ: 25,
        aZjp: 60
      }
    },
    {
      id: 34,
      name: 'Peach',
      nameJP: 'ピーチ',
      smash: false,
      imageIndex: 33,
      sortBy: {
        normal: 34,
        game: 7,
        aZ: 193,
        aZjp: 177
      }
    },
    {
      id: 35,
      name: 'Peach',
      nameJP: 'ピーチ',
      smash: true,
      imageIndex: 34,
      sortBy: {
        normal: 35,
        game: 249,
        aZ: 194,
        aZjp: 178
      }
    },
    {
      id: 36,
      name: 'Peach',
      nameJP: 'ピーチ',
      smash: true,
      imageIndex: 35,
      sortBy: {
        normal: 36,
        game: 250,
        aZ: 195,
        aZjp: 179
      }
    },
    {
      id: 37,
      name: 'Ice Climbers',
      nameJP: 'アイスクライマー',
      smash: false,
      imageIndex: 36,
      sortBy: {
        normal: 37,
        game: 181,
        aZ: 108,
        aZjp: 8
      }
    },
    {
      id: 38,
      name: 'Ice Climbers',
      nameJP: 'アイスクライマー',
      smash: true,
      imageIndex: 37,
      sortBy: {
        normal: 38,
        game: 259,
        aZ: 109,
        aZjp: 9
      }
    },
    {
      id: 39,
      name: 'Ice Climbers',
      nameJP: 'アイスクライマー',
      smash: true,
      imageIndex: 38,
      sortBy: {
        normal: 39,
        game: 260,
        aZ: 110,
        aZjp: 10
      }
    },
    {
      id: 40,
      name: 'Zelda',
      nameJP: 'ゼルダ',
      smash: false,
      imageIndex: 39,
      sortBy: {
        normal: 40,
        game: 58,
        aZ: 292,
        aZjp: 110
      }
    },
    {
      id: 41,
      name: 'Zelda',
      nameJP: 'ゼルダ',
      smash: true,
      imageIndex: 40,
      sortBy: {
        normal: 41,
        game: 251,
        aZ: 293,
        aZjp: 111
      }
    },
    {
      id: 42,
      name: 'Zelda',
      nameJP: 'ゼルダ',
      smash: true,
      imageIndex: 41,
      sortBy: {
        normal: 42,
        game: 252,
        aZ: 294,
        aZjp: 112
      }
    },
    {
      id: 43,
      name: 'Sheik',
      nameJP: 'シーク',
      smash: false,
      imageIndex: 42,
      sortBy: {
        normal: 43,
        game: 59,
        aZ: 240,
        aZjp: 85
      }
    },
    {
      id: 44,
      name: 'Sheik',
      nameJP: 'シーク',
      smash: true,
      imageIndex: 43,
      sortBy: {
        normal: 44,
        game: 253,
        aZ: 241,
        aZjp: 86
      }
    },
    {
      id: 45,
      name: 'Sheik',
      nameJP: 'シーク',
      smash: true,
      imageIndex: 44,
      sortBy: {
        normal: 45,
        game: 254,
        aZ: 242,
        aZjp: 87
      }
    },
    {
      id: 46,
      name: 'Luigi',
      nameJP: 'ルイージ',
      smash: false,
      imageIndex: 45,
      sortBy: {
        normal: 46,
        game: 8,
        aZ: 143,
        aZjp: 280
      }
    },
    {
      id: 47,
      name: 'Luigi',
      nameJP: 'ルイージ',
      smash: true,
      imageIndex: 46,
      sortBy: {
        normal: 47,
        game: 245,
        aZ: 144,
        aZjp: 281
      }
    },
    {
      id: 48,
      name: 'Luigi',
      nameJP: 'ルイージ',
      smash: true,
      imageIndex: 47,
      sortBy: {
        normal: 48,
        game: 246,
        aZ: 145,
        aZjp: 282
      }
    },
    {
      id: 49,
      name: 'Jigglypuff',
      nameJP: 'プリン',
      smash: false,
      imageIndex: 48,
      sortBy: {
        normal: 49,
        game: 137,
        aZ: 113,
        aZjp: 209
      }
    },
    {
      id: 50,
      name: 'Jigglypuff',
      nameJP: 'プリン',
      smash: true,
      imageIndex: 49,
      sortBy: {
        normal: 50,
        game: 243,
        aZ: 114,
        aZjp: 210
      }
    },
    {
      id: 51,
      name: 'Jigglypuff',
      nameJP: 'プリン',
      smash: true,
      imageIndex: 50,
      sortBy: {
        normal: 51,
        game: 244,
        aZ: 115,
        aZjp: 211
      }
    },
    {
      id: 52,
      name: 'Mewtwo',
      nameJP: 'ミュウツー',
      smash: false,
      imageIndex: 51,
      sortBy: {
        normal: 52,
        game: 150,
        aZ: 169,
        aZjp: 250
      }
    },
    {
      id: 53,
      name: 'Mewtwo',
      nameJP: 'ミュウツー',
      smash: true,
      imageIndex: 52,
      sortBy: {
        normal: 53,
        game: 257,
        aZ: 170,
        aZjp: 251
      }
    },
    {
      id: 54,
      name: 'Mewtwo',
      nameJP: 'ミュウツー',
      smash: true,
      imageIndex: 53,
      sortBy: {
        normal: 54,
        game: 258,
        aZ: 171,
        aZjp: 252
      }
    },
    {
      id: 55,
      name: 'Marth',
      nameJP: 'マルス',
      smash: false,
      imageIndex: 54,
      sortBy: {
        normal: 55,
        game: 128,
        aZ: 155,
        aZjp: 240
      }
    },
    {
      id: 56,
      name: 'Marth',
      nameJP: 'マルス',
      smash: true,
      imageIndex: 55,
      sortBy: {
        normal: 56,
        game: 255,
        aZ: 156,
        aZjp: 241
      }
    },
    {
      id: 57,
      name: 'Marth',
      nameJP: 'マルス',
      smash: true,
      imageIndex: 56,
      sortBy: {
        normal: 57,
        game: 256,
        aZ: 157,
        aZjp: 242
      }
    },
    {
      id: 58,
      name: 'Mr. Game & Watch',
      nameJP: 'Mr.ゲーム＆ウォッチ',
      smash: false,
      imageIndex: 57,
      sortBy: {
        normal: 58,
        game: 219,
        aZ: 177,
        aZjp: 3
      }
    },
    {
      id: 59,
      name: 'Mr. Game & Watch',
      nameJP: 'Mr.ゲーム＆ウォッチ',
      smash: true,
      imageIndex: 58,
      sortBy: {
        normal: 59,
        game: 261,
        aZ: 178,
        aZjp: 4
      }
    },
    {
      id: 60,
      name: 'Mr. Game & Watch',
      nameJP: 'Mr.ゲーム＆ウォッチ',
      smash: true,
      imageIndex: 59,
      sortBy: {
        normal: 60,
        game: 262,
        aZ: 179,
        aZjp: 5
      }
    },
    {
      id: 61,
      name: 'Dr. Mario',
      nameJP: 'ドクターマリオ',
      smash: false,
      imageIndex: 60,
      sortBy: {
        normal: 61,
        game: 2,
        aZ: 57,
        aZjp: 140
      }
    },
    {
      id: 62,
      name: 'Dr. Mario',
      nameJP: 'ドクターマリオ',
      smash: true,
      imageIndex: 61,
      sortBy: {
        normal: 62,
        game: 263,
        aZ: 58,
        aZjp: 141
      }
    },
    {
      id: 63,
      name: 'Dr. Mario',
      nameJP: 'ドクターマリオ',
      smash: true,
      imageIndex: 62,
      sortBy: {
        normal: 63,
        game: 264,
        aZ: 59,
        aZjp: 142
      }
    },
    {
      id: 64,
      name: 'Ganondorf',
      nameJP: 'ガノンドロフ',
      smash: false,
      imageIndex: 63,
      sortBy: {
        normal: 64,
        game: 63,
        aZ: 90,
        aZjp: 41
      }
    },
    {
      id: 65,
      name: 'Ganondorf',
      nameJP: 'ガノンドロフ',
      smash: true,
      imageIndex: 64,
      sortBy: {
        normal: 65,
        game: 273,
        aZ: 91,
        aZjp: 42
      }
    },
    {
      id: 66,
      name: 'Ganondorf',
      nameJP: 'ガノンドロフ',
      smash: true,
      imageIndex: 65,
      sortBy: {
        normal: 66,
        game: 274,
        aZ: 92,
        aZjp: 43
      }
    },
    {
      id: 67,
      name: 'Falco Lombardi',
      nameJP: 'ファルコ',
      smash: false,
      imageIndex: 66,
      sortBy: {
        normal: 67,
        game: 84,
        aZ: 69,
        aZjp: 195
      }
    },
    {
      id: 68,
      name: 'Falco Lombardi',
      nameJP: 'ファルコ',
      smash: true,
      imageIndex: 67,
      sortBy: {
        normal: 68,
        game: 267,
        aZ: 70,
        aZjp: 196
      }
    },
    {
      id: 69,
      name: 'Falco Lombardi',
      nameJP: 'ファルコ',
      smash: true,
      imageIndex: 68,
      sortBy: {
        normal: 69,
        game: 268,
        aZ: 71,
        aZjp: 197
      }
    },
    {
      id: 70,
      name: 'Young Link',
      nameJP: 'こどもリンク',
      smash: false,
      imageIndex: 69,
      sortBy: {
        normal: 70,
        game: 57,
        aZ: 288,
        aZjp: 75
      }
    },
    {
      id: 71,
      name: 'Young Link',
      nameJP: 'こどもリンク',
      smash: true,
      imageIndex: 70,
      sortBy: {
        normal: 71,
        game: 265,
        aZ: 289,
        aZjp: 76
      }
    },
    {
      id: 72,
      name: 'Young Link',
      nameJP: 'こどもリンク',
      smash: true,
      imageIndex: 71,
      sortBy: {
        normal: 72,
        game: 266,
        aZ: 290,
        aZjp: 77
      }
    },
    {
      id: 73,
      name: 'Pichu',
      nameJP: 'ピチュー',
      smash: false,
      imageIndex: 72,
      sortBy: {
        normal: 73,
        game: 156,
        aZ: 197,
        aZjp: 186
      }
    },
    {
      id: 74,
      name: 'Pichu',
      nameJP: 'ピチュー',
      smash: true,
      imageIndex: 73,
      sortBy: {
        normal: 74,
        game: 269,
        aZ: 198,
        aZjp: 187
      }
    },
    {
      id: 75,
      name: 'Pichu',
      nameJP: 'ピチュー',
      smash: true,
      imageIndex: 74,
      sortBy: {
        normal: 75,
        game: 270,
        aZ: 199,
        aZjp: 188
      }
    },
    {
      id: 76,
      name: 'Roy',
      nameJP: 'ロイ',
      smash: false,
      imageIndex: 75,
      sortBy: {
        normal: 76,
        game: 129,
        aZ: 227,
        aZjp: 287
      }
    },
    {
      id: 77,
      name: 'Roy',
      nameJP: 'ロイ',
      smash: true,
      imageIndex: 76,
      sortBy: {
        normal: 77,
        game: 271,
        aZ: 228,
        aZjp: 288
      }
    },
    {
      id: 78,
      name: 'Roy',
      nameJP: 'ロイ',
      smash: true,
      imageIndex: 77,
      sortBy: {
        normal: 78,
        game: 272,
        aZ: 229,
        aZjp: 289
      }
    },
    {
      id: 79,
      name: 'Male Wire Frame',
      nameJP: '謎のザコ敵軍団♂',
      smash: false,
      imageIndex: 78,
      sortBy: {
        normal: 79,
        game: 290,
        aZ: 148,
        aZjp: 153
      }
    },
    {
      id: 80,
      name: 'Female Wire Frame',
      nameJP: '謎のザコ敵軍団♀',
      smash: false,
      imageIndex: 79,
      sortBy: {
        normal: 80,
        game: 291,
        aZ: 74,
        aZjp: 154
      }
    },
    {
      id: 81,
      name: 'Fighting Wire Frames',
      nameJP: '謎のザコ敵軍団♂♀',
      smash: false,
      imageIndex: 80,
      sortBy: {
        normal: 81,
        game: 292,
        aZ: 76,
        aZjp: 155
      }
    },
    {
      id: 82,
      name: 'Giga Bowser',
      nameJP: 'ギガクッパ',
      smash: false,
      imageIndex: 81,
      sortBy: {
        normal: 82,
        game: 293,
        aZ: 94,
        aZjp: 56
      }
    },
    {
      id: 83,
      name: 'Master Hand',
      nameJP: 'マスターハンド',
      smash: false,
      imageIndex: 82,
      sortBy: {
        normal: 83,
        game: 294,
        aZ: 159,
        aZjp: 231
      }
    },
    {
      id: 84,
      name: 'Crazy Hand',
      nameJP: 'クレイジーハンド',
      smash: false,
      imageIndex: 83,
      sortBy: {
        normal: 84,
        game: 295,
        aZ: 45,
        aZjp: 64
      }
    },
    {
      id: 85,
      name: 'Food',
      nameJP: 'たべもの',
      smash: false,
      imageIndex: 84,
      sortBy: {
        normal: 85,
        game: 281,
        aZ: 81,
        aZjp: 118
      }
    },
    {
      id: 86,
      name: 'Maxim Tomato',
      nameJP: 'マキシムトマト',
      smash: false,
      imageIndex: 85,
      sortBy: {
        normal: 86,
        game: 116,
        aZ: 161,
        aZjp: 227
      }
    },
    {
      id: 87,
      name: 'Heart Container',
      nameJP: 'ハートのうつわ',
      smash: false,
      imageIndex: 86,
      sortBy: {
        normal: 87,
        game: 67,
        aZ: 103,
        aZjp: 162
      }
    },
    {
      id: 88,
      name: 'Warp Star',
      nameJP: 'ワープスター',
      smash: false,
      imageIndex: 87,
      sortBy: {
        normal: 88,
        game: 118,
        aZ: 280,
        aZjp: 291
      }
    },
    {
      id: 89,
      name: 'Ray Gun',
      nameJP: 'レイガン',
      smash: false,
      imageIndex: 88,
      sortBy: {
        normal: 89,
        game: 285,
        aZ: 221,
        aZjp: 286
      }
    },
    {
      id: 90,
      name: 'Super Scope',
      nameJP: 'スーパースコープ',
      smash: false,
      imageIndex: 89,
      sortBy: {
        normal: 90,
        game: 221,
        aZ: 258,
        aZjp: 95
      }
    },
    {
      id: 91,
      name: 'Fire Flower',
      nameJP: 'ファイアフラワー',
      smash: false,
      imageIndex: 90,
      sortBy: {
        normal: 91,
        game: 30,
        aZ: 78,
        aZjp: 192
      }
    },
    {
      id: 92,
      name: 'Lip\'s Stick',
      nameJP: 'リップステッキ',
      smash: false,
      imageIndex: 91,
      sortBy: {
        normal: 92,
        game: 213,
        aZ: 139,
        aZjp: 275
      }
    },
    {
      id: 93,
      name: 'Star Rod',
      nameJP: 'スターロッド',
      smash: false,
      imageIndex: 92,
      sortBy: {
        normal: 93,
        game: 117,
        aZ: 252,
        aZjp: 101
      }
    },
    {
      id: 94,
      name: 'Beam Sword',
      nameJP: 'ビームソード',
      smash: false,
      imageIndex: 93,
      sortBy: {
        normal: 94,
        game: 276,
        aZ: 17,
        aZjp: 176
      }
    },
    {
      id: 95,
      name: 'Home-Run Bat',
      nameJP: 'ホームランバット',
      smash: false,
      imageIndex: 94,
      sortBy: {
        normal: 95,
        game: 283,
        aZ: 106,
        aZjp: 219
      }
    },
    {
      id: 96,
      name: 'Fan',
      nameJP: 'はりせん',
      smash: false,
      imageIndex: 95,
      sortBy: {
        normal: 96,
        game: 282,
        aZ: 73,
        aZjp: 167
      }
    },
    {
      id: 97,
      name: 'Hammer',
      nameJP: 'ハンマー',
      smash: false,
      imageIndex: 96,
      sortBy: {
        normal: 97,
        game: 55,
        aZ: 101,
        aZjp: 168
      }
    },
    {
      id: 98,
      name: 'Green Shell',
      nameJP: 'ミドリのこうら',
      smash: false,
      imageIndex: 97,
      sortBy: {
        normal: 98,
        game: 36,
        aZ: 100,
        aZjp: 246
      }
    },
    {
      id: 99,
      name: 'Red Shell',
      nameJP: 'アカのこうら',
      smash: false,
      imageIndex: 98,
      sortBy: {
        normal: 99,
        game: 37,
        aZ: 224,
        aZjp: 11
      }
    },
    {
      id: 100,
      name: 'Flipper',
      nameJP: 'グルグル',
      smash: false,
      imageIndex: 99,
      sortBy: {
        normal: 100,
        game: 208,
        aZ: 80,
        aZjp: 68
      }
    },
    {
      id: 101,
      name: 'Freezie',
      nameJP: 'フリーザー（マリオ）',
      smash: false,
      imageIndex: 100,
      sortBy: {
        normal: 101,
        game: 35,
        aZ: 87,
        aZjp: 204
      }
    },
    {
      id: 102,
      name: 'Mr. Saturn',
      nameJP: 'どせいさん',
      smash: false,
      imageIndex: 101,
      sortBy: {
        normal: 102,
        game: 125,
        aZ: 181,
        aZjp: 144
      }
    },
    {
      id: 103,
      name: 'Bob-omb',
      nameJP: 'ボム兵',
      smash: false,
      imageIndex: 102,
      sortBy: {
        normal: 103,
        game: 16,
        aZ: 21,
        aZjp: 223
      }
    },
    {
      id: 104,
      name: 'Motion-Sensor Bomb',
      nameJP: 'センサー爆弾',
      smash: false,
      imageIndex: 103,
      sortBy: {
        normal: 104,
        game: 195,
        aZ: 176,
        aZjp: 107
      }
    },
    {
      id: 105,
      name: 'Super Mushroom',
      nameJP: 'スーパーキノコ',
      smash: false,
      imageIndex: 104,
      sortBy: {
        normal: 106,
        game: 28,
        aZ: 257,
        aZjp: 94
      }
    },
    {
      id: 106,
      name: 'Poison Mushroom',
      nameJP: '毒キノコ',
      smash: false,
      imageIndex: 105,
      sortBy: {
        normal: 107,
        game: 29,
        aZ: 207,
        aZjp: 139
      }
    },
    {
      id: 107,
      name: 'Starman',
      nameJP: 'スーパースター',
      smash: false,
      imageIndex: 106,
      sortBy: {
        normal: 108,
        game: 33,
        aZ: 250,
        aZjp: 96
      }
    },
    {
      id: 108,
      name: 'Parasol',
      nameJP: 'パラソル',
      smash: false,
      imageIndex: 107,
      sortBy: {
        normal: 109,
        game: 119,
        aZ: 190,
        aZjp: 172
      }
    },
    {
      id: 109,
      name: 'Screw Attack',
      nameJP: 'スクリューアタック',
      smash: false,
      imageIndex: 108,
      sortBy: {
        normal: 110,
        game: 100,
        aZ: 239,
        aZjp: 98
      }
    },
    {
      id: 110,
      name: 'Metal Box',
      nameJP: '緑ブロック',
      smash: false,
      imageIndex: 109,
      sortBy: {
        normal: 111,
        game: 32,
        aZ: 165,
        aZjp: 247
      }
    },
    {
      id: 111,
      name: 'Bunny Hood',
      nameJP: 'ウサギずきん',
      smash: false,
      imageIndex: 110,
      sortBy: {
        normal: 112,
        game: 70,
        aZ: 29,
        aZjp: 19
      }
    },
    {
      id: 112,
      name: 'Cloaking Device',
      nameJP: 'スパイクローク',
      smash: false,
      imageIndex: 111,
      sortBy: {
        normal: 113,
        game: 197,
        aZ: 42,
        aZjp: 103
      }
    },
    {
      id: 113,
      name: 'Barrel Cannon',
      nameJP: 'タル大砲',
      smash: false,
      imageIndex: 112,
      sortBy: {
        normal: 114,
        game: 54,
        aZ: 14,
        aZjp: 122
      }
    },
    {
      id: 114,
      name: 'Party Ball',
      nameJP: 'くす玉',
      smash: false,
      imageIndex: 113,
      sortBy: {
        normal: 115,
        game: 284,
        aZ: 191,
        aZjp: 57
      }
    },
    {
      id: 115,
      name: 'Crate',
      nameJP: '箱',
      smash: false,
      imageIndex: 114,
      sortBy: {
        normal: 116,
        game: 277,
        aZ: 44,
        aZjp: 164
      }
    },
    {
      id: 116,
      name: 'Barrel',
      nameJP: 'タル',
      smash: false,
      imageIndex: 115,
      sortBy: {
        normal: 117,
        game: 275,
        aZ: 13,
        aZjp: 121
      }
    },
    {
      id: 117,
      name: 'Capsule',
      nameJP: 'カプセル',
      smash: false,
      imageIndex: 116,
      sortBy: {
        normal: 118,
        game: 278,
        aZ: 30,
        aZjp: 36
      }
    },
    {
      id: 118,
      name: 'Egg',
      nameJP: 'たまご',
      smash: false,
      imageIndex: 117,
      sortBy: {
        normal: 119,
        game: 280,
        aZ: 64,
        aZjp: 119
      }
    },
    {
      id: 119,
      name: 'Smash Coins',
      nameJP: 'コイン',
      smash: false,
      imageIndex: 118,
      sortBy: {
        normal: 120,
        game: 279,
        aZ: 246,
        aZjp: 73
      }
    },
    {
      id: 120,
      name: 'Poké Ball',
      nameJP: 'モンスターボール',
      smash: false,
      imageIndex: 119,
      sortBy: {
        normal: 121,
        game: 178,
        aZ: 208,
        aZjp: 260
      }
    },
    {
      id: 121,
      name: 'Venusaur',
      nameJP: 'フシギバナ',
      smash: false,
      imageIndex: 120,
      sortBy: {
        normal: 122,
        game: 131,
        aZ: 275,
        aZjp: 203
      }
    },
    {
      id: 122,
      name: 'Charizard',
      nameJP: 'リザードン',
      smash: false,
      imageIndex: 121,
      sortBy: {
        normal: 123,
        game: 132,
        aZ: 37,
        aZjp: 272
      }
    },
    {
      id: 123,
      name: 'Squirtle',
      nameJP: 'ゼニガメ',
      smash: false,
      imageIndex: 122,
      sortBy: {
        normal: 124,
        game: 133,
        aZ: 248,
        aZjp: 109
      }
    },
    {
      id: 124,
      name: 'Blastoise',
      nameJP: 'カメックス',
      smash: false,
      imageIndex: 123,
      sortBy: {
        normal: 125,
        game: 134,
        aZ: 20,
        aZjp: 39
      }
    },
    {
      id: 125,
      name: 'Clefairy',
      nameJP: 'ピッピ',
      smash: false,
      imageIndex: 124,
      sortBy: {
        normal: 126,
        game: 136,
        aZ: 40,
        aZjp: 190
      }
    },
    {
      id: 126,
      name: 'Electrode',
      nameJP: 'マルマイン',
      smash: false,
      imageIndex: 125,
      sortBy: {
        normal: 127,
        game: 139,
        aZ: 66,
        aZjp: 244
      }
    },
    {
      id: 127,
      name: 'Weezing',
      nameJP: 'マタドガス',
      smash: false,
      imageIndex: 126,
      sortBy: {
        normal: 128,
        game: 140,
        aZ: 281,
        aZjp: 232
      }
    },
    {
      id: 128,
      name: 'Chansey',
      nameJP: 'ラッキー',
      smash: false,
      imageIndex: 127,
      sortBy: {
        normal: 129,
        game: 141,
        aZ: 36,
        aZjp: 269
      }
    },
    {
      id: 129,
      name: 'Goldeen',
      nameJP: 'トサキント',
      smash: false,
      imageIndex: 128,
      sortBy: {
        normal: 130,
        game: 142,
        aZ: 95,
        aZjp: 135
      }
    },
    {
      id: 130,
      name: 'Staryu',
      nameJP: 'ヒトデマン',
      smash: false,
      imageIndex: 129,
      sortBy: {
        normal: 131,
        game: 143,
        aZ: 253,
        aZjp: 174
      }
    },
    {
      id: 131,
      name: 'Snorlax',
      nameJP: 'カビゴン',
      smash: false,
      imageIndex: 130,
      sortBy: {
        normal: 132,
        game: 146,
        aZ: 247,
        aZjp: 35
      }
    },
    {
      id: 132,
      name: 'Articuno',
      nameJP: 'フリーザー（ポケモン）',
      smash: false,
      imageIndex: 131,
      sortBy: {
        normal: 133,
        game: 147,
        aZ: 5,
        aZjp: 205
      }
    },
    {
      id: 133,
      name: 'Zapdos',
      nameJP: 'サンダー',
      smash: false,
      imageIndex: 132,
      sortBy: {
        normal: 134,
        game: 148,
        aZ: 291,
        aZjp: 83
      }
    },
    {
      id: 134,
      name: 'Moltres',
      nameJP: 'ファイヤー',
      smash: false,
      imageIndex: 133,
      sortBy: {
        normal: 135,
        game: 149,
        aZ: 173,
        aZjp: 194
      }
    },
    {
      id: 135,
      name: 'Mew',
      nameJP: 'ミュウ',
      smash: false,
      imageIndex: 134,
      sortBy: {
        normal: 136,
        game: 151,
        aZ: 168,
        aZjp: 249
      }
    },
    {
      id: 136,
      name: 'Chikorita',
      nameJP: 'チコリータ',
      smash: false,
      imageIndex: 135,
      sortBy: {
        normal: 137,
        game: 152,
        aZ: 38,
        aZjp: 123
      }
    },
    {
      id: 137,
      name: 'Cyndaquil',
      nameJP: 'ヒノアラシ',
      smash: false,
      imageIndex: 136,
      sortBy: {
        normal: 138,
        game: 153,
        aZ: 47,
        aZjp: 175
      }
    },
    {
      id: 138,
      name: 'Togepi',
      nameJP: 'トゲピー',
      smash: false,
      imageIndex: 137,
      sortBy: {
        normal: 139,
        game: 159,
        aZ: 264,
        aZjp: 134
      }
    },
    {
      id: 139,
      name: 'Bellossom',
      nameJP: 'キレイハナ',
      smash: false,
      imageIndex: 138,
      sortBy: {
        normal: 140,
        game: 160,
        aZ: 18,
        aZjp: 54
      }
    },
    {
      id: 140,
      name: 'Marill',
      nameJP: 'マリル',
      smash: false,
      imageIndex: 139,
      sortBy: {
        normal: 141,
        game: 161,
        aZ: 149,
        aZjp: 238
      }
    },
    {
      id: 141,
      name: 'Sudowoodo',
      nameJP: 'ウソッキー',
      smash: false,
      imageIndex: 140,
      sortBy: {
        normal: 142,
        game: 162,
        aZ: 255,
        aZjp: 20
      }
    },
    {
      id: 142,
      name: 'Unown',
      nameJP: 'アンノーン',
      smash: false,
      imageIndex: 141,
      sortBy: {
        normal: 143,
        game: 163,
        aZ: 272,
        aZjp: 15
      }
    },
    {
      id: 143,
      name: 'Wobbuffet',
      nameJP: 'ソーナンス',
      smash: false,
      imageIndex: 142,
      sortBy: {
        normal: 144,
        game: 164,
        aZ: 283,
        aZjp: 114
      }
    },
    {
      id: 144,
      name: 'Scizor',
      nameJP: 'ハッサム',
      smash: false,
      imageIndex: 143,
      sortBy: {
        normal: 145,
        game: 166,
        aZ: 238,
        aZjp: 165
      }
    },
    {
      id: 145,
      name: 'Porygon2',
      nameJP: 'ポリゴン',
      smash: false,
      imageIndex: 144,
      sortBy: {
        normal: 146,
        game: 168,
        aZ: 213,
        aZjp: 226
      }
    },
    {
      id: 146,
      name: 'Raikou',
      nameJP: 'ライコウ',
      smash: false,
      imageIndex: 145,
      sortBy: {
        normal: 147,
        game: 169,
        aZ: 219,
        aZjp: 268
      }
    },
    {
      id: 147,
      name: 'Entei',
      nameJP: 'エンテイ',
      smash: false,
      imageIndex: 146,
      sortBy: {
        normal: 148,
        game: 170,
        aZ: 67,
        aZjp: 22
      }
    },
    {
      id: 148,
      name: 'Suicune',
      nameJP: 'スイクン',
      smash: false,
      imageIndex: 147,
      sortBy: {
        normal: 149,
        game: 171,
        aZ: 256,
        aZjp: 97
      }
    },
    {
      id: 149,
      name: 'Lugia',
      nameJP: 'ルギア',
      smash: false,
      imageIndex: 148,
      sortBy: {
        normal: 150,
        game: 172,
        aZ: 142,
        aZjp: 284
      }
    },
    {
      id: 150,
      name: 'Ho-oh',
      nameJP: 'ホウオウ',
      smash: false,
      imageIndex: 149,
      sortBy: {
        normal: 151,
        game: 173,
        aZ: 107,
        aZjp: 220
      }
    },
    {
      id: 151,
      name: 'Celebi',
      nameJP: 'セレビィ',
      smash: false,
      imageIndex: 150,
      sortBy: {
        normal: 152,
        game: 174,
        aZ: 35,
        aZjp: 105
      }
    },
    {
      id: 152,
      name: 'Toad',
      nameJP: 'キノピオ',
      smash: false,
      imageIndex: 151,
      sortBy: {
        normal: 153,
        game: 11,
        aZ: 263,
        aZjp: 44
      }
    },
    {
      id: 153,
      name: 'Coin',
      nameJP: 'コイン（マリオ）',
      smash: false,
      imageIndex: 152,
      sortBy: {
        normal: 154,
        game: 31,
        aZ: 43,
        aZjp: 74
      }
    },
    {
      id: 154,
      name: 'Vegetable',
      nameJP: '野菜',
      smash: false,
      imageIndex: 153,
      sortBy: {
        normal: 155,
        game: 38,
        aZ: 274,
        aZjp: 261
      }
    },
    {
      id: 155,
      name: 'Megavitamins',
      nameJP: 'カプセル（ドクターマリオ）',
      smash: false,
      imageIndex: 154,
      sortBy: {
        normal: 156,
        game: 40,
        aZ: 162,
        aZjp: 37
      }
    },
    {
      id: 156,
      name: 'Lon Lon Milk',
      nameJP: 'ロンロン牛乳',
      smash: false,
      imageIndex: 155,
      sortBy: {
        normal: 157,
        game: 69,
        aZ: 140,
        aZjp: 290
      }
    },
    {
      id: 157,
      name: 'Kirby Hat 1',
      nameJP: 'カービィコピーセット１',
      smash: false,
      imageIndex: 156,
      sortBy: {
        normal: 158,
        game: 105,
        aZ: 123,
        aZjp: 29
      }
    },
    {
      id: 158,
      name: 'Kirby Hat 2',
      nameJP: 'カービィコピーセット２',
      smash: false,
      imageIndex: 157,
      sortBy: {
        normal: 159,
        game: 106,
        aZ: 124,
        aZjp: 30
      }
    },
    {
      id: 159,
      name: 'Kirby Hat 3',
      nameJP: 'カービィコピーセット３',
      smash: false,
      imageIndex: 158,
      sortBy: {
        normal: 160,
        game: 107,
        aZ: 125,
        aZjp: 31
      }
    },
    {
      id: 160,
      name: 'Kirby Hat 4',
      nameJP: 'カービィコピーセット4',
      smash: false,
      imageIndex: 159,
      sortBy: {
        normal: 161,
        game: 108,
        aZ: 126,
        aZjp: 32
      }
    },
    {
      id: 161,
      name: 'Kirby Hat 5',
      nameJP: 'カービィコピーセット5',
      smash: false,
      imageIndex: 160,
      sortBy: {
        normal: 162,
        game: 109,
        aZ: 127,
        aZjp: 33
      }
    },
    {
      id: 162,
      name: 'Princess Peach\'s Castle',
      nameJP: 'ピーチ城',
      smash: false,
      imageIndex: 161,
      sortBy: {
        normal: 163,
        game: 41,
        aZ: 214,
        aZjp: 180
      }
    },
    {
      id: 163,
      name: 'Banzai Bill',
      nameJP: 'マグナムキラー',
      smash: false,
      imageIndex: 162,
      sortBy: {
        normal: 164,
        game: 19,
        aZ: 12,
        aZjp: 228
      }
    },
    {
      id: 164,
      name: 'Lakitu',
      nameJP: 'ジュゲム',
      smash: false,
      imageIndex: 163,
      sortBy: {
        normal: 165,
        game: 18,
        aZ: 133,
        aZjp: 92
      }
    },
    {
      id: 165,
      name: 'Pidgit',
      nameJP: 'ドドリゲス',
      smash: false,
      imageIndex: 164,
      sortBy: {
        normal: 166,
        game: 27,
        aZ: 200,
        aZjp: 146
      }
    },
    {
      id: 166,
      name: 'Birdo',
      nameJP: 'キャサリン',
      smash: false,
      imageIndex: 165,
      sortBy: {
        normal: 167,
        game: 26,
        aZ: 19,
        aZjp: 46
      }
    },
    {
      id: 167,
      name: 'Klap Trap',
      nameJP: 'クラップトラップ',
      smash: false,
      imageIndex: 166,
      sortBy: {
        normal: 168,
        game: 53,
        aZ: 128,
        aZjp: 62
      }
    },
    {
      id: 168,
      name: 'Shy Guys',
      nameJP: 'ヘイホー',
      smash: false,
      imageIndex: 167,
      sortBy: {
        normal: 169,
        game: 45,
        aZ: 244,
        aZjp: 212
      }
    },
    {
      id: 169,
      name: 'Pak E. Derm',
      nameJP: 'とおさんぞう',
      smash: false,
      imageIndex: 168,
      sortBy: {
        normal: 170,
        game: 47,
        aZ: 188,
        aZjp: 132
      }
    },
    {
      id: 170,
      name: 'Tingle',
      nameJP: 'チンクル',
      smash: false,
      imageIndex: 169,
      sortBy: {
        normal: 171,
        game: 62,
        aZ: 262,
        aZjp: 125
      }
    },
    {
      id: 171,
      name: 'Moon',
      nameJP: '月',
      smash: false,
      imageIndex: 170,
      sortBy: {
        normal: 172,
        game: 74,
        aZ: 175,
        aZjp: 126
      }
    },
    {
      id: 172,
      name: 'Turtle',
      nameJP: 'カメジマ',
      smash: false,
      imageIndex: 171,
      sortBy: {
        normal: 173,
        game: 73,
        aZ: 270,
        aZjp: 38
      }
    },
    {
      id: 173,
      name: 'Four Giants',
      nameJP: '四巨人',
      smash: false,
      imageIndex: 172,
      sortBy: {
        normal: 174,
        game: 75,
        aZ: 83,
        aZjp: 266
      }
    },
    {
      id: 174,
      name: 'Master Sword',
      nameJP: 'マスターソード',
      smash: false,
      imageIndex: 173,
      sortBy: {
        normal: 175,
        game: 68,
        aZ: 160,
        aZjp: 230
      }
    },
    {
      id: 175,
      name: 'Falcon Flyer',
      nameJP: 'ファルコン・フライヤー',
      smash: false,
      imageIndex: 174,
      sortBy: {
        normal: 176,
        game: 77,
        aZ: 72,
        aZjp: 198
      }
    },
    {
      id: 176,
      name: 'F-Zero Racers',
      nameJP: 'F-ZEROマシン',
      smash: false,
      imageIndex: 175,
      sortBy: {
        normal: 177,
        game: 78,
        aZ: 88,
        aZjp: 2
      }
    },
    {
      id: 177,
      name: 'Mute City',
      nameJP: 'ミュートシティ',
      smash: false,
      imageIndex: 176,
      sortBy: {
        normal: 178,
        game: 82,
        aZ: 182,
        aZjp: 248
      }
    },
    {
      id: 178,
      name: 'Arwing',
      nameJP: 'アーウィン',
      smash: false,
      imageIndex: 177,
      sortBy: {
        normal: 179,
        game: 87,
        aZ: 6,
        aZjp: 7
      }
    },
    {
      id: 179,
      name: 'Great Fox',
      nameJP: 'グレートフォックス',
      smash: false,
      imageIndex: 178,
      sortBy: {
        normal: 180,
        game: 88,
        aZ: 99,
        aZjp: 70
      }
    },
    {
      id: 180,
      name: 'Peppy Hare',
      nameJP: 'ペッピー',
      smash: false,
      imageIndex: 179,
      sortBy: {
        normal: 181,
        game: 85,
        aZ: 196,
        aZjp: 218
      }
    },
    {
      id: 181,
      name: 'Slippy Toad',
      nameJP: 'スリッピー',
      smash: false,
      imageIndex: 180,
      sortBy: {
        normal: 182,
        game: 86,
        aZ: 245,
        aZjp: 104
      }
    },
    {
      id: 182,
      name: 'Kraid',
      nameJP: 'クレイド',
      smash: false,
      imageIndex: 181,
      sortBy: {
        normal: 183,
        game: 96,
        aZ: 132,
        aZjp: 65
      }
    },
    {
      id: 183,
      name: 'Chozo Statue',
      nameJP: '鳥人族の像',
      smash: false,
      imageIndex: 182,
      sortBy: {
        normal: 184,
        game: 99,
        aZ: 39,
        aZjp: 124
      }
    },
    {
      id: 184,
      name: 'Whispy Woods',
      nameJP: 'ウィスピーウッズ',
      smash: false,
      imageIndex: 183,
      sortBy: {
        normal: 185,
        game: 115,
        aZ: 282,
        aZjp: 17
      }
    },
    {
      id: 185,
      name: 'Fountain of Dreams',
      nameJP: '夢の泉',
      smash: false,
      imageIndex: 184,
      sortBy: {
        normal: 186,
        game: 120,
        aZ: 82,
        aZjp: 262
      }
    },
    {
      id: 186,
      name: 'UFO',
      nameJP: 'UFO',
      smash: false,
      imageIndex: 185,
      sortBy: {
        normal: 187,
        game: 127,
        aZ: 271,
        aZjp: 6
      }
    },
    {
      id: 187,
      name: 'Pokémon Stadium',
      nameJP: 'ポケモンスタジアム',
      smash: false,
      imageIndex: 186,
      sortBy: {
        normal: 188,
        game: 180,
        aZ: 209,
        aZjp: 225
      }
    },
    {
      id: 188,
      name: 'Game & Watch',
      nameJP: 'ゲーム＆ウォッチ',
      smash: false,
      imageIndex: 187,
      sortBy: {
        normal: 189,
        game: 220,
        aZ: 89,
        aZjp: 71
      }
    },
    {
      id: 189,
      name: 'Target',
      nameJP: 'ターゲット',
      smash: false,
      imageIndex: 188,
      sortBy: {
        normal: 190,
        game: 287,
        aZ: 260,
        aZjp: 115
      }
    },
    {
      id: 190,
      name: 'Sandbag',
      nameJP: 'サンドバッグくん',
      smash: false,
      imageIndex: 189,
      sortBy: {
        normal: 191,
        game: 286,
        aZ: 237,
        aZjp: 84
      }
    },
    {
      id: 191,
      name: 'Battlefield',
      nameJP: '戦場',
      smash: false,
      imageIndex: 190,
      sortBy: {
        normal: 192,
        game: 288,
        aZ: 15,
        aZjp: 108
      }
    },
    {
      id: 192,
      name: 'Final Destination',
      nameJP: '終点',
      smash: false,
      imageIndex: 191,
      sortBy: {
        normal: 193,
        game: 289,
        aZ: 77,
        aZjp: 90
      }
    },
    {
      id: 193,
      name: 'Goomba',
      nameJP: 'クリボー',
      smash: false,
      imageIndex: 192,
      sortBy: {
        normal: 194,
        game: 20,
        aZ: 97,
        aZjp: 63
      }
    },
    {
      id: 194,
      name: 'Koopa Troopa',
      nameJP: 'ノコノコ',
      smash: false,
      imageIndex: 193,
      sortBy: {
        normal: 195,
        game: 21,
        aZ: 131,
        aZjp: 161
      }
    },
    {
      id: 195,
      name: 'Koopa Paratroopa',
      nameJP: 'パタパタ',
      smash: false,
      imageIndex: 194,
      sortBy: {
        normal: 196,
        game: 22,
        aZ: 130,
        aZjp: 171
      }
    },
    {
      id: 196,
      name: 'ReDead',
      nameJP: 'リーデッド',
      smash: false,
      imageIndex: 195,
      sortBy: {
        normal: 197,
        game: 64,
        aZ: 223,
        aZjp: 271
      }
    },
    {
      id: 197,
      name: 'Octorok',
      nameJP: 'オクタロック',
      smash: false,
      imageIndex: 196,
      sortBy: {
        normal: 198,
        game: 66,
        aZ: 187,
        aZjp: 24
      }
    },
    {
      id: 198,
      name: 'Like Like',
      nameJP: 'ライクライク',
      smash: false,
      imageIndex: 197,
      sortBy: {
        normal: 199,
        game: 65,
        aZ: 135,
        aZjp: 267
      }
    },
    {
      id: 199,
      name: 'Topi',
      nameJP: 'トッピー',
      smash: false,
      imageIndex: 198,
      sortBy: {
        normal: 200,
        game: 182,
        aZ: 266,
        aZjp: 138
      }
    },
    {
      id: 200,
      name: 'Polar Bear',
      nameJP: 'ホワイトベア',
      smash: false,
      imageIndex: 199,
      sortBy: {
        normal: 202,
        game: 184,
        aZ: 210,
        aZjp: 221
      }
    },
    {
      id: 201,
      name: 'Raccoon Mario',
      nameJP: 'しっぽマリオ',
      smash: false,
      imageIndex: 200,
      sortBy: {
        normal: 203,
        game: 4,
        aZ: 217,
        aZjp: 89
      }
    },
    {
      id: 202,
      name: 'Mario ＆ Yoshi',
      nameJP: 'マントマリオ＋ヨッシー',
      smash: false,
      imageIndex: 201,
      sortBy: {
        normal: 204,
        game: 3,
        aZ: 154,
        aZjp: 245
      }
    },
    {
      id: 203,
      name: 'Metal Mario',
      nameJP: 'メタルマリオ',
      smash: false,
      imageIndex: 202,
      sortBy: {
        normal: 205,
        game: 5,
        aZ: 166,
        aZjp: 256
      }
    },
    {
      id: 204,
      name: 'Paper Mario',
      nameJP: 'マリオ（ペーパー）',
      smash: false,
      imageIndex: 203,
      sortBy: {
        normal: 206,
        game: 6,
        aZ: 189,
        aZjp: 237
      }
    },
    {
      id: 205,
      name: 'Wario',
      nameJP: 'ワリオ',
      smash: false,
      imageIndex: 204,
      sortBy: {
        normal: 207,
        game: 12,
        aZ: 279,
        aZjp: 294
      }
    },
    {
      id: 206,
      name: 'Plum',
      nameJP: 'プラム',
      smash: false,
      imageIndex: 205,
      sortBy: {
        normal: 208,
        game: 14,
        aZ: 206,
        aZjp: 208
      }
    },
    {
      id: 207,
      name: 'Daisy',
      nameJP: 'デイジー',
      smash: false,
      imageIndex: 206,
      sortBy: {
        normal: 209,
        game: 13,
        aZ: 48,
        aZjp: 130
      }
    },
    {
      id: 208,
      name: 'Waluigi',
      nameJP: 'ワルイージ',
      smash: false,
      imageIndex: 207,
      sortBy: {
        normal: 210,
        game: 15,
        aZ: 278,
        aZjp: 295
      }
    },
    {
      id: 209,
      name: 'Thwomp',
      nameJP: 'ドッスン',
      smash: false,
      imageIndex: 208,
      sortBy: {
        normal: 211,
        game: 17,
        aZ: 261,
        aZjp: 145
      }
    },
    {
      id: 210,
      name: 'Boo',
      nameJP: 'テレサ',
      smash: false,
      imageIndex: 209,
      sortBy: {
        normal: 212,
        game: 23,
        aZ: 22,
        aZjp: 127
      }
    },
    {
      id: 211,
      name: 'Koopa Clown Car',
      nameJP: 'クッパクラウン',
      smash: false,
      imageIndex: 210,
      sortBy: {
        normal: 213,
        game: 24,
        aZ: 129,
        aZjp: 61
      }
    },
    {
      id: 212,
      name: 'Viruses',
      nameJP: 'ウィルス',
      smash: false,
      imageIndex: 211,
      sortBy: {
        normal: 214,
        game: 25,
        aZ: 276,
        aZjp: 18
      }
    },
    {
      id: 213,
      name: 'Bucket',
      nameJP: 'バケツ',
      smash: false,
      imageIndex: 212,
      sortBy: {
        normal: 215,
        game: 34,
        aZ: 27,
        aZjp: 169
      }
    },
    {
      id: 214,
      name: 'Racing Kart',
      nameJP: 'カート',
      smash: false,
      imageIndex: 213,
      sortBy: {
        normal: 216,
        game: 39,
        aZ: 218,
        aZjp: 25
      }
    },
    {
      id: 215,
      name: 'Baby Mario',
      nameJP: 'ベビーマリオ',
      smash: false,
      imageIndex: 214,
      sortBy: {
        normal: 217,
        game: 44,
        aZ: 9,
        aZjp: 217
      }
    },
    {
      id: 216,
      name: 'Baby Bowser',
      nameJP: 'ベビークッパ',
      smash: false,
      imageIndex: 215,
      sortBy: {
        normal: 218,
        game: 43,
        aZ: 8,
        aZjp: 216
      }
    },
    {
      id: 217,
      name: 'Raphael Raven',
      nameJP: 'キューちゃん',
      smash: false,
      imageIndex: 216,
      sortBy: {
        normal: 219,
        game: 46,
        aZ: 220,
        aZjp: 51
      }
    },
    {
      id: 218,
      name: 'Dixie Kong',
      nameJP: 'ディクシーコング',
      smash: false,
      imageIndex: 217,
      sortBy: {
        normal: 220,
        game: 51,
        aZ: 51,
        aZjp: 128
      }
    },
    {
      id: 219,
      name: 'King K. Rool',
      nameJP: 'キングクルール',
      smash: false,
      imageIndex: 218,
      sortBy: {
        normal: 221,
        game: 52,
        aZ: 119,
        aZjp: 55
      }
    },
    {
      id: 220,
      name: 'Goron',
      nameJP: 'ゴロン族',
      smash: false,
      imageIndex: 219,
      sortBy: {
        normal: 222,
        game: 60,
        aZ: 98,
        aZjp: 78
      }
    },
    {
      id: 221,
      name: 'Marin',
      nameJP: 'マリン',
      smash: false,
      imageIndex: 220,
      sortBy: {
        normal: 223,
        game: 61,
        aZ: 150,
        aZjp: 239
      }
    },
    {
      id: 222,
      name: 'Majora\'s Mask',
      nameJP: 'ムジュラの仮面',
      smash: false,
      imageIndex: 221,
      sortBy: {
        normal: 224,
        game: 72,
        aZ: 147,
        aZjp: 253
      }
    },
    {
      id: 223,
      name: 'Ocarina of Time',
      nameJP: '時のオカリナ',
      smash: false,
      imageIndex: 222,
      sortBy: {
        normal: 225,
        game: 71,
        aZ: 186,
        aZjp: 133
      }
    },
    {
      id: 224,
      name: 'Samurai Goroh',
      nameJP: 'サムライ・ゴロー',
      smash: false,
      imageIndex: 223,
      sortBy: {
        normal: 226,
        game: 79,
        aZ: 231,
        aZjp: 82
      }
    },
    {
      id: 225,
      name: 'Dr. Stewart',
      nameJP: 'Dr.スチュワート',
      smash: false,
      imageIndex: 224,
      sortBy: {
        normal: 227,
        game: 80,
        aZ: 60,
        aZjp: 1
      }
    },
    {
      id: 226,
      name: 'Jody Summer',
      nameJP: 'ジョディ・サマー',
      smash: false,
      imageIndex: 225,
      sortBy: {
        normal: 228,
        game: 81,
        aZ: 116,
        aZjp: 93
      }
    },
    {
      id: 227,
      name: 'Landmaster Tank',
      nameJP: 'ランドマスター',
      smash: false,
      imageIndex: 226,
      sortBy: {
        normal: 229,
        game: 89,
        aZ: 134,
        aZjp: 270
      }
    },
    {
      id: 228,
      name: 'Wolfen',
      nameJP: 'ウルフェン',
      smash: false,
      imageIndex: 227,
      sortBy: {
        normal: 230,
        game: 90,
        aZ: 284,
        aZjp: 21
      }
    },
    {
      id: 229,
      name: 'Andross',
      nameJP: 'アンドルフ（旧）',
      smash: false,
      imageIndex: 228,
      sortBy: {
        normal: 231,
        game: 92,
        aZ: 3,
        aZjp: 14
      }
    },
    {
      id: 230,
      name: 'Andross',
      nameJP: 'アンドルフ',
      smash: false,
      imageIndex: 229,
      sortBy: {
        normal: 232,
        game: 91,
        aZ: 2,
        aZjp: 13
      }
    },
    {
      id: 231,
      name: 'Samus Unmasked',
      nameJP: 'マスクを脱いだサムス',
      smash: false,
      imageIndex: 230,
      sortBy: {
        normal: 233,
        game: 94,
        aZ: 236,
        aZjp: 229
      }
    },
    {
      id: 232,
      name: 'Samus\'s Starship',
      nameJP: 'スターシップ',
      smash: false,
      imageIndex: 231,
      sortBy: {
        normal: 234,
        game: 95,
        aZ: 235,
        aZjp: 99
      }
    },
    {
      id: 233,
      name: 'Metroid',
      nameJP: 'メトロイド',
      smash: false,
      imageIndex: 232,
      sortBy: {
        normal: 235,
        game: 97,
        aZ: 167,
        aZjp: 257
      }
    },
    {
      id: 234,
      name: 'Ridley',
      nameJP: 'リドリー',
      smash: false,
      imageIndex: 233,
      sortBy: {
        normal: 236,
        game: 98,
        aZ: 226,
        aZjp: 276
      }
    },
    {
      id: 235,
      name: 'Fire Kirby',
      nameJP: 'ファイアカービィ',
      smash: false,
      imageIndex: 234,
      sortBy: {
        normal: 237,
        game: 104,
        aZ: 79,
        aZjp: 191
      }
    },
    {
      id: 236,
      name: 'Fighter Kirby',
      nameJP: 'ファイターカービィ',
      smash: false,
      imageIndex: 235,
      sortBy: {
        normal: 238,
        game: 103,
        aZ: 75,
        aZjp: 193
      }
    },
    {
      id: 237,
      name: 'Ball Kirby',
      nameJP: 'ボールカービィ',
      smash: false,
      imageIndex: 236,
      sortBy: {
        normal: 239,
        game: 102,
        aZ: 10,
        aZjp: 222
      }
    },
    {
      id: 238,
      name: 'Waddle Dee',
      nameJP: 'ワドルディ',
      smash: false,
      imageIndex: 237,
      sortBy: {
        normal: 240,
        game: 111,
        aZ: 277,
        aZjp: 292
      }
    },
    {
      id: 239,
      name: 'King Dedede',
      nameJP: 'デデデ大王',
      smash: false,
      imageIndex: 238,
      sortBy: {
        normal: 241,
        game: 110,
        aZ: 118,
        aZjp: 131
      }
    },
    {
      id: 240,
      name: 'Rick',
      nameJP: 'リック',
      smash: false,
      imageIndex: 239,
      sortBy: {
        normal: 242,
        game: 113,
        aZ: 225,
        aZjp: 274
      }
    },
    {
      id: 241,
      name: 'Gooey',
      nameJP: 'グーイ',
      smash: false,
      imageIndex: 240,
      sortBy: {
        normal: 243,
        game: 112,
        aZ: 96,
        aZjp: 67
      }
    },
    {
      id: 242,
      name: 'Meta-Knight',
      nameJP: 'メタナイト',
      smash: false,
      imageIndex: 241,
      sortBy: {
        normal: 244,
        game: 114,
        aZ: 164,
        aZjp: 254
      }
    },
    {
      id: 243,
      name: 'Paula',
      nameJP: 'ポーラ',
      smash: false,
      imageIndex: 242,
      sortBy: {
        normal: 245,
        game: 122,
        aZ: 192,
        aZjp: 224
      }
    },
    {
      id: 244,
      name: 'Jeff',
      nameJP: 'ジェフ',
      smash: false,
      imageIndex: 243,
      sortBy: {
        normal: 246,
        game: 123,
        aZ: 112,
        aZjp: 91
      }
    },
    {
      id: 245,
      name: 'Poo',
      nameJP: 'プー',
      smash: false,
      imageIndex: 244,
      sortBy: {
        normal: 247,
        game: 124,
        aZ: 212,
        aZjp: 206
      }
    },
    {
      id: 246,
      name: 'Starman',
      nameJP: 'スターマン',
      smash: false,
      imageIndex: 245,
      sortBy: {
        normal: 248,
        game: 126,
        aZ: 251,
        aZjp: 100
      }
    },
    {
      id: 247,
      name: 'Bulbasaur',
      nameJP: 'フシギダネ',
      smash: false,
      imageIndex: 246,
      sortBy: {
        normal: 249,
        game: 130,
        aZ: 28,
        aZjp: 202
      }
    },
    {
      id: 248,
      name: 'Poliwhirl',
      nameJP: 'ニョロゾ',
      smash: false,
      imageIndex: 247,
      sortBy: {
        normal: 250,
        game: 138,
        aZ: 211,
        aZjp: 157
      }
    },
    {
      id: 249,
      name: 'Ditto',
      nameJP: 'メタモン',
      smash: false,
      imageIndex: 248,
      sortBy: {
        normal: 251,
        game: 144,
        aZ: 50,
        aZjp: 255
      }
    },
    {
      id: 250,
      name: 'Eevee',
      nameJP: 'イーブイ',
      smash: false,
      imageIndex: 249,
      sortBy: {
        normal: 252,
        game: 145,
        aZ: 63,
        aZjp: 16
      }
    },
    {
      id: 251,
      name: 'Totodile',
      nameJP: 'ワニノコ',
      smash: false,
      imageIndex: 250,
      sortBy: {
        normal: 253,
        game: 154,
        aZ: 269,
        aZjp: 293
      }
    },
    {
      id: 252,
      name: 'Crobat',
      nameJP: 'クロバット',
      smash: false,
      imageIndex: 251,
      sortBy: {
        normal: 254,
        game: 155,
        aZ: 46,
        aZjp: 66
      }
    },
    {
      id: 253,
      name: 'Cleffa',
      nameJP: 'ピィ',
      smash: false,
      imageIndex: 252,
      sortBy: {
        normal: 255,
        game: 157,
        aZ: 41,
        aZjp: 181
      }
    },
    {
      id: 254,
      name: 'Igglybuff',
      nameJP: 'ププリン',
      smash: false,
      imageIndex: 253,
      sortBy: {
        normal: 256,
        game: 158,
        aZ: 111,
        aZjp: 207
      }
    },
    {
      id: 255,
      name: 'Steelix',
      nameJP: 'ハガネール',
      smash: false,
      imageIndex: 254,
      sortBy: {
        normal: 257,
        game: 165,
        aZ: 254,
        aZjp: 163
      }
    },
    {
      id: 256,
      name: 'Heracross',
      nameJP: 'ヘラクロス',
      smash: false,
      imageIndex: 255,
      sortBy: {
        normal: 258,
        game: 167,
        aZ: 104,
        aZjp: 213
      }
    },
    {
      id: 257,
      name: 'Meowth',
      nameJP: 'ニャース',
      smash: false,
      imageIndex: 256,
      sortBy: {
        normal: 259,
        game: 175,
        aZ: 163,
        aZjp: 156
      }
    },
    {
      id: 258,
      name: 'Professor Oak',
      nameJP: 'オーキド博士',
      smash: false,
      imageIndex: 257,
      sortBy: {
        normal: 260,
        game: 176,
        aZ: 215,
        aZjp: 23
      }
    },
    {
      id: 259,
      name: 'Misty',
      nameJP: 'カスミ',
      smash: false,
      imageIndex: 258,
      sortBy: {
        normal: 261,
        game: 177,
        aZ: 172,
        aZjp: 34
      }
    },
    {
      id: 260,
      name: 'ZERO-ONE',
      nameJP: 'ゼロワン号',
      smash: false,
      imageIndex: 259,
      sortBy: {
        normal: 262,
        game: 179,
        aZ: 295,
        aZjp: 113
      }
    },
    {
      id: 261,
      name: 'Maruo Maruhige',
      nameJP: 'マルヒゲ屋店長',
      smash: false,
      imageIndex: 260,
      sortBy: {
        normal: 263,
        game: 202,
        aZ: 158,
        aZjp: 243
      }
    },
    {
      id: 262,
      name: 'Ryota Hayami',
      nameJP: '速水　涼太',
      smash: false,
      imageIndex: 261,
      sortBy: {
        normal: 264,
        game: 185,
        aZ: 230,
        aZjp: 166
      }
    },
    {
      id: 263,
      name: 'Kensuke Kimachi',
      nameJP: '木町　剣介',
      smash: false,
      imageIndex: 262,
      sortBy: {
        normal: 265,
        game: 186,
        aZ: 117,
        aZjp: 45
      }
    },
    {
      id: 264,
      name: 'Love Giant',
      nameJP: '巨人のドシン（ラブ）',
      smash: false,
      imageIndex: 263,
      sortBy: {
        normal: 266,
        game: 187,
        aZ: 141,
        aZjp: 53
      }
    },
    {
      id: 265,
      name: 'Hate Giant',
      nameJP: '巨人のドシン（ヘイト）',
      smash: false,
      imageIndex: 264,
      sortBy: {
        normal: 267,
        game: 188,
        aZ: 102,
        aZjp: 52
      }
    },
    {
      id: 266,
      name: 'Ray MK II',
      nameJP: 'レイMkⅡ',
      smash: false,
      imageIndex: 265,
      sortBy: {
        normal: 268,
        game: 189,
        aZ: 222,
        aZjp: 285
      }
    },
    {
      id: 267,
      name: 'Bayonette',
      nameJP: 'ベイオネット',
      smash: false,
      imageIndex: 266,
      sortBy: {
        normal: 269,
        game: 190,
        aZ: 16,
        aZjp: 215
      }
    },
    {
      id: 268,
      name: 'Annie',
      nameJP: 'アニー',
      smash: false,
      imageIndex: 267,
      sortBy: {
        normal: 270,
        game: 191,
        aZ: 4,
        aZjp: 12
      }
    },
    {
      id: 269,
      name: 'Tom Nook',
      nameJP: 'たぬきち',
      smash: false,
      imageIndex: 268,
      sortBy: {
        normal: 271,
        game: 193,
        aZ: 265,
        aZjp: 117
      }
    },
    {
      id: 270,
      name: 'Totakeke',
      nameJP: 'とたけけ',
      smash: false,
      imageIndex: 269,
      sortBy: {
        normal: 272,
        game: 194,
        aZ: 268,
        aZjp: 136
      }
    },
    {
      id: 271,
      name: 'Mr. Resetti',
      nameJP: 'リセットさん',
      smash: false,
      imageIndex: 270,
      sortBy: {
        normal: 273,
        game: 192,
        aZ: 180,
        aZjp: 273
      }
    },
    {
      id: 272,
      name: 'Heririn',
      nameJP: 'ヘリリン',
      smash: false,
      imageIndex: 271,
      sortBy: {
        normal: 274,
        game: 198,
        aZ: 105,
        aZjp: 214
      }
    },
    {
      id: 273,
      name: 'Alpha',
      nameJP: 'パンダジンバ',
      smash: false,
      imageIndex: 272,
      sortBy: {
        normal: 275,
        game: 201,
        aZ: 1,
        aZjp: 173
      }
    },
    {
      id: 274,
      name: 'Vacuum Luigi',
      nameJP: 'ルイージ（ルイージマンション）',
      smash: false,
      imageIndex: 273,
      sortBy: {
        normal: 276,
        game: 9,
        aZ: 273,
        aZjp: 283
      }
    },
    {
      id: 275,
      name: 'Pikmin',
      nameJP: 'ピクミン',
      smash: false,
      imageIndex: 274,
      sortBy: {
        normal: 277,
        game: 200,
        aZ: 204,
        aZjp: 185
      }
    },
    {
      id: 276,
      name: 'Captain Olimar',
      nameJP: 'キャプテン・オリマー',
      smash: false,
      imageIndex: 275,
      sortBy: {
        normal: 278,
        game: 199,
        aZ: 31,
        aZjp: 47
      }
    },
    {
      id: 277,
      name: 'Excitebike',
      nameJP: 'モトクロッサー',
      smash: false,
      imageIndex: 276,
      sortBy: {
        normal: 279,
        game: 211,
        aZ: 68,
        aZjp: 258
      }
    },
    {
      id: 278,
      name: 'Donkey Kong Junior',
      nameJP: 'ドンキーコングJr.',
      smash: false,
      imageIndex: 277,
      sortBy: {
        normal: 281,
        game: 49,
        aZ: 56,
        aZjp: 150
      }
    },
    {
      id: 279,
      name: 'Ducks',
      nameJP: 'カモ',
      smash: false,
      imageIndex: 278,
      sortBy: {
        normal: 282,
        game: 204,
        aZ: 62,
        aZjp: 40
      }
    },
    {
      id: 280,
      name: 'Bubbles',
      nameJP: 'グルッピー',
      smash: false,
      imageIndex: 279,
      sortBy: {
        normal: 283,
        game: 203,
        aZ: 26,
        aZjp: 69
      }
    },
    {
      id: 281,
      name: 'Eggplant Man',
      nameJP: 'ナスビ仮面',
      smash: false,
      imageIndex: 280,
      sortBy: {
        normal: 284,
        game: 206,
        aZ: 65,
        aZjp: 152
      }
    },
    {
      id: 282,
      name: 'Mach Rider',
      nameJP: 'マッハライダー',
      smash: false,
      imageIndex: 281,
      sortBy: {
        normal: 285,
        game: 205,
        aZ: 146,
        aZjp: 233
      }
    },
    {
      id: 283,
      name: 'Balloon Fighter',
      nameJP: 'バルーンファイトの主人公',
      smash: false,
      imageIndex: 282,
      sortBy: {
        normal: 286,
        game: 207,
        aZ: 11,
        aZjp: 170
      }
    },
    {
      id: 284,
      name: 'Stanley',
      nameJP: 'スタンリー',
      smash: false,
      imageIndex: 283,
      sortBy: {
        normal: 287,
        game: 50,
        aZ: 249,
        aZjp: 102
      }
    },
    {
      id: 285,
      name: 'Pit',
      nameJP: 'ピット',
      smash: false,
      imageIndex: 284,
      sortBy: {
        normal: 288,
        game: 209,
        aZ: 205,
        aZjp: 189
      }
    },
    {
      id: 286,
      name: 'Dr. Wright',
      nameJP: 'ドクターライト',
      smash: false,
      imageIndex: 285,
      sortBy: {
        normal: 289,
        game: 210,
        aZ: 61,
        aZjp: 143
      }
    },
    {
      id: 287,
      name: 'Donbe & Hikari',
      nameJP: 'どんべ＆ひかり',
      smash: false,
      imageIndex: 286,
      sortBy: {
        normal: 290,
        game: 216,
        aZ: 52,
        aZjp: 151
      }
    },
    {
      id: 288,
      name: 'Ayumi Tachibana',
      nameJP: '橘　あゆみ',
      smash: false,
      imageIndex: 287,
      sortBy: {
        normal: 291,
        game: 215,
        aZ: 7,
        aZjp: 116
      }
    },
    {
      id: 289,
      name: 'Monster',
      nameJP: 'モンスター',
      smash: false,
      imageIndex: 288,
      sortBy: {
        normal: 292,
        game: 214,
        aZ: 174,
        aZjp: 259
      }
    },
    {
      id: 290,
      name: 'Sheriff',
      nameJP: 'シェリフ',
      smash: false,
      imageIndex: 289,
      sortBy: {
        normal: 293,
        game: 217,
        aZ: 243,
        aZjp: 88
      }
    },
    {
      id: 291,
      name: 'Diskun',
      nameJP: 'ディスくん',
      smash: false,
      imageIndex: 290,
      sortBy: {
        normal: 294,
        game: 218,
        aZ: 49,
        aZjp: 129
      }
    },
    {
      id: 292,
      name: 'GCN',
      nameJP: 'ゲームキューブ',
      smash: false,
      imageIndex: 291,
      sortBy: {
        normal: 295,
        game: 222,
        aZ: 93,
        aZjp: 72
      }
    },
    {
      id: 293,
      name: 'Proximity Mine',
      nameJP: 'センサー爆弾',
      smash: false,
      imageIndex: 292,
      sortBy: {
        normal: 105,
        game: 196,
        aZ: 216,
        aZjp: 106
      }
    },
    {
      id: 294,
      name: 'Topi',
      nameJP: 'トッピー',
      smash: false,
      imageIndex: 293,
      sortBy: {
        normal: 201,
        game: 183,
        aZ: 267,
        aZjp: 137
      }
    },
    {
      id: 295,
      name: 'Tamagon',
      nameJP: 'タマゴン',
      smash: false,
      imageIndex: 294,
      sortBy: {
        normal: 280,
        game: 212,
        aZ: 259,
        aZjp: 120
      }
    }
  ];
};

window.generateBonusData = function () {
  return [
    {
      id: 1,
      bonus: 'Bird of Prey',
      bonusEN: '',
      bonusJP: '空中攻撃のみ',
      score: 4000,
      description: 'Used only aerial attacks.',
      descriptionJP: '空中攻撃だけをヒットさせた',
      descriptionJPEN: 'Only aerial attacks hit',
      notes: ''
    },
    {
      id: 2,
      bonus: 'Combo King',
      bonusEN: '',
      bonusJP: 'コンボが多い',
      score: 2500,
      description: 'Used many combos. (Average # of combos is 2.5 or greater)',
      descriptionJP: 'コンボ数平均が2.5以上だった',
      descriptionJPEN: 'Combo number average was 2.5 or more',
      notes: ''
    },
    {
      id: 3,
      bonus: 'Juggler',
      bonusEN: '',
      bonusJP: '敵をお手玉した',
      score: 1500,
      description: 'Struck an enemy many times while keeping him airborne.',
      descriptionJP: '相手を着地させず何度も攻撃した',
      descriptionJPEN: 'Attacked multiple times without letting the opponent land.',
      notes: ''
    },
    {
      id: 4,
      bonus: 'Backstabber',
      bonusEN: '',
      bonusJP: '背後攻撃が多い',
      score: 2000,
      description: 'High % of attacks were from rear. (70% or more of total)',
      descriptionJP: '相手を後ろから攻撃した数が全攻撃の70%以上だった',
      descriptionJPEN: 'More than 70% of all attacks were attacks from behind.',
      notes: ''
    },
    {
      id: 5,
      bonus: 'Sweeper',
      bonusEN: '',
      bonusJP: '下攻撃が多い',
      score: 2500,
      description: 'High % of attacks were low. (50% or more of total)',
      descriptionJP: '全ヒット攻撃が10発以上で、その50%以上が下段攻撃だった',
      descriptionJPEN: 'All hit attacks were 10 or more, and 50% or more of them were low attacks.',
      notes: ''
    },
    {
      id: 6,
      bonus: 'Clean Sweep',
      bonusEN: '',
      bonusJP: '下攻撃のみ',
      score: 5000,
      description: 'All attacks were low attacks.',
      descriptionJP: '下段攻撃だけをヒットさせた',
      descriptionJPEN: 'Hit with only the lower attack',
      notes: ''
    },
    {
      id: 7,
      bonus: 'Meteor Smash',
      bonusEN: '',
      bonusJP: 'メテオスマッシュ',
      score: 800,
      description: 'KO\'d foe with a Meteor Attack.',
      descriptionJP: 'メテオ攻撃（下にふっとぶ攻撃）でとどめを刺した',
      descriptionJPEN: 'Finished off with a Meteor attack (downward launch attack)',
      notes: ''
    },
    {
      id: 8,
      bonus: 'Meteor Clear',
      bonusEN: '',
      bonusJP: 'メテオでクリア',
      score: 3000,
      description: 'Cleared the level with a Meteor Attack.',
      descriptionJP: 'メテオ攻撃でとどめを刺してステージクリアした',
      descriptionJPEN: 'Finished the stage with a meteor attack',
      notes: ''
    },
    {
      id: 9,
      bonus: 'Meteor Master',
      bonusEN: '',
      bonusJP: 'メテオを必ず成功',
      score: 8000,
      description: 'Every Meteor Attack KO\'d an opponent. (Minimum of 2)',
      descriptionJP: 'メテオ攻撃を出した時、必ず相手を落としていた',
      descriptionJPEN: 'Always dropped the opponent when using a meteor attack',
      notes: ''
    },
    {
      id: 10,
      bonus: 'Meteor Survivor',
      bonusEN: '',
      bonusJP: 'メテオがえし成功',
      score: 2000,
      description: 'Succeeded in recovering from a Meteor Attack.',
      descriptionJP: 'メテオがえしを成功させて復帰した',
      descriptionJPEN: 'Successfully returned to Meteor.',
      notes: 'The larger the stage, the easier this is to pull off.'
    },
    {
      id: 11,
      bonus: 'Flying Meteor',
      bonusEN: '',
      bonusJP: 'ふっとびをメテオ',
      score: 4000,
      description: 'Hit a flying enemy with a Meteor Attack.',
      descriptionJP: 'ふっとび中の相手をメテオ攻撃で落とした',
      descriptionJPEN: 'Defeated an opponent while launching with a Meteor attack.',
      notes: ''
    },
    {
      id: 12,
      bonus: 'Exceptional Aim',
      bonusEN: '',
      bonusJP: '命中率が高い',
      score: 4000,
      description: 'Hit with most attacks.',
      descriptionJP: 'それなりに攻撃しつつ、攻撃をあまり空振りしなかった',
      descriptionJPEN: 'While attacking as it was, I didn\'t miss the attack too much',
      notes: ''
    },
    {
      id: 13,
      bonus: 'Perfect Aim',
      bonusEN: '',
      bonusJP: '命中率100%',
      score: 10000,
      description: 'Hit with all attacks. (At least 8 attacks per minute)',
      descriptionJP: 'それなりに攻撃しつつ、攻撃が必ず命中した',
      descriptionJPEN: 'While attacking as it is, the attack always hit',
      notes: ''
    },
    {
      id: 14,
      bonus: 'All Ground',
      bonusEN: '',
      bonusJP: '地上攻撃全種類',
      score: 6000,
      description: 'Used all standard ground attacks against enemies.',
      descriptionJP: '相手に地上の通常ワザを全種類当てた',
      descriptionJPEN: 'Hit the opponent with all normal ground attacks.',
      notes: ''
    },
    {
      id: 15,
      bonus: 'All Aerial',
      bonusEN: '',
      bonusJP: '空中攻撃全種類',
      score: 4000,
      description: 'Used all standard aerial attacks against enemies.',
      descriptionJP: '相手に空中の通常ワザを全種類当てた',
      descriptionJPEN: 'Hit the opponent with all types of normal attacks in the air.',
      notes: ''
    },
    {
      id: 16,
      bonus: 'All Variations',
      bonusEN: '',
      bonusJP: '全ワザをヒット',
      score: 10000,
      description: 'Used all attacks except finishing blows on enemies.',
      descriptionJP: '相手に地上と空中のすべての通常ワザを当てた',
      descriptionJPEN: 'Hit the opponent with all normal attacks on the ground and in the air.',
      notes: ''
    },
    {
      id: 17,
      bonus: 'All on One',
      bonusEN: '',
      bonusJP: '一人に全ワザヒット',
      score: 20000,
      description: 'Used all attacks except finishing blows on one enemy.',
      descriptionJP: '一人の相手にすべての通常ワザを当てた',
      descriptionJPEN: 'Hit a single opponent with all normal attacks',
      notes: ''
    },
    {
      id: 18,
      bonus: 'Berserker',
      bonusEN: '',
      bonusJP: '手数が多い',
      score: 3500,
      description: 'Attacked in a frenzy. (60 attacks or more in 1 minute)',
      descriptionJP: '1分間に60回以上攻撃していた',
      descriptionJPEN: 'Attacked more than 60 times in 1 minute',
      notes: ''
    },
    {
      id: 19,
      bonus: 'Smash King',
      bonusEN: '',
      bonusJP: 'スマッシュが多い',
      score: 3000,
      description: 'Used many Smash Attacks. (50% or more of all hits)',
      descriptionJP: '全ヒット攻撃のうち、スマッシュ攻撃が50%以上だった',
      descriptionJPEN: '50% or more of all hit attacks were smash attacks',
      notes: ''
    },
    {
      id: 20,
      bonus: 'Smash Maniac',
      bonusEN: '',
      bonusJP: 'スマッシュのみ',
      score: 3500,
      description: 'Only used Smash Attacks.',
      descriptionJP: 'スマッシュ攻撃だけをヒットさせた',
      descriptionJPEN: 'Only smash attacks hit',
      notes: ''
    },
    {
      id: 21,
      bonus: 'Smash-less',
      bonusEN: '',
      bonusJP: 'スマッシュなし',
      score: 1500,
      description: 'Used no Smash Attacks.',
      descriptionJP: 'スマッシュ攻撃を一切しなかった',
      descriptionJPEN: 'Didn\'t use any smash attacks',
      notes: ''
    },
    {
      id: 22,
      bonus: 'Specialist',
      bonusEN: '',
      bonusJP: '必殺ワザのみ',
      score: 2200,
      description: 'Hit with only special moves.',
      descriptionJP: '必殺ワザだけをヒットさせた',
      descriptionJPEN: 'Hit only with special moves',
      notes: ''
    },
    {
      id: 23,
      bonus: 'Dedicated Specialist',
      bonusEN: '',
      bonusJP: '必殺一種のみ',
      score: 3100,
      description: 'Used only one kind of special move.',
      descriptionJP: '必殺ワザを一種のみヒットさせた',
      descriptionJPEN: 'Hit with only one special move',
      notes: ''
    },
    {
      id: 24,
      bonus: 'One-Two Punch',
      bonusEN: '',
      bonusJP: 'ワンツーパンチ',
      score: 1800,
      description: 'Hit consecutively with all weak attacks.',
      descriptionJP: '弱攻撃をすべて連続でヒットさせた',
      descriptionJPEN: 'Hit all light attacks in a row',
      notes: ''
    },
    {
      id: 25,
      bonus: 'First Strike',
      bonusEN: '',
      bonusJP: 'まっさきにヒット',
      score: 500,
      description: 'Delivered first blow of match.',
      descriptionJP: '試合開始から一番最初に攻撃を当てた',
      descriptionJPEN: 'Landed the first attack from the start of the match',
      notes: 'The first blow that actually causes damage; missed attacks do not count.'
    },
    {
      id: 26,
      bonus: '150% Damage',
      bonusEN: '',
      bonusJP: 'ダメージ150%',
      score: 1000,
      description: 'Took 150% damage or more. Not valid in team battles.',
      descriptionJP: '自分の蓄積ダメージが150を越えた（チームバトル時無効）',
      descriptionJPEN: 'Accumulated damage exceeded 150 (disabled during team battles)',
      notes: ''
    },
    {
      id: 27,
      bonus: '200% Damage',
      bonusEN: '',
      bonusJP: 'ダメージ200%',
      score: 3000,
      description: 'Took 200% damage or more. Not valid in team battles.',
      descriptionJP: '自分の蓄積ダメージが200を越えた（チームバトル時無効）',
      descriptionJPEN: 'Accumulated damage exceeds 200 (disabled during team battles)',
      notes: ''
    },
    {
      id: 28,
      bonus: '250% Damage',
      bonusEN: '',
      bonusJP: 'ダメージ250%',
      score: 7000,
      description: 'Took 250% damage or more. Not valid in team battles.',
      descriptionJP: '自分の蓄積ダメージが250を越えた（チームバトル時無効）',
      descriptionJPEN: 'Accumulated damage exceeds 250 (disabled during team battles)',
      notes: ''
    },
    {
      id: 29,
      bonus: '300% Damage',
      bonusEN: '',
      bonusJP: 'ダメージ300%',
      score: 10000,
      description: 'Took 300% damage or more. Not valid in team battles.',
      descriptionJP: '自分の蓄積ダメージが300を越えた（チームバトル時無効）',
      descriptionJPEN: 'Accumulated damage exceeds 300 (disabled during team battles)',
      notes: ''
    },
    {
      id: 30,
      bonus: '350% Damage',
      bonusEN: '',
      bonusJP: 'ダメージ350%',
      score: 15000,
      description: 'Took 350% damage or more. Not valid in team battles.',
      descriptionJP: '自分の蓄積ダメージが350を越えた（チームバトル時無効）',
      descriptionJPEN: 'Accumulated damage exceeds 350 (disabled during team battles)',
      notes: ''
    },
    {
      id: 31,
      bonus: 'Heavy Damage',
      bonusEN: '',
      bonusJP: 'ダメージいっぱい',
      score: 20000,
      description: 'Took 400% damage or more. Not valid in team battles.',
      descriptionJP: '自分の蓄積ダメージが400を越えた（チームバトル時無効）',
      descriptionJPEN: 'Accumulated damage exceeds 400 (disabled during team battles)',
      notes: 'Heavy-weights, especially Bowser are much more likely to survive long enough to rack up enough damage than smaller characters.'
    },
    {
      id: 32,
      bonus: 'Sniper',
      bonusEN: '',
      bonusJP: '飛び道具のみ',
      score: 2000,
      description: 'Hit only with flying objects.',
      descriptionJP: '飛び道具だけをヒットさせた',
      descriptionJPEN: 'Hit only with a projectile',
      notes: ''
    },
    {
      id: 33,
      bonus: 'Brawler',
      bonusEN: '',
      bonusJP: '肉弾戦のみ',
      score: 2000,
      description: 'Hit only with direct attacks.',
      descriptionJP: '直接攻撃だけをヒットさせた',
      descriptionJPEN: 'Only direct attacks hit',
      notes: ''
    },
    {
      id: 34,
      bonus: 'Precise Aim',
      bonusEN: '',
      bonusJP: 'ジャストミート',
      score: 10000,
      description: 'All attacks hit immediately after execution.',
      descriptionJP: '攻撃を全て発生させた直後にヒットさせていた',
      descriptionJPEN: 'Hit immediately after generating all attacks',
      notes: ''
    },
    {
      id: 35,
      bonus: 'Pitcher',
      bonusEN: '',
      bonusJP: '投げのみ',
      score: 6000,
      description: 'Fought only with grabs and throws.',
      descriptionJP: 'つかみ、つかみ攻撃、投げのみで戦った',
      descriptionJPEN: 'Fought using only grabs, grab attacks, and throws',
      notes: ''
    },
    {
      id: 36,
      bonus: 'Butterfingers',
      bonusEN: '',
      bonusJP: 'つかみをよく失敗',
      score: -500,
      description: 'Had a high rate of grab and dash-grab failures.',
      descriptionJP: 'つかみ、ダッシュつかみの失敗率が40%以上だった',
      descriptionJPEN: 'Grab, Dash Grab failed rate was over 40%',
      notes: ''
    },
    {
      id: 37,
      bonus: 'All Thumbs',
      bonusEN: '',
      bonusJP: 'つかみを必ず失敗',
      score: -1500,
      description: 'All dash-grab attempts failed. (At least 4 attempted)',
      descriptionJP: 'つかみ、ダッシュつかみを4回以上おこなって全て失敗した',
      descriptionJPEN: 'Grab and Dash Grab 4 times or more and all failed.',
      notes: ''
    },
    {
      id: 38,
      bonus: 'Compass Tosser',
      bonusEN: '',
      bonusJP: '投げ4種をそろえる',
      score: 3500,
      description: 'Used all four directional-throw moves.',
      descriptionJP: '4方向の投げワザを全ておこなった',
      descriptionJPEN: 'Performed all four throwing moves',
      notes: ''
    },
    {
      id: 39,
      bonus: 'Throw Down',
      bonusEN: '',
      bonusJP: '投げてクリア',
      score: 2500,
      description: 'Threw last foe to clear game.',
      descriptionJP: '最後の相手を投げてクリアした',
      descriptionJPEN: 'Cleared by throwing the last opponent',
      notes: ''
    },
    {
      id: 40,
      bonus: 'Pummeler',
      bonusEN: '',
      bonusJP: 'つかみ打撃が多い',
      score: 1500,
      description: 'Did a lot of damage by holding and punching foes.',
      descriptionJP: '与えたダメージの25%以上がつかみ攻撃によるものだった',
      descriptionJPEN: '25% or more of the damage dealt was from grab attacks',
      notes: ''
    },
    {
      id: 41,
      bonus: 'Fists of Fury',
      bonusEN: '',
      bonusJP: 'つかみ後必ず打撃',
      score: 2500,
      description: 'After grabbing, always held and punched, never threw.',
      descriptionJP: 'つかんだ後は必ずつかみ攻撃で、投げをしていなかった',
      descriptionJPEN: 'Always used a grab attack after grabbing, never throwing',
      notes: ''
    },
    {
      id: 42,
      bonus: 'Close Call',
      bonusEN: '',
      bonusJP: '投げぬけ直前投げ',
      score: 2000,
      description: 'Threw just before enemy broke your hold.',
      descriptionJP: 'つかみが外される寸前で投げた',
      descriptionJPEN: 'I threw it just before I lost my grip',
      notes: ''
    },
    {
      id: 43,
      bonus: 'Opportunist',
      bonusEN: '',
      bonusJP: '待ち時間が長い',
      score: -1000,
      description: 'Didn\'t attack for a very long period of time.',
      descriptionJP: '攻撃を当てていない時間が30秒以上あった',
      descriptionJPEN: 'There was more than 30 seconds without attacking',
      notes: ''
    },
    {
      id: 44,
      bonus: '',
      bonusEN: 'Spectator',
      bonusJP: '待ち時間が激長',
      score: -2500,
      description: 'Spent a long time on sloped terrain.',
      descriptionJP: '攻撃を当ててない時間が1分30秒以上あった',
      descriptionJPEN: 'There was more than 1 minute and 30 seconds without an attack',
      notes: ''
    },
    {
      id: 45,
      bonus: '',
      bonusEN: 'Statue',
      bonusJP: '坂に長く立った',
      score: 500,
      description: 'Little left-to-right movement.',
      descriptionJP: '地上にいる時、ななめの地形に多く立っていた',
      descriptionJPEN: 'When on the ground, many stood on diagonal terrain',
      notes: ''
    },
    {
      id: 46,
      bonus: 'Never Look Back',
      bonusEN: '',
      bonusJP: '向きを変えない',
      score: 5000,
      description: 'Never changed direction.',
      descriptionJP: '一度もふりむきの動作をしなかった',
      descriptionJPEN: 'Never turned around',
      notes: ''
    },
    {
      id: 47,
      bonus: 'Stiff Knees',
      bonusEN: '',
      bonusJP: 'しゃがまない',
      score: 300,
      description: 'Did not crouch.',
      descriptionJP: '一度もしゃがまなかった',
      descriptionJPEN: 'never squatted',
      notes: ''
    },
    {
      id: 48,
      bonus: 'Run, Don\'t Walk',
      bonusEN: '',
      bonusJP: '歩かない',
      score: 6500,
      description: 'Did not walk. (Extremely short distance doesn\'t count)',
      descriptionJP: '一歩も歩かなかった',
      descriptionJPEN: 'I didn\'t walk',
      notes: ''
    },
    {
      id: 49,
      bonus: 'Ambler',
      bonusEN: '',
      bonusJP: '歩行時間が長い',
      score: 2500,
      description: 'Walked a lot.',
      descriptionJP: '歩いている時間が全時間の20%以上かつプレイヤーの中で一番長かった',
      descriptionJPEN: 'Spend more than 20% of the time walking and the longest among all players',
      notes: ''
    },
    {
      id: 50,
      bonus: 'No Hurry',
      bonusEN: '',
      bonusJP: '走らない',
      score: 1000,
      description: 'Did not run.',
      descriptionJP: 'ダッシュ、走行をしなかった',
      descriptionJPEN: 'Dash, did not run',
      notes: ''
    },
    {
      id: 51,
      bonus: 'Marathon Man',
      bonusEN: '',
      bonusJP: '走行時間が長い',
      score: 2000,
      description: 'Ran a lot.',
      descriptionJP: '走っている時間が全時間の20%以上かつプレイヤーの中で一番長かった',
      descriptionJPEN: 'The time spent running was 20% or more of the total time and was the longest among players.',
      notes: 'Easiest to get during the Grand Prix Race segment of Adventure Mode.'
    },
    {
      id: 52,
      bonus: 'Eagle',
      bonusEN: '',
      bonusJP: '空中時間が長い',
      score: 1500,
      description: 'Went airborne a lot.',
      descriptionJP: '空中にいる時間が全時間の75%以上かつプレイヤーの中で一番長かった',
      descriptionJPEN: 'Spend more than 75% of the time in the air and the longest among all players',
      notes: 'Easiest to get during the Brinstar escape segment of Adventure Mode.'
    },
    {
      id: 53,
      bonus: 'Aerialist',
      bonusEN: '',
      bonusJP: '空中ジャンプのみ',
      score: 2500,
      description: 'Did not jump from the ground. (No overlap with Cement Shoes)',
      descriptionJP: '地上でジャンプをしなかった',
      descriptionJPEN: 'did not jump on the ground',
      notes: ''
    },
    {
      id: 54,
      bonus: 'Acrobat',
      bonusEN: '',
      bonusJP: '必ず空中ジャンプ',
      score: 3000,
      description: 'Always did a midair jump. (No overlap with Cement Shoes)',
      descriptionJP: 'ジャンプ後に必ず空中ジャンプをしていた',
      descriptionJPEN: 'Always jumped in the air after jumping',
      notes: ''
    },
    {
      id: 55,
      bonus: 'Cement Shoes',
      bonusEN: '',
      bonusJP: 'ジャンプしない',
      score: 4000,
      description: 'Never jumped, including midair jumps.',
      descriptionJP: '空中ジャンプを含め、一度もジャンプしなかった',
      descriptionJPEN: 'Never jumped, including air jumps',
      notes: ''
    },
    {
      id: 56,
      bonus: 'Head Banger',
      bonusEN: '',
      bonusJP: 'カベに多くぶつかる',
      score: 800,
      description: 'Hit walls a lot. (3 or more times per minute)',
      descriptionJP: '走行か相手の攻撃で、カベにぶつかった回数が1分に3回以上',
      descriptionJPEN: 'Collide into walls 3 or more times per minute while running or attacking opponents',
      notes: ''
    },
    {
      id: 57,
      bonus: 'Elbow Room',
      bonusEN: '',
      bonusJP: '敵によくぶつかる',
      score: 2000,
      description: 'Bumped into or pushed foes a lot.',
      descriptionJP: '相手に重なっている時間が全時間の1/30以上',
      descriptionJPEN: 'The time overlapping with the opponent is 1/30 or more of the total time',
      notes: ''
    },
    {
      id: 58,
      bonus: 'Power Shielder',
      bonusEN: '',
      bonusJP: 'ジャストシールド多',
      score: 5000,
      description: 'Used the Power Shield often. (3 times or more in 1 minute)',
      descriptionJP: 'ジャストシールドを1分間に3回以上使った',
      descriptionJPEN: 'Used Just Shield more than 3 times in 1 minute',
      notes: ''
    },
    {
      id: 59,
      bonus: 'Shield Buster',
      bonusEN: '',
      bonusJP: '敵のシールド破壊',
      score: 2500,
      description: 'Broke enemy\'s shield.',
      descriptionJP: '相手のシールドを破壊した',
      descriptionJPEN: 'Destroyed the opponent\'s shield',
      notes: ''
    },
    {
      id: 60,
      bonus: 'Shattered Shield',
      bonusEN: '',
      bonusJP: 'シールドこわされる',
      score: -1000,
      description: 'Shield was broken by enemy.',
      descriptionJP: '相手にシールドを破壊された',
      descriptionJPEN: 'Shield destroyed by opponent',
      notes: ''
    },
    {
      id: 61,
      bonus: 'Shield Stupidity',
      bonusEN: '',
      bonusJP: '自己シールド破壊',
      score: -2000,
      description: 'Broke own shield.',
      descriptionJP: '自らシールドを破壊した',
      descriptionJPEN: 'Destroyed own shield',
      notes: ''
    },
    {
      id: 62,
      bonus: 'Shield Saver',
      bonusEN: '',
      bonusJP: 'シールド寸前解除',
      score: 500,
      description: 'Dropped shield just before it was broken.',
      descriptionJP: 'シールド破壊寸前でシールドを解除した',
      descriptionJPEN: 'Released the shield on the verge of breaking the shield',
      notes: ''
    },
    {
      id: 63,
      bonus: 'Skid Master',
      bonusEN: '',
      bonusJP: 'ずらし距離が長い',
      score: 1000,
      description: 'Had long stun-slide distance. (9 feet or more in 1 minute)',
      descriptionJP: 'ヒットストップずらしの総合距離が長い',
      descriptionJPEN: 'The total distance of hit stop shift is long',
      notes: ''
    },
    {
      id: 64,
      bonus: 'Rock Climber',
      bonusEN: '',
      bonusJP: 'ガケつかまり多い',
      score: 800,
      description: 'Hung from many edges. (4 times or more in one minute)',
      descriptionJP: 'ガケつかまりを1分に4回以上した',
      descriptionJPEN: 'Caught a cliff 4 times or more in 1 minute',
      notes: ''
    },
    {
      id: 65,
      bonus: 'Edge Hog',
      bonusEN: '',
      bonusJP: 'ガケつかまり阻止',
      score: 2500,
      description: 'Hung from edge to prevent opponent from doing the same.',
      descriptionJP: '事前にガケつかまりしていることで、相手のガケつかまりを阻止した',
      descriptionJPEN: 'Prevented the opponent from grabbing the ledge by grabbing the ledge in advance',
      notes: ''
    },
    {
      id: 66,
      bonus: 'Cliffhanger',
      bonusEN: '',
      bonusJP: '土壇場ガケつかまり',
      score: 2000,
      description: 'Grabbed a lot of edges after being knocked off the stage.',
      descriptionJP: 'ふっとんだ後、ガケにつかまった回数が半数以上だった',
      descriptionJPEN: 'More than half the number of times I was caught by a cliff after being knocked down',
      notes: ''
    },
    {
      id: 67,
      bonus: 'Life on the Edge',
      bonusEN: '',
      bonusJP: '余裕ガケつかまり',
      score: 800,
      description: 'After being hit, grabbed edge without a midair jump.',
      descriptionJP: '地上で攻撃を受けた後、空中ジャンプや必殺ワザをせずにガケにつかまった',
      descriptionJPEN: 'After being attacked on the ground, grabbed onto a cliff without jumping in the air or performing a special move.',
      notes: ''
    },
    {
      id: 68,
      bonus: 'Poser',
      bonusEN: '',
      bonusJP: 'アピールが多い',
      score: 2000,
      description: 'Taunted often. (6 or more times in 1 minute)',
      descriptionJP: '1分間に6回以上アピールした',
      descriptionJPEN: 'Appealed 6 or more times in 1 minute',
      notes: ''
    },
    {
      id: 69,
      bonus: 'Poser Poseur',
      bonusEN: '',
      bonusJP: 'アピールを返した',
      score: 500,
      description: 'Taunted right after someone else. (Within 1 second)',
      descriptionJP: '誰かがアピールした直後にアピールした',
      descriptionJPEN: 'Appealed immediately after someone appealed',
      notes: ''
    },
    {
      id: 70,
      bonus: 'Poser Power',
      bonusEN: '',
      bonusJP: 'アピールで攻撃',
      score: 700,
      description: 'Attacked someone with a taunt.',
      descriptionJP: 'アピールで攻撃を与えた',
      descriptionJPEN: 'attacked with an appeal',
      notes: ''
    },
    {
      id: 71,
      bonus: 'Pose Breaker',
      bonusEN: '',
      bonusJP: 'アピールにつっこむ',
      score: 800,
      description: 'Gave a quick weak attack to a taunting opponent.',
      descriptionJP: 'アピールに素早く弱攻撃を1発与えた',
      descriptionJPEN: 'Deal 1 quick light attack to Appeal',
      notes: ''
    },
    {
      id: 72,
      bonus: 'Instant Poser',
      bonusEN: '',
      bonusJP: '敵を倒してアピール',
      score: 100,
      description: 'Taunted right after knocking down a foe. (Within 1 second)',
      descriptionJP: '相手を倒した直後に必ずアピールした',
      descriptionJPEN: 'Always appealed immediately after defeating the opponent',
      notes: ''
    },
    {
      id: 73,
      bonus: 'Control Freak',
      bonusEN: '',
      bonusJP: 'レバガチャが早い',
      score: 1000,
      description: 'Tapped the control stick twice as fast as second fastest tapper.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 74,
      bonus: 'Button Masher',
      bonusEN: '',
      bonusJP: '連射がはやい',
      score: 700,
      description: 'Pressed buttons twice as fast as second fastest presser.',
      descriptionJP: 'ボタン連打が、二番目に早いプレイヤーの倍以上の素早さだった',
      descriptionJPEN: 'Button presses were more than twice as fast as the second fastest player',
      notes: ''
    },
    {
      id: 75,
      bonus: 'Rock Steady',
      bonusEN: '',
      bonusJP: '倒れない',
      score: 3000,
      description: 'Did not fall down.',
      descriptionJP: '一回も倒れなかった',
      descriptionJPEN: 'never fell',
      notes: ''
    },
    {
      id: 76,
      bonus: 'Pratfaller',
      bonusEN: '',
      bonusJP: '全てあおむけ倒れ',
      score: 1500,
      description: 'Always landed face up.',
      descriptionJP: '倒れがすべてあおむけだった',
      descriptionJPEN: 'All the falls were on my back',
      notes: ''
    },
    {
      id: 77,
      bonus: 'Face Planter',
      bonusEN: '',
      bonusJP: '全てうつぶせ倒れ',
      score: 1500,
      description: 'Always fell face down.',
      descriptionJP: '倒れがすべてうつぶせだった',
      descriptionJPEN: 'All the falls were face down',
      notes: ''
    },
    {
      id: 78,
      bonus: 'Twinkle Toes',
      bonusEN: '',
      bonusJP: '受け身全て成功',
      score: 2500,
      description: 'Succeeded on every attempt to absorb damage.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 79,
      bonus: 'No R 4 U',
      bonusEN: '',
      bonusJP: 'LRボタンを押さない',
      score: 300,
      description: 'Did not press the L & R Buttons.',
      descriptionJP: 'LボタンもしくはRボタンを押さなかった',
      descriptionJPEN: 'You didn\'t press the L or R button',
      notes: ''
    },
    {
      id: 80,
      bonus: 'Climactic Clash',
      bonusEN: '',
      bonusJP: '攻撃順番をならべる',
      score: 1200,
      description: 'Hit same enemy with progressively stronger blows.',
      descriptionJP: '同じ相手に弱、強、スマッシュ、必殺ワザと順番に攻撃を与えた',
      descriptionJPEN: 'Attacked the same opponent with weak, strong, smash, and special moves in order.',
      notes: ''
    },
    {
      id: 81,
      bonus: 'Floored',
      bonusEN: '',
      bonusJP: '地形ダメージ多い',
      score: 300,
      description: 'Took a lot of damage from floors. (Over 50% of damage)',
      descriptionJP: 'ダメージ床によるダメージが、総合ダメージの50%以上だった',
      descriptionJPEN: 'Damage floor damage was greater than 50% of total damage',
      notes: 'Brinstar (Adventure Mode) and Race To The Finish (Classic Mode) are the best places to earn this one.'
    },
    {
      id: 82,
      bonus: 'Punching Bag',
      bonusEN: '',
      bonusJP: 'ふくろだたきにあう',
      score: 100,
      description: 'Got stuck between two enemies and hit back and forth.',
      descriptionJP: '相手に左右にはさまれてボコボコにされた',
      descriptionJPEN: 'Being sandwiched between left and right and beaten up',
      notes: ''
    },
    {
      id: 83,
      bonus: 'Stale Moves',
      bonusEN: '',
      bonusJP: 'ワンパターン戦法',
      score: -2000,
      description: 'Persistently used the same attack.',
      descriptionJP: '出したワザの4割以上が同じワザで16発以上攻撃した',
      descriptionJPEN: 'More than 40% of the attacks used hit 16 times or more with the same attack.',
      notes: ''
    },
    {
      id: 84,
      bonus: 'Blind Eye',
      bonusEN: '',
      bonusJP: 'ミスから目をそらす',
      score: 3000,
      description: 'Always looking in opposite direction as oncoming attack.',
      descriptionJP: 'ミスする相手の方向を毎回見ていなかった',
      descriptionJPEN: 'I didn\'t always look in the direction of the opponent who made a mistake',
      notes: ''
    },
    {
      id: 85,
      bonus: 'Crowd Favorite',
      bonusEN: '',
      bonusJP: '声援を受けた',
      score: 2500,
      description: 'Audience cheered for player.',
      descriptionJP: '観客の声援を受けた',
      descriptionJPEN: 'cheered by the audience',
      notes: ''
    },
    {
      id: 86,
      bonus: 'Master of Suspense',
      bonusEN: '',
      bonusJP: 'おどろきが多い',
      score: 2500,
      description: 'Surprised the crowd often. (3 or more times in 1 minute)',
      descriptionJP: '観客に、1分間に3回以上驚かれた',
      descriptionJPEN: 'Surprised the audience at least 3 times in one minute',
      notes: ''
    },
    {
      id: 87,
      bonus: 'Lost in Space',
      bonusEN: '',
      bonusJP: 'ルーペ状態が多い',
      score: 2000,
      description: 'Frequently magnified. (1/4 of time in a magnifying glass)',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 88,
      bonus: 'Lost Luggage',
      bonusEN: '',
      bonusJP: '上下左右ルーペ化',
      score: 3000,
      description: 'Was in magnifying glass on all 4 sides of the screen.',
      descriptionJP: '画面上下左右でルーペになった',
      descriptionJPEN: 'The top, bottom, left, and right of the screen became a magnifying glass',
      notes: ''
    },
    {
      id: 89,
      bonus: 'Half-Minute Man',
      bonusEN: '',
      bonusJP: 'すばやくクリア',
      score: 2500,
      description: 'Beat level within 30 seconds.',
      descriptionJP: '30秒以内でクリアした',
      descriptionJPEN: 'Cleared within 30 seconds',
      notes: ''
    },
    {
      id: 90,
      bonus: 'Pacifist',
      bonusEN: '',
      bonusJP: '一度も攻撃しない',
      score: 3000,
      description: 'Never attacked even once including misses.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 91,
      bonus: 'Peaceful Warrior',
      bonusEN: '',
      bonusJP: '攻撃せずビリでない',
      score: 5000,
      description: 'Never attacked, but didn\'t lose the match.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 92,
      bonus: 'Moment of Silence',
      bonusEN: '',
      bonusJP: '1分間ダメージなし',
      score: 3000,
      description: 'Took no damage for 1 minute. (No overlap with Impervious)',
      descriptionJP: '1分間ダメージを受けなかった',
      descriptionJPEN: 'Take no damage for 1 minute',
      notes: 'You have to get hit at least once to avoid the Impervious bonus.'
    },
    {
      id: 93,
      bonus: 'Impervious',
      bonusEN: '',
      bonusJP: 'ダメージを受けない',
      score: 7000,
      description: 'Didn\'t suffer a single attack.',
      descriptionJP: '攻撃を一度も受けなかった',
      descriptionJPEN: 'never got attacked',
      notes: ''
    },
    {
      id: 94,
      bonus: 'Immortal',
      bonusEN: '',
      bonusJP: 'ミスをしてない',
      score: 5000,
      description: 'Never got knocked down.',
      descriptionJP: '一度のミスもしなかった',
      descriptionJPEN: 'didn\'t make a single mistake',
      notes: ''
    },
    {
      id: 95,
      bonus: 'Switzerland',
      bonusEN: '',
      bonusJP: '攻撃＆ダメージなし',
      score: 12000,
      description: 'Never attacked anyone, never took any damage.',
      descriptionJP: '一度も攻撃せず、一度もダメージを受けなかった',
      descriptionJPEN: 'Never attacked and never took damage',
      notes: 'Automatically earned during the Grand Prix Race if you don\'t attack (which includes most characters\'  +  moves) or get hit by the cars).'
    },
    {
      id: 96,
      bonus: 'Predator',
      bonusEN: '',
      bonusJP: '傷ついた敵ねらい',
      score: -1500,
      description: 'Attacked only opponents with high amounts of damage.',
      descriptionJP: '蓄積ダメージが多い相手ばかり狙っていた',
      descriptionJPEN: 'I was aiming only for opponents with a lot of accumulated damage',
      notes: ''
    },
    {
      id: 97,
      bonus: 'Down, But Not Out',
      bonusEN: '',
      bonusJP: '最も下から復帰',
      score: 2000,
      description: 'Fell all the way down, but got back up the most in a match.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 98,
      bonus: 'Solar Being',
      bonusEN: '',
      bonusJP: '星になってミスのみ',
      score: 800,
      description: 'Only left stage by flying off screen and becoming a star.',
      descriptionJP: '上方向でしかミスしなかった',
      descriptionJPEN: 'Missed only in the upward direction',
      notes: ''
    },
    {
      id: 99,
      bonus: 'Stalker',
      bonusEN: '',
      bonusJP: '一人を集中攻撃',
      score: -1000,
      description: 'Always attacked a particular player.',
      descriptionJP: '3人以上の対戦で、特定のプレイヤーばかりを攻撃した',
      descriptionJPEN: 'Attacked only specific players in a match with 3 or more players',
      notes: 'Can\'t be earned in 1-on-1 matches.'
    },
    {
      id: 100,
      bonus: 'Bully',
      bonusEN: '',
      bonusJP: '一人を集中撃墜',
      score: -2000,
      description: 'Always KO\'d a particular player.',
      descriptionJP: '3人以上の対戦で、特定のプレイヤーばかりを倒した',
      descriptionJPEN: 'Defeated only certain players in a match with 3 or more players',
      notes: 'Can\'t be earned in 1-on-1 matches.'
    },
    {
      id: 101,
      bonus: 'Coward',
      bonusEN: '',
      bonusJP: '敵から遠ざかる',
      score: -500,
      description: 'Spent a long time a great distance away from enemies.',
      descriptionJP: '対戦相手から遠くに離れた場所に長時間いた',
      descriptionJPEN: 'Stayed far away from your opponent for a long time',
      notes: ''
    },
    {
      id: 102,
      bonus: 'In the Fray',
      bonusEN: '',
      bonusJP: '近接戦闘が多い',
      score: 2000,
      description: 'Average distance between you and foes was very small.',
      descriptionJP: '対戦相手に対してとった平均距離が一定未満だった',
      descriptionJPEN: 'The average distance taken against opponents was less than a certain amount',
      notes: ''
    },
    {
      id: 103,
      bonus: 'Friendly Foe',
      bonusEN: '',
      bonusJP: '敵を押さない',
      score: 3000,
      description: 'Never pushed an enemy.',
      descriptionJP: '相手に近づき、「ぬるり」することがなかった',
      descriptionJPEN: 'I didn\'t get close to the other person and get "slimy',
      notes: ''
    },
    {
      id: 104,
      bonus: 'Center Stage',
      bonusEN: '',
      bonusJP: '真ん中キープ',
      score: 2000,
      description: 'Spent a long time in the middle of the arena.',
      descriptionJP: 'ステージの真ん中に長くいた',
      descriptionJPEN: 'long in the middle of the stage',
      notes: ''
    },
    {
      id: 105,
      bonus: 'Merciful Master',
      bonusEN: '',
      bonusJP: '倒さずに勝利',
      score: 3000,
      description: 'Won without KO\'ing anybody.',
      descriptionJP: '自滅などにより、相手を倒さずして一位になった',
      descriptionJPEN: 'Due to self-destruction, etc., you won first place without defeating your opponent.',
      notes: 'All opponents must be killed by teammates (including CPU controlled ones) or suicide.'
    },
    {
      id: 106,
      bonus: 'Star KO',
      bonusEN: '',
      bonusJP: '星にしてKO',
      score: 300,
      description: 'KO\'d an enemy and turned him or her into a star.',
      descriptionJP: '相手を星にしてKOした（軍団では1/10の得点）',
      descriptionJPEN: 'KO the opponent with a star (1/10 score in the army corps)',
      notes: ''
    },
    {
      id: 107,
      bonus: 'Rocket KO',
      bonusEN: '',
      bonusJP: '全員上方で倒した',
      score: 5000,
      description: 'Sent all team enemies flying off the top of the screen.',
      descriptionJP: '相手を全員画面上方でKOした（ザコ戦専用）',
      descriptionJPEN: 'Knocked out all opponents at the top of the screen (only for small fights)',
      notes: ''
    },
    {
      id: 108,
      bonus: 'Wimpy KO',
      bonusEN: '',
      bonusJP: '弱攻撃でKO',
      score: 4000,
      description: 'KO\'d a foe with a weak attack.',
      descriptionJP: '相手を弱攻撃でKOした',
      descriptionJPEN: 'KO the opponent with a weak attack',
      notes: ''
    },
    {
      id: 109,
      bonus: 'Bull\'s-eye KO',
      bonusEN: '',
      bonusJP: '飛び道具でKO',
      score: 800,
      description: 'KO\'d a foe with a firing item.',
      descriptionJP: '相手を飛び道具でKOした',
      descriptionJPEN: 'KO the opponent with a projectile',
      notes: ''
    },
    {
      id: 110,
      bonus: 'Poser KO',
      bonusEN: '',
      bonusJP: 'アピールでKO',
      score: 5000,
      description: 'KO\'d an enemy with a taunt.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: 'Only Luigi\'s taunt is capable of dealing damage.'
    },
    {
      id: 111,
      bonus: 'Cheap KO',
      bonusEN: '',
      bonusJP: '背後からKO',
      score: 500,
      description: 'KO\'d an enemy from behind.',
      descriptionJP: '相手を後ろから攻撃してKOした',
      descriptionJPEN: 'KO the opponent by attacking them from behind',
      notes: ''
    },
    {
      id: 112,
      bonus: 'Bank-Shot KO',
      bonusEN: '',
      bonusJP: '反射物でKO',
      score: 3000,
      description: 'KO\'d an enemy with a deflected item.',
      descriptionJP: '相手の飛び道具を反射してKOした',
      descriptionJPEN: 'KO by reflecting the opponent\'s projectile',
      notes: ''
    },
    {
      id: 113,
      bonus: 'Timely KO',
      bonusEN: '',
      bonusJP: '時間切れでKO',
      score: 3500,
      description: 'KO\'d a foe at the time limit.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 114,
      bonus: 'Special KO',
      bonusEN: '',
      bonusJP: '強いふっとびでKO',
      score: 800,
      description: 'KO\'d an enemy with a special attack.',
      descriptionJP: '相手に強いふっとびを与えてKOした',
      descriptionJPEN: 'KO the opponent with a strong knockoff',
      notes: ''
    },
    {
      id: 115,
      bonus: 'Hangman\'s KO',
      bonusEN: '',
      bonusJP: 'ガケつかまりでKO',
      score: 2000,
      description: 'Attacked an enemy that was hanging from an edge for a KO.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 116,
      bonus: 'KO 64',
      bonusEN: '',
      bonusJP: 'ダメージ64%KO',
      score: 640,
      description: 'KO\'d an enemy when the enemy was at 64% damage.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 117,
      bonus: 'Bubble-Blast KO',
      bonusEN: '',
      bonusJP: 'ルーペの敵をKO',
      score: 1200,
      description: 'Attacked a magnified enemy and KO\'d him or her.',
      descriptionJP: 'ルーペ状態の相手を攻撃し、KOした',
      descriptionJPEN: 'Attacked and KOed an opponent in magnifying glass',
      notes: ''
    },
    {
      id: 118,
      bonus: 'Sacrificial KO',
      bonusEN: '',
      bonusJP: 'みちづれKO',
      score: 1500,
      description: 'The same attack KO\'d both you and your enemy.',
      descriptionJP: '同じ攻撃で、自分と相手がKOになった',
      descriptionJPEN: 'Both you and your opponent were KO\'d with the same attack.',
      notes: 'Use Bom-ombs or other explosives.'
    },
    {
      id: 119,
      bonus: 'Avenger KO',
      bonusEN: '',
      bonusJP: 'リベンジに成功',
      score: 2500,
      description: 'KO\'d a foe right after foe KO\'d you. (Within 5 seconds)',
      descriptionJP: 'KOされた相手を復帰から5秒以内にKOした',
      descriptionJPEN: 'Knocked out a KO opponent within 5 seconds of returning.',
      notes: ''
    },
    {
      id: 120,
      bonus: 'Double KO',
      bonusEN: '',
      bonusJP: '2人同時にKO',
      score: 2000,
      description: 'KO\'d 2 enemies at once.',
      descriptionJP: '2人を同じ攻撃でKOした',
      descriptionJPEN: 'KO 2 people with the same attack',
      notes: ''
    },
    {
      id: 121,
      bonus: 'Triple KO',
      bonusEN: '',
      bonusJP: '3人同時にKO',
      score: 4000,
      description: 'KO\'d 3 enemies at once.',
      descriptionJP: '3人を同じ攻撃でKOした',
      descriptionJPEN: 'KO 3 people with the same attack',
      notes: ''
    },
    {
      id: 122,
      bonus: 'Quadruple KO',
      bonusEN: '',
      bonusJP: '4人同時にKO',
      score: 8000,
      description: 'KO\'d 4 enemies at once.',
      descriptionJP: '4人を同じ攻撃でKOした',
      descriptionJPEN: 'KO 4 people with the same attack',
      notes: 'Possible during the Wireframe fight or against Mr. Game & Watch in All-Star Mode.'
    },
    {
      id: 123,
      bonus: 'Quintuple KO',
      bonusEN: '',
      bonusJP: '5人以上同時にKO',
      score: 15000,
      description: 'KO\'d five enemies at once.',
      descriptionJP: '5人以上を同じ攻撃でKOした',
      descriptionJPEN: 'KO 5 or more with the same attack',
      notes: 'Possible during the Wireframe fight or against Mr. Game & Watch in All-Star Mode.'
    },
    {
      id: 124,
      bonus: 'Dead-Weight KO',
      bonusEN: '',
      bonusJP: '投げ打撃でKO',
      score: 4000,
      description: 'KO\'d an enemy by throwing another enemy at him or her.',
      descriptionJP: '投げ打撃で他の相手を巻き込んでKOした',
      descriptionJPEN: 'KO another opponent with a throwing blow',
      notes: ''
    },
    {
      id: 125,
      bonus: 'Kiss-the-Floor KO',
      bonusEN: '',
      bonusJP: 'ダメージ床経由KO',
      score: 1000,
      description: 'Threw an enemy onto a damaging floor for a KO.',
      descriptionJP: '相手をダメージ床経由でKOした',
      descriptionJPEN: 'KO the opponent via the damage floor',
      notes: ''
    },
    {
      id: 126,
      bonus: 'Assisted KO',
      bonusEN: '',
      bonusJP: 'やくもの利用でKO',
      score: 1500,
      description: 'KO\'d a foe with an item.',
      descriptionJP: '相手をやくもの経由でKOした',
      descriptionJPEN: 'KO the opponent via Yakumono',
      notes: ''
    },
    {
      id: 127,
      bonus: 'Foresight',
      bonusEN: '',
      bonusJP: '手前に落ちる',
      score: 500,
      description: 'Hit the front of the screen.',
      descriptionJP: '画面手前に落ちた',
      descriptionJPEN: 'fell in front of the screen',
      notes: ''
    },
    {
      id: 128,
      bonus: 'First to Fall',
      bonusEN: '',
      bonusJP: '最初に倒される',
      score: -1000,
      description: 'First one to be KO\'d after match begins.',
      descriptionJP: '試合開始から一番最初に倒された',
      descriptionJPEN: 'First defeated from the start of the game',
      notes: ''
    },
    {
      id: 129,
      bonus: 'Cliff Diver',
      bonusEN: '',
      bonusJP: 'ガケから手がすべる',
      score: 500,
      description: 'Let go of the edge of a cliff and fell off stage.',
      descriptionJP: 'ガケつかまりで自然に手を離し、ミスになった',
      descriptionJPEN: 'Caught on a cliff and let go naturally, resulting in a mistake',
      notes: ''
    },
    {
      id: 130,
      bonus: 'Quitter',
      bonusEN: '',
      bonusJP: '無抵抗に落ちる',
      score: -1000,
      description: 'Fell off stage without even trying to recover.',
      descriptionJP: '空中ジャンプを使用せずに下に落ちた',
      descriptionJPEN: 'Fell down without using mid-air jump',
      notes: ''
    },
    {
      id: 131,
      bonus: 'Shameful Fall',
      bonusEN: '',
      bonusJP: 'ダメージ逆転される',
      score: -1500,
      description: 'At less than 50%, got KO\'d by a foe with over 100% damage.',
      descriptionJP: 'ダメージが50％以下の時、ダメージが100％以上の相手に倒される',
      descriptionJPEN: 'When the damage is 50% or less, you will be defeated by an opponent with more than 100% damage',
      notes: 'Easiest to pull off by Jigglypuff use her Rest attack.'
    },
    {
      id: 132,
      bonus: 'World Traveler',
      bonusEN: '',
      bonusJP: '上下左右でミスする',
      score: 2000,
      description: 'Got KO\'d off all four sides of the screen.',
      descriptionJP: '画面上下左右のそれぞれからはみ出してミスした',
      descriptionJPEN: 'I made a mistake by protruding from the top, bottom, left, and right of the screen.',
      notes: ''
    },
    {
      id: 133,
      bonus: 'Ground Pounded',
      bonusEN: '',
      bonusJP: 'ダメージ床でミス',
      score: 500,
      description: 'Got KO\'d by a damaging floor.',
      descriptionJP: 'ダメージ床にとどめをさされた',
      descriptionJPEN: 'Ended up on the damage floor',
      notes: 'Easiest in on the Brinstar stage.'
    },
    {
      id: 134,
      bonus: 'Environmental Hazard',
      bonusEN: '',
      bonusJP: 'やくものでミス',
      score: 1000,
      description: 'Got KO\'d by a part of the stage environment.',
      descriptionJP: 'やくものにとどめをさされた',
      descriptionJPEN: 'I was put to the end by Yakumono',
      notes: ''
    },
    {
      id: 135,
      bonus: 'Angelic',
      bonusEN: '',
      bonusJP: '復活土台で終了',
      score: 2000,
      description: 'Was standing on revival platform when match ended.',
      descriptionJP: '試合終了時、復活土台に乗っていた',
      descriptionJPEN: 'At the end of the game, I was on the foundation of resurrection',
      notes: ''
    },
    {
      id: 136,
      bonus: 'Magnified Finish',
      bonusEN: '',
      bonusJP: 'ルーペで終了',
      score: 1000,
      description: 'Ended the match in a magnifying glass.',
      descriptionJP: '試合終了時、ルーペになっていた',
      descriptionJPEN: 'At the end of the game, it was in a loupe',
      notes: 'On stages with low ceilings, Jigglypuff and Kirby can simply float above the screen right before the match ends.'
    },
    {
      id: 137,
      bonus: 'Fighter Stance',
      bonusEN: '',
      bonusJP: 'アピールで終了',
      score: 500,
      description: 'Ended match while taunting.',
      descriptionJP: '試合終了時、アピールしていた',
      descriptionJPEN: 'At the end of the game, I was appealing',
      notes: ''
    },
    {
      id: 138,
      bonus: 'Mystic',
      bonusEN: '',
      bonusJP: 'やられた瞬間終了',
      score: 2000,
      description: 'Ended match while off-screen.',
      descriptionJP: '試合終了時、落下した直後だった',
      descriptionJPEN: 'At the end of the game, just after the fall',
      notes: ''
    },
    {
      id: 139,
      bonus: 'Shooting Star',
      bonusEN: '',
      bonusJP: '星になって終了',
      score: 1500,
      description: 'Ended match as a star.',
      descriptionJP: '試合終了時、星になっていた',
      descriptionJPEN: 'At the end of the game, it was a star',
      notes: ''
    },
    {
      id: 140,
      bonus: 'Lucky Number Seven',
      bonusEN: '',
      bonusJP: '残り時間7秒で終了',
      score: 3000,
      description: 'Finished with :07 left.',
      descriptionJP: '残り時間7秒でクリアした',
      descriptionJPEN: 'Cleared with 7 seconds left',
      notes: ''
    },
    {
      id: 141,
      bonus: 'Last Second',
      bonusEN: '',
      bonusJP: '残り時間1秒で終了',
      score: 5000,
      description: 'Finished with :01 left.',
      descriptionJP: '残り時間1秒でクリアした',
      descriptionJPEN: 'Cleared with 1 second left',
      notes: ''
    },
    {
      id: 142,
      bonus: 'Lucky Threes',
      bonusEN: '',
      bonusJP: '時間3：33で終了',
      score: 3330,
      description: 'Finished with 3:33 left.',
      descriptionJP: '残り時間3：33の時にクリアした',
      descriptionJPEN: 'Cleared with 3:33 remaining time',
      notes: ''
    },
    {
      id: 143,
      bonus: 'Jackpot',
      bonusEN: '',
      bonusJP: 'ダメージゾロ目終了',
      score: 1110,
      description: 'Damage at end was the same number repeated three times.',
      descriptionJP: '試合終了時、蓄積ダメージが2ケタか3ケタでゾロ目だった',
      descriptionJPEN: 'At the end of the match, the accumulated damage was double or triple digits.',
      notes: ''
    },
    {
      id: 144,
      bonus: 'Full Power',
      bonusEN: '',
      bonusJP: 'ダメージ0%',
      score: 2000,
      description: 'Damage at 0% at finish.',
      descriptionJP: '試合終了時、蓄積ダメージがゼロだった',
      descriptionJPEN: 'Accumulated damage was zero at the end of the match',
      notes: 'You can still take damage, you just have to recover it before the match ends.'
    },
    {
      id: 145,
      bonus: 'Item-less',
      bonusEN: '',
      bonusJP: 'アイテム拾わず',
      score: 1800,
      description: 'Did not use any items.',
      descriptionJP: 'アイテムを拾わなかった',
      descriptionJPEN: 'didn\'t pick up the item',
      notes: ''
    },
    {
      id: 146,
      bonus: 'Item Specialist',
      bonusEN: '',
      bonusJP: 'アイテムのみ',
      score: 2000,
      description: 'Only hit with item attacks.',
      descriptionJP: 'アイテムによる攻撃だけをヒットさせた',
      descriptionJPEN: 'Hit only with item attacks',
      notes: ''
    },
    {
      id: 147,
      bonus: 'Item Chucker',
      bonusEN: '',
      bonusJP: 'アイテム投げのみ',
      score: 3000,
      description: 'Hit only by throwing items.',
      descriptionJP: 'アイテム投げだけをヒットさせた',
      descriptionJPEN: 'Hit only item throws',
      notes: ''
    },
    {
      id: 148,
      bonus: 'Item Smasher',
      bonusEN: '',
      bonusJP: 'アイテムはじきのみ',
      score: 3000,
      description: 'Used only smash attacks with swinging weapons.',
      descriptionJP: '打撃アイテムのスマッシュ攻撃だけをヒットさせた',
      descriptionJPEN: 'Hit only the smash attack of the hit item',
      notes: ''
    },
    {
      id: 149,
      bonus: 'Capsule KO',
      bonusEN: '',
      bonusJP: 'カプセル投げKO',
      score: 800,
      description: 'KO\'d an enemy with a capsule.',
      descriptionJP: '小型キャリアーを投げ付けてKOした',
      descriptionJPEN: 'KO by throwing a small carrier',
      notes: ''
    },
    {
      id: 150,
      bonus: 'Carrier KO',
      bonusEN: '',
      bonusJP: '箱投げタル投げKO',
      score: 800,
      description: 'KO\'d a foe with a large item carrier.',
      descriptionJP: '大型キャリアーを投げ付けてKOした',
      descriptionJPEN: 'KO by throwing a large carrier',
      notes: ''
    },
    {
      id: 151,
      bonus: 'Weight Lifter',
      bonusEN: '',
      bonusJP: '箱の重みに耐える',
      score: 1500,
      description: 'Frequently held heavy items. (Over 5 seconds per minute)',
      descriptionJP: '1分間に5秒以上箱を持つ',
      descriptionJPEN: 'Hold a box for 5 seconds or more in 1 minute',
      notes: ''
    },
    {
      id: 152,
      bonus: 'Item Catcher',
      bonusEN: '',
      bonusJP: 'アイテムキャッチ',
      score: 1000,
      description: 'Caught an item thrown at you.',
      descriptionJP: '投げられたアイテムをダイレクトにキャッチした',
      descriptionJPEN: 'Caught a thrown item directly',
      notes: ''
    },
    {
      id: 153,
      bonus: 'Reciprocator',
      bonusEN: '',
      bonusJP: 'アイテム投げ返し',
      score: 2000,
      description: 'Threw an item thrown at you back at an enemy.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 154,
      bonus: 'Item Self-Destruct',
      bonusEN: '',
      bonusJP: 'アイテムで自滅',
      score: -1000,
      description: 'Item caused player to Self-Destruct.',
      descriptionJP: '自分のアイテムで自滅した',
      descriptionJPEN: 'Self-destructed with own item',
      notes: 'Step onto a Motion Sensor Bomb that you laid down yourself.'
    },
    {
      id: 155,
      bonus: 'Triple Items',
      bonusEN: '',
      bonusJP: '3連続同じアイテム',
      score: 3000,
      description: 'Got the same item 3 times in a row.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: 'Set up a custom match so that only one type of item falls.'
    },
    {
      id: 156,
      bonus: 'Minimalist',
      bonusEN: '',
      bonusJP: 'すぐアイテム放棄',
      score: 100,
      description: 'Spent the least amount of time holding items.',
      descriptionJP: 'アイテムを手放すまでの時間が最も短かった',
      descriptionJPEN: 'Shortest time to let go of items',
      notes: ''
    },
    {
      id: 157,
      bonus: 'Materialist',
      bonusEN: '',
      bonusJP: 'アイテム長く持つ',
      score: 1500,
      description: 'Spent the longest amount of time holding items.',
      descriptionJP: 'アイテムを手放すまでの時間が最も長かった',
      descriptionJPEN: 'Longest time to let go of items',
      notes: ''
    },
    {
      id: 158,
      bonus: 'Item Hog',
      bonusEN: '',
      bonusJP: 'アイテムを多く入手',
      score: 4000,
      description: 'Got 10 or more different kinds of items.',
      descriptionJP: '10種類以上のアイテムを手にした（キャリアー、食べ物を含まない）',
      descriptionJPEN: 'Acquired 10 or more items (not including carriers or food)',
      notes: 'Set up a custom match with all items on High.'
    },
    {
      id: 159,
      bonus: 'Item Collector',
      bonusEN: '',
      bonusJP: 'アイテムひとりじめ',
      score: 4000,
      description: 'Got every kind of item that appeared.',
      descriptionJP: '出現したアイテム類を全てゲットした',
      descriptionJPEN: 'Got all the items that appeared',
      notes: ''
    },
    {
      id: 160,
      bonus: 'Connoisseur',
      bonusEN: '',
      bonusJP: 'たべものひとりじめ',
      score: 3000,
      description: 'Got every kind of food that appeared.',
      descriptionJP: '出現したたべものを全てゲットした',
      descriptionJPEN: 'Got all the food that appeared',
      notes: ''
    },
    {
      id: 161,
      bonus: 'Gourmet',
      bonusEN: '',
      bonusJP: 'たべもののみ',
      score: 2000,
      description: 'Used only food items. (3 or more)',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 162,
      bonus: 'Battering Ram',
      bonusEN: '',
      bonusJP: '打撃アイテムのみ',
      score: 1500,
      description: 'Used only battering items. (3 or more)',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 163,
      bonus: 'Wimp',
      bonusEN: '',
      bonusJP: '回復アイテムのみ',
      score: 1500,
      description: 'Used only recovery items. (3 or more)',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 164,
      bonus: 'Shape Shifter',
      bonusEN: '',
      bonusJP: '変身アイテムのみ',
      score: 1500,
      description: 'Used only transformation items. (3 or more)',
      descriptionJP: 'うさぎずきん、メタル化、スパイクロークだけをいっぱいとる',
      descriptionJPEN: 'Just take a lot of rabbit hoods, metalize, and spike roke',
      notes: ''
    },
    {
      id: 165,
      bonus: 'Chuck Wagon',
      bonusEN: '',
      bonusJP: '投てきアイテムのみ',
      score: 1500,
      description: 'Only grabbed throwing items. (3 or more)',
      descriptionJP: 'アイテムは投てきアイテムのみかつ拾った数が3つ以上',
      descriptionJPEN: 'Items are only thrown items and the number of items picked up is 3 or more',
      notes: ''
    },
    {
      id: 166,
      bonus: 'Parasol Finish',
      bonusEN: '',
      bonusJP: 'パラソル落下終了',
      score: 1600,
      description: 'Was parachuting with the Parasol at match\'s end.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: 'Peach can use her own parasol to earn this.'
    },
    {
      id: 167,
      bonus: 'Gardener Finish',
      bonusEN: '',
      bonusJP: '花を咲かせて終了',
      score: 2000,
      description: 'Put a flower on an enemy\'s head at match\'s end.',
      descriptionJP: '試合終了時、相手に花を咲かせていた',
      descriptionJPEN: 'At the end of the match, I let the opponent bloom',
      notes: ''
    },
    {
      id: 168,
      bonus: 'Flower Finish',
      bonusEN: '',
      bonusJP: '花つき終了',
      score: 1700,
      description: 'Had a flower on head when the match ended.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 169,
      bonus: 'Super Scoper',
      bonusEN: '',
      bonusJP: 'スコープ100以上',
      score: 2000,
      description: 'Did 100% damage or more firing the Super Scope.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 170,
      bonus: 'Screwed Up',
      bonusEN: '',
      bonusJP: 'スクリューを保持',
      score: 2000,
      description: 'Held Screw Attack for 30 seconds or more.',
      descriptionJP: 'スクリューアタックを30秒以上持ち続けた',
      descriptionJPEN: 'Sustained a screw attack for more than 30 seconds',
      notes: 'Jigglypuff can easily grab a Screw Attack and avoid all other enemies for 30 seconds.'
    },
    {
      id: 171,
      bonus: 'Screw Attack KO',
      bonusEN: '',
      bonusJP: 'スクリューでKO',
      score: 2500,
      description: 'Used a Screw Attack to KO an enemy.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 172,
      bonus: 'Warp Star KO',
      bonusEN: '',
      bonusJP: 'ワープスターでKO',
      score: 1000,
      description: 'KO\'d a foe using a Warp Star.',
      descriptionJP: 'ワープスターで相手を倒した',
      descriptionJPEN: 'Defeated an opponent with a warp star',
      notes: ''
    },
    {
      id: 173,
      bonus: 'Mycologist',
      bonusEN: '',
      bonusJP: 'キノコを多く取る',
      score: 2500,
      description: 'Got 3 or more Mushrooms.',
      descriptionJP: 'キノコを3個以上取った',
      descriptionJPEN: 'Caught 3 or more mushrooms',
      notes: ''
    },
    {
      id: 174,
      bonus: 'Mario Maniac',
      bonusEN: '',
      bonusJP: 'スーパーマリオ的',
      score: 8000,
      description: 'Used only Mushrooms, Fire Flowers, and Starmen.',
      descriptionJP: 'キノコ、ファイアフラワー、スターを取り、他のアイテムを拾わなかった',
      descriptionJPEN: 'Took a mushroom, fire flower, or star and didn\'t pick up any other items',
      notes: 'This does not include Poison Mushrooms.'
    },
    {
      id: 175,
      bonus: 'Metal KO',
      bonusEN: '',
      bonusJP: 'メタル化でKO',
      score: 800,
      description: 'KO\'d enemy while metal.',
      descriptionJP: 'メタル化中にKOした',
      descriptionJPEN: 'KO while metalized',
      notes: ''
    },
    {
      id: 176,
      bonus: 'Freezie KO',
      bonusEN: '',
      bonusJP: 'フリーザーでKO',
      score: 2000,
      description: 'Froze enemy with Freezie then KO\'d him or her.',
      descriptionJP: 'フリーザーで相手をこおらせてKOした',
      descriptionJPEN: 'KO the opponent by infuriating him with a freezer',
      notes: ''
    },
    {
      id: 177,
      bonus: 'Flipper KO',
      bonusEN: '',
      bonusJP: 'グルグルでKO',
      score: 2000,
      description: 'KO\'d enemy with a flipper.',
      descriptionJP: 'グルグルでKOした',
      descriptionJPEN: 'KO in circles',
      notes: ''
    },
    {
      id: 178,
      bonus: 'Mr. Saturn Fan',
      bonusEN: '',
      bonusJP: 'どせいさんのみ',
      score: 3000,
      description: 'Only item used was Mr. Saturn.',
      descriptionJP: 'アイテムはどせいさんしか拾わなかった',
      descriptionJPEN: 'Only Mr. Saturn picked up the item',
      notes: ''
    },
    {
      id: 179,
      bonus: 'Mrs. Saturn',
      bonusEN: '',
      bonusJP: 'どせいさんを保持',
      score: 1500,
      description: 'Held Mr. Saturn for 30 seconds or more.',
      descriptionJP: 'どせいさんを30秒以上持ち続けた',
      descriptionJPEN: 'Hold Mr. Saturn for more than 30 seconds',
      notes: ''
    },
    {
      id: 180,
      bonus: 'Saturn Siblings',
      bonusEN: '',
      bonusJP: 'どせいさんを3匹以上',
      score: 4000,
      description: 'Got 3 or more Mr. Saturns.',
      descriptionJP: 'どせいさんを3匹以上拾った',
      descriptionJPEN: 'Picked up 3 or more Mr. Saturns',
      notes: ''
    },
    {
      id: 181,
      bonus: 'Saturn Ringer',
      bonusEN: '',
      bonusJP: 'どせいさんキャッチ',
      score: 4000,
      description: 'Caught a Mr. Saturn thrown at you.',
      descriptionJP: '投げられたどせいさんをキャッチした',
      descriptionJPEN: 'Caught a thrown Mr. Saturn',
      notes: ''
    },
    {
      id: 182,
      bonus: 'Giant KO',
      bonusEN: '',
      bonusJP: '巨大化でKO',
      score: 600,
      description: 'KO\'d a foe while giant.',
      descriptionJP: '巨大化時に敵をKOした',
      descriptionJPEN: 'KO an enemy while growing into a giant',
      notes: ''
    },
    {
      id: 183,
      bonus: 'Tiny KO',
      bonusEN: '',
      bonusJP: '小さい時にKO',
      score: 2500,
      description: 'KO\'d a foe while tiny.',
      descriptionJP: '小さい時に敵をKOした',
      descriptionJPEN: 'KO an enemy when he was young',
      notes: ''
    },
    {
      id: 184,
      bonus: 'Invisible KO',
      bonusEN: '',
      bonusJP: '透明化でKO',
      score: 800,
      description: 'KO\'d a foe while invisible.',
      descriptionJP: 'スパイクローク状態の時に敵をKOした',
      descriptionJPEN: 'KO an enemy while in Spike Rook',
      notes: ''
    },
    {
      id: 185,
      bonus: 'Bunny-Hood Blast',
      bonusEN: '',
      bonusJP: 'ウサギずきんでKO',
      score: 1200,
      description: 'KO\'d someone while wearing a Bunny Hood.',
      descriptionJP: 'ウサギずきんをつけたままKOした',
      descriptionJPEN: 'KO while wearing a rabbit hood',
      notes: ''
    },
    {
      id: 186,
      bonus: 'Vegetarian',
      bonusEN: '',
      bonusJP: 'トマトを2個以上',
      score: 1800,
      description: 'Got 2 or more Maxim Tomatoes.',
      descriptionJP: 'マキシマムトマトを2個以上とった',
      descriptionJPEN: 'Caught 2 or more Maximum Tomatoes',
      notes: ''
    },
    {
      id: 187,
      bonus: 'Heartthrob',
      bonusEN: '',
      bonusJP: 'ハートを2個以上',
      score: 2800,
      description: 'Got 2 or more Heart Containers.',
      descriptionJP: 'ハートのうつわを2個以上とった',
      descriptionJPEN: 'Collected 2 or more Heart Vessel',
      notes: ''
    },
    {
      id: 188,
      bonus: 'Invincible Finish',
      bonusEN: '',
      bonusJP: 'スター無敵で終了',
      score: 1200,
      description: 'Player is invincible at the end of the match.',
      descriptionJP: '試合終了時、スーパースターをとって無敵状態だった',
      descriptionJPEN: 'At the end of the match, you were invincible with a superstar',
      notes: ''
    },
    {
      id: 189,
      bonus: 'Invincible KO',
      bonusEN: '',
      bonusJP: 'スター無敵でKO',
      score: 800,
      description: 'KO\'d a foe while invincible.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 190,
      bonus: 'Beam Swordsman',
      bonusEN: '',
      bonusJP: 'ビームソードでKO',
      score: 800,
      description: 'KO\'d a foe with a Beam Sword.',
      descriptionJP: 'ビームソードでKOした',
      descriptionJPEN: 'KO with beam sword',
      notes: ''
    },
    {
      id: 191,
      bonus: 'Home-Run King',
      bonusEN: '',
      bonusJP: 'バットでホームラン',
      score: 600,
      description: 'KO\'d a foe with the Home-Run Bat.',
      descriptionJP: 'ホームランバットでかっとばしてKOした',
      descriptionJPEN: 'KO with a home run bat',
      notes: ''
    },
    {
      id: 192,
      bonus: 'Laser Marksman',
      bonusEN: '',
      bonusJP: 'レイガン全発ヒット',
      score: 4000,
      description: 'Hit with every blast from the Ray Gun until it ran out.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 193,
      bonus: 'Flame Thrower',
      bonusEN: '',
      bonusJP: 'フラワー連続ヒット',
      score: 1600,
      description: 'Got a 10 combo or higher with the Fire Flower.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 194,
      bonus: 'Headless Hammer',
      bonusEN: '',
      bonusJP: 'スカハンマーを取る',
      score: 2500,
      description: 'Grabbed a broken hammer.',
      descriptionJP: 'ハンマーヘッドがすっぽぬけてしまった',
      descriptionJPEN: 'Hammerhead slipped out',
      notes: 'Pick up the head of the hammer that fell off and use it as a projectile.'
    },
    {
      id: 195,
      bonus: 'Super Spy',
      bonusEN: '',
      bonusJP: 'センサー爆弾でKO',
      score: 800,
      description: 'KO\'d someone with a Motion-Sensor Bomb.',
      descriptionJP: 'センサー爆弾の爆発でKOした',
      descriptionJPEN: 'KO with sensor bomb explosion',
      notes: ''
    },
    {
      id: 196,
      bonus: 'Bob-omb\'s Away',
      bonusEN: '',
      bonusJP: 'はぐれボム兵でミス',
      score: -500,
      description: 'KO\'d by a wandering Bob-omb.',
      descriptionJP: '誰の所持物でもないボム兵にやられてミスした',
      descriptionJPEN: 'I made a mistake by being killed by a bomb soldier who didn\'t belong to anyone',
      notes: ''
    },
    {
      id: 197,
      bonus: 'Pokémon KO',
      bonusEN: '',
      bonusJP: 'ポケモンでKO',
      score: 1000,
      description: 'KO\'d a foe with a Pokémon.',
      descriptionJP: 'ポケモンの攻撃でKOした',
      descriptionJPEN: 'KO with a Pokemon attack',
      notes: ''
    },
    {
      id: 198,
      bonus: 'Mew Catcher',
      bonusEN: '',
      bonusJP: 'ミュウをゲット',
      score: 10000,
      description: 'Mew appeared.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: 'Once you\'ve unlocked every character there is a 1/251 chance that Mew will appear. Simply start a match with Pokeballs on high and throw them until he appears.'
    },
    {
      id: 199,
      bonus: 'Celebi Catcher',
      bonusEN: '',
      bonusJP: 'セレビィをゲット',
      score: 8000,
      description: 'Celebi appeared.',
      descriptionJP: 'セレビィを出現させた',
      descriptionJPEN: 'Spawned Celebi',
      notes: 'Once you\'ve unlocked every stage there is a 1/251 chance that Celebi will appear. Simply start a match with Pokeballs on high and throw them until he appears.'
    },
    {
      id: 200,
      bonus: 'Goomba KO',
      bonusEN: '',
      bonusJP: 'クリボーKO',
      score: 100,
      description: 'KO\'d a Goomba.',
      descriptionJP: 'クリボーを倒した',
      descriptionJPEN: 'Defeated Goomba',
      notes: 'Found in the Mushroom Kingdom segment of Adventure Mode'
    },
    {
      id: 201,
      bonus: 'Koopa KO',
      bonusEN: '',
      bonusJP: 'ノコノコKO',
      score: 200,
      description: 'KO\'d a Koopa.',
      descriptionJP: 'ノコノコを倒した',
      descriptionJPEN: 'Defeated Koopa',
      notes: 'Found in the Mushroom Kingdom segment of Adventure Mode'
    },
    {
      id: 202,
      bonus: 'Paratroopa KO',
      bonusEN: '',
      bonusJP: 'パタパタKO',
      score: 300,
      description: 'KO\'d a Paratroopa.',
      descriptionJP: 'パタパタを倒した',
      descriptionJPEN: 'beat patter',
      notes: 'Found in the Mushroom Kingdom segment of Adventure Mode'
    },
    {
      id: 203,
      bonus: 'ReDead KO',
      bonusEN: '',
      bonusJP: 'リーデッドKO',
      score: 300,
      description: 'KO\'d a ReDead.',
      descriptionJP: 'リーデッドを倒した',
      descriptionJPEN: 'Defeated the Leaded',
      notes: 'Found in the Underground Maze segment of Adventure Mode'
    },
    {
      id: 204,
      bonus: 'Like-Like KO',
      bonusEN: '',
      bonusJP: 'ライクライクKO',
      score: 500,
      description: 'KO\'d a Like-Like.',
      descriptionJP: 'ライクライクを倒した',
      descriptionJPEN: 'Defeated Like Like',
      notes: 'Found in the Underground Maze segment of Adventure Mode'
    },
    {
      id: 205,
      bonus: 'Octorok KO',
      bonusEN: '',
      bonusJP: 'オクタロックKO',
      score: 150,
      description: 'KO\'d an Octarok',
      descriptionJP: 'オクタロックを倒した',
      descriptionJPEN: 'Defeated Octalok',
      notes: 'Found in the Underground Maze segment of Adventure Mode'
    },
    {
      id: 206,
      bonus: 'Topi KO',
      bonusEN: '',
      bonusJP: 'トッピーKO',
      score: 200,
      description: 'KO\'d a Topi.',
      descriptionJP: 'トッピーを倒した',
      descriptionJPEN: 'beat toppy',
      notes: 'Found in the Icicle Mountain segment of Adventure Mode'
    },
    {
      id: 207,
      bonus: 'Polar Bear KO',
      bonusEN: '',
      bonusJP: 'ホワイトベアKO',
      score: 800,
      description: 'KO\'d a Polar Bear.',
      descriptionJP: 'ホワイトベアを倒した',
      descriptionJPEN: 'defeated the white bear',
      notes: 'Found in the Icicle Mountain segment of Adventure Mode'
    },
    {
      id: 208,
      bonus: 'Shy Guy KO',
      bonusEN: '',
      bonusJP: 'ヘイホーKO',
      score: 20,
      description: 'KO\'d a Shy Guy.',
      descriptionJP: 'ヘイホーを倒した',
      descriptionJPEN: 'Defeated Hey Ho',
      notes: 'Found on the Yoshi\'s Story stage.'
    },
    {
      id: 209,
      bonus: 'First Place',
      bonusEN: '',
      bonusJP: '一位を取った',
      score: 1000,
      description: 'Got 1st place in a timed match.',
      descriptionJP: 'タイム制の得点計算で一位をとった',
      descriptionJPEN: 'Take first place in time-based scoring',
      notes: ''
    },
    {
      id: 210,
      bonus: 'Last Place',
      bonusEN: '',
      bonusJP: 'ビリだった',
      score: -1000,
      description: 'Got last place in a timed match.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 211,
      bonus: 'Wire to Wire',
      bonusEN: '',
      bonusJP: '最初からトップ',
      score: 2000,
      description: 'Led in points from the start to the finish.',
      descriptionJP: '得点差がついた瞬間から最後まで常にトップだった',
      descriptionJPEN: 'From the moment we scored the lead until the end, we were always on top',
      notes: ''
    },
    {
      id: 212,
      bonus: 'Whipping Boy',
      bonusEN: '',
      bonusJP: '最初からビリ',
      score: -1500,
      description: 'Trailed in points from the start to the finish.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 213,
      bonus: 'KO Artist',
      bonusEN: '',
      bonusJP: '撃墜魔人',
      score: 3000,
      description: 'Had a lot of KOs. (More than 3 and double second place)',
      descriptionJP: '撃墜数が著しく多かった',
      descriptionJPEN: 'The number of shots down was extremely high',
      notes: ''
    },
    {
      id: 214,
      bonus: 'KO Master',
      bonusEN: '',
      bonusJP: '撃墜王',
      score: 1500,
      description: 'Had the most KOs. (Not awarded if Artist is earned)',
      descriptionJP: '撃墜数が一番多かった',
      descriptionJPEN: 'Most shot down',
      notes: ''
    },
    {
      id: 215,
      bonus: 'Offensive Artist',
      bonusEN: '',
      bonusJP: '攻撃魔人',
      score: 2000,
      description: 'Caused a lot of damage.',
      descriptionJP: '与えたダメージが激しく多かった',
      descriptionJPEN: 'A lot of damage was dealt',
      notes: ''
    },
    {
      id: 216,
      bonus: 'Offensive Master',
      bonusEN: '',
      bonusJP: '攻撃王',
      score: 1000,
      description: 'Caused the most damage.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 217,
      bonus: 'Frequent Faller',
      bonusEN: '',
      bonusJP: '落下魔人',
      score: -1000,
      description: 'Had a lot of falls.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 218,
      bonus: 'Fall Guy',
      bonusEN: '',
      bonusJP: '落下王',
      score: -500,
      description: 'Had the most falls.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 219,
      bonus: 'Self-Destructor',
      bonusEN: '',
      bonusJP: '自滅魔人',
      score: -2000,
      description: 'Had a lot of Self-Destructs.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 220,
      bonus: 'Master of Disaster',
      bonusEN: '',
      bonusJP: '自滅王',
      score: -1000,
      description: 'Had the most Self-Destructs.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 221,
      bonus: 'KOs',
      bonusEN: '',
      bonusJP: 'x 撃破',
      score: 500,
      description: 'Counts each KO.',
      descriptionJP: 'ひとり撃墜するごとに加算',
      descriptionJPEN: 'Add for each shot down',
      notes: ''
    },
    {
      id: 222,
      bonus: 'Falls',
      bonusEN: '',
      bonusJP: 'x 落下',
      score: -500,
      description: 'Counts each fall. (Self-destructs not counted)',
      descriptionJP: '1回ミスするたびに減算（自滅した場合は除く）',
      descriptionJPEN: 'Subtract each time you miss (except when self-destructed)',
      notes: ''
    },
    {
      id: 223,
      bonus: 'SDs',
      bonusEN: '',
      bonusJP: 'x 自滅',
      score: -500,
      description: 'counts each self-destruct.',
      descriptionJP: '1回自滅する度に減算',
      descriptionJPEN: 'Subtract each time you self-destruct',
      notes: ''
    },
    {
      id: 224,
      bonus: 'Target Master',
      bonusEN: '',
      bonusJP: 'ターゲット全破壊',
      score: 30000,
      description: 'Smashed all targets in Target Test!',
      descriptionJP: '”ターゲットを壊せ！”でターゲットを全てこわした',
      descriptionJPEN: 'Destroyed all targets with "Break the Target!',
      notes: 'Can only be received while playing Classic Mode.'
    },
    {
      id: 225,
      bonus: 'Hobbyist',
      bonusEN: '',
      bonusJP: 'フィギュアゲット',
      score: 1000,
      description: 'Got at least one trophy before the stage ended.',
      descriptionJP: 'ステージクリアまでに、フィギュアを1つでも取った',
      descriptionJPEN: 'Collect at least one figure before clearing the stage',
      notes: ''
    },
    {
      id: 226,
      bonus: 'Collector',
      bonusEN: '',
      bonusJP: 'フィギュア全回収',
      score: 30000,
      description: 'Snagged all trophies that appeared!',
      descriptionJP: '”フィギュアゲット”で全フィギュアを取った',
      descriptionJPEN: 'Obtained all figures in "Figure Get',
      notes: ''
    },
    {
      id: 227,
      bonus: 'No-Damage Clear',
      bonusEN: '',
      bonusJP: 'ノーダメージクリア',
      score: 300000,
      description: 'Cleared all levels without taking any damage.',
      descriptionJP: '全部の面でダメージを受けずにクリアした',
      descriptionJPEN: 'Cleared without taking damage on all sides',
      notes: ''
    },
    {
      id: 228,
      bonus: 'No-Miss Clear',
      bonusEN: '',
      bonusJP: 'ノーミスクリア',
      score: 10000,
      description: 'Cleared without losing a single life.',
      descriptionJP: '1回もミスせずにゲームクリアした',
      descriptionJPEN: 'Completed the game without making a single mistake',
      notes: ''
    },
    {
      id: 229,
      bonus: 'Continuation',
      bonusEN: '',
      bonusJP: 'コンティニュー',
      score: -20000,
      description: 'Cleared by continuing.',
      descriptionJP: 'コンティニューした',
      descriptionJPEN: 'Continued',
      notes: ''
    },
    {
      id: 230,
      bonus: 'Speedster',
      bonusEN: '',
      bonusJP: '手早くクリア',
      score: 10000,
      description: 'Cleared all levels quickly.',
      descriptionJP: 'ゲームクリアが早かった',
      descriptionJPEN: 'Game cleared quickly',
      notes: ''
    },
    {
      id: 231,
      bonus: 'Speed Demon',
      bonusEN: '',
      bonusJP: '速攻でクリア',
      score: 20000,
      description: 'Cleared all levels very quickly.',
      descriptionJP: 'ゲームクリアがとても早かった',
      descriptionJPEN: 'Game cleared very quickly',
      notes: 'Cannot received at the same time as Speedster.'
    },
    {
      id: 232,
      bonus: 'Melee Master',
      bonusEN: '',
      bonusJP: '回復なしクリア',
      score: 100000,
      description: 'Cleared All-Star mode without recovering damage even once.',
      descriptionJP: 'オールスターモードで、一切回復せずクリア',
      descriptionJPEN: 'Clear without recovering anything in All-Star Mode',
      notes: ''
    },
    {
      id: 233,
      bonus: 'Classic Clear',
      bonusEN: '',
      bonusJP: 'シンプルクリア',
      score: 50000,
      description: 'Cleared the Classic mode.',
      descriptionJP: 'レギュラー戦”シンプル”をクリアした',
      descriptionJPEN: 'Cleared Regular Battle "Simple',
      notes: ''
    },
    {
      id: 234,
      bonus: 'Adventure Clear',
      bonusEN: '',
      bonusJP: 'アドベンチャークリア',
      score: 50000,
      description: 'Cleared the Adventure mode.',
      descriptionJP: 'レギュラー戦”アドベンチャー”をクリアした',
      descriptionJPEN: 'Cleared Regular Battle "Adventure',
      notes: ''
    },
    {
      id: 235,
      bonus: 'All-Star Clear',
      bonusEN: '',
      bonusJP: 'オールスタークリア',
      score: 50000,
      description: 'Cleared the All-Star mode.',
      descriptionJP: 'オールスターをクリアした',
      descriptionJPEN: 'Cleared All-Star',
      notes: ''
    },
    {
      id: 236,
      bonus: 'Very-Hard Clear',
      bonusEN: '',
      bonusJP: 'ベリーハードクリア',
      score: 200000,
      description: 'Cleared the Very-Hard mode.',
      descriptionJP: 'ベリーハードをクリアした',
      descriptionJPEN: 'Cleared Very Hard',
      notes: 'Stock 5 and challenged many times. It\'s OK to continue'
    },
    {
      id: 237,
      bonus: 'Crazy Hand KO',
      bonusEN: '',
      bonusJP: '左手を倒した',
      score: 80000,
      description: 'Defeated Crazy Hand in Classic mode.',
      descriptionJP: 'シンプルでクレイジーハンドを倒した',
      descriptionJPEN: 'Defeated Simple and Crazy Hand',
      notes: ''
    },
    {
      id: 238,
      bonus: 'Luigi KO',
      bonusEN: '',
      bonusJP: 'ルイージを倒した',
      score: 20,
      description: 'Defeated Luigi in Adventure mode.',
      descriptionJP: '”アドベンチャー”でルイージを倒した',
      descriptionJPEN: 'Defeated Luigi in "Adventure',
      notes: 'Finish the first segment of Adventure Mode with a \'2\' in the seconds column of the time and you\'ll fight Luigi instead of Mario.'
    },
    {
      id: 239,
      bonus: 'Link Master',
      bonusEN: '',
      bonusJP: 'リンクを全員倒した',
      score: 30000,
      description: 'Defeated all five Links in Adventure mode.',
      descriptionJP: '”アドベンチャー”でリンクを5人全員倒した',
      descriptionJPEN: 'Defeated all 5 Links in "Adventure',
      notes: 'Slowly walk into a battle area and if you see the Triforce, either back out or jump across the room using the platforms to avoid ending the stage early.'
    },
    {
      id: 240,
      bonus: 'Giant Kirby KO',
      bonusEN: '',
      bonusJP: '巨大カービィ撃破',
      score: 10000,
      description: 'Defeated Giant Kirby in Adventure mode.',
      descriptionJP: '”アドベンチャー”で巨大カービィを倒した',
      descriptionJPEN: 'Defeated Giant Kirby in "Adventure',
      notes: 'Beat the Kirby Team in under 30 seconds to face the Giant Kirby.'
    },
    {
      id: 241,
      bonus: 'Metal Bros. KO',
      bonusEN: '',
      bonusJP: 'メタル兄弟を倒した',
      score: 8000,
      description: 'KO\'d Metal Bros. in Adventure mode.',
      descriptionJP: '”アドベンチャー”でメタルマリオとメタルルイージを倒した',
      descriptionJPEN: 'Defeated Metal Mario and Metal Luigi in "Adventure',
      notes: 'Once Luigi is unlocked, Metal Luigi will always fight alongside Metal Mario.'
    },
    {
      id: 242,
      bonus: 'Giga Bowser KO',
      bonusEN: '',
      bonusJP: 'ギガクッパを倒した',
      score: 100000,
      description: 'Defeated Giga Bowser in Adventure mode.',
      descriptionJP: 'アドベンチャーでギガクッパを倒した',
      descriptionJPEN: 'Defeated Giga Bowser in Adventure',
      notes: 'If you finish Adventure Mode (including the fight against regular Bowser) on Normal or higher difficulty without continuing and earn the Speedster bonus, you\'ll fight Giga Bowser.'
    },
    {
      id: 243,
      bonus: '',
      bonusEN: '',
      bonusJP: '攻撃が豊富',
      score: '',
      description: '',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 244,
      bonus: '',
      bonusEN: '',
      bonusJP: 'シールドリフレクトが多い',
      score: '',
      description: '',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 245,
      bonus: '',
      bonusEN: '',
      bonusJP: 'レイガンでKO',
      score: '',
      description: '',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 246,
      bonus: '',
      bonusEN: '',
      bonusJP: 'つかんで投げない',
      score: '',
      description: '',
      descriptionJP: '3回以上つかんで、攻撃も投げもしない',
      descriptionJPEN: 'Grab 3 or more times, do not attack or throw',
      notes: ''
    },
    {
      id: 247,
      bonus: '',
      bonusEN: 'Lethal Weapon',
      bonusJP: '',
      score: 7000,
      description: 'Hit with a wide variety of attacks.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 248,
      bonus: '',
      bonusEN: 'Cuddly Bear',
      bonusJP: '',
      score: 2000,
      description: 'Performed at least 3 grabs, but did not attack or throw enemy.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 249,
      bonus: '',
      bonusEN: 'Button Holder',
      bonusJP: '',
      score: 4000,
      description: 'Held down the A or B button. (For the entire match)',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 250,
      bonus: '',
      bonusEN: 'Floor Diver',
      bonusJP: '',
      score: 1500,
      description: 'Dropped through floors often. (12 times in 1 minute)',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 251,
      bonus: '',
      bonusEN: 'Straight Shooter',
      bonusJP: '',
      score: 1500,
      description: 'Used only shooting items. (3 or more)',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 252,
      bonus: '',
      bonusEN: 'Hammer Throw',
      bonusJP: '',
      score: 1500,
      description: 'Threw the hammer away.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    },
    {
      id: 253,
      bonus: '',
      bonusEN: 'Bob-omb Squad',
      bonusJP: '',
      score: 2500,
      description: 'Grabbed a Bob-omb just before it exploded, and wasn\'t hurt.',
      descriptionJP: '',
      descriptionJPEN: '',
      notes: ''
    }
  ];
};
