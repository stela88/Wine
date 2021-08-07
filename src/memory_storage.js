let storage = {

  user: [
    {
      ime: "Marina",
      prezime: "Brekalo",
      username: "marina@gmail.com",
      adresa: "Koparska 11, Pula"
    },
    {
      ime: "Petra",
      prezime: "Bešlić",
      username: "petra@gmail.com",
      adresa: "Valturska 12, Pula"
    },
    {
      ime: "Nikolina",
      prezime: "Sučić",
      username: "nikolina@gmail.com",
      adresa: "Flavijevska 2, Pula"
    },
    {
      ime: "Marko",
      prezime: "Lalić",
      username: "marko@gmail.com",
      adresa: "Splitska 18, Pula"
    },
  ],

  posts: [
    {
      slika: ("@/assets/malvazija.jpg"),
      ime: "Malvazija",
      stranica: "/Malvazija"
    },
    {
      slika: ("@/assets/rose.jpg"),
      ime: "Rose",
      stranica: "/Rose",
    },
    {
      slika: ("@/assets/brut.jpg"),
      ime: "Brut",
      stranica: "/Brut",
    },
    {
      slika: "https://www.vivat-finavina.hr/wp-content/uploads/2020/05/1VN3276.jpg",
      ime: "Merlot",
      stranica: "/Merlot",
    },
    {
      slika: ("@/assets/chardonnay.jpg"),
      ime: "Chardonnay",
      stranica: "/Chardonnay",
    },
    {
      slika: ("@/assets/teran.jpg"),
      ime: "Teran",
      stranica: "/Teran",
    },
    {
      slika: ("@/assets/cabernet_sauvignon.jpg"),
      ime: "Cabernet Sauvignon",
      stranica: "/Cabernet_Sauvignon",
    },

  ],


  malvazija: [
    {
      logo: "@/assets/logo2.png",
      name: "MALVAZIJA",
      img: "@/assets/malvazija_crna.jpg",
      color: "bijelo",
      temp: "6-8 C",
      price: "40 Kn",
      about: "Vino je žive, slamnato žute boje s nježnom zelenkastom nijansom. Kompleksnih aroma; cvijeta akacije, limuna, zrele breskve i manga. Na nepcu je veoma svježe i mekano, elegantnog i trajnog okusa. Na retro okusu, prisutna blaga gorčina zelenog badema.",
      serve: "Carpaccio od brancina sa limunom, rukolom, bijelim paprom i cvijetom soli, rižoto s kozicama i tikvicama, fritaja sa šparugama i pancetom",
      meal1: "@/assets/jelo1_malvazija.jpg",
      meal2: "@/assets/jelo2_malvazija.jpg",
      meal3: "@/assets/jelo3_malvazija.jpg",
      link1: "https://cromaris.com/hr/recept/carpaccio-od-velikog-brancina/",
      link2: "https://www.coolinarika.com/recept/rizoto-s-tikvicama-i-kozicama-b9a0aafe-6446-11eb-9714-0242ac120062",
      link3: "https://www.coolinarika.com/recept/fritaja-sa-sparogama-90ee9558-6388-11eb-946d-0242ac12002d",
    },
  ],

  artikl: [
    {
      id: 1111,
      naziv: "Malvazija",
      boja: "bijelo",
      temperatura_posluzivanja: "6-8 C",
      jela: "carpaccio od brancina sa limunom, rukolom, bijelim paprom i cvijetom soli, rižoto s kozicama i tikvicama, fritaja sa šparugama i pancetom",
      opis: " vino kompleksnih aroma; cvijeta akacije, limuna, zrele breskve i manga. Na nepcu je veoma svježe i mekano, elegantnog i trajnog okusa. Na retro okusu, prisutna blaga gorčina zelenog badema",
      cijena: 40
    },
    {
      id: 1112,
      naziv: "Chardonnay",
      boja: "bijelo",
      temperatura_posluzivanja: "6-8 C",
      jela: "kapesante na žaru, tjesteninu s plodovima mora, file bijele ribe pečen u tavici s pečenim povrćem. ",
      opis: "izraženog i finog mirisa žute jabuke, irisa te egzotičnih nota dinje, limete i ličija. Na nepcu je zaobljeno i mekano, gotovo slano, vrlo ekstraktno a tendecijom slatkoće",
      cijena: 40
    },
    {
      id: 1113,
      naziv: "Rose",
      boja: "rose",
      temperatura_posluzivanja: "6-8 C",
      jela: "sirove škampe, brudet ili domaće tagliatelle s prementurskom rakovicom. ",
      opis: "vino je boje trešnje, kristalno bistro, živahnih refleksija. Nježnih aroma trešnjina cvijeta, maline i korice crvenog grejpa. Na nepcu svježe i mineralno",
      cijena: 40
    },
    {
      id: 1114,
      naziv: "Teran",
      boja: "crno",
      temperatura_posluzivanja: "16-18 C",
      jela: "istarski pršut, tuna steak ili domaće kobasice na žaru",
      opis: "vino je bistro, duboke rubin crvene boje, živahnih refleksija i prilično je gusto. Finih i izraženih mirisa crvene ruže, višnje, šljive i borovnice. Svježe, baršunasto mekano, ukusno i trajno na nepcu",
      cijena: 40
    },
  ],




  orders: [
    {
      broj_narudžbe: 8468467,
      username: "marina@gmail.com",
      datum: 7645446873487,
      cijena_ukupna: 80,
      stavke: [
        {
          kolicina: 2,
          artikl: {
            id: 1111,
            naziv: "Malvazija",
            cijena: 40
          }
        }
      ]
    },


    {
      broj_narudžbe: 8458457,
      username: "nikolina@gmail.com",
      datum: 76454448786747,
      cijena_ukupna: 120,
      stavke: [
        {
          kolicina: 3,
          artikl: {
            id: 1114,
            naziv: "Teran",
            cijena: 40
          }
        }
      ]
    },

    {
      broj_narudžbe: 16895457,
      username: "marko@gmail.com",
      datum: 76454448786747,
      cijena_ukupna: 240,
      stavke: [
        {
          kolicina: 4,
          artikl: {
            id: 1112,
            naziv: "Chardonnay",
            cijena: 40
          }
        },
        {
          kolicina: 2,
          artikl: {
            id: 1113,
            naziv: "Rose",
            cijena: 40
          }
        }
      ]
    },
  ]
}

export default storage;