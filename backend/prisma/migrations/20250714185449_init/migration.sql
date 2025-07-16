-- CreateTable
CREATE TABLE "labels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" INTEGER
);

-- CreateTable
CREATE TABLE "movements" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "concept" TEXT,
    "amount" REAL NOT NULL,
    "label" INTEGER,
    "date" TEXT,
    CONSTRAINT "movements_label_fkey" FOREIGN KEY ("label") REFERENCES "labels" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
