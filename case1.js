const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

//1. Buah apa saja yang dimiliki Andi? (fruitName)

const namaBuah = fruits.map(function (fruitName) {
  return fruitName.fruitName;
});

console.log("1. Buah yang dimiliki Andi:", namaBuah);

//2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?

var wadah = {};

for (var i = 0; i < fruits.length; i++) {
  var tipe = fruits[i].fruitType;
  var nama = fruits[i].fruitName;

  if (wadah[tipe] === undefined) {
    wadah[tipe] = [];
  }

  wadah[tipe].push(nama);
}

console.log("2. Jumlah wadah:", Object.keys(wadah).length);
for (var key in wadah) {
  console.log("   Wadah", key, "isi:", wadah[key].join(", "));
}

//3. Berapa total stock buah yang ada di masing-masing wadah?

var totalStock = {};

for (var i = 0; i < fruits.length; i++) {
  var tipe = fruits[i].fruitType;
  var stok = fruits[i].stock;

  if (totalStock[tipe] === undefined) {
    totalStock[tipe] = 0;
  }

  totalStock[tipe] += stok;
}

console.log("3. Total stok di setiap wadah:");
for (var key in totalStock) {
  console.log("   " + key + ":", totalStock[key]);
}

//4. Apakah ada komentar terkait kasus di atas?

console.log("4. Komentar:");
console.log("- Ada duplikasi fruitId = 5 (harusnya unik).");
console.log("- Nama buah ada yang beda penulisan (Apel dengan apel, Kurma dengan KURMA).");