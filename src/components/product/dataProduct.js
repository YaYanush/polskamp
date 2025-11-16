import {
  ChickenSkin1,
  ChickenSkin2,
  ChickenSkin3,
  MDM1,
  MDM2,
  MDM3,
  Mortadella1,
  Mortadella2,
  Photo1,
  Photo2,
  Sausages2,
  Sausages3,
  SizesMDM1,
  Pallet,
  WhitePallet,
  Mortadella_packed,
  Mortadella_olives,
  Mortadella_packed_red,
  Mortadella_pepper,
  Sausages_packed,
  Chorizo,
  Desc_chorizo,
  Serdelka_packed,
  Salami_in_package,
  Salami,
  Salchichas_packed,
  Salchichas,
  Spread,
  Szynkovka,
  Szynkovka_pack,
  Chicken_ham,
  Chicken_ham1,
  Picadillo,
  Picadillo_packed,
  Wings_box,
  Chicken_legs,
  Chicken_box
} from "../../img/index";

const dataProduct = [
  {
    id: 1,
    idCategory: 1,
    imgCategory: [MDM1,SizesMDM1,Pallet],
    nameCategoryPL: "Kurczak MSM 1mm",
    nameCategoryEN: "Chicken MSM 1mm",
    nameCategoryES: "Pollo MSM 1mm",
    pacing1: Photo1,
    pacing2: Photo2,
    textValuePL: "Tłuszcz: 17% - 19% \n Białko: 16% ± 2% \n Wilgotność: 65 - 69% \n Wapń: ≤ 800",
    textValueEN: "Fat: 17% - 19% \n Protein: 16% ± 2% \n Moisture: 65 - 69% \n Calcium: ≤ 800",
    textValueES: "Grasa: 17% - 19% \n Proteína: 16% ± 2% \n Humedad: 65 - 69% \n Calcio: ≤ 800",

    textPackagePL: "Formowany mechanicznie Ok. 62x39x5 cm Ok. 10 kg Żółta folia \n W kartonach - 2 bloki w jednym kartonie, waga całkowita kartonu od 18 do 23 kg \n 5 bloków na warstwę (ilość warstw zależna od klienta)",
    textPackageEN: "Mechanically formed Approx. 62x39x5 cm Approx. 10 kg Yellow foil \n If in Cartons - 2 blocks in 1 carton, total weight of carton between 18 and 23 kg \n 5 blocks per layer (amount of layers is client specific)",
    textPackageES: "Formado mecánicamente Aprox. 62x39x5 cm Aprox. 10 kg Folio amarillo \n En cajas - 2 bloques por caja, peso total de la caja entre 18 y 23 kg \n 5 bloques por capa (número de capas según cliente)",

    textPackagingPL: "Paleta blokowa, jednorazowa, owinięta przezroczystą folią termokurczliwą",
    textPackagingEN: "Block pallet, single use, wrapped with transparent shrink foil",
    textPackagingES: "Palé de bloques, de un solo uso, envuelto con film retráctil transparente"
  },
  {
    id: 2,
    idCategory: 1,
    imgCategory: [MDM2,SizesMDM1,Pallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Kurczak MSM 2mm",
    nameCategoryEN: "Chicken MSM 2mm",
    nameCategoryES: "Pollo MSM 2mm",

    textValuePL: "Tłuszcz: 16% - 18% \n Białko: 16% ± 2% \n Wilgotność: 64 - 68% \n Wapń: ≤800",
    textValueEN: "Fat: 16% - 18% \n Protein: 16% ± 2% \n Moisture: 64 - 68% \n Calcium: ≤800",
    textValueES: "Grasa: 16% - 18% \n Proteína: 16% ± 2% \n Humedad: 64 - 68% \n Calcio: ≤800",

    textPackagePL: "Formowany mechanicznie Ok. 62x39x5 cm Ok. 10 kg Żółta folia \n W kartonach – 2 bloki w jednym kartonie, waga całkowita kartonu od 18 do 23 kg \n 5 bloków na warstwę (ilość warstw zależna od klienta)",
    textPackageEN: "Mechanically formed Approx. 62x39x5 cm Approx. 10 kg Yellow foil \n If in Cartons – 2 blocks in 1 carton, total weight of carton between 18 and 23 kg \n 5 blocks per layer (amount of layers is client specific)",
    textPackageES: "Formado mecánicamente Aprox. 62x39x5 cm Aprox. 10 kg Folio amarillo \n En cajas – 2 bloques por caja, peso total de la caja entre 18 y 23 kg \n 5 bloques por capa (número de capas según cliente)",

    textPackagingPL: "Paleta blokowa, jednorazowa, owinięta przezroczystą folią termokurczliwą",
    textPackagingEN: "Block pallet, single use, wrapped with transparent shrink foil",
    textPackagingES: "Palé de bloques, de un solo uso, envuelto con film retráctil transparente"
    
  },
  {
    id: 3,
    idCategory: 1,
    imgCategory: [MDM3,SizesMDM1,Pallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Kurczak MSM 3mm (baadeer)",
    nameCategoryEN: "Chicken MSM 3mm (baadeer)",
    nameCategoryES: "Pollo MSM 3mm (baadeer)",

    textValuePL: "Tłuszcz: 16% - 18% \n Białko: 15% ± 2% \n Wilgotność: 68 - 70% \n Wapń: ≤800",
    textValueEN: "Fat: 16% - 18% \n Protein: 15% ± 2% \n Moisture: 68 - 70% \n Calcium: ≤800",
    textValueES: "Grasa: 16% - 18% \n Proteína: 15% ± 2% \n Humedad: 68 - 70% \n Calcio: ≤800",

    textPackagePL: "Formowany mechanicznie Ok. 60x40x10 cm Ok. 16 kg Żółta folia \n W kartonach – 5 bloków na warstwę (ilość warstw zależna od klienta)",
    textPackageEN: "Mechanically formed Approx. 60x40x10 cm Approx. 16 kg Yellow foil \n If in Cartons – 5 blocks per layer (amount of layers client specific)",
    textPackageES: "Formado mecánicamente Aprox. 60x40x10 cm Aprox. 16 kg Folio amarillo \n En cajas – 5 bloques por capa (número de capas según el cliente)",

    textPackagingPL: "Paleta blokowa, jednorazowa, owinięta przezroczystą folią termokurczliwą",
    textPackagingEN: "Block pallet, one way useable, wrapped with transparent shrink foil",
    textPackagingES: "Palé de bloques, de un solo uso, envuelto con film retráctil transparente"
  },
  {
    id: 4,
    idCategory: 2,
    imgCategory: [ChickenSkin1,Chicken_box,Pallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Kurczak",
    nameCategoryEN: "Chicken",
    nameCategoryES: "Pollo",

    textValuePL: "Tłuszcz: ok. 15% - 18% \n Białko: ok. 16% \n Wilgotność: 65 - 70% \n Wapń: ≤800",
    textValueEN: "Fat: approx. 15% - 18% \n Protein: approx. 16% \n Moisture: 65 - 70% \n Calcium: ≤800",
    textValueES: "Grasa: aprox. 15% - 18% \n Proteína: aprox. 16% \n Humedad: 65 - 70% \n Calcio: ≤800",

    textPackagePL: "Formowany mechanicznie Ok. 60x40x10 cm Ok. 10-16 kg Żółta folia \n W kartonach – 5 bloków na warstwę (ilość warstw zależna od klienta)",
    textPackageEN: "Mechanically formed Approx. 60x40x10 cm Approx. 10–16 kg Yellow foil \n If in Cartons – 5 blocks per layer (amount of layers client specific)",
    textPackageES: "Formado mecánicamente Aprox. 60x40x10 cm Aprox. 10–16 kg Folio amarillo \n En cajas – 5 bloques por capa (número de capas según el cliente)",

    textPackagingPL: "Paleta blokowa, jednorazowa, owinięta przezroczystą folią termokurczliwą",
    textPackagingEN: "Block pallet, one way useable, wrapped with transparent shrink foil",
    textPackagingES: "Palé de bloques, de un solo uso, envuelto con film retráctil transparente"
    
  },
  {
    id: 5,
    idCategory: 2,
    imgCategory: [ChickenSkin2,Chicken_legs,Pallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Nogi z kurczaka",
    nameCategoryEN: "Chicken Legs",
    nameCategoryES: "Perniles de pollo",

    textValuePL: "Tłuszcz: ok. 12% - 15% \n Białko: ok. 17% \n Wilgotność: 65 - 68% \n Wapń: ≤300",
    textValueEN: "Fat: approx. 12% - 15% \n Protein: approx. 17% \n Moisture: 65 - 68% \n Calcium: ≤300",
    textValueES: "Grasa: aprox. 12% - 15% \n Proteína: aprox. 17% \n Humedad: 65 - 68% \n Calcio: ≤300",

    textPackagePL: "Pakowane luzem lub w woreczkach próżniowych \n Masa jednostkowa: 10–15 kg \n Rozmiar bloku: ok. 60x40x10 cm",
    textPackageEN: "Packed in bulk or vacuum-sealed bags \n Unit weight: 10–15 kg \n Block size: approx. 60x40x10 cm",
    textPackageES: "Empacado a granel o en bolsas al vacío \n Peso por unidad: 10–15 kg \n Tamaño del bloque: aprox. 60x40x10 cm",

    textPackagingPL: "Paleta jednorazowa, owinięta przezroczystą folią stretch",
    textPackagingEN: "One-way pallet, wrapped with transparent stretch film",
    textPackagingES: "Palé de un solo uso, envuelto con film transparente"
  },
  {
    id: 6,
    idCategory: 2,
    imgCategory: [ChickenSkin3,Wings_box,Pallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Skrzydełka z kurczaka",
  nameCategoryEN: "Chicken Wings",
  nameCategoryES: "Alitas de pollo",

  textValuePL: "Tłuszcz: ok. 14% - 18% \n Białko: ok. 16% \n Wilgotność: 65 - 69% \n Wapń: ≤300",
  textValueEN: "Fat: approx. 14% - 18% \n Protein: approx. 16% \n Moisture: 65 - 69% \n Calcium: ≤300",
  textValueES: "Grasa: aprox. 14% - 18% \n Proteína: aprox. 16% \n Humedad: 65 - 69% \n Calcio: ≤300",

  textPackagePL: "Pakowane luzem lub w workach foliowych \n Masa netto: ok. 10–15 kg \n Wymiary bloku: ok. 60x40x10 cm",
  textPackageEN: "Packed in bulk or plastic bags \n Net weight: approx. 10–15 kg \n Block dimensions: approx. 60x40x10 cm",
  textPackageES: "Empacado a granel o en bolsas plásticas \n Peso neto: aprox. 10–15 kg \n Tamaño del bloque: aprox. 60x40x10 cm",

  textPackagingPL: "Paleta jednorazowa, owinięta folią stretch",
  textPackagingEN: "Single-use pallet, wrapped with stretch film",
  textPackagingES: "Palé de un solo uso, envuelto con film estirable"
  },
  {
    id: 7,
    idCategory: 3,
    imgCategory: [Mortadella1,Mortadella_packed,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Mortadela Klasyczna",
    nameCategoryEN: "Mortadella Classic",
    nameCategoryES: "Mortadela Clásica",

    textValuePL: "Wartość energetyczna: 760 kJ / 183 kcal \n Tłuszcz: 14,0 g, w tym kwasy tłuszczowe nasycone: 5,0 g \n Węglowodany: 2,1 g, w tym cukry: 0,5 g \n Białko: 11 g \n Sól: 2,2 g",
    textValueEN: "Energy value: 760 kJ / 183 kcal \n Fat: 14.0 g, including saturated fatty acids: 5.0 g \n Carbohydrates: 2.1 g, including sugars: 0.5 g \n Protein: 11 g \n Salt: 2.2 g",
    textValueES: "Valor energético: 760 kJ / 183 kcal \n Grasa: 14.0 g, de las cuales grasas saturadas: 5.0 g \n Carbohidratos: 2.1 g, de los cuales azúcares: 0.5 g \n Proteínas: 11 g \n Sal: 2.2 g",

    textPackagePL: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",
    textPackageEN: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",
    textPackageES: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",

    textPackagingPL: "Karton 410x310x180 mm, w kartonie 22 szt. x 0,5 kg = 11 kg; 70 kartonów na palecie; masa netto produktu na palecie: 770 kg",
    textPackagingEN: "Carton 410x310x180 mm, in a carton 22 pcs x 0.5 kg = 11 kg; 70 cartons on a pallet; net weight of the product on the pallet: 770 kg",
    textPackagingES: "Caja de cartón 410x310x180 mm, en una caja 22 uds x 0.5 kg = 11 kg; 70 cajas por palé; peso neto del producto en el palé: 770 kg"
  },
  {
    id: 8,
    idCategory: 3,
    imgCategory: [Mortadella2,Mortadella_packed,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Mortadela z czosnkiem",
    nameCategoryEN: "Mortadella with garlic",
    nameCategoryES: "Mortadela al ajo",

    textValuePL: "Wartość energetyczna: 682 kJ / 164 kcal \n Tłuszcz: 12,6 g, w tym kwasy tłuszczowe nasycone: 4,4 g \n Węglowodany: 1,9 g, w tym cukry: 0,4 g \n Białko: 10,4 g \n Sól: 2,2 g",
    textValueEN: "Energy value: 682 kJ / 164 kcal \n Fat: 12.6 g, including saturated fatty acids: 4.4 g \n Carbohydrates: 1.9 g, including sugars: 0.4 g \n Protein: 10.4 g \n Salt: 2.2 g",
    textValueES: "Valor energético: 682 kJ / 164 kcal \n Grasa: 12.6 g, de las cuales grasas saturadas: 4.4 g \n Carbohidratos: 1.9 g, de los cuales azúcares: 0.4 g \n Proteínas: 10.4 g \n Sal: 2.2 g",

    textPackagePL: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",
    textPackageEN: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",
    textPackageES: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",

    textPackagingPL: "Karton, paleta",
    textPackagingEN: "Cardboard, pallet",
    textPackagingES: "Caja de cartón, palé"
    
  },
  {
    id: 9,
    idCategory: 3,
    imgCategory: [Mortadella_olives,Mortadella_packed_red,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Mortadela z Oliwkami",
    nameCategoryEN: "Mortadella with Olives",
    nameCategoryES: "Mortadela con Aceitunas",

    textValuePL: "Wartość energetyczna: 755 kJ / 181 kcal \n Tłuszcz: 14 g, w tym kwasy tłuszczowe nasycone: 4,0 g \n Węglowodany: 2,7 g, w tym cukry: 0,5 g \n Białko: 13,0 g \n Sól: 1,9 g",
    textValueEN: "Energy value: 755 kJ / 181 kcal \n Fat: 14 g, including saturated fatty acids: 4.0 g \n Carbohydrates: 2.7 g, including sugars: 0.5 g \n Protein: 13.0 g \n Salt: 1.9 g",
    textValueES: "Valor energético: 755 kJ / 181 kcal \n Grasa: 14 g, de las cuales grasas saturadas: 4.0 g \n Carbohidratos: 2.7 g, de los cuales azúcares: 0.5 g \n Proteínas: 13.0 g \n Sal: 1.9 g",

    textPackagePL: "200g, 250g, 300g, 500g, 700g, 1kg, 1,5kg, 2kg, 2,5kg, 3kg.",
    textPackageEN: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",
    textPackageES: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",

    textPackagingPL: "Karton, paleta",
    textPackagingEN: "Cartons, pallet",
    textPackagingES: "Cajas, palé"
  },
  {
    id: 10,
    idCategory: 3,
    imgCategory: [Mortadella_pepper,Mortadella_packed_red,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Mortadela z papryką słodką",
    nameCategoryEN: "Mortadella with sweet pepper",
    nameCategoryES: "Mortadela con pimiento dulce",

    textValuePL: "Wartość energetyczna: 755 kJ / 181 kcal \n Tłuszcz: 14 g, w tym kwasy tłuszczowe nasycone: 4,0 g \n Węglowodany: 2,7 g, w tym cukry: 0,5 g \n Białko: 13,0 g \n Sól: 1,9 g",
    textValueEN: "Energy value: 755 kJ / 181 kcal \n Fat: 14 g, including saturated fatty acids: 4.0 g \n Carbohydrates: 2.7 g, including sugars: 0.5 g \n Protein: 13.0 g \n Salt: 1.9 g",
    textValueES: "Valor energético: 755 kJ / 181 kcal \n Grasa: 14 g, de las cuales grasas saturadas: 4.0 g \n Carbohidratos: 2.7 g, de los cuales azúcares: 0.5 g \n Proteínas: 13.0 g \n Sal: 1.9 g",

    textPackagePL: "200g, 250g, 300g, 500g, 700g, 1kg, 1,5kg, 2kg, 2,5kg, 3kg.",
    textPackageEN: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",
    textPackageES: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg.",

    textPackagingPL: "Karton, paleta",
    textPackagingEN: "Cartons, pallet",
    textPackagingES: "Cajas, palé"
  },
  {
    id: 11,
    idCategory: 4,
    imgCategory: [Sausages_packed,Salchichas,Salchichas_packed,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Polskie parówki z kurczaka",
    nameCategoryEN: "Polish chicken sausages",
    nameCategoryES: "Salchichas de pollo polacas",

    textValuePL: "Wartość energetyczna: 976 kJ / 235 kcal \n Tłuszcz: 19,0 g, w tym kwasy tłuszczowe nasycone: 6,5 g \n Węglowodany: 4,5 g, w tym cukry: 0,5 g \n Białko: 11 g \n Sól: 2 g",
    textValueEN: "Energy value: 976 kJ / 235 kcal \n Fat: 19.0 g, including saturated fatty acids: 6.5 g \n Carbohydrates: 4.5 g, including sugars: 0.5 g \n Protein: 11 g \n Salt: 2 g",
    textValueES: "Valor energético: 976 kJ / 235 kcal \n Grasa: 19,0 g, de las cuales grasas saturadas: 6,5 g \n Carbohidratos: 4,5 g, de los cuales azúcares: 0,5 g \n Proteínas: 11 g \n Sal: 2 g",

    textPackagePL: "VAC lub MAP 200 g, 300 g/340 g, 600 g, 1000 g.",
    textPackageEN: "VAC or MAP 200 g, 300g/340g, 600g, 1000g.",
    textPackageES: "VAC o MAP 200 g, 300 g/340 g, 600 g, 1000 g.",

    textPackagingPL: "Kartony - 60 sztuk po 200 gramów w każdym kartonie",
    textPackagingEN: "Carton box - 60 pieces of 200 grams in each carton",
    textPackagingES: "Caja de cartón - 60 piezas de 200 gramos en cada caja"
  },
  {
    id:12,
    idCategory: 4,
    imgCategory: [Sausages2,Chorizo,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Chorizo",
    nameCategoryEN: "Chorizo",
    nameCategoryES: "Chorizo",

    textValuePL: "Wartość energetyczna: 760 kJ / 183 kcal \n Tłuszcz: 22 g, w tym kwasy tłuszczowe nasycone: 5 g \n Węglowodany: 2,1 g, w tym cukry: 0,5 g \n Białko: 27,0 g \n Sól: 2,5 g",
    textValueEN: "Energy value: 760 kJ / 183 kcal \n Fat: 22 g, including saturated fatty acids: 5 g \n Carbohydrates: 2.1 g, including sugars: 0.5 g \n Protein: 27.0 g \n Salt: 2.5 g",
    textValueES: "Valor energético: 760 kJ / 183 kcal \n Grasa: 22 g, de las cuales grasas saturadas: 5 g \n Carbohidratos: 2,1 g, de los cuales azúcares: 0,5 g \n Proteínas: 27,0 g \n Sal: 2,5 g",

    textPackagePL: "200 g, 250 g, 500 g, 700 g, 1 kg, 1,5 kg, 2 kg",
    textPackageEN: "200g, 250g, 500g, 700g, 1kg, 1.5kg, 2kg",
    textPackageES: "200 g, 250 g, 500 g, 700 g, 1 kg, 1,5 kg, 2 kg",

    textPackagingPL: "Karton, paleta",
    textPackagingEN: "Cartons, pallet",
    textPackagingES: "Cajas, palé"
  },
  {
    id: 13,
    idCategory: 4,
    imgCategory: [Sausages3,Serdelka_packed,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Polskie Serdelki",
    nameCategoryEN: "Polish Serdelka",
    nameCategoryES: "Serdelka polacas",

    textValuePL: "Wartość energetyczna: 976 kJ / 235 kcal \n Tłuszcz: 19 g, w tym kwasy tłuszczowe nasycone: 6,5 g \n Węglowodany: 4,5 g, w tym cukry: 0,5 g \n Białko: 11,0 g \n Sól: 2 g",
    textValueEN: "Energy value: 976 kJ / 235 kcal \n Fat: 19 g, including saturated fatty acids: 6.5 g \n Carbohydrates: 4.5 g, including sugars: 0.5 g \n Protein: 11.0 g \n Salt: 2 g",
    textValueES: "Valor energético: 976 kJ / 235 kcal \n Grasa: 19 g, de las cuales grasas saturadas: 6,5 g \n Carbohidratos: 4,5 g, de los cuales azúcares: 0,5 g \n Proteínas: 11,0 g \n Sal: 2 g",

    textPackagePL: "200 g, 300 g, 340 g, 400 g, 600 g, 1000 g",
    textPackageEN: "200g, 300g, 340g, 400g, 600g, 1000g",
    textPackageES: "200 g, 300 g, 340 g, 400 g, 600 g, 1000 g",

    textPackagingPL: "Karton 400x200x250 mm, w kartonie 24 sztuki x 0,5 kg = 12 kg; 96 kartonów na palecie; waga netto produktu na palecie 1152 kg",
    textPackagingEN: "Carton 400x200x250 mm, in a carton 24 pcs x 0.5 kg = 12 kg; 96 cartons on a pallet; net weight of the product on the pallet 1152 kg",
    textPackagingES: "Caja 400x200x250 mm, en una caja 24 piezas x 0,5 kg = 12 kg; 96 cajas en un palé; peso neto del producto en el palé 1152 kg"
    
  },
  {
    id: 14,
    idCategory: 4,
    imgCategory: [Salami,Salami_in_package,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Salami klasyczne",
    nameCategoryEN: "Salami Classic",
    nameCategoryES: "Salami Clásico",

    textValuePL: "Wartość energetyczna: 760 kJ / 183 kcal \n Tłuszcz: 22 g, w tym kwasy tłuszczowe nasycone: 5 g \n Węglowodany: 5 g, w tym cukry: 2,1 g \n Białko: 25,0 g \n Sól: 2,5 g",
    textValueEN: "Energy value: 760 kJ / 183 kcal \n Fat: 22 g, including saturated fatty acids: 5 g \n Carbohydrates: 5 g, including sugars: 2.1 g \n Protein: 25.0 g \n Salt: 2.5 g",
    textValueES: "Valor energético: 760 kJ / 183 kcal \n Grasa: 22 g, de las cuales grasas saturadas: 5 g \n Carbohidratos: 5 g, de los cuales azúcares: 2,1 g \n Proteínas: 25,0 g \n Sal: 2,5 g",

    textPackagePL: "200 g, 300 g, 340 g, 400 g, 600 g, 1000 g",
    textPackageEN: "200g, 300g, 340g, 400g, 600g, 1000g",
    textPackageES: "200 g, 300 g, 340 g, 400 g, 600 g, 1000 g",

    textPackagingPL: "Karton 400x300x185 mm, w kartonie 30 sztuk x 0,5 kg = 15 kg; 88 kartonów na palecie; waga netto produktu na palecie 1320 kg",
    textPackagingEN: "Carton 400x300x185 mm, in a carton 30 pcs x 0.5 kg = 15 kg; 88 cartons on a pallet; net weight of the product on the pallet 1320 kg",
    textPackagingES: "Caja 400x300x185 mm, en una caja 30 piezas x 0,5 kg = 15 kg; 88 cajas en un palé; peso neto del producto en el palé 1320 kg"
    
  },
  {
    id: 15,
    idCategory: 5,
    imgCategory: [Spread,Mortadella_packed_red,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Pasztet kanapkowa z kurczaka",
    nameCategoryEN: "Chicken sandwich spread",
    nameCategoryES: "Paté de pollo para sándwich",

    textValuePL: "Wartość energetyczna: 651 kJ / 157 kcal \n Tłuszcz: 11 g, w tym kwasy tłuszczowe nasycone: 5 g \n Węglowodany: 2,7 g, w tym cukry: 0,5 g \n Białko: 13 g \n Sól: 2,2 g",
    textValueEN: "Energy value: 651 kJ / 157 kcal \n Fat: 11 g, including saturated fatty acids: 5 g \n Carbohydrates: 2.7 g, including sugars: 0.5 g \n Protein: 13 g \n Salt: 2.2 g",
    textValueES: "Valor energético: 651 kJ / 157 kcal \n Grasa: 11 g, de las cuales grasas saturadas: 5 g \n Carbohidratos: 2,7 g, de los cuales azúcares: 0,5 g \n Proteínas: 13 g \n Sal: 2,2 g",

    textPackagePL: "250 g, 500 g, 1 kg, 1,5 kg, 2 kg, 2,5 kg, 3 kg",
    textPackageEN: "250g, 500g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg",
    textPackageES: "250 g, 500 g, 1 kg, 1,5 kg, 2 kg, 2,5 kg, 3 kg",

    textPackagingPL: "Kartony, palety",
    textPackagingEN: "Cartons, pallets",
    textPackagingES: "Cajas, palés"
  },
  {
    id: 16,
    idCategory: 5,
    imgCategory: [Szynkovka,Szynkovka_pack,Mortadella_packed,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Szynkowka",
    nameCategoryEN: "Szynkovka",
    nameCategoryES: "Szynkowka",

    textValuePL: "Wartość energetyczna: 976 kJ / 235 kcal \n Tłuszcz: 19 g, w tym kwasy tłuszczowe nasycone: 6,5 g \n Węglowodany: 4,5 g, w tym cukry: 0,5 g \n Białko: 11 g \n Sól: 2 g",
    textValueEN: "Energy value: 976 kJ / 235 kcal \n Fat: 19 g, including saturated fatty acids: 6.5 g \n Carbohydrates: 4.5 g, including sugars: 0.5 g \n Protein: 11 g \n Salt: 2 g",
    textValueES: "Valor energético: 976 kJ / 235 kcal \n Grasa: 19 g, de las cuales grasas saturadas: 6,5 g \n Carbohidratos: 4,5 g, de los cuales azúcares: 0,5 g \n Proteínas: 11 g \n Sal: 2 g",

    textPackagePL: "200 g, 250 g, 300 g, 500 g, 700 g, 1 kg, 1,5 kg, 2 kg, 2,5 kg, 3 kg",
    textPackageEN: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg",
    textPackageES: "200 g, 250 g, 300 g, 500 g, 700 g, 1 kg, 1,5 kg, 2 kg, 2,5 kg, 3 kg",

    textPackagingPL: "Karton 400x200x250 mm, w kartonie 24 sztuki x 0,5 kg = 12 kg; 96 kartonów na palecie; waga netto produktu na palecie 1152 kg",
    textPackagingEN: "Carton 400x200x250 mm, in a carton 24 pcs x 0.5 kg = 12 kg; 96 cartons on a pallet; net weight of the product on the pallet 1152 kg",
    textPackagingES: "Caja 400x200x250 mm, en una caja 24 piezas x 0,5 kg = 12 kg; 96 cajas en un palé; peso neto del producto en el palé 1152 kg"
    
  },
  {
    id: 17,
    idCategory: 5,
    imgCategory: [Chicken_ham1,Chicken_ham,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Szynka z piersi kurczaka",
    nameCategoryEN: "Chicken breast ham",
    nameCategoryES: "Jamón de pechuga de pollo",

    textValuePL: "Wartość energetyczna: 580 kJ / 139 kcal \n Tłuszcz: 8,9 g, w tym kwasy tłuszczowe nasycone: 3,4 g \n Węglowodany: 3,7 g, w tym cukry: 0,5 g \n Białko: 10,4 g \n Sól: 2,1 g",
    textValueEN: "Energy value: 580 kJ / 139 kcal \n Fat: 8.9 g, including saturated fatty acids: 3.4 g \n Carbohydrates: 3.7 g, including sugars: 0.5 g \n Protein: 10.4 g \n Salt: 2.1 g",
    textValueES: "Valor energético: 580 kJ / 139 kcal \n Grasa: 8,9 g, de las cuales grasas saturadas: 3,4 g \n Carbohidratos: 3,7 g, de los cuales azúcares: 0,5 g \n Proteínas: 10,4 g \n Sal: 2,1 g",

    textPackagePL: "200 g, 250 g, 300 g, 500 g, 700 g, 1 kg, 1,5 kg, 2 kg, 2,5 kg, 3 kg",
    textPackageEN: "200g, 250g, 300g, 500g, 700g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg",
    textPackageES: "200 g, 250 g, 300 g, 500 g, 700 g, 1 kg, 1,5 kg, 2 kg, 2,5 kg, 3 kg",

    textPackagingPL: "Kartony, palety",
    textPackagingEN: "Cartons, pallets",
    textPackagingES: "Cajas, palés"
  },
  {
    id: 18,
    idCategory: 5,
    imgCategory: [Picadillo,Picadillo_packed,WhitePallet],
    pacing1: Photo1,
    pacing2: Photo2,
    nameCategoryPL: "Picadillo",
    nameCategoryEN: "Picadillo",
    nameCategoryES: "Picadillo",

    textValuePL: "Wartość energetyczna: 392,5 kJ / 94 kcal \n Tłuszcz: 21,8 g, w tym kwasy tłuszczowe nasycone: 6,2 g \n Węglowodany: 23,5 g, w tym cukry: 4,2 g \n Białko: 27,8 g \n Sól: 0,8 g",
    textValueEN: "Energy value: 392.5 kJ / 94 kcal \n Fat: 21.8 g, including saturated fatty acids: 6.2 g \n Carbohydrates: 23.5 g, including sugars: 4.2 g \n Protein: 27.8 g \n Salt: 0.8 g",
    textValueES: "Valor energético: 392,5 kJ / 94 kcal \n Grasa: 21,8 g, de las cuales grasas saturadas: 6,2 g \n Carbohidratos: 23,5 g, de los cuales azúcares: 4,2 g \n Proteínas: 27,8 g \n Sal: 0,8 g",

    textPackagePL: "250 g, 500 g, 1 kg, 1,5 kg, 2 kg, 2,5 kg, 3 kg",
    textPackageEN: "250g, 500g, 1kg, 1.5kg, 2kg, 2.5kg, 3kg",
    textPackageES: "250 g, 500 g, 1 kg, 1,5 kg, 2 kg, 2,5 kg, 3 kg",

    textPackagingPL: "Karton, paleta",
    textPackagingEN: "Cartons, pallets",
    textPackagingES: "Cajas, palé"
     
  },

];

export default dataProduct;
