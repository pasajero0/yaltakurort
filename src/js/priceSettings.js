
const roomDatePrice = {
  improved2: {
    between15_11__27_12: 1050,
    between28_12__14_01: 1150,
    between15_01__30_04: 1050,
    between01_05__31_05: 1150,
    between01_06__30_06: 1050,
    between01_07__30_09: 1210,
    between01_10__15_11: 1050,
  },
  standard2: {
    between15_11__27_12: 890,
    between28_12__14_01: 1050,
    between15_01__30_04: 890,
    between01_05__31_05: 1050,
    between01_06__30_06: 1050,
    between01_07__30_09: 1205,
    between01_10__15_11: 1050,
  },
  common2: {
    between15_11__27_12: 570,
    between28_12__14_01: 630,
    between15_01__30_04: 570,
    between01_05__31_05: 630,
    between01_06__30_06: 630,
    between01_07__30_09: 735,
    between01_10__15_11: 630,
  },
  common4: {
    between15_11__27_12: 570,
    between28_12__14_01: 630,
    between15_01__30_04: 570,
    between01_05__31_05: 630,
    between01_06__30_06: 630,
    between01_07__30_09: 735,
    between01_10__15_11: 630,
  },
  common6: {
    between15_11__27_12: 520,
    between28_12__14_01: 570,
    between15_01__30_04: 520,
    between01_05__31_05: 570,
    between01_06__30_06: 630,
    between01_07__30_09: 735,
    between01_10__15_11: 630,
  },
  common12: {
    between15_11__27_12: 490,
    between28_12__14_01: 525,
    between15_01__30_04: 490,
    between01_05__31_05: 520,
    between01_06__30_06: 575,
    between01_07__30_09: 680,
    between01_10__15_11: 525,
  },
}

const today = moment();
const year = today.format('YYYY');

const setPrice = (obj) => {
  
  const bgColor = '#d85f49';
  const txtColor = '#fff'

  Object.keys(obj).forEach(key => {

    if (today.isBetween(year + '-11-15', year + '-12-27')) {

      $(`#${key}`).text(obj[key].between15_11__27_12+' ₽');
      $(`.infographics__${key}`).text(obj[key].between15_11__27_12+' ₽');
      $('.price__td1').css({'background': bgColor , 'color' : txtColor });

    } else if (today.isBetween(year + '-12-28', year + '-01-14')) {

      $(`#${key}`).text(obj[key].between28_12__14_01+' ₽');
      $(`.infographics__${key}`).text(obj[key].between28_12__14_01+' ₽');
      $('.price__td2').css({'background': bgColor , 'color' : txtColor });

    } else if (today.isBetween(year + '-01-15', year + '-04-30')) {

      $(`#${key}`).text(obj[key].between15_01__30_04+' ₽');
      $(`.infographics__${key}`).text(obj[key].between15_01__30_04+' ₽');
      $('.price__td3').css({'background': bgColor , 'color' : txtColor });

    } else if (today.isBetween(year + '-05-01', year + '-05-31')) {

      $(`#${key}`).text(obj[key].between01_05__31_05+' ₽');
      $(`.infographics__${key}`).text(obj[key].between01_05__31_05+' ₽');
      $('.price__td4').css({'background': bgColor , 'color' : txtColor });

    } else if (today.isBetween(year + '-06-01', year + '-06-30')) {

      $(`#${key}`).text(obj[key].between01_06__30_06+' ₽');
      $(`.infographics__${key}`).text(obj[key].between01_06__30_06+' ₽');
      $('.price__td5').css({'background': bgColor , 'color' : txtColor });

    } else if (today.isBetween(year + '-07-01', year + '-09-30')) {

      $(`#${key}`).text(obj[key].between01_07__30_09+' ₽');
      $(`.infographics__${key}`).text(obj[key].between01_07__30_09+' ₽');
      $('.price__td6').css({'background': bgColor , 'color' : txtColor });

    } else if (today.isBetween(year + '-10-01', year + '-11-15')) {

      $(`#${key}`).text(obj[key].between01_10__15_11+' ₽');
      $(`.infographics__${key}`).text(obj[key].between01_10__15_11+' ₽');
      $('.price__td7').css({'background': bgColor , 'color' : txtColor });

    }

  });

}

setPrice(roomDatePrice);

