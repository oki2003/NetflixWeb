import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../config/api";

function CastPage() {
  const [data, setData] = useState([
    {
      adult: false,
      gender: 1,
      id: 550627,
      known_for_department: "Acting",
      name: "Miho Nomoto",
      original_name: "野本美穂",
      popularity: 307.85,
      profile_path: "/ego6I5PWMZRJGYyu8aPjiNwsz3l.jpg",

      known_for: [
        {
          backdrop_path: "/scMU7yDvzZdqpqb24WcuQB0i4fb.jpg",
          id: 36282,
          title: "Fudoh: The New Generation",
          original_title: "極道戦国志 不動",
          overview:
            "In order to settle a business dispute, a mob leader murders one of his own teenage sons. The surviving son vows to avenge his brother's death, and organizes his own gang of teenage killers to destroy his father's organization.",
          poster_path: "/kRlmTuDdZEGPbbXavNmiafUYYka.jpg",
          media_type: "movie",
          adult: false,
          original_language: "ja",

          genre_ids: [28, 53, 80, 35],
          popularity: 9.478,
          release_date: "1996-10-12",
          video: false,
          vote_average: 6.6,
          vote_count: 64,
        },

        {
          backdrop_path: "/1XUjqfCCgoqGiJYV6hfPlHOxC59.jpg",
          id: 36274,
          title: "Deadly Outlaw: Rekka",
          original_title: "実録・安藤昇侠道（アウトロー）伝 烈火",
          overview:
            "After Kunisada's Yakuza leader and father figure is brutally murdered, he and his best friend go on a two-man mission to avenge his death, killing other Yakuza leaders leading to a final confrontation by the old man's killers.",
          poster_path: "/2r4WNCpwAQzekbaZwoCcOv1GJuO.jpg",
          media_type: "movie",
          adult: false,
          original_language: "ja",

          genre_ids: [28, 18, 53],
          popularity: 3.236,
          release_date: "2002-09-21",
          video: false,
          vote_average: 6.7,
          vote_count: 28,
        },

        {
          backdrop_path: null,
          id: 792589,
          title: "Intimate Desire",
          original_title: "女歡",
          overview: "Female modeling and lesbian interest",
          poster_path: "/6owpqEOBcnDJ6r6GEoV4xZcdolo.jpg",
          media_type: "movie",
          adult: false,
          original_language: "cn",

          genre_ids: [18],
          popularity: 10.346,
          release_date: "1998-01-01",
          video: false,
          vote_average: 1.5,
          vote_count: 2,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 1997928,
      known_for_department: "Acting",
      name: "Jin Joo",
      original_name: "진주",
      popularity: 160.35,
      profile_path: "/awN0RgLUn0j8AsGsC4JNT1gdkVI.jpg",

      known_for: [
        {
          backdrop_path: "/xNXKpsY1Rxq9Ncbw8WVs7j4ijZU.jpg",
          id: 716263,
          title: "Sister-in-law's Taste",
          original_title: "시누이의 맛",
          overview:
            "Ha-ni who was on a honeymoon with her husband, Jae-ho, seems to be uncomfortable with her sister-in-law, Ye-ji. She is a freeloader who lives in her brother's house without any other job. When the close brother and sister's affection was being expressed boldly and the sister's obsession with her brother gets stronger day by day, Ha-ni got tired of her sister-in-law's behavior of entering their bedroom in her sexy underwear. Ha-ni goes to Ik-tae, the manager of the cabin and had a physical relationship. What could the real purpose of their trip to the mountain be, and what could be the fate of the married couple that is tangled like a thread around Ha-ni and her sister-in-law's relationship?",
          poster_path: "/rQkCN5ozUpzXnaK9Sn0qsrqPMw6.jpg",
          media_type: "movie",
          adult: false,
          original_language: "ko",

          genre_ids: [18, 10749],
          popularity: 22.725,
          release_date: "2020-06-10",
          video: false,
          vote_average: 6.9,
          vote_count: 16,
        },

        {
          backdrop_path: "/iQWnaBP07DztZNgon6fIxRcPqro.jpg",
          id: 682908,
          title: "Nice Sister-In-Law 3",
          original_title: "착한형수3",
          overview:
            "Jung-tae has become a successful businessman. One day, he calls for a substitute driver, but the driver was Min-goo, the man who married his sexy crush, Yoo-ri. Jung-tae still hadn't forgotten Yoo-ri and learns that life if tough for this couple. Jung-tae suggests something to Min-goo and that is to let him live with Yoo-ri for a year in return for 300 million won and his house.",
          poster_path: "/nW3ZaX4dOkJp5ZkmIbRRMkCT7i0.jpg",
          media_type: "movie",
          adult: false,
          original_language: "ko",

          genre_ids: [10749],
          popularity: 5.26,
          release_date: "2018-06-07",
          video: false,
          vote_average: 6.2,
          vote_count: 6,
        },

        {
          backdrop_path: "/rZPh7RjxvRNuvEbFYlPOEKpJYXN.jpg",
          id: 718343,
          title: "Adult Hazing",
          original_title: "성인 신고식",
          overview:
            "Ji-seok's libido wanes whenever he stands in front of a woman. One day, while sleeping alone in his friend's house, drunk Hye-eun mistook Ji-seok for Dong-cheol and then ran off. Ji-seok spent the hot night first, and Dong-cheol directed and watched it. Hye-eun later became angry after learning that she was with Ji-seok, but she happened to know his problem. In the end, she continues the relationship to help Ji-seok.",
          poster_path: "/siFmyJNKcfIwzzdzZDAGGkIE9c.jpg",
          media_type: "movie",
          adult: false,
          original_language: "ko",

          genre_ids: [18],
          popularity: 14.247,
          release_date: "2020-06-23",
          video: false,
          vote_average: 6.7,
          vote_count: 5,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 122822,
      known_for_department: "Acting",
      name: "Yvonne Yung Hung",
      original_name: "翁虹",
      popularity: 158.109,
      profile_path: "/d7tO5Z1UdpMfutCdW2zfLfXCOfO.jpg",

      known_for: [
        {
          backdrop_path: "/nPx3FS9ZnQ6fwy9BtgcnNZJpyXC.jpg",
          id: 12207,
          title: "The Legend of Drunken Master",
          original_title: "醉拳二",
          overview:
            "Returning home with his father after a shopping expedition, Wong Fei-Hong is unwittingly caught up in the battle between foreigners who wish to export ancient Chinese artifacts and loyalists who don't want the pieces to leave the country. Fei-Hong must fight against the foreigners using his Drunken Boxing style, and overcome his father's antagonism as well.",
          poster_path: "/xqUBrSBtPYLvCtfqHF5sapU6Div.jpg",
          media_type: "movie",
          adult: false,
          original_language: "cn",

          genre_ids: [28, 35],
          popularity: 28.572,
          release_date: "1994-02-03",
          video: false,
          vote_average: 7.4,
          vote_count: 971,
        },

        {
          backdrop_path: "/c6wTuTMEl0ffnZyzozNiw08Ocnl.jpg",
          id: 32629,
          title: "A Chinese Torture Chamber Story",
          original_title: "滿清十大酷刑",
          overview:
            "A corrupt magistrate subjects a innocent young bride to inconceivable physical punishments after convicting her of killing her husband.",
          poster_path: "/wbMoB0gCTA9oKz75YuE8szcCjfJ.jpg",
          media_type: "movie",
          adult: false,
          original_language: "cn",

          genre_ids: [27, 35, 18],
          popularity: 22.473,
          release_date: "1994-05-19",
          video: false,
          vote_average: 5.7,
          vote_count: 59,
        },

        {
          backdrop_path: "/uby9VuUcIaBNjBM9gGsE596ffpS.jpg",
          id: 67120,
          title: "Sex and the Emperor",
          original_title: "滿清禁宮奇案",
          overview:
            "In the Qing Dynasty, the only people who lived in the Forbidden City are the Emperor's concubines, their maids, the eunuchs and the Emperor himself. Lee Lien Ying is an eunuch who enters the Forbidden City with a big secret. One that will have his head on the floor if the wrong people find out.",
          poster_path: "/6nHUJONnTgKPwUbIN4kiDXMMh0P.jpg",
          media_type: "movie",
          adult: false,
          original_language: "cn",

          genre_ids: [18, 35, 10749],
          popularity: 10.404,
          release_date: "1994-02-10",
          video: false,
          vote_average: 4,
          vote_count: 18,
        },
      ],
    },

    {
      adult: false,
      gender: 2,
      id: 976,
      known_for_department: "Acting",
      name: "Jason Statham",
      original_name: "Jason Statham",
      popularity: 157.203,
      profile_path: "/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg",

      known_for: [
        {
          backdrop_path: "/2uSCHUsmzb6KkQPFSxBQ7bgfJLE.jpg",
          id: 345940,
          title: "The Meg",
          original_title: "The Meg",
          overview:
            "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
          poster_path: "/eyWICPcxOuTcDDDbTMOZawoOn8d.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 878, 27],
          popularity: 67.757,
          release_date: "2018-08-09",
          video: false,
          vote_average: 6.3,
          vote_count: 7715,
        },

        {
          backdrop_path: "/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
          id: 637649,
          title: "Wrath of Man",
          original_title: "Wrath of Man",
          overview:
            "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
          poster_path: "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [80, 28, 53],
          popularity: 158.685,
          release_date: "2021-04-22",
          video: false,
          vote_average: 7.627,
          vote_count: 5442,
        },

        {
          backdrop_path: "/kWt1OcPgwO1ssu57wgTKmq38JYw.jpg",
          id: 4108,
          title: "The Transporter",
          original_title: "The Transporter",
          overview:
            "Former Special Forces officer Frank Martin will deliver anything to anyone for the right price, and his no-questions-asked policy puts him in high demand. But when he realizes his latest cargo is alive, it sets in motion a dangerous chain of events. The bound and gagged Lai is being smuggled to France by a shady American businessman, and Frank works to save her as his own illegal activities are uncovered by a French detective.",
          poster_path: "/xmuCaJJjGbUns8pwMD7M0C0O1uP.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 80, 53],
          popularity: 40.506,
          release_date: "2002-10-02",
          video: false,
          vote_average: 6.71,
          vote_count: 5389,
        },
      ],
    },

    {
      adult: false,
      gender: 2,
      id: 500,
      known_for_department: "Acting",
      name: "Tom Cruise",
      original_name: "Tom Cruise",
      popularity: 151.544,
      profile_path: "/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg",

      known_for: [
        {
          backdrop_path: "/4V1yIoAKPMRQwGBaSses8Bp2nsi.jpg",
          id: 137113,
          title: "Edge of Tomorrow",
          original_title: "Edge of Tomorrow",
          overview:
            "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
          poster_path: "/c4BEWLbXyPiXNFaDt57HAgekCqw.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 878],
          popularity: 61.5,
          release_date: "2014-05-27",
          video: false,
          vote_average: 7.628,
          vote_count: 13987,
        },

        {
          backdrop_path: "/sbkYWB5QcfT00gLUkbNE5LTdhIX.jpg",
          id: 75612,
          title: "Oblivion",
          original_title: "Oblivion",
          overview:
            "Jack Harper is one of the last few drone repairmen stationed on Earth. Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack’s mission is nearly complete. His existence is brought crashing down when he rescues a beautiful stranger from a downed spacecraft. Her arrival triggers a chain of events that forces him to question everything he knows and puts the fate of humanity in his hands.",
          poster_path: "/eO3r38fwnhb58M1YgcjQBd3VNcp.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 878, 12, 9648],
          popularity: 32.234,
          release_date: "2013-04-10",
          video: false,
          vote_average: 6.7,
          vote_count: 10773,
        },

        {
          backdrop_path: "/ih4lZkUpmSE7AP3maymiO72xJ1z.jpg",
          id: 56292,
          title: "Mission: Impossible - Ghost Protocol",
          original_title: "Mission: Impossible - Ghost Protocol",
          overview:
            "Ethan Hunt and his team are racing against time to track down a dangerous terrorist named Hendricks, who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
          poster_path: "/eRZTGx7GsiKqPch96k27LK005ZL.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 53, 12],
          popularity: 47.779,
          release_date: "2011-12-07",
          video: false,
          vote_average: 7.093,
          vote_count: 9967,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 115440,
      known_for_department: "Acting",
      name: "Sydney Sweeney",
      original_name: "Sydney Sweeney",
      popularity: 148.317,
      profile_path: "/6BR5TGBhzxZ6KVQwtcwtKKAuJkg.jpg",

      known_for: [
        {
          backdrop_path: "/9KnIzPCv9XpWA0MqmwiKBZvV1Sj.jpg",
          id: 85552,
          name: "Euphoria",
          original_name: "Euphoria",
          overview:
            "A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.",
          poster_path: "/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg",
          media_type: "tv",
          adult: false,
          original_language: "en",

          genre_ids: [18],
          popularity: 280.947,
          first_air_date: "2019-06-16",
          vote_average: 8.3,
          vote_count: 9897,

          origin_country: ["US"],
        },

        {
          backdrop_path: "/j9eOeLlTGoHoM8BNUJVNyWmIvCi.jpg",
          id: 1072790,
          title: "Anyone But You",
          original_title: "Anyone But You",
          overview:
            "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
          poster_path: "/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [10749, 35],
          popularity: 102.051,
          release_date: "2023-12-21",
          video: false,
          vote_average: 6.908,
          vote_count: 2402,
        },

        {
          backdrop_path: "/5Eip60UDiPLASyKjmHPMruggTc4.jpg",
          id: 1041613,
          title: "Immaculate",
          original_title: "Immaculate",
          overview:
            "An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a living nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.",
          poster_path: "/fdZpvODTX5wwkD0ikZNaClE4AoW.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [27, 9648, 53],
          popularity: 68.302,
          release_date: "2024-03-20",
          video: false,
          vote_average: 6.2,
          vote_count: 1340,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 2251466,
      known_for_department: "Acting",
      name: "Kaylah Zander",
      original_name: "Kaylah Zander",
      popularity: 141.718,
      profile_path: "/gmhLmEWBw63qTTMsFLm87ND0Hwc.jpg",

      known_for: [
        {
          backdrop_path: "/zQG1FYDqoWo2hYhE5GVZ1yrWSfh.jpg",
          id: 921655,
          title: "Rescued by Ruby",
          original_title: "Rescued by Ruby",
          overview:
            "Chasing his dream to join an elite K-9 unit, a state trooper partners with a fellow underdog: clever but naughty shelter pup Ruby. Based on a true story.",
          poster_path: "/tPlJEodEn0SSV4avo8KSawtlTlN.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [10751, 18],
          popularity: 11.847,
          release_date: "2022-03-17",
          video: false,
          vote_average: 7.5,
          vote_count: 312,
        },

        {
          backdrop_path: "/rey2eh6752C2UbGYRileKk1PVTo.jpg",
          id: 210916,
          name: "The Recruit",
          original_name: "The Recruit",
          overview:
            "Recruited out of law school by the CIA, a daredevil young attorney leaps unprepared into the dangerous world of international espionage.",
          poster_path: "/mLbFg0u2DPYuB5CILzwWk3kdI8b.jpg",
          media_type: "tv",
          adult: false,
          original_language: "en",

          genre_ids: [18, 80, 10759],
          popularity: 162.102,
          first_air_date: "2022-12-16",
          vote_average: 7.464,
          vote_count: 334,

          origin_country: ["US"],
        },

        {
          backdrop_path: "/lRJNEdKlA47JVo3DcDd3jXrQepe.jpg",
          id: 452019,
          title: "Needle in a Timestack",
          original_title: "Needle in a Timestack",
          overview:
            "Nick and Janine live in bliss until her ex warps time to try to tear them apart by using Nick's old girlfriend. As Nick's memories and reality disappear, he must decide what he's willing to sacrifice to save -- or let go of -- everything he loves.",
          poster_path: "/rjGYOszxlaUAe6EC5yZ4Q8l3aVL.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [18, 10749, 878],
          popularity: 5.997,
          release_date: "2021-10-15",
          video: false,
          vote_average: 5.4,
          vote_count: 56,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 10990,
      known_for_department: "Acting",
      name: "Emma Watson",
      original_name: "Emma Watson",
      popularity: 141.279,
      profile_path: "/A14lLCZYDhfYdBa0fFRpwMDiwRN.jpg",

      known_for: [
        {
          backdrop_path: "/uU1Mt4JWhDvl4vKb3AfxNsorkoM.jpg",
          id: 321612,
          title: "Beauty and the Beast",
          original_title: "Beauty and the Beast",
          overview:
            "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
          poster_path: "/6iIc0vHXV5ir3DBncUnlhZFJUe3.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [10751, 14, 10749],
          popularity: 83.271,
          release_date: "2017-03-16",
          video: false,
          vote_average: 6.972,
          vote_count: 15518,
        },

        {
          backdrop_path: "/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
          id: 12445,
          title: "Harry Potter and the Deathly Hallows: Part 2",
          original_title: "Harry Potter and the Deathly Hallows: Part 2",
          overview:
            "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
          poster_path: "/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [14, 12],
          popularity: 124.138,
          release_date: "2011-07-12",
          video: false,
          vote_average: 8.089,
          vote_count: 20789,
        },

        {
          backdrop_path: "/AqLcLsGGTzAjm3pCCq0CZCQrp6m.jpg",
          id: 12444,
          title: "Harry Potter and the Deathly Hallows: Part 1",
          original_title: "Harry Potter and the Deathly Hallows: Part 1",
          overview:
            "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
          poster_path: "/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [12, 14],
          popularity: 93.834,
          release_date: "2010-11-17",
          video: false,
          vote_average: 7.744,
          vote_count: 19274,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 1522703,
      known_for_department: "Acting",
      name: "Hande Erçel",
      original_name: "Hande Erçel",
      popularity: 139.822,
      profile_path: "/jrUvWNqOpfDm3D0KhbuRwQOy8Nu.jpg",

      known_for: [
        {
          backdrop_path: "/9qq8LpOoBLYq8MxiMugn0gf9qJd.jpg",
          id: 104877,
          name: "Love Is in the Air",
          original_name: "Sen Çal Kapımı",
          overview:
            "Eda, who ties all her hopes to her education, confronts Serkan Bolat, who cuts off her international education scholarship and leaves her with high school diploma. Serkan Bolat offers Eda to give her scholarship back if she pretends to be his fiance for two months. Although Eda rejects the offer of this man as she hates him, she has to accept it when the conditions change. While pretending to be engaged, Serkan and Eda begin to experience a passionate, challenging relationship that will make them forget all they know right. Because love is difficult. And that's why it's amazing.",
          poster_path: "/bE71f9A3eztjcd5JT3MmHB8MbzA.jpg",
          media_type: "tv",
          adult: false,
          original_language: "tr",

          genre_ids: [18, 35],
          popularity: 152.956,
          first_air_date: "2020-07-08",
          vote_average: 8.2,
          vote_count: 3043,

          origin_country: ["TR"],
        },

        {
          backdrop_path: "/nWNH4OTbiZTxqfPOgSYI2U17aCJ.jpg",
          id: 67570,
          name: "Love Doesn't Understand Words",
          original_name: "Aşk Laftan Anlamaz",
          overview:
            "Hayat is a country girl with strict parents. She is in a love hate relationship with her boss Murat. Hayat is full of secrets that can ruin her career and relationship.",
          poster_path: "/krSdiuUrsqka7FFtaqjxEqC0bE9.jpg",
          media_type: "tv",
          adult: false,
          original_language: "tr",

          genre_ids: [35, 18],
          popularity: 28.994,
          first_air_date: "2016-06-15",
          vote_average: 8.5,
          vote_count: 32,

          origin_country: ["TR"],
        },

        {
          backdrop_path: "/o7SHflJUqxz7XgRrRD7QVYzIP5A.jpg",
          id: 64164,
          name: "Sun's Daughters",
          original_name: "Güneşin Kızları",
          overview:
            "Güneş finds her prince charming at the age of 35, after raising 3 daughters and completely giving up hope on love. When she accepts the marriage proposal of Istanbul businessman Haluk Mertoğlu, Güneş and her troublesome daughters fall like a bomb into the middle of the Mertoğlu family's life. All of them have different wishes and expectations from their new lives, but the life of the Mertoğlu family is not as perfect as it seems. With the arrival of Güneş and her daughters, the secrets of the past will begin to be revealed one by one.",
          poster_path: "/NZeAEg9XuxSMAxE5ecW4pH6QXy.jpg",
          media_type: "tv",
          adult: false,
          original_language: "tr",

          genre_ids: [10751, 18],
          popularity: 23.85,
          first_air_date: "2015-06-18",
          vote_average: 7.6,
          vote_count: 79,

          origin_country: ["TR"],
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 1245,
      known_for_department: "Acting",
      name: "Scarlett Johansson",
      original_name: "Scarlett Johansson",
      popularity: 138.243,
      profile_path: "/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",

      known_for: [
        {
          backdrop_path: "/ozVwXlfxqNsariipatGwa5px3Pm.jpg",
          id: 240832,
          title: "Lucy",
          original_title: "Lucy",
          overview:
            "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
          poster_path: "/kRbpUTRNm6QbLQFPFWUcNC4czEm.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 878],
          popularity: 57.014,
          release_date: "2014-07-25",
          video: false,
          vote_average: 6.456,
          vote_count: 16142,
        },

        {
          backdrop_path: "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
          id: 497698,
          title: "Black Widow",
          original_title: "Black Widow",
          overview:
            "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
          poster_path: "/kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 12, 878],
          popularity: 64.983,
          release_date: "2021-07-07",
          video: false,
          vote_average: 7.2,
          vote_count: 10330,
        },

        {
          backdrop_path: "/cDOv649oRCxLxsrMtboqSFOb6aB.jpg",
          id: 315837,
          title: "Ghost in the Shell",
          original_title: "Ghost in the Shell",
          overview:
            "In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
          poster_path: "/zCtL3UBgCoZzd7XTVGhvl6XY75E.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [878, 18, 28],
          popularity: 33.331,
          release_date: "2017-03-29",
          video: false,
          vote_average: 6.086,
          vote_count: 8063,
        },
      ],
    },

    {
      adult: false,
      gender: 2,
      id: 1190668,
      known_for_department: "Acting",
      name: "Timothée Chalamet",
      original_name: "Timothée Chalamet",
      popularity: 135.415,
      profile_path: "/BE2sdjpgsa2rNTFa66f7upkaOP.jpg",

      known_for: [
        {
          backdrop_path: "/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
          id: 438631,
          title: "Dune",
          original_title: "Dune",
          overview:
            "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
          poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [878, 12],
          popularity: 151.775,
          release_date: "2021-09-15",
          video: false,
          vote_average: 7.8,
          vote_count: 13146,
        },

        {
          backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
          id: 693134,
          title: "Dune: Part Two",
          original_title: "Dune: Part Two",
          overview:
            "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
          poster_path: "/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [878, 12],
          popularity: 224.177,
          release_date: "2024-02-27",
          video: false,
          vote_average: 8.2,
          vote_count: 6231,
        },

        {
          backdrop_path: "/zvOJawrnmgK0sL293mOXOdLvTXQ.jpg",
          id: 398818,
          title: "Call Me by Your Name",
          original_title: "Call Me by Your Name",
          overview:
            "In 1980s Italy, a relationship begins between seventeen-year-old teenage Elio and the older adult man hired as his father's research assistant.",
          poster_path: "/gXiE0WveDnT0n5J4sW9TMxXF4oT.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [10749, 18],
          popularity: 53.515,
          release_date: "2017-07-28",
          video: false,
          vote_average: 8.1,
          vote_count: 12177,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 974169,
      known_for_department: "Acting",
      name: "Jenna Ortega",
      original_name: "Jenna Ortega",
      popularity: 133.746,
      profile_path: "/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg",

      known_for: [
        {
          backdrop_path: "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
          id: 119051,
          name: "Wednesday",
          original_name: "Wednesday",
          overview:
            "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
          poster_path: "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
          media_type: "tv",
          adult: false,
          original_language: "en",

          genre_ids: [10765, 9648, 35],
          popularity: 155.424,
          first_air_date: "2022-11-23",
          vote_average: 8.436,
          vote_count: 8859,

          origin_country: ["US"],
        },

        {
          backdrop_path: "/70Rm9ItxKuEKN8iu6rNjfwAYUCJ.jpg",
          id: 760104,
          title: "X",
          original_title: "X",
          overview:
            "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
          poster_path: "/lopZSVtXzhFY603E9OqF7O1YKsh.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [27, 9648, 53],
          popularity: 54.905,
          release_date: "2022-03-17",
          video: false,
          vote_average: 6.748,
          vote_count: 3396,
        },

        {
          backdrop_path: "/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg",
          id: 646385,
          title: "Scream",
          original_title: "Scream",
          overview:
            "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
          poster_path: "/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [27, 9648],
          popularity: 54.031,
          release_date: "2022-01-12",
          video: false,
          vote_average: 6.666,
          vote_count: 3378,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 3371804,
      known_for_department: "Acting",
      name: "Christine Bermas",
      original_name: "Christine Bermas",
      popularity: 125.601,
      profile_path: "/zdFbplqeZbzgCJEJfnj1pPqVVH2.jpg",

      known_for: [
        {
          backdrop_path: "/zGkUjZNz7yhbPcCgVtrO24GvpLJ.jpg",
          id: 990485,
          title: "Scorpio Nights 3",
          original_title: "Scorpio Nights 3",
          overview:
            "A young couple's sex acts are witnessed by a young man through a hole. When the wife seduces him, they engage in an illicit affair. Chaos ensues when the husband learns about them.",
          poster_path: "/9uBbhfM8Co57T4Fn5flo0tMn5NC.jpg",
          media_type: "movie",
          adult: false,
          original_language: "tl",

          genre_ids: [53],
          popularity: 7.87,
          release_date: "2022-07-28",
          video: false,
          vote_average: 6.3,
          vote_count: 12,
        },

        {
          backdrop_path: "/cgvio9pxvmvaRDMucIY0gldxPdj.jpg",
          id: 949983,
          title: "Island of Desire",
          original_title: "Island of Desire",
          overview:
            "A nurse is assigned to work at an island called Isla Bato, where men treat women with lust. As she experiences the people's madness, she plans a way to get out of the island.",
          poster_path: "/aGT1dS0CvHuD1Bu2K5Ameh4mRjl.jpg",
          media_type: "movie",
          adult: false,
          original_language: "tl",

          genre_ids: [18, 53],
          popularity: 15.913,
          release_date: "2022-04-01",
          video: false,
          vote_average: 4.4,
          vote_count: 10,
        },

        {
          backdrop_path: "/72EdK1xuE7a6q8tB3uUaxAuk60d.jpg",
          id: 1209770,
          title: "Bedspacer",
          original_title: "Bedspacer",
          overview:
            "Janice's steamy obsession to imitate Lexi propels them to campus stardom. But dark secrets blur the lines between authenticity and seductive deception.",
          poster_path: "/isYR72nLhh2zyBbOHi2gea7u4O6.jpg",
          media_type: "movie",
          adult: false,
          original_language: "tl",

          genre_ids: [53, 18],
          popularity: 28.15,
          release_date: "2024-01-05",
          video: false,
          vote_average: 4.4,
          vote_count: 9,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 2400820,
      known_for_department: "Acting",
      name: "Chung Su-bin",
      original_name: "정수빈",
      popularity: 124.401,
      profile_path: "/t81OQxcK6wo3RYjUEkAHpnx7hWi.jpg",

      known_for: [
        {
          backdrop_path: "/zbzldNycqQy1O9gP5vwJf9HECwk.jpg",
          id: 208336,
          name: "Revenge of Others",
          original_name: "3인칭 복수",
          overview: `A boy falls to his death at school, but Ok Chan-mi does not believe that her twin brother, Park Won-seok, committed suicide. Chan-mi transfers to her brother's school, Yongtan High, and meets Ji Soo-heon, who witnessed her brother's death. A "hero," who avenges bullied students, appears at Yongtan High. Chan-mi speculates that it may be connected to her brother and starts looking for this hero.",
    "poster_path": "/ccej6D8J81DDJWqhP7OG6PA6xcl.jpg`,
          media_type: "tv",
          adult: false,
          original_language: "ko",

          genre_ids: [18, 9648],
          popularity: 82.232,
          first_air_date: "2022-11-09",
          vote_average: 8.3,
          vote_count: 232,

          origin_country: ["KR"],
        },

        {
          backdrop_path: "/vtdpgm0QR4RDB3tQFIdpYG4QE16.jpg",
          id: 211747,
          name: "Island",
          original_name: "아일랜드",
          overview:
            "Jeju Island is taken over by evil spirits. An exorcist, priest, and chaebol heiress are fated to fight against evil spirits attempting to end the world. “They are stirring at last.”",
          poster_path: "/vg6XsKLcO4dCzqBce045laQ82S6.jpg",
          media_type: "tv",
          adult: false,
          original_language: "ko",

          genre_ids: [10765, 10759, 18],
          popularity: 36.157,
          first_air_date: "2022-12-30",
          vote_average: 8.005,
          vote_count: 200,

          origin_country: ["KR"],
        },

        {
          backdrop_path: "/o2t1SRRssesubSvZHLWSK7uW3fc.jpg",
          id: 196526,
          name: "Trolley",
          original_name: "트롤리",
          overview:
            "A sudden tragedy brings the wife of an assemblyman out of her private life and forces her to confront family secrets and her own troubling past.",
          poster_path: "/oqALkLrRRlBjZMQ5bw4QXDQy68g.jpg",
          media_type: "tv",
          adult: false,
          original_language: "ko",

          genre_ids: [9648, 18],
          popularity: 20.889,
          first_air_date: "2022-12-19",
          vote_average: 5,
          vote_count: 25,

          origin_country: ["KR"],
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 2049994,
      known_for_department: "Acting",
      name: "Zhao Lusi",
      original_name: "赵露思",
      popularity: 121.663,
      profile_path: "/hjuAEb4VksEtgSpygDKXs5WSWho.jpg",

      known_for: [
        {
          backdrop_path: "/wQlJJJ50gKphCci0SmoetUXmJN4.jpg",
          id: 210733,
          name: "Hidden Love",
          original_name: "偷偷藏不住",
          overview:
            "Since high school, Sang Zhi has had a crush on Duan Jiaxu. When fate brings them together again, they find a chance to embark on a sweet relationship.",
          poster_path: "/riGzESa9N9toumP9OhMmg0QvFPD.jpg",
          media_type: "tv",
          adult: false,
          original_language: "zh",

          genre_ids: [18],
          popularity: 109.138,
          first_air_date: "2023-06-20",
          vote_average: 8.6,
          vote_count: 135,

          origin_country: ["CN"],
        },

        {
          backdrop_path: "/5BuVAlwQiLHVqTWITHxaLmp2leB.jpg",
          id: 87299,
          name: "I Hear You",
          original_name: "最动听的事",
          overview:
            "Bei Er Duo, a girl from an ordinary family, dreams about studying in Japan to be a professional voice actor. However, her mother wants her to marry rich whilst she is young, leading to continuous blind dates which irritate Bei Er Duo. In her desperation to raise funds for studying overseas as well as helping her best friend Tang Li out of a crisis, Bei Er Duo joins a couple reality program, encountering top violin maker Ye Shu Wei.",
          poster_path: "/2wVMh3vqvt1IgAhextxwUKxaOAH.jpg",
          media_type: "tv",
          adult: false,
          original_language: "zh",

          genre_ids: [18],
          popularity: 38.934,
          first_air_date: "2019-01-28",
          vote_average: 7.7,
          vote_count: 66,

          origin_country: ["CN"],
        },

        {
          backdrop_path: "/gxafmR8O7cAJxmrs3RHp1P2ftsY.jpg",
          id: 103635,
          name: "The Romance of Tiger and Rose",
          original_name: "传闻中的陈芊芊",
          overview:
            "A screenwriter finds herself becoming a character in the script of her own creation. However, she is not meant to live past three episodes! Chen Xiaoqian is a writer who poured blood, sweat and tears into creating a big female-centric drama. What could have started filming smoothly quickly turned south because of actor Han Mingxing's reservations about the script. Feeling wronged, Chen Xiaoqian vows to prove herself yet she accidentally gets stuck in a parallel world where her story has come to life. Now known as the 3rd princess Chen Qianqian, she is an insignificant side character with a horrid reputation that is not meant to live long in the story. In order to live, she starts on a road to reverse her fate. She also gets caught in between the arrogant and black-bellied prince Han Shuo and the practically perfect Pei Heng.",
          poster_path: "/mCsidkxf6ji8e71T07dYff3FjCF.jpg",
          media_type: "tv",
          adult: false,
          original_language: "zh",

          genre_ids: [35, 18],
          popularity: 11.111,
          first_air_date: "2020-05-18",
          vote_average: 7.3,
          vote_count: 23,

          origin_country: ["CN"],
        },
      ],
    },

    {
      adult: false,
      gender: 2,
      id: 6384,
      known_for_department: "Acting",
      name: "Keanu Reeves",
      original_name: "Keanu Reeves",
      popularity: 121.426,
      profile_path: "/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg",

      known_for: [
        {
          backdrop_path: "/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
          id: 603,
          title: "The Matrix",
          original_title: "The Matrix",
          overview:
            "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
          poster_path: "/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 878],
          popularity: 145.097,
          release_date: "1999-03-31",
          video: false,
          vote_average: 8.221,
          vote_count: 26019,
        },

        {
          backdrop_path: "/eD7FnB7LLrBV5ewjdGLYTAoV9Mv.jpg",
          id: 245891,
          title: "John Wick",
          original_title: "John Wick",
          overview:
            "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
          poster_path: "/TxbvYS8wsgYSpYZtQLZXnoVOIQ.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 53],
          popularity: 51.938,
          release_date: "2014-10-22",
          video: false,
          vote_average: 7.442,
          vote_count: 19441,
        },

        {
          backdrop_path: "/r17jFHAemzcWPPtoO0UxjIX0xas.jpg",
          id: 324552,
          title: "John Wick: Chapter 2",
          original_title: "John Wick: Chapter 2",
          overview:
            "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
          poster_path: "/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 53, 80],
          popularity: 73.04,
          release_date: "2017-02-08",
          video: false,
          vote_average: 7.3,
          vote_count: 13221,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 1152083,
      known_for_department: "Acting",
      name: "Sabrina Carpenter",
      original_name: "Sabrina Carpenter",
      popularity: 118.691,
      profile_path: "/o0anvGEg34MzoNh6hbJHthB3paF.jpg",

      known_for: [
        {
          backdrop_path: "/oAcV4179Kdpvb2xk9TtS8Ewrp8q.jpg",
          id: 612706,
          title: "Work It",
          original_title: "Work It",
          overview:
            "A brilliant but clumsy high school senior vows to get into her late father's alma mater by transforming herself and a misfit squad into dance champions.",
          poster_path: "/b5XfICAvUe8beWExBz97i0Qw4Qh.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [35, 10402],
          popularity: 15.067,
          release_date: "2020-08-07",
          video: false,
          vote_average: 7.538,
          vote_count: 1170,
        },

        {
          backdrop_path: "/8wfPjfUgmGpqCIW6gS0pS0pixnA.jpg",
          id: 625450,
          title: "Tall Girl",
          original_title: "Tall Girl",
          overview:
            "Jodi, the tallest girl in her high school, has always felt uncomfortable in her own skin. But after years of slouching, being made fun of, and avoiding attention at all costs, Jodi finally decides to find the confidence to stand tall.",
          poster_path: "/m0clsFEXidLVJ0TueqWOvvImOMh.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [35, 18, 10749],
          popularity: 16.128,
          release_date: "2019-09-13",
          video: false,
          vote_average: 6.317,
          vote_count: 1873,
        },

        {
          backdrop_path: "/L7DIiAdP8DnNqOh7454ZrTYspR.jpg",
          id: 630566,
          title: "Clouds",
          original_title: "Clouds",
          overview:
            "Young musician Zach Sobiech discovers his cancer has spread, leaving him just a few months to live. With limited time, he follows his dream and makes an album, unaware that it will soon be a viral music phenomenon.",
          poster_path: "/d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [10402, 18, 10749],
          popularity: 15.921,
          release_date: "2020-10-09",
          video: false,
          vote_average: 8.2,
          vote_count: 1009,
        },
      ],
    },

    {
      adult: false,
      gender: 2,
      id: 2786960,
      known_for_department: "Acting",
      name: "Gabriel Guevara",
      original_name: "Gabriel Guevara",
      popularity: 117.865,
      profile_path: "/pviRYKEEmoPUfLYwP1VHJ6LQcRg.jpg",

      known_for: [
        {
          backdrop_path: "/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
          id: 1010581,
          title: "My Fault",
          original_title: "Culpa mía",
          overview:
            "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
          poster_path: "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
          media_type: "movie",
          adult: false,
          original_language: "es",

          genre_ids: [10749, 18],
          popularity: 345.89,
          release_date: "2023-06-08",
          video: false,
          vote_average: 7.842,
          vote_count: 3518,
        },

        {
          backdrop_path: "/k24eZq5I3jyz4htPkZCRpnUmBzE.jpg",
          id: 1156593,
          title: "Your Fault",
          original_title: "Culpa tuya",
          overview:
            "The love between Noah and Nick seems unwavering despite their parents' attempts to separate them. But his job and her entry into college open up their lives to new relationships that will shake the foundations of both their relationship and the Leister family itself.",
          poster_path: "/1sQA7lfcF9yUyoLYC0e6Zo3jmxE.jpg",
          media_type: "movie",
          adult: false,
          original_language: "es",

          genre_ids: [10749, 18],
          popularity: 356.011,
          release_date: "2024-12-26",
          video: false,
          vote_average: 7.131,
          vote_count: 1024,
        },

        {
          backdrop_path: "/ieiq46OoeTrLkjtclmhii6iRyzP.jpg",
          id: 242876,
          name: "Raising Voices",
          original_name: "Ni una más",
          overview:
            "When a 17-year-old reports a sexual assault at her high school, an investigation upends her life and tests her relationships.",
          poster_path: "/lCU77Jp0iWN2e1WuSJvR7M35ebN.jpg",
          media_type: "tv",
          adult: false,
          original_language: "es",

          genre_ids: [18],
          popularity: 101.525,
          first_air_date: "2024-05-31",
          vote_average: 7.815,
          vote_count: 376,

          origin_country: ["ES"],
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 109513,
      known_for_department: "Acting",
      name: "Alexandra Daddario",
      original_name: "Alexandra Daddario",
      popularity: 116.831,
      profile_path: "/nVznarxjPgR2JtMUBNl7TRxqTqH.jpg",

      known_for: [
        {
          backdrop_path: "/mMoG4nPSDupXIXOwVvpexZY2W0N.jpg",
          id: 254128,
          title: "San Andreas",
          original_title: "San Andreas",
          overview:
            "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
          poster_path: "/2Gfjn962aaFSD6eST6QU3oLDZTo.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [28, 18, 53],
          popularity: 60.516,
          release_date: "2015-05-27",
          video: false,
          vote_average: 6.244,
          vote_count: 8604,
        },

        {
          backdrop_path: "/ugiV9SpJburMOPeIyjBJyAnO1So.jpg",
          id: 32657,
          title: "Percy Jackson & the Olympians: The Lightning Thief",
          original_title: "Percy Jackson & the Olympians: The Lightning Thief",
          overview:
            "Accident prone teenager, Percy discovers he's actually a demi-God, the son of Poseidon, and he is needed when Zeus' lightning is stolen. Percy must master his new found skills in order to prevent a war between the Gods that could devastate the entire world.",
          poster_path: "/brzpTyZ5bnM7s53C1KSk1TmrMO6.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [12, 14, 10751],
          popularity: 60.827,
          release_date: "2010-02-01",
          video: false,
          vote_average: 6.21,
          vote_count: 7507,
        },

        {
          backdrop_path: "/6QmX2BDVr1hIOIPHqnxvp1C1ZZp.jpg",
          id: 339846,
          title: "Baywatch",
          original_title: "Baywatch",
          overview:
            "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
          poster_path: "/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [35, 28, 80],
          popularity: 48.478,
          release_date: "2017-05-25",
          video: false,
          vote_average: 6.092,
          vote_count: 8103,
        },
      ],
    },

    {
      adult: false,
      gender: 1,
      id: 224513,
      known_for_department: "Acting",
      name: "Ana de Armas",
      original_name: "Ana de Armas",
      popularity: 113.592,
      profile_path: "/3vxvsmYLTf4jnr163SUlBIw51ee.jpg",

      known_for: [
        {
          backdrop_path: "/3bWUP9kyf9BxVc0hmZdqXB2w4UP.jpg",
          id: 335984,
          title: "Blade Runner 2049",
          original_title: "Blade Runner 2049",
          overview:
            "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
          poster_path: "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [878, 18],
          popularity: 142.42,
          release_date: "2017-10-04",
          video: false,
          vote_average: 7.572,
          vote_count: 13859,
        },

        {
          backdrop_path: "/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg",
          id: 546554,
          title: "Knives Out",
          original_title: "Knives Out",
          overview:
            "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
          poster_path: "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [35, 80, 9648],
          popularity: 55.972,
          release_date: "2019-11-27",
          video: false,
          vote_average: 7.845,
          vote_count: 12603,
        },

        {
          backdrop_path: "/oNoprEND25zXR6Fns8cIZUkuoMc.jpg",
          id: 308266,
          title: "War Dogs",
          original_title: "War Dogs",
          overview:
            "Based on the true story of two young men, David Packouz and Efraim Diveroli, who won a $300 million contract from the Pentagon to arm America's allies in Afghanistan.",
          poster_path: "/mDcPRjZC1bb6LavFU3gwsWdVfCM.jpg",
          media_type: "movie",
          adult: false,
          original_language: "en",

          genre_ids: [35, 80, 18],
          popularity: 39.88,
          release_date: "2016-08-18",
          video: false,
          vote_average: 6.9,
          vote_count: 4982,
        },
      ],
    },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const arrData = await apiService.getCastsList();
    setData(arrData);
  };

  return (
    <>
      <div id="content">
        <h1 className="pt-9 pb-9 font-semibold text-[30px] text-black">
          Popular Cast
        </h1>
        <div className="flex flex-wrap justify-between">
          {data.map((person) => (
            <div
              key={person.id}
              className="h-[405px] w-[314px] mb-8 border border-solid border-[#e3e3e3] rounded-xl shadow-lg"
            >
              <Link to={`/person/${person.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  className="w-full h-[76%] object-cover rounded-t-xl mb-3 object-[0%_19%]"
                  alt="Can't not load this image"
                />
              </Link>
              <Link
                to={`/person/${person.id}`}
                className=" text-black hover:text-[#01b4e4] cursor-pointer"
              >
                <p className="pl-4 pb-[3px] pr-4 line-clamp-2">{person.name}</p>
              </Link>
              <p className="pl-4 text-[#0009] text-[14px] line-clamp-2">
                {person.known_for
                  .map((item) => item.title || item.name)
                  .join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CastPage;
