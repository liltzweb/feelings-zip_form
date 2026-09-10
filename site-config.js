window.FORM_CONFIG = {
  product: {
    code: 'feelings-zip',
    name: 'feelings.zip',
    badge: 'interactive zipped archive & swipeable photocard confession',
    price: 15000,
    priceFormatted: 'Rp 15.000',
    tagline: 'feelings.zip — interactive zipped archive confession with 3 build-up drawers, 4 swipeable photocard confession modals, commemorative grid, and instant Telegram redirect.'
  },
  context: {
    formCode: 'ZIP-ORD',
    edition: '2026 Zipped Confession Archive Edition',
    description: 'Feelings.zip is an aesthetic mobile-first confession website styled like a zipped feelings package. It features an unzipping intro, 3 build-up interactive answer drawers, 4 swipeable high-res photocard confession cards with popups, and a proposal screen with direct Telegram answer copying.'
  },
  motif: '📦',
  mediaDescription: '4 Foto (Photocard 01-04) + 1 File Musik MP3',
  theme: {
    name: 'feelings-zip',
    palette: ['#18181B', '#27272A', '#EC4899', '#FDF2F8', '#38BDF8', '#C6FF3D']
  },
  sections: [
    {
      id: 'core_identity',
      number: '02',
      title: 'Core Identity & Telegram Redirection',
      description: 'Names, date stamp, and Telegram destination for automated answer copying.',
      fields: [
        {
          id: 'crush_name',
          label: 'Recipient / Crush Name (Yang Ditembak)',
          type: 'text',
          placeholder: 'e.g. khayr meschach / soren',
          defaultValue: 'khayr meschach',
          required: true,
          helpText: 'Nama pasangan/crush yang menerima website.'
        },
        {
          id: 'your_name',
          label: 'Sender / Your Name (Yang Nembak / Menyatakan Perasaan)',
          type: 'text',
          placeholder: 'e.g. ducok letger',
          defaultValue: 'ducok letger',
          required: true,
          helpText: 'Nama pengirim/pembuat website.'
        },
        {
          id: 'telegram_username',
          label: 'Telegram Username (Tanpa @)',
          type: 'text',
          placeholder: 'e.g. ponod / mirssy',
          defaultValue: 'ponod',
          required: true,
          helpText: 'Username Telegram tujuan saat pasangan menekan tombol jawaban.'
        },
        {
          id: 'date_stamp',
          label: 'Date Stamp Formatted',
          type: 'text',
          placeholder: 'e.g. september 19, 2026',
          defaultValue: 'september 19, 2026',
          required: true,
          helpText: 'Tanggal yang tercetak pada kartu arsip.'
        }
      ]
    },
    {
      id: 'opening_view',
      number: '03',
      title: 'Opening Screen (Zipped Archive Cover)',
      description: 'Front cover greeting and unzipping button.',
      fields: [
        {
          id: 'open_greeting',
          label: 'Opening Greeting Heading',
          type: 'text',
          placeholder: 'e.g. hey, soren.',
          defaultValue: 'hey, soren.',
          required: true
        },
        {
          id: 'open_subtext',
          label: 'Opening Subtitle Quote',
          type: 'textarea',
          placeholder: 'e.g. i put my honest thoughts into this archive.',
          defaultValue: 'i put my honest thoughts into this archive.',
          required: true
        },
        {
          id: 'open_button_text',
          label: 'Unzip Button Label',
          type: 'text',
          placeholder: 'e.g. unzip feelings.zip',
          defaultValue: 'unzip feelings.zip',
          required: true
        }
      ]
    },
    {
      id: 'buildup_drawers',
      number: '04',
      title: 'Build-Up Drawers (3 Interactive Reasons)',
      description: '3 interactive question drawers (Who, Since when, Why) that reveal romantic thoughts.',
      fields: [
        {
          id: 'buildup_heading',
          label: 'Section Heading',
          type: 'textarea',
          placeholder: 'e.g. there is one name that never stops filling every heartbeat and thought of mine',
          defaultValue: 'there is one name that never stops filling every heartbeat and thought of mine',
          required: true
        },
        {
          id: 'buildup_who',
          label: 'Drawer 01: Who? (Answer Text)',
          type: 'textarea',
          placeholder: 'e.g. you, soren. in a world full of billions of souls, you are the only one who makes my heart race and feel safe all at once.',
          defaultValue: 'you, soren. in a world full of billions of souls, you are the only one who makes my heart race and feel safe all at once.',
          required: true
        },
        {
          id: 'buildup_since',
          label: 'Drawer 02: Since When? (Answer Text)',
          type: 'textarea',
          placeholder: 'e.g. since the very moment our stories intertwined. i don\'t know the exact second it happened...',
          defaultValue: 'since the very moment our stories intertwined. i don\'t know the exact second it happened, but somewhere along our late-night talks and shared smiles, you became my favorite thought, my safest place, and the person i never want to lose.',
          required: true
        },
        {
          id: 'buildup_why',
          label: 'Drawer 03: Why? (Answer Text)',
          type: 'textarea',
          placeholder: 'e.g. because the gentle warmth in your eyes, your soft laugh, and the breathtaking way you are simply yourself make every moment with you feel like magic.',
          defaultValue: 'because the gentle warmth in your eyes, your soft laugh, and the breathtaking way you are simply yourself make every moment with you feel like magic.',
          required: true
        },
        {
          id: 'buildup_button_text',
          label: 'Advance Button Label',
          type: 'text',
          placeholder: 'e.g. open confession cards',
          defaultValue: 'open confession cards',
          required: true
        }
      ]
    },
    {
      id: 'confession_cards',
      number: '05',
      title: '4 Swipeable Confession Photocards',
      description: '4 aesthetic photocards with front headlines, revealed secret letters, and photo captions.',
      fields: [
        {
          id: 'cards_heading',
          label: 'Cards Section Heading',
          type: 'text',
          placeholder: 'e.g. little things that made me fall for you',
          defaultValue: 'little things that made me fall for you',
          required: true
        },
        {
          id: 'card1_front',
          label: 'Card 01 Front Title',
          type: 'text',
          placeholder: 'e.g. the way you look at me',
          defaultValue: 'the way you look at me',
          required: true
        },
        {
          id: 'card1_revealed',
          label: 'Card 01 Revealed Secret Letter',
          type: 'textarea',
          placeholder: 'e.g. every time our eyes meet, the whole world turns quiet. your gaze carries a gentle warmth that makes me feel seen, cherished, and endlessly in love with you.',
          defaultValue: 'every time our eyes meet, the whole world turns quiet. your gaze carries a gentle warmth that makes me feel seen, cherished, and endlessly in love with you.',
          required: true
        },
        {
          id: 'card1_photo_caption',
          label: 'Card 01 Photo Caption',
          type: 'text',
          placeholder: 'e.g. the one who brightens my entire universe',
          defaultValue: 'the one who brightens my entire universe',
          required: true
        },
        {
          id: 'card2_front',
          label: 'Card 02 Front Title',
          type: 'text',
          placeholder: 'e.g. your voice, my comfort',
          defaultValue: 'your voice, my comfort',
          required: true
        },
        {
          id: 'card2_revealed',
          label: 'Card 02 Revealed Secret Letter',
          type: 'textarea',
          placeholder: 'e.g. hearing you talk about your day, laughing at the sillies, and sharing soft whispers...',
          defaultValue: 'hearing you talk about your day, laughing at the sillies, and sharing soft whispers... your voice has become the sweetest melody my heart craves every single day.',
          required: true
        },
        {
          id: 'card2_photo_caption',
          label: 'Card 02 Photo Caption',
          type: 'text',
          placeholder: 'e.g. falling for every little smile of yours',
          defaultValue: 'falling for every little smile of yours',
          required: true
        },
        {
          id: 'card3_front',
          label: 'Card 03 Front Title',
          type: 'text',
          placeholder: 'e.g. walking hand in hand',
          defaultValue: 'walking hand in hand',
          required: true
        },
        {
          id: 'card3_revealed',
          label: 'Card 03 Revealed Secret Letter',
          type: 'textarea',
          placeholder: 'e.g. i don\'t just want sweet moments right now; i want to hold your hand through the stormy rains and sunny mornings...',
          defaultValue: 'i don\'t just want sweet moments right now; i want to hold your hand through the stormy rains and sunny mornings, cheering for you and loving you through every chapter.',
          required: true
        },
        {
          id: 'card3_photo_caption',
          label: 'Card 03 Photo Caption',
          type: 'text',
          placeholder: 'e.g. softest heartbeat in a noisy world',
          defaultValue: 'softest heartbeat in a noisy world',
          required: true
        },
        {
          id: 'card4_front',
          label: 'Card 04 Front Title',
          type: 'text',
          placeholder: 'e.g. why my heart chooses you',
          defaultValue: 'why my heart chooses you',
          required: true
        },
        {
          id: 'card4_revealed',
          label: 'Card 04 Revealed Secret Letter',
          type: 'textarea',
          placeholder: 'e.g. out of all the paths in this universe, finding you is my greatest blessing...',
          defaultValue: 'out of all the paths in this universe, finding you is my greatest blessing. with you, love feels tender, effortless, and true. you are my favorite person, soren.',
          required: true
        },
        {
          id: 'card4_photo_caption',
          label: 'Card 04 Photo Caption',
          type: 'text',
          placeholder: 'e.g. "i want to spend all my tomorrows by your side"',
          defaultValue: '"i want to spend all my tomorrows by your side"',
          required: true
        },
        {
          id: 'cards_button_text',
          label: 'Question Button Label',
          type: 'text',
          placeholder: 'e.g. the question',
          defaultValue: 'the question',
          required: true
        }
      ]
    },
    {
      id: 'proposal_screen',
      number: '06',
      title: 'Proposal Question & Answers',
      description: 'The big proposal question, custom Yes/No clipboard messages, and celebration outcome.',
      fields: [
        {
          id: 'question_heading',
          label: 'Proposal Question Heading',
          type: 'textarea',
          placeholder: 'e.g. soren, will you be mine and walk beside me as my boyfriend, forever?',
          defaultValue: 'soren, will you be mine and walk beside me as my boyfriend, forever?',
          required: true
        },
        {
          id: 'yes_button_text',
          label: 'Yes Button Label',
          type: 'text',
          placeholder: 'e.g. yes, absolutely!',
          defaultValue: 'yes, absolutely!',
          required: true
        },
        {
          id: 'copy_message_yes',
          label: 'Yes Auto-Copied Message (Dikirim ke Telegram)',
          type: 'textarea',
          placeholder: 'e.g. yes, ducok... i want to be your boyfriend and love you forever',
          defaultValue: 'yes, ducok... i want to be your boyfriend and love you forever',
          required: true
        },
        {
          id: 'no_button_text',
          label: 'No Button Label',
          type: 'text',
          placeholder: 'e.g. let me think',
          defaultValue: 'let me think',
          required: true
        },
        {
          id: 'copy_message_no',
          label: 'No Auto-Copied Message',
          type: 'textarea',
          placeholder: 'e.g. ducok, i read everything in your heart... let\'s talk',
          defaultValue: 'ducok, i read everything in your heart... let\'s talk',
          required: true
        },
        {
          id: 'yes_outcome_heading',
          label: 'Yes Celebration Heading',
          type: 'text',
          placeholder: 'e.g. you just made me the happiest person in the entire world.',
          defaultValue: 'you just made me the happiest person in the entire world.',
          required: true
        }
      ]
    }
  ]
};
