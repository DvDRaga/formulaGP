var ora = new Date();
var f1GaraAttuale;
var motogpGaraAttuale;
for (i = f1Gare.length - 1; i > -1; i--) {
    if (f1Gare[i].dataGara - ora > -1.5*24*60*60*1000) {
        f1GaraAttuale = i;
    };
};
for (i = motogpGare.length - 1; i > -1; i--) {
    if (motogpGare[i].dataGara - ora > -1.5*24*60*60*1000) {
        motogpGaraAttuale = i;
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
    $('#f1_diretta').text(f1Gare[f1GaraAttuale].diretta);
};
var motogpDisplay = function() {
    if (motogpGare[motogpGaraAttuale].dataInizio.getDate() < 10 && motogpGare[motogpGaraAttuale].dataGara.getDate() < 10) {
        $('#motogp_data_gara').text(motogpGare[motogpGaraAttuale].paese + "    0" + motogpGare[motogpGaraAttuale].dataInizio.getDate() + " - 0" + motogpGare[motogpGaraAttuale].dataGara.getDate() + " " + motogpGare[motogpGaraAttuale].mese);
    } else if (motogpGare[motogpGaraAttuale].dataInizio.getDate() < 10 && motogpGare[motogpGaraAttuale].dataGara.getDate() > 9) {
        $('#motogp_data_gara').text(motogpGare[motogpGaraAttuale].paese + "    0" + motogpGare[motogpGaraAttuale].dataInizio.getDate() + " - " + motogpGare[motogpGaraAttuale].dataGara.getDate() + " " + motogpGare[motogpGaraAttuale].mese);
    } else if (motogpGare[motogpGaraAttuale].dataInizio.getDate() > 9 && motogpGare[motogpGaraAttuale].dataGara.getDate() < 10) {
        $('#motogp_data_gara').text(motogpGare[motogpGaraAttuale].paese + "    " + motogpGare[motogpGaraAttuale].dataInizio.getDate() + " - 0" + motogpGare[motogpGaraAttuale].dataGara.getDate() + " " + motogpGare[motogpGaraAttuale].mese);
    } else {
        $('#motogp_data_gara').text(motogpGare[motogpGaraAttuale].paese + "    " + motogpGare[motogpGaraAttuale].dataInizio.getDate() + " - " + motogpGare[motogpGaraAttuale].dataGara.getDate() + " " + motogpGare[motogpGaraAttuale].mese);
    };
    $('#motogp_fp1').text(motogpGare[motogpGaraAttuale].fp1);
    $('#motogp_fp2').text(motogpGare[motogpGaraAttuale].fp2);
    $('#motogp_fp3').text(motogpGare[motogpGaraAttuale].fp3);
    $('#motogp_qualify').text(motogpGare[motogpGaraAttuale].qualify);
    $('#motogp_race').text(motogpGare[motogpGaraAttuale].race);
    $('#motogp_diretta').text(motogpGare[motogpGaraAttuale].diretta);
};
$(document).ready(f1Display);
$(document).ready(motogpDisplay);