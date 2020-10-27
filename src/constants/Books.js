const Books = [
    {
        name: 'Genesis',
        chapters: 50,
        value: 'Gen',
        type: 'old',
        description: 'Genesis is about Adam and Eve'
    },
    {
        name: 'Exodus',
        chapters: 40,
        value: 'Exo',
        type: 'old',
        description: 'Exodus is about Moses'
    },
    {
        name: 'Leviticus',
        chapters: 27,
        value: 'Lev',
        type: 'old'
    },
    {
        name: 'Numbers',
        chapters: 36,
        value: 'Num',
        type: 'old'
    },
    {
        name: 'Deuteronomy',
        chapters: 34,
        value: 'Deu',
        type: 'old'
    },
    {
        name: 'Joshua',
        chapters: 24,
        value: 'Jos',
        type: 'old'
    },
    {
        name: 'Judges',
        chapters: 21,
        value: 'Jdg',
        type: 'old'
    },
    {
        name: 'Ruth',
        chapters: 4,
        value: 'Rth',
        type: 'old'
    },
    {
        name: '1 Samuel',
        chapters: 31,
        value: '1Sa',
        type: 'old'
    },
    {
        name: '2 Samuel',
        chapters: 24,
        value: '2Sa',
        type: 'old'
    },
    {
        name: '1 Kings',
        chapters: 22,
        value: '1Ki',
        type: 'old'
    },
    {
        name: '2 Kings',
        chapters: 25,
        value: '2Ki',
        type: 'old'
    },
    {
        name: '1 Chronicles',
        chapters: 29,
        value: '1Ch',
        type: 'old'
    },
    {
        name: '2 Chronicles',
        chapters: 36,
        value: '2Ch',
        type: 'old'
    },
    {
        name: 'Ezra',
        chapters: 10,
        value: 'Ezr',
        type: 'old'
    },
    {
        name: 'Nehemiah',
        chapters: 13,
        value: 'Neh',
        type: 'old'
    },
    {
        name: 'Esther',
        chapters: 10,
        value: 'Est',
        type: 'old'
    },
    {
        name: 'Job',
        chapters: 42,
        value: 'Job',
        type: 'old'
    },
    {
        name: 'Psalms',
        chapters: 150,
        value: 'Psa',
        type: 'old'
    },
    {
        name: 'Proverbs',
        chapters: 31,
        value: 'Pro',
        type: 'old'
    },
    {
        name: 'Ecclesiastes',
        chapters: 12,
        value: 'Ecc',
        type: 'old'
    },
    {
        name: 'Isaiah',
        chapters: 66,
        value: 'Isa',
        type: 'old'
    },
    {
        name: 'Jeremiah',
        chapters: 52,
        value: 'Jer',
        type: 'old'
    },
    {
        name: 'Lamentations',
        chapters: 5,
        value: 'Lam',
        type: 'old'
    },
    {
        name: 'Ezekiel',
        chapters: 48,
        value: 'Eze',
        type: 'old'
    },
    {
        name: 'Daniel',
        chapters: 12,
        value: 'Dan',
        type: 'old'
    },
    {
        name: 'Hosea',
        chapters: 14,
        value: 'Hos',
        type: 'old'
    },
    {
        name: 'Joel',
        chapters: 3,
        value: 'Joe',
        type: 'old'
    },
    {
        name: 'Amos',
        chapters: 9,
        value: 'Amo',
        type: 'old'
    },
    {
        name: 'Obadiah',
        chapters: 1,
        value: 'Oba',
        type: 'old'
    },
    {
        name: 'Jonah',
        chapters: 4,
        value: 'Jon',
        type: 'old'
    },
    {
        name: 'Micah',
        chapters: 7,
        value: 'Mic',
        type: 'old'
    },
    {
        name: 'Nahum',
        chapters: 3,
        value: 'Nah',
        type: 'old'
    },
    {
        name: 'Habakkuk',
        chapters: 3,
        value: 'Hab',
        type: 'old'
    },
    {
        name: 'Zephaniah',
        chapters: 3,
        value: 'Zep',
        type: 'old'
    },
    {
        name: 'Haggai',
        chapters: 2,
        value: 'Hag',
        type: 'old'
    },
    {
        name: 'Zechariah',
        chapters: 14,
        value: 'Zec',
        type: 'old'
    },
    {
        name: 'Malachi',
        chapters: 4,
        value: 'Mal',
        type: 'old'
    },
    {
        name: 'Matthew',
        chapters: 28,
        value: 'Mat',
        type: 'new'
    },
    {
        name: 'Mark',
        chapters: 16,
        value: 'Mar',
        type: 'new'
    },
    {
        name: 'Luke',
        chapters: 24,
        value: 'Luk',
        type: 'new'
    },
    {
        name: 'John',
        chapters: 21,
        value: 'Joh',
        type: 'new'
    },
    {
        name: 'Haggai',
        chapters: 2,
        value: 'Hag',
        type: 'new'
    },
    {
        name: 'Acts',
        chapters: 28,
        value: 'Act',
        type: 'new'
    },
    {
        name: 'Romans',
        chapters: 16,
        value: 'Rom',
        type: 'new'
    },
    {
        name: '1 Corinthians',
        chapters: 16,
        value: '1Co',
        type: 'new'
    },
    {
        name: '2 Corinthians',
        chapters: 13,
        value: '2Co',
        type: 'new'
    },
    {
        name: 'Galatians',
        chapters: 6,
        value: 'Gal',
        type: 'new'
    },
    {
        name: 'Ephesians',
        chapters: 6,
        value: 'Eph',
        type: 'new'
    },
    {
        name: 'Philippians',
        chapters: 4,
        value: 'Phi',
        type: 'new'
    },
    {
        name: '1 Thessalonians',
        chapters: 5,
        value: '1Th',
        type: 'new'
    },
    {
        name: '2 Thessalonians',
        chapters: 3,
        value: '2Te',
        type: 'new'
    },
    {
        name: '1 Timothy',
        chapters: 6,
        value: '1Ti',
        type: 'new'
    },
    {
        name: '2 Timothy',
        chapters: 4,
        value: '2Ti',
        type: 'new'
    },
    {
        name: 'Titus',
        chapters: 3,
        value: 'Tit',
        type: 'new'
    },
    {
        name: 'Philemon',
        chapters: 1,
        value: 'Phm',
        type: 'new'
    },
    {
        name: 'Hebrews',
        chapters: 13,
        value: 'Heb',
        type: 'new'
    },
    {
        name: 'James',
        chapters: 5,
        value: 'Jam',
        type: 'new'
    },
    {
        name: '1 Peter',
        chapters: 5,
        value: '1Pe',
        type: 'new'
    },
    {
        name: '2 Peter',
        chapters: 3,
        value: '2Pe',
        type: 'new'
    },
    {
        name: '1 John',
        chapters: 5,
        value: '1Jo',
        type: 'new'
    },
    {
        name: '2 John',
        chapters: 1,
        value: '2Jo',
        type: 'new'
    },
    {
        name: '3 John',
        chapters: 1,
        value: '3Jo',
        type: 'new'
    },
    {
        name: 'Jude',
        chapters: 1,
        value: 'Jud',
        type: 'new'
    },
    {
        name: 'Revelation',
        chapters: 22,
        value: 'Rev',
        type: 'new'
    }
]

export default Books;