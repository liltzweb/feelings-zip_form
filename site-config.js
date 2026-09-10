window.FORM_CONFIG = {
  "product": {
    "code": "feelings-zip",
    "name": "feelings.zip",
    "badge": "interactive winrar confession folder",
    "price": 15000,
    "priceFormatted": "Rp 15.000",
    "tagline": "interactive nostalgic winrar/archive confession folder with opening screen, 3 reveal pills, 4 swipeable pop-up photo cards, the big question, and interactive yes/no responses with telegram copy."
  },
  "context": {
    "formCode": "feelings-zip-2026-09",
    "motif": "📦",
    "mediaDescription": "kirim 4 foto untuk 4 confession cards + 1 lagu latar (song.mp3) atau link spotify"
  },
  "theme": {
    "palette": {
      "accent": "#ff3d9a",
      "accentRgb": "255, 61, 154",
      "accentDeep": "#d91b75",
      "paper": "#18181b",
      "ink": "#fff7ed",
      "muted": "#a1a1aa",
      "border": "#27272a",
      "tint": "rgba(255, 61, 154, 0.15)"
    },
    "fontPreset": "fraunces-karla"
  },
  "sections": [
    {
      "id": "sec_core",
      "title": "Core Identity & Target",
      "subtitle": "nama pengirim, penerima, tanggal dan kontak telegram",
      "fields": [
        {
          "id": "crush_name",
          "label": "crush / recipient name",
          "type": "text",
          "required": true,
          "placeholder": "e.g. meona",
          "description": "Nama panggilan crush/pasangan"
        },
        {
          "id": "sender_name",
          "label": "sender / your name",
          "type": "text",
          "required": true,
          "placeholder": "e.g. kinsley",
          "description": "Nama pengirim"
        },
        {
          "id": "confession_date",
          "label": "confession date stamp",
          "type": "text",
          "required": true,
          "placeholder": "e.g. february 04, 2026",
          "description": "Tanggal penembakan / confession"
        },
        {
          "id": "reply_username",
          "label": "telegram username for crush reply",
          "type": "text",
          "required": true,
          "placeholder": "e.g. @mirssy (username telegram buyer)",
          "description": "Username Telegram pemesan untuk menerima pesan jawaban dari crush"
        }
      ]
    },
    {
      "id": "sec_step0",
      "title": "Step 0: Opening Screen",
      "subtitle": "layar pembuka sebelum folder diekstrak",
      "fields": [
        {
          "id": "s0_salutation",
          "label": "opening greeting headline",
          "type": "text",
          "required": true,
          "placeholder": "e.g. hey, meona.",
          "description": "Kalimat sapaan pertama"
        },
        {
          "id": "s0_subtitle",
          "label": "opening subtitle text",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. i made this little space because my feelings for you couldn't be kept in a simple text message.",
          "description": "Teks sub-pembuka"
        },
        {
          "id": "s0_button",
          "label": "opening action button text",
          "type": "text",
          "required": true,
          "placeholder": "e.g. come take a look",
          "description": "Teks tombol buka folder"
        },
        {
          "id": "s0_footer",
          "label": "opening footer text",
          "type": "text",
          "required": true,
          "placeholder": "e.g. for meona from kinsley with all my heart",
          "description": "Footer layar pembuka"
        }
      ]
    },
    {
      "id": "sec_step1",
      "title": "Step 1: The Build Up (Interactive Reveal Pills)",
      "subtitle": "3 pil interaktif yang bisa diklik untuk memunculkan jawaban",
      "fields": [
        {
          "id": "s1_headline",
          "label": "section headline",
          "type": "text",
          "required": true,
          "placeholder": "e.g. there is one name that never stops filling every corner of my mind lately.",
          "description": "Headline pembuka section ini"
        },
        {
          "id": "s1_pill1_title",
          "label": "pill 01 question",
          "type": "text",
          "required": true,
          "placeholder": "e.g. who is it?",
          "description": "Judul pil 1"
        },
        {
          "id": "s1_pill1_ans",
          "label": "pill 01 revealed answer",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. you, meona. in a world full of billions, my eyes keep looking for you.",
          "description": "Jawaban yang muncul saat pil 1 diklik"
        },
        {
          "id": "s1_pill2_title",
          "label": "pill 02 question",
          "type": "text",
          "required": true,
          "placeholder": "e.g. since when?",
          "description": "Judul pil 2"
        },
        {
          "id": "s1_pill2_ans",
          "label": "pill 02 revealed answer",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. since the very moment our stories intertwined. i don't know the exact second it happened, but suddenly you were everywhere in my thoughts.",
          "description": "Jawaban yang muncul saat pil 2 diklik"
        },
        {
          "id": "s1_pill3_title",
          "label": "pill 03 question",
          "type": "text",
          "required": true,
          "placeholder": "e.g. why you?",
          "description": "Judul pil 3"
        },
        {
          "id": "s1_pill3_ans",
          "label": "pill 03 revealed answer",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. because the gentle warmth in your eyes and the quiet peace you bring into my life is something i never want to lose.",
          "description": "Jawaban yang muncul saat pil 3 diklik"
        },
        {
          "id": "s1_button",
          "label": "continue button text",
          "type": "text",
          "required": true,
          "placeholder": "e.g. there are sweet things i want to show you",
          "description": "Teks tombol lanjut ke kartu foto"
        }
      ]
    },
    {
      "id": "sec_step2",
      "title": "Step 2: Confession Cards (4 Swipeable Cards)",
      "subtitle": "4 kartu foto pop-up dengan prompt depan, pesan rahasia, dan caption foto",
      "fields": [
        {
          "id": "s2_headline",
          "label": "cards section headline",
          "type": "text",
          "required": true,
          "placeholder": "e.g. for you, my girl. a tiny corner of the universe where every pixel speaks about us.",
          "description": "Headline di atas kartu"
        },
        {
          "id": "s2_card1_front",
          "label": "card 01 front prompt",
          "type": "text",
          "required": true,
          "placeholder": "e.g. the way you look at me",
          "description": "Teks depan kartu 1"
        },
        {
          "id": "s2_card1_revealed",
          "label": "card 01 revealed message (pop-up)",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. every time our eyes meet, the whole world seems to fade away into soft silence.",
          "description": "Pesan rahasia pop-up kartu 1"
        },
        {
          "id": "s2_card1_tag",
          "label": "card 01 photo caption tag",
          "type": "text",
          "required": true,
          "placeholder": "e.g. the girl who brightens my entire universe",
          "description": "Caption foto kartu 1"
        },
        {
          "id": "s2_card2_front",
          "label": "card 02 front prompt",
          "type": "text",
          "required": true,
          "placeholder": "e.g. your voice, my comfort",
          "description": "Teks depan kartu 2"
        },
        {
          "id": "s2_card2_revealed",
          "label": "card 02 revealed message (pop-up)",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. hearing you talk about your day is genuinely the highlight of my every evening.",
          "description": "Pesan rahasia pop-up kartu 2"
        },
        {
          "id": "s2_card2_tag",
          "label": "card 02 photo caption tag",
          "type": "text",
          "required": true,
          "placeholder": "e.g. falling for every little smile of yours",
          "description": "Caption foto kartu 2"
        },
        {
          "id": "s2_card3_front",
          "label": "card 03 front prompt",
          "type": "text",
          "required": true,
          "placeholder": "e.g. walking hand in hand",
          "description": "Teks depan kartu 3"
        },
        {
          "id": "s2_card3_revealed",
          "label": "card 03 revealed message (pop-up)",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. i don't just want sweet moments right now; i want to hold your hand through the stormy rains and sunny mornings.",
          "description": "Pesan rahasia pop-up kartu 3"
        },
        {
          "id": "s2_card3_tag",
          "label": "card 03 photo caption tag",
          "type": "text",
          "required": true,
          "placeholder": "e.g. softest heartbeat in a noisy world",
          "description": "Caption foto kartu 3"
        },
        {
          "id": "s2_card4_front",
          "label": "card 04 front prompt",
          "type": "text",
          "required": true,
          "placeholder": "e.g. why my heart chooses you",
          "description": "Teks depan kartu 4"
        },
        {
          "id": "s2_card4_revealed",
          "label": "card 04 revealed message (pop-up)",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. out of all the paths i could take in life, the only one that feels like home is walking beside you.",
          "description": "Pesan rahasia pop-up kartu 4"
        },
        {
          "id": "s2_card4_tag",
          "label": "card 04 photo caption tag",
          "type": "text",
          "required": true,
          "placeholder": "e.g. i want to spend all my tomorrows by your side",
          "description": "Caption foto kartu 4"
        },
        {
          "id": "s2_button",
          "label": "continue button text",
          "type": "text",
          "required": true,
          "placeholder": "e.g. and now, the only thing left in my heart...",
          "description": "Teks tombol lanjut ke the big question"
        }
      ]
    },
    {
      "id": "sec_step3",
      "title": "Step 3: The Big Question",
      "subtitle": "pertanyaan penembakan / ajakan pacaran & teks tombol",
      "fields": [
        {
          "id": "s3_question",
          "label": "confession big question text",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. meona, will you be mine and walk this journey together as my girlfriend?",
          "description": "Pertanyaan utama confession"
        },
        {
          "id": "s3_yes_btn",
          "label": "yes button text",
          "type": "text",
          "required": true,
          "placeholder": "e.g. yes, with all my heart",
          "description": "Teks tombol 'Yes'"
        },
        {
          "id": "s3_no_btn",
          "label": "no button text",
          "type": "text",
          "required": true,
          "placeholder": "e.g. no, not yet",
          "description": "Teks tombol 'No'"
        }
      ]
    },
    {
      "id": "sec_step4",
      "title": "Step 4: Responses (Yes & No Screens)",
      "subtitle": "layar jawaban 'Yes' dan 'No' beserta pesan auto-copy Telegram",
      "fields": [
        {
          "id": "s4_yes_headline",
          "label": "yes screen giant headline",
          "type": "text",
          "required": true,
          "placeholder": "e.g. you just made me the happiest person alive!",
          "description": "Headline besar saat dia memilih Yes"
        },
        {
          "id": "s4_yes_letter",
          "label": "yes screen heartfelt prose",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. from this day forward, i promise to cherish your smile, hold your hand through everything, and love you more each day.",
          "description": "Surat cinta penutup pada layar Yes"
        },
        {
          "id": "s4_yes_copy_msg",
          "label": "yes auto-copy telegram message",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. yes, kinsley! i'd love to be your girlfriend <3",
          "description": "Pesan yang otomatis disalin saat dia klik kirim jawaban Yes ke Telegram"
        },
        {
          "id": "s4_no_lead",
          "label": "no screen headline",
          "type": "text",
          "required": true,
          "placeholder": "e.g. nice try, but i'm not letting you slip away that easily :)",
          "description": "Headline bersahabat saat dia memilih No"
        },
        {
          "id": "s4_no_letter",
          "label": "no screen respectful prose",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. my feelings for you are true, gentle, and patient. whenever you are ready, i will still be right here.",
          "description": "Surat penutup pada layar No"
        },
        {
          "id": "s4_no_copy_msg",
          "label": "no auto-copy telegram message",
          "type": "textarea",
          "required": true,
          "placeholder": "e.g. kinsley, i read everything in your heart... let's talk :)",
          "description": "Pesan yang otomatis disalin saat dia klik kirim jawaban No ke Telegram"
        }
      ]
    }
  ]
};
