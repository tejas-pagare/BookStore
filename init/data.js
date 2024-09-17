const exchangeRate = 82; // 1 USD = 82 INR

const books = [
    {
        id:1,
        title: "The Invisible Life",
        author: "V.E. Schwab",
        description: "A story about a young woman who makes a Faustian bargain to live forever, but is cursed to be forgotten by everyone she meets.",
        bookCount: 150,
        image: "https://imgs.search.brave.com/Z9JCdcmzYDOZXjJ4gkI7OkoV49EBmuwEpV_i2XvnnnI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxTURkYlloLThM/LmpwZw",
        price: (12.99 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:2,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        description: "A mystery and coming-of-age novel about a young girl who grows up isolated in the marshes of North Carolina.",
        bookCount: 200,
        image: "https://imgs.search.brave.com/a-_uz_vMqhHM01a2UtxODEuFv8I-SuhhFSrplyGCV_k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVh/YWRjNjQwMjcxNGU1/NTQ1OGYxZjViNi8x/NTQxNjM2NzMxMTQ3/LVVKWDdTSU1PRzYz/OUMwVDlPVjdRL1do/ZXJlLXRoZS1DcmF3/ZGFkcy1TaW5nLTMt/MTUwMC5qcGc",
        price: (15.99 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:3,
        title: "Dune",
        author: "Frank Herbert",
        description: "A science fiction epic set in a distant future where noble families vie for control of the desert planet Arrakis.",
        bookCount: 50,
        image: "https://imgs.search.brave.com/WmbWdkXlmQNQWHTHoQbjr3dTAisZpM-iGTmWmGe33EQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxWFh6bHJWMktM/LmpwZw",
        price: (9.99 * exchangeRate).toFixed(2), // Convert price to INR
        available: false
    },
    {
        id:4,
        title: "The Midnight Library",
        author: "Matt Haig",
        description: "A novel about a woman who discovers a library between life and death where she can explore alternate versions of her life.",
        bookCount: 75,

        image: "https://imgs.search.brave.com/VSI7DJftuEEWZhI9JwtAbn1tlj6daeX0fUl4sNCdbjo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vRkFC/RkE5NUE2NDE1NzM5/Mjc3RDExREI1NDND/RjBCNjUxRjQwMjhF/Ny5qcGVn",
        price: (11.49 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:5,
        title: "Atomic Habits",
        author: "James Clear",
        description: "A guide to building good habits and breaking bad ones, focusing on the power of small changes to achieve significant results.",
        bookCount: 300,
        image: "https://imgs.search.brave.com/VhZrErBgn7SFLILBdR1_tEXzbFs2C2xtrNLuPHrdxPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFOTTE3YWRycEwu/anBn",
        price: (14.99 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:6,
        title: "Educated",
        author: "Tara Westover",
        description: "A memoir about a woman's quest for knowledge, escaping her strict and abusive family to pursue education.",
        bookCount: 120,
        image: "https://imgs.search.brave.com/Iwk6hfQsrE_49tM13zLGq2pKa3cCzF6Q4vS3qYEwTJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYm9va3NlbnNl/LmNvbS9pbWFnZXMv/NTI4LzU5MC85Nzgw/Mzk5NTkwNTI4Lmpw/Zw",
        price: (13.49 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:7,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        description: "A psychological thriller about a woman who stops speaking after being convicted of murdering her husband.",
        bookCount: 90,

        image: "https://imgs.search.brave.com/PwNzcXID8D3ql26T-MqId57eSwswSziEpeFESwb6XVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aGUt/YmlibGlvZmlsZS5j/b20vY292ZXJzL3Np/bGVudHBhdGllbnQu/anBn",
        price: (10.99 * exchangeRate).toFixed(2), // Convert price to INR
        available: false
    },
    {
        id:8,
        title: "Circe",
        author: "Madeline Miller",
        description: "A retelling of the myth of Circe, the enchantress from Homer’s Odyssey, exploring her life and struggles.",
        bookCount: 80,

        image: "https://imgs.search.brave.com/5Uy0-TCnJaIir4_hjMznb5YYr-q3C1WTpFCttUqmGm4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vNUZF/NEVBQTg3ODU3Qjkz/NDExNDdFMkE5RDA5/MzJERDZCRDVDNjlF/RC5qcGVn",
        price: (12.49 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:9,
        title: "Little Fires Everywhere",
        author: "Celeste Ng",
        description: "A novel about two families in a suburban community and the conflicts that arise when their lives intertwine.",
        bookCount: 65,

        image: "https://imgs.search.brave.com/izcnMrdkEb5V6Z8LdTun1TE0BH2tD6-xypQ4I8S_JoM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxQisrSzExeTZM/LmpwZw",
        price: (14.49 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:10,
        title: "Normal People",
        author: "Sally Rooney",
        description: "A contemporary novel exploring the complexities of a relationship between two people from high school to adulthood.",
        bookCount: 110,
        image: "https://imgs.search.brave.com/vv7M1uUvifEf2gVFvp2HoFJZXnhV23P85W5ZDwLFAg4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vQTc4/OTk1NzlGOTY2MjM5/NzNBOUYxNzQ4RDkz/NUQzNkU2RENGMTk4/Ri5qcGVn",
        price: (13.99 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:11,
        title: "The Vanishing Half",
        author: "Brit Bennett",
        description: "A multigenerational saga about twin sisters whose lives diverge drastically, exploring themes of identity and family.",
        bookCount: 140,
        image: "https://imgs.search.brave.com/Mxh5aI4sZUtofOpMCmAI5DqzaMHNwi3I8owqqFKS4R8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFFek5ucjRZVUwu/anBn",
        price: (15.49 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:12,
        title: "The Tattooist of Auschwitz",
        author: "Heather Morris",
        description: "A historical novel based on the true story of a Jewish man who falls in love while working as a tattooist in Auschwitz.",
        bookCount: 160,
        image: "https://imgs.search.brave.com/_tYoIAeLR03WMWdMeNeUa5SzbSl22_njdL9pfWG9idw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFaQks5K0Uwdkwu/anBn",
        price: (12.99 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:13,
        title: "The Book Thief",
        author: "Markus Zusak",
        description: "A novel narrated by Death, focusing on a young girl living in Nazi Germany who finds solace in stealing books.",
        bookCount: 180,
        image: "https://imgs.search.brave.com/ovfjJw-D_nJB6cCvIX9zPy1bIlsiomGfV695Kzbpmf0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE4NW95ekNOR0wu/anBn",
        price: (11.99 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:14,
        title: "The Alchemist",
        author: "Paulo Coelho",
        description: "A philosophical novel about a shepherd named Santiago who dreams of finding treasure and embarks on a journey of self-discovery.",
        bookCount: 190,
        image: "https://imgs.search.brave.com/XGujF2L1gr1p8SKw2-3P777H9vcQyYo5xDOfh0wfFl0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFuUFB6eG0teEwu/anBn",
        price: (8.99 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    },
    {
        id:15,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        description: "A dystopian novel set in a future where children are forced to participate in a televised death match.",
        bookCount: 220,
        image: "https://imgs.search.brave.com/SdGkCvelTnL_WIOL7GJ_hLR9N6toPJtDdJ6Oa21xGFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxSTI0d09zbjhM/LmpwZw",
        price: (10.49 * exchangeRate).toFixed(2), // Convert price to INR
        available: true
    }
];




module.exports = { data: books };
