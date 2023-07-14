# Baigiamasis Darbas (Artūras Tyškevičius) TYPE15

Mano baigiamasis darbas turi pilną funkcionalumą, kur galima pridėti, ištrinti ir redaguoti vartotojus, taip pat įgyvendinta paieška.

## Turinys

- [Instaliacija](#installation)
- [Naudojimas](#usage)
- [Projekto Struktūra](#project-structure)
- [Funkcionalumas](#features)

## Instaliacija

Sekite šiuos žingsnius, kad paleisti aplikaciją ant jūsų vietinio įrenginio:

**Server**

1. Naviguojam į server direktorija `cd server`.
2. Instaliuojam dependencies su komanda `npm install`.
3. Paleidziam serverį development aplinkoje su komanda `npm run dev`.

**Client**

1. Naviguojam į server direktorija `cd client`.
2. Instaliuojam dependencies su komanda `npm install`.
3. Paleidžiam client'ą develipment aplinkoje su komanda `npm start`.

## Naudojimas

Kad naudotis šia aplikacija, jums tereikia ją pasileisti ir jau galėsite atlikinėti tam tikras operacijas, kaip vartotojų pridėjimas, jų trinimas, redagavimas ir filtravimas tarp jų.

## Projekto Struktūra

**Client**

Clientas sukurtas naudojant React su Vite, struktūra galite matyti žemiau:

- `src/` - Visą React kodą galite rasti čia.
  - `components/` - Čia rasite visus mano sukurtus komponentus.
  - `hooks/` - Čia yra tanstack@react-query bibliotekos naudojamos funkcijos, skirtos atlikti CRUD operacijas
  - `styles/` - Čia rasite GlobalStyles.ts failą, kuris naudojamas globaliam stiliui ir UtilityStyles.ts failą, kur galima rasti reusable styled komponentų stilių.
  - `functions/` - Čia yra aplankas skirtas utility funkcijom, dabar ten tik viena funkcija, kuri keičia HEX spalva į RGBA ir sumažina opacity iki 0.5 (tai naudoju mygtukų hover efektui).
  - `assets/` - Čia rasite background nuotrauką, kurią naudoju aplikacijos background'ui.
  - `types/` - Čia rasite enums ir interface, kuriuos pernaudoju tam tikruose komponentuose.
  - `App.tsx` - Pagrindinis komponentas, kuris supa visus kitus komponentus.
    - `GlobalStyles` - Minėtas globalių stilių komponentas, kuris pareina iš 'styles/GlobalStyles.ts'.
    - `Header` - Header komponentas, kuriame galima rasti `SearchBar` ir `UserFormModal` komponentus, `UserFormModal` viduje sąlyginai renderinimas `Button` komponentas su tekstu 'Pridėti naują'.
    - `StyledMain` - Main stiliaus komponentas, kuris parėjo iš 'styles/UtilityStyles.ts'.
      - `StyledSection` - Section stiliaus komponentas iš 'styles/UtilityStyles.ts'.
        - `Table` - Pagrindinės lentelės komponentas.
    - `Footer` - Footer komponentas, kuriame nurodyta dabartiniai metai.

Panaudotos bibliotekos: `axios`, `tanstack@react-query`, `styled-components`.

**Server**

Serveris sukurtas naudojant Node.js su Express.js biblioteka, taip pat prijungta MongoDB duomenų bazė, struktūrą galite matyti žemiau:

- `src/` - Visą Express serverio kodą galite rasti čia.
  - `models/` - Šiame aplanke aprašyta MongoDB vartotojų Schema.
  - `config/` - Šiame aplanke rasite serverio sujungimą su duombaze, naudojant 'mongoose' biblioteką.
  - `controllers/` - Šiame aplanke rasite visas funkcijas, susijusias su endpoint'ais, aprašytais app.ts faile.
  - `app.ts` - Tai yra pradinis failas, kuriame paleidžiamas serveris, atidaromas sujungimas su duombaze ir inicijuojami endpoint'ai.

Panaudotos bibliotekos: `concurrently`, `cors`, `dotenv`, `express`, `mongoose`. Taip pat naudojama `nodemon` development aplinkoje.

## Funkcionalumas

- Vartotojų paieška
- Vartotojų kūrimas
- Vartotojų redagavimas
- Vartotojų ištrinimas
