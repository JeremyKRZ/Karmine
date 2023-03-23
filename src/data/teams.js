import valorant from '../assets/images/games/valorant.png'
import lol from '../assets/images/games/lol.jpg'
import tft from '../assets/images/games/tft.png'
import trackmania from '../assets/images/games/trackmania.png'
import smash from '../assets/images/games/smash.png'
import rocket from '../assets/images/games/rocket.png'

import cabochard_profile from '../assets/images/players/cabochard_profile.png'
import saken_profile from '../assets/images/players/saken_profile.png'
import skeanz_profile from '../assets/images/players/skeanz_profile.png'
import kaori_profile from '../assets/images/players/kaori_profile.png'
import whiteinn_profile from '../assets/images/players/whiteinn_profile.png'
import cabochard from '../assets/images/players/cabochard.avif'
import double61 from '../assets/images/players/double61.png'
import canbizz from '../assets/images/players/canbizz.png'

import ScreaM from '../assets/images/players/ScreaM.png'

const games = [
  {
    game: "league",
    src: lol,
    teams: [{
      name: 'Main',
      players: [{
        pseudo: 'Cabochard',
        fullname: 'Lucas Simon-Meslet',
        age: 25,
        birthdate: '14 avril 1997',
        nationality: 'France',
        profile_pic: cabochard_profile,
        img_src: cabochard,
        role: "Toplaner",
        reseaux: {
          twitch: 'https://www.twitch.tv/cabochardlol',
          insta: 'https://www.instagram.com/cabochardlol/',
          twitter: 'https://twitter.com/CabochardLoL'
        }
      }, {
        pseudo: 'Skeanz',
        fullname: 'Duncan Marquet',
        age: 22,
        birthdate: '25 septembre 2000',
        nationality: 'France',
        profile_pic: skeanz_profile,
        img_src: skeanz_profile,
        role: "Jungler",
        reseaux: {
          twitch: 'https://www.twitch.tv/skeanz',
          insta: 'https://www.instagram.com/duncan_marquet/',
          twitter: 'https://twitter.com/Skeanz_lol'
        }
      }, {
        pseudo: 'Saken',
        fullname: 'Lucas Fayard',
        age: 24,
        birthdate: '5 novembre 1998',
        nationality: 'France',
        profile_pic: saken_profile,
        img_src: saken_profile,
        role: "Midlaner",
        reseaux: {
          twitch: 'https://www.twitch.tv/saken_lol',
          insta: 'https://www.instagram.com/kc_saken',
          twitter: 'https://twitter.com/Saken_lol'
        }
      }, {
        pseudo: 'Kaori',
        fullname: 'Muhammed Hasan Şentürk',
        age: 21,
        birthdate: '9 Juillet 2001',
        nationality: 'Turquie',
        profile_pic: kaori_profile,
        img_src: kaori_profile,
        role: "ADC",
        reseaux: {
          twitch: 'https://www.twitch.tv/kaori123',
          insta: 'https://www.instagram.com/kaorilol333/',
          twitter: 'https://twitter.com/KaoriLoL'
        }
      }, {
        pseudo: 'Whiteinn',
        fullname: 'Alexandru Kolozsvari',
        age: 22,
        birthdate: '3 octobre 2000',
        nationality: 'Roumanie',
        profile_pic: whiteinn_profile,
        img_src: whiteinn_profile,
        role: "Support",
        reseaux: {
          twitch: '',
          insta: '',
          twitter: 'https://twitter.com/Whitein15'
        }
      }]
    }, {
      name: 'Academy',
      players: []
    }]
  }, {
    game: "valorant",
    src: valorant,
    teams: [{
      name: "Main",
      players: [{
        pseudo: 'ScreaM',
        fullname: 'Adil Benrlitom',
        age: 28,
        birthdate: '2 juillet 1994',
        nationality: 'Belgique',
        profile_pic: ScreaM,
        img_src: ScreaM,
        role: " ",
        reseaux: {
          twitch: 'https://www.twitch.tv/scream',
          insta: 'https://www.instagram.com/screamdak1ng',
          twitter: 'https://twitter.com/ScreaM_'
        }
      }, {
        pseudo: 'XMS',
        fullname: 'Alexandre Forté',
        age: 25,
        birthdate: '24 mai 1997',
        nationality: 'France',
        profile_pic: "",
        img_src: "",
        role: "",
        reseaux: {
          twitch: 'https://www.twitch.tv/xms51',
          insta: '',
          twitter: 'https://twitter.com/xms51'
        }
      }, {
        pseudo: 'Newzera',
        fullname: 'Alexis Humbert',
        age: 21,
        birthdate: '?',
        nationality: 'France',
        profile_pic: "",
        img_src: "",
        role: "",
        reseaux: {
          twitch: 'https://www.twitch.tv/Newzeraaaa',
          insta: '',
          twitter: 'https://twitter.com/Newzeraaa'
        }
      }, {
        pseudo: 'Shin',
        fullname: 'Ryad Ensaad',
        age: 20,
        birthdate: '3 Septembre 2002',
        nationality: 'France',
        profile_pic: "",
        img_src: "",
        role: "",
        reseaux: {
          twitch: 'https://www.twitch.tv/ShinSZNN',
          insta: '',
          twitter: 'https://twitter.com/shinVALORANT'
        }
      }, {
        pseudo: 'Nivera ',
        fullname: 'Nabil Benrlitom',
        age: 21,
        birthdate: '10 juin 2001',
        nationality: 'Belgique / Marroc',
        profile_pic: "",
        img_src: "",
        role: "",
        reseaux: {
          twitch: 'https://www.twitch.tv/Nivera',
          insta: 'https://www.instagram.com/nivera_val',
          twitter: 'https://twitter.com/Nivera__'
        }
      }]
    }]
  },
  {
    game: "rocket", src: rocket, teams: [{
      name: "Main", players: [{
        pseudo: 'Exotiik ',
        fullname: 'Brice Bigeard',
        age: 20,
        birthdate: '31 octobre 2002',
        nationality: 'France',
        profile_pic: "",
        img_src: "",
        role: "",
        reseaux: {
          twitch: 'https://twitch.tv/exotiikrl',
          insta: 'https://www.instagram.com/nivera_val',
          twitter: 'https://twitter.com/exotiikrl'
        }
      },{
          pseudo: 'Vatira',
          fullname: 'Axel Touret',
          age: 16,
          birthdate: '14 mai 2006',
          nationality: 'France',
          profile_pic: "",
          img_src: "",
          role: "",
          reseaux: {
            twitch: 'https://www.twitch.tv/vatira_',
            insta: 'https://www.instagram.com/vatira__',
            twitter: 'https://twitter.com/Vatira5'
          }
        },{
          pseudo: 'Itachi ',
          fullname: 'Amine Benayachi',
          age: 19,
          birthdate: '13 août 2003',
          nationality: 'Marroc',
          profile_pic: "",
          img_src: "",
          role: "",
          reseaux: {
            twitch: 'https://www.twitch.tv/itachi_rl',
            insta: 'https://www.instagram.com/itachirl_',
            twitter: 'https://twitter.com/itachi_rl'
          }
        }]
    }]
  },
  {
    game: "tft", src: tft, teams: [{
      name: "Main", players: [{
        pseudo: 'Double61',
        fullname: 'Emre Demirtas',
        age: 19,
        birthdate: '20 mars 2004',
        nationality: 'France',
        profile_pic: double61,
        img_src: double61,
        role: "",
        reseaux: {
          twitch: 'https://www.twitch.tv/kc_double61',
          insta: '',
          twitter: 'https://twitter.com/TrainerDouble'
        }
      }, {
        pseudo: 'Canbizz',
        fullname: 'Muhammed Canbaz',
        age: 19,
        birthdate: '',
        nationality: 'France - Turquie',
        profile_pic: canbizz,
        img_src: canbizz,
        role: "",
        reseaux: {
          twitch: 'https://www.twitch.tv/canbizz_',
          insta: 'https://www.instagram.com/canbizz_',
          twitter: 'https://twitter.com/Canbizz_'
        }
      }]
    }]
  },
  { game: "trackmania", src: trackmania, teams: [{ name: "Main", players: [] }] },
  { game: "smash", src: smash, teams: [{ name: "Main", players: [] }] },

]

export default games