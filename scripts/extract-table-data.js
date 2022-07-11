// ==UserScript==
// @name         Extract Tables
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_availability
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bulbagarden.net
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function print(...args) {
    console.log('scripts', ...args);
  }

  const tables = Array.from($('table.roundy'));
  print(tables);

  function trimGenerationName(text) {
    return text.split(' ')[1].trim();
  }

  function extractContent(table) {
    const rows = $(table).find('tr');
    let gensHead = [];
    const pokemon = Array.from(
      rows.slice(1).map((idx, row) => {
        if (idx === 0) {
          let acc = 0;
          gensHead = Array.from(
            $(row)
              .find('th')
              .map((_, th) => {
                if (th.innerText.trim() === 'GCN') {
                  acc += th.colSpan;
                  return null;
                } else {
                  return {
                    span: th.colSpan,
                    name: trimGenerationName(th.innerText),
                    start: acc,
                    end: (acc += th.colSpan)
                  };
                }
              })
          ).filter((s) => !!s);
          return null;
        } else {
          const r = $(row);
          const tds = r.children('td');
          const info = {
            no: $(tds[0]).text().trim(),
            name: $(tds[2]).text().trim(),
            data: []
          };
          const ths = r.children('th');
          gensHead.forEach((gen) => {
            info.data.push(
              Array.from(ths.slice(gen.start, gen.end).map((_, th) => $(th).text().trim()))
            );
          });
          return info;
        }
      })
    ).filter((s) => !!s);
    return {
      head: gensHead,
      body: pokemon
    };
  }

  window.extra = function (idx) {
    print(extractContent(_.get(tables, idx)));
  };
})();
