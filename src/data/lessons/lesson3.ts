import type { StudyItem } from "../../types/study";

export const lesson3: StudyItem[] = [
  // Nouns – Entertainment and Sports
  { id: "l3-eiga", lesson: 3, category: "vocab", promptJa: "映画", kana: "えいが", romaji: "eiga", answerEn: "movie", distractors: ["music", "magazine", "sports"], tags: ["lesson3", "noun"] },
  { id: "l3-ongaku", lesson: 3, category: "vocab", promptJa: "音楽", kana: "おんがく", romaji: "ongaku", answerEn: "music", distractors: ["movie", "magazine", "TV"], tags: ["lesson3", "noun"] },
  { id: "l3-zasshi", lesson: 3, category: "vocab", promptJa: "雑誌", kana: "ざっし", romaji: "zasshi", answerEn: "magazine", distractors: ["movie", "music", "TV"], tags: ["lesson3", "noun"] },
  { id: "l3-supootsu", lesson: 3, category: "vocab", promptJa: "スポーツ", kana: "すぽーつ", romaji: "supootsu", answerEn: "sports", distractors: ["movie", "tennis", "TV"], tags: ["lesson3", "noun"] },
  { id: "l3-deeto", lesson: 3, category: "vocab", promptJa: "デート", kana: "でーと", romaji: "deeto", answerEn: "date (romantic, not calendar)", distractors: ["sports", "tennis", "TV"], tags: ["lesson3", "noun"] },
  { id: "l3-tenisu", lesson: 3, category: "vocab", promptJa: "テニス", kana: "てにす", romaji: "tenisu", answerEn: "tennis", distractors: ["sports", "movie", "TV"], tags: ["lesson3", "noun"] },
  { id: "l3-terebi", lesson: 3, category: "vocab", promptJa: "テレビ", kana: "てれび", romaji: "terebi", answerEn: "TV", distractors: ["movie", "music", "magazine"], tags: ["lesson3", "noun"] },

  // Nouns – Foods and Drinks
  { id: "l3-aisukuriimu", lesson: 3, category: "vocab", promptJa: "アイスクリーム", kana: "あいすくりーむ", romaji: "aisukuriimu", answerEn: "ice cream", distractors: ["hamburger", "sake; alcoholic drink", "green tea"], tags: ["lesson3", "noun"] },
  { id: "l3-hanbaagaa", lesson: 3, category: "vocab", promptJa: "ハンバーガー", kana: "はんばーがー", romaji: "hanbaagaa", answerEn: "hamburger", distractors: ["ice cream", "sake; alcoholic drink", "coffee"], tags: ["lesson3", "noun"] },
  { id: "l3-osake", lesson: 3, category: "vocab", promptJa: "お酒", kana: "おさけ", romaji: "osake", answerEn: "sake; alcoholic drink", distractors: ["green tea", "coffee", "water"], tags: ["lesson3", "noun"] },
  { id: "l3-ocha", lesson: 3, category: "vocab", promptJa: "お茶", kana: "おちゃ", romaji: "ocha", answerEn: "green tea", distractors: ["coffee", "water", "ice cream"], tags: ["lesson3", "noun"] },
  { id: "l3-koohii", lesson: 3, category: "vocab", promptJa: "コーヒー", kana: "こーひー", romaji: "koohii", answerEn: "coffee", distractors: ["green tea", "water", "hamburger"], tags: ["lesson3", "noun"] },
  { id: "l3-mizu", lesson: 3, category: "vocab", promptJa: "水", kana: "みず", romaji: "mizu", answerEn: "water", distractors: ["coffee", "green tea", "ice cream"], tags: ["lesson3", "noun"] },
  { id: "l3-asagohan", lesson: 3, category: "vocab", promptJa: "朝ご飯", kana: "あさごはん", romaji: "asagohan", answerEn: "breakfast", distractors: ["lunch", "dinner", "ice cream"], tags: ["lesson3", "noun"] },
  { id: "l3-hirugohan", lesson: 3, category: "vocab", promptJa: "昼ご飯", kana: "ひるごはん", romaji: "hirugohan", answerEn: "lunch", distractors: ["breakfast", "dinner", "hamburger"], tags: ["lesson3", "noun"] },
  { id: "l3-bangohan", lesson: 3, category: "vocab", promptJa: "晩ご飯", kana: "ばんごはん", romaji: "bangohan", answerEn: "dinner", distractors: ["breakfast", "lunch", "ice cream"], tags: ["lesson3", "noun"] },

  // Nouns – Places
  { id: "l3-ie", lesson: 3, category: "vocab", promptJa: "家", kana: "いえ", romaji: "ie", answerEn: "home; house", distractors: ["home; house; my place", "school", "cafe"], tags: ["lesson3", "noun"] },
  { id: "l3-uchi", lesson: 3, category: "vocab", promptJa: "家", kana: "うち", romaji: "uchi", answerEn: "home; house; my place", distractors: ["home; house", "school", "cafe"], tags: ["lesson3", "noun"] },
  { id: "l3-gakkou", lesson: 3, category: "vocab", promptJa: "学校", kana: "がっこう", romaji: "gakkou", answerEn: "school", distractors: ["home; house", "cafe", "movie"], tags: ["lesson3", "noun"] },
  { id: "l3-kafe", lesson: 3, category: "vocab", promptJa: "カフェ", kana: "かふぇ", romaji: "kafe", answerEn: "cafe", distractors: ["school", "home; house", "hamburger"], tags: ["lesson3", "noun"] },

  // Nouns – Time
  { id: "l3-ashita", lesson: 3, category: "vocab", promptJa: "明日", kana: "あした", romaji: "ashita", answerEn: "tomorrow", distractors: ["today", "morning", "tonight"], tags: ["lesson3", "noun"] },
  { id: "l3-kyou", lesson: 3, category: "vocab", promptJa: "今日", kana: "きょう", romaji: "kyou", answerEn: "today", distractors: ["tomorrow", "morning", "every day"], tags: ["lesson3", "noun"] },
  { id: "l3-asa", lesson: 3, category: "vocab", promptJa: "朝", kana: "あさ", romaji: "asa", answerEn: "morning", distractors: ["tonight", "every night", "weekend"], tags: ["lesson3", "noun"] },
  { id: "l3-konban", lesson: 3, category: "vocab", promptJa: "今晩", kana: "こんばん", romaji: "konban", answerEn: "tonight", distractors: ["morning", "every night", "Sunday"], tags: ["lesson3", "noun"] },
  { id: "l3-mainichi", lesson: 3, category: "vocab", promptJa: "毎日", kana: "まいにち", romaji: "mainichi", answerEn: "every day", distractors: ["every night", "weekend", "Saturday"], tags: ["lesson3", "noun"] },
  { id: "l3-maiban", lesson: 3, category: "vocab", promptJa: "毎晩", kana: "まいばん", romaji: "maiban", answerEn: "every night", distractors: ["every day", "weekend", "Saturday"], tags: ["lesson3", "noun"] },
  { id: "l3-shuumatsu", lesson: 3, category: "vocab", promptJa: "週末", kana: "しゅうまつ", romaji: "shuumatsu", answerEn: "weekend", distractors: ["every day", "Saturday", "Sunday"], tags: ["lesson3", "noun"] },
  { id: "l3-douyoubi", lesson: 3, category: "vocab", promptJa: "土曜日", kana: "どようび", romaji: "doyoubi", answerEn: "Saturday", distractors: ["Sunday", "weekend", "every day"], tags: ["lesson3", "noun"] },
  { id: "l3-nichiyoubi", lesson: 3, category: "vocab", promptJa: "日曜日", kana: "にちようび", romaji: "nichiyoubi", answerEn: "Sunday", distractors: ["Saturday", "weekend", "today"], tags: ["lesson3", "noun"] },
  { id: "l3-itsu", lesson: 3, category: "vocab", promptJa: "いつ", kana: "いつ", romaji: "itsu", answerEn: "when", distractors: ["at about...", "today", "tomorrow"], tags: ["lesson3", "noun"] },
  { id: "l3-goro", lesson: 3, category: "vocab", promptJa: "〜ごろ", kana: "ごろ", romaji: "goro", answerEn: "at about...", distractors: ["when", "today", "tonight"], tags: ["lesson3", "noun"] },

  // U-verbs
  { id: "l3-iku", lesson: 3, category: "vocab", promptJa: "行く", kana: "いく", romaji: "iku", answerEn: "to go (destination に/へ)", distractors: ["to go back; to return (destination に/へ)", "to drink (〜を)", "to read (〜を)"], tags: ["lesson3", "verb"] },
  { id: "l3-kaeru", lesson: 3, category: "vocab", promptJa: "帰る", kana: "かえる", romaji: "kaeru", answerEn: "to go back; to return (destination に/へ)", distractors: ["to go (destination に/へ)", "to listen; to hear (〜を)", "to speak; to talk (language を)"], tags: ["lesson3", "verb"] },
  { id: "l3-kiku", lesson: 3, category: "vocab", promptJa: "聞く", kana: "きく", romaji: "kiku", answerEn: "to listen; to hear (〜を)", distractors: ["to drink (〜を)", "to read (〜を)", "to speak; to talk (language を)"], tags: ["lesson3", "verb"] },
  { id: "l3-nomu", lesson: 3, category: "vocab", promptJa: "飲む", kana: "のむ", romaji: "nomu", answerEn: "to drink (〜を)", distractors: ["to listen; to hear (〜を)", "to speak; to talk (language を)", "to read (〜を)"], tags: ["lesson3", "verb"] },
  { id: "l3-hanasu", lesson: 3, category: "vocab", promptJa: "話す", kana: "はなす", romaji: "hanasu", answerEn: "to speak; to talk (language を)", distractors: ["to drink (〜を)", "to listen; to hear (〜を)", "to read (〜を)"], tags: ["lesson3", "verb"] },
  { id: "l3-yomu", lesson: 3, category: "vocab", promptJa: "読む", kana: "よむ", romaji: "yomu", answerEn: "to read (〜を)", distractors: ["to drink (〜を)", "to listen; to hear (〜を)", "to go (destination に/へ)"], tags: ["lesson3", "verb"] },

  // Ru-verbs
  { id: "l3-okiru", lesson: 3, category: "vocab", promptJa: "起きる", kana: "おきる", romaji: "okiru", answerEn: "to get up", distractors: ["to eat (〜を)", "to sleep; to go to sleep", "to see; to look at; to watch (〜を)"], tags: ["lesson3", "verb"] },
  { id: "l3-taberu", lesson: 3, category: "vocab", promptJa: "食べる", kana: "たべる", romaji: "taberu", answerEn: "to eat (〜を)", distractors: ["to get up", "to sleep; to go to sleep", "to see; to look at; to watch (〜を)"], tags: ["lesson3", "verb"] },
  { id: "l3-neru", lesson: 3, category: "vocab", promptJa: "ねる", kana: "ねる", romaji: "neru", answerEn: "to sleep; to go to sleep", distractors: ["to get up", "to eat (〜を)", "to see; to look at; to watch (〜を)"], tags: ["lesson3", "verb"] },
  { id: "l3-miru", lesson: 3, category: "vocab", promptJa: "見る", kana: "みる", romaji: "miru", answerEn: "to see; to look at; to watch (〜を)", distractors: ["to eat (〜を)", "to sleep; to go to sleep", "to go (destination に/へ)"], tags: ["lesson3", "verb"] },

  // Irregular Verbs
  { id: "l3-kuru", lesson: 3, category: "vocab", promptJa: "来る", kana: "くる", romaji: "kuru", answerEn: "to come (destination に/へ)", distractors: ["to do (〜を)", "to study (〜を)", "to go (destination に/へ)"], tags: ["lesson3", "verb"] },
  { id: "l3-suru", lesson: 3, category: "vocab", promptJa: "する", kana: "する", romaji: "suru", answerEn: "to do (〜を)", distractors: ["to come (destination に/へ)", "to study (〜を)", "to sleep; to go to sleep"], tags: ["lesson3", "verb"] },
  { id: "l3-benkyousuru", lesson: 3, category: "vocab", promptJa: "勉強する", kana: "べんきょうする", romaji: "benkyou suru", answerEn: "to study (〜を)", distractors: ["to do (〜を)", "to come (destination に/へ)", "to read (〜を)"], tags: ["lesson3", "verb"] },

  // Adjectives
  { id: "l3-ii", lesson: 3, category: "vocab", promptJa: "いい", kana: "いい", romaji: "ii", answerEn: "good", distractors: ["early", "not much", "not at all"], tags: ["lesson3", "adjective"] },
  { id: "l3-hayai", lesson: 3, category: "vocab", promptJa: "早い", kana: "はやい", romaji: "hayai", answerEn: "early", distractors: ["good", "usually", "often; much"], tags: ["lesson3", "adjective"] },

  // Adverbs
  { id: "l3-amari", lesson: 3, category: "vocab", promptJa: "あまり + negative", kana: "あまり", romaji: "amari", answerEn: "not much", distractors: ["not at all", "usually", "a little"], tags: ["lesson3", "adverb"] },
  { id: "l3-zenzen", lesson: 3, category: "vocab", promptJa: "ぜんぜん + negative", kana: "ぜんぜん", romaji: "zenzen", answerEn: "not at all", distractors: ["not much", "a little", "sometimes"], tags: ["lesson3", "adverb"] },
  { id: "l3-taiitei", lesson: 3, category: "vocab", promptJa: "たいてい", kana: "たいてい", romaji: "taitei", answerEn: "usually", distractors: ["a little", "sometimes", "often; much"], tags: ["lesson3", "adverb"] },
  { id: "l3-chotto", lesson: 3, category: "vocab", promptJa: "ちょっと", kana: "ちょっと", romaji: "chotto", answerEn: "a little", distractors: ["usually", "sometimes", "often; much"], tags: ["lesson3", "adverb"] },
  { id: "l3-tokidoki", lesson: 3, category: "vocab", promptJa: "ときどき", kana: "ときどき", romaji: "tokidoki", answerEn: "sometimes", distractors: ["usually", "a little", "often; much"], tags: ["lesson3", "adverb"] },
  { id: "l3-yoku", lesson: 3, category: "vocab", promptJa: "よく", kana: "よく", romaji: "yoku", answerEn: "often; much", distractors: ["sometimes", "usually", "not much"], tags: ["lesson3", "adverb"] },

  // Expressions
  { id: "l3-soo-desu-ne", lesson: 3, category: "vocab", promptJa: "そうですね", kana: "そうですね", romaji: "soo desu ne", answerEn: "That’s right.; Let me see.", distractors: ["but", "How about ... ?; How is ... ?", "yes"], tags: ["lesson3", "expression"] },
  { id: "l3-demo", lesson: 3, category: "vocab", promptJa: "でも", kana: "でも", romaji: "demo", answerEn: "but", distractors: ["That’s right.; Let me see.", "How about ... ?; How is ... ?", "yes"], tags: ["lesson3", "expression"] },
  { id: "l3-dou-desu-ka", lesson: 3, category: "vocab", promptJa: "どうですか", kana: "どうですか", romaji: "dou desu ka", answerEn: "How about ... ?; How is ... ?", distractors: ["That’s right.; Let me see.", "but", "yes"], tags: ["lesson3", "expression"] },
  { id: "l3-ee", lesson: 3, category: "vocab", promptJa: "ええ", kana: "ええ", romaji: "ee", answerEn: "yes", distractors: ["That’s right.; Let me see.", "but", "How about ... ?; How is ... ?"], tags: ["lesson3", "expression"] },
];

