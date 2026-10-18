# Open 3D Terrain Map

Pełnoekranowa mapa 3D w jednym pliku `index.html` (MapLibre GL JS + dane wysokości [Mapterhorn](https://mapterhorn.com)). Interfejs po angielsku, po polsku dla przeglądarek z polskim językiem; przełącznik EN/PL w panelu.

- **Mapa bazowa:** OpenStreetMap, zdjęcia lotnicze (Esri World Imagery), OpenTopoMap, brak.
- **Nakładki (dowolnie wiele):** drogi, koleje (4 style OpenRailwayMap: infrastruktura, prędkości, sygnalizacja, elektryfikacja), szlaki piesze, rowerowe, MTB, trasy narciarskie, znaki nawigacyjne (OpenSeaMap), nazwy miejscowości i granice.
- **Teren i 3D:** cieniowanie, poziomice (suwak gęstości 1–5; najgęstszy przy zoomie 16+ = co 1 m), budynki 3D z OpenFreeMap (od zoomu 14; wysokości z OSM, budynki bez podanej wysokości są niskie).
- **Domyślnie:** OpenStreetMap, bez nakładek, samo cieniowanie.
- **Wyszukiwarka (OpenStreetMap Nominatim):** miejscowości, regiony, kraje, szczyty, jeziora, ulice, obiekty; także współrzędne `47.27, 11.39`. Szuka po Enterze (zasady Nominatim: max 1 zapytanie/s, bez podpowiedzi w trakcie pisania).
- **Nawigacja:** przesuwanie, zoom, obrót i pochylenie (prawy przycisk myszy / Ctrl + przeciąganie / gesty), przełącznik 3D.
- **Link do widoku:** kamera i warstwy w adresie, np. `#map=13/47.27/11.39/0/60&base=osm&overlays=rail,hiking&terrain=hillshade,contours&density=3&rail=standard&lang=pl` (`lang` tylko po ręcznym przełączeniu języka).

## Uruchomienie lokalne

Strona potrzebuje internetu (biblioteki z unpkg, ikony z Google Fonts, kafelki z serwerów map). Najlepiej serwować ją przez HTTP:

```bash
npx --yes http-server -p 8765 -c-1
```

i otworzyć http://localhost:8765. Otwarcie pliku bezpośrednio (`file://`) nie było testowane; serwery kafelków OSM mogą odrzucać żądania bez nagłówka Referer.

## Publikacja

Wystarczy dowolny hosting plików statycznych, np. GitHub Pages (Settings → Pages → branch `main`, folder `/`).

## Źródła danych i licencje

Atrybucje wyświetlają się w prawym dolnym rogu mapy (tylko dla włączonych warstw). Przy publicznym użyciu sprawdź warunki dostawców:

- Mapterhorn (wysokości): https://mapterhorn.com/attribution
- OpenStreetMap kafelki: https://operations.osmfoundation.org/policies/tiles/
- Nominatim (wyszukiwarka): https://operations.osmfoundation.org/policies/nominatim/
- OpenTopoMap (CC-BY-SA): https://opentopomap.org/about
- OpenRailwayMap (CC-BY-SA): https://www.openrailwaymap.org/
- Waymarked Trails (CC-BY-SA): https://waymarkedtrails.org
- OpenSnowMap (CC-BY-SA): https://www.opensnowmap.org
- OpenSeaMap: https://www.openseamap.org
- OpenFreeMap / OpenMapTiles (budynki 3D): https://openfreemap.org
- Esri World Imagery i warstwy Reference: warunki Esri; nie do zastosowań komercyjnych bez licencji.

## Znane ograniczenia

- Mapterhorn ma dane do zoomu 16 (~1 m/piksel) tylko w części świata (m.in. Polska, Alpy); gdzie indziej do zoomu 12. Tam poziomice znikają powyżej ok. zoomu 14, a w konsoli widać błędy 404 kafelków.
- Zmiana języka przeładowuje stronę (stan zostaje w adresie).
- Tooltipy przycisków pokazują się po najechaniu myszą lub fokusie klawiatury; na ekranach dotykowych ich nie ma.

## Post-MVP

- Suwak przezroczystości dla nakładek.
