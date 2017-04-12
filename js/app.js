var ora = new Date();
var f1GaraAttuale;
var f1Gare = [
    {
        paese: "AUSTRALIA",
        dataGara: new Date(2017, 2, 26),
        mese: "Mar.",
        fp1: "Ven. 02:00",
        fp2: "Ven. 06:00",
        fp3: "Sab. 04:00",
        qualify: "Sab. 07:00",
        race: "Dom. 07:00"
    }, {
        paese: "CINA",
        dataGara: new Date(2017, 3, 9),
        mese: "Apr.",
        fp1: "Ven. 04:00",
        fp2: "Ven. 08:00",
        fp3: "Sab. 06:00",
        qualify: "Sab. 09:00",
        race: "Dom. 08:00"
    }, {
        paese: "BAHRAIN",
        dataGara: new Date(2017, 3, 16),
        mese: "Apr.",
        fp1: "Ven. 13:00",
        fp2: "Ven. 17:00",
        fp3: "Sab. 14:00",
        qualify: "Sab. 17:00",
        race: "Dom. 17:00"
    }, {
        paese: "RUSSIA",
        dataGara: new Date(2017, 3, 30),
        mese: "Apr.",
        fp1: "Ven. 10:00",
        fp2: "Ven. 14:00",
        fp3: "Sab. 11:00",
        qualify: "Sab. 14:00",
        race: "Dom. 14:00"
    }, {
        paese: "SPAGNA",
        dataGara: new Date(2017, 4, 14),
        mese: "Mag.",
        fp1: "Ven. 10:00",
        fp2: "Ven. 14:00",
        fp3: "Sab. 11:00",
        qualify: "Sab. 14:00",
        race: "Dom. 14:00"
    }, {
        paese: "MONACO",
        dataGara: new Date(2017, 4, 28),
        mese: "Mag.",
        fp1: "Gio. 10:00",
        fp2: "Gio. 14:00",
        fp3: "Sab. 11:00",
        qualify: "Sab. 14:00",
        race: "Dom. 14:00"
    }, {
        paese: "CANADA",
        dataGara: new Date(2017, 5, 11),
        mese: "Giu.",
        fp1: "Ven. 16:00",
        fp2: "Ven. 20:00",
        fp3: "Sab. 16:00",
        qualify: "Sab. 19:00",
        race: "Dom. 20:00"
    }, {
        paese: "AZERBAIJAN",
        dataGara: new Date(2017, 5, 25),
        mese: "Giu.",
        fp1: "Ven. 11:00",
        fp2: "Ven. 15:00",
        fp3: "Sab. 12:00",
        qualify: "Sab. 15:00",
        race: "Dom. 15:00"
    }, {
        paese: "AUSTRIA",
        dataGara: new Date(2017, 6, 9),
        mese: "Lug.",
        fp1: "Ven. 10:00",
        fp2: "Ven. 14:00",
        fp3: "Sab. 11:00",
        qualify: "Sab. 14:00",
        race: "Dom. 14:00"
    }, {
        paese: "G. BRETAGNA",
        dataGara: new Date(2017, 6, 16),
        mese: "Lug.",
        fp1: "Ven. 10:00",
        fp2: "Ven. 14:00",
        fp3: "Sab. 11:00",
        qualify: "Sab. 14:00",
        race: "Dom. 14:00"
    }, {
        paese: "UNGHERIA",
        dataGara: new Date(2017, 6, 30),
        mese: "Lug.",
        fp1: "Ven. 10:00",
        fp2: "Ven. 14:00",
        fp3: "Sab. 11:00",
        qualify: "Sab. 14:00",
        race: "Dom. 14:00"
    }, {
        paese: "BELGIO",
        dataGara: new Date(2017, 7, 27),
        mese: "Ago.",
        fp1: "Ven. 10:00",
        fp2: "Ven. 14:00",
        fp3: "Sab. 11:00",
        qualify: "Sab. 14:00",
        race: "Dom. 14:00"
    }, {
        paese: "ITALIA",
        dataGara: new Date(2017, 8, 3),
        mese: "Set.",
        fp1: "Ven. 10:00",
        fp2: "Ven. 14:00",
        fp3: "Sab. 11:00",
        qualify: "Sab. 14:00",
        race: "Dom. 14:00"
    }, {
        paese: "SINGAPORE",
        dataGara: new Date(2017, 8, 17),
        mese: "Set.",
        fp1: "Ven. 12:00",
        fp2: "Ven. 15:30",
        fp3: "Sab. 12:00",
        qualify: "Sab. 15:00",
        race: "Dom. 14:00"
    }, {
        paese: "MALESIA",
        dataGara: new Date(2017, 9, 1),
        mese: "Ott.",
        fp1: "Ven. 05:00",
        fp2: "Ven. 09:00",
        fp3: "Sab. 08:00",
        qualify: "Sab. 11:00",
        race: "Dom. 09:00"
    }, {
        paese: "GIAPPONE",
        dataGara: new Date(2017, 9, 8),
        mese: "Ott.",
        fp1: "Ven. 03:00",
        fp2: "Ven. 07:00",
        fp3: "Sab. 05:00",
        qualify: "Sab. 08:00",
        race: "Dom. 07:00"
    }, {
        paese: "STATI UNITI",
        dataGara: new Date(2017, 9, 22),
        mese: "Ott.",
        fp1: "Ven. 17:00",
        fp2: "Ven. 21:00",
        fp3: "Sab. 18:00",
        qualify: "Sab. 21:00",
        race: "Dom. 21:00"
    }, {
        paese: "MESSICO",
        dataGara: new Date(2017, 9, 29),
        mese: "Ott.",
        fp1: "Ven. 17:00",
        fp2: "Ven. 21:00",
        fp3: "Sab. 17:00",
        qualify: "Sab. 20:00",
        race: "Dom. 20:00"
    }, {
        paese: "BRASILE",
        dataGara: new Date(2017, 10, 12),
        mese: "Nov.",
        fp1: "Ven. 15:00",
        fp2: "Ven. 19:00",
        fp3: "Sab. 16:00",
        qualify: "Sab. 19:00",
        race: "Dom. 19:00"
    }, {
        paese: "ABU DHABI",
        dataGara: new Date(2017, 10, 26),
        mese: "Nov.",
        fp1: "Ven. 10:00",
        fp2: "Ven. 14:00",
        fp3: "Sab. 11:00",
        qualify: "Sab. 14:00",
        race: "Dom. 14:00"
    }
];
for (i = 0; i < f1Gare.length; i++) {
    f1Gare[i].dataInizio = new Date(f1Gare[i].dataGara - 2*24*60*60*1000);
};
for (i = f1Gare.length - 1; i > -1; i--) {
    if (f1Gare[i].dataGara - ora > -3*24*60*60*1000) {
        f1GaraAttuale = i;
    };
};
var f1Display = function() {
    if (f1Gare[f1GaraAttuale].dataInizio.getDate() < 10 && f1Gare[f1GaraAttuale].dataGara.getDate() < 10) {
        $('#f1_data_gara').text(f1Gare[f1GaraAttuale].paese + "    0" + f1Gare[f1GaraAttuale].dataInizio.getDate() + " - 0" + f1Gare[f1GaraAttuale].dataGara.getDate() + " " + f1Gare[f1GaraAttuale].mese);
    } else if (f1Gare[f1GaraAttuale].dataInizio.getDate() < 10 && f1Gare[f1GaraAttuale].dataGara.getDate() > 9) {
        $('#f1_data_gara').text(f1Gare[f1GaraAttuale].paese + "    0" + f1Gare[f1GaraAttuale].dataInizio.getDate() + " - " + f1Gare[f1GaraAttuale].dataGara.getDate() + " " + f1Gare[f1GaraAttuale].mese);
    } else if (f1Gare[f1GaraAttuale].dataInizio.getDate() > 9 && f1Gare[f1GaraAttuale].dataGara.getDate() < 10) {
        $('#f1_data_gara').text(f1Gare[f1GaraAttuale].paese + "    " + f1Gare[f1GaraAttuale].dataInizio.getDate() + " - 0" + f1Gare[f1GaraAttuale].dataGara.getDate() + " " + f1Gare[f1GaraAttuale].mese);
    } else {
        $('#f1_data_gara').text(f1Gare[f1GaraAttuale].paese + "    " + f1Gare[f1GaraAttuale].dataInizio.getDate() + " - " + f1Gare[f1GaraAttuale].dataGara.getDate() + " " + f1Gare[f1GaraAttuale].mese);
    };
    $('#f1_fp1').text(f1Gare[f1GaraAttuale].fp1);
    $('#f1_fp2').text(f1Gare[f1GaraAttuale].fp2);
    $('#f1_fp3').text(f1Gare[f1GaraAttuale].fp3);
    $('#f1_qualify').text(f1Gare[f1GaraAttuale].qualify);
    $('#f1_race').text(f1Gare[f1GaraAttuale].race);
};
$(document).ready(f1Display);