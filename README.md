# Open 3D Terrain Map

Pełnoekranowa mapa 3D w jednym pliku `index.html` (MapLibre GL JS + dane wysokości [Mapterhorn](https://mapterhorn.com)).

- **Mapa bazowa:** OpenStreetMap, zdjęcia lotnicze (Esri World Imagery), OpenTopoMap, OpenRailwayMap, brak.
- **Nakładka wysokościowa:** cieniowanie, poziomice, oba, brak.
- **Gęstość poziomic:** suwak 1–5; najgęstszy stopień przy zoomie 16+ daje poziomice co 1 m.
- **Nawigacja:** przesuwanie, zoom, obrót i pochylenie (prawy przycisk myszy / Ctrl + przeciąganie / gesty), przełącznik 3D.
- **Link do widoku:** pozycja kamery i wybrane warstwy są zapisywane w adresie (`#map=…&base=…&relief=…&density=…`).

## Uruchomienie lokalne

Strona potrzebuje internetu (biblioteki z unpkg, kafelki z serwerów map). Najlepiej serwować ją przez HTTP:

```bash
npx --yes http-server -p 8765 -c-1
```

i otworzyć http://localhost:8765. Otwarcie pliku bezpośrednio (`file://`) nie było testowane; serwery kafelków OSM mogą odrzucać żądania bez nagłówka Referer.

## Publikacja

Wystarczy dowolny hosting plików statycznych, np. GitHub Pages (Settings → Pages → branch `main`, folder `/`).

## Źródła danych i licencje

Atrybucje wyświetlają się w prawym dolnym rogu mapy. Przy publicznym użyciu sprawdź warunki dostawców:

- Mapterhorn (wysokości): https://mapterhorn.com/attribution
- OpenStreetMap: https://operations.osmfoundation.org/policies/tiles/
- OpenTopoMap (CC-BY-SA): https://opentopomap.org/about
- OpenRailwayMap (CC-BY-SA): https://www.openrailwaymap.org/
- Esri World Imagery: warunki Esri; nie do zastosowań komercyjnych bez licencji.

## Znane ograniczenia

- Mapterhorn ma dane do zoomu 16 (~1 m/piksel) tylko w części świata (m.in. Polska, Alpy); gdzie indziej do zoomu 12. Tam poziomice znikają powyżej ok. zoomu 14, a w konsoli widać błędy 404 kafelków.
- OpenRailwayMap to przezroczysta nakładka; jako „mapa bazowa” pokazuje tory na jednolitym tle.
