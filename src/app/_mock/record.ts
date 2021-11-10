import { CatItem } from '../_viewmodel/cat-item';

export class Record {

    public static ACCESSORI = [
        CatItem.init({
            marca: 'Parabrezza Robo-S',
            modello: '(PMMA Classic)',
            categoria: 'Accessori',
            prezzo: 97.6,
            imagesPath: ['assets/img/parabrezza-robo-s/pmma-classic.jpg']
        }),
        CatItem.init({
            marca: 'Portapacchi Robo-S',
            modello: '(PMMA Fumè)',
            categoria: 'Accessori',
            prezzo: 109.8,
            imagesPath: ['assets/img/portapacchi-robo-s/pmma-fume.jpg']
        }),
        CatItem.init({
            marca: 'Portapacchi Robo-S',
            modello: '(PMMA Trasparente)',
            categoria: 'Accessori',
            prezzo: 97.6,
            imagesPath: ['assets/img/portapacchi-robo-s/pmma-trasparente.jpg']
        }),
        CatItem.init({
            marca: 'Portapacchi Robo-S',
            modello: '(Acciaio Nero)',
            categoria: 'Accessori',
            prezzo: 85.4,
            imagesPath: ['assets/img/portapacchi-robo-s/acciaio-nero.jpg']
        }),
        CatItem.init({
            marca: 'Portapacchi Robo-S',
            modello: '(Piastra per Delivery)',
            categoria: 'Accessori',
            prezzo: 146.4,
            imagesPath: ['assets/img/portapacchi-robo-s/piastra-per-delivery.jpg',
                'assets/img/portapacchi-robo-s/piastra-per-delivery-02.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-03.jpg',
                'assets/img/portapacchi-robo-s/piastra-per-delivery-04.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-05.jpg',
                'assets/img/portapacchi-robo-s/piastra-per-delivery-06.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-07.jpg',
                'assets/img/portapacchi-robo-s/piastra-per-delivery-08.jpg', 'assets/img/portapacchi-robo-s/piastra-per-delivery-09.jpg'
            ]
        }),
        CatItem.init({
            marca: 'LS2',
            modello: 'Casco Airflow',
            categoria: 'Accessori',
            prezzo: 79.0,
            imagesPath: [
                'assets/img/casco-ls2/01.jpg', 'assets/img/casco-ls2/02.jpg', 'assets/img/casco-ls2/03.jpg', 
                'assets/img/casco-ls2/04.jpg', 'assets/img/casco-ls2/05.jpg', 'assets/img/casco-ls2/06.jpg', 
                'assets/img/casco-ls2/07.jpg', 'assets/img/casco-ls2/08.jpg', 'assets/img/casco-ls2/09.jpg', 
                'assets/img/casco-ls2/10.jpg', 'assets/img/casco-ls2/11.jpg', 'assets/img/casco-ls2/12.jpg', 
                'assets/img/casco-ls2/13.jpg', 'assets/img/casco-ls2/14.jpg', 'assets/img/casco-ls2/15.jpg', 
                'assets/img/casco-ls2/16.jpg', 'assets/img/casco-ls2/17.jpg'
            ]
        }),
        CatItem.init({
            marca: 'LS2',
            modello: 'Giacca antipioggia',
            categoria: 'Accessori',
            prezzo: 69.0,
            imagesPath: [
                'assets/img/giacca-ls2/01.jpg', 'assets/img/giacca-ls2/02.jpg', 'assets/img/giacca-ls2/03.jpg', 'assets/img/giacca-ls2/04.jpg'
            ]
        }),
        CatItem.init({
            marca: 'LS2',
            modello: 'Guanti neri (con protezioni)',
            categoria: 'Accessori',
            prezzo: 49.99,
            imagesPath: [
                'assets/img/guanti-ls2/con-protezioni/black/01.jpg'
            ]
        }),
        CatItem.init({
            marca: 'LS2',
            modello: 'Guanti viola (con protezioni)',
            categoria: 'Accessori',
            prezzo: 49.99,
            imagesPath: [
                'assets/img/guanti-ls2/con-protezioni/purple/01.jpg', 
                'assets/img/guanti-ls2/con-protezioni/purple/02.jpg', 
                'assets/img/guanti-ls2/con-protezioni/purple/03.jpg'
            ]
        }),
        CatItem.init({
            marca: 'LS2',
            modello: 'Guanti neri',
            categoria: 'Accessori',
            prezzo: 39.99,
            imagesPath: [
                'assets/img/guanti-ls2/black/01.jpg', 
                'assets/img/guanti-ls2/black/02.jpg'
            ]
        }),
        CatItem.init({
            marca: 'LS2',
            modello: 'Guanti neri e grigi',
            categoria: 'Accessori',
            prezzo: 39.99,
            imagesPath: [
                'assets/img/guanti-ls2/black-and-grey/01.png'
            ]
        })
    ];

    public static MOTO = [
        CatItem.init({
            marca: 'Sunra',
            modello: 'Miku Max',
            categoria: 'Moto',
            descrizione: 'I fari Full LED illuminano il percorso garantendo un ampio raggio di visibilità ed una proiezione che raggiunge i 12 metri. <br> Il quadro strumenti Full Digital ha un design minimale e compatto, inclusivo di tutti gli indicatori necessari per il conducente: velocità massima, livello di carica della batteria, connessione Bluetooth e tanto altro. <br> Il motore 800W e le sospensioni Bosch®️ garantiscono prestazioni ottimizzate a potenza costante e comfort durante il tragitto. <br> Il vano sottosella può contenere tutto ciò di cui necessiti, oltre ad una comoda porta USB per ricaricare il tuo smartphone durante la guida, in un vano protetto da urti e sbalzi.',
            caratteristiche: [
                { property: 'Motore', value: '800W BOSCH Technology Field Oriented Control' },
                { property: 'Autonomia', value: '60 km' },
                { property: 'Velocità', value: '45 km/h' },
                { property: 'Carico Massimo', value: '1 persona (70kg/persona)' },
                { property: 'Ricarica', value: '4 ore (0-100%)' },
                { property: 'Batteria', value: '60V 20AH a litio, estraibile' }
            ],
            potenza: 800,
            prezzo: 2499,
            imagesPath: ['assets/img/miku-max/01.png', 'assets/img/miku-max/02.png', 'assets/img/miku-max/03.png',
                'assets/img/miku-max/04.png', 'assets/img/miku-max/05.png', 'assets/img/miku-max/06.png',
                'assets/img/miku-max/07.png', 'assets/img/miku-max/08.png']
        }),
        CatItem.init({
            marca: 'Sunra',
            modello: 'Miku Super',
            categoria: 'Moto',
            descrizione: 'Non dovrai più scegliere tra Potenza e Comfort: con il nuovo MIKU Super puoi averli entrambi. Il design unico e dalle curve sportive racchiude la potenza del motore Bosch®️ da 3000W. La sella ergonomica studiata da Sunra EV garantisce comfort per tutta la durata del tuo viaggio. <br> Il quadro strumenti permette una visualizzazione immediata di tutte le informazioni necessarie al conducente, senza ulteriori distrazioni. <br> La forma del faro anteriore con illuminazione Full LED rende immediatamente riconoscibile lo scooter e si fa notare sin dal primo approccio visivo. <br> Lo scooter è dotato di doppia batteria estraibile e portatile, facilmente rimovibile. Il sistema di gestione delle batterie assicura tolleranza degli errori e migliori performance. <br> Modalità di guida adattabili al tuo stile e al tipo di percorso. Il cruise control ti permette di regolare la velocità di guida facilitando la percorrenza sui lunghi tratti.',
            caratteristiche: [
                { property: 'Motore', value: '3000W Sunra' },
                { property: 'Autonomia', value: '135 km' },
                { property: 'Velocità', value: '80 km/h' },
                { property: 'Carico Massimo', value: '2 persone (70kg/persona)' },
                { property: 'Ricarica', value: '4 ore (0-100%)' },
                { property: 'Batteria', value: '2 * 72V 20AH a litio, estraibili' }
            ],
            potenza: 200,
            prezzo: null,
            imagesPath: ['assets/img/miku-super/01.png', 'assets/img/miku-super/02.png', 'assets/img/miku-super/03.png',
                'assets/img/miku-super/04.png', 'assets/img/miku-super/05.png', 'assets/img/miku-super/06.png',
                'assets/img/miku-super/07.png', 'assets/img/miku-super/08.png', 'assets/img/miku-super/09.png',
                'assets/img/miku-super/10.png', 'assets/img/miku-super/11.png', 'assets/img/miku-super/12.png'],
            noPriceLabel: 'IN ARRIVO'
        })
    ];

    public static MONOPATTINI = [
        CatItem.init({
            marca: 'Sunra',
            modello: 'X7',
            categoria: 'Monopattini',
            potenza: 350,
            prezzo: 399,
            imagesPath: ['assets/img/x7/01.png', 'assets/img/x7/02.png', 'assets/img/x7/03.png', 'assets/img/x7/04.png',
                'assets/img/x7/05.png', 'assets/img/x7/06.png', 'assets/img/x7/07.png', 'assets/img/x7/08.png']
        }),
        CatItem.init({
            marca: 'Sunra',
            modello: 'X8',
            categoria: 'Monopattini',
            potenza: 350,
            prezzo: 499,
            imagesPath: ['assets/img/x8/01.png', 'assets/img/x8/02.png', 'assets/img/x8/03.png']
        })
    ];

    public static SCOOTER = [
        CatItem.init({
            marca: 'Sunra',
            modello: 'Robo-S',
            categoria: 'Scooter',
            descrizione: 'Robo-S è uno scooter elettrico 125  (categoria L3) innovativo, potente e connesso adatto all’uso quotidiano cittadino.  È costruito per offrire prestazioni elevate in termini di autonomia e di velocità. <br> Lo scooter a primo impatto si presenta con un grande look sportivo grazie al suo gruppo ottico full-led, per poi mostrare il suo cuore digitale con il quadro comandi full-digital, il Touch ID e l’app per il controllo e la diagnostica da remoto. <br> A differenza degli altri scooter elettrici il Robo-s raggiunge una velocità di 90km/h, e dispone di un vano sottosella spazioso che può contenere uno casco jet di grosse dimensioni.',
            caratteristiche: [
                { property: 'Lunghezza', value: '1.750 mm' },
                { property: 'Larghezza', value: '770 mm' },
                { property: 'Altezza sella da terra MIN', value: '770 mm' },
                { property: 'Interasse', value: '1.305 mm' },
                { property: 'Peso a secco', value: '100 Kg' },
                { property: 'Tipo motore', value: 'Elettrico' },
                { property: 'Potenza', value: '3 kW (4,1 CV)' },
                { property: 'Emissioni', value: 'Zero Emissioni' },
                { property: 'Tipologia cambio', value: 'Diretta' },
                { property: 'Trasmissione finale', value: 'Ingranaggi' },
                { property: 'Velocità massima', value: '90 km/h' },
                { property: 'Telaio', value: 'Monotrave - Acciaio' },
                { property: 'Sospensione anteriore', value: 'Forcella telescopica' },
                { property: 'Sospensione posteriore', value: 'Forcellone' },
                { property: 'Tipo freno anteriore', value: 'Disco' },
                { property: 'Misura freno anteriore', value: '220 mm' },
                { property: 'Tipo freno posteriore', value: 'Disco' },
                { property: 'Misura freno posteriore', value: '180 mm' },
                { property: 'Misura cerchio anteriore', value: '12 pollici' },
                { property: 'Pneumatico anteriore', value: '110/70 R12 53J-R12"' },
                { property: 'Misura cerchio posteriore', value: '12 pollici' },
                { property: 'Pneumatico posteriore', value: '110/70 R12 53J-R12"' }
            ],
            potenza: 3000,
            prezzo: 3999,
            imagesPath: ['assets/img/robo-s/01.png', 'assets/img/robo-s/02.png', 'assets/img/robo-s/03.png', 'assets/img/robo-s/04.png',
                'assets/img/robo-s/05.png', 'assets/img/robo-s/06.png', 'assets/img/robo-s/07.png', 'assets/img/robo-s/08.png']
        })
    ];

    public static AUTO = [];
    public static VEICOLI_DA_LAVORO = [
        CatItem.init({
            marca: 'Regis',
            modello: 'Epic0 - Pickup Cassonato',
            categoria: 'Veicoli da lavoro',
            descrizione: 'Il veicolo è stato concepito valutando le esigenze del mercato dell’elettrico e coniugandole ad una progettazione funzionale che rispondesse agli aspetti da noi ritenuti prioritari',
            caratteristiche: [
                { property: 'Dimensioni esterne (Lu X La X H (mm))', value: '3.700 X 1.500 X 1.640' },
                { property: 'Piano di carico (Lu X La (mm))', value: '1.520 X 1.450' },
                { property: 'Portata', value: '700 Kg' },
                { property: 'Autonomia', value: '130 - 160 KM' },
                { property: 'Tempo di ricarica standard (Carica batteria 3,3 kW)', value: '4,5 H' },
                { property: 'Tempo di ricarica fast charge (Carica batteria 6,6 kW)', value: '2,5 H' },
                { property: 'Dimensioni cassone (Lu X La X H sponde (mm))', value: '1.570 X 1.500 X 350-400' },
                { property: 'Altezza  piano di carico', value: '700 mm' }
            ],
            potenza: null,
            prezzo: null,
            imagesPath: [
                'assets/img/epico-finito-male/pickup-cassonato/01.jpg', 
                'assets/img/epico-finito-male/pickup-cassonato/02.jpg', 
                'assets/img/epico-finito-male/pickup-cassonato/03.png'
            ],
            noPriceLabel: 'DISPONIBILE'
        })
    ];

    public static getAll(): CatItem[] {
        const items = [
            Record.MONOPATTINI,
            Record.MOTO,
            Record.SCOOTER,
            Record.ACCESSORI,
            Record.AUTO,
            Record.VEICOLI_DA_LAVORO
        ];
        return items.reduce((a: CatItem[], b: CatItem[]) => a.concat(b), []);
    }

}
