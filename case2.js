var comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          { commentId: 111, commentContent: "Haai juga hai jugaa" },
          { commentId: 112, commentContent: "Haai juga hai jugaa" },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          { commentId: 121, commentContent: "Haai juga hai jugaa" },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];


function hitungKomentar(list) {
  var total = 0;

  for (var i = 0; i < list.length; i++) {
    total = total + 1;

    if (list[i].replies !== undefined) {
      total = total + hitungKomentar(list[i].replies);
    }
  }

  return total;
}

var result = hitungKomentar(comments);
console.log("Total komentar berjumlah:", result);